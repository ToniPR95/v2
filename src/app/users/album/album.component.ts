import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/albums.service';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  public photos: any;

  constructor(
    private route: ActivatedRoute,
    private userPhotos: PhotosService,
    private userAlbums: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.userPhotos.fetchPhotosByAlbumId(id).subscribe(
      (response) => {
        this.photos = response;
        console.log(this.photos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
