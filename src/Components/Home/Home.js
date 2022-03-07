import React from 'react'
import TopBar from '../Navbar/TopBar';
import {FiEdit3} from 'react-icons/fi'
import {ImBin} from 'react-icons/im'
import { AiOutlinePlus } from "react-icons/ai";
import './Home.css'

const Home = () => {
  return (
    <>
      <TopBar title="Dashboard" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="parent_wrapper">
              <div className="childone">
                <h5 className="text-center projects_title">
                  Total Projects <span className="projects_title_span">25</span>
                </h5>
              </div>
              <div className="childtwo">
                <h5 className="text-center projects_title">
                  Pending Projects <span className="projects_title_span_two">10</span>
                </h5>
              </div>
              <div className="childthree">
                <div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle dashboard_profile_pic"
                    height="35"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />{" "}
                  <h3
                    className="fs-5 text-center mt-5 py-5"
                    style={{ color: "#187381" }}
                  >
                    XYZ CLIENT
                  </h3>
                </div>
                <hr style={{ margin: "10px" }} />
                <div className="user_data_wrapper">
                  <h5 className=" user_data_title">CONTACT PERSON</h5>
                  <h6 className="user_data">RAJKUMAR</h6>
                </div>
                <div className="user_data_wrapper mt-4">
                  <h5 className=" user_data_title">PHONE NUMBER</h5>
                  <h6 className="user_data">88888888</h6>
                </div>
                <div className="user_data_wrapper mt-4">
                  <h5 className=" user_data_title">EMAIL ID</h5>
                  <h6 className="user_data">RAJKUMAR@GMAIL.COM</h6>
                </div>
                <div className="user_data_wrapper mt-4">
                  <h5 className=" user_data_title">WEBSITE</h5>
                  <h6 className="user_data">https://www.xyz.com</h6>
                </div>
                <div className="user_data_wrapper mt-4">
                  <h5 className=" user_data_title">ABOUT</h5>
                  <h6 className="user_data">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home