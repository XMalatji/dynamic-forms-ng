import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DynamoFormo';
  user = {
    name: 'Phaseka',
    age: '28',
    bitches: 1
  }

  daForm: FormGroup;

  ngOnInit() {
    const formDataObj = {};

    for (const prop of Object.keys(this.user)) {
      formDataObj[prop] = new FormControl(this.user[prop]);
    }
    this.daForm = new FormGroup(formDataObj);
  }
}
