#!/bin/bash
# genera una página que embebe un .ggb con el patrón del foro
nombre="$1"; archivo="$2"; titulo="$3"; w="${4:-900}"; h="${5:-640}"
cat > "$nombre.html" <<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>$titulo</title>
<style>body{margin:0;font-family:Arial,Helvetica,sans-serif;background:#f6f6f4}
header{padding:10px 16px;background:#7a1f1f;color:#fff}
header a{color:#fff;font-size:14px}h1{font-size:16px;margin:0;padding:10px 16px}
#ggb-element{padding:0 16px 16px}</style>
</head>
<body>
<header><a href="index.html">← Todas las actividades</a></header>
<h1>$titulo</h1>
<div id="ggb-element"></div>
<script src="https://www.geogebra.org/apps/deployggb.js"></script>
<script>
var params = { "width": $w, "height": $h, "filename": "$archivo",
  "showToolBar": true, "showAlgebraInput": false, "showMenuBar": false,
  "enableRightClick": false, "language": "es" };
var applet = new GGBApplet(params, true);
window.addEventListener("load", function () { applet.inject("ggb-element"); });
</script>
</body>
</html>
HTML
echo "escrito $nombre.html"
