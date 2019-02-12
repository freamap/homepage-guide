import { User } from '~/types/User'

export interface ProfileState {
  user?: User
  error: boolean
}
