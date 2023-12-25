const challengeDates = [
    {
        name: "2023-09-28: 1500",
        startTime: new Date("2023-09-28T15:00:00Z"),
        endTime: new Date("2023-09-28T16:00:00Z"),
        presence: false
    }, 
    {
        name: "2023-09-21: 1500",
        startTime: new Date("2023-09-21T15:00:00Z"),
        endTime: new Date("2023-09-21T16:00:00Z"),
        presence: false
    },
    {
        name: "2023-10-05: 1500",
        startTime: new Date("2023-10-05T15:00:00Z"),
        endTime: new Date("2023-10-05T16:00:00Z"),
        presence: false
    },
    {
        name: "2023-10-12: 1500",
        startTime: new Date("2023-10-12T15:00:00Z"),
        endTime: new Date("2023-10-12T16:00:00Z"),
        presence: false
    },    
    {
        name: "2023-10-19: 1500",
        startTime: new Date("2023-10-19T15:00:00Z"),
        endTime: new Date("2023-10-19T16:00:00Z"),
        presence: false
    },
    {
        name: "2023-10-26: 1500",
        startTime: new Date("2023-10-26T15:00:00Z"),
        endTime: new Date("2023-10-26T16:00:00Z"),
        presence: false
    }
    ]

localStorage.setItem('validDates', JSON.stringify(challengeDates));
localStorage.setItem('myCourse', "Tartu%20-%20Introduction%20to%20Logic%20(Eng)");
localStorage.setItem('instructor', "litmanhuang@gmail.com");
localStorage.setItem('apiKey', "bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ");