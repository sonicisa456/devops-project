#!/bin/bash

echo "Clonando repositorio..."
git clone https://github.com/tu-usuario/tu-repo.git app

cd app

echo "Construyendo contenedores..."
docker-compose build

echo "Levantando aplicación..."
docker-compose up -d

echo "Aplicación desplegada"