"use client"

import { useState } from "react"
import data from '../../data.json'

export default function Search(){

    const [search, setSearch] = useState()

    const handleSearchInput = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () =>{
        const filteredData = data.people.filter((item)=>{
            return item.name.includes(search)
        })

        console.log(filteredData)
    }

    return(
        <>
            <input type="text" onChange={handleSearchInput} />
            <button onClick={handleSearch}>submit</button>
        </>
    )
}



