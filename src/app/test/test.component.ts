import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
          <div>
            Hello World
            </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
