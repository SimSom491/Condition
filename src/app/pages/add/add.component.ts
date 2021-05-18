import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Condition} from '../../shared/models/condition.model';
import {FbBaseService} from '../../services/fb-base.service';
import {CONDITIONS} from '../../shared/databases/condition.database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Output() callSelectPage = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    id: new FormControl( ''),
    status: new FormControl( ''),
    panasz: new FormControl( '', Validators.required),
    sulyossag: new FormControl( ''),
    hol: new FormControl( ''),
    betegnev: new FormControl( '', Validators.required),
    okozo: new FormControl( ''),
    serulesidopont: new FormControl( '', Validators.required),
    felvetelidopont: new FormControl( '', Validators.required),
    nover: new FormControl( '', Validators.required),
    orvosneve: new FormControl( ''),

  });
  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.service.add('conditions', this.form.value);
  }

}
