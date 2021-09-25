import * as UserActionCreators from './user'
import * as TodoActionCreateors from './todo'

export default {
    ...TodoActionCreateors,
    ...UserActionCreators
}