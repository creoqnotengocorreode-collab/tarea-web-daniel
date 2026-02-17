import express from 'express';
const app = express();

app.use(express.static('public')); // Esto hace que se vean tus HTML

app.listen(8080, () => {
    console.log("Servidor listo en http://localhost:8080");
});