import React from "react";

const Shop = () => {
  return (
    <div>
      <h1 className="text text-center border border-cyan-600 pt-6 pb-6">Shop</h1>
      <div className=" border border-red-700">
        <div className="grid grid-rows-3 grid-cols-3 gap-3">
          <div>
            <img src="https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg" alt=" one"/>
            <div className="border border-black text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt=" two"/>
            <div className="border border-black text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img src="https://www.washingtonpost.com/resizer/TRd_PiH-XWTQ-x4WxlRv0XnfQO8=/arc-anglerfish-washpost-prod-washpost/public/C467I24CPAONX27SFIT3ICMAMY.jpg" alt=" three"/>
            <div className="border border-black text text-center">
              <h1>This cat</h1>
              <p>This is the cat</p>
              <p>price :</p>
            </div>
          </div>
          <div>
            <img src="" alt="four"/>
          </div>
          <div>
            <img src="" alt="five"/>
          </div>
          <div>
            <img src="" alt="six"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Shop };
