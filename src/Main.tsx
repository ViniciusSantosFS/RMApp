import React from "react"
import FavoritesProvider from "./contexts/FavoriteListContext"
import LoadingProvider from "./contexts/LoadingContext"
import Router from "./Router"

export default function Main() {
  return (
    <LoadingProvider>
      <FavoritesProvider>
        <Router />
      </FavoritesProvider>
    </LoadingProvider>
  )
}
