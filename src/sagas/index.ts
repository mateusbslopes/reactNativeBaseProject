import {
    put,
    take,
    all,
    call,
} from 'redux-saga/effects'
import { setUser as setUserAction, FETCH_USER } from '../store/ducks/git-user'
import Api from '../api'
import { GitUserPayload } from '../types'

function* fetchUser(username: string) {
    const user = yield call(Api.fetchUser, username)
    yield put(setUserAction(user))
}

function* watchFetchUser() {
    while (true) {
        const { payload: { username } }: GitUserPayload = yield take(FETCH_USER)
        yield call(fetchUser, username)
    }
}

export default function* root(): Generator {
    yield all([
        watchFetchUser(),
    ])
}
