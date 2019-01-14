json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :post_type, :title, :body, :image_url, :user_id
    end
  end
end

 json.users do
  @posts.each do |post|
    json.set! post.user_id do
      json.extract! post.user, :id, :username
    end
  end
end



