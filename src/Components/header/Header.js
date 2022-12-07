import React, { useState } from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CContainer,
  CNavbarBrand,
} from "@coreui/react";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

const Header = () => {
  const useName = useSelector((state) => state.user.nameUserLoginNow);
  // console.log("useName", useName)
  return (
    <div id="box-header">
      <CNavbar colorScheme="light">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt=""
              width="34"
              height="34"
              className="d-inline-block align-top mx-2"
            />
            {useName}
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </div>
  );
};

export default Header;
