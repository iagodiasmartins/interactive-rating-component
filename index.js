function insert(rating) {
    localStorage.valor=rating;
}

function sendRating() {
    document.getElementById('rating').innerHTML = localStorage.valor;
}