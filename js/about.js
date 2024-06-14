const solutions = [
    { title: "Blog 1", category: "Salud", description: "Descripción del blog 1", image: "images/solution1.jpg" },
    { title: "Blog 2", category: "Energía", description: "Descripción del blog 2", image: "images/solution2.jpg" },
    { title: "Blog 3", category: "Finanzas", description: "Descripción del blog 3", image: "images/solution3.jpg" },
    { title: "Blog 4", category: "Gobierno", description: "Descripción del blog 4", image: "images/solution4.jpg" },
    { title: "Blog 5", category: "Educación", description: "Descripción del blog 5", image: "images/solution5.jpg" },
    { title: "Blog 6", category: "Tecnología", description: "Descripción del blog 6", image: "images/solution6.jpg" },
    { title: "Blog 7", category: "Transporte", description: "Descripción del blog 7", image: "images/solution7.jpg" },
    { title: "Blog 8", category: "Construcción", description: "Descripción del blog 8", image: "images/solution8.jpg" },
    { title: "Blog 9", category: "Retail", description: "Descripción del blog 9", image: "images/solution9.jpg" },
    { title: "Blog 10", category: "Manufactura", description: "Descripción del blog 10", image: "images/solution10.jpg" },
    { title: "Blog 11", category: "Salud", description: "Descripción del blog 11", image: "images/solution11.jpg" },
    { title: "Blog 12", category: "Energía", description: "Descripción del blog 12", image: "images/solution12.jpg" },
    { title: "Blog 13", category: "Finanzas", description: "Descripción del blog 13", image: "images/solution13.jpg" },
    { title: "Blog 14", category: "Gobierno", description: "Descripción del blog 14", image: "images/solution14.jpg" },
    { title: "Blog 15", category: "Educación", description: "Descripción del blog 15", image: "images/solution15.jpg" },
    { title: "Blog 16", category: "Tecnología", description: "Descripción del blog 16", image: "images/solution16.jpg" },
    { title: "Blog 17", category: "Transporte", description: "Descripción del blog 17", image: "images/solution17.jpg" },
    { title: "Blog 18", category: "Construcción", description: "Descripción del blog 18", image: "images/solution18.jpg" },
    { title: "Blog 19", category: "Retail", description: "Descripción del blog 19", image: "images/solution19.jpg" },
    { title: "Blog 20", category: "Manufactura", description: "Descripción del blog 20", image: "images/solution20.jpg" },
    { title: "Blog 21", category: "Salud", description: "Descripción del blog 21", image: "images/solution21.jpg" },
    { title: "Blog 22", category: "Energía", description: "Descripción del blog 22", image: "images/solution22.jpg" },
    { title: "Blog 23", category: "Finanzas", description: "Descripción del blog 23", image: "images/solution23.jpg" },
    { title: "Blog 24", category: "Gobierno", description: "Descripción del blog 24", image: "images/solution24.jpg" },
    { title: "Blog 25", category: "Educación", description: "Descripción del blog 25", image: "images/solution25.jpg" },
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
                        <a href="blog.html" class="btn btn-primary">Leer más</a>
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