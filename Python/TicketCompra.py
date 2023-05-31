print("A continuación se le van a mostrar los productos existentes numerados.\nPara comprar un producto debe ingresar su número")
print("Si quiere dejar de seleccionar productos, introduzca un número entero distinto al de los productos")
print("Puede comprar los siguientes productos:")
print("1. Leche (0.90€)")
print("2. Arroz (1.20€)")
print("3. Canela (1.50€)")
print("4. Limón (2.20€/kg)")

print()

precioLeche = 0.90
precioArroz = 1.20
precioCanela = 1.5
precioLimon = 2.20

subtotales = [0,0,0,0]

ticket = "Tu cesta está formada por: \n"

usuario = int(input("Seleccione un producto: "))
print()

productosSeleccionados = []

while usuario >= 1 and usuario <= 4:
    if usuario not in productosSeleccionados:
        productosSeleccionados.append(usuario)
        match usuario:
            case 1:
                nBotellas = int(input("¿Cuántas botellas de leche quieres?: "))
                print()
                subtotales[0] = precioLeche * nBotellas
                ticket += f"{nBotellas} leche = {subtotales[0]:.2f}€\n"

            case 2:
                nArroz = int(input("¿Cuántos paquetes de arroz quieres?: "))
                print()
                subtotales[1] = precioArroz * nArroz
                ticket += f"{nArroz} arroz = {subtotales[1]:.2f}€\n"

            case 3:
                nCanela = int(input("¿Cuántos tarros de canela quieres?: "))
                print()
                subtotales[2] = precioCanela * nCanela
                ticket += f"{nCanela} canela = {subtotales[2]:.2f}€\n"

            case 4:
                nLimon = float(input("¿Cuántos kilos de limones quieres?: "))
                print()
                subtotales[3] = precioLimon * nLimon
                ticket += f"{nLimon} limón = {subtotales[3]:.2f}€\n"
    else :
        print("Ya ha seleccionado este producto.\nPor favor seleccione otro distinto.")
        print()

    usuario = int(input("Seleccione un producto: "))
    print()

sinDescuento = sum(subtotales)
ticket += f"\nPVP: {sinDescuento:.2f}€\n"

conDescuento = sinDescuento * 0.85
ticket += f"Precio con descuento: {conDescuento:.2f}€\n"

print(ticket)
