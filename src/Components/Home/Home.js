import React from 'react'
import TopBar from '../Navbar/TopBar';
import {FiEdit3} from 'react-icons/fi'
import {ImBin} from 'react-icons/im'

const Home = () => {
  return (
    <>
      <TopBar title="Dashboard" />
      <div className="container mt-5 pt-5">
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
                <tr className="fs-6 fw-normal">
                  <td>tic #01</td>
                  <td>Logo</td>
                  <td>03/03/2022</td>
                  <td>10/03/2022</td>
                  <td>Logo, 2nd, Vector File</td>
                  <td>#500</td>
                  <td style={{ color: "#187381" }}>Approval</td>
                  <td class>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        fontSize: "18px",
                      }}
                    >
                      <FiEdit3 />
                      <ImBin className="text-danger" />
                    </div>
                  </td>
                </tr>
                <tr className="fs-6 fw-normal">
                  <td>tic #02</td>
                  <td>Logo</td>
                  <td>03/03/2022</td>
                  <td>10/03/2022</td>
                  <td>Logo, 2nd, Vector File</td>
                  <td>#500</td>
                  <td style={{ color: "#187381" }}>Approval</td>
                  <td class>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        fontSize: "18px",
                      }}
                    >
                      <FiEdit3 />
                      <ImBin className="text-danger" />
                    </div>
                  </td>
                </tr>
                <tr className="fs-6 fw-normal">
                  <td>tic #03</td>
                  <td>Logo</td>
                  <td>03/03/2022</td>
                  <td>10/03/2022</td>
                  <td>Logo, 2nd, Vector File</td>
                  <td>#500</td>
                  <td style={{ color: "#187381" }}>Approval</td>
                  <td class>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        fontSize: "18px",
                      }}
                    >
                      <FiEdit3 />
                      <ImBin className="text-danger" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home