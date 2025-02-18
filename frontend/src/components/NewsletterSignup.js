
import { FaEnvelope } from "react-icons/fa";
const NewsletterSignup = () => {


    return (
      <div className='container py-5'>
        <div className='row align-items-center  p-4 rounded'>
          <div className='col-md-6 d-flex align-items-center'>
            <FaEnvelope className='fs-1 me-3' />
            <h5 className='mb-0'>Join our weekly Newsletter</h5>
          </div>
          <div className='col-md-6 d-flex'>
            <input
              type='email'
              className='form-control me-2'
              placeholder='Email Address'
            />
            <button
              className='btn btn-primary text-nowrap rounded-pill'
              style={{
                backgroundColor: '#00B1EF',
                borderColor: '#00B1EF',
              }}
            >
              SIGNUP ME
            </button>
          </div>
        </div>
      </div>
    )
  
};

export default NewsletterSignup;