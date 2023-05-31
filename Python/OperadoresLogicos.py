''''
and (Disyunción)
or (Conjunción)
not (Negación)
'''

'''
and

true = 1
false = 0

Se multiplican

Debe dar 1 como resultado para que sea verdadero

true * true = 1 (verdadero)
true * false = 0 (falso)
false * true = 0 (falso)
false * false = 0 (falso)

SI HAY UN FALSO, EL RESULTADO ES FALSO
'''

'''
or

true = 1
false = 0

Se suman

Debe dar 1 o más como resultado para que sea verdadero

true + true >= 1 (verdadero)
true + false >= 1 (verdadero)
false + true >= 1 (verdadero)
false + false = 0 (falso)

SI HAY UN VERDADERO EL RESULTADO ES VERDADERO
'''

'''
not

not(true) = false
not(false) = true 
'''

'''
PRIORIDAD DE LOS OPERADORES LÓGICOS

1.not
2.and
3.or
'''

a = 10
b = 14
c = 15
d = 10

resultado=((a>b)or(a<c))and((a==c) or (a>=b))
#            F      T         F         F
#                T                  F
#                        F

print(resultado)


a = 10
b = 15
c = 20

operacion = ((a<b) and (b<c))
print(operacion)

operacion = not((a<b) and (b<c))
print(operacion)
