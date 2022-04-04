import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <div>
      <div className="filterhp" onClick={() => setIsSubMenuShow(!isSubMenuShow)}>
      {item.title == "all" ? <> {item.title}</>  : <>{item.title} <i class="fa-solid fa-chevron-down"></i></> }
      </div>
      {item.dropdown && isSubMenuShow && <SubMenu dropDownItem={item.dropdown} />}
    </div>
  );
};

const SubMenu = ({ dropDownItem }) => {
  return (
    <div >
      <ul >
        {dropDownItem.map((item) => {
          return <option value={item.dropdown} key={item.option}>{item.option}</option>;
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
