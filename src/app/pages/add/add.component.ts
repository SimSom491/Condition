import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Condition} from '../../shared/models/condition.model';
import {FbBaseService} from '../../services/fb-base.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    id: new FormControl(''),
    clinicalStatus: new FormControl(''),
    category: new FormControl('', Validators.required),
    severity: new FormControl(''),
    bodySite: new FormControl(''),
    subjectName: new FormControl('', Validators.required),
    encounterName: new FormControl(''),
    onsetDateTime: new FormControl('', Validators.required),
    recordedDate: new FormControl('', Validators.required),
    recorder: new FormControl('', Validators.required),
    asserterName: new FormControl(''),

  });
  title?: string;

  constructor(private service: FbBaseService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.friss = true;
      this.title = 'Frissítés';
      this.service.getById('conditions', this.id).subscribe((result) => {
        this.form = new FormGroup({
          id: new FormControl(result.id),
          clinicalStatus: new FormControl(result.clinicalStatus),
          category: new FormControl(result.category, Validators.required),
          severity: new FormControl(result.severity),
          bodySite: new FormControl(result.bodySite),
          subjectName: new FormControl(result.subjectName, Validators.required),
          encounterName: new FormControl(result.encounterName),
          onsetDateTime: new FormControl(result.onsetDateTime, Validators.required),
          recordedDate: new FormControl(result.recordedDate, Validators.required),
          recorder: new FormControl(result.recorder, Validators.required),
          asserterName: new FormControl(result.asserterName),
        });
      });

    } else {
      this.title = 'Probléma felvétele';
    }
  }

  onSubmit(): void {
    if (this.friss) {
      const asd = this.form.value as Condition;

      this.service.update('conditions', this.id, asd);
    } else {
      const asd = this.form.value as Condition;
      // console.log(asd.onsetDateTime.toDateString());
      this.service.add('conditions', asd);
    }
    this.router.navigateByUrl('/home/list');
  }
}
