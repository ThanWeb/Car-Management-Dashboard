'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Cars',
            [
                {
                    id: 1,
                    model: 'F150',
                    image: './images/car01.min.jpg',
                    rentPerDay: 200000,
                    type: 'Sedan',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    model: 'X5',
                    image: './images/car02.min.jpg',
                    rentPerDay: 800000,
                    type: 'Convertible',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    model: 'MKZ',
                    image: './images/car03.min.jpg',
                    rentPerDay: 900000,
                    type: 'Sedan',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 4,
                    model: 'M5',
                    image: './images/car04.min.jpg',
                    rentPerDay: 900000,
                    type: 'Hatchback',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 5,
                    model: 'Navigator',
                    image: './images/car05.min.jpg',
                    rentPerDay: 200000,
                    type: 'Minivan',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 6,
                    model: 'Fiesta',
                    image: './images/car06.min.jpg',
                    rentPerDay: 900000,
                    type: 'Hatchback',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 7,
                    model: 'Accord',
                    image: './images/car07.min.jpg',
                    rentPerDay: 900000,
                    type: 'Sedan',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 8,
                    model: 'Navigator',
                    image: './images/car08.min.jpg',
                    rentPerDay: 300000,
                    type: 'Regular Cab Pickup',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 9,
                    model: 'LaCrosse',
                    image: './images/car09.min.jpg',
                    rentPerDay: 1000000,
                    type: 'Extended Cab Pickup',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 10,
                    model: 'X5',
                    image: './images/car10.min.jpg',
                    rentPerDay: 300000,
                    type: 'Hatchback',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 11,
                    model: 'Malibu',
                    image: './images/car11.min.jpg',
                    rentPerDay: 700000,
                    type: 'Coupe',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 12,
                    model: 'X3',
                    image: './images/car12.min.jpg',
                    rentPerDay: 800000,
                    type: 'Passenger Van',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 13,
                    model: 'Malibu',
                    image: './images/car13.min.jpg',
                    rentPerDay: 900000,
                    type: 'SUV',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 14,
                    model: 'Malibu',
                    image: './images/car14.min.jpg',
                    rentPerDay: 700000,
                    type: 'Regular Cab Pickup',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 15,
                    model: 'MKS',
                    image: './images/car15.min.jpg',
                    rentPerDay: 900000,
                    type: 'Regular Cab Pickup',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 16,
                    model: 'Silverado',
                    image: './images/car16.min.jpg',
                    rentPerDay: 200000,
                    type: 'Convertible',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 17,
                    model: 'MKS',
                    image: './images/car17.min.jpg',
                    rentPerDay: 1000000,
                    type: 'Regular Cab Pickup',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 18,
                    model: 'Ram',
                    image: './images/car18.min.jpg',
                    rentPerDay: 700000,
                    type: 'Sedan',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 19,
                    model: 'F150',
                    image: './images/car19.min.jpg',
                    rentPerDay: 600000,
                    type: 'Convertible',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 20,
                    model: 'A4',
                    image: './images/car20.min.jpg',
                    rentPerDay: 700000,
                    type: 'Crew Cab Pickup',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 21,
                    model: 'Durango',
                    image: './images/car21.min.jpg',
                    rentPerDay: 400000,
                    type: 'SUV',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 22,
                    model: 'S5',
                    image: './images/car22.min.jpg',
                    rentPerDay: 300000,
                    type: 'Coupe',
                    size: 'Small',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 23,
                    model: 'Camry',
                    image: './images/car23.min.jpg',
                    rentPerDay: 200000,
                    type: 'Extended Cab Pickup',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 24,
                    model: 'Pathfiner',
                    image: './images/car24.min.jpg',
                    rentPerDay: 600000,
                    type: 'Sedan',
                    size: 'Medium',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 25,
                    model: 'Civic',
                    image: './images/car25.min.jpg',
                    rentPerDay: 1000000,
                    type: 'Wagon',
                    size: 'Large',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {})
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('Cars', null, {});
         */
    }
}
