import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from 'src/app/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  public id!: string;
  public photos: any;
  albumId: any;

  constructor(
    private route: ActivatedRoute,
    private userPosts: PhotosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];

    // this.userPosts.fetchPhotos().subscribe(
    //   (response) => {
    //     this.photos = response;
    //     console.log(this.photos);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    this.userPosts.fetchPhotosByAlbumId(id).subscribe(
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
