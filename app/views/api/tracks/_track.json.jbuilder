json.extract! track, :id, :title, :artist_id, :genre_id
json.artist track.artist.username
json.photoUrl url_for(track.photo) if track.photo.attached?
json.songUrl url_for(track.song) if track.song.attached?
