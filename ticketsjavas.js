// FOR THE CALENDAR
// const daysTag = document.querySelector(".days"),
// currentDate = document.querySelector(".current-date"),
// prevNextIcon = document.querySelectorAll(".icons span");


// let date = new Date(),
// currYear = date.getFullYear(),
// currMonth = date.getMonth();


// // storing full name of all months in array
// const months = ["January", "February", "March", "April", "May", "June", "July",
//               "August", "September", "October", "November", "December"];


// const renderCalendar = () => {
//     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month

//     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
//     lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month

//     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
//     let liTag = "";


//     for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
//         liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//     }
//     for (let i = 1; i <= lastDateofMonth; i++) {

//         liTag += `<li class="day" onclick="to(${i})">${i}</li>`;
//     }
//     for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
//         liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
//     }


//     currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
//     daysTag.innerHTML = liTag;
// }
// renderCalendar();


// prevNextIcon.forEach(icon => { // getting prev and next icons
//     icon.addEventListener("click", () => { // adding click event on both icons
//         // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
//         currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

//         if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
//             // creating a new date of current year & month and pass it as date value
//             date = new Date(currYear, currMonth, new Date().getDate());
//             currYear = date.getFullYear(); // updating current year with new date year
//             currMonth = date.getMonth(); // updating current month with new date month
//         } else {
//             date = new Date(); // pass the current date as date value
//         }
//         renderCalendar(); // calling renderCalendar function
//     });
// });

// // Function to handle day selection
// function toggleDay(day) {
//     const selectedDayElement = document.querySelector(
//       `.days li:nth-child(${day + firstDayofMonth})`
//     );
  
//     if (selectedDayElement.classList.contains("active")) {
//       // Day is already selected, so deselect it
//       selectedDayElement.classList.remove("active");
//       localStorage.removeItem("selectedDay");
//     } else {
//       // Day is not selected, so select it
//       selectedDayElement.classList.add("active");
//       const selectedDay = new Date(currYear, currMonth, day);
//       const selectedTimestamp = selectedDay.getTime();
//       localStorage.setItem("selectedDay", selectedTimestamp);
//     }
//   }

// END OF CALENDAR PART
  



//retrieve the data from the form


//for increment decrement button

// const numASLElement = document.getElementById("numASL");
// const numCSLElement = document.getElementById("numCSL");
// const numAFElement = document.getElementById("numAF");
// const numCFElement = document.getElementById("numCF");

// // Initialize variables to store the current values
// let numASL = 0;
// let numCSL = 0;
// let numAF = 0;
// let numCF = 0;

// // Add event listeners to increment/decrement buttons

// // Adult Sri Lankan (ASL)
// document.querySelector(".minusASL").addEventListener("click", () => {
//     numASL = Math.max(numASL - 1, 0);
//     numASLElement.innerText = numASL;
// });

// document.querySelector(".plusASL").addEventListener("click", () => {
//     numASL++;
//     numASLElement.innerText = numASL;
// });

// // Child Sri Lankan (CSL)
// document.querySelector(".minusCSL").addEventListener("click", () => {
//     numCSL = Math.max(numCSL - 1, 0);
//     numCSLElement.innerText = numCSL;
// });

// document.querySelector(".plusCSL").addEventListener("click", () => {
//     numCSL++;
//     numCSLElement.innerText = numCSL;
// });

// // Adult Foreigner (AF)
// document.querySelector(".minusAF").addEventListener("click", () => {
//     numAF = Math.max(numAF - 1, 0);
//     numAFElement.innerText = numAF;
// });

// document.querySelector(".plusAF").addEventListener("click", () => {
//     numAF++;
//     numAFElement.innerText = numAF;
// });

// // Child Foreigner (CF)
// document.querySelector(".minusCF").addEventListener("click", () => {
//     numCF = Math.max(numCF - 1, 0);
//     numCFElement.innerText = numCF;
// });

// document.querySelector(".plusCF").addEventListener("click", () => {
//     numCF++;
//     numCFElement.innerText = numCF;
// });



// //for increment decrement button




// function readFormData(){
//     var formData = {};
//     formData["calendar"] = document.getElementById("calendar").value;
//     formData["asl"] = document.getElementById("asl").value;
//     formData["csl"] = document.getElementById("csl").value;
//     formData["af"] = document.getElementById("af").value;
//     formData["cf"] = document.getElementById("cf").value;
//     return formData;
// }

// const priceConfig = {
//     aslPrice: 4,
//     cslPrice: 2,
//     afPrice: 10,
//     cfPrice: 5,
//   };


// //to calculate the total price
// function calculateTotalPrice(formData){
//     const aslTotal = formData.asl * priceConfig.aslPrice;
//     const cslTotal = formData.csl * priceConfig.cslPrice;
//     const afTotal = formData.af * priceConfig.afPrice;
//     const cfTotal = formData.cf * priceConfig.cfPrice;
//     return aslTotal + cslTotal + afTotal + cfTotal;
// }


