#!/bin/bash

echo "Actualizando proyecto..."
git pull

echo "Deteniendo contenedores..."
docker-compose down

echo "Construyendo y levantando..."
DOCKER_BUILDKIT=0 docker-compose up -d --build

echo "Aplicación desplegada correctamente"