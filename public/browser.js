console.log("frontend is working");

function itemTemplate(item) {
  return `

  <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja} </span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Edit
            </button>
            <button
            data-id="${item._id}"
              class="edit-me btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>
  `;
}

let createField = document.getElementById("create-field");
console.log("A1: send data from front to backend");
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      console.log("A5: recieving  data from backend to frontend");

      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => console.log("Could get data"), err);
});

document.addEventListener("click", function (e) {
  // delete
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you Sure to delete")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Could delete smth missed", err);
        });
    }
  }

  // edit
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Edit your Task",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Cannot edit item", err);
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      alert(response.data.state);
      document.location.reload();
    })
    .catch((err) => {
      console.log("try agian to delete", err);
    });
});
