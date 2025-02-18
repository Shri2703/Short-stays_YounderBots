import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import paymentimg1 from '../images/Layer_1.png'
import paymentimg2 from '../images/Layer_2.png'
import paymentimg3 from '../images/Layer_3.png'
const Footer = () => {
  return (
    <footer className='container mt-5 py-4 border-top bg-light'>
      <div className='row text-dark'>
        {/* About Section */}
        <div className='col-md-6 d-flex flex-column align-items-start'>
          <h5 className='fw-bold'>ABOUT</h5>
          <p className='text-muted text-justify w-100 px-3 '>
            Welcome to vehicle rental, where comfort is everything. Beautiful
            room presentations, straightforward booking & reservation options, &
            a whole lot more awaits here.
          </p>
          <div className='d-flex gap-3 px-3'>
            <i className='bi bi-facebook fs-3 text-primary'></i>
            <i className='bi bi-instagram fs-3 text-danger'></i>
            <i className='bi bi-twitter fs-3 text-info'></i>
          </div>
        </div>

        {/* Contact Section */}
        <div className='col-md-3 d-flex flex-column align-items-start'>
          <h5 className='fw-bold mb-3'>CONTACT</h5>
          <p className='text-muted p-0 m-0'>
            A:{' '}
            <a href='#' className='text-decoration-none text-dark'>
              Via Venti Settembre, Roma
            </a>
          </p>
          <p className='p-0 m-0'>
            P:{' '}
            <a
              href='tel:+3155577783'
              className='text-decoration-none text-dark'
            >
              +31 555 777 83
            </a>
          </p>
          <p className='p-0 m-0'>App: Viber, WhatsApp </p>
          <p className='p-0 m-0'>
            E:
            <a
              href='mailto:info@easymove.com'
              className='text-decoration-none text-dark'
            >
              info@easymove.com
            </a>
          </p>

          <h5 className='fw-bold mt-3'>LOCATION</h5>
          <a href='#' className='text-decoration-none '>
            Show on map ↗
          </a>
        </div>

        {/* Payment Methods */}
        <div className='col-md-3 d-flex flex-column align-items-start'>
          <h5 className='fw-bold'>PAYMENT METHODS</h5>
          <p className='text-muted text-justify'>
            Pay any way you choose, we
            <br /> support all payment options.
          </p>
          <div className='d-flex gap-2'>
            <img
              src={paymentimg1}
              alt='PayPal'
              height='50'
              className='border rounded p-1'
            />
            <img
              src={paymentimg2}
              alt='Visa'
              height='50'
              className='border rounded p-1'
            />
            <img
              src={paymentimg3}
              alt='MasterCard'
              height='50'
              className='border rounded p-1'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
