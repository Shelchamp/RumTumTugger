json.array! @posts do |post|
  json.extract! post, :id, :post_type, :title, :body, :image_url
end
