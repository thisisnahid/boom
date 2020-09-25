# class Genre < ApplicationRecord
#     validates :genre, presence: true, uniqueness: true

#     has_many :tracks,
#     class_name: :Tracks,
#     foreign_key: :genre_id,
#     primary_key: :id

#     has_many :artists,
#     class_name: :Users,
#     foreign_key: :genre_id,
#     primary_key: :id
    
# end