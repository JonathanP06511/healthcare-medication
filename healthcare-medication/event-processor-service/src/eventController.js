class EventController {
    constructor(kafkaConsumer) {
      this.kafkaConsumer = kafkaConsumer;
    }
  
    async start() {
      await this.kafkaConsumer.connect().catch(console.error);
    }
  }
  
  module.exports = EventController;
  