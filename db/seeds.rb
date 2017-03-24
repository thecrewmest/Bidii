# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.create([
                   {
                       title: 'Despite Project',
                       description: 'my home town',
                       cover_image: 'proj4.jpg',
                       progress: 90,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 500000
                   },
                   {
                       title: 'Trinity Baptist',
                       description: 'He is good',
                       cover_image: 'proj7.jpg',
                       progress: 10,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 565657
                   },
                   {
                       title: 'Destiny Creativity',
                       description: 'financed by MEST',
                       cover_image: 'proj8.jpg',
                       progress: 0,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 10000
                   },
                   {
                       title: 'All Nations',
                       description: 'created for us',
                       cover_image: 'proj5.jpg',
                       progress: 100,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 10000
                   },
                   {
                       title: 'Harrison Project',
                       description: 'He can buy the building',
                       cover_image: 'proj4.jpg',
                       progress: 50,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 20000
                   },
                   {
                       title: 'Accra Interchange',
                       description: 'He is alive',
                       cover_image: 'proj3.jpg',
                       progress: 40,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 50000
                   },
                   {
                       title: 'Sandcity Hostel',
                       description: 'This is a sample project',
                       cover_image: 'proj6.jpeg',
                       progress: 50,
                       is_archived: 'f',
                       date_archived: nil,
                       budget: 70000
                   },
                   {
                       title: 'Adehyie House',
                       description: 'We are good',
                       cover_image: 'proj7.jpg',
                       progress: 80,
                       is_archived: 't',
                       date_archived: nil,
                       budget: 800000
                   },
                   {
                       title: 'Panorma Areana',
                       description: 'Financed by USAIDS',
                       cover_image: 'proj3.jpg',
                       progress: 80,
                       is_archived: 't',
                       date_archived: nil,
                       budget: 900000
                   }
               ])


User.create([
              {
                first_name: 'joseph',
                last_name: 'muruiki',
                phone: '0547558472',
                company: 'The Mest Crew',
                profile_image: nil,
                password: 'administrator',
                email: 'vansolo313@gmail.com'
              },
              {
                  first_name: 'daniel',
                  last_name: 'faith',
                  phone: '0236834486',
                  company: 'The Divine',
                  profile_image: nil,
                  password: 'administrator',
                  email: 'thecrewmest@gmail.com'
              }
            ])