# 🧪 Prueba Técnica Backend - PGO

¡Hola! ¿Qué tal?

Hemos preparado esta pequeña prueba técnica para ver cómo te desenvuelves con NestJS, TypeScript y algunos principios clave de desarrollo backend. No es nada complicado ni rebuscado, simplemente queremos ver tu forma de trabajar y tu lógica al resolver tareas comunes.

---

## ✅ ¿Qué tienes que hacer?

Desarrolla una pequeña API REST para gestionar tareas (ToDo List). Debe incluir:

### Requisitos mínimos:

- Rutas en el controlador:
  - `GET /tasks`: devuelve todas las tareas
  - `POST /tasks`: crea una nueva tarea
  - `GET /tasks/:id`: devuelve una tarea por su ID
  - `DELETE /tasks/:id`: borrar una tarea por su ID
- Servicio que gestione la lógica (almacenamiento en memoria)
- Cada tarea debe tener:
  - `id`: string o number
  - `title`: string
  - `description`: string
  - `isDone`: boolean

---

### 🧠 Extras (opcional, si tienes tiempo):

- Validaciones con `class-validator`
- Uso de DTOs
- Filtro: `GET /tasks?isDone=true`
- Control de errores por ejemplo, al intentar borrar una tarea que no existe, se devuelve un mensaje claro indicando que la tarea no fue encontrada
- Implementación de un método update que permite modificar los campos title, description e isDone de una tarea existente.
- Persistencia en un array simulado (sin base de datos)
- Tests unitarios básicos

---

## 🕒 Tiempo estimado

No hay un límite estricto de tiempo, pero debería tomarte entre **30 minutos y 1 hora**.

---

## 🔍 ¿Qué evaluaremos?

- Estructura del proyecto (servicios, controladores)
- Buen uso de TypeScript
- Limpieza y legibilidad del código
- Uso de buenas prácticas
- (Opcional) Uso de DTOs, validadores, y testing

---

## 🚀 ¿Cómo ejecutarlo? ##
Este proyecto utiliza Docker Compose para facilitar la puesta en marcha del entorno de desarrollo.
A continuación, se detallan los pasos necesarios para levantar el proyecto y comenzar a trabajar en el reto técnico.

## 🧰 Requisitos ##
Antes de comenzar, asegúrate de tener instalado en tu equipo:
- Docker
- Docker Compose

## 🧑‍💻 Pasos para ejecutar el proyecto ##
- Clona este repositorio:
```bash
$ git clone https://github.com/Kjaks/pgo-backend-challenge.git
```
- Accede a la carpeta del proyecto:
```bash
$ cd pgo-backend-challenge
```
- Levanta el entorno con Docker Compose:
```bash
$ docker-compose up --build
```
- La API estará disponible en:
```bash
$ http://localhost:3000
```

- Para comprobar que todo esta en orden visita el endpoint desde Postman:
```bash
$ http://localhost:3000/health
```
---

## 🚀 ¿Cómo entregarlo?
Puedes subirlo a un repositorio de GitHub, o enviar el proyecto comprimido por correo.

¡Gracias por tu tiempo y suerte! 🍀

PGO Team
