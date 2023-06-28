import React from 'react';
import BigCards from '../Cards/BigCards';
import fetchSpotifyApi from '@/api/api';
import './newReleases.scss'

const NewReleasesSection = async () => {
  const apiData = await fetchSpotifyApi('browse/new-releases?country=US&offset=0');

  return (
    <div className='carouselCountainer'>
      {apiData?.albums.items.map((item) => {
        let imageUrl = '';
        return (
          <React.Fragment key={item.id}>
            {item.images.map((i) => {
              imageUrl = i.url;
              return null;
            })}
            <BigCards name={item.name} imageUrl={imageUrl} type={item.type} albumId={item.id} />
          </React.Fragment>
        );
        
      })}
    </div>
  );
};

export default NewReleasesSection;
