import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, Chip, TextField, Button } from '@mui/material';
import TaskRow from './TaskRow';

import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import sectionData from '../../data/SectionData';



  const allTags=['All','Attention','Bill','Confirmed']
function All() {
  
  const [selectedTaskId, setSelectedTaskId] = useState(null);
const [activesection,setActiveSection]=useState('')



const totalTasks = sectionData.reduce((total, section) => total + section.tasks.length, 0);
const calculateProgress = (section) => {
  const completedTasks = section.tasks.filter((task) => task.status === true);
  const progress = (completedTasks.length / section.tasks.length) * 100;
  return progress || 0; // return 0 if no tasks
};

const [progressvalue, setProgressValue] = useState(0);
// const completedTasks=findSectionTasks.flatMap(item=>item.tasks.filter(task=>task.status==true))
// console.log('complete',completedTasks)

// console.log("Length of completed task",totalTasks,completedTasks.length);


      const [tasks, setTasks] = useState(sectionData);
      const toggleTaskStatus = (sectionIndex, taskId) => {
        setTasks(prevSections =>
          prevSections.map((section, secIndex) => {
            if (secIndex === sectionIndex) {
              return {
                ...section,
                tasks: section.tasks.map(task =>
                  task.id === taskId ? { ...task, status: !task.status } : task
                ),
              };
            }
            return section;
          })
        );
    
      };


      
      const uniqueTags = Array.from(
        new Set(allTags)
      );
   
function handleSelectTask(taskId,section){
setSelectedTaskId(taskId)

}

const handleAccordionChange = (sectionName) => {
  setActiveSection((prevActiveSection) => 
    prevActiveSection === sectionName ? '' : sectionName
  );
}

useEffect(() => {
  // Recalculate progress whenever the task statuses change
  if (activesection) {
    const section = tasks.find((sec) => sec.sectionName === activesection);
    setProgressValue(calculateProgress(section));
  }
}, [tasks, activesection]);

  return (
    <div style={{ padding: 10 }}>
    {tasks.map((section, sectionIndex) => (
      <Accordion key={sectionIndex} sx={{marginBottom:'20px'}}  expanded={activesection === section.sectionName}
      onChange={() => handleAccordionChange(section.sectionName)}>
        <AccordionSummary 
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`panel${sectionIndex}-content`}
          id={`panel${sectionIndex}-header`}
      
        >
          <Typography>{section.sectionName}</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ width: '40%' }}  >
          {/* Tag Filter */}
          <Box sx={{ width: 300, display: 'flex' }}>
            {section.tags.map((tag, index) => (
              <Chip key={index} label={tag} variant="outlined" sx={{ margin: 1 }} />
            ))}
          </Box>

          
          <Box sx={{ width: 300 }}>
      
            <Slider
              aria-label="TaskProgress"
              value={progressvalue}
              onChange={(_, newValue) => setProgressValue(newValue)}
              getAriaValueText={(value) => `${value}%`}
              color="primary"
            />
          </Box>

          {/* Task Table */}
          <Container>
            <Table sx={{width:'250%',left:0,paddingLeft:0,marginLeft:0}}>
              <TableHead>
                <TableRow>
                  <TableCell >Task</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Organization</TableCell>
                  <TableCell>Assignee</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell>Tags</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{left:0,marginLeft:0}}>
                {section.tasks.map((task) => (
                  <TaskRow
                    key={task.id}
                    task={task}
                    onToggleStatus={() => toggleTaskStatus(sectionIndex, task.id)}
                    onSelectTask={handleSelectTask}
                    activesection={activesection}
                  
                  />
                ))}
              </TableBody>
            </Table>
          </Container>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
  )
}

export default All