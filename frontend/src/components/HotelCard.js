import React from 'react'
import {
  FaMapMarkerAlt,
  FaBed,
  FaUtensils,
  FaParking,
  FaWifi,
  FaCarBattery,
  FaCar,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'

import hero1 from '../images/heroimg1.png'
import hero2 from '../images/hero2.png'
import hero3 from '../images/hero3.png'
import hero4 from '../images/hero4.png'

const HotelCard = () => {
  return (
    <div className='container py-5 px-3 bg-white '>
      <div className='row align-items-center  p-3  rounded'>
        {/* Image Section */}
        <div className='col-md-6'>
          <div className='position-relative'>
            <img
              src={hero1}
              alt='Hotel Room'
              className='rounded-3 w-100'
              style={{ height: '350px', objectFit: 'cover' }}
            />
            <div className='d-flex mt-2'>
              {/* Small Thumbnail Images */}
              <img
                src={hero2}
                alt='Room 1'
                className='rounded-3 me-2'
                width='120'
                height='80'
              />
              <img
                src={hero3}
                alt='Room 2'
                className='rounded-3 me-2'
                width='120'
                height='80'
              />
              <img
                src={hero1}
                alt='Room 3'
                className='rounded-3 me-2'
                width='120'
                height='80'
              />
              <div
                className='position-relative'
                style={{ width: '120px', height: '80px' }}
              >
                {/* Background Image */}
                <img
                  src={hero4}
                  alt='Room 4'
                  className='rounded-3 w-100 h-100'
                  style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
                {/* Overlay Text */}
                <div
                  className='position-absolute bottom-0 start-0 w-100 text-white bg-dark bg-opacity-75 text-center rounded-3'
                  style={{ fontSize: '12px', padding: '2px' }}
                >
                  +2 Images
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel Info Section */}
        <div className='col-md-6 d-flex flex-column align-items-start '>
          <div
            className='card shadow-sm p-3 rounded bg-light'
            style={{ width: '29rem', height: '70vh' }}
          >
            {/* Hotel Name & Rating */}
            <div className='d-flex justify-content-between align-items-center mb-4'>
              <h5 className='mb-0  fw-bold'>Volta Vista Hotel</h5>
              <div className='badge bg-success text-white d-flex align-items-center'>
                <BsStarFill className='me-1' /> 4.5
              </div>
            </div>

            {/* Price */}
            <p className=' d-flex flex-start fs-5 fw-bold mb-1'>GH₵ 650</p>
            <p className=' d-flex flex-start text-muted mb-4'>Per night</p>

            {/* Location & Beds */}
            <div className='d-flex align-items-center text-muted pb-2'>
              <FaMapMarkerAlt className='me-1' />
              <span className='me-3'>Volta, Ghana</span>
              <FaBed className='me-1' />
              <span>2 beds</span>
            </div>

            {/* Favorite & Share Icons */}
            <div className='position-absolute top-5 end-0 pt-4  '>
              <AiOutlineHeart className='me-4 fs-5 text-secondary mt-3' />
            </div>
            <div className='position-absolute top-4 end-0 pt-5 '>
              <AiOutlineShareAlt className='me-4 fs-5 text-secondary mt-4' />
            </div>

            {/* Amenities */}
            <h6 className='mt-4 fw-bold d-flex flex-start text-secondary pb-4'>
              Amenities
            </h6>
            <div className='d-flex align-items-center gap-5'>
              <div className='text-center'>
                <FaUtensils size={38} className='fs-4 text-secondary' />
                <p className='small mb-2 mt-3 text-secondary'>Food</p>
              </div>
              <div className='text-center'>
                <FaCar size={38} className='fs-4  text-secondary' />
                <p className='small mb-2 mt-3 text-secondary'>Parking</p>
              </div>
              <div className='text-center'>
                <FaWifi size={38} className='fs-4 text-secondary' />
                <p className='small mb-2 mt-3 text-secondary'>Wifi</p>
              </div>
              <a href='#' className='text-primary small px-5'>
                7 more
              </a>
            </div>

            {/* Buttons */}
            <div className='d-flex justify-content-between mt-5'>
              <button
                className='btn btn-outline-primary d-flex align-items-center text-dark bg-light border-2 rounded-pill'
                style={{
                  
                  borderColor: '#00B1EF',
                }}
              >
                <AiOutlineHeart className='me-1' /> Add to Favorite
              </button>
              <button
                className='btn  d-flex align-items-center rounded-pill text-white '
                style={{
                  backgroundColor: '#00B1EF',
                  borderColor: '#00B1EF',
                }}
              >
                Book Now
                <FaArrowAltCircleRight className='ms-2' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
