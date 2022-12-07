import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CContainer,
} from "@coreui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileUser = () => {
  const { username, namePersonal, TimeActive, TimeDate } = useSelector(
    (state) => state.user.nameUserLoginNow
  );
  return (
    <div className="box-profile">
      <CContainer>
        <CCard>
          <CCardHeader component="h5">
            نام کاربر  : {username}
          </CCardHeader>

          <CCardBody className="d-flex flex-column justify-content-center gap-10 align-item-center ">
            <CCardTitle>اطلاعات کاربری و تاریخ فعالیت شما</CCardTitle>

            <CCardText>
              <span className="text-info">
                {" "}
                تاریخ ورود به سایتم - میلادی :{" "}
              </span>

              {TimeDate}
            </CCardText>
            <CCardText>
              <span className="text-info"> ساعت فعلی فعالیت :</span>
              {TimeActive}
            </CCardText>
            <CCardText>
              <span className="text-info"> شماره پرسنلی : </span>

              {namePersonal}
            </CCardText>

            <Link to="/dashboard/dataDashboard">
              <CButton>بازگشت به داشبورد</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  );
};

export default ProfileUser;
