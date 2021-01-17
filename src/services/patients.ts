import { v4 as uuidv4 } from 'uuid';

import data from '../../data/patients.json';
import { PatientEntry, Gender } from '../types';


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

const addEntry = (
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: Gender,
  occupation: string): PatientEntry => {
  const id: string = uuidv4();
  const newEntry = { id, name, dateOfBirth, ssn, gender, occupation };

  return newEntry;
};


export default {
  getEntries,
  addEntry
};
