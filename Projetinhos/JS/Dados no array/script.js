/*
    ### Buscando e contando dados em arrays

    Baseado no array de livros por categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Agusto Cury
    * Tranformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T Kiyosaki e Sharon L. Letcher"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

const totalCategories = function () {
    let arrayOfCategories = [];

    for (let category of booksByCategory) {
        arrayOfCategories.push(category.category);
    }
    console.log(`Há um total de ${arrayOfCategories.length} categorias.\n-----------------------------` );
}

totalCategories();

const totalBooks = function () {
    let books = [];

    for (let category of booksByCategory) {
        books.push(category.books);
        console.log(`Na categoria ${category.category} há ${category.books.length} livros.\n-----------------------------`);
    }
    
}

totalBooks();

const totalAuthors = function () {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            
            }
        }
    }
    console.log(`O total de autores é ${authors.length}, o nome deles são: ${authors.join("; ")}.\n-----------------------------`);
}

totalAuthors();

const booksOfAugustoCury = function () {
    let curyBooks = [];

    for (let category of booksByCategory) {
        for (let books of category.books) {
            if (books.author === "Augusto Cury") {
                curyBooks.push(books.title);
            }
        }
    }
    console.log(`Foram encontrados ${curyBooks.length} livros do autor Augusto Cury, eles são: ${curyBooks.join("; ")}.\n-----------------------------`);
}

booksOfAugustoCury();

const booksOfAuthor = function (author) {
    let authorsBooks = [];

    for (let category of booksByCategory){
        for (let books of category.books) {
            if (books.author === author ) {
                authorsBooks.push(books.title);
            }
        }
    }
    console.log(`Foram encontrados ${authorsBooks.length} livros do autor ${author}, eles são: ${authorsBooks.join("; ")}.\n-----------------------------`)
}

booksOfAuthor("Stephen R. Covey");