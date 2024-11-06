import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import Calender from '../atoms/Calender.jsx';

function TaskDetails() {

    function createData(name,status, date) {
        return { name,status,date};
      }
    const rows = [
        createData('Meetings','Done','18/7'),
        createData('project','Done','Today'),
        

       
      ];


      function createDataUpcoming(name,status, date) {
        return { name,status,date};
      }
    const upcomingrows = [
        createDataUpcoming('Meetings','Pending','24/7'),
        createDataUpcoming('project','Done','24/7'),
        createDataUpcoming('Meetings','Pending','24/7'),
        createDataUpcoming('project','Done','24/7'),
      

        

       
      ];



  return (
    <div style={{display:'flex'}}>
<div>
<h3  style={{fontFamily:'Arial',marginLeft:'20px'}}>Recent Task</h3>
    <TableContainer component={Paper} sx={{marginLeft:'20px'}}>
    <Table sx={{ minWidth: 350 }} aria-label="simple table">

    <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            
              <TableCell align="right">
                {row.status === 'Done' ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#63E6BE', height: '20px', width: '20px' }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: '#cfcfcf', height: '20px', width: '20px' }}
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
<div style={{minHeight:'70px',marginLeft:'20px'}}>
<h3 style={{fontFamily:'Arial',marginLeft:'20px'}}>Upcoming</h3>
<TableContainer component={Paper} sx={{marginLeft:'20px',minHeight:'70px'}}>
    <Table sx={{ minWidth: 450 }} aria-label="simple table">

    <TableBody>
          {upcomingrows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">
                {row.status === 'Done' ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#63E6BE', height: '20px', width: '20px' }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircle}
                    style={{ color: '#cfcfcf', height: '20px', width: '20px' }}
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
</div>


<div style={{display:'flex',marginLeft:'40px',marginTop:'10px'}}>
    <Calender/>
</div>
    </div>
  )
}

export default TaskDetails