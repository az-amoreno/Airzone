#Ejercicio 1:

a = float(input("a = "))
b=float(input("b = "))
c=float(input("c = "))

ej1 = (a**3 * (b**2 - (2*a*c)))/ (2*b)
print(ej1)

#Ejercicio 2:

a = 2
b= 5

# ((3+5x8)<3 and ((-6/3 x 4)+2<2))or(a>b))

operacion = ((3+5*8)<3 and ((-6/3*4)+2<2)) or (a>b)
# (3+40)<3 and (((-2)*4)+2<2)) or (false) 
# (43 < 3 and ((-8+2<2))) or false
# (false and true) or false
# false or false
# false

print(operacion)

# Ejercicio 3:

'''
Hacer un programa para intercambiar el valor de 2 variables.

Por ejemplo:
a=10        a=5
        => 
b=5         b=10
'''

a=10
b=5

print()
print(f"La variable a vale {a} y la b {b}")
usuario = input("¿Desea itercambiar sus valores?: ").upper()
print()
 
if usuario == "SI" or usuario == "SÍ":
    a , b = b , a

    print(f"Ahora la variable 'a' vale {a} y la variable 'b' vale {b}")

else:
    print("No se han realizado cambios")

# Ejercicio 4:

'''
Hacer un programa para ingresar el radio de un círculo y se reporte su área y la longitud de la circunferencia

área = PI * r2
longitud = 2*PI+r
'''
print()
print("A continuación se le va a solicitar el radio de un círculo y se calculará su área y longitud")
print()
radio = float(input("Ingrese el radio del círculo: "))
print()

import math

pi = math.pi

area = pi * radio**2 
longitud = 2*pi*radio

print(f"El área del círculo es igual a {area:.3f}")
print(f"La longitud del círculo es igual a {longitud:.3f}")

# Ejercicio 5:

'''
Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto 
 deberá pagar finalmente por su compra.
'''

print("A continuación se le van a mostrar los productos existentes numerados.\nPara comprar un prodcucto debe ingresar su número")
print("Puede comprar los siguientes productos:")
print("1.Leche (0.90€")
print("2.Arroz (1.20€")
print("3.Canela (1.50€")
print("4.Limón (2.20€/kg)")

usuario = 1.2

while usuario>=1 and usuario <= 4 :
    usuario = int(input("Seleccione un producto"))
