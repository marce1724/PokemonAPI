import { useState, useEffect } from "react"
import axios from "axios"
import Form from "./Components/Form"
import DetailsPokemon from "./Components/DetailsPokemon"

interface PokemonList {
    name: string
    url: string
}


function App() {

  const [pokemons, setPokemons] = useState<PokemonList[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {

     const getPokemons = async() => {
         const limit = 12;
         const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
         const response = await axios(url)
         setPokemons(response.data.results)
     }
     


     if(search) {
        setPokemons(pokemons.filter((value) => value.name.toLowerCase().includes(search.toLowerCase())))
     }

  }, [])



  return (
      <div className=" flex-initial w-full h-14 bg-sky-600 shadow-lg">
         <h3 className="text-center p-4 text-white font-bold tracking-wide font-mono text-xl" >Pokemon API + React + TypeScript</h3>
         <Form
             setSearch = {setSearch}
         />
         
         <div className=" mx-96 mt-16">
            <div className="grid grid-cols-3 gap-3 mt">
                {pokemons.map(pokemon => (
                    <DetailsPokemon 
                        key={pokemon.name}
                        {...pokemon}
                    />
                ))}
            </div> 
         </div>
        
      </div>
  )
}

export default App
