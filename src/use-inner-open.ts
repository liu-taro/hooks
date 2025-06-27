import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'ahooks'

export function useInnerOpen(outerOpen: boolean) {
  const [innerOpen, setInnerOpen] = useState(outerOpen)
  useIsomorphicLayoutEffect(() => {
    setInnerOpen(outerOpen)
  }, [outerOpen])
  return innerOpen
}
