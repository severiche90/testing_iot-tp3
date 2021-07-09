# language: es
# encoding: utf-8

Característica: ingreso de elementos a una lista vacia  

Antecedentes: 
    Dado una lista vacia

Escenario: Verificar el estado de una lista vacia
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor

Escenario: Agregar un elemento a una lista vacia
    Cuando agrego la clave "clave" con el valor "valor"
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "clave" obtengo el valor "valor" 

Escenario: Agregar una clave de tipo numerica a la lista
     Cuando agrego la clave 1 con el valor "valor"
     Entonces las lista no tiene elementos almacenados
     Y si busco la clave 1 obtengo el valor NaN

    


    

 