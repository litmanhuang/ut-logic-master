const mockGetStudents = [
    {
        "email": "groundworker@gmail.com",
        "lastName": "Kant",
        "universityId": null,
        "userId": 1231,
        "firstName": "Immanuel",
        "isAdmin": false,
        "id": 1313,
        "enrolledIn": 141,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "thinker@gmail.com",
        "lastName": "Descartes",
        "universityId": null,
        "userId": 1232,
        "firstName": "Rene",
        "isAdmin": false,
        "id": 1314,
        "enrolledIn": 141,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "scientist@gmail.com",
        "lastName": "Einstein",
        "universityId": null,
        "userId": 1233,
        "firstName": "Albert",
        "isAdmin": false,
        "id": 1315,
        "enrolledIn": 142,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "poet@gmail.com",
        "lastName": "Shakespeare",
        "universityId": null,
        "userId": 1234,
        "firstName": "William",
        "isAdmin": false,
        "id": 1316,
        "enrolledIn": 142,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "philosopher@gmail.com",
        "lastName": "Nietzsche",
        "universityId": null,
        "userId": 1235,
        "firstName": "Friedrich",
        "isAdmin": false,
        "id": 1317,
        "enrolledIn": 143,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "artist@gmail.com",
        "lastName": "Da Vinci",
        "universityId": null,
        "userId": 1236,
        "firstName": "Leonardo",
        "isAdmin": false,
        "id": 1318,
        "enrolledIn": 143,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "musician@gmail.com",
        "lastName": "Beethoven",
        "universityId": null,
        "userId": 1237,
        "firstName": "Ludwig",
        "isAdmin": false,
        "id": 1319,
        "enrolledIn": 144,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "writer@gmail.com",
        "lastName": "Tolstoy",
        "universityId": null,
        "userId": 1238,
        "firstName": "Leo",
        "isAdmin": false,
        "id": 1320,
        "enrolledIn": 144,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "architect@gmail.com",
        "lastName": "Frank Lloyd Wright",
        "universityId": null,
        "userId": 1239,
        "firstName": "Frank",
        "isAdmin": false,
        "id": 1321,
        "enrolledIn": 145,
        "instructorId": null,
        "isLti": false
    },
    {
        "email": "athlete@gmail.com",
        "lastName": "Bolt",
        "universityId": null,
        "userId": 1240,
        "firstName": "Usain",
        "isAdmin": false,
        "id": 1322,
        "enrolledIn": 145,
        "instructorId": null,
        "isLti": false
    }
]
let mockGetSubmissionByStudentId = [
    {
        "problemSubmissionAssignmentId": 3001,
        "problemSubmissionCorrect": false,
        "problemSubmissionData": {
        "type": "Qualitative",
        "data": "Qualitative data for problem 3001"
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3001}}"
        },
        "problemSubmissionCredit": 3,
        "problemSubmissionIdent": "Exercise-24",
        "problemSubmissionUserId": 10385,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Qualitative",
        "problemSubmissionTime": "2021-04-26T19:14:06.563900857Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3002,
        "problemSubmissionCorrect": true,
        "problemSubmissionData": {
        "type": "Quantitative",
        "data": [4, 8, 15, 16, 23, 42]
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3002}}"
        },
        "problemSubmissionCredit": 5,
        "problemSubmissionIdent": "Exercise-25",
        "problemSubmissionUserId": 10386,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Quantitative",
        "problemSubmissionTime": "2021-04-26T19:22:15.225671364Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3003,
        "problemSubmissionCorrect": true,
        "problemSubmissionData": {
        "type": "Essay",
        "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3003}}"
        },
        "problemSubmissionCredit": 4,
        "problemSubmissionIdent": "Exercise-26",
        "problemSubmissionUserId": 10387,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Essay",
        "problemSubmissionTime": "2021-04-26T19:30:51.156738244Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3004,
        "problemSubmissionCorrect": false,
        "problemSubmissionData": {
        "type": "Qualitative",
        "data": "Qualitative data for problem 3004"
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3004}}"
        },
        "problemSubmissionCredit": 2,
        "problemSubmissionIdent": "Exercise-27",
        "problemSubmissionUserId": 10388,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Qualitative",
        "problemSubmissionTime": "2021-04-26T19:42:19.076252398Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3005,
        "problemSubmissionCorrect": true,
        "problemSubmissionData": {
        "type": "MultipleChoice",
        "data": {
            "question": "What is the capital of France?",
            "options": ["London", "Paris", "Berlin", "Rome"],
            "answer": "Paris"
        }
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3005}}"
        },
        "problemSubmissionCredit": 5,
        "problemSubmissionIdent": "Exercise-28",
        "problemSubmissionUserId": 10389,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "MultipleChoice",
        "problemSubmissionTime": "2021-04-26T19:55:33.822950506Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3006,
        "problemSubmissionCorrect": false,
        "problemSubmissionData": {
        "type": "Qualitative",
        "data": "Qualitative data for problem 3006"
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3006}}"
        },
        "problemSubmissionCredit": 1,
        "problemSubmissionIdent": "Exercise-29",
        "problemSubmissionUserId": 10390,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Qualitative",
        "problemSubmissionTime": "2021-04-26T20:02:40.712845943Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3007,
        "problemSubmissionCorrect": true,
        "problemSubmissionData": {
        "type": "Quantitative",
        "data": [3, 6, 9, 12, 15, 18]
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3007}}"
        },
        "problemSubmissionCredit": 4,
        "problemSubmissionIdent": "Exercise-30",
        "problemSubmissionUserId": 10391,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Quantitative",
        "problemSubmissionTime": "2021-04-26T20:12:55.951088012Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3008,
        "problemSubmissionCorrect": false,
        "problemSubmissionData": {
        "type": "Essay",
        "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3008}}"
        },
        "problemSubmissionCredit": 2,
        "problemSubmissionIdent": "Exercise-31",
        "problemSubmissionUserId": 10392,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Essay",
        "problemSubmissionTime": "2021-04-26T20:24:01.810602213Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3009,
        "problemSubmissionCorrect": true,
        "problemSubmissionData": {
        "type": "MultipleChoice",
        "data": {
            "question": "Which planet is closest to the Sun?",
            "options": ["Earth", "Mars", "Mercury", "Venus"],
            "answer": "Mercury"
        }
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3009}}"
        },
        "problemSubmissionCredit": 5,
        "problemSubmissionIdent": "Exercise-32",
        "problemSubmissionUserId": 10393,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "MultipleChoice",
        "problemSubmissionTime": "2021-04-26T20:34:33.457049624Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3010,
        "problemSubmissionCorrect": false,
        "problemSubmissionData": {
        "type": "Qualitative",
        "data": "Qualitative data for problem 3010"
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3010}}"
        },
        "problemSubmissionCredit": 3,
        "problemSubmissionIdent": "Exercise-33",
        "problemSubmissionUserId": 10394,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Qualitative",
        "problemSubmissionTime": "2021-04-26T20:45:19.716015014Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3011,
        "problemSubmissionCorrect": true,
        "problemSubmissionData": {
        "type": "Quantitative",
        "data": [7, 14, 21, 28, 35, 42]
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3011}}"
        },
        "problemSubmissionCredit": 4,
        "problemSubmissionIdent": "Exercise-34",
        "problemSubmissionUserId": 10395,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Quantitative",
        "problemSubmissionTime": "2021-04-26T20:56:30.964362101Z",
        "problemSubmissionExtra": null
    },
    {
        "problemSubmissionAssignmentId": 3012,
        "problemSubmissionCorrect": false,
        "problemSubmissionData": {
        "type": "Qualitative",
        "data": "Qualitative data for problem 3012"
        },
        "problemSubmissionSource": {
        "tag": "Assignment",
        "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3012}}"
        },
        "problemSubmissionCredit": 2,
        "problemSubmissionIdent": "Exercise-35",
        "problemSubmissionUserId": 10396,
        "problemSubmissionLateCredit": null,
        "problemSubmissionType": "Qualitative",
        "problemSubmissionTime": "2021-04-26T21:08:47.825550301Z",
        "problemSubmissionExtra": null
    }
    ]

module.exports = {
    mockGetSubmissionByStudentId,
    mockGetStudents
} ;