import React from 'react';
import BigCards from '../Cards/BigCards';
import fetchSpotifyApi from '@/api/api';

const NewReleasesSection = async () => {

  const apiData =  await fetchSpotifyApi('browse/new-releases?country=US&offset=0');


  
  

  return ( 
    <div>
      {apiData?.albums.items.map((item) => (
          <BigCards name={item.name} />
        ))}
    </div>
  );
};

export default NewReleasesSection;
