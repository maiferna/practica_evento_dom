
// Llamar a los elementos
const buttonArticle = document.querySelector(".bloque-botones");
const filterBar = document.querySelector(".barra-filtros");
const mainContainer = document.querySelector("main");
const galleryContainer = document.querySelector(".section-imgs-relacionadas");

// Variables

const fragment = document.createDocumentFragment();
const imgUrl = "assets/img/viajes/";


const arrButton = ['mar', 'palmera', 'chica', 'cielo']; // Generar los tags a partir del array arrImages.tags con un método


const arrImages = [
    {
        titulo: 'Viaje 1',
        url: `${imgUrl}viajes-1.jpg`,
        alt: 'Imagen 1',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, perspiciatis?',
        tags: ['mar', 'palmera', 'chica', 'cielo'],
    },
    {
        titulo: 'Viaje 2',
        url: `${imgUrl}viajes-2.jpg`,
        alt: 'Imagen 2',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, perspiciatis?',
        tags: ['mar', 'arena', 'puente', 'cielo', 'casas'],
    },
    {
        titulo: 'Viaje 3',
        url: `${imgUrl}viajes-3.jpg`,
        alt: 'Imgen 3',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, perspiciatis?',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 4',
        url: `${imgUrl}viajes-4.jpg`,
        alt: 'Imagen 4',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, perspiciatis?',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 5',
        url: `${imgUrl}viajes-5.jpg`,
        alt: 'Imagen 5',
        descripcion: 'Breve descripción de la imagen 5',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 6',
        url: `${imgUrl}viajes-6.jpg`,
        alt: 'Imagen 6',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, perspiciatis?',
        tags: ['palmera', 'agua', 'cielo'],
    },
    {
        titulo: 'Viaje 7',
        url: `${imgUrl}viajes-7.jpg`,
        alt: 'Imagen 7',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, perspiciatis?',
        tags: ['palmera', 'agua', 'cielo'],
    }
]


// CREAR BOTONES CON VALORES DEL ARRAY
//Funcion para crear botones
const createButton = () => {
    arrButton.forEach((tag) => {
        const buttonTags = document.createElement("button");
        buttonTags.classList.add("boton");
        buttonTags.id = tag;
        buttonTags.textContent = tag; 
        buttonArticle.append(buttonTags); // El append al final cuando estén los elementos creados
        //console.log(buttonTags);
    })
};

// Función para pintar el párrafo con los resultados encontrados
// Pruebas para el template string
let numberOfPictures = 3;
let tagName ='Mar';

const createButtonParagraph = () => {
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = `Se han encontrado ${numberOfPictures} imágenes con el tag ${tagName}`;

    filterBar.append(resultParagraph);
    console.log(filterBar);
}


// Función evento generar Imágenes al clickaren botón-etiqueta
const findImages = () => {
    buttonArticle.addEventListener("click", generateCards);
}

function generateCards() {
  generateBigCard(indiceImg=0);
}


// CREAR CARD GRANDE --------------------------------------------------------------------------------//
function generateBigCard(indiceImg=0){
        
        const sectionBigCard = document.createElement('section'); //crea un section para Card
        /*sectionBigCard.innerHTML = ''; //vaciar la section*/
        sectionBigCard.classList.add('card-grande'); //añade una clase en la section Card
        
        const h3Card = document.createElement('h3'); //crea un h1
        h3Card.textContent = arrImages[indiceImg].titulo; //añade el contenido html del texto

        const divCard = document.createElement('div');
        const imgCard = document.createElement('img'); //crea un img
        imgCard.setAttribute('src', arrImages[indiceImg].url) //añade atributo src
        imgCard.setAttribute('alt', arrImages[indiceImg].alt) //añade atributo alt

        
        const pCard = document.createElement('p'); //crea un p
        
        pCard.textContent = arrImages[indiceImg].descripcion; //añade el contenido html del texto
        
        sectionBigCard.append(h3Card); //agrega h1Card dentro del divCard, al final
        sectionBigCard.append(divCard);
        divCard.append(imgCard); //agrega imgCard dentro del divCard, al final 
        sectionBigCard.append(pCard); //agrega h1Card dentro del divCard, al final 

        filterBar.after(sectionBigCard);
}




// CREAR GALLERY-----------------------------------------------------------------------------------//
function generateGalleryContainer () {
    const h2Card = document.createElement('h2');
    h2Card.textContent = "IMÁGENES RELACIONADAS";

    const divGallery = document.createElement('div');
    divGallery.classList.add('bloque-cards-mini');

    galleryContainer.append(h2Card);
    galleryContainer.append(divGallery);

    const smallCard = generateSmallCard();
    divGallery.append(smallCard);
}




//Crear mini-card
function generateSmallCard(indiceImg=1){
        
        const articleSmallCard = document.createElement('article'); //crea un section para Card
        articleSmallCard.classList.add('card-mini'); //añade una clase en la section Card
        
        const h4Card = document.createElement('h4'); //crea un h1
        h4Card.textContent = arrImages[indiceImg].titulo; //añade el contenido html del texto

        const divCard = document.createElement('div');
        const imgCard = document.createElement('img'); //crea un img
        imgCard.setAttribute('src', arrImages[indiceImg].url) //añade atributo src
        imgCard.setAttribute('alt', arrImages[indiceImg].alt) //añade atributo alt

        
        const pSmallCard = document.createElement('p'); //crea un p
        
        pSmallCard.textContent = arrImages[indiceImg].descripcion; 
        
        articleSmallCard.append(h4Card); 
        articleSmallCard.append(divCard);
        divCard.append(imgCard);
        articleSmallCard.append(pSmallCard); 
        return articleSmallCard;

        // divGallery.append(articleSmallCard);
}





/*PALUEGO
function generateGalleryCard(indiceImg=0){
    arrFiltrados.forEach((elemento,index) => {
        if(index !== indiceImg){
            generateSmallCard()
        }
    })

}
*/




createButton();
findImages();
createButtonParagraph()
generateGalleryContainer();
generateSmallCard;

