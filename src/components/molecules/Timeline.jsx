import React, { useEffect, useState } from "react";
import "../styles/Timeline.css";
import CustomLabel from "../atoms/Label/CustomLabel";
import CustomAvtarGroup from "../atoms/AvtarGroup/CustomAvtarGroup";
import { useDateContext } from "../../context/DateContext";
import CustomChip from "../atoms/Chip/CustomChip";
import CustomIcon from "../atoms/Icon/CustomIcon";
import CancelIcon from "@mui/icons-material/Cancel";
import sectionData from "../../data/SectionData";
import CustomInput from "../atoms/Input/CustomInput";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CustomTextArea from "../atoms/TextArea/CustomTextArea";
import ProfileImage from "../atoms/Image/ProfileImage";
import CloseIcon from "@mui/icons-material/Close";
import CustomModal from "../atoms/modal/customModal";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useTaskContext } from "../../context/TaskContext";
import { Avatar } from "@mui/material";

function Timeline() {
  const users = [
    {
      name: "manav",
      image:
        "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
    },
    {
      name: "hemang",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    { name: "jay", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    {
      name: "manav",
      image:
        "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
    },
    {
      name: "hemang",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    { name: "jay", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  ];

  const { active } = useTaskContext();

  const { setActive } = useTaskContext();
  const [sideActive, setSideActive] = useState(false);

  const { selectedtask } = useTaskContext();

  const { selectedSection } = useTaskContext();

  // console.log(selectedSection)
  let SectionName = sectionData.map((item) => item.sectionName);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [tags, setTags] = useState([]);
  const [sections, setSections] = useState(sectionData);
  const [delayedOpen, setDelayOpen] = useState(false);
let comment,commentIcon;
  // const uniqueTags = [...new Set(sectionData.flatMap(item => item.tasks.flatMap(tag => tag.tags)))];

  useEffect(() => {
    setSideActive(active);
  }, [active]);

  //for odelay the sideactive class
  useEffect(() => {
    if (sideActive) {
      const timer = setTimeout(() => {
        setDelayOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setDelayOpen(false);
    }
  }, [sideActive]);

  const addTag = (id) => {
    setSelectedId(id); // Set the selected ID to be passed to the modal
    setIsModalOpen(true); // Open the modal
    console.log("Add tag for task id:", id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  /*
  const handleAddTag = (newTag) => {
    // setTags([...sectionData,sectionData.map(item=>item.tags.push(newTag))]);  // Add the new tag to the existing tags
    setIsModalOpen(false);  // Close the modal after adding the tag
    console.log("New tag added:", newTag);
    let findsection=sectionData.find(item=>item.sectionName==selectedSection)
    let findrecord=findsection.tasks.find(i=>i.id==selectedId)
    sectionData=[...findrecord.tags,newTag];

    console.log("new section data",sectionData);
  };
*/

  const handleAddTag = (newTag) => {
    setIsModalOpen(false);
 const updatedSectionData = sectionData.map((section) => {
      if (section.sectionName === selectedSection) {
        const updatedTasks = section.tasks.map((task) => {
          if (task.id === selectedId) {
            return {
              ...task,
              tags: [...new Set([...task.tags, newTag])], 
            };
          }
          return task;
        });
        return { ...section, tasks: updatedTasks };
      }
      return section;
    });
    setSections(updatedSectionData);
    console.log("Updated sectionData:", updatedSectionData);
  };

  // function addTag(id){
  // <CustomModal id={id}></CustomModal>
  // console.log("Add tag",id)
  // }

  let taskTags = [];
  for (let i in selectedtask) {
    if (i == "tags") {
      taskTags.push(selectedtask[i]);
    }
  }
  taskTags = taskTags.flatMap((tag) => tag);

  let taskAssigneeImage = [];
  for (let i in selectedtask) {
    if (i == "assignees") {
      taskAssigneeImage.push(selectedtask[i]);
      }
  }
  taskAssigneeImage = taskAssigneeImage.flatMap((item) => item);

  // console.log(users)
  // AssigneeArray.flatMap(item=>console.log(item[0]=="assignees"))

  // const updatedAssignees = selectedtask.assignees.map(assignee => {
  //   return {
  //     ...assignee,
  //     image: assignee.avatar,
  //     avatar: undefined
  //   };
  // });

  // console.log("Update assignee",updatedAssignees)

  function deleteDate() {
    console.log("dete date");
  }

  function closeSideBar() {
    setTimeout(() => {
      setActive(false);
      setSideActive(false);
    }, 10);
    // handleActiveState(false)
  }

  //finding comments
  for(let c in selectedtask){
    if(c=="comments"){
       comment=selectedtask[c].map(item=>item.text)
       commentIcon=selectedtask[c].map(item=>item.avatar)

    }
  }

  return (
    <div className={`timeline ${delayedOpen ? "active" : ""}`}>
      <div style={{ display: "flex" }}>
        <CustomIcon
          IconComponent={CloseIcon}
          sx={{ height: "35px", cursor: "pointer" }}
          onClick={closeSideBar}
        />
        <CustomLabel
          label="Task Detail"

          sx={{ fontWeight: 700, marginTop: 1, marginLeft: 2 }}
        ></CustomLabel>

        {/* <CustomIcon IconComponent={MoreHorizIcon} sx={{height:'35px',cursor:'pointer'}} onClick={closeSideBar} /> */}
      </div>

      <h2 className="timeline-heading">{selectedtask.task}</h2>
      <div className="timeline-items">
        <div className="timeline-div">
          <CustomLabel
            label="Assignee"
            className="label-style"
           
          />
          <CustomAvtarGroup users={taskAssigneeImage} />
        </div>

        <div className="timeline-div">
          <CustomLabel
            label="Due Date"
          className="label-style"
          />
            <CustomChip label={selectedtask.dueDate} />

          <CustomIcon
            IconComponent={CancelIcon}
            sx={{
              height: "15px",
              marginTop: "10px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={deleteDate}
          />
        </div>

        <div className="timeline-div">
          <CustomLabel
            label="Section"
           className="label-style"
          ></CustomLabel>
          <CustomChip label={selectedSection} />
        </div>

        <div className="timeline-div">
          <CustomLabel
            label="Tags"
          className="label-style"
          ></CustomLabel>
          {taskTags.map((item, index) => (
            <CustomChip key={index} label={item} sx={{ margin: "3px" }} />
          ))}
          <CustomChip label="New Tag" onClick={() => addTag(selectedtask.id)} />
        </div>

        <CustomModal
          id={selectedId} // Pass the selected ID
          open={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleAddTag}
          title="Add new Tag"
        />

        <CustomLabel
          label="Sub Task"
        className="label-style"
        ></CustomLabel>
        <div className="timeline-div">
          <input
            type="text"
            style={{
              border: "none",
              backgroundColor: "#F5F5F5",
              padding: "10px",
            }}
            placeholder="Enter Task Name"
          />
          <CustomIcon
            IconComponent={CalendarTodayIcon}
            sx={{ color: "gray" }}
          />
        </div>
      </div>
      <div>
        <CustomLabel
          label="Description"
        className="label-style"
        ></CustomLabel>
        <CustomTextArea
          rows={3}
          placeholder="What is the Task about?"
          sx={{ width: "300px", borderRadius: "10px" }}
        />

        <div className="timeline-comment">
          <CustomLabel
            label="Comments"
          className="label-style"
          ></CustomLabel>
          <div className="timeline-div">
            {/* <ProfileImage
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              height={30}
              width={30}
              style={{ borderRadius: "50%", marginRight: "20px" }}
            /> */}
            <Avatar  src={commentIcon} sx={{marginRight:'7px'}}></Avatar>
            <CustomTextArea
              rows={3}
            value={comment}
              placeholder={comment}
              sx={{ width: "300px", borderRadius: "10px" }}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
