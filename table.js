// add extra credis 
// catch cheating
// IO excel input attendance 
// grant retake tokens
let courseUTLogicList =[];

function studentUTLogic (courseId, courseName, courseDate){

}

function studentCarnap (id, email, firstName, lastName, challenge1, challenge2,challenge3, challenge4, challenge5, challenge6, challenge7, challenge8, challenge9, challenge10, challenge11, challenge12, attendance){
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.challenge1 = challenge1;
    this.challenge2 = challenge2;
    this.challenge3 = challenge3;
    this.challenge4 = challenge4;
    this.challenge5 = challenge5;
    this.challenge6 = challenge6;
    this.challenge7 = challenge7;
    this.challenge8 = challenge8;
    this.challenge9 = challenge9;
    this.challenge10 = challenge10;
    this.challenge11 = challenge11;
    this.challenge12 = challenge12;
    this.attendance = attendance;
}

const myCourse = localStorage.getItem('myCourse');
const myCourse2 = localStorage.getItem('myCourse2');
const instructor = localStorage.getItem('instructor');
const apiKey =localStorage.getItem('apiKey');
// const testStored = localStorage.getItem('testStoredLocal');
// console.log(testStored);
// const testJSON = JSON.parse(testStored);
// console.log(testJSON);

async function fetchCarnapStudentData(course, instructor, apiSecret) {

    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiSecret
        }
    };

    try {
        const response = await fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses/${course}/students`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

async function getStudentAttendence (id){
    const attendanceStored = localStorage.getItem('attendanceStoredLocal');
    const attendance = JSON.parse(attendanceStored);

    const student = attendance.find((student) => student.id === id);

    if (student) {
        return student.attendance;
    } else {
        // Return an appropriate value when the student with the given id is not found
        return [];
    }
}

const main = document.getElementById("main");
// const inputDiv = document.createElement("div");

// const attendanceInputDiv = document.createElement("div");
// attendanceInputDiv.textContent = "upload attendance file here";

// const challengeInputDiv = document.createElement("div");
// challengeInputDiv.textContent = "upload challenge dates file here";

// main.appendChild(attendanceInputDiv);
// main.appendChild(challengeInputDiv);
// main.appendChild(inputDiv);

// const attendanceInput = document.createElement('input');
// attendanceInput.type = 'file';
// attendanceInput.id = 'attendanceInput';

// const challengeDateInput = document.createElement('input');
// challengeDateInput.type = 'file';
// challengeDateInput.id = 'challengeDateInput';

// attendanceInputDiv.appendChild(attendanceInput);
// challengeInputDiv.appendChild(challengeDateInput);

// attendanceInput.addEventListener('change', handleAttendanceFile);

// async function handleAttendanceFile(event) {
//     const file = event.target.files[0];

//     try {
//         const attendance = await readJSONFile(file);
//         console.log('Attendance data:', attendance);

//         // Call the main function with the attendance data
//         await createStudentProgress(attendance);
//     } catch (error) {
//         console.error('Error reading JSON file:', error);
//     }
// }

// async function readJSONFile(file) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();

//         reader.onload = (event) => {
//             try {
//                 const result = event.target.result;
//                 const attendanceData = JSON.parse(result);

//                 resolve(attendanceData);
//             } catch (error) {
//                 reject(error);
//             }
//         };

//         reader.onerror = (error) => {
//             reject(error);
//         };

//         reader.readAsText(file);
//     });
// }

function generateTable(data){
    const heading = document.createElement("h1")
    heading.innerHTML = "Student Progress"
    main.appendChild(heading)

    const progressTable = document.createElement("table")
    progressTable.id = "progressTable"
    progressTable.className="table table-striped"

    const tableHead = progressTable.createTHead();
    const headerRow = tableHead.insertRow();

    const headers = ["student id", "first name", "last name", "email", "challenge 1", "challenge 2", "challenge 3", "challenge 4", "challenge 5", "challenge 6", "challenge 7", "challenge 8", "challenge 9",  "challenge 10",  "challenge 11",  "challenge 12"];
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    tableHead.appendChild(headerRow);
    progressTable.appendChild(tableHead)

    const tableBody = progressTable.createTBody();
    tableBody.id = "tableData"

    main.appendChild(progressTable)

    populateProgressTable(data, tableBody)
}

function populateProgressTable (data, tbody){
    for (let i = 0; i < data.length; i++) {
        let row =`<tr> 
                        <td> ${data[i].id}</td>
                        <td> ${data[i].firstName}</td>
                        <td> ${data[i].lastName}</td>
                        <td> ${data[i].email}</td>
                        <td> ${data[i].challenge1}</td>
                        <td> ${data[i].challenge2}</td>
                        <td> ${data[i].challenge3}</td>
                        <td> ${data[i].challenge4}</td>
                        <td> ${data[i].challenge5}</td>
                        <td> ${data[i].challenge6} </td>
                        <td> ${data[i].challenge7}</td>
                        <td> ${data[i].challenge8}</td>
                        <td> ${data[i].challenge9}</td>
                        <td> ${data[i].challenge10}</td>
                        <td> ${data[i].challenge11}</td>
                        <td> ${data[i].challenge12}</td>
                    </tr>`
        tbody.innerHTML+=row
    }
}

//attendenceTable
// function generateAttendenceTable(data){
//     const heading = document.createElement("h1")
//     heading.innerHTML = "Attendence Table"
//     main.appendChild(heading)

//     const attendenceTable = document.createElement("table")
//     attendenceTable.id = "attendenceTable"
//     attendenceTable.className="table table-striped"

//     const tableHead = attendenceTable.createTHead();
//     const headerRow = tableHead.insertRow();

//     const headers = ["2023-09-21: 1500", "2023-09-28: 1500", "2023-10-05: 1500", "2023-10-12: 1500", "2023-10-19: 1500", "2023-10-26: 1500" ];
//     headers.forEach(headerText => {
//         const headerCell = document.createElement('th');
//         headerCell.textContent = headerText;
//         headerRow.appendChild(headerCell);
//     });

//     tableHead.appendChild(headerRow);
//     attendenceTable.appendChild(tableHead)

//     const tableBody = attendenceTable.createTBody();
//     tableBody.id = "tableData"

//     main.appendChild(attendenceTable)

//     populateAttendenceTable(data, tableBody)
// }

// function populateAttendenceTable (data, tbody){
//     for (let i = 0; i < data.length; i++) {
//         let row =`<tr> 
//                         <td> ${data[i].id}</td>
//                         <td> ${data[i].firstName}</td>
//                         <td> ${data[i].lastName}</td>
//                         <td> ${data[i].email}</td>
//                         <td> ${data[i].challenge1}</td>
//                         <td> ${data[i].challenge2}</td>
//                         <td> ${data[i].challenge3}</td>
//                         <td> ${data[i].challenge4}</td>
//                         <td> ${data[i].challenge5}</td>
//                         <td> ${data[i].challenge6} </td>
//                         <td> ${data[i].challenge7}</td>
//                         <td> ${data[i].challenge8}</td>
//                         <td> ${data[i].challenge9}</td>
//                         <td> ${data[i].challenge10}</td>
//                         <td> ${data[i].challenge11}</td>
//                         <td> ${data[i].challenge12}</td>
//                     </tr>`
//         tbody.innerHTML+=row
//     }
// }

function downloadFile(data, fileName, fileType) {
    // Create a Blob from the data
    const blob = new Blob([data], { type: fileType });

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute with the Blob object
    link.href = window.URL.createObjectURL(blob);

    // Set the download attribute with the desired file name
    link.download = fileName;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}

// Example usage
const exampleData = 'Hello, this is some content.';
const exampleFileName = 'example.txt';
const exampleFileType = 'text/plain';




function generateAndPopulateAttendanceTable(students) {
    // Generate the attendance table HTML
    const attendanceTableHTML = generateAttendanceTable(students);

    // Get the main element
    const main = document.getElementById("main");

    // Create a heading for the attendance table
    const heading = document.createElement("h1");
    heading.innerHTML = "Student Attendance";
    main.appendChild(heading);

    // Create a div to hold the attendance table
    const tableContainer = document.createElement("div");
    tableContainer.id = "attendanceTable";
    tableContainer.className = "table table-striped";
    main.appendChild(tableContainer);

    // Insert the attendance table HTML into the div
    tableContainer.innerHTML = attendanceTableHTML;
}


function generateAttendanceTable(students) {
    // Get a list of unique dates from the students' attendance records
    const uniqueDates = [...new Set(students.flatMap(student => student.attendance.map(date => date.split(':')[0])))];

    // Create the table headers (dates)
    const tableHeaders = ['Student', ...uniqueDates];

    // Create the table rows
    const tableRows = students.map(student => {
        const rowData = [];
        rowData.push(`${student.firstName} ${student.lastName}`);
        
        uniqueDates.forEach(date => {
            const attendanceData = student.attendance.find(item => item.startsWith(date));
            if (attendanceData) {
                rowData.push(`<b>Present</b>`);
            } else {
                rowData.push('Absent');
            }
        });

        return rowData;
    });

    // Generate the table HTML
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    ${tableHeaders.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${tableRows.map(row => `
                    <tr>
                        ${row.map(data => `<td>${data}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    return tableHTML;
}


async function fetchAssignmentData(studentId, course, instructor, apiSecret) {

    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiSecret
        }
    };

    try {
        const response = await fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses/${course}/students/${studentId}/submissions`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
} 

// validate dates
const validatesStored = localStorage.getItem('challengeDatesStoredLocal');
const validDates = JSON.parse(validatesStored);


function dateIsValid (accessDate, validDates, attendance){

    //check if the student is present on a challenge date
    let presenceDates = validDates.map((date)=> {
        if (attendance.includes(date.name)){
            date.presence = true;
        }else {
            date.presence = false;
        }
        return date;
    });
    console.log(presenceDates);
    // return only those whose access date is with in the start and end time
    //potential reuse for cheating report
    return presenceDates.some((date)=> date.presence && accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
}

function attemptIsValid (accessDate, validDates, attendance){

    //check if the student is present on a challenge date
    let presenceDates = validDates.map((date)=> {
        if (attendance.includes(date.name)){
            date.presence = true;
        }else {
            date.presence = false;
        }
        return date;
    });
    console.log(presenceDates);
    // return only those whose access date is with in the start and end time
    //potential reuse for cheating report
    return presenceDates.some((date)=> date.presence && accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
}

// helper function to find challenges
async function findChallengeResult (data, attendance, validDates){

    let challengeData = Array(12).fill("no attempt")

    // console.log("starting challenge data" + challengeData)
    for (let i = 0; i < data.length; i++) {

        let challenge = data[i].problemSubmissionAssignmentId
        let correct = data[i].problemSubmissionCorrect
        let accessDate = new Date (data[i].problemSubmissionTime)

        switch (challenge) {
            // challenge 1 id = 6205
            case 6205:
            // case 3001:
                if (correct !== null && challengeData[0]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                    //problem, need to check attendance before checking attempts
                    challengeData[0] = 0;
                }

                if (correct && dateIsValid(accessDate, validDates, attendance)){
                    challengeData[0] = challengeData [0] + 1
                }
                break;

            // challenge 2 id = 6204
            case 6204:
            // case 3002:
            if (correct !== null && challengeData[1]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[1] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[1] = challengeData [1] + 1
                }
                break;
            
            // challenge 3 id = 6206
            case 6206:
            // case 3003:
            if (correct !== null && challengeData[2]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[2] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[2] = challengeData [2] + 1
                }
                break;

            // challenge 4 id = 6207
            case 6207:
            // case 3004:
            if (correct !== null && challengeData[3]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[3] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[3] = challengeData [3] + 1
                }
                break;

            // challenge 5 id = 6208
            case 6208:
            // case 3005:
            if (correct !== null && challengeData[4]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[4] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[4] = challengeData [4] + 1
                }
                break;

            // challenge 6 id = 6209
            case 6209:
            // case 3006:
            if (correct !== null && challengeData[5]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[5] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[5] = challengeData [5] + 1
                }
                break;

            // challenge 7 id = 6210
            case 6210:
            // case 3007:
            if (correct !== null && challengeData[6]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[6] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[6] = challengeData [6] + 1
                }
                break;

            // challenge 8 id = 6211
            case 6211:
            // case 3008:
            if (correct !== null && challengeData[7]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[7] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[7] = challengeData [7] + 1
                }
                break;

            // challenge 9 id = 6212
            case 6212:
            // case 3009:
                if (correct !== null && challengeData[8]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                    challengeData[8] = 0;
                }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[8] = challengeData [8] + 1
                }
                break;

            // challenge 10 id = 6213
            case 6213:
            // case 3010:
            if (correct !== null && challengeData[9]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[9] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[9] = challengeData [9] + 1
                }
                break;

            // challenge 11 id = 6214 
            case 6214:
            // case 3011:

            if (correct !== null && challengeData[10]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[10] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[10] = challengeData [10] + 1
                }
                break;

            // challenge 12 id = 6215
            case 6215:
            // case 3012:
            if (correct !== null && challengeData[11]=="no attempt" && dateIsValid(accessDate, validDates, attendance)){
                challengeData[11] = 0;
            }
                if (correct && dateIsValid(accessDate, validDates, attendance)){
                challengeData[11] = challengeData [11] + 1
                }
                break;
            default:
                break;
        }
    }

    challengeData = challengeData.map(number => number.toString());
    // console.log(challengeData)
    return challengeData
}

async function catchCrime(id, firstName, lastName, assignments, validDates){

    let crimeReport = {
        id: id, 
        firstName: firstName, 
        lastName: lastName,
        reports: [
            {challenge1: ""},
            {challenge2: ""},
            {challenge3: ""},
            {challenge4: ""},
            {challenge5: ""},
            {challenge6: ""},
            {challenge7: ""},
            {challenge8: ""},
            {challenge9: ""},
            {challenge10: ""},
            {challenge11: ""},
            {challenge12: ""},
        ]
    } 

    for (let i = 0; i < assignments.length; i++) {

        let challenge = assignments[i].problemSubmissionAssignmentId
        let accessDate = new Date (assignments[i].problemSubmissionTime)

        switch (challenge) {
            // challenge 1 id = 6205
            case 6205:
            // case 3001:
            let isCrimeChallenge1 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge1){
                console.log("yes");
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[0].challenge1 = crimeDate;
            }else{
                console.log("no");
                console.log(accessDate);
                crimeReport.reports[0].challenge1 = "okay";
            }
                break;

            // challenge 2 id = 6204
            case 6204:
            // case 3002:
            let isCrimeChallenge2 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge2){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[1].challenge2 = crimeDate;
            }else{
                crimeReport.reports[1].challenge2 = "okay";
            }
                break;
            
            // challenge 3 id = 6206
            case 6206:
            // case 3003:
            let isCrimeChallenge3 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge3){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[2].challenge3 = crimeDate;
            }else{
                crimeReport.reports[2].challenge3 = "okay";
            }
                break;

            // challenge 4 id = 6207
            case 6207:
            // case 3004:
            let isCrimeChallenge4 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge4){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[3].challenge4 = crimeDate;
            }else{
                crimeReport.reports[3].challenge4 = "okay";
            }
                break;

            // challenge 5 id = 6208
            case 6208:
            // case 3005:
            let isCrimeChallenge5 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge5){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[4].challenge5 = crimeDate;
            }else{
                crimeReport.reports[4].challenge5 = "okay";
            }
                break;

            // challenge 6 id = 6209
            case 6209:
            // case 3006:
            let isCrimeChallenge6 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge6){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[5].challenge6 = crimeDate;
            }else{
                crimeReport.reports[5].challenge6 = "okay";
            }
                break;

            // challenge 7 id = 6210
            case 6210:
            // case 3007:
            let isCrimeChallenge7 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge7){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[6].challenge7 = crimeDate;
            }else{
                crimeReport.reports[6].challenge7 = "okay";
            }
                break;

            // challenge 8 id = 6211
            case 6211:
            // case 3008:
            let isCrimeChallenge8 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge8){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[7].challenge8 = crimeDate;
            }else{
                crimeReport.reports[7].challenge8 = "okay";
            }
                break;

            // challenge 9 id = 6212
            case 6211:
            // case 3008:
            let isCrimeChallenge9 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge9){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[8].challenge9 = crimeDate;
            }else{
                crimeReport.reports[8].challenge9 = "okay";
            }
                break;

            // challenge 10 id = 6213
            case 6213:
            // case 3010:
            let isCrimeChallenge10 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge10){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[9].challenge10 = crimeDate;
            }else{
                crimeReport.reports[9].challenge10 = "okay";
            }
                break;

            // challenge 11 id = 6214 
            case 6214:
            // case 3011:
            let isCrimeChallenge11 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge11){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[10].challenge11 = crimeDate;
            }else{
                crimeReport.reports[10].challenge11 = "okay";
            }
                break;

            // challenge 12 id = 6215
            case 6215:
            // case 3012:
            let isCrimeChallenge12 = !validDates.some((date)=> accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));
            if (isCrimeChallenge12){
                 const crimeDate = accessDate.toString();
                 crimeReport.reports[11].challenge12 = crimeDate;
            }else{
                crimeReport.reports[11].challenge12 = "okay";
            }
                break;
            default:
                break;
        }
    }
    return crimeReport;
}

function generateAndPopulateCrimeReportTable(crimeReports) {
    // Generate the crime report table HTML
    const crimeReportTableHTML = generateCrimeReportTable(crimeReports);

    // Get the main element
    const main = document.getElementById("main");

    // Create a heading for the crime report table
    const heading = document.createElement("h1");
    heading.innerHTML = "Cheat Report";
    main.appendChild(heading);

    // Create a div to hold the crime report table
    const tableContainer = document.createElement("div");
    tableContainer.id = "crimeReportTable";
    tableContainer.className = "table table-striped";
    main.appendChild(tableContainer);

    // Insert the crime report table HTML into the div
    tableContainer.innerHTML = crimeReportTableHTML;
}

function generateCrimeReportTable(crimeReports) {
    // Get a list of unique challenge numbers
    const uniqueChallenges = [...new Set(crimeReports.flatMap(report => report.reports.map(challenge => Object.keys(challenge)[0])))];
    console.log(uniqueChallenges);

    // Create the table headers (challenges)
    const tableHeaders = ['ID', 'First Name', 'Last Name', ...uniqueChallenges.map(challenge => challenge)];

    // Create the table rows
    const tableRows = crimeReports.map(crimeReport => {
        const rowData = [];
        rowData.push(crimeReport.id, crimeReport.firstName, crimeReport.lastName);

        uniqueChallenges.forEach(challenge => {
            const challengeData = crimeReport.reports.find(report => Object.keys(report)[0] === challenge);
            rowData.push(challengeData ? challengeData[challenge] : '');
        });

        return rowData;
    });

    // Generate the table HTML
    const tableHTML = `
        <table>
            <thead>
                <tr>
                    ${tableHeaders.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${tableRows.map(row => `
                    <tr>
                        ${row.map(data => `<td>${data}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    return tableHTML;
}

//main
async function createStudentProgress(course) {
    let studentCarnapList = [];

    let crimeReports = [];
    try {
        const data = await fetchCarnapStudentData(course, instructor, apiKey);
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            let studentCarnapData = data[i];

            let assignmentData = await fetchAssignmentData(studentCarnapData.id, course, instructor, apiKey)

            console.log("assignment data:" + " student id =" + studentCarnapData.id +" name =" + studentCarnapData.firstName + " "+ studentCarnapData.lastName)
            console.log(assignmentData)

            let attendance = await getStudentAttendence(studentCarnapData.id);
            console.log(attendance);

            let studentCrimeReport = await catchCrime (studentCarnapData.id, studentCarnapData.firstName, studentCarnapData.lastName, assignmentData, validDates);
            crimeReports.push(studentCrimeReport);
            let challengeData = await findChallengeResult(assignmentData, attendance, validDates);

            let student = new studentCarnap(studentCarnapData.id, studentCarnapData.email, studentCarnapData.firstName, studentCarnapData.lastName, challengeData[0], challengeData[1],challengeData[2], challengeData[3], challengeData[4], challengeData[5], challengeData[6], challengeData[7], challengeData[8], challengeData[9], challengeData[10], challengeData[11], attendance);

            studentCarnapList.push(student);

            console.log("challenge data:" + " student id =" + studentCarnapData.id +" name =" + studentCarnapData.firstName + " "+ studentCarnapData.lastName)
            console.log(challengeData)
        }
        console.log(crimeReports);
        generateTable(studentCarnapList);
        generateAndPopulateAttendanceTable(studentCarnapList);
        generateAndPopulateCrimeReportTable(crimeReports);
    } catch (error) {
        console.error('Error creating student list:', error);
    }
};

createStudentProgress(myCourse);
createStudentProgress(myCourse2);
// downloadFile(exampleData, exampleFileName, exampleFileType);

