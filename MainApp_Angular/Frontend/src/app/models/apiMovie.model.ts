export interface MovieApiInterface {
    average_rating: number,
    backdrop_path : string,
    description: string,
    id: number,
    name: string,
    results: ResultInterface []
}

export interface ResultInterface {
    id : number,
    title : string,
    poster_path: string,
    overview: string,
    vote_average: number,
    release_date: string,
    genre_ids: number[]
}
