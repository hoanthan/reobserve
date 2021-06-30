# reobserve

> React + Rxjs utilities

[![NPM](https://img.shields.io/npm/v/reobserve.svg)](https://www.npmjs.com/package/reobserve) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reobs
```

## Usage

### With **Async** Component

```tsx
import React from 'react'

import { Async } from 'reobs'
import { BehaviorSubject } from 'rxjs'

const now = new BehaviorSubject(new Date().toLocaleString())
setInterval(() => {
  now.next(new Date().toLocaleString())
}, 1000)

const App = () => {
  return (
    <Async as={({children}) => <h2>{children}</h2>}>
      {now}
    </Async>
  )
}

export default App

```

## License

MIT © [hoanthan](https://github.com/hoanthan)
