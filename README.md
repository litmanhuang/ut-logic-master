# The-Logic-Master

###Progress dash board
This is a simple application that takes data from Carnap.io server side and then display it for the purposes of UT's logic course. The UT Logic course has a mastery system. Students basically need to complete all the challenges in Carnap. Challenges are either pass or fail. The dashboard will show for each student how many challenges they have completed and calculate the final grades. For now all the challenges come from Carnap.io. This frontend app will allow integration of exercises/questions with different sources. 

Carnap.io's API will be utilised. https://carnap.io/srv/doc/api.md. In particular, a call to retrieve student data: https://carnap.io/api/v1/instructors/:instructorIdent/courses/:courseTitle/students, and a call to retrieve for each student's data of assignments: https://carnap.io/api/v1/instructors/:instructorIdent/courses/:courseTitle/students/:studentId/submissions. 

-.id for the unique identifier used for the second API call
-problemSubmissionSource.problemSubmissionCredit for challenges pass or fail

###Design
1. Table's header is statically created, and table body will be created on load after  a successful API call to Carnap's server. 
2. API call to retrieve student data
3. store data in JOSN 
4. Rows = number of JOSN objects 
5. first colum = student ID, which will be used as identifer
6. later colums dynamically generated data of challenges for each student. (The second API call should be a callback function)
6.1 API call to server to retrieve the data about challenges 

###Notes
Due to CORS, mock JOSN data are used  