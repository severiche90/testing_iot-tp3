module.exports = class Lista {

    #elementos;

    constructor() {

        this.#elementos = [];
    }
    
    /** metodo que devuelve la cantidad de elementos de la lista */
    count() {

        return this.#elementos.length;
    }

    /** metodo que dada una clave devuelve su valor correspondiente, y ademas nos indica si la lista esta vacia */
    find(clave) {

        if(this.count()!= 0){

            var index = this.buscarClave(clave);

            if(isNaN(index)){
               
                return NaN;

            } else{

              return this.#elementos[index].valor;  
            }

        }else{

            return NaN; 
        }
    }
    
    /** metodo que agrega pares clave:valor a la lista, y si la clave existe actualiza su valor */
    add(clave, valor) {

       if(typeof clave == "string"){

          var index = this.buscarClave(clave);

          if (isNaN(index)){

           this.#elementos.push({clave, valor});
        
          }else{

           this.#elementos[index].valor = valor;
          }

       } else {
         return NaN;   
       }  
    }

    /** metodo que detecta si una clave existe en la lista */
    buscarClave(clave){
     
        for(var i=0; i<this.#elementos.length; i++){
            
            if(this.#elementos[i].clave == clave){
              
                return i;
            }
        }
        
        return NaN;
    }

    /** meotodo que elimina un elemento dado una clave */
    eliminarElemento(clave){
        
        var index = this.buscarClave(clave);

        if(isNaN(index)){
            
            return index;
        
        }else{

            this.#elementos.splice(index,1);
            return true;
        }
       
    }
    
    /** metodo que devuelve un array de claves ordenadas alfabeticamente */
    mostrarClaves(){
       
        var arrayDeClaves = [];

        for(var i=0; i<this.#elementos.length; i++){
            arrayDeClaves[i] = this.#elementos[i].clave; 
        }
        return arrayDeClaves.sort();  
    }
};