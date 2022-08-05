import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
  url = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteMovie(id:any): Observable<Movie[]> {
    console.log(id);

    return this.http.delete<Movie[]>(`${this.url}/${id}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //client
      console.log("error" + error.error.message);
    } else {
      //backend
      switch (error.status) {
        case 404:
          console.log("not found");
          break;
        case 403:
          console.log("access denied");
          break;
      }
    }
    return throwError("Bir hata oluştu");
  }
}
