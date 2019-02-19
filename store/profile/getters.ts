import { ProfileState } from './types'

export default {
  fullName (state: ProfileState): string {
    const { user } = state
    const firstName = (user && user.firstName) || ''
    const lastName = (user && user.lastName) || ''
    return `${firstName} ${lastName}`
  }
}
