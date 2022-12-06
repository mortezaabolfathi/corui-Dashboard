import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Sidebar from "../Components/sidebar/Sidebar";
import { CCol, CRow, CContainer } from "@coreui/react";
import Direction from "../Components/Direction";

const DefaultLayOut = () => {
  return (
    <CContainer fluid>
      <CRow>
          <CCol sm={8}>
            <Header />
          </CCol>
   
      </CRow>

      <CRow>
        <CCol className="" sm={4}>
          <Sidebar />
        </CCol>

        <CCol className="" sm={8}>
          <div className="box-direction d-flex align-items-center bg-secondary opacity-75">
          <Direction/>
          </div>
          <Outlet/>
        </CCol>

      </CRow>
    </CContainer>
  );
};

export default DefaultLayOut;
