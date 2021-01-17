interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

type Gender = "male" | "female" | "other";

interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export { DiagnoseEntry, PatientEntry, Gender };
