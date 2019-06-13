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


100.times do
  Product.create(
    department_id: Faker::Number.between(1, 20), 
    title: Faker::Commerce.product_name,
    category: Faker::Commerce::department,
    price: Faker::Commerce.price.to_f,
    description: Faker::Quote.famous_last_words,
   
  )
end

puts "20 Products Seeded"