const currentDate = new Date()

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Maanden zijn zero-based, dus voeg 1 toe
const day = currentDate.getDate().toString().padStart(2, '0');

document.getElementById('datum').value = `${year}-${month}-${day}`;