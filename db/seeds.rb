100.times do
  Movie.create(
    title: Faker::Overwatch.hero,
    summary: Faker::Lorem.paragraph(4),
 
  )
end