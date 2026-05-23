const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json({
        status: 'online',
        mensagem: 'API funcionando'
    });
});


const PORT = 3000;

if (require.main === module ) {
    app.listen(PORT,()=> {
        console.log('servidor rodando na poreta ${PORT}');
    });
}

module.exports = app;
