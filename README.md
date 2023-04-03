# The-Logic-Master

The logic master is a web application that assigns chanllenges to students of the the Logic I, Logic II, and Formal semantics courses. Students can log in, do the challenges, and track their progress. Instructors can log in and review students'in the courses. 

## Component: Progress dash board
This is a simple application that takes data from Carnap.io server side and then display it for the purposes of UT's logic course. The UT Logic course has a mastery system. Students basically need to complete all the challenges in Carnap. Challenges are either pass or fail. The dashboard will show for each student how many challenges they have completed and calculate the final grades. For now all the challenges come from Carnap.io. This frontend app will allow integration of exercises/questions with different sources. 

Carnap.io's API will be utilised. https://carnap.io/srv/doc/api.md. In particular, a call to retrieve student data: https://carnap.io/api/v1/instructors/:instructorIdent/courses/:courseTitle/students, and a call to retrieve for each student's data of assignments: https://carnap.io/api/v1/instructors/:instructorIdent/courses/:courseTitle/students/:studentId/submissions. 

-.id for the unique identifier used for the second API call
-problemSubmissionSource.problemSubmissionCredit for challenges pass or fail
