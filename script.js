//In the Carnap version, all HTML elements should be created on load. For testing, "thead" and "tbody" are hard coded. 

// First API call to Carnap server to retrieve student data in the logic course

// let apiKey = "?"
// let instructor = "litmanhuang@gmail.com"


// const requestOptions = {

//     method: 'GET',
//     mode: 'cors',
//     headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY":apiKey}
// };
// fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses`, requestOptions)
//     .then(response => response.json())
//     .then(response => console.log(response));

// URL for the second API call to retrieve assigment data of a particular student: `https://carnap.io/api/v1/${instructors}/:instructorIdent/courses/:courseTitle/students/${studnetList.id}/submissions`


const studentList = [
    //FIrst API call mock JOSN data of student data of a course. Course name is required to make the call
    {"email":"111@gmail.com","lastName":"Elton","universityId":null,"userId":19266,"firstName":"John","isAdmin":false,"id":16990,"enrolledIn":476,"instructorId":null,"isLti":false},

    {"email":"tiitviitso@gmail.com","lastName":"Mercury","universityId":"b25631","userId":19347,"firstName":"Freddie","isAdmin":false,"id":17071,"enrolledIn":476,"instructorId":null,"isLti":false},

    {"email":"hpoe.f20@warren-wilson.edu","lastName":"Messi","universityId":null,"userId":19882,"firstName":"Leo","isAdmin":false,"id":17570,"enrolledIn":476,"instructorId":null,"isLti":false},

    {"email":"efremct96@gmail.com","lastName":"May","universityId":null,"userId":19883,"firstName":"Theresa","isAdmin":false,"id":17571,"enrolledIn":476,"instructorId":null,"isLti":false}
]


const studentAssigmentData = [
//second API call mock JOSN data of an assigment done by a student. Student id from StudentList is required to make the call. 
//assume student id = 19266 

    {
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
  ]


function initTableRow (array){
    //initialsing table rows with the first colum as student id
    //

    const progressTableBody = document.getElementById("progressTableBody")

    for (let i = 0; i < array.length; i++) {
        
        const tableRows = document.createElement("tr")

        const cell = document.createElement("td")
  
        const cellText = document.createTextNode(array[i].id)

        cell.appendChild(cellText)
        tableRows.appendChild(cell)
        progressTableBody.appendChild(tableRows)
    }

}

function assignData (){
//assign data based on the student id on the row
//dynamically assign values relative to student id
    const tableRows = document.getElementById("progressTableBody").rows
    //test model
    studentList.forEach(element => { 
        if (element.id == 16990) {
            console.log(element.firstName)
            console.log(element.id == 16990)
            
        }

        else {
            return
            
        }

});

}


initTableRow(studentList);
assignData();