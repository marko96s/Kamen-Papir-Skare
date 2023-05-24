//Vjezba 2

/* const korisnikovUnos= prompt("unesi tekst:");

function brojSamoglasnika(tekst)
{
    let brojac=0;
    
    console.log("slovo");
    for(let index =0;index<tekst.length;index++)
    {
        const slovo= tekst[index].toLoweCase();
        
        if(slovo=="a"|| slovo"e"|| slovo=="i"||slovo=="o"|| slovo=="u" )
        {
            brojac++;
        }
    
    }
    console.log("Broj samoglasnika u tekstu"+ tekst);
    console.log(brojac);
}

brojSamoglasnika(korisnikovUnos); */

//Vjezba 3
 /* const korisnikovUnos = Number(prompt("Unesi broj:"));


function faktorijel(broj) {
let rezultat=1;

    for (mnozitelj = 1; mnozitelj <= broj; mnozitelj++) {
        rezultat = rezultat*mnozitelj;

    }
    console.log("Faktorijel od broja"+broj);
    console.log(rezultat);
}
faktorijel(korisnikovUnos);  */

/* class NetflixUser {
    constructor(korisnicko_ime,datum_reg,premium_pretplata)
    {
        this.korisnicko_ime=korisnicko_ime;
        this.datum_reg=datum_reg;
        this.premium_pretplata=premium_pretplata;
    }
}
let korisnik1=new NetflixUser("marko",16.04,"DA");
let korisnik2=new NetflixUser("stipe",23.05,"NE");
let korisnik3=new NetflixUser("Ana",11.11,"DA");
let korisnik4= new NetflixUser("Hans96",23.8,"DA");
let korisnik5=new NetflixUser("sopta96",10.4,"DA");
let korisnik6=new NetflixUser("saft44",12.12,"NE");

console.log(korisnik1);
console.log(korisnik2);
console.log(korisnik3);
console.log(korisnik4);
console.log(korisnik5);
console.log(korisnik6);

let nizKorisnika=[korisnik1,korisnik2,korisnik3,korisnik4,korisnik5,korisnik6];

const premiumLista = document.querySelector("#premium");
const freemiumLista =document.querySelector("#freemium");

for(var i=0;i<nizKorisnika.length;i++){
    let listItem = document.createElement("li");
    var element=nizKorisnika[i];
    listItem.textContent = element.korisnicko_ime;

    if(element.premium_pretplata=="DA")
    {
        premiumLista.appendChild(listItem);
        console.log("Premium korisnik");
        console.log(element.korisnicko_ime);
    }
    else{
        
        freemiumLista.appendChild(listItem);
        console.log("Freemium korsnik");
        console.log(element.korisnicko_ime);

    }
}    */ 

/* const nizFilmova= [

    {
        naslov: "Titanic",
        oznake: [
            {
                ime:"Romantika",
                slug:"rom",
            },
            {
                ime:"Avantura",
                slug:"avan",
            },
        ],
    },
    {
        naslov:"Brzi i zestoki",
        oznake: [
            {
                ime:"Akcija",
                slug:"akc",
            },
            {
                ime:"Akcijska komedija",
                slug:"akc-kom"
            },
        ],
    },
    {
        naslov:"Jumanji",
        oznake: [
            {
                ime:"avantura",
                slug: "avan",
            },
            {
                ime:"znanstvena fantstika",
                slug:"sci-fi",
            },
        ],
    },
];

for(let i=0;i<nizFilmova.length;i++){
    const film = nizFilmova[i];

    const kontejner = document.createElement("div");
    const naslovFilma=document.createElement("h2");
    naslovFilma.textContent= film.naslov;
    kontejner.appendChild(naslovFilma);

    let nizOznaka = film.oznake
    for(let y=0;y<nizOznaka.length;y++)
    {
        const oznakaFilma= document.createElement("h4");
        oznakaFilma.textContent = nizOznaka[y].slug;
        kontejner.appendChild(oznakaFilma);
    }

    document.body.appendChild(kontejner);
} */

/* function provjeri(){
    const randomBroj=Math.floor(Math.random()*5+1);
    const vrijednost=Number(event.target.textContent);

    console.log("randomBroj");
    console.log(randomBroj);
    console.log("vrijednost");
    console.log(vrijednost);

    if(randomBroj==vrijednost){
        rezultatParagrafa.textContent="Bravo pogodili ste broj ";
    }else{
    rezultatParagrafa.textContent="Netocno,pokusajte opet";
    }
}
const rezultatParagrafa = document.querySelector("p");
const nasiButtoni = document.querySelectorAll("button");
nasiButtoni.forEach((button) =>{
    button.addEventListener("click",provjeri)
});
     */

/* function biraj(event){
    const vrijednost=event.target.textContent;
    nizBrojeva.push(vrijednost);
}
function pozovi(){
    const odabraniBroj=nizBrojeva.join("");
    alert('Pozivate broj ${odabraniBroj}');

    nizBrojeva=[];
}


let nizBrojeva=[];
const nasiBrojevi=document.querySelectorAll(".brojevi");
nasiBrojevi.forEach((button) =>{
    button.addEventListener("click",biraj);
}); */

