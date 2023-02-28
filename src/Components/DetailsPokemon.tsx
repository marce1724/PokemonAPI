
type pokemon = {
    name: string,
    url : string
}

const DetailsPokemon = ({name, url} : pokemon) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10 border-2 border-gray-200">
        <img className=" w-32 h-32 mx-auto" src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className=" mb-2 text-center text-sky-800 font-bold tracking-wide font-mono text-xl">{name}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
             <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Details
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
             </a>
        </div>
    </div>
  )
}

export default DetailsPokemon