import jwt from 'jsonwebtoken'
import CookieConfig from './CookieConfig'

const SetLogin_Client = (userData, res, secret, expiresIn) => {
	var token = jwt.sign({ userData: userData }, secret, {
		expiresIn: expiresIn
	})
	res.cookie(process.env.COOKIE_NAME, { token: token }, CookieConfig(expiresIn))
	return token
}

export default SetLogin_Client
