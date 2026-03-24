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

if (container) {
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
}


const beetles = [
  {
    name: "Bousier commun",
    scientificName: "Scarabaeus laticolis",
    size: "entre 16 et 22 mm",
    image: "images/CDP/CDP_01.jpg",
    alt: "Bousier commun"
  },

  {
    name: "Lucane cerf-volant",
    scientificName: "Lucanus cervus",
    size: "8 cm",
    image: "images/CDP/lucane_cerf_volant.jpg",
    alt: "Lucanus cervus"
  },

   {
    name: "Cardinal rouge",
    scientificName: "Pyrochroa serraticornis",
    size: "entre 10 et 15 mm",
    image: "images/CDP/cardinal_rouge.jpg",
    alt: "Pyrochroa serraticornis"
  },

   {
    name: "Méloé enfle-boeuf",
    scientificName: "Meloe proscarabaeus",
    size: "3 cm",
    image: "images/CDP/Méloé_Enfle_Boeuf.jpg",
    alt: "Meloe proscarabaeus"
  },

   {
    name: "Petite vrillette",
    scientificName: "Anobium punctatum",
    size: "5 mm",
    image: "images/CDP/petite_vrillette.jpg",
    alt: "Anobium punctatum"
  },

   {
    name: "Taupin acajou",
    scientificName: "Athous haemorrhoidalis",
    size: " entre 9,5  15 mm",
    image: "images/CDP/taupin_acajou.jpg",
    alt: "Athous haemorrhoidalis"
  },

   {
    name: "Hanneton commun",
    scientificName: "Melolontha melolontha",
    size: "entre 2,5 et 3 cm",
    image: "images/CDP/hanneton.jpg",
    alt: "Melolontha melolontha"
  },

   {
    name: "Cigarier",
    scientificName: "Byctiscus betulae",
    size: "entre 5 et 8 mm",
    image: "images/CDP/cigarier.jpg",
    alt: "Byctiscus betulae"
  },

   {
    name: "Lucane cerf-volant",
    scientificName: "Lucanus cervus",
    size: "8 cm",
    image: "images/CDP/lucane_cerf_volant.jpg",
    alt: "Lucanus cervus"
  },

   {
    name: "Lucane cerf-volant",
    scientificName: "Lucanus cervus",
    size: "8 cm",
    image: "images/CDP/lucane_cerf_volant.jpg",
    alt: "Lucanus cervus"
  }

];

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
    <td>${beetle.name}</td>
    <td><em>${beetle.scientificName}</em></td>
    <td>${beetle.size}</td>
    `;

    
    tableBody.appendChild(row); 
});
}