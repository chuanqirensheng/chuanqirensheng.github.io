'use strict';

var arr = ['http://a1.qpic.cn/psb?/V14S2YHb2S4C5J/i9TTdNccAI89as98zGWsZ5z1tWYGkml.Vc1pSEMw41Y!/b/dBcBAAAAAAAA&bo=4AGAAgAAAAARB1M!&rf=viewer_4&t=5', 'http://b160.photo.store.qq.com/psb?/V14S2YHb2S4C5J/DtZwcZZI2OUZktEPmjlJMlOdx9m4acMh7Un418bXPak!/b/dKAAAAAAAAAA&bo=SwKVAQAAAAAFAP4!&rf=viewer_4', 'http://b175.photo.store.qq.com/psb?/V14S2YHb2S4C5J/TJ0IiVy8jq1xv9VxtBXCvqCw5b*EvYMZIgLprn6Re*A!/b/dK8AAAAAAAAA&bo=VQOAAgAAAAAFAPc!&rf=viewer_4', 'http://b176.photo.store.qq.com/psb?/V14S2YHb2S4C5J/AZAaBpmNWpR9Ootlgc7RSAvYhgvzs0QohQ.of*c29rw!/b/dLAAAAAAAAAA&bo=3QFQAQAAAAAFAK4!&rf=viewer_4', 'http://b258.photo.store.qq.com/psb?/V14S2YHb2S4C5J/SPVa2sh5CTPVgXAZ9*vXRuEwr3la*Qv4AmDtyLrRavA!/b/dAIBAAAAAAAA&bo=8AJJAQAAAAAFAJk!&rf=viewer_4', 'http://b167.photo.store.qq.com/psb?/V14S2YHb2S4C5J/UUJCv8Jbn9enTXxKD*bnuaJ9C9VgmWiZvvdyqOPlzOk!/b/dKcAAAAAAAAA&bo=fwKEAQAAAAAFANs!&rf=viewer_4', 'http://b161.photo.store.qq.com/psb?/V14S2YHb2S4C5J/I3juYKR*cB92CWSHq7zYKdEE0SfuFOkC.DAVYlc3yqA!/b/dKEAAAAAAAAA&bo=JgN0AgAAAAAFAHA!&rf=viewer_4', 'http://b171.photo.store.qq.com/psb?/V14S2YHb2S4C5J/TpWyA2MhMITkzRkIVsJOV.5cmg*OWvVoNrBuSyqqmf4!/b/dKsAAAAAAAAA&bo=GAOyAQAAAAAFAIs!&rf=viewer_4'];
var ul = document.getElementById('hexGrid');
for (var i = 0; i < arr.length; i++) {
	ul.innerHTML += '<li class="hex">\n\t\t\t         <a class="hexIn" href=' + arr[i] + '>\n\t\t\t\t     <img src="' + arr[i] + '" alt="" />\n\t\t\t\t     <h1>\u6EE1\u8F7D\u8FD9\u56DE\u5FC6</h1>\n\t\t\t\t     <p>\u8BB0\u5FC6</p>\n\t\t\t         </a>\n\t\t             </li>';
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~视频~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~！！
var arrV = [{
	src: './vide/一个跑单的故事.mp4',
	name: '一个跑单的故事'
}, {
	src: './vide/热血重演.mp4',
	name: '热血重演'
}, {
	src: './vide/沙画功沙.mp4',
	name: '沙画攻城'
}, {
	src: './vide/白金区攻城战.mp4',
	name: '白金区攻城'
}, {
	src: './vide/回忆当年的传奇.mp4',
	name: '回忆当年的传奇'
}, {
	src: './vide/经典回忆 玩过的都懂.mp4',
	name: '经典回忆 玩过的都懂'
}, {
	src: './vide/配同名歌曲.mp4',
	name: '配同名歌曲'
}, {
	src: './vide/热血.mp4',
	name: '热血'
}, {
	src: './vide/热血怀旧版.mp4',
	name: '热血怀旧版'
}, {
	src: "./vide/盛大GM怪物攻城.mp4",
	name: '盛大GM怪物攻城'
}, {
	src: './vide/吐槽传奇永恒.mp4',
	name: '吐槽传奇永恒'
}, {
	src: './vide/我们曾今回忆过的.mp4',
	name: '我们曾今回忆过的'
}, {
	src: './vide/这熟悉的背景乐.mp4',
	name: '这熟悉的背景乐'
}];
var vide = document.getElementById('vide');
var va = document.getElementById('va'); //视频所在的DIV
for (var a = 0; a < arrV.length; a++) {
	var but = document.createElement('button');
	va.appendChild(but);
	but.innerText = arrV[a].name;
	but.dataset.src = arrV[a].src;
	but.onclick = function (e) {
		var target = e.currentTarget;
		console.log(target.dataset.src);
		vide.src = target.dataset.src;
	};
}