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
  public albumId: any;

  // public pageSize = 8;
  // public skip = 0;
  // public pagedDestinations = [];
  // public total = destinations.length;

  constructor(
    private route: ActivatedRoute,
    private userPhotos: PhotosService
  ) {}

  ngOnInit(): void {
    // this.pageData();

    this.albumId = this.route.snapshot.params['albumId'];
    console.log(this.albumId);

    this.userPhotos.fetchPhotosByAlbumId(this.albumId).subscribe(
      (response) => {
        this.photos = response;
        console.log(this.photos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // public onPageChange(e: PageChangeEvent): void {
  //   this.skip = e.skip;
  //   this.pageSize = e.take;
  //   this.pageData();
  // }

  // private pageData(): void {
  //   this.pagedDestinations = destinations.slice(
  //     this.skip,
  //     this.skip + this.pageSize
  //   );
  // }
}
