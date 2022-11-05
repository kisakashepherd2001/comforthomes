//alert();

var selectedRow = null;

//shows alerts

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}


//clear all fields

function clearFields() {
    document.querySelector("#fullName").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#date").value = "";

}

//add data
document.querySelector("#booking-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //get form values
    const fullName = document.querySelector("#fullName").value;
    const phone = document.querySelector("#phone").value;
    const date = document.querySelector("#date").value;

    if (fullName == "" || phone == "" || date == "") {
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#booking-list");
            const row = document.createElement("tr");

            row.innerHTML = `
          <td>${fullName}</td>
          <td>${phone}</td>
          <td>${date}</td>
          <td>
          <a href="#" class="btn btn-warning btn-sm edit">Ammend</a>
          <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        `;
        list.appendChild(row);
        selectedRow = null;
        showAlert("Details Added", "success");
        }
        else{
            selectedRow.children[0].textContent = fullName;
            selectedRow.children[1].textContent = phone;
            selectedRow.children[2].textContent = date;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }
         clearFields();


    }


});

//validate calender


//ammend data

document.querySelector("#booking-list").addEventListener("click", (e) =>{
  target = e.target;
  if (target.classList.contains("ammend")) {
    document.querySelector("#fullName").value = selectedRow.children[0].textContent;
    document.querySelector("#phone").value = selectedRow.children[1].textContent;
    document.querySelector("#date").value = selectedRow.children[2].textContent;

  }
});




//Delete data

document.querySelector("#booking-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Booking info deleted", "danger")
    }
});