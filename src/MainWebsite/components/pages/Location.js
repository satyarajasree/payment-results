import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Location.css";

const Location = () => {
  return (
    <div className="location_page">
        
      <div className="addres_part p-3 pt-3">
        <div className="location gapping">
          <div className="icon location_icon">
            <IoLocation fontSize={"20px"} />
          </div> 
          <div className="line_gap">
            <p className="">Plot No 130 1st Floor GSK ARCADE</p>
            <p className="">Beside Shilparamam  Bhagath Phase-2 </p>
            <p className="">Uppal Hyderabad-500039</p>
          </div>
        </div>

        <div className="location">
          <div className="icon">
            <MdEmail fontSize={"20px"} />
          </div>
          <div>
            <p>rajasreetowships@gmail.com</p>
          </div>
        </div>

        <div className="location">
          <div className="icon">
            <IoCall fontSize={"20PX"} />
          </div>
          <div>
            <p>(+91) 6262 666 999</p>
          </div>
        </div>
      </div>
      <div class="mapswrapper">
        <iframe
          width="100%"
          title="Hyderabad"
          height="325"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.558583717479!2d78.55266707493466!3d17.384960983501866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzA1LjkiTiA3OMKwMzMnMTguOSJF!5e0!3m2!1sen!2sin!4v1756547327169!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};
export default Location;