const CookieConfig = () => {
	let config = {
		//expires and maxage do the same thing but in different browsers
		expires: new Date(Date.now() + process.env.MAX_AGE),
		maxAge: process.env.MAX_AGE,
		//do not allow access to the cookie from javascript
		httpOnly: true,
		//if if production mode, set secure cookie
		secure: process.env.NODE_ENV === 'production'
	}
	return config
}

export default CookieConfig
