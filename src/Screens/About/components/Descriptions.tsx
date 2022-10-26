import React from "react"

import { wrapText } from "~/utils/wrapText"

import Description from "~/components/Description"

interface Props {
  species: string
  type: string
  origin: string
  location: string
}

const Descriptions = ({ species, type, origin, location }: Props) => (
  <>
    <Description label="Species" value={species} />
    <Description label="Type" value={wrapText(type)} />
    <Description label="Origin" value={wrapText(origin)} />
    <Description label="Location" value={wrapText(location)} />
  </>
)

export default Descriptions
