# API de Usuarios con Deno 🦕

API REST sencilla construida con **Deno** y **Oak**, que permite:

- Registro de usuarios
- Login con JWT
- Gestión de favoritos por usuario
- Autenticación mediante middleware

## Requisitos

- **Deno** v2 o superior  
  👉 https://deno.com/

## Instalación

Cloná el repositorio y ubicate en la carpeta del proyecto:

```bash
git clone https://github.com/Francormin/giffy.git
cd api
```

Creá un archivo .env en la raíz del proyecto con la clave usada para firmar los JWT:

```env
JWT_KEY=tu_clave_secreta
```

## Ejecutar el servidor

Modo desarrollo:

```bash
deno task dev
```

Modo producción:

```bash
deno task start
```

El servidor se levanta por defecto en:

```arduino
http://localhost:8080
```

## Endpoints principales

- `POST /register` – Registro de usuario
- `POST /login` – Login y obtención de JWT
- `GET /favs` – Obtener favoritos (auth)
- `POST /favs/:id` – Agregar favorito (auth)
- `DELETE /favs/:id` – Eliminar favorito (auth)

### Probar la API

El proyecto incluye un archivo `requests.example.http` compatible con la extensión **REST Client** de VS Code.

Copialo y renombralo a `requests.http` para usarlo localmente.
