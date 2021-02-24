import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-user-management',
  template: ` <!-- <p>
      <img
        src="https://user-images.githubusercontent.com/822159/36186551-b3b43564-110d-11e8-9069-bc41b798a3da.png" />
    </p> -->
    <div class="horizontal-padding">
      <router-outlet name="master"></router-outlet>
      <div style="min-height: 10px"></div>
      <router-outlet name="detail"></router-outlet>
    </div>`,
  styles: [],
})
export class UserManagementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
