//arquivo linkado com app fazendo import do app.js
// src/app.mjs
import app from './src/app.js';
// rest of your code...

const port = process.env.PORT || 3000;






app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})