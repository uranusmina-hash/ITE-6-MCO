// ── SECTION NAVIGATION ──
var sections = ["home", "exercises", "exercise2Page", "exercise3Page", "exercise4Page", "activityPage", "about"];
function showSection(id) {
  sections.forEach(function (s) {
    document.getElementById(s).classList.toggle("hidden", s !== id);
  });
}
function setActiveNav(btn) {
  document.querySelectorAll(".nav-btn").forEach(function (b) { b.classList.remove("active"); });
  btn.classList.add("active");
}

var currentSet = 2;

// ── ENTER ──
document.getElementById("enterBtn").addEventListener("click", function () {
  document.getElementById("landing").style.display = "none";
  document.getElementById("mainSite").classList.remove("hidden");
  showSection("home");
});

// ── NAV ──
document.getElementById("homeBtn").addEventListener("click", function () { showSection("home"); setActiveNav(this); });
document.getElementById("exercisesBtn").addEventListener("click", function () { showSection("exercises"); setActiveNav(this); });
document.getElementById("aboutBtn").addEventListener("click", function () { showSection("about"); setActiveNav(this); });

// ── EXERCISE SETS ──
document.getElementById("exercise2SetBtn").addEventListener("click", function () { showSection("exercise2Page"); });
document.getElementById("exercise3SetBtn").addEventListener("click", function () { showSection("exercise3Page"); });
document.getElementById("exercise4SetBtn").addEventListener("click", function () { showSection("exercise4Page"); });

// ── BACK BUTTONS ──
document.getElementById("backToExercisesBtn").addEventListener("click", function () { showSection("exercises"); });
document.getElementById("backToExercisesBtn3").addEventListener("click", function () { showSection("exercises"); });
document.getElementById("backToExercisesBtn4").addEventListener("click", function () { showSection("exercises"); });
document.getElementById("backToExercise2Btn").addEventListener("click", function () {
  if (currentSet === 2) showSection("exercise2Page");
  else showSection("exercise3Page");
});


// ══════════════════════════════
// EXERCISE 2 ACTIVITIES
// ══════════════════════════════

function exercise2Activity1() {
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
  return "<p>✅ Alert displayed: <strong>Welcome to JavaScript!</strong></p>" +
         "<p>✅ Console logged: <strong>This is my first JS program.</strong></p>";
}

function exercise2Activity2() {
  var name = prompt("Enter your name:");
  var age = prompt("Enter your age:");
  var isStudent = prompt("Are you a student? (true/false)");
  return "<p>Name: " + name + "</p>" +
         "<p>Age: " + age + "</p>" +
         "<p>Is Student: " + isStudent + "</p>" +
         "<p>My name is " + name + ", I am " + age + " years old.</p>";
}

function exercise2Activity3() {
  var num1 = parseFloat(prompt("Enter first number:"));
  var num2 = parseFloat(prompt("Enter second number:"));
  var sum        = num1 + num2;
  var difference = num1 - num2;
  var product    = num1 * num2;
  var quotient   = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  console.log("Sum: " + sum);
  console.log("Difference: " + difference);
  console.log("Product: " + product);
  console.log("Quotient: " + quotient);
  return "<p>Sum: <strong>" + sum + "</strong></p>" +
         "<p>Difference: <strong>" + difference + "</strong></p>" +
         "<p>Product: <strong>" + product + "</strong></p>" +
         "<p>Quotient: <strong>" + quotient + "</strong></p>";
}

function exercise2Activity4() {
  var name = prompt("Enter your name:");
  var num = prompt("Enter your favorite number:");
  var msg = "Hello " + name + "! Your favorite number is " + num + ".";
  alert(msg);
  return "<p>" + msg + "</p>";
}

function exercise2Activity5() {
  var age = parseInt(prompt("Enter your age:"));
  var msg = age >= 18 ? "✅ You are eligible." : "❌ You are not eligible.";
  alert(msg);
  return "<p>Age: " + age + "</p><p>" + msg + "</p>";
}

