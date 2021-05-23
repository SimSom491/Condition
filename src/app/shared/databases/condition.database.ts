import {Condition} from '../models/condition.model';

export const CONDITIONS: Condition[] = [
  {
    id: '1',
    clinicalStatus: 'Endgame',
    category: 'Thanos',
    severity: 7,
    bodySite: 'a sejtekben',
    subjectName: 'vasember',
    encounterName: 'ököl',
    onsetDateTime: new Date(),
    recordedDate: new Date(),
    recorder: 'futrinka',
    asserterName: 'Dr.Lupus'
  },
  {
    id: '2',
    clinicalStatus: 'Már majdnem halott',
    category: 'melkasi fájdalom',
    severity: 5,
    bodySite: 'szívbillentyű',
    subjectName: 'Pókember Ábrahám',
    encounterName: 'Egy nő. Egy késsel. Szúrás a szívbe. 20 méter mélyen. 40 méterről.',
    onsetDateTime: new Date(),
    recordedDate: new Date(),
    recorder: 'futrinka',
    asserterName: 'Dr.Bubo Pestis'
  },
  {
    id: '3',
    clinicalStatus: 'Elég halott már',
    category: 'Száraz bőr',
    severity: 6,
    bodySite: 'A testének MINDEN pontján',
    subjectName: 'Gerle Tiborc',
    onsetDateTime: new Date(),
    recordedDate: new Date(),
    recorder: 'Revon',
    asserterName: 'Dr.Genya'
  },
  {
    id: '4',
    clinicalStatus: 'Kezelt',
    category: 'Törés',
    severity: 2,
    bodySite: 'kézfej',
    subjectName: 'Kezes Bárány',
    encounterName: 'Teniszütő',
    onsetDateTime: new Date(),
    recordedDate: new Date(),
    recorder: 'Carla Espiosa',
    asserterName: 'Dr.Cox'
  },
  {
    id: '5',
    clinicalStatus: 'Rögzített',
    category: 'Derékfájdalom',
    severity: 10,
    bodySite: 'Természetesen miskolc',
    subjectName: 'Bekre Pál',
    encounterName: 'Tompa szög',
    onsetDateTime: new Date(),
    recordedDate: new Date(),
    recorder: 'Carla Espiosa',
    asserterName: 'Dr.Kivé Géza'
  }
];
