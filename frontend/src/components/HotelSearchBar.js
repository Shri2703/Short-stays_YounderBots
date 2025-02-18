import React from 'react'
import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaChevronDown,
  FaArrowLeft,
  FaHome,
} from 'react-icons/fa'

const HotelSearchBar = () => {

   
  return (
    <div className='container mt-4'>
      <div className='d-flex align-items-center'>
        {/* Back Arrow */}
        <button className='btn me-2'>
          <FaArrowLeft size={18} className='text-muted' />
        </button>

        {/* Search Bar Full Width */}
        <div className='d-flex w-100 bg-white p-3 rounded shadow-sm border align-items-center'>
          {/* Location */}
          <div className='d-flex flex-column mx-4 '>
            <div className='d-flex align-items-center'>
              <FaMapMarkerAlt size={16} className='text-muted me-2' />
              <p className='text-muted m-0 p-2'>Location</p>
            </div>
            <p className='fw-bold m-0'>
              Cape Coast, Ghana <FaSearch className='text-muted ms-2' />
            </p>
          </div>

          {/* Check-in Date */}
          <div className='d-flex flex-column mx-4'>
            <div className='d-flex align-items-center'>
              <FaCalendarAlt size={16} className='text-muted me-2' />
              <p className='text-muted m-0 p-2'>Check-in date</p>
            </div>
            <p className='fw-bold m-0'>April 04, 25</p>
          </div>

          {/* Check-out Date */}
          <div className='d-flex flex-column mx-4'>
            <div className='d-flex align-items-center'>
              <FaCalendarAlt size={16} className='text-muted me-2' />
              <p className='text-muted m-0 p-2'>Check-out date</p>
            </div>
            <p className='fw-bold m-0'>April 05, 25</p>
          </div>

          {/* Rooms */}
          <div className='d-flex flex-column mx-4'>
            <p className='text-muted m-0 p-2'>
              <FaHome className='text-muted me-2' /> Rooms
            </p>
            <p className='fw-bold m-0'>
              1 Room <FaChevronDown className='text-muted ms-2' />
            </p>
          </div>

          {/* Guests */}
          <div className='d-flex flex-column mx-4'>
            <p className='text-muted m-0 p-2'>
              <FaUsers className='text-muted me-2' /> Guests
            </p>
            <p className='fw-bold m-0'>
              2 Adults, 1 Child <FaChevronDown className='text-muted ms-2' />
            </p>
          </div>

          {/* Search Button Positioned at 3/4 */}
          <div className='ms-auto'>
            <button className='btn btn-dark'>
              <FaSearch size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelSearchBar
