const fromApiResponseToPokemon = apiResponse => {
  const { sprites = [] } = apiResponse
  return sprites.other.dream_world.front_default
}

const getPokemonById = (id) => {
  const URL = 'https://pokeapi.co/api/v2/pokemon'
  return fetch(`${URL}/${id}`).then(res => res.json()).then(res => fromApiResponseToPokemon(res))
}

export default getPokemonById
