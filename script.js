const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const eventDetails = document.getElementById('eventDetails');
let events = {
    "2023-04-01": "April Fools",
    "2023-04-18": "9+ Events",
    "2023-04-30": "3 Events"
};

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');

document.getElementById('prevMonth').addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar();
});

function renderCalendar() {
    calendarDays.innerHTML = '';
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        calendarDays.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = day;
        let dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        if (events[dateKey]) {
            dateDiv.classList.add('event');
            dateDiv.addEventListener('click', () => {
                eventDetails.textContent = events[dateKey];
            });
        } else {
            dateDiv.addEventListener('click', () => {
                eventDetails.textContent = 'No Events';
            });
        }

        calendarDays.appendChild(dateDiv);
    }
}

renderCalendar();
urce code
