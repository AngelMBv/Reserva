const form = document.getElementById("reservation-form");
const movieSelect = document.getElementById("movie-select");
const movieImage = document.getElementById("movie-image");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ticketsInput = document.getElementById("tickets");
const reservationsTable = document.querySelector("#reservations table tbody");

movieSelect.addEventListener("change", () => {
    const selectedMovie = movieSelect.value;
    movieImage.style.display = "block"; 
    movieImage.src = `img/${selectedMovie}.png`;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const movie = movieSelect.value || "Tapa"; 
    const name = nameInput.value;
    const email = emailInput.value;
    const tickets = ticketsInput.value;

    if (!name || !email || !tickets) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const row = reservationsTable.insertRow();
    row.innerHTML = `
        <td>${movie}</td>
        <td class="movie-image-cell"><img src="img/${movie}.png" alt="Imagen de la película"></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${tickets}</td>
        <td class="action-buttons">
            <button class="edit-button">Editar</button>
            <button class="delete-button">Borrar</button>
        </td>
    `;

    // Limpiar los campos del formulario
    nameInput.value = "";
    emailInput.value = "";
    ticketsInput.value = "";
    movieImage.style.display = "none";
    movieSelect.value = ""; 
    

    const editButton = row.querySelector(".edit-button");
    const deleteButton = row.querySelector(".delete-button");

    editButton.addEventListener("click", () => {

        movieSelect.value = movie;
        nameInput.value = row.cells[2].textContent;
        emailInput.value = row.cells[3].textContent;
        ticketsInput.value = row.cells[4].textContent;
        movieImage.style.display = "block"; 
   
        row.remove();
    });

    deleteButton.addEventListener("click", () => {
        row.remove();
    });
})