function convertToPokemonId(id) {
  let convertedId

  if (typeof id !== 'string') convertedId = id.toString()

  return `#${convertedId.padStart(3, '0')}`
}

export {convertToPokemonId}
