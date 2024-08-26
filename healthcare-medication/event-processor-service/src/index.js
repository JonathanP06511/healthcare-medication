const KafkaConsumer = require('./kafkaConsumer');
const EventController = require('./eventController');
require('dotenv').config();

const kafkaConsumer = new KafkaConsumer();
const eventController = new EventController(kafkaConsumer);

eventController.start().catch(console.error);
