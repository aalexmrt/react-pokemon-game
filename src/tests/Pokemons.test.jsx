import { it, describe, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

import {
  ListOfPokemons,
  PokemonCard,
  Pokemons,
  Spinner,
} from 'src/components/Pokemons'

const pokemons = [
  {
    pokemonId: 5,
    name: 'charmeleon',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
  },
  {
    pokemonId: 4,
    name: 'charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  },
  {
    pokemonId: 3,
    name: 'venusaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
  },
]
describe('Testing Pokemons component', async () => {
  beforeEach(() => {
    cleanup()
  })
  it('Pokemons component renders correctly', () => {
    render(<Pokemons />)
  })
  it('Pokemons component with loading true renders spinner', async () => {
    const { container } = render(<Pokemons loading={true} />)
    expect(container.querySelector('.spinner-box')).toBeTruthy()
  })
  it('Pokemons component with loading true renders spinner', async () => {
    const { container } = render(<Pokemons loading={false} />)
    expect(container.querySelector('.spinner-box')).toBeFalsy()
  })
  it('Pokemons component with loading false renders ListOfPokemons', () => {
    render(<Pokemons loading={false} />)
  })
  it('Pokemons component renders correctly', () => {
    const { container } = render(<ListOfPokemons pokemons={pokemons} />)
    expect(container).toBeTruthy()
  })
})
