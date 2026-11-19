/* Servidor mínimo para probar el sitio en local.
   Uso:  node srv.js [puerto]     (por omisión 8100)
   Abrir: http://127.0.0.1:8100/  */
const http = require('http'), fs = require('fs'), path = require('path');
const raiz = __dirname;
const puerto = Number(process.argv[2]) || 8100;
const tipos = { '.html': 'text/html; charset=utf-8', '.ggb': 'application/octet-stream',
                '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.md': 'text/plain; charset=utf-8' };
http.createServer((req, res) => {
  let ruta = decodeURIComponent(req.url.split('?')[0]);
  if (ruta === '/' || ruta === '') ruta = '/index.html';
  let p = path.join(raiz, ruta);
  if (!p.startsWith(raiz)) { res.writeHead(403); return res.end('fuera de la carpeta'); }
  fs.stat(p, (e, st) => {
    if (e || !st.isFile()) {
      if (fs.existsSync(p + '.html')) { p = p + '.html'; }
      else { res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'}); return res.end('no existe: ' + ruta); }
    }
    fs.readFile(p, (err, d) => {
      if (err) { res.writeHead(500); return res.end('error'); }
      res.writeHead(200, { 'Content-Type': tipos[path.extname(p)] || 'application/octet-stream',
                           'Access-Control-Allow-Origin': '*' });
      res.end(d);
      console.log('200', ruta);
    });
  });
}).listen(puerto, '127.0.0.1', () => {
  console.log('Sitio en http://127.0.0.1:' + puerto + '/');
});
