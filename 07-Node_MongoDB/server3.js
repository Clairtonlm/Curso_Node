//arquivo linkado com app fazendo import do app.js
// src/app.mjs
import server3 from './';
// rest of your code...

const port = process.env.PORT || 3000;






server3.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`);
})