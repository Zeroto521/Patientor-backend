import express from 'express';

import service from '../services/patients';
import { toPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(service.getEntries());
});

router.get('/:id', (req, res) => {
  const data = service.findById(req.params.id);
  if (data) {
    res.json(data);
  }

  res.status(404).end();
});

router.post('/', (req, res) => {
  const data = toPatientEntry(req.body);
  const newEntry = service.addEntry(data);

  res.json(newEntry);
});

export default router;
