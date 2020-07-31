import { ThemePayload, Theme } from '../../types';

// Actions
export const SET_THEME = 'SET_THEME';

export const setTheme = (theme: string): any => ({
    type: SET_THEME,
    payload: { theme },
});

const defaultState = {
    name: 'dark',
};

// Reducer
export default function (state = defaultState, { type, payload }: ThemePayload): Theme {
    switch (type) {
        case SET_THEME:
            return { name: payload.theme };
        default:
            return state;
    }
}
