import fetchSpotifyApi from '@/api/api';
import Details from '@/components/PageDetails/Details';
import useSearchParams from 'next/navigation'

export default async function CardsDetails({ params }) {


    const thisAlbum = await fetchSpotifyApi(`albums/${params.id}`);
    const thisArtist = await fetchSpotifyApi(`artists/${thisAlbum?.artists[0].id}`);
    


    // find images with 300px Width 
    let imageUrl = ""
    const image300 = thisAlbum.images.find((image)=> image.width === 300)
    if(image300){
      imageUrl = image300.url
    }


    return (
      <div>
        <Details 
          title={thisAlbum.name} 
          imageUrl={imageUrl} 
          releaseDate={thisAlbum.release_date}
          artistName={thisArtist.name}
          tracks={thisAlbum.tracks.total}
          />
      </div>
    );
}

