json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :email, :image_url, :bio
    end
  end
end
