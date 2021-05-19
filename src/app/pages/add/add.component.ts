import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Condition} from '../../shared/models/condition.model';
import {FbBaseService} from '../../services/fb-base.service';
import {CONDITIONS} from '../../shared/databases/condition.database';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id = '';
  friss = false;
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
  constructor(private service: FbBaseService, private router: Router, private route: ActivatedRoute) {}
  title?: string;
  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.friss = true;
      this.title = 'Frissítés';
      this.service.getById('conditions', this.id).subscribe((result) => {
        this.form = new FormGroup({
          id: new FormControl( result.id),
          status: new FormControl( result.status),
          panasz: new FormControl( result.panasz, Validators.required),
          sulyossag: new FormControl( result.sulyossag),
          hol: new FormControl( result.hol),
          betegnev: new FormControl( result.betegnev, Validators.required),
          okozo: new FormControl( result.okozo),
          serulesidopont: new FormControl( result.serulesidopont, Validators.required),
          felvetelidopont: new FormControl( result.felvetelidopont, Validators.required),
          nover: new FormControl( result.nover, Validators.required),
          orvosneve: new FormControl( result.orvosneve),
        });
      });

    }else{
      this.title = 'Probléma felvétele';
    }
  }
  onSubmit(): void {
    if (this.friss){
      this.service.update('conditions', this.id, this.form.value);
    }else{
      this.service.add('conditions', this.form.value);
    }
    this.router.navigateByUrl('/home/list');
  }
}
