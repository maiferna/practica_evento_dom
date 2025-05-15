
// Llamar a los elementos
const buttonArticle = document.querySelector(".bloque-botones");
const filterBar = document.querySelector(".barra-filtros");

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
    const createdButton = arrButton.forEach((tag) => {
        const buttonTags = document.createElement("button");
        buttonTags.classList.add("boton");
        buttonTags.id = tag;
        buttonTags.textContent = tag; 
        buttonArticle.append(buttonTags); // El append al final cuando estén los elementos creados
        //console.log(buttonTags);
    })
    return createdButton;
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
    buttonArticle.addEventListener("click", generateImageDependigOnTheTagClicked);
}

function generateImageDependigOnTheTagClicked() {
  console.log("findImages está funcionando");
}

createButton();
findImages();
createButtonParagraph()







// CREAR CARD GRANDE

// CREAR CARD PEQUEÑAS