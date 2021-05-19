import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FbBaseService} from '../../services/fb-base.service';
import {Condition} from '../../shared/models/condition.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  title: string;
  id = '';
  inData: Observable<Condition> | null = null;

  constructor(private route: ActivatedRoute, private service: FbBaseService, private router: Router) {
    this.title = 'Info';
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.getItem();
    }
  }

  getItem(): void {
    this.inData = this.service.getById('conditions', this.id);
  }

  onUpdate(): void{
    this.router.navigateByUrl('/home/add/' + this.id);
  }
  onDelete(): void{
    this.service.delete('conditions', this.id);
    this.router.navigateByUrl('/home/list');
  }
}
