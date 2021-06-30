import React from 'react'
import { Observable } from 'rxjs'
import useObservable$ from '../../hooks/useObservable$'

type Props = {
  children: Observable<any>
  as?: React.ComponentType
}

const Async: React.FC<Props> = ({ children, as }) => {
  const value = useObservable$(children)

  return React.createElement(as || React.Fragment, {
    children: value
  } as any)
}

export default Async
