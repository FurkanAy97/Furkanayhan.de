import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  images = ['code.jpg', 'keyboard.jpg', 'laptop.jpg'];
  headlines = [
    'Crafting Digital Experiences: Journey into Web Development',
    'Code, Creativity, and Coffee: Exploring the Art of Web Development',
    'Turning Ideas into Interactive Realities: The World of a Passionate Web Developer',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
