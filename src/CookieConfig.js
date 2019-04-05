const CookieConfig = (maxAge) => {
	let config = {
		//expires and maxage do the same thing but in different browsers
		expires: new Date(Date.now() + maxAge),
		maxAge: maxAge,
		//do not allow access to the cookie from javascript
		httpOnly: true,
		//if if production mode, set secure cookie
		secure: process.env.NODE_ENV === 'production'
	}
	return config
}

export default CookieConfig
