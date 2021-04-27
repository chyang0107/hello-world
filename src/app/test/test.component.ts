import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <div *ngFor="let color of colors; even as e; index as i">
        <h2>{{i}} {{e}}  {{color}}</h2>
      </div>

          `,
  styles: []
})
export class TestComponent implements OnInit {


  public colors: string[] = ["red", "orange", "pink", "orange"];

  constructor() { }

  ngOnInit(): void {
  }

}
