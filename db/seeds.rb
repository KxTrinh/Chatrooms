# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding...'

kev = User.create(email: 'kev@mail.com',
                  password: '123456',
                  password_confirmation: '123456',
                  role: 'admin')
User.create(email: 'john@mail.com',
            password: '123456',
            password_confirmation: '123456')
User.create(email: 'jane@mail.com',
            password: '123456',
            password_confirmation: '123456')
kev.joined_rooms << Room.create(name: 'General', is_private: false)
kev.joined_rooms << Room.create(name: 'Testing', is_private: false)

puts 'Finished !'
