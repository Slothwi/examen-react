import React, {useEffect, useState} from "react"
import Characters from "./Characters"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from "./paginacion"


function MiApi () {
    
    
    const [characters, setCharacters] = useState([])

    const [info, setInfo] = useState({})
    
    const initialUrl = "https://rickandmortyapi.com/api/character"

    const fetchCharacters = (url) => {
        fetch(url)
        .then(response => response.json())
        .then((data) => { 
            setCharacters(data.results)
            setInfo(data.info)

        })
        .catch(error => console.log(error))
    
    }

    const onPrevious = () => {
        fetchCharacters(info.prev)
    }

    const onNext = () => {
        fetchCharacters(info.next)
    }

    useEffect (() => {
        fetchCharacters(initialUrl)
    }, [])

    return (

        <>
            <Navbar brand="Rick And Morty App" />
        
            <div className="container mt-5" href="">
                <Pagination prev={info.prev}next={info.next}
                    onPrevious={onPrevious} onNext={onNext} />
                <Characters characters={characters} />
                <Pagination prev={info.prev}next={info.next}
                    onPrevious={onPrevious} onNext={onNext} />
                
            </div>
        </>
    )


}

export default MiApi