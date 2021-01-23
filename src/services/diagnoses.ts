import data from '../../data/diagnoses.json';
import { Diagnose } from '../types';

const diagnoses: Array<Diagnose> = data as Array<Diagnose>;

const getEntries = (): Diagnose[] => diagnoses;

export default {
  getEntries
};
