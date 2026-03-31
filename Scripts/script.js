/*let baliseZoneTestJsSpan = document.querySelector("#zoneTestJs span");
console.log(baliseZoneTestJsSpan);*/

let listeJeuxAimes = document.querySelectorAll(".salutCava input");
console.log(listeJeuxAimes);

for(let i = 0; i < listeJeuxAimes.length; i++) {
    console.log(listeJeuxAimes[i]);
}

/*let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image modifiée");
baliseImage.src = "images/brouillons/1.jpg";*/

/*let nouvelElement = document.createElement("div");
nouvelElement.classList.add("container");
let parentElement = document.querrySelector("div");
parentElement.appendChild(nouvelElement);*/


// Fetch of character images from JSON file and populate the container with image links
const reponse1 = await fetch("Scripts/Characters.json");
const images = await reponse1.json();

const container = document.getElementById("container");  

if (container) {
  images.forEach((img, index) => {
    const div = document.createElement("div");
    div.className = `box2 chara${index + 1}`;

  div.innerHTML = `
    <a href="images/${img.image}" class="container-image-link">
      <img src="images/${img.image}" alt="Character portrait ${index + 1}">
      <div class="imagePortfolio">Voir la fiche personnage</div>
    </a>
  `;

  container.appendChild(div);
});
}

// Fetch of beetle data from JSON file and populate the table
const reponse2 = await fetch("Scripts/Beetles.json");
const beetles = await reponse2.json();

const tableBody = document.getElementById("beetles-table-body");

if (tableBody) {
  beetles.forEach(beetle => {

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>
      <a href="${beetle.image}" class="container-image-link">
        <img src="${beetle.image}" alt="${beetle.alt}" width="120">
        <div class="imagePortfolio">Voir le coléoptère</div>
      </a>
    </td>
    <td><strong>${beetle.name}</strong></td>
    <td><strong><em>${beetle.scientificName}</em></strong></td>
    <td><strong>${beetle.size}</strong></td>
    `;

    
    tableBody.appendChild(row); 
});
}