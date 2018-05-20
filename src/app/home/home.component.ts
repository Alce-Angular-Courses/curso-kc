import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-home',
  template: `
    <div class="row">
      <p class="col">
        home works!
      </p>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
