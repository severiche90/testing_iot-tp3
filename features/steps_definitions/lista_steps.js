
/**  =============== REQUERIMIENTOS ==================
 
 1- La lista debe almacenar pares clave:valor.  
 2- Las claves almacenadas en la lista deben ser unicas.  
 3- Las claves son cadenas de texto.  
 4- Se debe poder recuperar un valor a partir de una clave. 
 5- Se debe poder actualizar el valor asociado a una clave. 
 6- Se debe poder borrar una pareja a partir de la clave
 7- se debe poder recuperar la cantidad de elementos almacenados en la lista
 8- Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.    
 
 */

const { Before, Given, When, Then} = require('@cucumber/cucumber')
const expect = require("chai").expect;
const assert = require("chai").assert;
const Lista = require("../../src/lista.js");

let contexto = {};

Given('una lista vacia', function(){
    contexto.lista = new Lista();
});

/** Condicion de lista vacia */ 

Then('la lista tiene {int} elemento(s) almacenado(s)', function(cantidad){
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then('si busco la clave {string} no obtengo ningun valor', function(clave){
    expect(contexto.lista.find(clave)).to.be.NaN;
});

/** Condicion de agregar un elemento a la lista vacia */

When('agrego la clave {string} con el valor {string}', function(clave, valor){
    contexto.lista.add(clave, valor);
});

Then('la lista tiene {int} elementos(s) almacenados(s)', function(cantidad){
    expect(contexto.lista.count()).to.be.equal(cantidad);
});

Then('si busco la clave {string} obtengo el valor {string}', function(clave, valor){
    expect(contexto.lista.find(clave)).to.be.equal(valor);
});

/** Condicion de agregar una clave de tipo entero a la lista */

When('agrego la clave {int} con el valor {string}', function(clave, valor){
     contexto.lista.add(clave,valor);
});

Then('las lista no tiene elementos almacenados', function(){
    expect(contexto.lista.count()).to.be.equal(0);
});

Then('si busco la clave {int} obtengo el valor NaN', function(clave){
     expect(contexto.lista.find(clave)).to.be.NaN;
});

/** Actualiza el valor de una clave existente en la lista */

Given('una lista con el par clave {string} y valor {string}', function(clave, valor){
    contexto.lista = new Lista();
    contexto.lista.add(clave, valor);
});

When('se agrega la clave {string} con el valor {string}', function(clave, valor){
     contexto.lista.add(clave,valor);
});

Then('si busco la clave {string} obtengo el valor {string} actualizado', function(clave,valor){
     expect(contexto.lista.find(clave)).to.be.equal(valor);
});

/** Elimina un elemento de la lista dada una clave */

When('se elimina la clave {string}', function(clave){
     expect(contexto.lista.eliminarElemento(clave)).to.be.true;
});

Then('si se busca la clave {string} se obtiene NaN', function(clave){
     expect(contexto.lista.find(clave)).to.be.NaN;
});

/** Verifica que la lista de claves este ordenada */

Given('una lista con el par clave {string} y el valor {string}', function(clave,valor){
     contexto.lista= new Lista();
     contexto.lista.add(clave,valor);
});

When('se le agrega la clave {string} con el valor {string}', function(clave, valor){
     contexto.lista.add(clave, valor);
});

Then('se obtiene el siguiente orden de claves en la lista', function(vector){
     vector = vector.rawTable;
     assert.deepEqual(contexto.lista.mostrarClaves(), vector[0]);
});




