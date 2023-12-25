# push to student_progress_app.md
curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ"  -T "/Users/litmanhuang/Apps/philosophy/The-Logic-Master/student_progress_app.md" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents/9109/data

# push to demo.md
curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ"  -T "/Users/litmanhuang/projects/The-Logic-Master/demo.md" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents/9134/data


# push to appScript.js 
curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ"  -T "/Users/litmanhuang/Apps/philosophy/The-Logic-Master/table.js" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents/9110/data

# push to mockTable.js 
curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ"  -T "/Users/litmanhuang/projects/The-Logic-Master/mockTable.js" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents/9135/data

# push to apiTestAssignment.md
curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ"  -T "/Users/litmanhuang/projects/The-Logic-Master/testAssignment.md" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents/9130/data

# bash command for creating a file
curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ" \
     -H "Content-Type: application/json" \
     -d '{"filename":"apiTestAssignment.md","scope":"Private", "description":"for testing API"}' \
     https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents


curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents | jq

curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/courses/"Tartu%20-%20Introduction%20to%20Logic%20(Eng)"/assignments | jq

curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/courses/"Tartu%20-%20Introduction%20to%20Logic%20(Eng)"/students/9696/extensions | jq

curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ" \
    https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/courses/"Tartu%20-%20Introduction%20to%20Logic%20(Eng)"/students/25486/assignmentTokens | jq

curl -H "X-API-KEY:bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ" \
     -H "Content-Type: application/json" \
     -d '{"filename":"demotable.js","scope":"Public", "description":"demo with mock JSON data"}' \
     https://carnap.io/api/v1/instructors/litmanhuang@gmail.com/documents

//check if the access time is the same as the specified one 
//change challenge descritpion 
//keep track of all the retakes either 

25486/assignmentTokens


https://carnap.io/api/v1/instructors/:instructorIdent/courses/:courseTitle/students/25486/assignmentTokens