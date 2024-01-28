import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-splashblock',
  templateUrl: './splashblock.component.html',
  styleUrls: ['./splashblock.component.scss']
})
export class SplashblockComponent {
  @Input() fName!: string;
  @Input() lName!: string;
  @Input() pos!: string;
  @Input() rating!: string;
}
