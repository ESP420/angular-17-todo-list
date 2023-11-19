import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <input #inputElementRef [value]="title"
    (keyup.enter)="changeTitle(inputElementRef)">

<button (click)="changeTitle(inputElementRef)">
  Save
</button>
  `,
  styleUrls: ['./input-button-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';

  constructor() {
  }

  ngOnInit(): void {
  }
  changeTitle(inputElementReference) {
    this.title = inputElementReference.value;
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
