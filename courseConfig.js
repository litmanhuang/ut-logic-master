const attendanceLocal1 = [
    {
      name: "Litman Huang",
      id: 1999,
      attendance: []
    }
  ];

const attendanceLocal2 = [
    {
      name: "Litman Huang",
      id: 1999,
      attendance: []
    }
  ];
  
//insert challenge dates and the time below
const challengeDatesLocal = [
    {
        name: "2023-09-28: 1500",
        startTime: "2023-09-28T15:00:00Z",
        endTime: "2023-09-28T16:00:00Z",
        presence: false
    }
]

const challengeDatesLocal2 = [
    {
        name: "2023-09-28: 1500",
        startTime: "2023-09-28T15:00:00Z",
        endTime: "2023-09-28T16:00:00Z",
        presence: false
    }, 
]

const attendanceStoredLocal = JSON.stringify(attendanceLocal);
const challengeDatesStoredLocal = JSON.stringify(challengeDatesLocal);
const attendanceStoredLocal2 = JSON.stringify(attendanceLocal2);
const challengeDatesStoredLocal2 = JSON.stringify(challengeDatesLocal2);

localStorage.setItem('attendanceStoredLocal', attendanceStoredLocal);
localStorage.setItem('challengeDatesStoredLocal', challengeDatesStoredLocal);
localStorage.setItem('attendanceStoredLocal2', attendanceStoredLocal2);
localStorage.setItem('challengeDatesStoredLocal2', challengeDatesStoredLocal2);
localStorage.setItem('myCourse', "carnap-course-name"); 
// replace space with "%20" e.g. "logic course"-> "logic%20course"
localStorage.setItem('myCourse2', "carnap-course-name");
localStorage.setItem('instructor', "your-carnap-instructor-email");
localStorage.setItem('apiKey', "your-api-key-here");