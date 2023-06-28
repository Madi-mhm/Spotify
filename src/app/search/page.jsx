"use client"

import './page.scss'
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from 'react';
import { fetchClientSpotifyApi, getSpotifyAuthToken } from '@/api/api';


const SearchPage = () =>{
    const [search, setSearch] = useState("pitbull")

    const handleSearchInput = (event)=>{
        setSearch(event.target.value)
    }

    const handleSearchButton = async (event) =>{
        event.preventDefault();

        const data = async () =>{
        const token = await getSpotifyAuthToken()
        const searchData = await fetchClientSpotifyApi(`search?q=${search}&type=album%2Cplaylist%2Cartist&market=fr&limit=25&offset=0`, token);
        
        console.log(searchData);

        }
        data()
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






