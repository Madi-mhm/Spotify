"use client"

import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from 'react';
import { fetchClientSpotifyApi, getSpotifyAuthToken } from '@/api/api';
import './search.scss'
import ArtistProfile from "../ArtistProfile/ArtistProfile";


const SearchCall = ({token}) =>{
    const [search, setSearch] = useState("")
    const [searchedData, setSearchedData] = useState();

    const handleSearchInput = (event)=>{
        setSearch(event.target.value)
    }

    const handleSearchButton = async (event) =>{
        event.preventDefault();

        const data = async () =>{
            
            const searchData = await fetchClientSpotifyApi(`search?q=${search}&type=album%2Cplaylist%2Cartist&market=fr&limit=25&offset=0`, token);
            return searchData
        };

        const searchedData = await data()
        setSearchedData(searchedData)
    }
console.log(searchedData)
    
    return (
        <main className='searchMainPage'>
            <div className="searchPage">
                <div className="searchSection">
                    <a href='./'><AiOutlineArrowLeft/></a>
                    <input type="text" placeholder="search your artist..." onChange={handleSearchInput}/>
                    <span onClick={handleSearchButton}><BiSearch/></span>

                </div>
            </div>
            <ArtistProfile name={searchedData?.artists.items[0].name} image={searchedData?.artists.items[0].images[2].url} />
        </main>
    )
}

export default SearchCall






