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


# CREATE LIKES
Like.destroy_all
dum_like1 = {
  post_id: post1.id, 
  user_id: user1.id 
} 

dum_like2 = {
  post_id: post1.id, 
  user_id: user2.id 
}

dum_like3 = {
  post_id: post1.id, 
  user_id: user3.id 
}

dum_like4 = {
  post_id: post3.id, 
  user_id: user2.id 
}

dum_like5 = {
  post_id: post2.id, 
  user_id: user2.id 
}

like1 = Like.create(dum_like1)
like2 = Like.create(dum_like2)
like3 = Like.create(dum_like3)
like4 = Like.create(dum_like4)
like5 = Like.create(dum_like5)

# Seed more data

candela = {
  post_type: 'image',
  title: '',
  body: 'Meet the future head on!',
  image_url: 'https://i.imgur.com/4fsglV4.jpg',
  user_id: user3.id
}
Post.create(candela)

stone_free = {
  post_type: 'image',
  title: '',
  body: 'Stone Free, to do what I please',
  image_url: 'https://i.imgur.com/WnWiN3J.jpg',
  user_id: user3.id
}
Post.create(stone_free)

the_gang = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/sgFCotB.jpg',
  user_id: user1.id
}
Post.create(the_gang)

he_can = {
  post_type: 'image',
  title: '',
  body: 'Give him space... he can do it!',
  image_url: 'https://i.imgur.com/Dkl0EO3.jpg',
  user_id: user2.id
}
Post.create(he_can)

promise = {
  post_type: 'image',
  title: '',
  body: 'A promise is a promise, old friend',
  image_url: 'https://i.imgur.com/yPX6Qyp.jpg',
  user_id: user3.id
}
Post.create(promise)

link = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/K0TGjBY.jpg',
  user_id: user1.id
}
Post.create(link)

dj = {
  post_type: 'image',
  title: '',
  body: 'Keep it clean',
  image_url: 'https://i.imgur.com/RaevVJS.jpg',
  user_id: user2.id
}
Post.create(dj)

wururu = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/AfZl62W.png',
  user_id: user1.id
}
Post.create(wururu)

hello_boss = {
  post_type: 'image',
  title: '',
  body: 'Hello? Boss?',
  image_url: 'https://i.imgur.com/WATAf4o.png',
  user_id: user1.id
}
Post.create(hello_boss)

feel_good = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/3GEkQur.png',
  user_id: user2.id
}
Post.create(feel_good)

love = {
  post_type: 'image',
  title: '',
  body: 'My love is invincible',
  image_url: 'https://i.imgur.com/alhrfoL.png',
  user_id: user3.id
}
Post.create(love)

sol = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/BT47Hfx.jpg',
  user_id: user3.id
}
Post.create(sol)

cat_weight = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/WUElSWD.jpg',
  user_id: user2.id
}
Post.create(cat_weight)

alien_des = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/JCed5IO.jpg',
  user_id: user1.id
}
Post.create(alien_des)

dear = {
  post_type: 'image',
  title: '',
  body: '',
  image_url: 'https://i.imgur.com/rKs48Ut.jpg',
  user_id: user2.id
}
Post.create(dear)

