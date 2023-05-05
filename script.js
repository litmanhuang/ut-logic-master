//mock data 

const courseData = [
  {
    "textBook": 12,
    "instructor": 1123,
    "enrollmentOpen": false,
    "endDate": "2021-05-19T04:59:59Z",
    "startDate": "2021-01-26T05:59:59Z",
    "textbookProblems": {
      "readAssignmentTable": [
        [
          1,
          "2021-05-15T04:59:59Z"
        ],
      ]
    },
    "totalPoints": 0,
    "title": "UT Logic",
    "timeZone": "America/Chicago",
    "description": null
  }
]

const courseStudentInfo = [
  {"email":"yegorbakosh@gmail.com","lastName":"Bakosh","universityId":null,"userId":19266,"firstName":"Yehor","isAdmin":false,"id":16990,"enrolledIn":476,"instructorId":null,"isLti":false},

  {"email":"tiitviitso@gmail.com","lastName":"Viitso","universityId":"b25631","userId":19347,"firstName":"Tiit-Rein","isAdmin":false,"id":17071,"enrolledIn":476,"instructorId":null,"isLti":false},

  {"email":"hpoe.f20@warren-wilson.edu","lastName":"Poe","universityId":null,"userId":19882,"firstName":"Hannah","isAdmin":false,"id":17570,"enrolledIn":476,"instructorId":null,"isLti":false},{"email":"efremct96@gmail.com","lastName":"Torrisi","universityId":null,"userId":19883,"firstName":"Efrem","isAdmin":false,"id":17571,"enrolledIn":476,"instructorId":null,"isLti":false},{"email":"bastl22@seznam.cz","lastName":"Bastl","universityId":null,"userId":19349,"firstName":"Lukáš","isAdmin":false,"id":17574,"enrolledIn":476,"instructorId":null,"isLti":false},{"email":"frankhawk18@outlook.com","lastName":"Seurer","universityId":null,"userId":19888,"firstName":"Frank","isAdmin":false,"id":17577,"enrolledIn":476,"instructorId":null,"isLti":false},{"email":"erdem.b1105@gmail.com","lastName":"Dorjpurev","universityId":null,"userId":20027,"firstName":"Yanjinkhorol","isAdmin":false,"id":17715,"enrolledIn":476,"instructorId":null,"isLti":false},{"email":"lilekfialovy@gmail.com","lastName":"Hálová","universityId":null,"userId":20039,"firstName":"Šarlota","isAdmin":false,"id":17729,"enrolledIn":476,"instructorId":null,"isLti":false}]

const studentProblemInfo = {
  'problemSubmissionAssignmentId': 3001, 
  'problemSubmissionCorrect': "false", 
  'problemSubmissionData': "qualitative", 
  'problemSubmissionSource': {'tag': 'Assignment', 'contents': 'AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3001}}'}, 'problemSubmissionCredit': 1, 
  'problemSubmissionIdent': 'Exercise-24', 
  'problemSubmissionUserId': 10385, 
  'problemSubmissionLateCredit': "None", 
  'problemSubmissionType': 'Qualitative', 
  'problemSubmissionTime': '2021-04-26T19:14:06.563900857Z', 
  'problemSubmissionExtra': "None"
}

const courseSelect = document.getElementById("course-select");

function addCourse(){
  
  for (let i = 0; i < courseData.length; i++) {
    let courseTitle = courseData[i].title
    let newOption = new Option(courseTitle, courseTitle)
    courseSelect.add(newOption, undefined)
  }
}

function addStudent(){

  courseStudentInfo.forEach((student) => {
    const row = document.createElement('tr');
    const studentTable = document.getElementById('student-table')
  
    // Create cells for first name and id
    const firstNameCell = document.createElement('td');
    const idCell = document.createElement('td');
  
    // Add text to cells
    firstNameCell.textContent = student.firstName;
    idCell.textContent = student.id;
  
    // Add cells to row
    row.appendChild(firstNameCell);
    row.appendChild(idCell);
  
    // Add row to table
    studentTable.appendChild(row);
  });
}

addCourse()

addStudent()