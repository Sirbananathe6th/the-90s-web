export default function() {
	const weclomeTextList = [
		'Welcome to my awesome website!!!',
		'Hello!!!',
		'Welcome!!!',
		'Welcome to my website!!!',
		'My internet page!',
		'hi netizen!',
		'MY WEBSITE',
		'WARNING: ONLY COOL PEOPLE ARE ALLOWED TO VISIT THIS WEBSITE',
		'my place on the information superhighway!!',
	]
	const randomIndex = Math.floor(Math.random() * weclomeTextList.length)
	return weclomeTextList[randomIndex]
}