function exercise2Activity6() {
  var number = parseInt(prompt("Enter a number to count up to:"));
  var html = "<p>For Loop (1 to " + number + "):</p><ul>";
  console.log("For Loop (1 to " + number + "):");
  for (var i = 1; i <= number; i++) {
    console.log(i);
    html += "<li>" + i + "</li>";
  }
  html += "</ul><p>While Loop (" + number + " to 1):</p><ul>";
  console.log("While Loop (" + number + " to 1):");
  var j = number;
  while (j >= 1) {
    console.log(j);
    html += "<li>" + j + "</li>";
    j--;
  }
  return html + "</ul>";
}

function exercise2Activity7() {
  alert("Button Clicked!");
  return "<p>✅ Alert displayed: <strong>Button Clicked!</strong></p>";
}


// ══════════════════════════════
// EXERCISE 3 ACTIVITIES
// ══════════════════════════════

function exercise3Activity1() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var btn = document.createElement("button");
  btn.textContent = "Change Background Color";

  var out = document.createElement("div");
  out.className = "output-text";
  out.textContent = "Click the button!";

  btn.addEventListener("click", function () {
    var colors = ["#f9c74f", "#90be6d", "#f94144", "#43aa8b", "#577590", "#f8961e"];
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color;
    out.textContent = "Background changed to: " + color;
  });

  demo.appendChild(btn);
  demo.appendChild(out);
}

function exercise3Activity2() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var dark = false;
  var btn = document.createElement("button");
  btn.textContent = "Enable Dark Mode";

  btn.addEventListener("click", function () {
    dark = !dark;
    document.body.style.background = dark ? "#1a1a2e" : "#f0f2f5";
    document.body.style.color = dark ? "#ffffff" : "#222222";
    btn.textContent = dark ? "Disable Dark Mode" : "Enable Dark Mode";
  });

  demo.appendChild(btn);
}

function exercise3Activity3() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var count = 1;
  var btn = document.createElement("button");
  btn.textContent = "Add Item";

  var list = document.createElement("ul");
  var first = document.createElement("li");
  first.textContent = "Item 1";
  list.appendChild(first);

  btn.addEventListener("click", function () {
    count++;
    var li = document.createElement("li");
    li.textContent = "Item " + count;
    list.appendChild(li);
  });

  demo.appendChild(btn);
  demo.appendChild(list);
}

function exercise3Activity4() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var p = document.createElement("p");
  p.textContent = "This paragraph will be removed when you click the button.";

  var btn = document.createElement("button");
  btn.textContent = "Remove Paragraph";

  btn.addEventListener("click", function () {
    if (p.parentNode) {
      p.remove();
      btn.textContent = "Paragraph removed!";
      btn.disabled = true;
    }
  });

  demo.appendChild(p);
  demo.appendChild(btn);
}

function exercise3Activity5() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type something...";

  var out = document.createElement("div");
  out.className = "output-text";
  out.textContent = "Characters: 0";

  input.addEventListener("input", function () {
    out.textContent = "Characters: " + input.value.length;
  });

  demo.appendChild(input);
  demo.appendChild(out);
}

function exercise3Activity6() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var input1 = document.createElement("input");
  input1.type = "number";
  input1.placeholder = "First number";

  var input2 = document.createElement("input");
  input2.type = "number";
  input2.placeholder = "Second number";

  var btn = document.createElement("button");
  btn.textContent = "Add";

  var out = document.createElement("div");
  out.className = "output-text";
  out.textContent = "Result will appear here.";

  btn.addEventListener("click", function () {
    var a = parseFloat(input1.value);
    var b = parseFloat(input2.value);
    if (isNaN(a) || isNaN(b)) {
      out.textContent = "Please enter valid numbers.";
    } else {
      out.textContent = a + " + " + b + " = " + (a + b);
    }
  });

  demo.appendChild(input1);
  demo.appendChild(input2);
  demo.appendChild(btn);
  demo.appendChild(out);
}

function exercise3Activity7() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var images = [
    "https://picsum.photos/seed/nature/200/140",
    "https://picsum.photos/seed/city/200/140",
    "https://picsum.photos/seed/animals/200/140"
  ];
  var idx = 0;

  var img = document.createElement("img");
  img.src = images[0];
  img.alt = "Image";

  var btn = document.createElement("button");
  btn.textContent = "Change Image";

  btn.addEventListener("click", function () {
    idx = (idx + 1) % images.length;
    img.src = images[idx];
  });

  demo.appendChild(img);
  demo.appendChild(document.createElement("br"));
  demo.appendChild(btn);
}

