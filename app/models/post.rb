# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  post_type  :string           not null
#  title      :string
#  body       :text
#  image_url  :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

  validates :post_type, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User



end
