#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

category = Category.create(name: "Travel")
category2 = Category.create(name: "Career")
wish1 = Wish.create(category: category, content: "I want to travel to Africa", fulfilled: false)
wish2 = Wish.create(category: category2, content: "I want to be a doctor", fulfilled: false)
wish3 = Wish.create(category: category, content: "I want to travel to Europe", fulfilled: false)

