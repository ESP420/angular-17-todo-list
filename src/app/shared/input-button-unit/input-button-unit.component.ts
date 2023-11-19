import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <input #inputElementRef
         [value]="title"
         (keyup.enter)="submitValue(getInputValue($event))">

  <button (click)="submitValue(inputElementRef.value)">
  Save
</button>
  `,
  styleUrls: ['./input-button-unit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputButtonUnitComponent implements OnInit {
  title: string = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
