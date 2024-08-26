# Event Processor Service

El **Event Processor Service** consume eventos de Kafka relacionados con medicamentos y procesa la información, como almacenar datos en una base de datos MongoDB.

## Requisitos

- Node.js >= 14
- Kafka (configurado a través de Docker Compose)
- MongoDB (configurado a través de Docker Compose)
- Docker (para ejecutar Kafka y MongoDB)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd event-processor-service