/* function handleSearch(event)
{
    const korisnikoInput=event.target.value;

    for(let index=0;index<stavkeListe.length;index++)
    {
        const stavka= stavkeListe[index]
        const vrijednostiStavke=stavkeListe[index].textContent;
        if(vrijednostiStavke.includes(korisnikoInput)){
            vrijednostiStavke
        }
    }
}

const stavkeListe= document.querySelectorAll("li");
const unosTrazilice = document.querySelector("input");
unosTrazilice.addEventListener("input",handleSearch);

console.log(); */



/* var vozila = [
    {
      marka: "Audi",
      boja: "Crvena",
      max_brzina: 250,
    },
    {
      marka: "BMW",
      boja: "Plava",
      max_brzina: 280,
    },
    {
      marka: "Mercedes",
      boja: "Siva",
      max_brzina: 240,
    }
  ];

  function sortirajPoMarki() {
    vozila.sort(function(a, b) {
      var markaA = a.marka.toUpperCase();
      var markaB = b.marka.toUpperCase();
      if (markaA < markaB) {
        return -1;
      }
      if (markaA > markaB) {
        return 1;
      }
      return 0;
    });
    prikaziRezultat();
  }
  
  function sortirajPoBoji() {
    vozila.sort(function(a, b) {
      var bojaA = a.boja.toUpperCase();
      var bojaB = b.boja.toUpperCase();
      if (bojaA < bojaB) {
        return -1;
      }
      if (bojaA > bojaB) {
        return 1;
      }
      return 0;
    });
    prikaziRezultat();
  }



  function prikaziRezultat() {
    var rezultatDiv = document.getElementById("rezultat");
    rezultatDiv.innerHTML = "";
    for (var i = 0; i < vozila.length; i++) {
      var vozilo = vozila[i];
      rezultatDiv.innerHTML += "<p>Marka: " + vozilo.marka + ", Boja: " + vozilo.boja + ", Max. brzina: " + vozilo.max_brzina + "</p>";
    }
  } */

//-------Predavanje 13______
//-------Vjezba 1----------
  /* const nasNiz = [
    {
        marka: "Audi",
        boja:"siva",
        max_brzina:230,
    },
    {
        marka: "Opel",
        boja:"plava",
        max_brzina:210,
    },
    {
        marka: "Mercedes",
        boja:"crna",
        max_brzina:260,
    },
];

function ispisiNiz(niz){
    for( let index =0;index<niz.length;index++){
        const element= niz[index];
        const paragrafVozila= document.createElement("p");
        paragrafVozila.textContent=
        element.marka + "/"+element.boja+"/"+element.max_brzina;
        document.body.appendChild(paragrafVozila);
    }
}

function sortirajMarka()
{
    let sortiraniNiz= nasNiz.sort((a,b)=>(a.marka>b.marka ? 1 : -1));
    ispisiNiz(sortiraniNiz);
}

const buttonMarka= document.getElementById("marka");
buttonMarka.addEventListener("click",sortirajMarka);

function sortirajBoja()
{
    let sortiraniNiz= nasNiz.sort((a,b)=>(a.boja>b.boja ? 1 : -1));
    ispisiNiz(sortiraniNiz);
}

const buttonBoja = document.getElementById("boja");
buttonBoja.addEventListener("click",sortirajBoja); */

/* const nasNiz = [
    {
        naziv: "Karburator",
        sifra:19962323,
        cijena:230,
    },
    {
        naziv: "Akumulator",
        sifra:1234567,
        cijena:2220,
    },
    {
        naziv: "miris",
        sifra:1234566,
        cijena:20,
    },
    {
        naziv:"tocak",
        sifra:1234423,
        cijena:250,
    }
];

function ispisiNiz(niz){
    for( let index =0;index<niz.length;index++){
        const element= niz[index];
        const paragrafArtikla= document.createElement("p");
        paragrafArtikla.textContent=
        element.naziv;
        document.body.appendChild(paragrafArtikla);
    }
}

function sortirajNaziv()
{
    let sortiraniNiz= nasNiz.sort((a,b)=>(a.naziv>b.naziv ? 1 : -1));
    ispisiNiz(sortiraniNiz);
}
const buttonNaziv = document.getElementById("naziv");
buttonNaziv.addEventListener("click",sortirajNaziv); */

