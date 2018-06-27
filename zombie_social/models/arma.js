var mongoose = require("mongoose");


var armaSchema = mongoose.Schema({
    nombre: {type: String,required: true, unique: true},
    descripcion: {type: String},
    fuerza: {type: Number},
    categoria: {type: String},
    municiones: {type: Boolean},    
});

var donothing = () =>{

}

armaSchema.methods.nom = function(){
    return this.nombre;
}
var arma = mongoose.model("Arma", armaSchema);
module.exports = arma;

armaSchema.pre("save",function(done) {
    var arma = this;
    if(!arma.municiones){
        arma.municiones = false;
        return done();
    }
    if(arma.municiones){
        return done();
    }
});
