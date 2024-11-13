import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import Calender from "../atoms/Calender.jsx";
import "../styles/calender.css";
import "../styles/taskdetails.css";


function TaskDetails() {
  // function createData(name, status, date) {
  //   return { name, status, date };
  // }
  const rows = [
    { name: "Meetings", status: "Pending", date: "24/7" },
    { name: "project", status: "Done", date: "24/7" },
   
  ];


  const upcomingrows = [
    { name: "Meetings", status: "Pending", date: "24/7" },
    { name: "project", status: "Done", date: "24/7" },
    { name: "Meetings", status: "Pending", date: "24/7" },
    { name: "project", status: "Done", date: "24/7" },
   

  ];
  

  return (
    <div className="task-container-main">
      <div
        style={{
          backgroundColor: "#f6f7fa",
          borderRadius: "20px",
          padding: "10px",
          height: "330px",
        }}

      >
        <h3 style={{ fontFamily: "Arial", marginLeft: "20px" }}>Recent Task</h3>
        <TableContainer >
          <Table sx={{ minWidth: '40rem'}} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 },width:'30px' }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="right">
                    {row.status === "Done" ? (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{
                          color: "#63E6BE",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "#cfcfcf",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
       
        className="upcoming-container"
      >
        <TableContainer sx={{ marginLeft: "10px" }}>
          <h3 style={{ fontFamily: "Arial", marginLeft: "20px" }}>Upcoming</h3>
          <Table sx={{ minWidth: 330,overflowY:'auto'  }} aria-label="simple table">
            <TableBody>
              {upcomingrows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } ,width:'30px' }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="right">
                    {row.status === "Done" ? (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{
                          color: "#63E6BE",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{
                          color: "#cfcfcf",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                    )}
                  </TableCell>

                  {/* <TableCell align="right">{row.status}</TableCell> */}
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    
        <div className="calender-container">
   
          <Calender />
 
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
