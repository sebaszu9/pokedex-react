import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CardPokedex } from './CardPokedex'

export const Pokedex = () => {

    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState([])

    useEffect(() => {
        cargarPokemons();
    }, [])

    const cargarPokemons = async () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
			.then(resp => {
				for (let i = 0; i < resp.data.results.length; i++) {
					axios.get(resp.data.results[i].url)
						.then(result => {
                            setLoading(false)
							setPokemon(prevArray => [...prevArray, result.data])
						})
				}
			})
    }

    return (
        <div>
            {
                loading ?
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
                <div className="container text-center">
                    <div className="row align-items-start">
                        {
                            pokemon.map((item) => {
                                return (
                                    <div class="col">
                                        <CardPokedex item={item} habilidades={item.abilities}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            }
        </div>
    )
}
