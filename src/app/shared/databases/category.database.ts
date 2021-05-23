import {Category} from '../models/category.model';

export const CATEGORIES: Category[] = [
  {
    title: 'Betegek listája',
    icon: 'list',
    value: 'list',
    color: 'yellow',
    url: '/home/list'
  },
  {
    title: 'Sérülés felvétele',
    icon: 'add',
    value: 'add',
    color: 'cyan',
    url: '/home/add'
  }
];
