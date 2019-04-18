import { LOGIN_START, LOGIN_RESOLVED } from '../actions'

const initialState = {
    friends: [],
    deletingFriends: false,
    fetchingFriends: false,
    logginIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
        return {
            ...state,
            logginIn: true
        }
        case LOGIN_RESOLVED:
        return {
            ...state,
            logginIn: false
        }

        default:
        return state
    }
}