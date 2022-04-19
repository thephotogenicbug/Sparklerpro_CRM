import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SideBar from '../Navbar/SideBar';
import TopBar from '../Navbar/TopBar';

const EditTicket = () => {
    const {id} = useParams()
    const [myservice, processMyService] = useState("")
    const [subservice, processSubService] = useState("");
    const [budget, processMyBudget] = useState("")
    const [notes, processMyNotes] = useState("")

    const getTicketInfo = () =>{
        var url = "http://localhost:5000/getticketinfo";
        var input = {"id": id};
        axios.post(url , input)
        .then(response =>{
            processMyService(response.data[0].myservice)
            processSubService(response.data[0].subservice);
            processMyBudget(response.data[0].budget);
            processMyNotes(response.data[0].notes);
        })
    }

    useEffect(() =>{
        getTicketInfo()
    },[])


       const updateTicket = () => {
         var url = "http://localhost:5000/updateticket";
         var jsonData = {
           myservice: myservice,
           subservice: subservice,
           budget: budget,
           notes: notes,
           id: id,
         };
         axios.post(url, jsonData).then((response) => {
           
         });
       };

  return (
    <>
     <SideBar>


      <TopBar title="Edit Ticket" />
      <div className="container mt-5 py-5">
        <div className="col-md-12 ">
          <div className="row data_content">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                value={myservice}
                onChange={(e) => processMyService(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                value={subservice}
                onChange={(e) => processSubService(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                value={budget}
                onChange={(e) => processMyBudget(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                value={notes}
                onChange={(e) => processMyNotes(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4 py-4 data_content_button">
              <button className="data_content_submit" onClick={updateTicket}>
                SUBMIT
              </button>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
     </SideBar>
    </>
  );
}

export default EditTicket