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
    this.daForm = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldVal),

    });
  }
}
