const taskImages = [
    'images/task1.jpg',
    'images/task2.jpg',
    'images/task3.jpg',
    'images/task4.jpg',
    'images/task5.jpg',
    'images/task6.jpg'
];

const rouletteImage = document.getElementById('roulette-image');
const spinButton = document.getElementById('spin-button');
const taskResult = document.getElementById('task-result');

spinButton.addEventListener('click', () => {
    spinButton.disabled = true; // Disable the button while spinning
    taskResult.textContent = ''; // Clear previous result
    let spinCount = 0;
    const spinInterval = setInterval(() => {
        // Change the image randomly while spinning
        const randomIndex = Math.floor(Math.random() * taskImages.length);
        rouletteImage.src = taskImages[randomIndex];
        spinCount++;

        // Stop after a certain number of spins (e.g., 20)
        if (spinCount >= 20) {
            clearInterval(spinInterval);
            spinButton.disabled = false; // Re-enable the button after spinning

            // Display the final task
            const selectedTask = taskImages[randomIndex];
            taskResult.textContent = `Your Task: ${selectedTask.split('/').pop().split('.').shift()}`;
        }
    }, 100); // Change image every 100ms
});
