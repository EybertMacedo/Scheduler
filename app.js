const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//static css
app.use(express.static("public"));

// Arreglo para almacenar los cursos agregados (simulando una base de datos)
const cursosAgregados = [];
const horasInicio = ["--","07:00","07:50","08:50","09:40","10:40","11:30","12:20","13:10","14:00","14:50","15:50","16:40","17:40","18:30","19:20","20:10"];
const horasFin = ["--","07:50","08:40","09:40","10:30","11:30","12:20","13:10","14:00","14:50","15:40","16:40","17:30","18:30","19:20","20:10","21:00"];
const dias = ["--","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

curso = [];
cantidadGrupos = 0;

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar body-parser para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
    res.render('index', { imprimirHorarios: imprimirHorarios, 
        cursos: cursosAgregados,
        curso: curso,
        cantidadGrupos: cantidadGrupos,
        dias: dias,
        horasInicio: horasInicio,
        horasFin: horasFin
        });
});

// Ruta para mostrar los cursos agregados
app.get('/cursos', (req, res) => {
    res.json(curso);
});

// Ruta para procesar la solicitud de agregar curso
app.post('/agregar-curso', (req, res) => {
    // Aquí puedes manejar la lógica para agregar el curso a la base de datos
    nombreCurso = req.body.nombreCurso;
    cantidadGrupos = req.body.cantidadGrupos;
    horariosDeCurso = [];

    curso.push({ nombreCurso: nombreCurso, cantidadGrupos: cantidadGrupos, horariosDeCurso : horariosDeCurso});
            
    res.redirect('/');
});

app.post('/detallar-curso', (req, res) => {
    // Aquí puedes manejar la lógica para agregar el curso a la base de datos
    temp = {};
    for (let data in req.body) {
        temp[data] = req.body[data];
    };    
    horariosDeCurso.push(temp);    
    cantidadGrupos = 0;

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




