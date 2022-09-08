import React from "react";
import Modal from "react-bootstrap/Modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import { VscChromeClose } from "react-icons/vsc";
import { GoPrimitiveDot } from "react-icons/go";
import getAllData from "./../../Assets/JSON/Death and Recovered.json";

import CalendarButton from "./Calendar Button";
import PieChart from "./Pie Chart";
import BarChart from "./Bar Chart";

function CountryInfo(props) {
  const labelsDeath = Object.keys(getAllData.deaths);
  const dataDeaths = Object.values(getAllData.deaths);

  const labelsRecovered = Object.keys(getAllData.recovered);
  const dataRecovered = Object.values(getAllData.recovered);

  return (
    <>
      <Modal size="md" show={props.handleShow} onHide={props.handleClose}>
        <Modal.Body className="bg-gray-800">
          <div onClick={props.handleClose} className="float-right">
            <VscChromeClose color="white" />
          </div>
          <div className="text-mediumturquoise text-lg mb-4">
            {props.item.country}
          </div>
          <div className="pb-4">
            <div className="text-white text-md">{props.item.cases} </div>
            <div className="text-lightskyblue text-xs">
              Total Coronovirus Cases
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-white text-md">{props.item.active} </div>

              <div className="text-lightskyblue text-xs">Active Cases</div>
            </div>

            <div>
              <div className="text-white text-md">{props.item.recovered} </div>
              <div className="text-lightskyblue text-xs"> Closed Cases</div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-900 p-6 mb-4">
            <div className="flex">
              <div className="flex-none w-3/4">
                <PieChart
                  active={props.item.active}
                  closed={props.item.recovered}
                />
              </div>
              <div>
                <CalendarButton value="March 2020" />
                <div className="flex text-white text-xs mt-4 mb-2">
                  <GoPrimitiveDot
                    className="mt-1 mr-2"
                    color="mediumturquoise"
                  />
                  Close Cases
                </div>
                <div className="flex text-white text-xs">
                  <GoPrimitiveDot className="mt-1 mr-2" color="royalblue" />
                  Active Cases
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-xs mb-2">Deaths</div>
          <div className="rounded-lg bg-gray-900 p-6">
            <BarChart
              labelName="No of Deaths"
              labels={labelsDeath}
              data={dataDeaths}
            />
          </div>
          <div className="text-white text-xs mb-2">Recovered</div>
          <div className="rounded-lg bg-gray-900 p-6">
            <BarChart
              labelName="No of Recovered"
              labels={labelsRecovered}
              data={dataRecovered}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CountryInfo;
