import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  fetchAlbums() {
    return this.http.get(this.baseUrl);
  }

  fetchAlbumsByUserId(id: string) {
    return this.http.get(this.baseUrl + '?userId=' + id);
  }
}
