# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Follow.destroy_all
Track.destroy_all
User.destroy_all
Genre.destroy_all


# GENRES
g1 = Genre.create(genre: "Pop")
g2 = Genre.create(genre: "R&B")
g3 = Genre.create(genre: "K-Pop")
g4 = Genre.create(genre: "Rap")
g5 = Genre.create(genre: "EDM")
g6 = Genre.create(genre: "Indie")


# USERS
u1 = User.create(email: "iambeyalways@queenb.com", username: "Beyoncé", password: "beehive911", age: 39, description: "Who run the world? Girls.", location: "Houston, TX", genre_id: g1.id)
u1_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/beyonce-profile.png")
u1.photo.attach(io: u1_photo, filename: 'u1_photo.jpg')

u2 = User.create(email: "troyesivan@troye.com", username: "Troye Sivan", password: "troye911", age: 25, description: "Only FOOLS fall for you </3", location: "Johannesburg, South Africa", genre_id: g1.id)
u2_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/troye-profile.png")
u2.photo.attach(io: u2_photo, filename: 'u2_photo.jpg')

u3 = User.create(email: "lauv@lauv.com", username: "Lauv", password: "lauv911", age: 26, description: "I like me better when I'm with you", location: "San Francisco, CA", genre_id: g1.id)
u3_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/lauv-profile.jpg")
u3.photo.attach(io: u3_photo, filename: 'u3_photo.jpg')

u4 = User.create(email: "brockhampton@brock.com", username: "BROCKHAMPTON", password: "brock911", age: 22 , description: "SUGARSUGARSUGARSUGARSUGARSUGARSUGARSUGAR", location: "San Marcos, TX", genre_id: g4.id)
u4_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/brockhampton-profile.jpg")
u4.photo.attach(io: u4_photo, filename: 'u4_photo.jpg')

u5 = User.create(email: "blackpink@blackpink.com", username: "BLACKPINK", password: "blackpink911", age: 23, description: "뚜두뚜두 ~", location: "Seoul, South Korea", genre_id: g3.id)
u5_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/blackpink-profile.jpg")
u5.photo.attach(io: u5_photo, filename: 'u5_photo.jpg')

u6 = User.create(email: "sikk@sikk.com", username: "Sik-K", password: "sikk911", age: 26, description: "I shut down the party, 오늘은 여기까지.", location: "Seoul, South Korea", genre_id: g3.id)
u6_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/sikk-profile.jpg")
u6.photo.attach(io: u6_photo, filename: 'u6_photo.jpg')

u7 = User.create(email: "crush@crush.com", username: "Crush", password: "crush911", age: 28, description: " 잊어버리지마 잃어버리지마ㅏㅏㅏ, 알았지?", location: "Seoul, South Korea", genre_id: g3.id)
u7_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/crush-profile.jpg")
u7.photo.attach(io: u7_photo, filename: 'u7_photo.jpg')

u8 = User.create(email: "her@her.com", username: "H.E.R.", password: "her911", age: 23, description: "I am H.E.R.", location: "Vallejo, CA", genre_id: g2.id)
u8_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/her-profile.jpg")
u8.photo.attach(io: u8_photo, filename: 'u8_photo.jpg')

u9 = User.create(email: "jheneaiko@jhene.com", username: "Jhené Aiko", password: "jhene911", age: 32, description: "Back up on my bs", location: "Los Angeles, CA", genre_id: g2.id)
u9_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/jhene-profile.jpg")
u9.photo.attach(io: u9_photo, filename: 'u9_photo.jpg')

u10 = User.create(email: "japanese@house.com", username: "The Japanese House", password: "japanese911", age: 25, description: "Your heart keeps breaking in the same place. Something has to change.", location: "Buckinghamshire, England", genre_id: g6.id)
u10_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/japanese-house-profile.jpg")
u10.photo.attach(io: u10_photo, filename: 'u10_photo.jpg')

u11 = User.create(email: "chance@therapper.com", username: "Chance the Rapper", password: "chance911", age: 27, description: "You don't want no problems, want no problems with me, bih!", location: "Chicago, IL", genre_id: g4.id)
u11_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/chance-profile.jpg")
u11.photo.attach(io: u11_photo, filename: 'u11_photo.jpg')

u12 = User.create(email: "ashe@ashe.com", username: "Ashe", password: "ashe911", age: 27, description: "That's the Moral of the Story, babe", location: "San Jose, CA", genre_id: g6.id)
u12_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/ashe-profile.png")
u12.photo.attach(io: u12_photo, filename: 'u12_photo.jpg')

u13 = User.create(email: "kygo@kygo.com", username: "Kygo", password: "kygo911", age: 29, description: "I'm Kygo.", location: "Singapore, Singapore", genre_id: g5.id)
u13_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/kygo-profile.jpg")
u13.photo.attach(io: u13_photo, filename: 'u13_photo.jpg')

