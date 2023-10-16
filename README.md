# The-Logic-Master

The logic master is a web application that assigns chanllenges to students of the the Logic I, Logic II, and Formal semantics courses. Students can log in, do the challenges, and track their progress. Instructors can log in and review students'in the courses. 

## Component: Progress dash board
This is a simple application that takes data from Carnap.io server side and then display it for the purposes of UT's logic course. The UT Logic course has a mastery system. Students basically need to complete all the challenges in Carnap. Challenges are either pass or fail. The dashboard will show for each student how many challenges they have completed and calculate the final grades.

Follow the link to a demo: https://carnap.io/shared/litmanhuang@gmail.com/demo.md 

Notes to demo version: for security version, I cannot show the full version because the API key can be retrieved. The demo version demonstrates the essentail functionalities. It makes an API call to retrieve student data. The second API call takes a student id from the first call to retrieve assignment of data of the student. 

studentCarnap object is created for storing the data
generateTable () for dynamically generating HTML table
findAssignment() will find the relevent assignments that are challenges for the course

