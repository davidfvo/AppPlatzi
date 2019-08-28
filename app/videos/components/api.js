const link = 'https://yts.am/api/v2/';

let x = true;
function addPair(){
    x ? (x = false) : (x = true);
    return x
}

const apiTransform  = movie => ({
    key: `${(movie.id).toString()}${movie.title}${movie.year}${movie.rating}`,
    title: movie.title_english,
    year: movie.year,
    rating: movie.rating,
    photo: movie.medium_cover_image,
    genre: movie.genres[0],
    backGround: movie.background_image,
    smallCover: movie.small_cover_image,
    summary: movie.summary,
    youTubeId: movie.yt_trailer_code,
    imdbId: movie.imdb_code,
    ytsURL: movie.url,
    firstTorrent: movie.torrents[0].url,
    isPair: addPair()
})

export const movieSearch = async (searchValue) => {
    let movieSearch = [];
    const response = await fetch(`${link}list_movies.json?limit=15&query_term=${searchValue}`)
    const { data } = await response.json();
    (data.movies).map(movie => movieSearch =[...movieSearch, movie]) 
    return movieSearch.map(movie => apiTransform(movie))
}

export const categorySearch = async (searchValue) => {
    let movieSearch = [];
    const response = await fetch(`${link}list_movies.json?limit=15&genre=${searchValue}`)
    const { data } = await response.json();
    (data.movies).map(movie => movieSearch = [...movieSearch, movie])
    return movieSearch.map(movie => apiTransform(movie))
}

export const movieList = async () => {
    let moviesList = [];
    for (let i = 1; i < 10; i++) {
        const response = await fetch(`${link}movie_suggestions.json?movie_id=${i}`)
        const { data } = await response.json();
        (data.movies).map(movie => moviesList = [...moviesList, movie])
    }
    return moviesList.map(movie => apiTransform(movie))
}

export const getMovies = async () => {
    let categoryList = [];
    for (let i = 5; i < 7; i++) {
        const response = await fetch(`${link}list_movies.json?page=${i}`)
        const { data } = await response.json();
        (data.movies).map(xList => categoryList = [...categoryList, xList])
    }
    const transform = (categoryList).map(movie => apiTransform(movie))
    genreList = []
    const nonDuplicate = transform.map((movie) => validateCategory(movie))   
    const nonFalse = nonDuplicate.filter(movie => movie != false)
    return nonFalse
}
// validación categoria
let genreList = [];
function validateCategory(movie) {
    const category = genreList.filter(word => word == movie.genre)
    if (movie.genre != category[0]) {
        genreList.push(`${movie.genre}`)
        return movie
    } else {
        return false
    }
}

// Humano recibidor del codigo del aliado
export const moviTest = async (numDocumento , tipoDocumento) => {
    let usuario = {
        "documento": `${numDocumento}`,
        "tipoDocumento": `${tipoDocumento}`
    }
    const xCase = await fetch('https://hwh.humano.com.do/UsuarioService/API/v1/ValidarVinculacion', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'apikey': 'lk24E71HRaRc8I60tx8I45IPGyofgkfT'
        },
        body: JSON.stringify(usuario),
    })
    .then(xCase => xCase.json())
    // .then((responseJson) => {
    //     return (responseJson.vinculaciones).find(variable => variable.tipoVinculacion == "ALIADO");
    // })
    // .then(aliado => aliado[0]);
    // const result = await xCase.codigoVinculacion;

    return xCase
}

/*

//Test API
export const testSub = async () => {
    // page
    let categoryList = [];
    let i = 1
    do {
        const query = await fetch(`${link}list_movies.json?page=${i}`)
        const { data } = await query.json();
        (data.movies).map(xList => categoryList = [...categoryList, xList])
        i++
    } while (i < 10)
    const transform = (categoryList).map(movie => apiTransform(movie))
    const nonDuplicate = transform.map(movie => validateCategory(movie))
    const nonFalse = nonDuplicate.filter(movie => movie != false)
    return nonFalse
}*/