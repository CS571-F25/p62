import YoutubeEmbed from "../components/YoutubeEmbed"
import songs from "../assets/worship_songs.json"

const Worship = () => {
  const playlist = songs.songs.map(song => song.title);
  const embed_ids = songs.songs.map(song => song.embed_id);

  const start_date = new Date(2025, 11, 9);
  let today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let day_offset = Math.floor((today - start_date) / (1000 * 60 * 60 * 24));

  console.log(embed_ids[day_offset % embed_ids.length]);

  return (
    <div>
      <h1>2025 LG Worship Playlist</h1>
      <ul>
        {playlist.map(song => { return (
          <li key={song}>
            <p>{song}</p>
          </li>
        )})}
      </ul>
      <h2>Song of the Day</h2>
      <YoutubeEmbed embedId={embed_ids[day_offset % embed_ids.length]}/>
    </div>
  )
}

export default Worship;