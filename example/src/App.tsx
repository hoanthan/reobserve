import React from 'react'

import { Async } from 'reobs'
import { BehaviorSubject } from 'rxjs'

const now = new BehaviorSubject(new Date().toLocaleString())
setInterval(() => {
  now.next(new Date().toLocaleString())
}, 1000)

const App = () => {
  return <Async as={({children}) => <h2>{children}</h2>}>
    {now}
  </Async>
}

export default App
