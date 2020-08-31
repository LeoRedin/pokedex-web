import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

async function getInitialPokemons() {
  try {
    const responseData = await api.get('/pokemon')
    return {
      success: true,
      pokemons: [...responseData.data.results],
    }
  } catch (error) {
    return {success: false, error}
  }
}

async function getPokemonById(id) {
  try {
    const responseData = await api.get(`/pokemon/${id}`)
    return {
      success: true,
      pokemon: responseData.data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export {api, getInitialPokemons, getPokemonById}
