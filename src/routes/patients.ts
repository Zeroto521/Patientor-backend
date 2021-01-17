import express from 'express';

import service from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(service.getEntries());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const newEntry = service.addEntry(
    name, dateOfBirth, ssn, gender, occupation
  );

  res.json(newEntry);
});

export default router;
