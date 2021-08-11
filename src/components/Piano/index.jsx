import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
// 音符文件
import notes from './notes.js'
// 演示：月亮代表我的心
import moon from './songs/moon.js'
// 演示：富士山下
import fuji from './songs/fuji.js'
// 演示：后来
import later from './songs/later.js'
// 蒲公英的约定
import pgydyd from './songs/pgydyd.js'
// 梦伴
import dream from './songs/dream.js'
// 小幸运
import xxy from './songs/xxy.js'
// 音符和键盘的映射关系表
import pianoKeys from './pianoKeys.js'
import { countState, songState } from '../../store';
import { PianoStyle } from '../styles';

export default function Header() {
  const [count, setCount] = useRecoilState(countState);
  const [song, setSong] = useRecoilState(songState);
  const [state, setState] = useState({ notes, pianoKeys });
  const timer = useRef();
  const interval = useRef();
  const refs = useRef({});
  const songRef = useRef([]);

  const handleSetSong = (song) => {
    // 构建新的数组，给它下标值来做索引
    let melody = [];
    song.map((item, index) => {
        melody.push({
            ...item,
            index
        })
    })
    // 处理成每30个音符一个数组，自动播放时候自动显示按键
    for (let j = 0; j < melody.length; j += 30) {
      setSong([...song, melody.slice(j, j + 30)]);
      songRef.current = [...song, melody.slice(j, j + 30)];
    }
}

  // 暂停播放
  const stopSong = () => {
    timer.current && clearTimeout(timer.current)
    setCount(0);
    setSong([]);
    songRef.current = [];
    console.log('reset')
  }

  const playNote = (name) => {
    console.log(state.notes[name])
    if (!state.notes[name]["isPlay"]) {
      // console.log(name)
      let audio = refs.current[name].childNodes[1]
      refs.current[name].style.background = `linear-gradient(-20deg, #3330fb, #000, #222)`
      let timer = setTimeout(() => {
        // console.log(this[name].getAttribute('data-type'))
        refs.current[name].getAttribute('data-type') === 'white' ? refs.current[name].style.background = `linear-gradient(-30deg, #f8f8f8, #fff)` : this[name].style.background = `linear-gradient(-20deg, #222, #000, #222)`
        // clearInterval(timer)
        clearTimeout(timer)
      }, 1000)
      audio.currentTime = 0
      audio.play()
      // 设置对应的音符为正在播放，相当于节流的开关
      state.notes[name]["isPlay"] = true
      let isPlay = setTimeout(() => {
        state.notes[name]["isPlay"] = false
        clearTimeout(isPlay)
      }, 500)
    }
  }

  // 处理单音
  // 处理 ['++3','--4','5.']
  const handleString = (song, offset) => {
    // 处理字母结果 CDEFG
    let letter = song[offset].match(/[0-9]/g)[0]
    // 处理 --7 判断有多少个-
    let subKey = song[offset].split('-').length - 1
    // 处理 ++7 判断有多少个+
    let addKey = song[offset].split('+').length - 1
    // 处理 7.. 判断有多少个.
    let pointKey = song[offset].split('.').length - 1
    // 处理 #7 判断有多少个.
    let halfKey = song[offset].split('#').length - 1
    let note;
    let key;
    let time;
    switch (letter) {
      // 休止符
      case '0':
        return time = 1000
        break;
      case '1':
        note = 'C'
        break;
      case '2':
        note = 'D'
        break;
      case '3':
        note = 'E'
        break;
      case '4':
        note = 'F'
        break;
      case '5':
        note = 'G'
        break;
      case '6':
        note = 'A'
        break;
      case '7':
        note = 'B'
        break;
    }
    switch (subKey) {
      case 0:
        key = 4
        break;
      case 1:
        key = 3
        break;
      case 2:
        key = 2
        break;
    }
    switch (addKey) {
      case 0:
        key = 4
        break;
      case 1:
        key = 5
        break;
      case 2:
        key = 6
        break;
    }
    switch (pointKey) {
      case 0:
        time = 500
        break;
      case 1:
        time = 1000
        break;
      case 2:
        time = 1500
        break;
    }
    console.log(`${note + (halfKey > 0 ? '#' : '') + key}`)
    playNote(`${note + (halfKey > 0 ? '#' : '') + key}`)
    return time
  }

  // 处理多音
  // 处理 ['++3--45.']
  const handleStrings = (song, offset) => {
    let reg = /[0-9]/g
    let str = song[offset]
    let order = 1
    let result = []
    while (true) {
      let temp = reg.exec(str)
      if (temp) {
        result.push({
          text: temp[0], index: temp.index, order: order
        })
        order++
      } else {
        break
      }
    }
    result.map((item) => {
      switch (str[item.index - 1]) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
          break;
        // 处理+5
        case '+':
          item.text = `+${item.text}`
          switch (str[item.index - 2]) {
            // 处理++5
            case '+':
              item.text = `+${item.text}`
              break;
          }
          break;
        case '-':
          item.text = `-${item.text}`
          switch (str[item.index - 2]) {
            case '-':
              item.text = `-${item.text}`
              break;
          }
          break;
        // 处理++#5
        case '#':
          item.text = `#${item.text}`
          switch (str[item.index - 2]) {
            case '-':
              item.text = `-${item.text}`
              switch (str[item.index - 3]) {
                case '-':
                  item.text = `-${item.text}`
                  break;
              }
              break;
            case '+':
              item.text = `+${item.text}`
              switch (str[item.index - 3]) {
                case '+':
                  item.text = `+${item.text}`
                  break;
              }
              break;
          }
          break;
      }
      // 处理5..
      switch (str[item.index + 1]) {
        case '.':
          item.text = `${item.text}.`
          switch (str[item.index + 2]) {
            // 处理5..
            case '.':
              item.text = `${item.text}.`
              break;
          }
          break;
      }
    })
    // 转化为['3','4','5']
    let notes = result.map((item) => {
      return item.text
    })
    // 存放多个按键的时间
    let time = []
    notes.forEach((item, index) => {
      time.push(handleString(notes, index))
    })
    // 取最大的时间返回
    return time.sort()[0]
  }

  // 使用递归弹奏 具有时间效果
  const playSong = (song) => {
    handleSetSong([...song])
    let offset = 0
    let time = 0
    let playSongAsync = async () => {
      // 右边是从外部来中断递归
      if (offset < song.length && songRef.current.length > 0) {
        switch (typeof song[offset]) {
          // 简谱2演奏方法 根据 ++12345--6. 简单旋律情况
          case 'string':
            let letters = song[offset].match(/[0-9]/g)
            switch (letters.length) {
              case 1:
                time = handleString(song, offset)
                break
              default:
                time = handleStrings(song, offset)
                break
            }
            break;
          // 简谱1演奏方法 根据 CDEFGAB，复杂旋律情况，比如有和弦
          case 'object':
            console.log(song[offset]['note'])
            time = song[offset]['time'];
            playNote(song[offset]['note'])
            break;
          case 'number':
            // 休止符
            switch (song[offset]) {
              case 0:
                time = 1000
                break
            }
            break;
        }
        await new Promise((resolve) => {
          let timer = setTimeout(() => {
            clearInterval(timer)
            resolve()
          }, time)
        })
        offset++
        // console.log(offset)
        // console.log(store.data.count)
        // 这里太久都忘了为什么 offset 是怎么变的了，用强制更新让 count 更新来激活暂停按钮吧
        // update()
        // 自定义事件，跟下面底部的音符自动跳动结合
        setCount(prevCount => prevCount + 1);
        playSongAsync()
      } else {
        // 暂停播放
        clearTimeout(timer.current)
        setSong([]);
        songRef.current = [];
        setCount(0);
        return;
      }
    }
    playSongAsync()
  }
  // 使用定时器弹奏
  // playSongByInterval
  const playSongByInterval = (song) => {
    clearInterval(interval.current)
    let offset = 0
    let time = 0
    interval.current = setInterval(() => {
      if (offset < song.length) {
        switch (typeof song[offset]) {
          // 简谱2演奏方法 根据 ++12345--6. 简单旋律情况
          case 'string':
            let letters = song[offset].match(/[0-9]/g)
            switch (letters.length) {
              case 1:
                time = handleString(song, offset)
                break
              default:
                time = handleStrings(song, offset)
                break
            }
            break;
          // 简谱1演奏方法 根据 CDEFGAB，复杂旋律情况，比如有和弦
          case 'object':
            console.log(song[offset]['note'])
            time = song[offset]['time'];
            playNote(song[offset]['note'])
            break;
          case 'number':
            // 休止符
            switch (song[offset]) {
              case 0:
                time = 1000
                break
            }
            break;
        }
        ++offset
      } else {
        clearInterval(interval.current)
      }
    }, 500)
  }

  // 录音
  const recordSong = () => { }
  useEffect(() => {
    const onkeydown = (event) => {
      // console.log(event)
      var e = event || window.event || arguments.callee.caller.arguments[0];
      let playNote = (key) => {
        if (e.shiftKey === true) {
          playNote(`${key}2`)
        } else if (e.altKey === true) {
          playNote(`${key}5`)
        } else if (e.ctrlKey === true) {
          playNote(`${key}3`)
        } else if (e.metaKey === true) {
          playNote(`${key}6`)
          e.returnValue = false;
        } else {
          playNote(`${key}4`)
        }
      }
      if (e && 49 <= e.keyCode && e.keyCode <= 55) {
        // console.log({
        //   ...this
        // })
        switch (e.keyCode) {
          case 49:
            playNote('C')
            break;
          case 50:
            playNote('D')
            break;
          case 51:
            playNote('E')
            break;
          case 52:
            playNote('F')
            break;
          case 53:
            playNote('G')
            break;
          case 54:
            playNote('A')
            break;
          case 55:
            playNote('B')
            break;
        }
      }
      if (e && (81 === e.keyCode || e.keyCode === 87 || e.keyCode === 69 || e.keyCode === 82 || e.keyCode === 84)) {
        switch (e.keyCode) {
          case 81:
            playNote('C#')
            break;
          case 87:
            playNote('D#')
            break;
          case 69:
            playNote('F#')
            break;
          case 82:
            playNote('G#')
            break;
          case 84:
            playNote('A#')
            break;
        }
      }
    }
    document.addEventListener('keydown', onkeydown);
    return () => document.removeEventListener('keydown', onkeydown);
  }, []);

  return (
    <PianoStyle>
      <div className="">
        <div className="piano">
          {state.pianoKeys.map((item) => {
            return (
              <div className="piano-key">
                <div data-type="white" ref={e => { refs.current[item.white.name] = e }} className="piano-key__white"
                  onClick={() => playNote(item.white.name)} data-key={item.white.keyCode}
                  data-note={item.white.name}>
                  <span className="piano-note">{item.white.name}</span>
                  <audio preload="auto" src={state.notes[item.white.name].url} hidden='true' data-note={item.white.name}
                    className='audioEle'></audio>
                </div>
                <div data-type="black" ref={e => { refs.current[item.black.name] = e }} style={{
                  display: item.black.name ? 'block' : 'none'
                }} className="piano-key__black" onClick={() => playNote(item.black.name)} data-key={item.black.keyCode}
                  data-note={item.black.name}>
                  <span className="piano-note" style={{ color: "#fff" }}>{item.black.name}</span>
                  <audio preload="auto" src={state.notes[item.black.name] && state.notes[item.black.name].url}
                    hidden='true' data-note={item.black.name} className='audioEle'></audio>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p>Click the button below to let the piano play the song automatically:</p>
          <p>点击下面按钮让钢琴自动演奏歌曲:{count > 0 ? '1' : '0'}</p>
          <div>
            {count > 0 ? (
              <button onClick={stopSong} className="btn btn-outline-info btn-stop">Stop & 暂停</button>
            ) : (
              <div>
                <button onClick={() => playSong(moon)} className="btn btn-outline-info">月亮代表我的心</button>
                <button onClick={() => playSong(pgydyd)} className="btn btn-outline-info">蒲公英的约定</button>
                <button onClick={() => playSong(xxy)} className="btn btn-outline-info">小幸运</button>
                <button onClick={() => playSong(fuji)} className="btn btn-outline-info">富士山下&爱情转移</button>
                <button onClick={() => playSong(dream)} className="btn btn-outline-info">梦伴</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PianoStyle>
  );
}