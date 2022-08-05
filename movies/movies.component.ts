import { MovieService } from "./../services/movie.service";

import { Movie } from "./../models/movie";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  title: string = "film listesi";
  movies: Movie[] = [];
  FilteredMovies: Movie[] = [];
  errorMessage: any = ""

  filterText: string = "";
  constructor(
    private toastr: ToastrService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getListMovies();
  }

  getListMovies() {
    return this.movieService.getMovies().subscribe(
      (response) => {
        this.movies = response;
        this.FilteredMovies = this.movies;
      },
      (error) => this.errorMessage = error
    );
  }

  onInputChange() {

  this.FilteredMovies = this.filterText ? this.movies.filter(m => m.title.indexOf(this.filterText.toLocaleLowerCase())!= -1) :this.movies;

  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains("btn-primary")) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");
      this.toastr.error("listeden çıkar");
    } else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");
      this.toastr.success("listeye eklendi");
    }
  }

  removeFromList(movie:any){
    let findMovieId = this.movies.find(m => m.id == movie.id)
   let id:undefined | any = findMovieId?.id
   return this.movieService.deleteMovie(id).subscribe(res => {
    this.FilteredMovies = this.FilteredMovies.filter(m => m.id != id);
   })

  }




}
