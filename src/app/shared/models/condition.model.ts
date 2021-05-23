export interface Condition {
  id: string;
  clinicalStatus?: string;
  category: string;
  severity?: number;
  bodySite?: string;
  subjectName: string;
  encounterName?: string;
  onsetDateTime: Date;
  recordedDate: Date;
  recorder: string;
  asserterName?: string;
}
