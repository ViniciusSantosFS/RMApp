export const getNumbers = (text: string) => {
  const isNotNumericalDigitMatcher = /\D/g
  return text.replace(isNotNumericalDigitMatcher, "")
}
