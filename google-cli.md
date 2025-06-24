# OPCION 1: TODO A MANO

1. Nos logeamos en la terminal de Google CLI

```bash
gcloud auth login

```
2. Vinculamos nuestra seccion en a nuestro proyecto
gcloud config set project eighth-saga-455617-g4

```bash
gcloud auth login

```
3. Verificamos la configuracion de la CLI


```bash
gcloud config list

```

4. Creamos el recurso artifacts registry


```bash
gcloud artifacts repositories create node-exporter --repository-format=docker --location=us-central1 --description="Repositorio para imagenes de docker"
```

