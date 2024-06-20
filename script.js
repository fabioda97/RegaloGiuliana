function showSurprise() {
    var giftImage = document.getElementById('giftImage');
    giftImage.src = 'open-gift-box.png'; // Immagine del pacco aperto
    var surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
}
