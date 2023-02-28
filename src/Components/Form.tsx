

const Form = ({ setSearch }: { setSearch: React.Dispatch<React.SetStateAction<string>> }) => {


  return (
    <div className=" mx-96 mt-28">
         <form
         
         >
          <input 
             type="text" 
             placeholder='Search your pokemon ...'
             className="border-2 p-2 mt-2 rounded-lg placeholder-gray-400  w-full"
             onChange={e => setSearch(e.target.value)}
          />
         </form>
    </div>
  )
}

export default Form