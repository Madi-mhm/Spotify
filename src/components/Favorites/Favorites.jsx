"use client"

import BigCards from "../Cards/BigCards";
import "./favorites.scss"
import { Fragment, useEffect, useState } from "react";

const Favorites = () =>{

    const [getAlbumData, setGetAlbumData] = useState()


    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const albumData = localStorage.getItem('songDetailsData')
            const parseData = albumData ? JSON.parse(albumData) : []
            setGetAlbumData(parseData)
        }
    }, [])

   
    
    return (
        <div className="favoritesPageContainer">
            <div className="privatProfile"></div>

            <div className="favoritemsItems">

                <div className="bigCardsFavoriteItems">
                    {getAlbumData &&
                      getAlbumData.map((item, index) => (
                        <Fragment key={index}>
                            <BigCards
                            date={item.releaseDate}
                            imageUrl={item.imageUrl}
                            name={item.title}
                            albumId={item.albumId}
                            type={item.type}
                            />
                        </Fragment>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Favorites