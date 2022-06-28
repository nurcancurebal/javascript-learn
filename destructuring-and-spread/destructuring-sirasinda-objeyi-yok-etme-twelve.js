const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
];

for ({ task, time, completed } of todoList) {

    console.log(task, time, completed);
};

// Prepare JS Test 4/1/2020 8:30 true
// Give JS Test 4/1/2020 10:00 false
// Assess Test Result 4/1/2020 1:00 false