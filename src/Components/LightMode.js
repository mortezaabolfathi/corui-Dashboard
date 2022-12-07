import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJustLight } from "../redux/dataTemp";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  CFormRange,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CButton,
} from "@coreui/react";

const LightMode = () => {
  const dispatch = useDispatch();
  dispatch(getJustLight());
  const labels = useSelector((state) => state.tempLight.labels);
  const allDatasets = useSelector((state) => state.tempLight.justLight);
  const datasets = [allDatasets];
  const [rangeLight, setRangeLight] = useState("");

  //modal handler
    //modal handler
    const [visibleSm, setVisibleSm] = useState(false);
    const userOnline=useSelector((state)=>state.user.nameUserLoginNow.username)

  const state = {
    labels,
    datasets,
  };

  const handelSettingTemp = (e) => {
    const value = e.target.value;
    setRangeLight(`${value} درجه`);
  };
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      <div className="mt-2">
      <div className="d-flex flex-row align-items-center justify-content-around">
          <div className="d-flex flex-row align-items-center">
            <h3>تنظیم نور :</h3>
            <p className="text-danger h5 px-2"> {rangeLight} </p>
          </div>
          <CButton onClick={() => setVisibleSm(!visibleSm)}>تایید نور {rangeLight}</CButton>
        </div>
        <div className="box-setting-temp">
          <CFormRange
            min="10"
            max="30"
            step="1"
            label="نمی‌توانید بیشتر از حد مجاز تعریف شده، نور را افزایش و یا کاهش دهید"
            defaultValue="3"
            id="customRange3"
            onChange={(e) => handelSettingTemp(e)}
          />
        </div>
      </div>
      <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
        <CModalHeader>
          <CModalTitle>{userOnline}</CModalTitle>
        </CModalHeader>
        <CModalBody> نور گلخانه را به {rangeLight} درجه تغییر دادید</CModalBody>
      </CModal>
    </div>
  );
};

export default LightMode;
