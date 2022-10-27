import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

import Title from "~/components/Title"
import FavoriteIcon from "~/components/FavoriteIcon"

interface Props extends TouchableOpacityProps {
  name: string
  isFavorite: boolean
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

const TitleContainer = ({ name, isFavorite, ...rest }: Props) => (
  <View style={styles.container}>
    <Title>{name}</Title>
    <TouchableOpacity {...rest}>
      <FavoriteIcon isFavorite={isFavorite} />
    </TouchableOpacity>
  </View>
)
export default TitleContainer
