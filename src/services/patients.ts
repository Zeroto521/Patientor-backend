import { v4 as uuidv4 } from 'uuid';

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

const addEntry = (data: Omit<PatientEntry, 'id'>): PatientEntry => {
  const id: string = uuidv4();
  const newEntry = { id, ...data };

  return newEntry;
};


export default {
  getEntries,
  addEntry
};
