document.getElementById('postTaskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const taskCategory = document.getElementById('taskCategory').value;
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskTime = document.getElementById('taskTime').value;
    const taskLocation = document.getElementById('taskLocation').value;
    const taskBudget = document.getElementById('taskBudget').value;

    // Simple form validation (example)
    if (taskCategory && taskTitle && taskDescription && taskDate && taskLocation && taskBudget) {
        console.log('Task Submitted Successfully!');
        alert('Your task has been posted!');
        // Simulate form submission or send data to server
    } else {
        alert('Please fill in all required fields.');
    }
});
