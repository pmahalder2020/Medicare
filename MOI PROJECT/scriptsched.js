let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedTime = null; // Holds the selected time

document.addEventListener("DOMContentLoaded", () => {
    populateCalendar();
});

function changeMonth(direction) {
    if (direction === 1) {
        currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        currentYear += currentMonth === 0 ? 1 : 0;
    } else if (direction === -1) {
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        currentYear -= currentMonth === 11 ? 1 : 0;
    }

    document.getElementById("month-year").textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    populateCalendar();
}

function populateCalendar() {
    const monthYearDisplay = document.getElementById("month-year");
    const calendarBody = document.getElementById("calendar-body");

    monthYearDisplay.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarBody.innerHTML = "";
    let dateNumber = 1;

    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr");

        for (let col = 0; col < 7; col++) {
            const td = document.createElement("td");

            if (row === 0 && col < firstDayIndex) {
                td.textContent = "";
            } else if (dateNumber <= daysInMonth) {
                const dayButton = document.createElement("button");
                dayButton.textContent = dateNumber;
                dayButton.onclick = () => selectDate(dayButton);
                td.appendChild(dayButton);
                dateNumber++;
            }

            tr.appendChild(td);
        }
        calendarBody.appendChild(tr);
    }
}

function getMonthName(monthIndex) {
    const monthNames = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthIndex];
}

function selectDate(button) {
    document.querySelectorAll("#calendar-table td button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

function selectTime(time) {
    document.querySelectorAll(".time-slot-buttons button").forEach(button => button.classList.remove("selected"));
    const selectedButton = Array.from(document.querySelectorAll(".time-slot-buttons button")).find(btn => btn.textContent === time);
    selectedButton.classList.add("selected");
    selectedTime = time;
}

function setDateTime() {
    const selectedDate = document.querySelector("#calendar-table td button.selected");

    if (!selectedDate) {
        alert("Please select a date first.");
        return;
    }

    if (!selectedTime) {
        alert("Please select a time first.");
        return;
    }

    const monthYearDisplay = document.getElementById("month-year").textContent;
    const selectedDay = selectedDate.textContent;
    const fullDate = `${selectedDay} ${monthYearDisplay}`;

    alert(`You have set the appointment for: ${fullDate} at ${selectedTime}`);
    document.getElementById("confirmation-message").textContent = `The time and date have been set: ${fullDate} at ${selectedTime}`;

}
