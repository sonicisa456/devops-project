\# DevOps Project - Query Tracker



\##  Descripción

Esta aplicación web permite registrar y consultar un historial de consultas realizadas por el usuario. Fue desarrollada como parte de un proyecto de DevOps integrando múltiples herramientas y tecnologías.



\---



\##  Arquitectura



Usuario → EC2 → Docker  

         ├── Frontend (Nginx)  

         ├── Backend (Node.js + Express)  

         └── Base de datos (MongoDB)



\---



\##  Tecnologías utilizadas



\- Node.js

\- Express

\- MongoDB

\- Docker \& Docker Compose

\- AWS EC2

\- AWS S3

\- AWS CloudFormation

\- Bash scripting

\- Git \& GitHub



\---



\##  Ejecución local



```bash

docker-compose up --build



\##  Despliegue en EC2



bash deploy.sh



La aplicación estará disponible en:



http://<IP\_PUBLICA>:8080



\---



\## 📊 Puertos utilizados



\- 8080 → Frontend

\- 3000 → Backend

\- 27017 → MongoDB



\---



\## 📁 Logs



Los logs se generan en:





backend/logs/app.log





Ejemplo:





\[2026-04-10] INFO: Nueva consulta guardada



\---



\## 🔄 Automatización



Se implementó cron para:



\- Encender la aplicación automáticamente

\- Apagar la aplicación en horarios definidos



\---



\## ☁️ Uso de S3



Se utilizó un bucket de S3 para almacenar logs generados por la aplicación.



\---



\## 🧠 Reflexión



\### ¿Por qué Docker?

Permite ejecutar la aplicación en cualquier entorno sin problemas de compatibilidad.



\### ¿Ventajas de CloudFormation?

Permite crear infraestructura de manera automática y reproducible.



\### ¿Por qué no usar 0.0.0.0/0?

Porque expone la aplicación a todo internet, lo que representa un riesgo de seguridad.



\### ¿Qué automatizaría en el futuro?

Implementaría un pipeline CI/CD para automatizar pruebas y despliegues.



\---

