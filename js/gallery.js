$(document).ready(function(){
            const images = [
                'images/solution25.jpg',
                'images/solution1.jpg',
                'images/solution10.jpg',
                'images/solution20.jpg',
                'images/solution5.jpg',
                'images/solution15.jpg',
                'images/solution23.jpg',
                'images/solution3.jpg',
                'images/solution13.jpg',
                'images/solution18.jpg',
                'images/solution25.jpg',
                'images/solution1.jpg',
                'images/solution10.jpg',
                'images/solution20.jpg',
                'images/solution5.jpg',
            ];

            const pattern = [
                'rectangle', 'square', 'square', 'square', 'square',
                'square', 'square', 'square', 'square', 'rectangle',
                'square', 'square', 'rectangle', 'square', 'square'
            ];

            // Cargar imágenes dinámicamente
            images.forEach(function(src, index) {
                const sizeClass = pattern[index % pattern.length];
                $('#gallery').append(`
                    <div class="gallery-item ${sizeClass}" data-toggle="modal" data-target="#imageModal">
                        <img src="${src}" alt="Imagen">
                    </div>
                `);
            });

            // Mostrar imagen en el modal
            $('.gallery').on('click', '.gallery-item', function(){
                var imgSrc = $(this).find('img').attr('src');
                $('#modalImage').attr('src', imgSrc);
            });
        });