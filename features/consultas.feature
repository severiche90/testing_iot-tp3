# language: es
# encoding: utf-8

Característica: consulta informacion de los elementos de la lista

Antecedentes: 
     Dado una lista con el par clave "casa" y el valor "habitacion"

Escenario: consulta la lista de claves 
     Cuando se le agrega la clave "arbol" con el valor "plaza"
     Entonces se obtiene el siguiente orden de claves en la lista
     | arbol | casa |