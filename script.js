let users = {}; // temp memory

const authBtn = document.getElementById('authBtn');
const switchToSignUp = document.getElementById('switchToSignUp');
const authTitle = document.getElementById('authTitle');
const toggleForm = document.getElementById('toggleForm');

let isSignUp = false;

switchToSignUp.addEventListener('click', () => {
  isSignUp = !isSignUp;
  authTitle.textContent = isSignUp ? "Sign Up" : "Login";
  authBtn.textContent = isSignUp ? "Sign Up" : "Login";
  toggleForm.innerHTML = isSignUp
    ? 'Already have an account? <span id="switchToSignUp">Login</span>'
    : 'Don\'t have an account? <span id="switchToSignUp">Sign Up</span>';
  document.getElementById('switchToSignUp').addEventListener('click', switchToSignUp.click);
});

authBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  if (isSignUp) {
    if (users[username]) {
      alert("User already exists.");
    } else {
      users[username] = password;
      alert("Account created! Please log in.");
      switchToSignUp.click();
    }
  } else {
    if (users[username] && users[username] === password) {
      document.getElementById('authContainer').style.display = "none";
      document.getElementById('todoContainer').style.display = "flex";
    } else {
      alert("Invalid username or password.");
    }
  }
});

// To-Do Logic
document.getElementById('submitBtn').addEventListener('click', function () {
  const textInput = document.getElementById('textInput');
  const todoText = textInput.value.trim();

  if (todoText !== "") {
    const todoList = document.getElementById('todoList');

    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${Date.now()}`;

    const label = document.createElement('label');
    label.setAttribute("for", checkbox.id);
    label.textContent = todoText;

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoList.appendChild(todoItem);

    textInput.value = '';
  }
});

document.getElementById('clearBtn').addEventListener('click', function () {
  document.getElementById('todoList').innerHTML = '';
});