u14 = User.create(email: "emily@king.com", username: "Emily King", password: "emilyking911", age: 35, description: "Remind me.", location: "New York, NY", genre_id: g2.id)
u14_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/emily-king-profile.jpeg")
u14.photo.attach(io: u14_photo, filename: 'u14_photo.jpg')

u15 = User.create(email: "mura@masa.com", username: "Mura Masa", password: "mura911", age: 24, description: "Murrrraaa Masa", location: "Castel, Guernsey", genre_id: g5.id)
u15_photo = open("https://boom-music-dev.s3.amazonaws.com/artist-profile/mura-masa-profile.jpeg")
u15.photo.attach(io: u15_photo, filename: 'u15_photo.jpg')


#FOLLOWS
f1 = Follow.create(follower_id: u1.id, artist_id: u5.id)
f2 = Follow.create(follower_id: u2.id, artist_id: u5.id)
f3 = Follow.create(follower_id: u3.id, artist_id: u5.id)
f4 = Follow.create(follower_id: u4.id, artist_id: u5.id)
f5 = Follow.create(follower_id: u6.id, artist_id: u5.id)
f6 = Follow.create(follower_id: u7.id, artist_id: u5.id)
f7 = Follow.create(follower_id: u8.id, artist_id: u5.id)
f8 = Follow.create(follower_id: u9.id, artist_id: u5.id)
f9 = Follow.create(follower_id: u10.id, artist_id: u5.id)
f10 = Follow.create(follower_id: u11.id, artist_id: u5.id)
f11 = Follow.create(follower_id: u15.id, artist_id: u1.id)
f12 = Follow.create(follower_id: u14.id, artist_id: u1.id)
f13 = Follow.create(follower_id: u13.id, artist_id: u1.id)
f14 = Follow.create(follower_id: u11.id, artist_id: u1.id)
f15 = Follow.create(follower_id: u10.id, artist_id: u1.id)
f16 = Follow.create(follower_id: u1.id, artist_id: u2.id)
f17 = Follow.create(follower_id: u6.id, artist_id: u2.id)
f18 = Follow.create(follower_id: u9.id, artist_id: u5.id)
f19 = Follow.create(follower_id: u13.id, artist_id: u5.id)
f20 = Follow.create(follower_id: u12.id, artist_id: u6.id)
f21 = Follow.create(follower_id: u11.id, artist_id: u6.id)
f22 = Follow.create(follower_id: u15.id, artist_id: u10.id)
f23 = Follow.create(follower_id: u5.id, artist_id: u11.id)
f24 = Follow.create(follower_id: u15.id, artist_id: u12.id)


#TRACKS
t1 = Track.create(title: "Run the World (Girls)", artist_id: u1.id, genre_id: g2.id)
t1_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/beyonce_runtheworld.jpg")
t1.photo.attach(io: t1_photo, filename: 't1_photo.jpg')
t1_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Run+the+World+(Girls).mp3")
t1.song.attach(io: t1_song, filename: 't1_song.mp3')

t2 = Track.create(title: "My My My!", artist_id: u2.id, genre_id: g1.id)
t2_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/troye-sivan-track-bloom.jpg")
t2.photo.attach(io: t2_photo, filename: 't2_photo.jpg')
t2_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/My+My+My!.mp3")
t2.song.attach(io: t2_song, filename: 't2_song.mp3')

t3 = Track.create(title: "FOOLS", artist_id: u2.id, genre_id: g1.id)
t3_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/troye-fools-track.jpg")
t3.photo.attach(io: t3_photo, filename: 't3_photo.jpg')
t3_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Troye+Sivan+-+FOOLS.mp3")
t3.song.attach(io: t3_song, filename: 't3_song.mp3')

t4 = Track.create(title: "i'm so tired...", artist_id: u3.id, genre_id: g1.id)
t4_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/lauv-track-image.jpg")
t4.photo.attach(io: t4_photo, filename: 't4_photo.jpg')
t4_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Lauv%2C+Troye+Sivan+-+i'm+so+tired....mp3")
t4.song.attach(io: t4_song, filename: 't4_song.mp3')

t5 = Track.create(title: "SUGAR", artist_id: u4.id, genre_id: g4.id)
t5_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/Brockhampton-SUGAR-Ginger.png")
t5.photo.attach(io: t5_photo, filename: 't5_photo.jpg')
t5_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/SUGAR+-+BROCKHAMPTON.mp3")
t5.song.attach(io: t5_song, filename: 't5_song.mp3')

t6 = Track.create(title: "뚜두뚜두 (DDU-DU DDU-DU)", artist_id: u5.id, genre_id: g3.id)
t6_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/blackpink-track.png")
t6.photo.attach(io: t6_photo, filename: 't6_photo.jpg')
t6_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/BLACKPINK+-+%E1%84%84%E1%85%AE%E1%84%83%E1%85%AE%E1%84%84%E1%85%AE%E1%84%83%E1%85%AE+(DDU-DU+DDU-DU).mp3")
t6.song.attach(io: t6_song, filename: 't6_song.mp3')

