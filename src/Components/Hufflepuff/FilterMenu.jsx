import React from "react";
import DropdownMenu from "./menuData";
import MenuItem from "./ItemMenu";

const FilterMenu = (props) => {
  return (

      <ul className="filterbtn">
        {DropdownMenu.map((item) => {
          return (
            <li onClick={props.onClick} key={item.title} >
              <MenuItem item={item} />
            </li>
          );
        })}
      </ul>
  );
};

export default FilterMenu;
