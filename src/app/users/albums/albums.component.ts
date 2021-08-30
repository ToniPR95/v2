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
  public listItems: Array<{ text: string; value: number }> = [];

  public albums: any;
  public photos: any;
  albumId: any;

  albumsTitles: any;
  length: any;

  constructor(
    private route: ActivatedRoute,
    private userAlbums: AlbumsService
  ) {}

  isAlbumSelected() {}

  ngOnInit(): void {
    this.albumsTitles = [];
    const id = this.route.snapshot.params['id'];

    this.userAlbums.fetchAlbumsByUserId(id).subscribe(
      (response) => {
        this.albums = response;
        for (var index in this.albums) {
          // this.length = this.albumsTitles.push(this.albums[index].title);
          // this.length = this.albumsTitles.push(this.albums[index].id);
          this.length = this.albumsTitles.push({
            text: this.albums[index].title,
            value: this.albums[index].id,
          });
        }
        this.listItems = this.albumsTitles;
        console.log(this.listItems);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
