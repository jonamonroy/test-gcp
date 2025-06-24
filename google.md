OPCION A MANO

# CREACION DE LOS RECURSOS DE GOOGLE CLOUD

1. Este comando asigna al servicio de cuenta predeterminado el rol necesario (roles/run.builder) para construir y desplegar aplicaciones en Cloud Run.
```bash
gcloud projects add-iam-policy-binding PROJECT_ID --member=serviceAccount:PROJECT_NUMBER-compute@developer.gserviceaccount.com --role=roles/run.builder

```

2. Crear un repositorio privado en Google Artifact Registry llamado node-exporter

```bash
gcloud artifacts repositories create node-exporter --repository-format=docker --location=us-central1 --description="Repositorio para imágenes de contenedores"

```
# CREACION Y SUBIDA DE IMAGEN DOCKER
1. Se construye una imagen Docker localmente, etiquetándola para el repositorio de Artifact Registry usando el Dockerfile.
```bash
docker build -t us-central1-docker.pkg.dev/[PROJECT-ID]/[REPO]/[IMAGE]:latest .

```

2. Se sube la imagen previamente construida al repositorio de Artifact Registry.

```bash
docker push us-central1-docker.pkg.dev/[PROJECT-ID]/[REPO]/[IMAGE]:latest
```

2. Se despliega el servicio en Cloud Run utilizando la imagen almacenada en Artifact Registry. La opción --allow-unauthenticated permite el acceso público.

```bash
gcloud run deploy servicea --image=us-central1-docker.pkg.dev/[PROJECT-ID]/[REPO]/[IMAGE]:latest --region=us-central1 --platform=managed --allow-unauthenticated


```
