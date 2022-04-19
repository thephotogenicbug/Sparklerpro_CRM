import React, { useEffect, useState } from "react";
import TopBar from "../Navbar/TopBar";
import { FiEdit3 } from "react-icons/fi";
import { ImBin } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "../Navbar/SideBar";
const Tickets = () => {

   const [ticket, processTicket] = useState([]);
   const [deleteTicketMessage, processDeleteTicketMessage] = useState("")
   const getTicket = () => {
     const url = "http://localhost:5000/getallticket";
     fetch(url)
       .then((response) => response.json())
       .then((allproduct) => processTicket(allproduct));
   };

   useEffect(() => {
     getTicket();
   }, [deleteTicketMessage]);


   const deleteTicket = (id) =>{
     axios.delete(`http://localhost:5000/deleteticket/${id}`)
     .then(response => processDeleteTicketMessage("Ticket Deleted Successfully...!"))
   }

    console.log(deleteTicketMessage)


   
  return (
    <>
      <SideBar>

      <TopBar title="Tickets" />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-center text-danger">{deleteTicketMessage}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Link to="/createticket">
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
                  <th>Service Name</th>
                  <th>Sub Service Name</th>
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
                      <td>{xproduct.myservice}</td>
                      <td>{xproduct.subservice}</td>
                      <td>{xproduct.notes}</td>
                      <td>{xproduct.budget}</td>
                      <td>{xproduct.status}</td>

                      <td>
                        <Link to={`/${xproduct.id}/edit-ticket`}>
                          <i class="fa-solid fa-pen-to-square m-2 text-warning"></i>
                        </Link>
                        <i
                          class="fa-solid fa-trash-can m-2 text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            deleteTicket(xproduct.id);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div></div>
      </SideBar>
    </>
  );
};

export default Tickets;
