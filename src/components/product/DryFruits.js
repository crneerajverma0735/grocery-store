import React from "react";

const DryFruits = () => {
  return (
    <div>
      <nav className='nav sales-header'>
        <div className='nav-link disabled'>Dry Fruits</div>
      </nav>
      <div className='section-main d-flex justify-content-around align-items-center'>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dryFruits/First.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Almond
            </a>
          </div>
        </div>
        <div className='card  section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dryFruits/second.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Cashew
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dryFruits/third.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Walnut
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dryFruits/fourth.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <button className='btn btn-primary w-100'>Pistachio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DryFruits;
