import { Condition } from '../models/condition.model';

export const CONDITIONS: Condition[] = [
  {
    id: '1',
    status: 'Endgame',
    panasz: 'Thanos',
    sulyossag: 7,
    hol: 'a sejtekben',
    betegnev: 'vasember',
    okozo: 'ököl',
    serulesidopont: '1969-12-26',
    felvetelidopont: '1969-12-13',
    nover: 'futrinka',
    orvosneve: 'Dr.Lupus'
  },
  {
    id: '2',
    status: 'Már majdnem halott',
    panasz: 'melkasi fájdalom',
    sulyossag: 5,
    hol: 'szívbillentyű',
    betegnev: 'Pókember Ábrahám',
    okozo: 'Egy nő. Egy késsel. Szúrás a szívbe. 20 méter mélyen. 40 méterről.',
    serulesidopont: '1966-10-29',
    felvetelidopont: '1969-05-11',
    nover: 'futrinka',
    orvosneve: 'Dr.Bubo Pestis'
  },
  {
    id: '3',
    status: 'Elég halott már',
    panasz: 'Száraz bőr',
    sulyossag: 6,
    hol: 'A testének MINDEN pontján',
    betegnev: 'Gerle Tiborc',
    serulesidopont: '1970-10-08',
    felvetelidopont: '1971-05-09',
    nover: 'Revon',
    orvosneve: 'Dr.Genya'
  },
  {
    id: '4',
    status: 'Kezelt',
    panasz: 'Törés',
    sulyossag: 2,
    hol: 'kézfej',
    betegnev: 'Kezes Bárány',
    okozo: 'Teniszütő',
    serulesidopont: '2012-02-28',
    felvetelidopont: '2012-02-29',
    nover: 'Carla Espiosa',
    orvosneve: 'Dr.Cox'
  },
  {
    id: '5',
    status: 'Rögzített',
    panasz: 'Derékfájdalom',
    sulyossag: 10,
    hol: 'Természetesen miskolc',
    betegnev: 'Bekre Pál',
    okozo: 'Tompa szög',
    serulesidopont: '2012-03-29',
    felvetelidopont: '2012-03-30',
    nover: 'Carla Espiosa',
    orvosneve: 'Dr.Kivé Géza'
  }
];
