import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/albums.service';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  public albums: any;
  public photos: any;
  albumId: any;

  constructor(
    private route: ActivatedRoute,
    private userAlbums: AlbumsService
  ) {}

  public data: Array<string> = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.userAlbums.fetchAlbumsByUserId(id).subscribe(
      (response) => {
        this.albums = response;
        console.log(this.albums);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
