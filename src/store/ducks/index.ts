import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import person from './person'
import gitUser from './git-user'
import theme from './theme'
import saga from '../../sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export default createStore(
    combineReducers({
        person,
        theme,
        gitUser,
    }), composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(saga)
