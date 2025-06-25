# OPCION 1: TODO A MANO

1. Nos logeamos en la terminal de Google CLI

```bash
gcloud auth login

```

2. Vinculamos nuestra seccion en a nuestro proyecto
   gcloud config set project eighth-saga-455617-g4

```bash
gcloud config set project eighth-saga-455617-g4

```

3. Verificamos la configuracion de la CLI

```bash
gcloud config list

```

4. Creamos el recurso artifacts registry

```bash
gcloud artifacts repositories create node-exporter --repository-format=docker --location=us-central1 --description="Repositorio para imagenes de docker"
```

5. Configurar el docker en la terminal de Google CLI

```bash
gcloud auth configure-docker [REGIÓN]-docker.pkg.dev
```

6. Creamos el dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3005

CMD ["npm", "start"]
```

7. build de la imagen

```bash
docker build -t us-central1-docker.pkg.dev/[PROJECT-ID]/[REPO]/[IMAGE] .
```

8. push de la imagen

```bash
docker push us-central1-docker.pkg.dev/[PROJECT-ID]/[REPO]/[IMAGE]
```

# Ejecutar el servicio en un cluster de GKE

1. para obtener el nombre de la cuenta de servicio del cluster

```bash
gcloud container clusters describe test-cluster --region=us-central1 --format="value(nodeConfig.serviceAccount)"
```

2. obtener numero del proyecto

```bash
gcloud projects describe [ID_PROYECTO] --format="value(projectNumber)"
```

955437416327-compute@developer.gserviceaccount.com

```bash
gcloud projects add-iam-policy-binding [ID_PROYECTO] --member="serviceAccount:[SERVICE_ACCOUNT]" --role="roles/artifactregistry.reader"
```

gcloud projects add-iam-policy-binding eighth-saga-455617-g4 --member="serviceAccount:955437416327-compute@developer.gserviceaccount.com" --role="roles/artifactregistry.reader"
