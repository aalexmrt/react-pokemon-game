export const INITIAL_TIME = 20

export const GAME_MODAL_TYPES = {
  WIN: 'win',
  LOSE: 'lose',
}

export const GAME_CONFIG_BASED_ON_SCREEN = {
  3840: { initialTime: 120, totalPokemons: 20 },
  2560: { initialTime: 100, totalPokemons: 16 },
  1920: { initialTime: 80, totalPokemons: 14 },
  1024: { initialTime: 70, totalPokemons: 12 },
  576: { initialTime: 60, totalPokemons: 8 },
  390: { initialTime: 20, totalPokemons: 6 },
}
export const USE_TIMER_INITIAL_STATE = 0
