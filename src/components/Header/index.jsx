import React from 'react';
import { HeaderStyle } from '../styles';

export default function Header() {
  return (
    <HeaderStyle>
      <div>
        <div style={{ background: "rgb(51, 51, 51) none repeat scroll 0% 0%" }}>
          <div className="container">
            <div className="text-sm-center text-white py-5">
              <h1>React Piano</h1>
              <p>An interactive piano keyboard for React. Supports custom sounds,<br className="d-none d-sm-block" />
                touch/click/keyboard events, and fully auto play song.</p>
              <div className="mt-4">
                <a className="btn btn-outline-light btn-lg" href="https://github.com/yinguangyao/react-piano">View docs on
                  Github
                </a>
                <a className="btn btn-outline-light btn-lg" href="https://github.com/yinguangyao/react-piano">查看该项目Github地址
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="">Try it by clicking, tapping, or using your keyboard 1 to 9:</p>
          <p className="">鼠标点击钢琴键或者键盘按数字键 1 ~ 9:</p>
          <div style={{ color: "rgb(119, 119, 119)" }}><svg fill="currentColor" preserveAspectRatio="xMidYMid meet"
            height="32" width="32" viewBox="0 0 40 40" style={{ verticalAlign: "middle" }}>
            <g>
              <path d="m33.4 20l-13.4 13.4-13.4-13.4 2.5-2.3 9.3 9.3v-20.4h3.2v20.4l9.4-9.3z"></path>
            </g>
          </svg></div>
        </div>
      </div>
    </HeaderStyle>
  );
}