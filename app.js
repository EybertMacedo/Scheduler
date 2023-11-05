const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//static css
app.use(express.static("public"));

// datos que seran utilizados en la aplicacion
var cursosAgregados = [];
const horasInicio = ["--","07:00","07:50","08:50","09:40","10:40","11:30","12:20","13:10","14:00","14:50","15:50","16:40","17:40","18:30","19:20","20:10"];
const horasFin = ["--","07:50","08:40","09:40","10:30","11:30","12:20","13:10","14:00","14:50","15:40","16:40","17:30","18:30","19:20","20:10","21:00"];
const dias = ["--","Lunes","Martes","Miercoles","Jueves","Viernes"];
var info = {horasInicio:horasInicio, horasFin:horasFin, dias:dias, cursosAgregados :cursosAgregados};

var anadirCurso = false;

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar body-parser para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('index', { imprimirHorarios: imprimirHorarios, 
        info, 
        anadirCurso
        });
});

// Ruta para mostrar los cursos agregados
app.get('/cursos', (req, res) => {
    res.json(cursosAgregados);
});

// Ruta para procesar la solicitud de agregar curso
app.post('/agregar-curso', (req, res) => {
    // Aquí puedes manejar la lógica para agregar el curso a la base de datos
    let nombreCurso = req.body.nombreCurso;
    let cantidadGrupos = req.body.cantidadGrupos;
    let horariosDeCurso = {};
    let curso = ({ nombreCurso: nombreCurso, cantidadGrupos: cantidadGrupos, horariosDeCurso : horariosDeCurso});
    cursosAgregados.push(curso);
    anadirCurso = true;

    res.redirect('/');
});

app.post('/detallar-curso', (req, res) => {
    // Aquí puedes manejar la lógica para agregar el curso a la base de datos
    temp = {};
    let cursoActual = cursosAgregados[cursosAgregados.length - 1];

    for (let data in req.body) {
        temp[data] = req.body[data];
    };    
    cursoActual.horariosDeCurso = temp;
    anadirCurso = false;

    res.redirect('/');
});

//funciones

function imprimirHorarios(){
    console.log("hola");
}

function calcularHorarios(){
    
}

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});




