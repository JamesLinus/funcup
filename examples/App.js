import React from 'react'
import { createProvider } from 'funcup'
import Counter from './Counter'
import List from './List'

const App = (props) => {
  return (
    <div
      style={{
        padding: 48
      }}>
      <h1>funcup {props.count}</h1>
      <Counter />
      <List />
    </div>
  )
}

const init = {
  items: [],
  newItem: '',
  count: 0
}

export default createProvider(init)(App)
