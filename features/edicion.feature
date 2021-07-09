# language: es
# encoding: utf-8

Característica: Edicion de elementos almacenados en la lista 

Antecedentes:
    Dado una lista con el par clave "clave" y valor "valor"

Escenario: Actualiza el valor de una clave existente en la lista
    Cuando se agrega la clave "clave" con el valor "nuevo_valor"
    Entonces si busco la clave "clave" obtengo el valor "nuevo_valor" actualizado

Escenario: Eliminar una elemento a partir de una clave
    Cuando se elimina la clave "clave"
    Entonces si se busca la clave "clave" se obtiene NaN 