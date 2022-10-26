export interface GetCharsResponse {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

interface Origin {
  name: string
  url: string
}

type CharLocation = Origin

export interface Result {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: CharLocation
  image: string
  url: string
  episode: string[]
}

export interface EpisodeData {
  characters: string[]
  episode: string
  id: number
  name: string
  url: string
}
