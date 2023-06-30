import { useEffect } from 'react';

interface IUseTime {
  callback: () => void
  delay: number
}

export default function useTimeOut2({callback, delay} : IUseTime) {
  useEffect(() => {
    const time = setTimeout(() =>{
      callback()
    }, delay)
    return () => {
      clearTimeout(time)
    }
  })
}

