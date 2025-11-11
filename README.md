# 🚀 Hello World - Heroku

## Descripción
Aplicación Node.js con Express desplegada en Heroku utilizando Docker. Proyecto de ejemplo para la investigación de proveedores de servicios en la nube.

## 🛠️ Tecnologías Utilizadas
- **Node.js 18**: Entorno de ejecución JavaScript
- **Express.js**: Framework web minimalista
- **Docker**: Contenedorización de la aplicación
- **Heroku**: Plataforma como servicio (PaaS)

## 📦 Imagen Docker
- **DockerHub**: `tuusuario/heroku-hello-world:latest`
- **Link**: https://hub.docker.com/r/tuusuario/heroku-hello-world

## 🌐 Demo en Vivo
- **URL**: https://nombre-app-heroku.herokuapp.com
- **API**: https://nombre-app-heroku.herokuapp.com/api/info

## 🔧 Instalación y Ejecución Local

### Opción 1: Con Docker (Recomendado)
```bash
# Descargar imagen desde DockerHub
docker pull tuusuario/heroku-hello-world:latest

# Ejecutar contenedor
docker run -p 3000:3000 tuusuario/heroku-hello-world:latest

# Visitar: http://localhost:3000
```

### Opción 2: Sin Docker
```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start

# Visitar: http://localhost:3000
```

### Opción 3: Construir imagen localmente
```bash
# Construir imagen
docker build -t heroku-hello-world .

# Ejecutar
docker run -p 3000:3000 heroku-hello-world
```

## 📋 Pasos de Despliegue

### 1. Preparar el Proyecto
```bash
# Clonar repositorio
git clone <url-repositorio>
cd Service-Providers/heroku
```

### 2. Construir Imagen Docker
```bash
# Construir imagen con tag
docker build -t tuusuario/heroku-hello-world:latest .

# Verificar imagen creada
docker images | grep heroku-hello-world
```

### 3. Probar Localmente
```bash
# Ejecutar contenedor
docker run -p 3000:3000 tuusuario/heroku-hello-world:latest

# Probar en navegador
# http://localhost:3000
```

### 4. Subir a DockerHub
```bash
# Login en DockerHub
docker login

# Subir imagen
docker push tuusuario/heroku-hello-world:latest

# Verificar en: https://hub.docker.com
```

### 5. Desplegar en Heroku

