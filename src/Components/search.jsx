import React, {useState, useEffect} from "react";

const Buscador = () => {
    
        //setear
            const [ users,setUsers ] = useState([])
            const [ search, setSearch ] = useState("")
        //funcion
            const URL = 'https://rickandmortyapi.com/api/character'

            const showData =  async () => {
                const response = await fetch(URL)
                const data = await response.json()

                setUsers(data)
            }
            
        //busqueda
        const searcher = (e) => {
            setSearch(e.target.value)
        }

        //Metodo//
        let results = []
        if(!search)
        {
            results = users
        }else{
            results = users.filter( (dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
        }

        useEffect( ()=> {
            showData()
        }, [])
        
        return (
            <div>
                <input value={search} onChange={searcher} type="text" placeholder="Search" className="fom-control" />

                <table className="table table-striped table-hover mt-5 shadow-lg">
                    <thead>
                        <tr className="bg-dark bg-curso text-white">
                            <th>NAME</th>
                            <th>USERNAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        { results.map( (user) =>
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                </tr> 
                            )
                        }
                    </tbody>
                </table>
            </div>
    )
}




export default Buscador