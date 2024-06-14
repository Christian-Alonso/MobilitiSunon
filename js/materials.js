const materials = [
    { name: "TM-CI", category: "Telas", image: "images/solution1.jpg" },
    { name: "P-BL", category: "Malla", image: "images/solution2.jpg" },
    { name: "CW-ZZ", category: "Cuero", image: "images/solution3.jpg" },
    { name: "P-BY", category: "Chapado", image: "images/solution4.jpg" },
    { name: "P-XM", category: "Laminado", image: "images/solution5.jpg" },
    { name: "CW-ZJ", category: "Fieltro", image: "images/solution6.jpg" },
    { name: "CW-YY", category: "Recubrimiento", image: "images/solution7.jpg" },
    { name: "CW-PC", category: "Telas", image: "images/solution8.jpg" },
    { name: "P-TM", category: "Malla", image: "images/solution9.jpg" },
    { name: "CM-PC", category: "Cuero", image: "images/solution10.jpg" },
    { name: "S-B", category: "Chapado", image: "images/solution11.jpg" },
    { name: "S-SD", category: "Laminado", image: "images/solution12.jpg" },
    { name: "TM-CI2", category: "Telas", image: "images/solution13.jpg" },
    { name: "P-BL2", category: "Malla", image: "images/solution14.jpg" },
    { name: "CW-ZZ2", category: "Cuero", image: "images/solution15.jpg" },
    { name: "P-BY2", category: "Chapado", image: "images/solution16.jpg" },
    { name: "P-XM2", category: "Laminado", image: "images/solution17.jpg" },
    { name: "CW-ZJ2", category: "Fieltro", image: "images/solution18.jpg" },
    { name: "CW-YY2", category: "Recubrimiento", image: "images/solution19.jpg" },
    { name: "CW-PC2", category: "Telas", image: "images/solution20.jpg" },
    { name: "P-TM2", category: "Malla", image: "images/solution21.jpg" },
    { name: "CM-PC2", category: "Cuero", image: "images/solution22.jpg" },
    { name: "S-B2", category: "Chapado", image: "images/solution23.jpg" },
    { name: "S-SD2", category: "Laminado", image: "images/solution24.jpg" },
    { name: "TM-CI3", category: "Telas", image: "images/solution25.jpg" },
    // Agrega más materiales aquí
];

const itemsPerPage = 12;
let currentPage = 1;
let filteredMaterials = materials;

function displayMaterials(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const materialsToDisplay = filteredMaterials.slice(startIndex, endIndex);

    $("#materials").empty();
    materialsToDisplay.forEach(material => {
        $("#materials").append(`
            <div class="col-md-3 material-card">
                <div class="card">
                    <img src="${material.image}" class="card-img-top" alt="${material.name}">
                    <div class="card-body">
                        <h5 class="card-title">${material.name}</h5>
                        <p class="card-text">${material.category}</p>
                    </div>
                </div>
            </div>
        `);
    });
}

function setupPagination() {
    const totalPages = Math.ceil(filteredMaterials.length / itemsPerPage);

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
        displayMaterials(currentPage);
        setupPagination();
    });
}

function applyFilters() {
    const query = $("#search-input").val().toLowerCase();
    const selectedFilters = [];
    $("input[type=checkbox]:checked").each(function() {
        selectedFilters.push($(this).val());
    });

    filteredMaterials = materials.filter(material => {
        const matchesSearch = material.name.toLowerCase().includes(query);
        const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(material.category);
        return matchesSearch && matchesFilter;
    });

    currentPage = 1;
    displayMaterials(currentPage);
    setupPagination();
}

$("#search-input").on("input", applyFilters);
$("input[type=checkbox]").on("change", applyFilters);

$(document).ready(function() {
    displayMaterials(currentPage);
    setupPagination();
});