t7 = Track.create(title: "party(SHUT DOWN) feat. Crush", artist_id: u6.id, genre_id: g3.id)
t7_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/sikk-track.jpg")
t7.photo.attach(io: t7_photo, filename: 't7_photo.jpg')
t7_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5+Sik-K+-+party(SHUT+DOWN)(feat.+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A5%E1%84%89%E1%85%B1(Crush)).mp3")
t7.song.attach(io: t7_song, filename: 't7_song.mp3')

t8 = Track.create(title: "Cereal feat. ZICO", artist_id: u7.id, genre_id: g3.id)
t8_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/crush-ceareal-track.jpg")
t8.photo.attach(io: t8_photo, filename: 't8_photo.jpg')
t8_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Crush+(%ED%81%AC%EB%9F%AC%EC%89%AC)+-+Cereal+(feat.+ZICO)+%5BHANROMENG+COLOR+CODED+LYRICS%5D.mp3")
t8.song.attach(io: t8_song, filename: 't8_song.mp3')

t9 = Track.create(title: "Don't Forget (잊어버리지마) feat. Taeyeon", artist_id: u7.id, genre_id: g3.id)
t9_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/crush-dont-forget-track.jpg")
t9.photo.attach(io: t9_photo, filename: 't9_photo.jpg')
t9_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Crush(%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A5%E1%84%89%E1%85%B1)+Dont+Forget(%E1%84%8B%E1%85%B5%E1%86%BD%E1%84%8B%E1%85%A5%E1%84%87%E1%85%A5%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%86%E1%85%A1)+(Feat.+Taeyeon(%E1%84%90%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%AB)).mp3")
t9.song.attach(io: t9_song, filename: 't9_song.mp3')

t10 = Track.create(title: "Focus", artist_id: u8.id, genre_id: g2.id)
t10_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/her-track.jpg")
t10.photo.attach(io: t10_photo, filename: 't10_photo.jpg')
t10_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/H.E.R+-+Focus.mp3")
t10.song.attach(io: t10_song, filename: 't10_song.mp3')

t11 = Track.create(title: "B.S. feat. H.E.R.", artist_id: u9.id, genre_id: g2.id)
t11_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/jhene-track.jpg")
t11.photo.attach(io: t11_photo, filename: 't11_photo.jpg')
t11_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Jhene%CC%81+Aiko+-+B.S.+ft.+H.E.R..mp3")
t11.song.attach(io: t11_song, filename: 't11_song.mp3')

t12 = Track.create(title: "Something Has to Change", artist_id: u10.id, genre_id: g6.id)
t12_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/japanese-house-track.jpeg")
t12.photo.attach(io: t12_photo, filename: 't12_photo.jpg')
t12_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/The+Japanese+House+-+Something+Has+to+Change.mp3")
t12.song.attach(io: t12_song, filename: 't12_song.mp3')

t13 = Track.create(title: "No Problem feat. Lil Wayne & 2 Chains", artist_id: u11.id, genre_id: g4.id)
t13_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/chance-the-rapper-track.jpg")
t13.photo.attach(io: t13_photo, filename: 't13_photo.jpg')
t13_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Chance+The+Rapper+-+No+Problem+(feat.+Lil+Wayne+2+Chainz)+Explicit.mp3")
t13.song.attach(io: t13_song, filename: 't13_song.mp3')

t14 = Track.create(title: "Moral of the Story", artist_id: u12.id, genre_id: g4.id)
t14_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/ashe-track.png")
t14.photo.attach(io: t14_photo, filename: 't14_photo.jpg')
t14_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Ashe+-+Moral+of+the+Story.mp3")
t14.song.attach(io: t14_song, filename: 't14_song.mp3')

t15 = Track.create(title: "Down", artist_id: u14.id, genre_id: g2.id)
t15_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/track-emily-king.jpg")
t15.photo.attach(io: t15_photo, filename: 't15_photo.jpg')
t15_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Emily+King+-+Down.mp3")
t15.song.attach(io: t15_song, filename: 't15_song.mp3')

t16 = Track.create(title: "1 Night feat. Charli XCX", artist_id: u15.id, genre_id: g5.id)
t16_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/mura-masa-track.jpg")
t16.photo.attach(io: t16_photo, filename: 't16_photo.jpg')
t16_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Mura+Masa+%26+Charli+XCX+-+1+Night.mp3")
t16.song.attach(io: t16_song, filename: 't16_song.mp3')

t17 = Track.create(title: "Lose Somebody feat. OneRepublic", artist_id: u13.id, genre_id: g5.id)
t17_photo = open("https://boom-music-dev.s3.amazonaws.com/track-art/kygo-track.jpg")
t17.photo.attach(io: t17_photo, filename: 't17_photo.jpg')
t17_song = open("https://boom-music-dev.s3.amazonaws.com/track-mp3/Kygo%2C+OneRepublic+-+Lose+Somebody.mp3")
t17.song.attach(io: t17_song, filename: 't17_song.mp3')