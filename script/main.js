document.getElementById('sleutels__count__container').style.visibility = "hidden";

const currentDate = new Date()

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Maanden zijn zero-based, dus voeg 1 toe
const day = currentDate.getDate().toString().padStart(2, '0');

document.getElementById('datum').value = `${year}-${month}-${day}`;

let sleutels = document.getElementById('sleutels');

sleutels.addEventListener('change', function() {
    if(sleutels.checked) {
        document.getElementById('sleutels__count__container').style.visibility = "visible";
    } else {
        document.getElementById('sleutels__count__container').style.visibility = "hidden";
    }
})

let sleutelsAantal = 2
updateSleutelsAantal()

document.getElementById('sleutels__minus').addEventListener('click', function() {
    if(sleutelsAantal != 1) {
        sleutelsAantal --
    }
    updateSleutelsAantal()
});

document.getElementById('sleutels__plus').addEventListener('click', function() {
    sleutelsAantal ++
    updateSleutelsAantal()
});

function updateSleutelsAantal() {
    document.getElementById('sleutels__count').innerText = sleutelsAantal;
}