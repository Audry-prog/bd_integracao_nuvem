const mongoose = require('mongoose');

//Estrutura do seu model (atributos da sua entidade)
const cursosSchema = new mongoose.Schema({
    id: { type: Number },
    nomeDoQuadro: { type: String },
    autor: { type: String },
    ano: { type: Number },
    localDeExposicao: { type: String },
    movimento: { type: String },
    dimensoes: { type: String },
    tecnica: { type: String },
    venda: { type: Boolean },
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

//atribuindo o esquema a uma collection
//estou definindo o nome da collection que irei salvar no banco
const quadros = mongoose.model('quadros', quadrosSchema);

//exportar o model para ser utilizado
module.exports = quadros;