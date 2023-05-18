import React from "react";

const Shop = () => {
  return (
    <div>
      <div className=" border border-red-700">
        <h1 className="text text-center pt-2 pb-2">Best selling Products</h1>
        <div className="grid grid-rows-1 grid-cols-3 gap-3">
          <div>
            <img
              src="https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg"
              alt=" one"
            />
            <div className="text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img
              src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
              alt=" two"
            />
            <div className="text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img
              src="https://www.washingtonpost.com/resizer/TRd_PiH-XWTQ-x4WxlRv0XnfQO8=/arc-anglerfish-washpost-prod-washpost/public/C467I24CPAONX27SFIT3ICMAMY.jpg"
              alt=" three"
            />
            <div className="text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-blue-900">
        <h1 className="text text-center pt-2 pb-2">Shop</h1>
        <div className="">
          <h1>sort</h1>
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-3">
          <div>
            <img
              src="https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg"
              alt=" one"
            />
            <div className="text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img
              src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
              alt=" two"
            />
            <div className="text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img
              src="https://www.washingtonpost.com/resizer/TRd_PiH-XWTQ-x4WxlRv0XnfQO8=/arc-anglerfish-washpost-prod-washpost/public/C467I24CPAONX27SFIT3ICMAMY.jpg"
              alt=" three"
            />
            <div className="text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Shop };
