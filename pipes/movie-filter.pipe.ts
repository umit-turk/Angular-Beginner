import { Movie } from "./../models/movie";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "movieFilter",
})
export class MovieFilterPipe implements PipeTransform {
  transform(movies: Movie[], filterText: string): Movie[] {
    filterText = filterText.toLocaleLowerCase();

    console.log(filterText);
    console.log(console.log(movies));

    return filterText
      ? movies.filter(
          (m: Movie) => m.title.toLocaleLowerCase().indexOf(filterText) !== -1
        ) ||
          ((m: Movie) =>
            m.description.toLocaleLowerCase().indexOf(filterText) !== -1)
      : movies;
  }
}
