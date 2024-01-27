const attendanceLocal1 = [
  {
    name: "Litman Huang",
    id: 1999,
    attendance: [],
  },
];

const attendanceLocal2 = [
  {
    name: "Litman Huang",
    id: 1999,
    attendance: [],
  },
];

//insert challenge dates and the time below
const challengeDatesLocal = [
  {
    name: "2023-09-28: 1500",
    startTime: "2023-09-28T15:00:00Z",
    endTime: "2023-09-28T16:00:00Z",
    presence: false,
  },
];

const challengeDatesLocal2 = [
  {
    name: "2023-09-28: 1500",
    startTime: "2023-09-28T15:00:00Z",
    endTime: "2023-09-28T16:00:00Z",
    presence: false,
  },
];

const challengeIdsLocal = [{ challenge1: 6205 }];
const challengeIdsLocal2 = [{ challenge1: 6153 }];

// To find the corresponding ids of your uploaded files in carnap,
// fill in your api key and instructor email below,
// and then run the following command in the terminal.
//
// curl -H "X-API-KEY:your-api-key-here" \
//     https://carnap.io/api/v1/instructors/your-instructor-email-here/documents | jq

const challengeIdsStoredLocal = JSON.stringify(challengeIdsLocal);
const challengeIdsStoredLocal2 = JSON.stringify(challengeIdsLocal2);

const attendanceStoredLocal = JSON.stringify(attendanceLocal);
const challengeDatesStoredLocal = JSON.stringify(challengeDatesLocal);
const attendanceStoredLocal2 = JSON.stringify(attendanceLocal2);
const challengeDatesStoredLocal2 = JSON.stringify(challengeDatesLocal2);

localStorage.setItem("attendanceStoredLocal", attendanceStoredLocal);
localStorage.setItem("challengeDatesStoredLocal", challengeDatesStoredLocal);
localStorage.setItem("attendanceStoredLocal2", attendanceStoredLocal2);
localStorage.setItem("challengeDatesStoredLocal2", challengeDatesStoredLocal2);
localStorage.setItem("myCourse", "carnap-course-name");
// replace space with "%20" e.g. "logic course"-> "logic%20course"
localStorage.setItem("myCourse2", "carnap-course-name");
localStorage.setItem("instructor", "your-carnap-instructor-email");
localStorage.setItem("apiKey", "your-api-key-here");
