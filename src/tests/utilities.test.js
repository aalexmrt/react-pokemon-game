import { describe, it, expect } from 'vitest'
import { getConfigurationGameBasedOnScreenWidth } from 'src/utils/utilities'

// 3840: { initialTime: 120, totalPokemons: 20 },
// 2560: { initialTime: 100, totalPokemons: 16 },
// 1920: { initialTime: 80, totalPokemons: 14 },
// 1024: { initialTime: 70, totalPokemons: 12 },
// 576: { initialTime: 60, totalPokemons: 8 },
// 390: { initialTime: 20, totalPokemons: 6 },

describe('Testing the function getConfigurationGameBasedOnScreenWidthWidth', () => {
  it('should return the configuration for the screen width of 320px', () => {
    const width = 320
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 6, initialTime: 20 })
  })
  it('should return the configuration for the screen width of 390px', () => {
    const width = 390
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 6, initialTime: 20 })
  })
  it('should return the configuration for the screen width of 391px', () => {
    const width = 391
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 8, initialTime: 60 })
  })
  it('should return the configuration for the screen width of 500px', () => {
    const width = 500
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 8, initialTime: 60 })
  })
  it('should return the configuration for the screen width of 576px', () => {
    const width = 576
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 8, initialTime: 60 })
  })
  it('should return the configuration for the screen width of 577px', () => {
    const width = 577
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 12, initialTime: 70 })
  })
  it('should return the configuration for the screen width of 1025px', () => {
    const width = 1025
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 14, initialTime: 80 })
  })
  it('should return the configuration for the screen width of 1921px', () => {
    const width = 1921
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 16, initialTime: 100 })
  })
  it('should return the configuration for the screen width of 1921px', () => {
    const width = 1921
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 16, initialTime: 100 })
  })
  it('should return the configuration for the screen width of 2561px', () => {
    const width = 2561
    const configuration = getConfigurationGameBasedOnScreenWidth(width)
    expect(configuration).toEqual({ totalPokemons: 20, initialTime: 120 })
  })
})
