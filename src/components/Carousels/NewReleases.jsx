import React from 'react';
import BigCards from '../Cards/BigCards';
import fetchSpotifyApi from '@/api/api';
import './newReleases.scss'

const NewReleasesSection = async () => {
  const apiData = await fetchSpotifyApi('browse/new-releases?country=US&offset=0');


  // const imageURL = apiData.albums.items.map((item)=>{
  //   return item.images[0]
  // })
  // console.log(imageURL);
 


  return (
    <div className='carouselCountainer'>
      {apiData?.albums.items.map((item) => {
        let imageUrl = "";

        // find images with 300px Width 
        const image300 = item.images.find((image)=> image.width === 300)
        if(image300){
          imageUrl = image300.url
        }


        return (
          <React.Fragment key={item.id}>
            <BigCards name={item.name} imageUrl={imageUrl} type={item.type} albumId={item.id} />
          </React.Fragment>
        );
        
      })}
    </div>
  );
};

export default NewReleasesSection;
