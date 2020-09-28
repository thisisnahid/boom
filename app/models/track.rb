class Track < ApplicationRecord
    validates :title, :artist_id, :genre_id, presence: true

    belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id,
    primary_key: :id 

    # belongs_to :genre,
    # class_name: :Genre,
    # foreign_key: :genre_id,
    # primary_key: :id

    has_one_attached :photo
    has_one_attached :song

end