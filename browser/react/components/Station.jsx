import React from 'react';
import Songs from './Songs';
export default function (props) {
  const genreName = props.genreName;
  const songs = props.songs;
  const currentSong = props.currentSong;
  const start = props.start;
  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        start={start}
      />
    </div>
  );
}