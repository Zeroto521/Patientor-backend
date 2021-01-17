import data from '../../data/patients.json';
import { PatientEntry } from '../types';

const patients: Array<PatientEntry> = data as Array<PatientEntry>;

const getEntries = (): Omit<PatientEntry, 'ssn'>[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default {
  getEntries
};
