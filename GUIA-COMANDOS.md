# 🚀 Guía Rápida de Comandos

## 📦 Docker - Comandos Esenciales

### Heroku
```bash
# Navegar a carpeta
cd heroku

# Construir imagen
docker build -t tuusuario/heroku-hello-world:latest .

# Ejecutar localmente
docker run -p 3000:3000 tuusuario/heroku-hello-world:latest

# Probar en navegador
# http://localhost:3000

# Login en DockerHub
docker login

# Subir imagen
docker push tuusuario/heroku-hello-world:latest
```

### Firebase
```bash
# Navegar a carpeta
cd firebase

# Construir imagen
docker build -t tuusuario/firebase-hello-world:latest .

# Ejecutar localmente
docker run -p 5000:5000 tuusuario/firebase-hello-world:latest

# Probar en navegador
# http://localhost:5000

# Subir imagen
docker push tuusuario/firebase-hello-world:latest
```

## 🔥 Firebase - Despliegue

```bash
# Instalar Firebase CLI (solo una vez)
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar proyecto (solo primera vez)
firebase init hosting

# Desplegar
firebase deploy

# Ver logs
firebase hosting:channel:list
```

## 🟣 Heroku - Despliegue

```bash
# Instalar Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login en Heroku
heroku login

# Crear app (nombre único)
heroku create nombre-app-heroku

# Login en Container Registry
heroku container:login

# Push del contenedor
heroku container:push web -a nombre-app-heroku

# Release del contenedor
heroku container:release web -a nombre-app-heroku

# Abrir app
heroku open -a nombre-app-heroku

# Ver logs
heroku logs --tail -a nombre-app-heroku
```

## 🌿 Git - Workflow

```bash
# Clonar repositorio
git clone <url-repo>
cd Service-Providers

# Ver ramas
git branch -a

# Cambiar a develop
git checkout develop

# Crear tu rama desde develop
git checkout -b feature/heroku-firebase

# Ver estado
git status

# Agregar archivos
git add .

# Commit
git commit -m "feat: implementar hello world en Heroku y Firebase"

# Push
git push origin feature/heroku-firebase

# Actualizar tu rama con develop
git pull origin develop

# O hacer merge
git merge origin/develop
```

## 🐳 Docker - Comandos Útiles

```bash
# Listar imágenes
docker images

# Listar contenedores activos
docker ps

# Listar todos los contenedores
docker ps -a

# Detener contenedor
docker stop <container-id>

# Eliminar contenedor
docker rm <container-id>

# Eliminar imagen
docker rmi <image-id>

# Ver logs de contenedor
docker logs <container-id>

# Limpiar todo (CUIDADO!)
docker system prune -a
```

## 📝 NPM - Comandos

```bash
# Instalar dependencias
npm install

# Instalar una dependencia
npm install express

# Instalar como dev dependency
npm install --save-dev firebase-tools

# Ejecutar script
npm start
npm run serve
npm run build

# Ver paquetes instalados
npm list
```

## 🔍 Verificaciones Importantes

### Antes de hacer Push
```bash
# Verificar que Docker funciona
docker --version

# Probar la imagen localmente
docker run -p 3000:3000 tuusuario/heroku-hello-world

# Verificar que Git está configurado
git config --list

# Verificar archivos a subir
git status
```

### Antes de hacer Deploy
```bash
# Heroku: Verificar login
heroku auth:whoami

# Firebase: Verificar login
firebase login:list

# Verificar que la imagen está en DockerHub
# https://hub.docker.com/r/tuusuario/heroku-hello-world
```

## 🎯 Checklist Rápido

### Para Heroku
- [ ] `package.json` creado
- [ ] `index.js` funcional
- [ ] `Dockerfile` creado
- [ ] `.dockerignore` configurado
- [ ] Imagen probada localmente
- [ ] Imagen en DockerHub
- [ ] App creada en Heroku
- [ ] Container desplegado
- [ ] README completo
- [ ] 3 capturas de pantalla

### Para Firebase
- [ ] `package.json` creado
- [ ] `firebase.json` configurado
- [ ] `public/index.html` creado
- [ ] `Dockerfile` creado
- [ ] `.dockerignore` configurado
- [ ] Imagen probada localmente
- [ ] Imagen en DockerHub
- [ ] Proyecto creado en Firebase Console
- [ ] Hosting desplegado
- [ ] README completo
- [ ] 3 capturas de pantalla

## 🆘 Solución de Problemas Comunes

### Docker no inicia
```bash
# Windows: Reiniciar Docker Desktop
# Verificar que está corriendo en la bandeja del sistema
```

### Puerto ya en uso
```bash
# Cambiar el puerto
docker run -p 8080:3000 imagen

# O detener el proceso que usa el puerto
# Windows: netstat -ano | findstr :3000
```

### Error de permisos en Windows
```powershell
# Ejecutar PowerShell como Administrador
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Git rechaza push
```bash
# Actualizar primero
git pull origin feature/heroku-firebase

# Resolver conflictos si hay
# Luego push
git push origin feature/heroku-firebase
```

### Firebase login no funciona
```bash
# Usar flag de reauth
firebase login --reauth

# O limpiar credenciales
firebase logout
firebase login
```

### Heroku no reconoce comandos
```bash
# Verificar instalación
heroku --version

# Reinstalar Heroku CLI si es necesario
```

## 📞 Links Rápidos

- **DockerHub**: https://hub.docker.com
- **Heroku Dashboard**: https://dashboard.heroku.com
- **Firebase Console**: https://console.firebase.google.com
- **GitHub Repo**: https://github.com/tu-usuario/Service-Providers

## 💡 Tips

1. **Siempre probar localmente antes de desplegar**
2. **Hacer commits frecuentes con mensajes claros**
3. **Documentar cada paso con capturas**
4. **Revisar logs cuando algo falla**
5. **Preguntar al equipo si tienes dudas**
6. **No tocar las carpetas de otros compañeros**
7. **Actualizar tu rama con develop regularmente**

---

**Recuerda**: Esta guía es una referencia rápida. Consulta los README específicos para instrucciones detalladas.
