import CookieConfig from './CookieConfig'

const Logout_Server = (req, res) => {
	let currentPayload = req.cookies[process.env.COOKIE_NAME].token
	console.log('make one file for importing the cookie payload across routes')
	res.clearCookie(
		process.env.COOKIE_NAME,
		{ token: currentPayload },
		CookieConfig()
	)
	res.status(200).json({ loggedout: true })
}

export default Logout_Server
