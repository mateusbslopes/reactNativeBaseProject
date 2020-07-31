import React from 'react'
import Main from './src/Main'
import store from './src/store/ducks'
import { Provider } from 'react-redux'

export { store }

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}