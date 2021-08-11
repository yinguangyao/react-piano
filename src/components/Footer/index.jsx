import React, { useEffect } from 'react';
import { useRecoilState, useRecoilCallback } from 'recoil';
import { countState, songState } from '../../store';
import { FooterStyle } from '../styles';
 // 演示：月亮代表我的心
 import moon from '../Piano/songs/moon.js'
 // 按键和音符的关系
 import keys from './key.js'

export default function Footer() {
	const count = useRecoilState(countState);
	const [song, setSong] = useRecoilState(songState);

	return (
		<FooterStyle>
			<div className="app-footer">
				<hr className="mt-5" />
				<div className="row mt-5">
					<div className="col">
						<div className="text-center">
							<p className="mt-4">
								You can click on the keyboard and play the melody that belongs to you. Here is an example of a
								piano piece:
							</p>
							<p>你可以点击键盘依顺序按以下键，控制好节奏演奏属于你的旋律，下面是一首钢琴曲的例子:</p>
							<p className="mt-4">Enjoy it!</p>
							{song.map((item, index) => {
								if (item[0] && item[0].note) {
									return (
										<p className="mt-3 code" key={index}>
											<code className="p-2 text-dark">{
												item.map((item2) => {
													if (item2.note) {
														return (
															<span style={{ color: count === item2.index ? 'red' : 'black' }}>{keys[item2.note]},</span>
														)
													}
												})}
											</code>
										</p>)
								}
							})}
						</div>
					</div>
				</div>
				<div className="bg-yellow mt-5 py-5">
					<div className="container">
						<div className="text-center text-secondary">Made with <span role="img"
							aria-label="keyboard emoji">🎵</span>by <a className="text-secondary"
								href="https://github.com/yinguangyao"><strong>@Yin Guangyao</strong></a></div>
					</div>
				</div>
			</div>
		</FooterStyle>
	);
}