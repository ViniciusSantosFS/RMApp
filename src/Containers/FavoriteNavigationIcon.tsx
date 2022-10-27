import * as React from "react"
import { TouchableOpacity } from "react-native"

import FavoriteIcon from "~/components/FavoriteIcon"
import useNavigation from "~/hooks/useNavigation"

const FavoriteNavigationIcon = () => {
  const { handleNavigate } = useNavigation()
  return (
    <TouchableOpacity onPress={() => handleNavigate("Favoritos")}>
      <FavoriteIcon isFavorite />
    </TouchableOpacity>
  )
}

export default FavoriteNavigationIcon
