const { Kafka } = require('kafkajs');
require('dotenv').config();
const { MongoClient } = require('mongodb');

class KafkaConsumer {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'event-processor-service',
      brokers: [process.env.KAFKA_BROKER]
    });
    this.consumer = this.kafka.consumer({ groupId: 'medication-group' });
    this.mongoClient = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async connect() {
    await this.mongoClient.connect();
    this.db = this.mongoClient.db(process.env.MONGO_DB_NAME);
    console.log('Connected to MongoDB');

    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'medications' });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const { medicationName, quantity } = JSON.parse(message.value.toString());

        if (!medicationName || typeof quantity !== 'number') {
          console.error('Invalid message data', message.value.toString());
          return;
        }


        try {
          const result = await this.db.collection('medications').insertOne({ medicationName, quantity, timestamp: new Date() });
          console.log('Inserted into MongoDB', result.insertedId);
        } catch (error) {
          console.error('Error inserting into MongoDB', error);
        }
      }
    });
  }
}

module.exports = KafkaConsumer;
