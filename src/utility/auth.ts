import { Auth } from 'aws-amplify'

export async function isUserAuthenticated() {
	try {
		await Auth.currentAuthenticatedUser()
		return true
	} catch {
		return false
	}
}
