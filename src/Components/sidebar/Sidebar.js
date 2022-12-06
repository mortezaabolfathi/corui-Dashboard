import React from "react";

import {
  CSidebarBrand,
  CSidebar,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CSidebarToggler,
  CBadge,
  CNavGroup,
} from "@coreui/react";
import {
  cilSpeedometer,
  cilPuzzle,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="box-Navbar">
      <CSidebar className="w-100">
        <CSidebarBrand>پنل کنترل وضعیت گلخانه</CSidebarBrand>

        <CSidebarNav>
          <CNavTitle>گلخانه شماره یک</CNavTitle>

          <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            <Link to="/dashboard/dataDashboard">مشاهده وضعیت فعلی</Link>
          </CNavItem>

          <CNavGroup toggler="تنظیم دمای گلخانه" href="/dashboard/TmpMode">
            <CNavItem  className="item-select-navbar-tmp">
              <Link to="/dashboard/TmpMode">
                <h5 className="text-danger">مشاهده وضعیت دما</h5>
              </Link>
            </CNavItem>
            <CNavItem className="item-select-navbar-tmp mt-4">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} />
              <h5 className="text-danger" type="button">افزایش دما</h5>
            </CNavItem>
            <CNavItem className="item-select-navbar-tmp mt-2">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} />
              <h5 className="text-center text-success" type="button">کاهش دما</h5>
            </CNavItem>
          </CNavGroup>

          <CNavGroup toggler="تنظیم نور گلخانه">
          <CNavItem  className="item-select-navbar-tmp">
              <Link to="/dashboard/lightMode">
                <h5 className="text-danger">مشاهده وضعیت نور</h5>
              </Link>
            </CNavItem>
            <CNavItem  className="item-select-navbar-tmp mt-4">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} />
              <h5 className="text-danger" type="button">افزایش نور</h5>
            </CNavItem>
            <CNavItem className="item-select-navbar-tmp mt-2">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} />
              <h5 className="text-center text-success" type="button">کاهش نور</h5>
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>

        <CSidebarToggler />
      </CSidebar>
    </div>
  );
};

export default Sidebar;
