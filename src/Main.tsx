import React from "react"
import LoadingProvider from "./contexts/LoadingContext"
import Router from "./Router"

export default function Main() {
  return (
    <LoadingProvider>
      <Router />
    </LoadingProvider>
  )
}
