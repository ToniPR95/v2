import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  fetchPhotos() {
    return this.http.get(this.baseUrl);
  }

  fetchPhotosByAlbumId(id: string) {
    return this.http.get(this.baseUrl + '?albumId=' + id);
    // return this.http.get(this.baseUrl + '?albumId=' + id + '5');
    // albumId: 1-100, userId: 1-10, values: empty='', 0-9
    // albumId: (userId) + (userId)
  }
}
