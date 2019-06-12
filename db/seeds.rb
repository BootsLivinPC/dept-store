20.times do
  Department.create(
    title: Faker::Artist.name,
    description: Faker::Commerce::department,
    hours: Faker::Commerce.price.to_f,
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.phone_number,
  )
end

puts "20 Departments Seeded"


20.times do
  Product.create(
    title: Faker::Beer.name,
    category: Faker::Commerce::department,
    price: Faker::Commerce.price.to_f,
    description: Faker::Movies::Lebowski.quote,
   
  )
end

puts "20 Products Seeded"