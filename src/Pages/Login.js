import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useDispatch, useSelector} from "react-redux";
import { findUser } from "../redux/dataUser";

const Login = () => {
  const [inputUser, setInputUser] = useState({
    username: "",
    password: "",
  });

  const [validation, setValidation] = useState("")

const dispatch = useDispatch()
const accept=useSelector(state=>state.user.accept);
const notAccept=useSelector(state=>state.user.notAccept)
const navigate=useNavigate()

useEffect(()=>{
  if(accept){
    console.log("accept is true")
    navigate("/dashboard/dataDashboard")
  }
  if(notAccept){
    setValidation("کاربری با این مشخصات در سیستم ثبت نشده است")
  }
},[accept, notAccept])

const inputHandler = (e) => {
    const value = e.target.value;
    setInputUser({
      ...inputUser,
      [e.target.name]: value,
    });
  };

  const userCheck = ()=>{
    if(inputUser.username && inputUser.password){
      dispatch(findUser(inputUser))
    } else {
      setValidation("لطفا رمز عبور و نام کاربری خودرا وارد کنید")
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>وارد شوید</h1>
                    <p className="text-medium-emphasis">
                      به پنل مدیریت خود برای تنظیم گلخانه وارد شوید
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => inputHandler(e)}
                        name="username"
                        placeholder="نام کاربری"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => inputHandler(e)}
                        type="password"
                        placeholder="رمز عبور"
                        name="password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={()=>userCheck()}>
                            ورود
                          </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          فراموشی رمز عبور!
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>کنترل دما و نور گلخانه</h2>
                    <p>
                      برای وارد شدن به داشبورد کنترل دما و نور گلخانه باید با
                      نام کاربری و پسورد خود وارد شوید
                    </p>
                    <p className="text-black">
                      نام کاربری و رمز عبور باید توسط مجموعه‌ی صبا انرژی برای
                      شما تعریف شده باشد.{" "}
                    </p>
                    <>
                    {validation ? (<p className="text-danger bg-dark">{validation}</p>):(<></>)}
                    </>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