function exercise3Activity8() {
  var demo = document.getElementById("activityDemo");
  demo.innerHTML = "";

  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a task...";

  var btn = document.createElement("button");
  btn.textContent = "Add Task";

  var list = document.createElement("ul");

  btn.addEventListener("click", function () {
    var val = input.value.trim();
    if (!val) return;

    var li = document.createElement("li");
    li.textContent = val;

    var remove = document.createElement("span");
    remove.textContent = " ✕";
    remove.style.color = "#e74c3c";
    remove.style.cursor = "pointer";
    remove.style.fontWeight = "bold";

    remove.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(remove);
    list.appendChild(li);
    input.value = "";
  });

  demo.appendChild(input);
  demo.appendChild(btn);
  demo.appendChild(list);
}


// ══════════════════════════════
// EXERCISE 4 — GRADE CALCULATOR
// ══════════════════════════════

document.getElementById("generateFieldsBtn").addEventListener("click", function () {
  var numQuizzes = parseInt(document.getElementById("numQuizzes").value);
  var numMcos    = parseInt(document.getElementById("numMcos").value);
  var fields     = document.getElementById("scoreFields");
  var result     = document.getElementById("gradeResult");

  result.style.display = "none";
  result.innerHTML = "";

  if (isNaN(numQuizzes) || numQuizzes < 1 || isNaN(numMcos) || numMcos < 1) {
    result.style.display = "block";
    result.innerHTML = "⚠️ Please enter valid numbers (minimum 1).";
    return;
  }

  var html = "<div class='score-fields-grid'>";

  for (var i = 1; i <= numQuizzes; i++) {
    html += "<div class='score-row'><label>Quiz " + i + " Score</label>" +
            "<input type='number' class='quizScore' placeholder='0-100' min='0' max='100'></div>";
  }

  html += "<div class='score-row'><label>Exam Score</label>" +
          "<input type='number' id='examScore' placeholder='0-100' min='0' max='100'></div>";

  for (var j = 1; j <= numMcos; j++) {
    html += "<div class='score-row'><label>MCO " + j + " Score</label>" +
            "<input type='number' class='mcoScore' placeholder='0-100' min='0' max='100'></div>";
  }

  html += "<div class='grade-buttons'>" +
          "<button id='calcGradeBtn'>Calculate Grade</button>" +
          "<button id='resetGradeBtn' class='btn-reset'>Reset</button>" +
          "</div></div>";

  fields.innerHTML = html;

  document.getElementById("calcGradeBtn").addEventListener("click", function () {
    var quizFields = document.querySelectorAll(".quizScore");
    var mcoFields  = document.querySelectorAll(".mcoScore");
    var exam       = parseFloat(document.getElementById("examScore").value);

    var quizScores = [];
    var mcoScores  = [];
    var valid      = true;

    quizFields.forEach(function (f) {
      var v = parseFloat(f.value);
      if (isNaN(v) || v < 0 || v > 100) valid = false;
      else quizScores.push(v);
    });

    mcoFields.forEach(function (f) {
      var v = parseFloat(f.value);
      if (isNaN(v) || v < 0 || v > 100) valid = false;
      else mcoScores.push(v);
    });

    result.style.display = "block";

    if (!valid || isNaN(exam) || exam < 0 || exam > 100) {
      result.innerHTML = "⚠️ Please fill in all fields with valid scores (0–100).";
      return;
    }

    var quizAvg    = quizScores.reduce(function (a, b) { return a + b; }, 0) / quizScores.length;
    var mcoAvg     = mcoScores.reduce(function (a, b) { return a + b; }, 0) / mcoScores.length;
    var finalGrade = (quizAvg * 0.20) + (exam * 0.30) + (mcoAvg * 0.50);

    var letter;
    if (finalGrade >= 90) letter = "A";
    else if (finalGrade >= 80) letter = "B";
    else if (finalGrade >= 70) letter = "C";
    else if (finalGrade >= 60) letter = "D";
    else letter = "F";

    result.innerHTML =
      "<table class='grade-result-table'>" +
        "<tr><td>Quiz Average (20%)</td><td>" + quizAvg.toFixed(2) + "</td></tr>" +
        "<tr><td>Exam Score (30%)</td><td>" + exam + "</td></tr>" +
        "<tr><td>MCO Average (50%)</td><td>" + mcoAvg.toFixed(2) + "</td></tr>" +
        "<tr><td>Final Grade</td><td>" + finalGrade.toFixed(2) + "</td></tr>" +
        "<tr><td>Grade Equivalent</td><td>" + letter + "</td></tr>" +
      "</table>";
  });

  document.getElementById("resetGradeBtn").addEventListener("click", function () {
    document.querySelectorAll(".quizScore, .mcoScore").forEach(function (f) { f.value = ""; });
    document.getElementById("examScore").value = "";
    result.style.display = "none";
    result.innerHTML = "";
  });
});


