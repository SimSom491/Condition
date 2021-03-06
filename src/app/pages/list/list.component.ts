import {Component, OnDestroy, OnInit} from '@angular/core';
import {FbBaseService} from '../../services/fb-base.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Condition} from '../../shared/models/condition.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  title = 'Betegek';
  list: Observable<Condition[]> | null = null;

  constructor(private service: FbBaseService, private router: Router) {
  }

  ngOnDestroy(): void {
    console.log('vege a listazasnak');
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.list = this.service.get('conditions');
  }

  onGetCondition(event: Condition): void {
    this.router.navigateByUrl('/home/info/' + event.id);
  }


}
