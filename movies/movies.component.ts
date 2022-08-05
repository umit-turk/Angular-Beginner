import { MovieRepository } from "./../models/movie.repository";
import { Movie } from "./../models/movie";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { debounce, debounceTime, fromEvent, interval } from "rxjs";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  title: string = "film listesi";
  movies: Movie[];
  FilteredMovies: Movie[];
  movieRepository: MovieRepository;
  today = new Date();

  filterText: string = "";
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.FilteredMovies = this.movies;
  }

  ngOnInit(): void {}

  onInputChange() {
    this.FilteredMovies = this.filterText
      ? this.movies.filter(
          (m) =>
            m.title.toLocaleLowerCase().indexOf(this.filterText) !== -1 ||
            m.description.indexOf(this.filterText) !== -1
        )
      : this.movies;
  }

  addToList($event:any ,movie: Movie){
    if($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Listeden Çıkar';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
    }else {
      $event.target.innerText = 'Listeye Ekle';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
    }

  }
}
