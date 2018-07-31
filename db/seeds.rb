# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

#CREATE USERS FIRST

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

tugger = {
  username: 'Tugger',
  email: 'Tugger@cat.com',
  image_url: '',
  bio: 'Meow.',
  password: 'MeowMeow'
}

user1 = User.create(josuke)
user2 = User.create(kira)
user3 = User.create(tugger)

#CREATE USERS FIRST

test_post1 = {
  post_type: 'image',
  title: '',
  body: 'ORAORAORAORAORAORA',
  image_url: "https://i.imgur.com/ZayJj8X.gif",
  user_id: user1.id
}
#
test_post2 = {
  post_type: 'image',
  title: '',
  body: 'Meow',
  image_url: 'https://i.imgur.com/AQo6tuw.gif',
  user_id: user2.id

}

test_post3 = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/kfd4lI6.png',
  user_id: user3.id
}
#
test_post4 = {
  post_type: 'image',
  title: '',
  body: 'Higher! Higher!',
  image_url: 'https://i.imgur.com/L3hcrzC.gif',
  user_id: user2.id
}
#
test_post5 = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/Nf6wb7u.gif',
  user_id: user3.id
}


Post.destroy_all

post4 = Post.create(test_post4)

2.times { Post.create(
  post_type: 'text',
  title: Faker::RuPaul.queen,
  body: Faker::RuPaul.quote,
  image_url: '',
  user_id: [user1.id, user2.id, user3.id].sample
  )}

  post5 = Post.create(test_post5)

2.times { Post.create(
  post_type: 'text',
  title: Faker::LeagueOfLegends.quote,
  body: Faker::LeagueOfLegends.champion,
  image_url: '',
  user_id: [user1.id, user2.id, user3.id].sample
  )}

  post1 = Post.create(test_post1)
  post2 = Post.create(test_post2)

2.times { Post.create(
  post_type: 'text',
  title: Faker::OnePiece.quote,
  body: Faker::OnePiece.character,
  image_url: '',
  user_id: [user1.id, user2.id, user3.id].sample
  )}
#

#
post3 = Post.create(test_post3)
