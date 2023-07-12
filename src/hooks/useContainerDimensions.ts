import React, { MutableRefObject, RefObject, useEffect, useState } from 'react'



const useContainerDimensions = (myRef: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  
  useEffect(() => {
    const getDimensions = () => ({
      width: myRef?.current?.offsetWidth ?? 0,
      height: myRef?.current?.offsetHeight ?? 0
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
}

export default useContainerDimensions