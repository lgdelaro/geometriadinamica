# Geometría dinámica · actividades

Tres actividades de GeoGebra que corren **en el navegador**, sin instalar nada.

| Página | Actividad |
|---|---|
| `panda.html` | Dibujo oculto: colocar los vértices de quince curvas |
| `corazon.html` | Dibujo oculto: corazón de diez vértices |
| `pendientes.html` | Descubriendo pendientes |

## Cómo publicarlo en GitHub Pages

1. Cree un repositorio nuevo y público, por ejemplo `geometriadinamica`.
2. **Upload files** → arrastre **el contenido de esta carpeta** (no la carpeta): los siete archivos
   deben quedar en la raíz del repositorio.
3. **Commit changes**.
4. Settings → Pages → *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main** · carpeta **/ (root)**
   - **Save**
5. Espere un minuto. La dirección será:

   `https://SU-USUARIO.github.io/geometriadinamica/`

## Reglas que no se pueden romper

- **Los `.ggb` tienen que estar en la misma carpeta que el HTML** que los llama, porque el HTML los
  pide por nombre: `"filename": "panda.ggb"`.
- **No abra los archivos con doble clic.** Con `file://` el navegador bloquea la carga del `.ggb` y el
  applet no aparece. Tiene que servirse por HTTP: GitHub Pages, o un servidor local.
- **El primer arranque tarda**: se descarga `deployggb.js` de geogebra.org y después el `.ggb`.

## Probar en la computadora antes de subir

```
cd sitio
node /ruta/a/srv.js "$(pwd)" 8100
```

y abrir `http://127.0.0.1:8100/`.

## Qué es esto y qué no

- **Funciona en sitio propio**: aquí el JavaScript del applet corre completo.
- **No funciona en geogebra.org**: desde la versión 839 el JavaScript de los materiales alojados allí
  está en un sandbox sin acceso a la página.
- **En Moodle funciona** con `mod_geogebra`, que embebe el applet en el propio servidor.
