let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-btn");

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar
const manipulate = () => {

    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
        lit += `<li class="${isToday}" data-day="${i}">${i}</li>`;
    }

    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`;
    }

    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;

    // Attach click event listeners to all dates
    const dates = document.querySelectorAll(".calendar-dates li");
    dates.forEach(date => {
        date.addEventListener("click", handleDateClick);
    });
}

// Function to handle date clicks
const handleDateClick = (event) => {
    // Remove the background color from previously selected date
    const previouslySelected = document.querySelector(".calendar-dates .selected");
    if (previouslySelected) {
        previouslySelected.classList.remove("selected");
    }

    // Add background color to the clicked date
    event.target.classList.add("selected");

    // Get the selected date's content and other information
    const selectedDay = event.target.dataset.day;
    const currentMonthYear = currdate.textContent;
    const [monthName, year] = currentMonthYear.split(' ');

    // Update event details
    document.querySelector(".current-event").textContent = `Events for ${monthName}, ${selectedDay}, ${year}`;
    document.querySelector(".event-description").textContent = `Details for events on ${monthName} ${selectedDay}, ${year}`;
}

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }

        manipulate();
    });
});

// Initialize the calendar
manipulate();
