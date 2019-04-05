import jwt from 'jsonwebtoken'
import CookieConfig from './CookieConfig'

const SetLogin_Client = (userData, res) => {
	var token = jwt.sign({ userData: userData }, process.env.JWT_SECRET, {
		expiresIn: maxAge
	})
	res.cookie(process.env.COOKIE_NAME, { token: token }, CookieConfig())
	return token
}

export default SetLogin_Client
