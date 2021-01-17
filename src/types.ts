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

interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export { DiagnoseEntry, PatientEntry, Gender };
