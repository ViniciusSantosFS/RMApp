import { Alert, Platform, ToastAndroid } from "react-native"

export const errorHandler = (message: string) => {
  if (Platform.OS === "android") return androidHandler(message)
  return Alert.alert(message)
}

const androidHandler = (message: string) => {
  ToastAndroid.show(message, ToastAndroid.LONG)
}
