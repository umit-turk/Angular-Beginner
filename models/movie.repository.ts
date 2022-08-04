import { Movie } from "./movie";
export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: "film1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus, incidunt repellendus rem commodi sunt mollitia sapiente, tempore quasi quo itaque perspiciatis ex ab enim tempora, illo accusamus impedit saepe?",
        img: "https://picsum.photos/id/237/200/300",
        isPopular: true,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 2,
        title: "film2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus, incidunt repellendus rem commodi sunt mollitia sapiente, tempore quasi quo itaque perspiciatis ex ab enim tempora, illo accusamus impedit saepe?",
        img: "https://picsum.photos/id/236/200/300",
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 3,
        title: "film3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus, incidunt repellendus rem commodi sunt mollitia sapiente, tempore quasi quo itaque perspiciatis ex ab enim tempora, illo accusamus impedit saepe?",
        img: "https://picsum.photos/id/235/200/300",
        isPopular: true,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 4,
        title: "film4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus, incidunt repellendus rem commodi sunt mollitia sapiente, tempore quasi quo itaque perspiciatis ex ab enim tempora, illo accusamus impedit saepe?",
        img: "https://picsum.photos/id/230/200/300",
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular === true);
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find((i) => i.id == id);
  }
}
