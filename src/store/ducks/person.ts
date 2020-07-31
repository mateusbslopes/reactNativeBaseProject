import { PersonPayload, Person } from '../../types';

// Actions
export const SET_FIRST_NAME = 'SET_FIRST_NAME';

export const setFirstName = (firstName: string): any => ({
    type: SET_FIRST_NAME,
    payload: { firstName },
});

const defaultState = {
    firstName: '',
};

// Reducer
export default function person(state = defaultState, { type, payload }: PersonPayload): Person {
    switch (type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: payload.firstName };
        default:
            return state;
    }
}
