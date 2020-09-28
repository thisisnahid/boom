json.extract! user, :id, :email, :username, :genre_id, :location, :track_ids, :follower_ids, :artists_following_ids
json.photoUrl url_for(user.photo) if user.photo.attached?