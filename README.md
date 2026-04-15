#  DevOps Project - Query Tracker

## Descripción

Aplicación web tipo bitácora donde el usuario puede guardar y visualizar consultas.
El proyecto fue desplegado utilizando Docker y AWS EC2.

---

##  Tecnologías utilizadas

* Node.js (Backend)
* Express
* MongoDB
* Docker / Docker Compose
* Nginx (Frontend)
* AWS EC2

---

## Arquitectura

El sistema está compuesto por 3 servicios:

* **Frontend**: Servido con Nginx (puerto 8080)
* **Backend**: API REST en Node.js (puerto 3000)
* **Base de datos**: MongoDB (puerto 27017)

---

## Ejecución con Docker

```bash
docker-compose up -d --build
```

---

## Acceso

* Frontend:

```
http://localhost:8080
```

* Backend:

```
http://localhost:3000
```

---

## Despliegue en AWS EC2

1. Crear instancia EC2
2. Instalar Docker y Docker Compose
3. Clonar repositorio:

```bash
git clone <repo-url>
cd devops-project
```

4. Ejecutar:

```bash
docker-compose up -d --build
```

5. Acceder:

```
http://TU-IP:8080
```

---

## Base de datos

Se utilizó MongoDB con una base de datos llamada:

```
bitacora
```

Colección:

```
queries
```

---

## Configuración de red

Se habilitaron los siguientes puertos en AWS:

* 8080 → Frontend
* 3000 → Backend
* 27017 → MongoDB (opcional)

---

## Pruebas

* Inserción de datos desde frontend
* Verificación en MongoDB
* Pruebas con curl en backend

---

## Problemas resueltos

* Error de conexión entre frontend y backend
* Configuración de CORS
* Problemas con Docker BuildKit
* Configuración de puertos en AWS
* Persistencia de datos en MongoDB

---

## Autor

Proyecto desarrollado como práctica de DevOps


