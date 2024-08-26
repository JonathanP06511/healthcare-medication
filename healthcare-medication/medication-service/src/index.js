const express = require('express');
const MedicationController = require('./medicationController');
require('dotenv').config();

const app = express();
app.use(express.json());

const medicationController = new MedicationController();

app.post('/medications', (req, res) => medicationController.addMedication(req, res));

app.listen(3001, () => {
  console.log('Medication Service listening on port 3001');
});
