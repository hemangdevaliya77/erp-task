const sectionData = [
    {
      sectionName: 'Section 1',
      tasks: [
        {
          id: 1,
          task: 'Client Meetings',
          status: true,
          dueDate: '18/07',
          organization: "kate's Dog",
          assignees: [
            { name: 'User1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'User2', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
          ],
          comments:  [  { name: 'User4', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'Looking forward to the meeting.'  }],
          tags: ['Attention', 'Bills'],
        },
        {
          id: 2,
          task: 'Kickoff Meetings',
          status: false,
          dueDate: '18/07',
          organization: "kate's Dog",
          assignees: [
            { name: 'User1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'User2', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
          ],
          comments:  [  { name: 'User4', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' ,  text: 'Ready to start the project!' }],
          tags: ['Bills'],
        },
        
      ],
      tags: ['All', 'Attention', 'Bills', 'Confirmed'],
    },
    {
      sectionName: 'Section 2',
      tasks: [
        {
          id: 3,
          task: 'Design Review',
          status: true,
          dueDate: '20/07',
          organization: "Design Co.",
          assignees: [
            { name: 'User3', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
          ],
          comments: [  { name: 'User4', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'The designs look great, let’s finalize it.'  }],
          tags: ['Confirmed', 'Bills'],
        },
        {
          id: 4,
          task: 'Client Call',
          status: true,
          dueDate: '22/07',
          organization: "Design Co.",
          assignees: [
            { name: 'User4', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
          ],
          comments: [  { name: 'User4', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' ,   text: 'Reminder for the call tomorrow.' }],
          tags: ['Attention'],
        },
      ],
      tags: ['All', 'Confirmed', 'Attention', 'Bills'],
    },
  ];
  
  export default sectionData;