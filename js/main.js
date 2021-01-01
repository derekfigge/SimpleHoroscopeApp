document.querySelector("#censusOffice").addEventListener('click', enterOffice);

function enterOffice() {
    let proceed = document.getElementsByClassName("proceed");
    for (i = 0; i < proceed.length; i++) {
        proceed[i].classList.toggle("hidden");
    }
}