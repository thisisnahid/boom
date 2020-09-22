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
    validates :email, :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token
    attr_reader :passward

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
       BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @passward=password
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
