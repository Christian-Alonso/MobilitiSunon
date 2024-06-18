const solutions = [
    { title: "Digital Workstation are Reashaping", category: "Tecnologia", description: "Amid the catalyzing effects of the pandemic and the continuous rise in commercial rents, more and more companies are beginning to rethink the Key Performance Indicators (KPIs) of office space.", image: "images/Blog/inici.jpg", url: "blog1.html" },
    { title: "Inspiración 2", category: "Energía", description: "Descripción de la inspiración 2", image: "images/solution2.jpg", url: "blog.html" },
    { title: "Inspiración 3", category: "Finanzas", description: "Descripción de la inspiración 3", image: "images/solution3.jpg", url: "blog.html" },
    { title: "Inspiración 4", category: "Gobierno", description: "Descripción de la inspiración 4", image: "images/solution4.jpg", url: "blog.html" },
    { title: "Inspiración 5", category: "Educación", description: "Descripción de la inspiración 5", image: "images/solution5.jpg", url: "blog.html" },
    { title: "Inspiración 6", category: "Tecnología", description: "Descripción de la inspiración 6", image: "images/solution6.jpg", url: "blog.html" },
    { title: "Inspiración 7", category: "Transporte", description: "Descripción de la inspiración 7", image: "images/solution7.jpg", url: "blog.html" },
    { title: "Inspiración 8", category: "Construcción", description: "Descripción de la inspiración 8", image: "images/solution8.jpg", url: "blog.html" },
    { title: "Inspiración 9", category: "Retail", description: "Descripción de la inspiración 9", image: "images/solution9.jpg", url: "blog.html" },
    { title: "Inspiración 10", category: "Manufactura", description: "Descripción de la inspiración 10", image: "images/solution10.jpg", url: "blog.html" },
    { title: "Inspiración 11", category: "Salud", description: "Descripción de la inspiración 11", image: "images/solution11.jpg", url: "blog.html" },
    { title: "Inspiración 12", category: "Energía", description: "Descripción de la inspiración 12", image: "images/solution12.jpg", url: "blog.html" },
    { title: "Inspiración 13", category: "Finanzas", description: "Descripción de la inspiración 13", image: "images/solution13.jpg", url: "blog.html" },
    { title: "Inspiración 14", category: "Gobierno", description: "Descripción de la inspiración 14", image: "images/solution14.jpg", url: "blog.html" },
    { title: "Inspiración 15", category: "Educación", description: "Descripción de la inspiración 15", image: "images/solution15.jpg", url: "blog.html" },
    { title: "Inspiración 16", category: "Tecnología", description: "Descripción de la inspiración 16", image: "images/solution16.jpg", url: "blog.html" },
    { title: "Inspiración 17", category: "Transporte", description: "Descripción de la inspiración 17", image: "images/solution17.jpg", url: "blog.html" },
    { title: "Inspiración 18", category: "Construcción", description: "Descripción de la inspiración 18", image: "images/solution18.jpg", url: "blog.html" },
    { title: "Inspiración 19", category: "Retail", description: "Descripción de la inspiración 19", image: "images/solution19.jpg", url: "blog.html" },
    { title: "Inspiración 20", category: "Manufactura", description: "Descripción de la inspiración 20", image: "images/solution20.jpg", url: "blog.html" },
    { title: "Inspiración 21", category: "Salud", description: "Descripción de la inspiración 21", image: "images/solution21.jpg", url: "blog.html" },
    { title: "Inspiración 22", category: "Energía", description: "Descripción de la inspiración 22", image: "images/solution22.jpg", url: "blog.html" },
    { title: "Inspiración 23", category: "Finanzas", description: "Descripción de la inspiración 23", image: "images/solution23.jpg", url: "blog.html" },
    { title: "Inspiración 24", category: "Gobierno", description: "Descripción de la inspiración 24", image: "images/solution24.jpg", url: "blog.html" },
    { title: "Inspiración 25", category: "Educación", description: "Descripción de la inspiración 25", image: "images/solution25.jpg", url: "blog.html" }
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
                        <a href="${solution.url}" class="btn btn-primary">Leer más</a>
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