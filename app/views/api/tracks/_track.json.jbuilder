json.extract! track, :id, :title, :artist_id, :genre_id
json.artist track.artist.username
json.photoUrl url_for(track.photo) if track.photo.attached?
json.songUrl url_for(track.song) if track.song.attached?

# this is what i have for the association on line 2
# but if you wanted more information you could do something like:
# json.extract! track.artist, :username, :email, :location