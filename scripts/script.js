document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('sidebar-hidden');
});

// POPUP
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup1").style.display = "flex";
    document.getElementById("background").classList.add("blur-background");

    document.getElementById("next-popup1").addEventListener("click", function() {
        document.getElementById("popup1").style.display = "none";
        document.getElementById("popup2").style.display = "flex";
    });

    function removeBlur() {
        document.getElementById("background").classList.remove("blur-background");
    }

    document.getElementById("next-popup2-maybe").addEventListener("click", function() {
        document.getElementById("popup2").style.display = "none";
        document.getElementById("popup5").style.display = "flex";
    });

    document.getElementById("next-popup2-yes").addEventListener("click", function() {
        document.getElementById("popup2").style.display = "none";
        document.getElementById("popup3").style.display = "flex";
        setTimeout(function() {
            document.getElementById("popup3").style.display = "none";
            document.getElementById("popup4").style.display = "flex";
        }, 5000);
    });

    document.getElementById("next-popup4").addEventListener("click", function() {
        document.getElementById("popup4").style.display = "none";
        document.getElementById("popup5").style.display = "flex";
    });

    document.getElementById("next-popup5-maybe").addEventListener("click", function() {
        document.getElementById("popup5").style.display = "none";
        removeBlur();
    });

    document.getElementById("next-popup5-yes").addEventListener("click", function() {
        document.getElementById("popup5").style.display = "none";
        document.getElementById("popup6").style.display = "flex";
    });

    document.getElementById("next-popup6").addEventListener("click", function() {
        document.getElementById("popup6").style.display = "none";
        document.getElementById("popup7").style.display = "flex";
    });

    document.getElementById("next-popup7").addEventListener("click", function() {
        document.getElementById("popup7").style.display = "none";
        document.getElementById("popup8").style.display = "flex";
        setTimeout(function() {
            document.getElementById("popup8").style.display = "none";
            document.getElementById("popup9").style.display = "flex";
            setTimeout(function() {
                document.getElementById("popup9").style.display = "none";
                removeBlur();
            }, 5000);
        }, 5000);
    });
});
// END POPUP

// COURSE MODAL
var modal = document.getElementById("courseModal");

var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

span.onclick = function() {
  closeModal();
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

document.getElementById("goBackBtn").addEventListener("click", closeModal);
document.getElementById("addToCartBtn").addEventListener("click", function() {
  alert("HEHE udah ketambah");
});



// KALENDER SCHEDULE
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

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
		lit +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {

		// Check if the current date is today
		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear()
			? "active"
			: "";
		lit += `<li class="${isToday}">${i}</li>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<li class="inactive">${i - dayend + 1}</li>`
	}

	// Update the text of the current date element 
	// with the formatted current month and year
	// currdate.innerText = `${months[month]} ${year}`;
    currdate.innerText = ${months[month]} ${year};

	// update the HTML of the dates element 
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

	// When an icon is clicked
	icon.addEventListener("click", () => {

		// Check if the icon is "calendar-prev"
		// or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		// Check if the month is out of range
		if (month < 0 || month > 11) {

			// Set the date to the first day of the 
			// month with the new year
			date = new Date(year, month, new Date().getDate());

			// Set the year to the new year
			year = date.getFullYear();

			// Set the month to the new month
			month = date.getMonth();
		}

		else {

			// Set the date to the current date
			date = new Date();
		}

		// Call the manipulate function to 
		// update the calendar display
		manipulate();
	});
});
