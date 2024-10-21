"""Ejercicio 5: Escribe un programa que reciba una frase y un prefijo, y muestre todas las palabras que comienzan con ese prefijo."""

frase = input("Entrada: ")
prefijo = input("Prefijo: ")

palabras = frase.lower().split()
prefijo = prefijo.lower()

palabras_encontradas = []

for palabra in palabras:
    if palabra.startswith(prefijo):
        palabras_encontradas.append(palabra)

if palabras_encontradas:
    print('Las palabras que comienzan con', prefijo, 'son:', palabras_encontradas)
else:
    print('No hay palabras que comiencen con ', prefijo)

"""Ejercicio 6: Verificador de isogramas. Escribe un programa que reciba una palabra o frase y determine si es un isograma."""

"""Ejercicio 7: Escribir un programa que nos sirva de juego para adivinar un número. En primer lugar, el programa deberá solicitar el número a adivinar, y posteriormente irá pidiendo números indicando si es "mayor" o "menor" según sea mayor o menor con respecto al número a adivinar. El proceso termina cuando el usuario acierta.
Nota: También puede generar el número a adivinar de manera aleatoria utilizando la función random.
      import random
      numAdivinar = random.randrange(31) // Número aleatorio de tipo entero entre 0 y 30"""