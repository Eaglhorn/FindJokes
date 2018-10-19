import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ConnectableObservable } from "rxjs"
import { publish } from "rxjs/operators";


@Injectable()
export class FfTestPageService {

  constructor(private http: HttpClient) {
  }
  searchJoke(title:any) {
    const url = 'https://api.chucknorris.io/jokes/search?query=' + title;
    return this.http.get(url).map(res => res);
  }
}
