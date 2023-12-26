// Dear user, please inser the data for those who came to take the challenges below.
// Please edit ONLY the attendance field of each student

const attendanceLocal = [
    {
        name:"Oles Sahan",
        id: 25486,
        // insert attendance below. Please follow the same format.
        //Time is in UTC time. 
        //Estonia time is UTC+2 or UTC+3 depending on daylight saving time. 
        //So, -2 or -3 of the challenge time
        attendance: ["2023-09-21: 1500", "2023-09-28: 1500", "2023-10-05: 1500"]
    },
    {
        name:"Paulina Vituščanka",
        id: 25540,
        attendance: ["2023-09-21: 1500", "2023-09-28: 1500", "2023-10-05: 1500"]
    },
    {
        name:"Kadri Roosmaa",
        id: 25541,
        attendance: ["2023-09-21: 1500"]
    },
    {
        name:"Aleksander Amos Nigesen",
        id: 25543,
        attendance: []
    },
    {
        name:"Sofja Kissina",
        id: 25544,
        attendance: []
    },
    {
        name:"Maria Rõhu",
        id: 25545,
        attendance: []
    }
]

//insert challenge dates and the time below
const challengeDatesLocal = [
    {
        name: "2023-09-28: 1500",
        startTime: "2023-09-28T15:00:00Z",
        endTime: "2023-09-28T16:00:00Z",
        presence: false
    }, 
    {
        name: "2023-09-21: 1500",
        startTime: "2023-09-21T15:00:00Z",
        endTime: "2023-09-21T16:00:00Z",
        presence: false
    },
    {
        name: "2023-10-05: 1500",
        startTime: "2023-10-05T15:00:00Z",
        endTime: "2023-10-05T16:00:00Z",
        presence: false
    },
    {
        name: "2023-10-12: 1500",
        startTime: "2023-10-12T15:00:00Z",
        endTime: "2023-10-12T16:00:00Z",
        presence: false
    },    
    {
        name: "2023-10-19: 1500",
        startTime: "2023-10-19T15:00:00Z",
        endTime: "2023-10-19T16:00:00Z",
        presence: false
    },
    {
        name: "2023-10-26: 1500",
        startTime: "2023-10-26T15:00:00Z",
        endTime: "2023-10-26T16:00:00Z",
        presence: false
    }
]

const attendanceStoredLocal = JSON.stringify(attendanceLocal);
const challengeDatesStoredLocal = JSON.stringify(challengeDatesLocal);

localStorage.setItem('attendanceStoredLocal', attendanceStoredLocal);
localStorage.setItem('challengeDatesStoredLocal', challengeDatesStoredLocal);
localStorage.setItem('myCourse', "Tartu%20-%20Introduction%20to%20Logic%20(Eng)");
localStorage.setItem('instructor', "litmanhuang@gmail.com");
localStorage.setItem('apiKey', "bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ");