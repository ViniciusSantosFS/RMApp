import { AntDesign } from "@expo/vector-icons"
import { COLORS } from "~/globals/style"

interface Props {
  isFavorite: boolean
}

const FavoriteIcon = ({ isFavorite }: Props) => {
  return isFavorite ? (
    <AntDesign name="star" size={24} color={COLORS.yellow} />
  ) : (
    <AntDesign name="staro" size={24} color={COLORS.darkBlue} />
  )
}

export default FavoriteIcon
