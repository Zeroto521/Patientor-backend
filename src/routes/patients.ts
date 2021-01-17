import express from 'express';

import service from '../services/patients';
import { toPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(service.getEntries());
});

router.post('/', (req, res) => {
  const data = toPatientEntry(req.body);
  const newEntry = service.addEntry(data);

  res.json(newEntry);
});

export default router;
