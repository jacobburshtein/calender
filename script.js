const calendarBody = document.getElementById("calendar-body");
const monthYear = document.getElementById("month-year");
let currentDate = new Date();

function renderCalendar() {
    calendarBody.innerHTML = "";
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${currentDate.toLocaleString("he-IL", { month: "long" })} ${year}`;
    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay || date > daysInMonth) {
                row.appendChild(cell);
            } else {
                cell.textContent = date;
                cell.addEventListener("click", () => addEvent(cell));

                if (isToday(year, month, date)) {
                    cell.classList.add("today");
                }

                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

function isToday(year, month, day) {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  }

    function addEvent(cell) {
        const day = cell.textContent;
        const event = prompt(`הוסף אירוע ליום ${day}`);
        if (event) {
        cell.classList.add("event");
        cell.title = event;
        }
    }

  function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  }

  function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  }

  renderCalendar();