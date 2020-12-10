import React from "react";

const Pulses = () => {
  return (
    <div>
      <nav className='nav sales-header'>
        <div className='nav-link disabled'>Pulses</div>
      </nav>
      <div className='section-main d-flex justify-content-around align-items-center'>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/pulses/First.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Pigeon Pea
            </a>
          </div>
        </div>
        <div className='card  section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/pulses/second.png'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Mung bean
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/pulses/third.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Red Lentil
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/pulses/four.webp'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <button className='btn btn-primary w-100'>Chana Dal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pulses;
