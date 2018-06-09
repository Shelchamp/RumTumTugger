# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

josuke = {
  username: 'Josuke',
  email: 'Josuke@jojo.com',
  image_url: '',
  bio: 'I love hearts and diamonds.',
  password: 'CrazyDiamond'
}

kira = {
  username: 'Kira',
  email: 'Kira@jojo.com',
  image_url: '',
  bio: 'I just want a quiet life.',
  password: 'KillerQueen'
}

user1 = User.create(josuke)
user2 = User.create(kira)

Post.destroy_all

test_post1 = {
  post_type: 'text',
  title: 'Look at my horse, my horse is amazing.',
  body: 'Give it a lick, it tastes just like raisins.',
  image_url: '',
  user_id: user1.id
}

test_post2 = {
  post_type: 'text',
  title: 'Knees weak',
  body: 'Arms are heavy',
  image_url: '',
  user_id: user1.id

}

test_post3 = {
  post_type: 'text',
  title: 'Vomit on your sweater already',
  body: 'Mom\'s spaghetti',
  image_url: '',
  user_id: user1.id
}

test_post4 = {
  post_type: 'text',
  title: 'Never gonna give you up',
  body: 'Never gonna let you down',
  image_url: '',
  user_id: user2.id
}

test_post5 = {
  post_type: 'text',
  title: 'Never gonna turn around',
  body: 'And desert you',
  image_url: '',
  user_id: user2.id
}

post1 = Post.create(test_post1)
post2 = Post.create(test_post2)
post3 = Post.create(test_post3)
post4 = Post.create(test_post4)
post5 = Post.create(test_post5)
