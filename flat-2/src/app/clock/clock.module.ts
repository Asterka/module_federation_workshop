import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'clock',
  template: `
    <div style="position:absolute; right: 25%; top: 30%; width: 50px; height: 50px">
      <svg width="66" height="66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="33" cy="33" r="32.1081" fill="#BF4A39" stroke="black" stroke-width="1.78378"/>
      <line x1="33.4456" y1="4.45898" x2="33.4456" y2="10.7022" stroke="#E0E0E0" stroke-width="1.78378"/>
      <line x1="33.4456" y1="55.2969" x2="33.4456" y2="61.5401" stroke="#E0E0E0" stroke-width="1.78378"/>
      <line x1="4.45898" y1="32.1081" x2="10.7022" y2="32.1081" stroke="#E0E0E0" stroke-width="1.78378"/>
      <line x1="55.2969" y1="32.1081" x2="61.5401" y2="32.1081" stroke="#E0E0E0" stroke-width="1.78378"/>
      <path d="M24.5273 15.6074L33.2233 34.3372L45.7098 29.6547" stroke="#E0E0E0" stroke-width="1.78378" stroke-linecap="round"/>
      </svg>
    </div>
    `,
})
export class Clock {
}

@NgModule({
    imports: [CommonModule],
    exports: [Clock],
    declarations: [Clock]
})
export class ClockModule { }
