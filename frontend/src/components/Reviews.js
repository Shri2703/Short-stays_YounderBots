import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaArrowDown } from 'react-icons/fa'

const Reviews = () => {
  return (
    <div className='container mt-4'>
      <div className='border p-4 rounded'>
        {/* Header */}
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-3 align-items-center pb-2'>
            <h5>Reviews</h5>
            <span className='badge bg-success me-2'> 4.5 ★</span>
          </div>

          <div className='d-flex align-items-center gap-3'>
            <span className='ms-2 text-warning'>☆☆☆☆☆</span>
            <span className='text-muted'>Write your review ✏️</span>
          </div>
        </div>

        {/* Review Items */}
        {[1, 2].map((review, index) => (
          <div key={index} className='mt-4'>
            <div className='d-flex align-items-center'>
              <div></div>
            </div>

            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className='me-2'>
                  <i className='bi bi-person-circle fs-3'></i>
                </div>
                <strong>Bright</strong>
              </div>
              <div>
                <p className='text-muted mb-0'>Jan 12 2025</p>
                <span className='text-warning'>★★★★☆</span>
              </div>
            </div>

            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}

        {/* Show all button */}
        <div className='text-center mt-3'>
          <button className='btn btn-link text-danger text-decoration-none'>
            Show all <FaArrowDown />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reviews
