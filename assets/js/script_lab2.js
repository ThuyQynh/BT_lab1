// Particle.js configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#3498db" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#3498db", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Tab switching
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// CodeMirror initialization
const codeEditor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "python",
    theme: "default",
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    indentWithTabs: true
});

// Language selection
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', () => {
    const language = languageSelect.value;
    let mode;
    switch (language) {
        case 'c':
            mode = 'text/x-csrc';
            break;
        case 'java':
            mode = 'text/x-java';
            break;
        case 'python':
        default:
            mode = 'python';
    }
    codeEditor.setOption('mode', mode);
});

// Mock exercise data
const exercises = [
    { id: 1, title: "Hello World", description: "Print 'Hello, World!' to the console.", language: "python", difficulty: "Easy", timeLimit: "1 minute", status: "Not Started" },
    { id: 2, title: "Fibonacci Sequence", description: "Generate the first 10 numbers of the Fibonacci sequence.", language: "c", difficulty: "Medium", timeLimit: "5 minutes", status: "In Progress" },
    { id: 3, title: "Bubble Sort", description: "Implement the bubble sort algorithm.", language: "java", difficulty: "Hard", timeLimit: "10 minutes", status: "Completed" }
];

// Populate exercise list
const exerciseList = document.getElementById('exerciseList');
function populateExercises(exercises) {
    exerciseList.innerHTML = '';
    exercises.forEach(exercise => {
        const li = document.createElement('li');
        li.className = 'neumorphic';
        li.innerHTML = `
            <h3 class="font-bold">${exercise.title}</h3>
            <p>${exercise.description}</p>
            <p>Language: ${exercise.language}</p>
            <p>Difficulty: ${exercise.difficulty}</p>
            <p>Time Limit: ${exercise.timeLimit}</p>
            <p>Status: ${exercise.status}</p>
            <button class="btn mt-2" onclick="startExercise(${exercise.id})">Start Exercise</button>
        `;
        exerciseList.appendChild(li);
    });
}
populateExercises(exercises);

// Exercise filtering and search
const languageFilter = document.getElementById('languageFilter');
const searchExercise = document.getElementById('searchExercise');

function filterExercises() {
    const language = languageFilter.value;
    const searchTerm = searchExercise.value.toLowerCase();
    const filteredExercises = exercises.filter(exercise => 
        (language === 'all' || exercise.language === language) &&
        (exercise.title.toLowerCase().includes(searchTerm) || exercise.description.toLowerCase().includes(searchTerm))
    );
    populateExercises(filteredExercises);
}

languageFilter.addEventListener('change', filterExercises);
searchExercise.addEventListener('input', filterExercises);

// Start exercise function
function startExercise(id) {
    const exercise = exercises.find(ex => ex.id === id);
    if (exercise) {
        document.getElementById('exerciseTitle').textContent = exercise.title;
        document.getElementById('exerciseDescription').textContent = exercise.description;
        languageSelect.value = exercise.language;
        languageSelect.dispatchEvent(new Event('change'));
        document.querySelector('.tab-link[data-tab="coding"]').click();
    }
}

// Run code function
document.getElementById('runCode').addEventListener('click', () => {
    const code = codeEditor.getValue();
    const output = document.getElementById('output');
    output.textContent = `Running code:\n${code}\n\nOutput: [Simulated output would appear here]`;
});

// Clear code function
document.getElementById('clearCode').addEventListener('click', () => {
    codeEditor.setValue('');
});

// Submit code function
document.getElementById('submitCode').addEventListener('click', () => {
    const code = codeEditor.getValue();
    // Simulate code submission and grading
    document.querySelector('.tab-link[data-tab="grading"]').click();
    document.getElementById('gradingStatus').textContent = 'Status: Success';
    document.getElementById('testCases').innerHTML = `
        <div>Test Case 1: Pass</div>
        <div>Test Case 2: Pass</div>
        <div>Test Case 3: Fail</div>
    `;
    document.getElementById('score').textContent = 'Score: 2/3';
    document.getElementById('performance').textContent = 'Execution Time: 0.5s | Memory Usage: 5MB';
});

// Retry exercise function
document.getElementById('retryExercise').addEventListener('click', () => {
    document.querySelector('.tab-link[data-tab="coding"]').click();
});

// Back to dashboard function
document.getElementById('backToDashboard').addEventListener('click', () => {
    document.querySelector('.tab-link[data-tab="exercises"]').click();
});

// Submit feedback function
document.getElementById('submitFeedback').addEventListener('click', () => {
    const feedback = document.getElementById('feedback').value;
    alert(`Feedback submitted: ${feedback}`);
    document.getElementById('feedback').value = '';
});

// Get hint function
document.getElementById('getHint').addEventListener('click', () => {
    alert('Hint: Consider using a loop to solve this problem.');
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulate login
    if (username && password) {
        alert('Login successful!');
        document.querySelector('.tab-link[data-tab="exercises"]').click();
    } else {
        alert('Please enter both username and password.');
    }
});

// Animations
anime({
    targets: '.neumorphic',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutElastic(1, .8)',
    delay: anime.stagger(100)
});