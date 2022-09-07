import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiCalendar } from "react-icons/fi";
import CalendarButton from "./Calendar Button";
import PieChart from "./Pie Chart";

function CountryInfo(props) {
  return (
    <>
      <Modal size="md" show={props.handleShow} onHide={props.handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title> {props.item.country}</Modal.Title>
        </Modal.Header> */}

        <Modal.Body className="bg-gray-800">
          <div onClick={props.handleClose} className="float-right">
            <FiCalendar color="white" />{" "}
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
                {/* <div className="text-lightskyblue text-xs">Pie Chart</div> */}
              </div>
              <div>
                <CalendarButton value="March 2020" />
                <div className="flex text-white text-xs mt-4 mb-2">
                  <FiCalendar className="mt-1 mr-2" color="mediumturquoise" />
                  Close Cases
                </div>
                <div className="flex text-white text-xs">
                  <FiCalendar className="mt-1 mr-2" color="royalblue" />
                  Active Cases
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-xs mb-2">Deaths</div>
          <div className="rounded-lg bg-gray-900 p-6">
            <div className="text-lightskyblue text-xs">Bar Chart</div>
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default CountryInfo;
