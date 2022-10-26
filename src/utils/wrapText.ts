export const wrapText = (text: string, limit: number = 16): string => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text
}
