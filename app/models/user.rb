# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  img_url         :string
#  description     :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    # validates :username, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    # belongs_to :genre,
    # class_name: :Genre,
    # foreign_key: :genre_id,
    # primary_key: :id

    has_many :tracks,
    class_name: :Track,
    foreign_key: :artist_id,
    primary_key: :id

    has_many :incoming_follows,
    class_name: :Follow,
    foreign_key: :artist_id,
    primary_key: :id

    has_many :outgoing_follows, 
    class_name: :Follow,
    foreign_key: :follower_id,
    primary_key: :id

    has_many :followers,
    through: :incoming_follows,
    source: :follower

    has_many :artists_following,
    through: :outgoing_follows,
    source: :artist 

    has_one_attached :photo

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(element, password)
        user = User.find_by(email: element)
         if user && user.is_password?(password) 
            return nil unless user && user.is_password?(password)
         else
            user = User.find_by(username: element)
            return nil unless user && user.is_password?(password)
         end
         return user
    end

    def is_password?(password)
       BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token 
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end
end
