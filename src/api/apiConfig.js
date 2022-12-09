const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6ea3299424887a93b36e06be866f0d22',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;