/* const nasNiz = [
    {
        naziv: "Air Jordan 1",
    },
    {
        naziv: "Nike Air Force 1",
    },
    {
        naziv: "Adidas Yeezy",
    },
    {
        naziv:"Nike Dunk SB",
    },
    {
        naziv:"Nike Air Max",
    },
    {
       naziv: "Puma",
    },

];

let kosaricaNiz= [];
const lista = document.querySelector("ul");
const odabranoPar=document.getElementById("odabrano");

function nadiDodaj(event){
    const ime=event.target.textContent;
    const artikl=nasNiz.find((artikl)=>{
        if(ime==artikl.naziv){
            return artikl;
        }
    });
    kosaricaNiz.push(artikl);
    odabranoPar.textContent="Odabrano"+kosaricaNiz.length;
    console.log(kosaricaNiz);
}

function ispisiNiz(niz){
    for(let index=0;index < niz.length;index++){
        const element=niz[index];
        const stavkaListe=document.createElement("li");
        stavkaListe.textContent=element.naziv;
        lista.appendChild(stavkaListe);
    }
    const stavke= document.querySelectorAll("li");
    for( let index=0;index<stavke.length;index++){
        const element=stavke[index];
        element.addEventListener("click",nadiDodaj);
    }
}

function sortiraj(){
    let sortiraniNiz= nasNiz.sort((a,b)=>(a.naziv>b.naziv ? 1 : -1));
    ispisiNiz(sortiraniNiz);
}

sortiraj(nasNiz); */

/* const nasNiz = [
    {
        naziv: "Air Jordan 1",
        cijena: 220,
    },
    {
        naziv: "Nike Air Force 1",
        cijena: 120,
    },
    {
        naziv: "Adidas Yeezy",
        cijena: 155,
    },
    {
        naziv:"Nike Dunk SB",
        cijena:235,
    },
    {
        naziv:"Nike Air Max",
        cijena: 140,
    },
    {
       naziv: "Puma",
       cijena:110,
    },

];

function ubaciIzbaci (){
    const lista=document.createElement("ul");

    for(index=0;index<nasNiz.length;index++){
        const element=nasNiz[index];
        iznos=iznos+element.cijena;
        const item =document.createElement("li");
        item.textContent=element.naziv;
        lista.appendChild(item);
    }


        const itemTotalCijena =document.createElement("li");
        itemTotalCijena.textContent="Ukupno:"+iznos;
        lista.appendChild(itemTotalCijena);

        document.body.appendChild(lista);
}
const button=document.querySelector("button");
button.addEventListener("click",ubaciIzbaci); */



/* function computerPicks() {
    let compChoices = ["kamen", "papir", "skare"] // let computer pick [rock, paper, scissors]
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 // randomize rock paper and scissors
   
    if (randomizeChoice === 1) {
      return "kamen";
    } if (randomizeChoice === 2) {
      return "papir";
    } if (randomizeChoice === 3) {
      return "skare";
    }
   }
   
   console.log(computerPicks()); // view computer's choice
   
   
   function playRound(playerSelection, computerSelection) {
     if (playerSelection === "kamen") {  
       if (computerSelection === "kamen") {
         return "Izjednaceno!!"
       } else if (computerSelection === "papir") {
           return "Kompjuter pobjeđuje!";
         } else {
           return "Pobjedio si!";
         }
     }
     else if (playerSelection === "papir") {  
       if (computerSelection === "papir") {
         return "Izjednaceno!!"
       } else if (computerSelection === "kamen") {
           return "Kompjuter pobjeđuje!";
         } else {
           return "Pobjedio si!";
         }
     } else {
       if (computerSelection === "kamen") {
         return "Kompjuter pobjeđuje!";
     } else if (computerSelection === "papir") {
         return "Korisnik pobjeduje!";
     } else {
         return "Izjednaceno!";
     }
     }
   
   
}
   const playerSelection = "skare"; // primary choice
   const computerSelection = computerPicks(); // calls the randomized choices
   console.log(playRound(playerSelection, computerSelection)); // print out the result

const nasiButtoni = document.querySelectorAll("button");
nasiButtoni.forEach((button) =>{
button.addEventListener("click", ()=>{
    
    console.log("adsfasd");
})
}) */
// -------Vjezba 2-------
const OPTIONS =["rock","paper","scissors"];
const resultParagraph=document.getElementById("result");

let racunalo=document.getElementById("racunalo");
let korisnik=document.getElementById("korisnik");
let korScore = 0;
let racScore=0;

const checkResult=(event)=>{
    const userInput= event.target.textContent.toLowerCase();
    const randomInput= OPTIONS[Math.floor(Math.random()*OPTIONS.length)];

if(userInput===randomInput){
    resultParagraph.textContent="It is a tie";
}
else if(
    (userInput==="rock" && randomInput==="scissors")||
    (userInput==="scissors" && randomInput==="paper")||
    (userInput==="paper" && randomInput==="rock")
){
    resultParagraph.textContent= `Congrats, ${userInput} beats ${randomInput}!`;
    korScore++;
    korisnik.textContent = korScore;
    
}
else{
    resultParagraph.textContent="You lost.Try again!";
    racScore++;
    racunalo.textContent= racScore;
}

};

const buttonArray = document.querySelectorAll("button");
buttonArray.forEach((button)=>{
button.addEventListener("click",checkResult);
});