// //insert the data

// function insertNewRecord(data){
//     var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.calendar;
//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.asl;
//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.csl;
//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.af;
//     var cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.cf;
//     var cell6 = newRow.insertCell(5);
//     cell6.innerHTML = calculateTotalPrice(data);
//     var cell7 = newRow.insertCell(6);
//     cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
// }






// //edit the data
// function onEdit(td){
//     selectedRow = td.parentElement;
//     document.getElementById('calendar').value = selectedRow.cells[0].innerHTML;
//     document.getElementById('asl').value = selectedRow.cells[1].innerHTML;
//     document.getElementById('csl').value = selectedRow.cells[2].innerHTML;
//     document.getElementById('af').value = selectedRow.cells[3].innerHTML;
//     document.getElementById('cf').value = selectedRow.cells[4].innerHTML;
// }

// function updateRecord(formData){
// selectedRow.cells[0].innerHTML = formData.calendar;
// selectedRow.cells[1].innerHTML = formData.asl;
// selectedRow.cells[2].innerHTML = formData.csl;
// selectedRow.cells[3].innerHTML = formData.af;
// selectedRow.cells[4].innerHTML = formData.cf;
// selectedRow.cells[5].innerHTML = calculateTotalPrice(formData);
// }

// //delete the data
// function onDelete(td){
//     if(confirm('Are you sure to delete this record?')){
//         row = td.parentElement.parentElement;
//         document.getElementById('storeList').deleteRow(row.rowIndex);
//     }
//     resetForm();
// }

// //reset the data
// function resetForm(){
//     document.getElementById('calendar').value = '';
//     document.getElementById('asl').value = '';
//     document.getElementById('csl').value = '';
//     document.getElementById('af').value = '';
//     document.getElementById('cf').value = '';
// }








// function updateLocalStorage() {
//     // Get all the checkboxes with name 'timeslot'
//     const checkboxes = document.getElementsByName('timeslot');

//     // Create an array to store selected time slots
//     const selectedTimeSlots = [];

//     // Loop through all checkboxes to find selected ones
//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) {
//             selectedTimeSlots.push(checkbox.value);
//         }
//     });

//     // Store the selected time slots in local storage
//     localStorage.setItem('selectedtimeslot', JSON.stringify(selectedTimeSlots));
// }


// //function to handle the table contents
// var selectedRow = null;

// function onFormSubmit(){
//     event.preventDefault();
//     var formData = readFormData();
//     if(selectedRow == null){
//         insertNewRecord(formData);
//     }
//     else{
//         updateRecord(formData);
// }
// updateLocalStorageTableData();
// resetForm();
// document.addEventListener('DOMContentLoaded', function() {
//     const selectedTimeSlots = JSON.parse(localStorage.getItem('selectedtimeslot'));
//     if (selectedTimeSlots && selectedTimeSlots.length > 0) {
//         const checkboxes = document.getElementsByName('timeslot');
//         checkboxes.forEach(checkbox => {
//             if (selectedTimeSlots.includes(checkbox.value)) {
//                 checkbox.checked = true;
//             }
//         });
//     }
// });
// }

// document.addEventListener('DOMContentLoaded', onFormSubmit);


// // Function to update the selected timeslots in the table header

// function updateTableHeader() {
//     const selectedTimeSlots = JSON.parse(localStorage.getItem('selectedtimeslot'));
//     if (selectedTimeSlots && selectedTimeSlots.length > 0) {
//       const tableHeaderRow = document.getElementById('tableHeaderRow');
//       tableHeaderRow.innerHTML = '<th>Date</th>'; // Reset the table header row

//       // Add the selected timeslots to the table header
//       selectedTimeSlots.forEach(timeslot => {
//         tableHeaderRow.innerHTML += `<th>${timeslot}</th>`;
//       });
//     }
//   }

//   document.addEventListener('DOMContentLoaded', function() {
//     // ... Existing code ...
//     updateTableHeader();
//   });

//   //function to store table data in local storage
//     function updateLocalStorageTableData() {
//         const tableData = [];
//         const tableRows = document.querySelectorAll('#storeList tbody tr');

//         tableRows.forEach(row => {
//             const rowData = {
//                 calendar: row.cells[0].innerHTML,
//                 asl: row.cells[1].innerHTML,
//                 csl: row.cells[2].innerHTML,
//                 af: row.cells[3].innerHTML,
//                 cf: row.cells[4].innerHTML,
//                 totalPrice: row.cells[5].innerHTML,
//     };

//     tableData.push(rowData);
// });
// localStorage.setItem('tableData', JSON.stringify(tableData));
// }