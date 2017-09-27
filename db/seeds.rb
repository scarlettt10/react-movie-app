3.times do
  Movie.create(
    title: Faker::Overwatch.hero,
    summary: Faker::Overwatch.quote,
 
  )
end

puts 'Heros Never Die'