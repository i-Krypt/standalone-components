import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesDataService } from '../data-access/images-data.service';
import { ImagesInterface } from '../interface/images';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'],
})
export class ImageGridComponent implements OnInit {
  dataImage: ImagesInterface[] = [];

  constructor(readonly imagesData: ImagesDataService) {}

  ngOnInit(): void {}

  fetchImages() {
    this.imagesData.getImages().subscribe((resp) => {
      console.log('here', resp);
      this.dataImage = { ...resp };
    });
  }
}
