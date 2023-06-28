import fetchSpotifyApi from '@/api/api';
import Details from '@/components/PageDetails/Details';

export default async function AlbumPage({ params }) {
  const albumId = params.id; // Access the album ID using the 'id' key

  const thisAlbum = await fetchSpotifyApi(`albums/${albumId}`);
  const thisArtist = await fetchSpotifyApi(`artists/${thisAlbum?.artists[0].id}`);

  return (
    <div>
      <Details title={thisAlbum?.name}/>
    </div>
  );
}


{/* <AlbumDetail
            title={thisAlbum?.name}
            imageUrl={thisAlbum?.images[0].url}
            artistName={thisAlbum?.artists[0].name}
            artistsId={thisAlbum?.artists[0].id}
            releaseDate={thisAlbum?.release_date}
            tracks={thisAlbum?.tracks.items.map(item => ({ name: item.name, id: item.id }))}
            artistImageUrl={thisArtist?.images[0].url}
            artistImageTitle={thisArtist?.name}
          /> */}