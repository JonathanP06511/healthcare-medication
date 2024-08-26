# Medication Service

El **Medication Service** es un microservicio que gestiona la información de medicamentos y publica eventos en Kafka cada vez que se realiza una operación de gestión de medicamentos, como agregar o actualizar un medicamento.

## Requisitos

- Node.js >= 14
- Kafka (configurado a través de Docker Compose)
- Docker (para ejecutar Kafka y otros servicios)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd medication-service