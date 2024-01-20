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

const validatesStored = localStorage.getItem('challengeDatesStoredLocal');
const attendanceStored = localStorage.getItem('attendanceStoredLocal');

const validatesStored2 = localStorage.getItem('challengeDatesStoredLocal2');
const attendanceStored2 = localStorage.getItem('attendanceStoredLocal2');

const challengeIds = [
    { challenge1: 6205 },
    { challenge2: 6204 },
    { challenge3: 6206 },
    { challenge4: 6207 },
    { challenge5: 6208 },
    { challenge6: 6209 },
    { challenge7: 6210 },
    { challenge8: 6211 },
    { challenge9: 6212 },
    { challenge10: 6213 },
    { challenge11: 6214 },
    { challenge12: 6215 }
];
const challengeIds2 = [
    { challenge1: 6153 },
    { challenge2: 6155 },
    { challenge3: 6157 },
    { challenge4: 6159 },
    { challenge5: 6161 },
    { challenge6: 6163 },
    { challenge7: 6165 },
    { challenge8: 6169 },
    { challenge9: 6171 },
    { challenge10: 6173 },
    { challenge11: 6175 },
    { challenge12: 6177 }
];

const main = document.getElementById("main");

createStudentProgress(myCourse, attendanceStored, validatesStored, challengeIds);
createStudentProgress(myCourse2, attendanceStored2, validatesStored, challengeIds2);

//helper functions
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
        return []; 
    }
}

async function getStudentAttendence (id, attendanceInputs){
    const student = attendanceInputs.find((student) => student.id === id);
    console.log(student);

    if (student) {
        return student.attendance;
    } else {
        // Return an appropriate value when the student with the given id is not found
        return [];
    }
}

function generateTable(data, courseName){
    const heading = document.createElement("h1")
    heading.innerHTML = decodeURIComponent(courseName)
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

function generateAndPopulateAttendanceTable(students) {
    const attendanceTableHTML = generateAttendanceTable(students);
    const main = document.getElementById("main");
    const heading = document.createElement("h1");
    heading.innerHTML = "Student Attendance";
    main.appendChild(heading);

    const tableContainer = document.createElement("div");
    tableContainer.id = "attendanceTable";
    tableContainer.className = "table table-striped";
    main.appendChild(tableContainer);
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
        return []; 
    }
} 

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

async function findChallengeResult(data, attendance, validDatesInput, challengeIds) {

    const challengeIdArray = challengeIds.reduce((accumulator, currentObject) => accumulator.concat(Object.values(currentObject)), []);

    let challengeData = Array(challengeIdArray.length).fill("no attempt");

    for (let i = 0; i < data.length; i++) {
        let challenge = data[i].problemSubmissionAssignmentId;
        let correct = data[i].problemSubmissionCorrect;
        let accessDate = new Date(data[i].problemSubmissionTime);

        let index = challengeIdArray.indexOf(challenge);

        if (index !== -1) {
            if (correct !== null && challengeData[index] === "no attempt" && dateIsValid(accessDate, validDatesInput, attendance)) {
                challengeData[index] = 0;
            }

            if (correct && dateIsValid(accessDate, validDatesInput, attendance)) {
                challengeData[index] = challengeData[index] + 1;
            }
        }
    }

    challengeData = challengeData.map(number => number.toString());
    return challengeData;
}

async function catchCrime(id, firstName, lastName, assignments, validDates, challengeIds) {
    let crimeReport = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        reports: challengeIds.map(challenge => ({ [Object.keys(challenge)[0]]: "" }))
    };

    for (let i = 0; i < assignments.length; i++) {
        let challenge = assignments[i].problemSubmissionAssignmentId;
        let accessDate = new Date(assignments[i].problemSubmissionTime);
        
        // Find the challenge object with the matching ID
        let challengeObject = challengeIds.find(obj => Object.values(obj)[0] === challenge);

        if (challengeObject) {
            let challengeName = Object.keys(challengeObject)[0];

            let isCrimeChallenge = !validDates.some(date => accessDate >= new Date(date.startTime) && accessDate <= new Date(date.endTime));

            if (isCrimeChallenge) {
                const crimeDate = accessDate.toString();
                crimeReport.reports[challengeIds.indexOf(challengeObject)][challengeName] = crimeDate;
            } else {
                crimeReport.reports[challengeIds.indexOf(challengeObject)][challengeName] = "okay";
            }
        }
    }

    return crimeReport;
}

function generateAndPopulateCrimeReportTable(crimeReports) {
    const crimeReportTableHTML = generateCrimeReportTable(crimeReports);
    const main = document.getElementById("main");

    const heading = document.createElement("h1");
    heading.innerHTML = "Cheat Report";
    main.appendChild(heading);

    const tableContainer = document.createElement("div");
    tableContainer.id = "crimeReportTable";
    tableContainer.className = "table table-striped";
    main.appendChild(tableContainer);

    tableContainer.innerHTML = crimeReportTableHTML;
}

function generateCrimeReportTable(crimeReports) {
    const uniqueChallenges = [...new Set(crimeReports.flatMap(report => report.reports.map(challenge => Object.keys(challenge)[0])))];
    console.log(uniqueChallenges);

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
async function createStudentProgress(courseInput, attendanceInput, validDatesInput, challengeIdInput) {
    const attendanceParsed = JSON.parse(attendanceInput);
    const validDatesInputParsed = JSON.parse(validDatesInput);

    let studentCarnapList = [];

    let crimeReports = [];
    try {
        const data = await fetchCarnapStudentData(courseInput, instructor, apiKey);
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            let studentCarnapData = data[i];

            let assignmentData = await fetchAssignmentData(studentCarnapData.id, courseInput, instructor, apiKey)

            console.log("assignment data:" + " student id =" + studentCarnapData.id +" name =" + studentCarnapData.firstName + " "+ studentCarnapData.lastName)
            console.log(assignmentData)

            let attendance = await getStudentAttendence(studentCarnapData.id, attendanceParsed);
            console.log(attendance);

            let studentCrimeReport = await catchCrime (studentCarnapData.id, studentCarnapData.firstName, studentCarnapData.lastName, assignmentData, validDatesInputParsed, challengeIdInput);
            crimeReports.push(studentCrimeReport);
            let challengeData = await findChallengeResult(assignmentData, attendance, validDatesInputParsed, challengeIdInput);

            let student = new studentCarnap(studentCarnapData.id, studentCarnapData.email, studentCarnapData.firstName, studentCarnapData.lastName, challengeData[0], challengeData[1],challengeData[2], challengeData[3], challengeData[4], challengeData[5], challengeData[6], challengeData[7], challengeData[8], challengeData[9], challengeData[10], challengeData[11], attendance);

            studentCarnapList.push(student);

            console.log("challenge data:" + " student id =" + studentCarnapData.id +" name =" + studentCarnapData.firstName + " "+ studentCarnapData.lastName)
            console.log(challengeData)
        }
        console.log(crimeReports);
        generateTable(studentCarnapList, courseInput);
        generateAndPopulateAttendanceTable(studentCarnapList);
        generateAndPopulateCrimeReportTable(crimeReports);
    } catch (error) {
        console.error('Error creating student table:', error);
    }
};

