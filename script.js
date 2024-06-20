function showPDF() {
    var pdfWindow = window.open("", "_blank");
    pdfWindow.location.href = "Viaggio.pdf"; // Sostituisci con il percorso del tuo file PDF
}

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("backgroundMusic");
    var musicMessage = document.getElementById("musicMessage");

    // Mostra il messaggio per far partire la musica
    musicMessage.classList.remove('hidden');

    // Aggiungi un event listener per avviare la musica al primo clic
    document.addEventListener("click", function() {
        audio.play().then(function() {
            // Nascondi il messaggio una volta che la musica è partita
            musicMessage.classList.add('hidden');
        }).catch(function(error) {
            console.log("Autoplay prevented. Please click somewhere to start the music.");
        });
    }, { once: true });
});
