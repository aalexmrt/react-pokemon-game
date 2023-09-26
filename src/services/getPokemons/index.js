export function getPokemons(randomsNum) {
  return Promise.all(
    Array.from(randomsNum, (id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then(({ id, name, sprites }) => ({
          pokemonId: id,
          name,
          image: sprites.other.dream_world.front_default,
        }))
    )
  )
}
export default getPokemons
