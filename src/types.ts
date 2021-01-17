interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}

interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: "male" | "female" | "other";
  occupation: string;
}

export { DiagnoseEntry, PatientEntry }
