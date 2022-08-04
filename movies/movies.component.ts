import { MovieRepository } from './../models/movie.repository';
import { Movie } from './../models/movie';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { debounce, debounceTime, fromEvent, interval } from 'rxjs';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  title:string = "film listesi"
  movies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  today = new Date()

  filterText: string | any = ''
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }
/*   @ViewChild('txt')
  txt!: ElementRef

  ngAfterViewInit(): void {
  this.Debounce()
  }

  Debounce(){
    const obs = fromEvent(this.txt.nativeElement, 'keyup');
  return  obs.pipe(debounceTime(100)).subscribe((res) => console.log(res));
  } */

  ngOnInit(): void {}


}
