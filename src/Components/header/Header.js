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
import {} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Header = () => {
  return (
    <div id="box-header">
    <CNavbar colorScheme="light" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand href="#">
          <img
            src=""
            alt=""
            width="22"
            height="24"
            className="d-inline-block align-top"
          />
          نام و نام خانوادگی
        </CNavbarBrand>
      </CContainer>
    </CNavbar>
    </div>
  );
};

export default Header;
