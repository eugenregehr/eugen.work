'use client'

import { useState } from 'react'

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(true)

  const handleClose = () => {
    setShowNotice(false)
  }

  if (!showNotice) {
    return null
  }

  return (
    <div className="fixed bottom-2 z-20 flex w-full justify-center ">
      <div className=" flex w-full max-w-lg items-center justify-between gap-2 rounded-sm bg-secondary-400 p-2 text-white dark:bg-secondary-950">
        <p className="pl-2 text-sm font-bold text-secondary-950 dark:text-white">
          This site is keeping it lean and is completely cookie-free.
        </p>
        <button
          className="whitespace-nowrap rounded-sm bg-secondary-950 px-2 py-1 font-bold text-secondary-400 dark:bg-secondary-400 dark:text-secondary-950 "
          onClick={handleClose}
        >
          Got it
        </button>
      </div>
    </div>
  )
}

export default CookieNotice
