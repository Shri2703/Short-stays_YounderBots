import React from 'react'
import { Heart, MapPin, Users, Fuel, Settings } from 'lucide-react'
import hotel1 from '../images/hotel1.png'
import hotel2 from '../images/hotel2.png'
import hotel3 from '../images/hotel3.png'

const Hotels = [
  {
    id: 1,
    image: hotel1, // Replace with actual image URL
    name: 'valta vista Hotel',
    location: 'Cape Coast',
  },
  {
    id: 2,
    image: hotel2, // Replace with actual image URL
    name: 'valta vista Hotel',
    location: 'Cape Coast',
  },
  {
    id: 3,
    image: hotel3, // Replace with actual image URL
    name: 'valta vista Hotel',
    location: 'Cape Coast',
  },
  {
    id: 4,
    image: hotel1, // Replace with actual image URL
    name: 'valta vista Hotel',
    location: 'Cape Coast',
  },
]

const HotelList = () => {
  return (
    <div className='container py-5 bg-gray'>
      <h2 className='text-center mb-4 fw-bold d-flex flex-start '>
        Similar Hostel
      </h2>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {Hotels.map((Hotel) => (
          <div key={Hotels.id} className='col'>
            <div className='card shadow-sm rounded-lg position-relative'>
              <div className='position-relative'>
                <img
                  src={Hotel.image}
                  alt={Hotel.name}
                  className='card-img-top  mt-2 '
                  style={{
                    height: '190px',
                    objectFit: 'cover',
                    width: '248px',
                  }}
                />
                <span className='position-absolute top-0 start-0 text-black px-1 py-1 fs-6 fw-bold'>
                  GH¢ 550
                </span>
                <button className='position-absolute top-0 end-0 bg-white p-1 mt-2 rounded-circle shadow-sm'>
                  <Heart className='w-5 h-5 text-secondary' />
                </button>
              </div>
              <div className='card-body'>
                <h5 className='card-title d-flex flex start'>{Hotel.name}</h5>
                <div className='d-flex gap-1 '>
                  <p className='card-text pt-1'>
                    <MapPin className='' /> {Hotel.location}
                  </p>
                  <button
                    className='btn w-auto border-2 rounded-pill text-nowrap text-white text-center '
                    style={{
                      backgroundColor: '#00B1EF',
                      borderColor: '#00B1EF',
                      height:"6vh"
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList
