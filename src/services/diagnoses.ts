import data from '../../data/diagnoses.json';
import { DiagnoseEntry } from '../types';

const diagnoses: Array<DiagnoseEntry> = data as Array<DiagnoseEntry>;

const getEntries = (): DiagnoseEntry[] => diagnoses;

export default {
  getEntries
};
