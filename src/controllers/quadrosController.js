const quadros = require('../models/quadros')

const getAllQuadros = (req, res) => {
    quadros.find(function (err, quadros) {
    err ? res.status(424).send({ message: err.message }) : res.status(200).send(quadros);
    })
};

const getPorNomeDoQuadro = (req, res) => {
    const parametros = req.query
    cursos.find(parametros, function(err, quadros){
    err ? res.status(424).send({ message: err.message }) :res.status(200).send(quadros);
    })
};

const getById = (req, res) => {
    const id = req.params.id;
    cursos.find({ id }, (err, quadros) => {
        if(err) {
            res.status(424).send({ message: err.message })
        } else {
           res.status(200).send(quadros)  
        }
    })
};

const getAutor = (req, res) => {
    const autor = req.params.autor;
    cursos.find({ autor }, (err, quadros) => {
        if(err) {
            res.status(424).send({ message: err.message })
        } else {
           res.status(200).send(quadros)  
        }
    })
};

const getQuadrosAVenda = (req, res) => {
    const venda = req.params.venda;
    cursos.find({ venda : true }, function (err, quadros) {
        if(err) {
            res.status(500).send({ message: err.message })
        } else{
           res.status(200).send(quadros);
        }     
    }) 
};

const getQuadrosPorMovimento = (req, res) => {
    const movimento = req.params.movimento;
    quadros.find({ movimento }, function (err, quadros) {
        if(err) {
            res.status(500).send({ message: err.message })
        } else{
           res.status(200).send(quadros);
        }     
    })    
};

const postQuadro = (req, res) => {
  let quadro = new quadros(req.body);
  quadro.save(err => {
    err ? res.status(424).send({ message: err.message }) 
    : res.status(201).send({
        status: true,
        message: 'Quadro incluído com sucesso'
      });
  });
};

const deleteQuadro = (req, res) => {
    const id = req.params.id;
    quadros.find({ id }, (err, quadros) => {
        if (quadro.length > 0) {
            quadros.deleteOne({ id }, err => {
                err ? res.status(424).send({ message: err.message }) : res.status(200).send({
                    status: true,
                    mensagem: 'Quadro excluído com sucesso'
                });
            });
        } else {
            res.status(404).send('Quadro não encontrado');
        };
    });
};

const putQuadro = (req, res) => {
    const id = req.params.id;
    quadro.updateMany({ id }, { $set: req.body }, function(err, quadros) {
        if(err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Quadro atualizado com sucesso!"})
        }
    })
};

module.exports = {
    getAllQuadros,
    getPorNomeDoQuadro,
    getById,
    getAutor,
    getQuadrosAVenda,
    getQuadrosPorMovimento,
    postQuadro,
    deleteQuadro,
    putQuadro
};