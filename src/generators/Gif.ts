export default function randomGif() {
	const gifList = [
		undefined,
		'https://web.archive.org/web/20090821222115/http://geocities.com/SunsetStrip/Lounge/7650/dollarspindownd.gif',
		'https://blog.archive.org/wp-content/uploads/2016/10/dancing_baby.gif',
		'https://blog.archive.org/wp-content/uploads/2016/11/landing-a.gif',
		'https://blog.archive.org/wp-content/uploads/2016/11/surfcpu.gif',
		'https://blog.archive.org/wp-content/uploads/2016/11/line.gif',
		'https://i.imgur.com/r6lnOJ6.gif',
		'https://media0.giphy.com/media/xvKkJXBpjW4m5VAVks/giphy.gif?cid=6c09b952jj7naa0lmfhk9lcyg26nwdlfxe2d1a52l8ksowjv&rid=giphy.gif&ct=s',
		'https://gifcities.org/assets/loading1.gif',
		'https://web.archive.org/web/20090724101500/http://www.geocities.com/pashathecat/Gifs_Jpgs/cs_ani_rainbowwalkcat.gif',
		'https://web.archive.org/web/20090830034125/http://www.geocities.com/dogandcatwars/dogandcatwars.gif',
		'https://web.archive.org/web/20090829061459if_/http://geocities.com/reyjascats/cat-relaxing.gif',
		'https://preview.redd.it/qvx8irtxhff81.jpg?width=640&crop=smart&auto=webp&s=a79bba6ab62b9aa73d6b79283431c65a8fa88d8b',
		'https://web.archive.org/web/20091023224141/http://geocities.com/catsareus_2000/CATONPIANO.gif',
		'https://web.archive.org/web/19970222175012im_/http://www1.geocities.com/Yosemite/8866/netscpe3.gif',
		'https://web.archive.org/web/20091021214904/http://www.geocities.com/mycatmaomao/x-hikashi13.gif',
		'https://cdn.vox-cdn.com/uploads/chorus_asset/file/8688491/hiE5vMs.gif',
		'https://uploads.guim.co.uk/2016/10/27/hamster2.gif',
		'https://uploads.guim.co.uk/2016/10/27/smoking-skull.gif',
		'https://media4.giphy.com/media/vGWZEktceb6HS/giphy.gif?cid=ecf05e4747x3o5ceh35atlikm6uoqj6q7syurb490nh6n9rj&rid=giphy.gif&ct=s',
		'https://media2.giphy.com/media/ZMh2h5FL02tMs/200w.webp?cid=ecf05e4747x3o5ceh35atlikm6uoqj6q7syurb490nh6n9rj&rid=200w.webp&ct=s',
		'https://media4.giphy.com/media/26VtnKCdw63SM/200.webp?cid=ecf05e47j12fzpid50ky0ipc461vdom285phuij38vb1lgbf&rid=200.webp&ct=s',
		'https://media4.giphy.com/media/dUC6HYIJMw6IA2cECV/giphy.gif?cid=790b7611b7f9d8434ce9da8779e950e816bbf882796cb6b8&rid=giphy.gif&ct=s',
		'https://media2.giphy.com/media/anjRJ4nv9WJzO/200w.webp?cid=ecf05e47lunjkpn0yl5ydaqglq1gsyqk4dplj197oexy34kq&rid=200w.webp&ct=g',
		'https://web.archive.org/web/20090829111449/http://geocities.com/xerxes_starfire/flyingsaucer.gif',
		'https://web.archive.org/web/20060930000603/http://www.geocities.com/nyrubsy/car_spins.gif',
	]
	const gif = gifList[Math.floor(Math.random() * gifList.length)]
	return gif
}