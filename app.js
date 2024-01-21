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
    res.send(`<h1>Home</h1>
    <h2>Lista de usuarios</h2>
     <ul> 
    ${usuarios
      .map((usuario) => `<li>ID: ${usuario.id} | Nombre: ${usuario.nombre} | 
      Edad: ${usuario.edad} Procedencia: ${usuario.lugarProcedencia}</li>`)
      .join('')}
      <a href="/usuarios"> Usuarios </a>
  `);
});

app.get('/usuarios', (req, res) => {
    res.send(`<h1>Usuarios</h1>
    <h2>Lista de usuarios</h2>
     <ul> 
    ${usuarios
      .map((usuario) => `<li>ID: ${usuario.id} | Nombre: ${usuario.nombre}</li>`)
      .join('')}
      <form action="/usuarios" method="post">
  <label for "nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" required>
  <label for "edad">Edad</label>
  <input type="text" id="edad" name="edad" required>
  <label for "lugarProcedencia">lugarProcedencia</label>
  <input type="text" id="edad" name="lugarProcedencia" required>
  <br>
<button type="submit">Agregar usuario </button>

</form>
      <a href="/"> Home </a>
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