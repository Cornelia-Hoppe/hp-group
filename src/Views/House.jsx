import React from "react";
import {
  Hufflepuff,
  Slytherin,
  Gryffindor,
  Ravenclaw,
  HouseLogo,
} from "../images/images";
import { Link } from "react-router-dom";
export default function House() {
  return (
    <>
      <div className="house-container-h">
        <div>
          <Link to="/">
            <img id="house-logo-h" src={HouseLogo} />
          </Link>
          <h1>CHOOSE HOUSE</h1>
        </div>
        <div className="house-images-h">
          <div className="house-row-h">
            <div className="single-house-h" id="gryffindor-h">
              <Link to="/gryffindor">
                <img src={Gryffindor} />
              </Link>
              <Link className="link-h" to="/gryffindor">
                Gryffindor
              </Link>
            </div>
            <div className="single-house-h" id="slytherin-h">
              <Link to="/slytherin">
                <img src={Slytherin} />
              </Link>
              <Link className="link-h" to="/slytherin">
                Slytherin
              </Link>
            </div>
          </div>
          <div className="house-row-h">
            <div className="single-house-h" id="ravenclaw-h">
              <Link to="/ravenclaw">
                <img src={Ravenclaw} />
              </Link>
              <Link className="link-h" to="/ravenclaw">
                Ravenclaw
              </Link>
            </div>
            <div className="single-house-h" id="hufflepuff-h">
              <Link to="/hufflepuff">
                <img src={Hufflepuff} />
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
