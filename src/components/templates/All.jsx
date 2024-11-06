import React,{useState} from 'react'
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
    function valuetext(value) {
        return `${value}°C`;
      }
      
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
console.log(tasks)
  return (
    <div style={{ padding: 10, marginLeft: '10px' }}>
    {tasks.map((section, sectionIndex) => (
      <Accordion key={sectionIndex} sx={{marginBottom:'20px'}}>
        <AccordionSummary 
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`panel${sectionIndex}-content`}
          id={`panel${sectionIndex}-header`}
        >
          <Typography>{section.sectionName}</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ width: '70%' }}>
          {/* Tag Filter */}
          <Box sx={{ width: 300, display: 'flex' }}>
            {section.tags.map((tag, index) => (
              <Chip key={index} label={tag} variant="outlined" sx={{ margin: 1 }} />
            ))}
          </Box>

          {/* Slider */}
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={50}
              getAriaValueText={(value) => `${value}°C`}
              color="primary"
            />
          </Box>

          {/* Task Table */}
          <Container>
            <Table sx={{ maxWidth: '70%' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Organization</TableCell>
                  <TableCell>Assignee</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell>Tags</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {section.tasks.map((task) => (
                  <TaskRow
                    key={task.id}
                    task={task}
                    onToggleStatus={() => toggleTaskStatus(sectionIndex, task.id)}
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