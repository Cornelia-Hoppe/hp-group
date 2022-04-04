import React from "react";
import {
  HufflepuffLogo,
  SlytherinLogo,
  GryffindorLogo,
  RavenclawLogo,
  HouseLogo,
} from "../images/images";
import "../styles/House.css"
import { Link } from "react-router-dom";
import HomeNav from "../assets/HomeNav"
export default function House() {
  return (
    <>
      <div className="house-container-h">
        <HomeNav />
        <div>
          
          <h1>CHOOSE HOUSE</h1>
        </div>
        <div className="house-images-h">
          <div className="house-row-h">
            <div className="single-house-h" id="gryffindor-h">
              <Link to="/gryffindor">
                <img src={GryffindorLogo} />
              </Link>
              <Link className="link-h" to="/gryffindor">
                Gryffindor
              </Link>
            </div>
            <div className="single-house-h" id="slytherin-h">
              <Link to="/slytherin">
                <img src={SlytherinLogo} />
              </Link>
              <Link className="link-h" to="/slytherin">
                Slytherin
              </Link>
            </div>
          </div>
          <div className="house-row-h">
            <div className="single-house-h" id="ravenclaw-h">
              <Link to="/ravenclaw">
                <img src={RavenclawLogo} />
              </Link>
              <Link className="link-h" to="/ravenclaw">
                Ravenclaw
              </Link>
            </div>
            <div className="single-house-h" id="hufflepuff-h">
              <Link to="/hufflepuff">
                <img src={HufflepuffLogo} />
              </Link>

              <Link className="link-h" to="/hufflepuff">
                Hufflepuff
              </Link>
            </div>
          </div>
        </div> 
      </div>
     
    </>
  );
}
