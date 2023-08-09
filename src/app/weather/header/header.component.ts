import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title!: string;

  @Output() search = new EventEmitter<string>();

  submit(location: string) {
    this.search.emit(location);
  }
}
