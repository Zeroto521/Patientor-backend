interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Entry { }

interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}


type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries'>;

export { DiagnoseEntry, PatientEntry, PublicPatient, Gender };
