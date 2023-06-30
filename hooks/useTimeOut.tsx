import { useEffect } from 'react';

interface IUseTime {
  callback: () => void
  delay: number
  state: any
}

export default function useTimeout({callback, delay, state = []} : IUseTime) {
  useEffect(() => {
    const time = setTimeout(() =>{
      callback()
    }, delay)
    return () => {
      clearTimeout(time)
    }
  }, state)
}

