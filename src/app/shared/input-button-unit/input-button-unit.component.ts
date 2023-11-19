import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>input-button-unit works!</p>`,
  styleUrls: ['./input-button-unit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';

  constructor() {
    this.title = 'I Love Angular';
    this.changeTitle('My First Angular App');
  }

  ngOnInit(): void {
    this.title = 'Angular CLI Rules!';
  }
  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }
}
