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


const container = document.getElementById("container");  

const images = [
    "CS_Oeuvre1.jpg",
    "CS_Oeuvre2.jpg",
    "CS_Oeuvre_4.jpg",
    "CS_Oeuvre_5.jpg",
    "CS_Oeuvre_6.jpg",
    "CS_Oeuvre_7.jpg",
    "CS_Oeuvre8.jpg",
    "CS_Oeuvre9.jpg",
    "CS_Oeuvre10.jpg",
    "CS_Oeuvre11.jpg",
    "CS_Oeuvre12.jpg",
    "CS_Oeuvre13.jpg",
    "CS_Oeuvre14.jpg",
    "CS_Oeuvre15.jpg",
    "Monstre_02_esquisse.jpg",
    "CS_Oeuvre16.jpg",
    "CS_Oeuvre17.jpg",
    "CS_Oeuvre18.jpg",
    "CS_Oeuvre19.jpg",
    "CS_Oeuvre22.jpg",
    "CS_Oeuvre21.jpg",
    "CS_Oeuvre20.jpg",
    "CS_Oeuvre23.jpg",
    "CS_Oeuvre24.jpg",
    "CS_Oeuvre25.jpg",
    "CS_Oeuvre26.jpg",
    "CS_Oeuvre27.jpg",
    "CS_Oeuvre28.jpg",
    "CS_Oeuvre29.jpg",
    "CS_Oeuvre30.jpg",
    "CS_Oeuvre31.jpg",
    "CS_Oeuvre32.jpg",
    "CS_Oeuvre33.jpg"
];

images.forEach((img, index) => {
    const div = document.createElement("div");
    div.className = `box2 chara${index + 1}`;

  div.innerHTML = `
    <a href="images/${img}" class="container-image-link">
      <img src="images/${img}" alt="Character portrait ${index + 1}">
      <div class="imagePortfolio">Voir la fiche personnage</div>
    </a>
  `;

  container.appendChild(div);
});