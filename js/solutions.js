const solutions = [
    { title: "Solución 1", category: "Salud", description: "Descripción de la solución 1", image: "images/solution1.jpg" },
    { title: "Solución 2", category: "Energía", description: "Descripción de la solución 2", image: "images/solution2.jpg" },
    { title: "Solución 3", category: "Finanzas", description: "Descripción de la solución 3", image: "images/solution3.jpg" },
    { title: "Solución 4", category: "Gobierno", description: "Descripción de la solución 4", image: "images/solution4.jpg" },
    { title: "Solución 5", category: "Educación", description: "Descripción de la solución 5", image: "images/solution5.jpg" },
    { title: "Solución 6", category: "Tecnología", description: "Descripción de la solución 6", image: "images/solution6.jpg" },
    { title: "Solución 7", category: "Transporte", description: "Descripción de la solución 7", image: "images/solution7.jpg" },
    { title: "Solución 8", category: "Construcción", description: "Descripción de la solución 8", image: "images/solution8.jpg" },
    { title: "Solución 9", category: "Retail", description: "Descripción de la solución 9", image: "images/solution9.jpg" },
    { title: "Solución 10", category: "Manufactura", description: "Descripción de la solución 10", image: "images/solution10.jpg" },
    { title: "Solución 11", category: "Salud", description: "Descripción de la solución 11", image: "images/solution11.jpg" },
    { title: "Solución 12", category: "Energía", description: "Descripción de la solución 12", image: "images/solution12.jpg" },
    { title: "Solución 13", category: "Finanzas", description: "Descripción de la solución 13", image: "images/solution13.jpg" },
    { title: "Solución 14", category: "Gobierno", description: "Descripción de la solución 14", image: "images/solution14.jpg" },
    { title: "Solución 15", category: "Educación", description: "Descripción de la solución 15", image: "images/solution15.jpg" },
    { title: "Solución 16", category: "Tecnología", description: "Descripción de la solución 16", image: "images/solution16.jpg" },
    { title: "Solución 17", category: "Transporte", description: "Descripción de la solución 17", image: "images/solution17.jpg" },
    { title: "Solución 18", category: "Construcción", description: "Descripción de la solución 18", image: "images/solution18.jpg" },
    { title: "Solución 19", category: "Retail", description: "Descripción de la solución 19", image: "images/solution19.jpg" },
    { title: "Solución 20", category: "Manufactura", description: "Descripción de la solución 20", image: "images/solution20.jpg" },
    { title: "Solución 21", category: "Salud", description: "Descripción de la solución 21", image: "images/solution21.jpg" },
    { title: "Solución 22", category: "Energía", description: "Descripción de la solución 22", image: "images/solution22.jpg" },
    { title: "Solución 23", category: "Finanzas", description: "Descripción de la solución 23", image: "images/solution23.jpg" },
    { title: "Solución 24", category: "Gobierno", description: "Descripción de la solución 24", image: "images/solution24.jpg" },
    { title: "Solución 25", category: "Educación", description: "Descripción de la solución 25", image: "images/solution25.jpg" },
];

const itemsPerPage = 6;
let currentPage = 1;
let filteredSolutions = solutions;

function displaySolutions(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const solutionsToDisplay = filteredSolutions.slice(startIndex, endIndex);

    $("#solutions").empty();
    solutionsToDisplay.forEach(solution => {
        $("#solutions").append(`
            <div class="col-md-4 solution-card">
                <div class="card">
                    <img src="${solution.image}" class="card-img-top" alt="${solution.title}">
                    <div class="card-body">
                        <h5 class="card-title">${solution.title}</h5>
                        <p class="card-text">${solution.description}</p>
                        <a href="#" class="btn btn-primary">Leer más</a>
                    </div>
                </div>
            </div>
        `);
    });
}

function setupPagination() {
    const totalPages = Math.ceil(filteredSolutions.length / itemsPerPage);

    $(".pagination").empty();
    for (let i = 1; i <= totalPages; i++) {
        $(".pagination").append(`
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#">${i}</a>
            </li>
        `);
    }

    $(".pagination .page-link").click(function(e) {
        e.preventDefault();
        currentPage = parseInt($(this).text());
        displaySolutions(currentPage);
        setupPagination();
    });
}

$("#search-input").on("input", function() {
    const query = $(this).val().toLowerCase();
    filteredSolutions = solutions.filter(solution => 
        solution.title.toLowerCase().includes(query) ||
        solution.description.toLowerCase().includes(query) ||
        solution.category.toLowerCase().includes(query)
    );
    currentPage = 1;
    displaySolutions(currentPage);
    setupPagination();
});

$(document).ready(function() {
    displaySolutions(currentPage);
    setupPagination();
});