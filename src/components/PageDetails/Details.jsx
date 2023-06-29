"use client"

import './details.scss'
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import Header from '../Header/Header';
import SmallCards from '../Cards/SmallCards';
import { useEffect, useState } from 'react';


const Details = (

    {title,
    imageUrl,
    artistName,
    releaseDate,
    tracks,
    topTracks,
}
    ) =>{       
        
    const [songNames, setSongNames] = useState()

    const getTracks = songNames?.tracks || []
    useEffect(()=>{
        if(getTracks){
            setSongNames(topTracks)
        }
    }, [topTracks])

    const tracksData = getTracks.map(item => {
        return item
    })

    
    return(
        <>
        <Header/>
        <div className='detailsPageContainer'>
            <div className='detailsIconsContainer'>
                <div className='detailsIcons'><BiShareAlt/></div>
                <div className='detailsIcons'><AiOutlineHeart/></div>
            </div>
            <div className='songsDetails'>
                <div className='detailsPageImage'>
                    <img src={imageUrl} />
                </div>
                <div className='detailsPageNameAndDescription'>
                    <h3>{title}</h3>
                    <p>Artist: {artistName}</p>
                    <p>{releaseDate}</p>
                </div>
                <div className='detailsPageLikesAndduration'>
                    <p>{tracks} . Songs</p>
                </div>
                <div className='detailsPagePlayButton'>
                 <AiFillPlayCircle/>
                </div>
            </div>

            <div className='albumsSongs'>
                {tracksData &&
                    tracksData.map((item) => (
                        <SmallCards
                            key={item.id}
                            songsName={item.name}
                            artistsName={item.artists[0].name}
                            image={item.album.images[1].url}
                        />                    
                    ))
                }
            </div>

        </div>
        </>

    )
}

export default Details


