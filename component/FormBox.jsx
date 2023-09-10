import React from "react";
import EnquiryForm from "./Enquiryform";

import clienticom from '@public/assets/icons/client.png'

const FormBox = () => {
  return (
    <div className=" fbox">
      
      <div className="requote">
        <h3 className="quote">
          <span id="quote-head">
            Request a <span id="quote-head-part"> FREE QUOTE </span>
          </span>
          <span className="ntext">Partner with Multilingual Experts!</span>
          <span className="ntext">Save your cost within 12 Hours.</span>
        </h3>
        <EnquiryForm />
      </div>
      <div className="clients">
        <h3 className="ty">Trusted by</h3>
        <div className="clim">
          <div>
            <img src='https://cdn1.iconfinder.com/data/icons/symbol-color-users-1/32/user-link-512.png'  alt="clienticon" />
          </div>
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/symbol-color-users-1/32/user-link-512.png" alt="clienticon" />
          </div>
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/symbol-color-users-1/32/user-link-512.png" alt="clienticon" />
          </div>
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/symbol-color-users-1/32/user-link-512.png" alt="clienticon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBox;
