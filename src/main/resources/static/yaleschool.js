// Finner overskrift og pil-elementet
var header = document.querySelector('.toggle-header');
var arrow = document.querySelector('.toggle-arrow');

// Legg til en klikk-listener på overskriften
header.addEventListener('click', function() {
    // Finn innholdet som skal vises/skjules
    var content = header.nextElementSibling;

    // Toggle visning av innholdet
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.classList.add('rotate');
    } else {
        content.style.display = 'none';
        arrow.classList.remove('rotate');
    }
});



