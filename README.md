# Un universo amarillo para Celia

Proyecto independiente para el 21 de septiembre. HTML, CSS y JavaScript, sin instalación de dependencias. Entrada personal, portal dorado, jardín original, seis dedicatorias, música instrumental local y respuesta por WhatsApp. No es un inicio de sesión real: no pide contraseñas.

## Abrir en VS Code

1. Abre ESTA carpeta `flores-amarillas-celia` con Archivo → Abrir carpeta.
2. Instala Live Server (Ritwick Dey) si aún no lo tienes.
3. Haz clic derecho sobre `public/index.html` → Open with Live Server.

También puedes abrir `public/index.html` directamente en tu navegador. No necesitas npm install.

## Personalizar

- `public/config.js`: nombre, número de WhatsApp, frase inicial, seis dedicatorias y respuesta predeterminada.
- `public/index.html`: textos fijos y fecha.
- `public/styles.css`: colores, distribución y animaciones.
- `public/app.js`: interacciones.
- `public/assets/garden.png`: ilustración original generada para esta página.
- `public/assets/ambiente.wav`: ambiente instrumental original generado localmente. Se activa solo al pulsar el control de música.

WhatsApp está configurado para Perú (+51), número 987360594. El número forma parte del código público de la página. Al pulsar el enlace, WhatsApp abre el mensaje personalizado o la respuesta predeterminada; Celia debe pulsar Enviar. No hay envío automático, almacenamiento de respuestas ni rastreo. Google Fonts es opcional y tiene fuentes locales de respaldo.

## Crear OTRO repositorio en GitHub

En la terminal, dentro de ESTA carpeta:

```powershell
git init
git add .
git commit -m "Crear sorpresa de flores amarillas para Celia"
git branch -M main
```

Crea en GitHub un repositorio vacío llamado `flores-amarillas-celia` (sin README, licencia ni gitignore adicionales). Después:

```powershell
git remote add origin https://github.com/italoPEREZ-LAB/flores-amarillas-celia.git
git push -u origin main
```

Si Git muestra `dubious ownership`, añade SOLO la carpeta de este nuevo proyecto como confiable. Desde tu terminal de PowerShell situada en esta carpeta:

```powershell
git config --global --add safe.directory ((Get-Location).Path.Replace('\','/'))
```

Repite git add y git commit. No uses la carpeta ni el repositorio de la invitación anterior.

## Vercel

Importa el NUEVO repositorio en Vercel. Framework: Other. Root Directory: raíz. Sin Build Command. Output Directory: public (incluido en vercel.json). Pulsa Deploy y comprueba el enlace HTTPS de producción en incógnito antes de compartirlo.

Para subir futuras modificaciones:

```powershell
git add .
git commit -m "Actualizar flores amarillas"
git push
```

El proyecto se entrega localmente, listo para crear el repositorio y publicarlo. No contiene credenciales ni está vinculado al repositorio anterior.
