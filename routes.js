const express = require('express');
const app = express();

const { usuarios } = require('./app.js');//console.log(usuarios); usuarios correctamente importado 

//usuarios.map((usuario=>console.log(usuario.nombre)));
//me devuelve todos los nombres de los streetfighters


//Hago un bucle, creo una ruta por cada elemento de usuarios con app.get la ruta será
// /usuario/nombredelusuario 


 usuarios.map((usuario=>app.get(`/usuario/${usuario.nombre}` ,
 (req,res)=>{res.send(`<h1>${usuario.nombre}</h1>
<p>Nombre:${usuario.nombre}</p>
<p>Edad: ${usuario.edad}</p>
<p>Procedencia: ${usuario.lugarProcedencia}</p>`
);})))


//Logica para que se pueda crear un enlace de forma escalable por cada luchador de streefighter
//si lo quiero aplicar a todas las pagina tendría que aplicarlo como middleware más que como routes.js
usuarios.map((usuario=>app.post("/"),(req,res)=>
{`<a href=`/usuario/${usuario.nombre}`> ${usuario.nombre} </a>`}))

//Que diferencia hay entre app.get y app.post?