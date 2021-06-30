/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react'
import { Observable, Observer, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

export default function useObservable$<TIn = any, TOut = any>(
  input$: Observable<TIn>,
  observer?: Observer<TOut>
) {
  const destroy$ = new Subject<void>()
  const [value, setValue] = React.useState<TOut | undefined>()

  const onNext = useCallback((val: TOut) => {
    setValue(val)
    observer?.next?.(val)
  }, [])

  React.useEffect(() => {
    return () => {
      destroy$.next()
      destroy$.complete()
    }
  }, [])

  React.useEffect(() => {
    input$.pipe(takeUntil(destroy$)).subscribe({
      ...observer,
      next: onNext
    } as any)
  }, [])

  return value
}