#### Prerrequisitos
- Instalar [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- Crear cuenta en [Heroku](https://heroku.com)
- **Verificar cuenta** agregando método de pago en https://heroku.com/verify
- Plan mínimo requerido: **Eco Dynos** ($5/mes)

#### Comandos de despliegue

##### Paso 1: Login y crear app
```bash
# Login en Heroku (abre navegador)
heroku login

# Crear aplicación (nombre único)
heroku create rorteg4-heroku-hello

# Configurar stack a container
heroku stack:set container -a rorteg4-heroku-hello

# Login en Heroku Container Registry
heroku container:login
```

##### Paso 2: Construir y subir imagen (IMPORTANTE)
```bash
# Navegar a la carpeta del proyecto
cd heroku

# Construir imagen SIN attestation (solución al error "unsupported")
# Esto es necesario para Docker Desktop en Windows
docker buildx build --provenance=false --platform linux/amd64 --load -t registry.heroku.com/rorteg4-heroku-hello/web .

# Push de la imagen a Heroku Registry
docker push registry.heroku.com/rorteg4-heroku-hello/web:latest
```

##### Paso 3: Release y verificar
```bash
# Liberar contenedor (desplegar)
heroku container:release web -a rorteg4-heroku-hello

# Abrir aplicación en navegador
heroku open -a rorteg4-heroku-hello

# Ver logs en tiempo real
heroku logs --tail -a rorteg4-heroku-hello

# Ver información de la app
heroku apps:info -a rorteg4-heroku-hello
```

#### 🔧 Solución al Error "unsupported" en Windows

Si obtienes el error `error from registry: unsupported` al hacer push, es porque Docker Desktop crea manifest lists con attestation. La solución es:

```bash
# Usar --provenance=false para evitar manifest lists
docker buildx build --provenance=false --platform linux/amd64 --load -t registry.heroku.com/tu-app/web .

# Luego hacer push
docker push registry.heroku.com/tu-app/web:latest
```

#### 📊 Verificar despliegue exitoso

```bash
# Ver URL de la aplicación
heroku apps:info -a rorteg4-heroku-hello | Select-String "Web URL"

# Verificar que el dyno está corriendo
heroku ps -a rorteg4-heroku-hello

# Ver logs recientes
heroku logs -n 100 -a rorteg4-heroku-hello
```

## 📸 Capturas de Pantalla

### 1. Imagen en DockerHub
![Repositorio en DockerHub](./screenshots/01-dockerhub.png)
*Imagen subida correctamente a DockerHub con tags y descripción*

### 2. Despliegue en Heroku
![Proceso de despliegue](./screenshots/02-heroku-deploy.png)
*Comandos ejecutados y logs del despliegue exitoso*

### 3. Aplicación Funcionando
![App en producción](./screenshots/03-app-running.png)
*Aplicación corriendo en Heroku con diseño responsivo*

## ✅ Ventajas de Heroku

1. **Facilidad de uso**: CLI intuitivo y documentación excelente
2. **Despliegue rápido**: De código a producción en minutos
3. **Escalamiento automático**: Ajuste de dynos según demanda
4. **Add-ons**: Integración con bases de datos, Redis, etc.
5. **SSL gratuito**: HTTPS automático para todas las apps
6. **Integración Git**: Deploy directo desde GitHub
7. **Rollback fácil**: Volver a versiones anteriores

## ❌ Desventajas de Heroku

1. **Costo**: Planes pagos pueden ser costosos
2. **Cold start**: Apps gratuitas duermen después de 30 min de inactividad
3. **Recursos limitados**: Plan gratuito con 512MB RAM
4. **Dependencia**: Vendor lock-in con Heroku
5. **Sin plan gratuito permanente**: Cambios en noviembre 2022

## 📚 Casos de Uso Ideales

- **Prototipos rápidos**: MVP y demos
- **APIs REST**: Backends de aplicaciones móviles
- **Aplicaciones web**: Full-stack con Node.js, Python, Ruby
- **Microservicios**: Arquitectura distribuida
- **Desarrollo ágil**: Iteraciones rápidas

## 🏢 Modelos de Servicio

**Heroku es PaaS (Platform as a Service)**

| Característica | Descripción |
|----------------|-------------|
| **Infraestructura** | Gestionada por Heroku |
| **Runtime** | Múltiples lenguajes soportados |
| **Escalamiento** | Horizontal (dynos) |
| **Despliegue** | Git, Docker, CLI |
| **Monitoreo** | Logs y métricas integradas |

## 🔍 Comparación con otros proveedores

| Proveedor | Tipo | Facilidad | Costo | Escalabilidad |
|-----------|------|-----------|-------|---------------|
| **Heroku** | PaaS | ⭐⭐⭐⭐⭐ | 💰💰💰 | ⭐⭐⭐⭐ |
| AWS | IaaS | ⭐⭐ | 💰💰 | ⭐⭐⭐⭐⭐ |
| Firebase | BaaS | ⭐⭐⭐⭐⭐ | 💰 | ⭐⭐⭐ |

## 🐛 Troubleshooting

### Error: "error from registry: unsupported" en Windows

**Causa**: Docker Desktop en Windows crea manifest lists con attestation que Heroku Container Registry no soporta.

**Solución**:
```bash
# Construir con --provenance=false
docker buildx build --provenance=false --platform linux/amd64 --load -t registry.heroku.com/tu-app/web .

# Push manual
docker push registry.heroku.com/tu-app/web:latest
```

### Error: "verification_required"

**Causa**: Heroku requiere verificación de cuenta para crear apps.

**Solución**:
1. Ve a https://heroku.com/verify
2. Agrega un método de pago
3. Suscríbete al plan Eco Dynos ($5/mes)

### Error: "This command is for Docker apps only"

**Causa**: El stack de la app no está configurado para contenedores.

**Solución**:
```bash
# Cambiar stack a container
heroku stack:set container -a nombre-app
```

### Error: Puerto no configurado
```bash
# Asegurarse de usar process.env.PORT
const PORT = process.env.PORT || 3000;
```

### Error: Slug size too large
```bash
# Usar .dockerignore para excluir node_modules
echo "node_modules" >> .dockerignore
```

### App no inicia o crashea
```bash
# Revisar logs en tiempo real
heroku logs --tail -a nombre-app

# Ver estado de dynos
heroku ps -a nombre-app

# Reiniciar dynos
heroku restart -a nombre-app
```

### Error: "Heroku CLI not found" en PowerShell

**Solución**:
```powershell
# Agregar Heroku al PATH temporalmente
$env:PATH += ";C:\Program Files\heroku\bin"

# O reiniciar PowerShell después de instalar
```

## 📖 Recursos Adicionales

- [Documentación oficial de Heroku](https://devcenter.heroku.com/)
- [Heroku Docker Deploy](https://devcenter.heroku.com/articles/container-registry-and-runtime)
- [Best practices Node.js en Heroku](https://devcenter.heroku.com/articles/node-best-practices)

## 👤 Autor

**[Roddy Ortega ]**
- Proyecto: Proveedores de Servicios en la Nube
- Materia: [Programación Distribuida]
- Fecha: Noviembre 2025

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.
