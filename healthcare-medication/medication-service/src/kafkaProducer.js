const { Kafka } = require('kafkajs');
require('dotenv').config();

class KafkaProducer {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'medication-service',
      brokers: [process.env.KAFKA_BROKER]
    });
    this.producer = this.kafka.producer();
  }

  async connect() {
    await this.producer.connect();
  }

  async sendMessage(topic, message) {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }]
    });
  }
}

module.exports = KafkaProducer;
