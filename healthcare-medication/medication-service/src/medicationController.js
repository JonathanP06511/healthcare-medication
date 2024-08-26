const KafkaProducer = require('./kafkaProducer');

class MedicationController {
  constructor() {
    this.kafkaProducer = new KafkaProducer();
    this.kafkaProducer.connect().catch(console.error);
  }

  async addMedication(req, res) {
    const { medicationName, quantity } = req.body;

    try {
      await this.kafkaProducer.sendMessage('medications', { medicationName, quantity });
      res.status(201).json({ message: 'Medication event sent' });
    } catch (error) {
      console.error('Error sending medication event', error);
      res.status(500).json({ error: 'Failed to send medication event' });
    }
  }
}

module.exports = MedicationController;
