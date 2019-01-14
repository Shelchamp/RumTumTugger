# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  image_url       :string
#  bio             :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length:{minimum: 6, allow_nil: true}

  before_validation :ensure_session_token, :ensure_image_url

  attr_reader :password

  #write associations for posts and followers
  has_many :posts,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Post

  #a user has many liked posts
  has_many :likes,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Like


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_image_url
    self.image_url ||= '../assets/images/default.jpg'
  end

end
