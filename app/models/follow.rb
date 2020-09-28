class Follow < ApplicationRecord
    validates :artist_id, :follower_id, presence: true
    validates :follower, uniqueness: { scope: :artist}

    belongs_to :artist, 
    class_name: :User, 
    foreign_key: :artist_id,
    primary_key: :id

    belongs_to :follower, 
    class_name: :User, 
    foreign_key: :follower_id,
    primary_key: :id

end