// ══════════════════════════════
// ACTIVITY DATA
// ══════════════════════════════

var activityData = {
  2: {
    1: { title: "Activity 1 — Output",               desc: "Display alert and console messages.",               fn: exercise2Activity1 },
    2: { title: "Activity 2 — Variables",             desc: "Input your name, age, and student status.",         fn: exercise2Activity2 },
    3: { title: "Activity 3 — Calculator",            desc: "Enter two numbers and see arithmetic results.",     fn: exercise2Activity3 },
    4: { title: "Activity 4 — User Input",            desc: "Displays a personalized message using user input.", fn: exercise2Activity4 },
    5: { title: "Activity 5 — Conditional",           desc: "Check if you meet the age requirement (18+).",      fn: exercise2Activity5 },
    6: { title: "Activity 6 — Loops",                 desc: "Count up and down using for and while loops.",      fn: exercise2Activity6 },
    7: { title: "Activity 7 — JS & HTML Interaction", desc: "Interact with the page using JavaScript.",          fn: exercise2Activity7 }
  },
  3: {
    1: { title: "Activity 1 — Change Background Color", desc: "Click a button to change the page background color.", fn: exercise3Activity1 },
    2: { title: "Activity 2 — Dark Mode Toggle",         desc: "Toggle between light and dark mode.",                fn: exercise3Activity2 },
    3: { title: "Activity 3 — Add List Items",           desc: "Add new list items when a button is clicked.",       fn: exercise3Activity3 },
    4: { title: "Activity 4 — Remove Paragraph",         desc: "Remove a paragraph when a button is clicked.",       fn: exercise3Activity4 },
    5: { title: "Activity 5 — Character Counter",        desc: "Display the number of characters typed in a field.", fn: exercise3Activity5 },
    6: { title: "Activity 6 — Addition Calculator",      desc: "Add two numbers using input fields.",                fn: exercise3Activity6 },
    7: { title: "Activity 7 — Change Image",             desc: "Swap between images when a button is clicked.",      fn: exercise3Activity7 },
    8: { title: "Activity 8 — Mini To-Do List",          desc: "Add and remove tasks in a simple to-do list.",       fn: exercise3Activity8 }
  }
};


// ── ACTIVITY CARD CLICK ──
document.querySelectorAll(".activity-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var set  = parseInt(this.getAttribute("data-set"));
    var act  = parseInt(this.getAttribute("data-activity"));
    var data = activityData[set][act];
    currentSet = set;

    document.getElementById("activityTitle").textContent = data.title;
    document.getElementById("activityDescription").textContent = data.desc;

    var demo = document.getElementById("activityDemo");
    demo.innerHTML = "";

    if (set === 2) {
      var btn = document.createElement("button");
      btn.textContent = "▶ Run Activity";

      var out = document.createElement("div");
      out.className = "output-text";
      out.textContent = "Click Run to execute.";

      btn.addEventListener("click", function () {
        out.innerHTML = data.fn();
      });

      demo.appendChild(btn);
      demo.appendChild(out);
    }

    if (set === 3) {
      data.fn();
    }

    showSection("activityPage");
  });
});