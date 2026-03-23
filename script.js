// ================== PRODUCTOS ==================

const masvendidos = [
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
{nombre:"lattafa khamrah",precio:70000,notas:"perfume arabe dulce",imagen:"img/kamrah.png"},
]

const masculinos = [
{nombre:"Asad Elixir",precio:50000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
{nombre:"Liquid Burn",precio:80000,notas:"tabaco, vainilla y pimienta rosa ", imagen:"img/liquidburn.jpg"},
{nombre:"Coconut Leche",precio:99000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
{nombre:"asad elixir",precio:50000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
{nombre:"asad elixir",precio:50000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
{nombre:"asad elixir",precio:50000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
{nombre:"asad elixir",precio:50000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
{nombre:"asad elixir",precio:50000,notas:"tabaco, vainilla y pimienta rosa", imagen:"img/asad-elixir.png"},
]

const femeninos = [
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
{nombre:"coco nut",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/coconut.jpg"},
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
{nombre:"lattafa mayar",precio:56000,notas:"lichi, frambuesa y hojas de violeta; peonía, rosa blanca y jazmín; fondo de almizcle y vainilla", imagen:"img/mayar.png"},
]

const unisex = [
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
{nombre:"Amber Oud Gold Edition",precio:70000,notas:"limón, mandarina, cardamomo y pimienta rosa", imagen:"img/amberoud.png"},
]

// ================== CARRITO (LOCAL STORAGE) ==================

let carrito = JSON.parse(localStorage.getItem("carrito")) || {}

// ================== CREAR CATALOGO ==================

function crearCatalogo(lista,contenedor){

const div = document.getElementById(contenedor)
if(!div) return

div.innerHTML = ""

lista.forEach(item=>{
div.innerHTML += `
<div class="card">
<img src="${item.imagen}">
<h3>${item.nombre}</h3>
<div class="precio">$${item.precio}</div>

<button class="detalles" onclick="vernotas('${item.nombre}','${item.notas}','${item.imagen}')">
Ver notas
</button>

<button class="agregar" onclick="agregarCarrito('${item.nombre}',${item.precio},'${item.imagen}', this)">
    <span class="texto">Agregar al carrito</span>
    <span class="carrito-icono-btn">🛒</span>
</button>


</div>
`
})
}

// ================== CARGAR CATALOGOS ==================

crearCatalogo(masvendidos,"catalogo")
crearCatalogo(masculinos,"masculino")
crearCatalogo(femeninos,"femenino")
crearCatalogo(unisex,"uni")

// ================== AGREGAR AL CARRITO ==================

function agregarCarrito(nombre,precio,imagen, boton){

  // 🔥 animación carrito
    if(boton){
        boton.classList.add("animado")

        setTimeout(()=>{
        boton.classList.remove("animado")
        }, 600)
    }

    if(carrito[nombre]){
        carrito[nombre].cantidad++
    }else{
        carrito[nombre]={
        precio:precio,
        cantidad:1,
        imagen:imagen
        }
    }

    actualizarCarrito()
}

// ================== ACTUALIZAR CARRITO ==================

function actualizarCarrito(){

let lista=document.getElementById("listaCarrito")
let total=0
let contador=0

// CALCULAR SIEMPRE (aunque no exista el modal)
for(let item in carrito){
let datos=carrito[item]
total+=datos.precio*datos.cantidad
contador+=datos.cantidad
}

let contadorHTML = document.getElementById("contador")
if(contadorHTML){
    contadorHTML.innerText = contador

  // 🔥 animación rebote
    contadorHTML.classList.add("animado")

    setTimeout(()=>{
        contadorHTML.classList.remove("animado")
    }, 400)
}

// ACTUALIZAR MODAL (SI EXISTE)
if(lista){
lista.innerHTML=""

for(let item in carrito){
let datos=carrito[item]

lista.innerHTML+=`
<li class="item-carrito">
<img src="${datos.imagen}" class="img-carrito">
<div class="info">
${item} x${datos.cantidad}<br>
$${datos.precio * datos.cantidad}
</div>
</li>
`
}

document.getElementById("total").innerText=total
}

// GUARDAR SIEMPRE
localStorage.setItem("carrito", JSON.stringify(carrito))
}

// ================== MODAL CARRITO ==================

function abrirCarrito(){
document.getElementById("modalCarrito")?.classList.add("activo")
}

function cerrarCarrito(){
document.getElementById("modalCarrito")?.classList.remove("activo")
}

// ================== MODAL NOTAS ==================

function vernotas(nombre,texto,imagen){

document.getElementById("modalTitulo").innerText=nombre
document.getElementById("modalTexto").innerText=texto
document.getElementById("modalImagen").src=imagen

document.getElementById("modalnotas").classList.add("activo")
}

function cerrarnotas(){
document.getElementById("modalnotas").classList.remove("activo")
}

// ================== MENU ==================

function toggleMenu(){
const navbar = document.querySelector(".navbar")
navbar.classList.toggle("activo")
}

// ================== VACIAR ==================

function vaciarCarrito(){
carrito = {}
actualizarCarrito()
}

// ================== ENVIAR WHATSAPP ==================

function enviarPedido(){

let mensaje="Hola quiero pedir:\n"
let total=0

for(let item in carrito){
let datos=carrito[item]

mensaje+=`${item} x${datos.cantidad} - $${datos.precio*datos.cantidad}\n`
total+=datos.precio*datos.cantidad
}

mensaje+=`\nTotal: $${total}`

// COPIAR AL PORTAPAPELES
navigator.clipboard.writeText(mensaje)

// ABRIR INSTAGRAM
window.open(`https://ig.me/m/raschiani_perfumeria`)

alert("Pedido copiado. Pegalo en Instagram 💬")
}
// ================== CERRAR MODAL AL HACER CLICK AFUERA ==================

window.addEventListener("click", function(e){

    const modalCarrito = document.getElementById("modalCarrito")
    const modalNotas = document.getElementById("modalnotas")

    // cerrar carrito
    if(e.target === modalCarrito){
        cerrarCarrito()
    }

    // 🔥 cerrar notas
    if(e.target === modalNotas){
        cerrarnotas()
    }

})
document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        cerrarCarrito()
        cerrarnotas()
    }
})

// ================== INICIAR ==================

actualizarCarrito()