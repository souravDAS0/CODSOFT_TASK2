import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  location: string = '';

  @Input() title!: string;

  @Output() search = new EventEmitter<string>();

  submit(locationData: NgForm) {
    this.search.emit(this.location);
    locationData.reset();
  }
}
