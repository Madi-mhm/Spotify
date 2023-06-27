"use client"

import './page.scss'
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SmallCards from '@/components/Cards/SmallCards';
import ArtistProfile from '@/components/ArtistProfile/ArtistProfile';
import { useState } from 'react';


const SearchPage = () =>{

    const [search, setSearch] = useState()

    const handleSearchInput = (event)=>{
        setSearch(event.target.value)
    }

    const handleSearchButton = () =>{
        console.log(search)
    }

    return (
        <main className='searchMainPage'>
            <div className="searchPage">
                <div className="searchSection">
                    <a href='./'><AiOutlineArrowLeft/></a>
                    <input type="text" placeholder="search your artist..." onChange={handleSearchInput}/>
                    <span onClick={handleSearchButton}><BiSearch/></span>

                </div>
            </div>
        </main>
    )
}

export default SearchPage



//     const handleSearch = () =>{
//         const filteredData = data.people.filter((item)=>{
//             return item.name.includes(search)
//         })

//         console.log(filteredData)
//     }



