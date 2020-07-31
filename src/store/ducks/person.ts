import { PersonPayload } from '../../types'

// Actions
export const SET_FIRST_NAME = 'SET_FIRST_NAME'

export const setFirstName = (firstName: string) => ({
    type: SET_FIRST_NAME,
    payload: { firstName },
})

const defaultState = {
    firstName: '',
}

// Reducer
export default function person(state = defaultState, { type, payload }: PersonPayload) {
    switch (type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: payload.firstName }
        default:
            return state
    }
}
