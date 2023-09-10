// components/PreFooter.js
import React from "react";
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart,faInstagram } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'
// library.add(faHeart,faInstagram);
const Aboutus = () => {
  return (
    <div className="lowest">

        <div className="blk">
          <h4 className="he">About us</h4>

          <p>
            We, Multilingual Business Service Company, provide valuable insights
            about what you expect from us. Our Multilingual cum
            multidisciplinary business service help you to cut your operation
            cost. We understand your needs and build long-lasting happy
            relations with you. We develop loyal customers by delivering the
            highest customer satisfaction for long-term success. We are
            Flexible, Custom Configured and Customer delighted company. We are
            here to talk anytime.
          </p>
        </div>
        <div className="blk">
          <h4 className="he">Quick Link</h4>
          <div className="">
            <ul id="" className="menu">
              <li>
                <Link href="/">
                  <span>FOREIGN LANGUAGE</span> <span>SUPPORT </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>MARKET RESEARCH </span> <span> &amp; ANALYSIS </span>
                </Link>
              </li>
              <li className="">
                <Link href="/">
                  <span>TRANSCRIPTION</span> <span> SERVICES</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>MULTILINGUAL</span> <span> CALL CENTER</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>DATA ENTRY</span> <span> SERVICES </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>CREATIVE</span> <span> SERVICES </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>PHOTOT EDITING</span> <span> SERVICES </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>VIRTUAL ASSISTANT</span> <span> SERVICES </span>
                </Link>
              </li>
              {/* Add more list items for Quick Links */}
            </ul>
          </div>
        </div>
        <div className="blk">
          <h4 className="he">News Letter</h4>
          <div className="">
            <form >
              <div className="">
                <label htmlFor="">Name</label>
                <input type="text"/>
                
              </div>
              <div className="">
                <label htmlFor="">Email</label>
                <input
                  className=""
                  type="email"
                  name="ne"
                  value=""
                  required
                />
              </div>
              <div className="">
                <label>
                  <input type="checkbox" required className="" /> Subscribing I
                  accept the privacy rules of this site
                </label>
              </div>
              <div>
                <input className="submbut" type="submit" value="Subscribe" />
              </div>
            </form>
          </div>
        </div>
        <div className="blk">
          <h4 className="he">Social Links</h4>
          <div className="">
            <a href="/">
              
            </a>
            <a href="/">
             
              
            </a>
            <a href="/">
              
            </a>
            <a href="/">
            {/* <FontAwesomeIcon icon={faHeart} /> */}
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
           
            {/* <i class="fa fa-pinterest" aria-hidden="true"></i> */}
            </a>
          </div>
        </div>
      </div>

  );
};

export default Aboutus;
