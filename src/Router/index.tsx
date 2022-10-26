import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../Screens/Home"
import About from "~/Screens/About"
import { COLORS } from "~/globals/style"
import FavoriteIcon from "~/components/FavoriteIcon"

const Stack = createNativeStackNavigator()

const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.darkBlue,
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",

  headerRight: () => <FavoriteIcon isFavorite />,
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Sobre" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
