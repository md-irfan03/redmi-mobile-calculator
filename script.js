const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);

    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    li.onclick = () => display.value = result;
    historyList.prepend(li);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}
function toggleHistory() {
  historyPanel.classList.toggle("show");

  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");

  if (historyPanel.classList.contains("show")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
const toggle = document.getElementById("themeSwitch");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
openIcon.addEventListener("mouseenter", () => {
  openIcon.setAttribute("data-title", "History");
});
