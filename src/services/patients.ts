import { v4 as uuidv4 } from 'uuid';

import { patients } from '../../data';
import { PatientEntry, PublicPatient } from '../types';

const getEntries = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const findById = (id: string): PatientEntry | undefined => {
  const patient = patients.find(p => p.id === id);

  return patient;
};

function addEntry(data: Omit<PublicPatient, 'id'>): PublicPatient {
  const id: string = uuidv4();
  const newEntry = { id, ...data };

  return newEntry;
}


export default {
  getEntries,
  findById,
  addEntry
};
