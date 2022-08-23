import React from "react";
import MenuList from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import'../styles/Menu.css'


const Menu = () => {
  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((am) => {
            return (

                <MenuItem
                 
                  image={am.image}
                  name={am.name}
                  price={am.price}
                />
              
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
