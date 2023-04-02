
// // First API call to Carnap server to retrieve student data in the logic course

// let myCourse = "Tartu%20-%20Introduction%20to%20Logic%20(Eng)";
// let instructor = "litmanhuang@gmail.com";


// let apiKey = "JyBcvyoCj-AjcspJt1Sp8p6lnedI_3f8Z0DOjEid6QOd";

// const requestOptions = {
//   method: 'GET',
//   mode: 'cors',
//   headers: {
//     "Content-Type": "application/json",
//     "X-API-KEY":apiKey}
// };
// fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses/${myCourse}/students`, requestOptions)
//   .then(response => response.json())
//   .then(response => studentList.push(response));

// URL for the second API call to retrieve assigment data of a particular student: `https://carnap.io/api/v1/${instructors}/:instructorIdent/courses/:courseTitle/students/${studnetList.id}/submissions`


function getStudentId (callback){

}

function getStudentChallengeData (studentId){
  let challenge = {
    state: "",
    id: 0,
    creationTime:"",
    deadLine:"",
    submissionTime:""
  };

  let assigmentState = {};

  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY":apiKey}
  };
  fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses/${myCourse}/${studentId}`, requestOptions)
    .then(response => response.json())
    .then(response => response=assigmentState);
  
  
}




let challengeList = [];

let studentList = [];
    //FIrst API call mock JOSN data of student data of a course. Course name is required to make the call
    // {"email":"111@gmail.com","lastName":"Elton","universityId":null,"userId":19266,"firstName":"John","isAdmin":false,"id":16990,"enrolledIn":476,"instructorId":null,"isLti":false},

    // {"email":"tiitviitso@gmail.com","lastName":"Mercury","universityId":"b25631","userId":19347,"firstName":"Freddie","isAdmin":false,"id":17071,"enrolledIn":476,"instructorId":null,"isLti":false},

    // {"email":"hpoe.f20@warren-wilson.edu","lastName":"Messi","universityId":null,"userId":19882,"firstName":"Leo","isAdmin":false,"id":17570,"enrolledIn":476,"instructorId":null,"isLti":false},

    // {"email":"efremct96@gmail.com","lastName":"May","universityId":null,"userId":19883,"firstName":"Theresa","isAdmin":false,"id":17571,"enrolledIn":476,"instructorId":null,"isLti":false}


let studentAssigmentData = [];
//second API call mock JOSN data of an assigment done by a student. Student id from StudentList is required to make the call. 

    // {
    //   'problemSubmissionAssignmentId': 3001, 
    //   'problemSubmissionCorrect': "false", 
    //   'problemSubmissionData': "qualitative", 
    //   'problemSubmissionSource': {'tag': 'Assignment', 'contents': 'AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3001}}'}, 'problemSubmissionCredit': 1, 
    //   'problemSubmissionIdent': 'Exercise-24', 
    //   'problemSubmissionUserId': 10385, 
    //   'problemSubmissionLateCredit': "None", 
    //   'problemSubmissionType': 'Qualitative', 
    //   'problemSubmissionTime': '2021-04-26T19:14:06.563900857Z', 
    //   'problemSubmissionExtra': "None"
    // }
  
  //

  const mainContainer = document.getElementById("main")
  const body = document.body
  const table = document.createElement("table")

  function generateHeading (){
    const heading = document.createElement("h1")
    heading.innerHTML = "Student Progress"
    mainContainer.appendChild(heading)

  }

  function generateProgressTableHead() {
    
    let tHead = table.createTHead();
    let row = tHead.insertRow();


    tHead.appendChild(row)
    table.appendChild(tHead)
    mainContainer.appendChild(table)

    tHead.innerHTML("text")
  }



function generateProgressTableBody (table, array){

    for (let i = 0; i < array.length; i++) {

        for (let element of array) {
            let row = table.insertRow();
            for (key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
            }
          }
    }

}

function assignData (){
//assign data based on the student id on the row
//dynamically assign values relative to student id
    const tableRows = document.getElementById("progressTableBody").rows
    //test model

  for (let i = 0; i < tableRows.length; i++) {
    let initId = tableRows[i].innerHTML
    //for each student id, make an API call to server with ${initID} inside the URL. 
    //assignData should ba a callback function
    
    
  }

};


generateHeading()
generateProgressTableBody(table, studentList);
generateProgressTableHead();

// assignData();