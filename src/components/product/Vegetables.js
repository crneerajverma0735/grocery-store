import React from "react";

const Vegetable = () => {
  return (
    <div>
      <nav className='nav sales-header'>
        <div className='nav-link disabled'>Vegetable & Fruits</div>
      </nav>
      <div className='section-main d-flex flex-wrap justify-content-around align-items-center'>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/First.png'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Broccoli
            </a>
          </div>
        </div>
        <div className='card  section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/second.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Spinach
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/third.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Sweet Potato
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/fourth.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Potatoes
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/fifth.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Apple
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/sixth.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Orange
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/seventh.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Pomogranate
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/vegetables/eighth.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Mango
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegetable;
