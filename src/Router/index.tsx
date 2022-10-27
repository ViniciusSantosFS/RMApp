import * as React from "react"

import { NavigationContainer } from "@react-navigation/native"
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { COLORS } from "~/globals/style"

import Home from "../Screens/Home"
import About from "~/Screens/About"
import FavoriteNavigationIcon from "~/Containers/FavoriteNavigationIcon"
import Favorites from "~/Screens/Favorites"

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

  headerRight: () => <FavoriteNavigationIcon />,
} as NativeStackNavigationOptions

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Inicio" component={Home} />
        {/* @ts-ignore */}
        <Stack.Screen name="Sobre" component={About} />
        <Stack.Screen name="Favoritos" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
