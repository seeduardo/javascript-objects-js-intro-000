var playlist = {artist: "song title"}

function updatePlaylist(playlist, artistName, songName) {
  return Object.assign({}, playlist, {[artistName]: songName})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
