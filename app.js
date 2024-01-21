const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//http://localhost:3000/ utilizo esta ruta en el navegador para ver la parte visible

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

app.get('/', (req, res) => {
    res.send(`<a href="/"><h1> Home </h1></a>
    <a href="/usuarios"> Usuarios </a>
      <a href='/usuarios/:nombre'> Nombre </a>
    <h2>Lista de streetfighters</h2>
     <ul> 
    ${usuarios
      .map((usuario) => `<li>ID: ${usuario.id} | Nombre: ${usuario.nombre} | 
      Edad: ${usuario.edad} Procedencia: ${usuario.lugarProcedencia}</li>`)
      .join('')}
      
  `);
});

app.get('/usuarios', (req, res) => {
    res.send(`<a href="/"><h1> Usuarios </h1></a>
    <a href="/"> Home </a>
      <a href='/usuarios/:nombre'> Nombre </a>
    <h2>Lista de streetfighters</h2>
     <ul> 
    ${usuarios
      .map((usuario) => `<li>ID: ${usuario.id} | Nombre: ${usuario.nombre}</li>`)
      .join('')}
      <form action="/usuarios" method="post">
  <label for "nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" required>
  <label for "edad">Edad</label>
  <input type="text" id="edad" name="edad" required>
  <label for "lugarProcedencia">Procedencia</label>
  <input type="text" id="edad" name="lugarProcedencia" required>
  <br>
<button type="submit">Agregar usuario </button>

</form>
      
  `);
});

app.get('/usuarios/:nombre', (req, res) => {
    res.send(`<h1>Usuarios</h1>
    <a href="/"> Home </a>
    <h2>Lista de streetfighters</h2>
     <ul> 
    ${usuarios
      .map((usuario) => `<li> Nombre: ${usuario.nombre}</li>`)
      .join('')}
      
      `);
});

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre: req.body.nombre,
      edad: req.body.edad,
      lugarProcedencia:req.body.lugarProcedencia,
    };
    usuarios.push(nuevoUsuario);
    res.redirect('/');
  });


app.listen(3000, () => {
    console.log('express está escuchando en el puerto 3000');
  });