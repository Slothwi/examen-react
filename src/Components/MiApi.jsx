import React, {useEffect, useState} from "react"
import Characters from "./Characters"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'


function MiApi () {
    
    
    const [characters, setCharacters] = useState([])
    
    const initialUrl = "https://rickandmortyapi.com/api/character"

    const fetchCharacters = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(error => console.log(error))
    
    }

    useEffect (() => {
        fetchCharacters(initialUrl)
    }, [])

    return (

        <>
            <Navbar brand="Rick And Morty App" />
        
            <div className="container" href="">
                <Characters characters={characters} />
            </div>
        </>
    )


}

export default MiApi