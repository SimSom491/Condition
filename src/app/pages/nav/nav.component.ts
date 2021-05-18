import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Category} from '../../shared/models/category.model';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  sPageTitle?: string;
  @Input() selectedPage?: string;
  @Input() categories: Category[] = [];
  @Output() callSelectPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  select(target: string): void {
    this.callSelectPage.emit(target);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.selectedPage) {
      this.selectedPage = changes.selectedPage.currentValue;
      this.setTitle();
    }
  }
  setTitle(): void {
    const category =
      this.categories.filter((item) => item.value === this.selectedPage);
    this.sPageTitle =
      category?.[0] ? category[0].title : 'Menü';
  }
}
