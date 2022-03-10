import React, { useEffect, useState } from "react";
import TopBar from "../Navbar/TopBar";
import { FiEdit3 } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Tickets = () => {

   const [ticket, processTicket] = useState([]);
   const getTicket = () => {
     const url = "http://localhost:5000/getallticket";
     fetch(url)
       .then((response) => response.json())
       .then((allproduct) => processTicket(allproduct));
   };

   useEffect(() => {
     getTicket();
   }, []);
  return (
    <>
      <TopBar title="Tickets" />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Link to="/">
              <button className="create_ticket_btn_home">
                Create New Ticket <AiOutlinePlus className="icons" />
              </button>
            </Link>
          </div>
        </div>
        <div className="row table_content">
          <div className="col-md-12">
            <table className="table table_bg text-center table-lg">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Project Name</th>
                  <th>Date</th>
                  <th>Due Date</th>
                  <th>Notes</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ticket.reverse().map((xproduct, index) => {
                  return (
                    <tr key={index}>
                      <td>{xproduct.ticketid}</td>
                      <td>{xproduct.projectname}</td>
                      <td>{xproduct.date}</td>
                      <td>{xproduct.duedate}</td>
                      <td>{xproduct.notes}</td>
                      <td>{xproduct.budget}</td>
                      <td>{xproduct.status}</td>
                      <td>{xproduct.image}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Tickets;
