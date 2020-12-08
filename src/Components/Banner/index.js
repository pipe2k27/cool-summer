import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return(
      <div>
        <div className="banner1 center">
      <div className="center-all">
      <h1 className='text-center'>Piletas a medida!</h1>
      <p className="text-center">Tené la mejor pileta con accesorios en tu casa en menos de 15 días!</p>
      <img
        src={process.env.PUBLIC_URL + "/images/flag.png"}
        className="center flag"
      ></img>
      <a className='button center button-width'><i class="fab fa-whatsapp"></i> Contactanos por whatsapp!</a>
      </div>
      <div>
      <img
        src={process.env.PUBLIC_URL + "/images/pool.png"}
        className="banner-pic center"
      ></img>
      </div>

</div>
      <div>
      <img
        src={process.env.PUBLIC_URL + "/images/banner.jpg"}
        className="banner-photo center"
      ></img>
      </div>
</div>
    )
}

export default Banner;