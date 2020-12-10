import React from "react";

const DairyProduct = () => {
  return (
    <div>
      <nav className='nav sales-header'>
        <div className='nav-link disabled'>Dairy Product</div>
      </nav>
      <div className='section-main d-flex justify-content-around align-items-center'>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dairyProduct/First.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Milk
            </a>
          </div>
        </div>
        <div className='card  section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dairyProduct/second.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Butter
            </a>
          </div>
        </div>
        <div className='card section-product'>
          <img
            className='card-img-top'
            src='../../assets/images/product/dairyProduct/three.jpg'
            alt='Card image cap'
          />
          <div className='card-body p-0 pt-1'>
            <a href='#' className='btn btn-primary w-100'>
              Curd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DairyProduct;
