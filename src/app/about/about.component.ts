import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-about',
  template: `
  <div class="row">
    <p class="col">
      about works!
    </p>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
