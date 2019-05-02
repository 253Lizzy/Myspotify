import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/search" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQDgGGhsl1r-gXnVXYbFNcQIgZnreCh0kJOG0oSHmBvfbXhrG_FMOOF53WV8Mj2uCb8ST2UiPSoExByoh3ZJh9Inrpc8hd09PpdV4fFtlzgprjEMVRNO4ujbIRtIXxO599ASz_6iVsetT1haV-uK3cAa4gFMnK2uhg"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
