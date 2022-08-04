import { Movie } from './movie';
export class MovieRepository{
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: "film1",
        description: "açıklama1",
        img: "https://picsum.photos/id/237/200/300",
        isPopular:true,
        datePublished: new Date(1990,10,10)
      },
      {
        id: 2,
        title: "film2",
        description: "açıklama2",
        img: "https://picsum.photos/id/236/200/300",
        isPopular:false,
        datePublished: new Date(1990,10,10)
      },
      {
        id: 3,
        title: "film3",
        description: "açıklama3",
        img: "https://picsum.photos/id/235/200/300",
        isPopular:true,
        datePublished: new Date(1990,10,10)
      },
      {
        id: 4,
        title: "film4",
        description: "açıklama4",
        img: "https://picsum.photos/id/230/200/300",
        isPopular:false,
        datePublished: new Date(1990,10,10)
      },
    ];
  }


  getMovies(): Movie[]{
    return this.movies;
  }

  getPopularMovies(): Movie[]{
    return this.movies.filter(i => i.isPopular === true);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(i => i.id == id)
  }


}
