# erikugartelopez.com

Web de autor + cuaderno con CMS.

## Setup (una sola vez)

### 1. Crear repositorio en GitHub
- Ve a https://github.com/new
- Nombre: `erikugartelopez.com`
- Público o privado (da igual)
- NO marques "Add a README"
- Crea el repositorio

### 2. Subir archivos
En la página del repositorio vacío, haz clic en **"uploading an existing file"** y arrastra TODOS los archivos y carpetas de este proyecto. Commit con mensaje "Initial commit".

### 3. Conectar Netlify a GitHub
- Ve a https://app.netlify.com
- "Add new site" → "Import an existing project" → GitHub
- Selecciona el repositorio `erikugartelopez.com`
- Build command: `npm install && npx @11ty/eleventy`
- Publish directory: `_site`
- Deploy

### 4. Configurar dominio
- En Netlify: Site settings → Domain management → Add custom domain → `erikugartelopez.com`

### 5. Activar CMS
- En Netlify: Site settings → Identity → Enable Identity
- Bajo Identity → Registration: cambia a "Invite only"
- Identity → Services → Git Gateway → Enable
- Identity → Invite users → invítate a ti mismo (ugarte.erik@gmail.com)
- Recibirás un email de confirmación. Acéptalo.

### 6. Entrar al CMS
- Ve a https://erikugartelopez.com/admin
- Login con tu email
- Ya puedes crear posts

## Publicar un post nuevo

1. Ve a erikugartelopez.com/admin
2. "New Cuaderno"
3. Rellena título (ES + EN), fecha, extracto (ES + EN), contenido (ES + EN)
4. "Publish"
5. Netlify reconstruye el sitio automáticamente (~30 segundos)
6. El post aparece en el cuaderno y en la home

## Estructura

```
src/
  index.njk              → Home
  style.css              → Estilos
  cuaderno/
    cuaderno-index.njk   → Índice del cuaderno
    *.md                 → Posts (el CMS crea estos)
  admin/
    index.html           → Panel CMS
    config.yml           → Configuración del CMS
  _includes/             → Plantillas compartidas
  _data/
    upcoming.json        → Posts "Próximamente"
```
