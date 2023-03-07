/*TABLA PROVEEDORES*/
CREATE TABLE Proveedores (
ID_Proveedor int,
Nombre_Empresa VARCHAR(50),
Lista_Productos VARCHAR(50),
PRIMARY KEY (ID_Proveedor)
)

INSERT INTO Proveedores VALUES (1, 'Bimbo', '1, 3, 7' );
INSERT INTO Proveedores VALUES (2, 'La Costeña', '2, 6, 10' );
INSERT INTO Proveedores VALUES (3, 'Sabritas', '4, 5, 8' );
INSERT INTO Proveedores VALUES (4, 'Coca-Cola', '9, 12, 20' );
INSERT INTO Proveedores VALUES (5, 'Lala', '11, 14, 17' );
INSERT INTO Proveedores VALUES (6, 'PepsiCo', '13, 15, 16' );
INSERT INTO Proveedores VALUES (7, 'Nestlé', '18, 30, 23' );
INSERT INTO Proveedores VALUES (8, 'Gamesa', '19, 22, 25' );
INSERT INTO Proveedores VALUES (9, 'Herdez', '21, 24, 29' );
INSERT INTO Proveedores VALUES (10, 'Dulces de la Rosa', '26, 27, 28' );

SELECT * FROM Proveedores

/*TABLA PRODUCTOS*/
CREATE TABLE Productos(
ID_Producto int not null,
Nombre_Producto VARCHAR(50) not null, 
Existencias INT null, 
Precio FLOAT not null,
ID_Proveedor int REFERENCES Proveedores (ID_Proveedor),
PRIMARY KEY (ID_Producto),
Descripcion VARCHAR (50)
);

INSERT INTO Productos VALUES (1,'Nito',35,18.00,1,'62 grs');
INSERT INTO Productos VALUES (2,'Chiles chipotles adobados',20,22.00,2,'Lata de 220 g');
INSERT INTO Productos VALUES (3,'Panque con pasas',26,23,1,'180 grs');
INSERT INTO Productos VALUES (4, 'Flamin hot',20,10,3,'Papas sabritas 45 g');
INSERT INTO Productos VALUES (5, 'Fritos', 15, 42,3,'Fritos Sabritas sabor sal y limon 265 g');
INSERT INTO Productos VALUES (6,'Rajas de jalapeño',26,16,2,'Lata de 121 g');
INSERT INTO Productos VALUES (7,'Donitas',40,29.50,1,'Donas Bimbo azucaradas multi pack 8 pzas 210 grs');
INSERT INTO Productos VALUES (8,'Cheetos',30, 6.50,3,'Botana Cheetos Poffs 31 g');
INSERT INTO Productos VALUES (9,'Coca cola sin azucar',35,13,4,'Refresco coca cola sin azucar 600 ml');
INSERT INTO Productos VALUES (10,'Elote dorado',15, 14.00,2,'Lata de 290 g');
INSERT INTO Productos VALUES (11,'Queso Lala manchego',16,89,5,'Paquete de 400 g');
INSERT INTO Productos VALUES (12,'Refresco Coca cola',28,17,4,'Botella de vidrio de 500 ml');
INSERT INTO Productos VALUES (13,'Pepsi 1.5 L',15,20,6,'Refresco Pepsi botella de 1.5 L');
INSERT INTO Productos VALUES (14,'Media Crema Lala',18,15,5,'Tetrapack 250 ml');
INSERT INTO Productos VALUES (15,'Pepsi 600 ml',19,14,6,'Refresco Pepsi 600 ml');
INSERT INTO Productos VALUES (16,'Pepsi Kick',12,14,6,'Refresco Pepsi Kick 500 ml');
INSERT INTO Productos VALUES (17,'Leche Lala entera 1L', 12,27,5,'Leche de 1 litro');
INSERT INTO Productos VALUES (18,'Media crema Nestle',24,16,7,'lata de 225 g');
INSERT INTO Productos VALUES (19,'Habaneras',15,16,8,'Galletas Gamesa Habaneras 117 g');
INSERT INTO Productos VALUES (20,'Coca Cola Botella de 3l',25,42,4,'Botella de 3 litros');
INSERT INTO Productos VALUES (21,'Champiñones',24,23,9,'Champiñones Herdez rebanados 186 g');
INSERT INTO Productos VALUES (22,'Marias',34,12.50,8,'Galletas Marias Gamesa 144 g');
INSERT INTO Productos VALUES (23,'Nestle Coffe Mate',18,34,7,'base de coco de 330 ml');
INSERT INTO Productos VALUES (24,'Atun',36,15.50,9,'Atun Herdez en agua 130 g');
INSERT INTO Productos VALUES (25,'Crackets',28,16.50,8,'Galletas Gamesa 135 g');
INSERT INTO Productos VALUES (26,'Pulparindo',20,7.50,10,'Dulce de tamarindo 28 g');
INSERT INTO Productos VALUES (27,'Mazapan',32,9.50,10,'Mazapan de La Rosa 21 g');
INSERT INTO Productos VALUES (28,'Paleta',35,3,10,'Paleta de La Rosa sabor Cereza 19 g');
INSERT INTO Productos VALUES (29,'Salsa',22,31,9,'Salsa Herdez casera 453 g');
INSERT INTO Productos VALUES (30,'Jugo sazonador Nestle Maggi',18,39.5,7,'100 ml');

select * from Productos


/* TABLA MOVIMIENTOS */
CREATE TABLE movimientos(
	ID_Vendedor int,
  	Ventas_Totales int,
  	Compras_Totales int,
  	Ganancias float,
  	ID_Ventas int,
  	ID_Compras int,
  	PRIMARY KEY (ID_Vendedor)
)

INSERT INTO movimientos VALUES (1, 7,0,350.50,1,2), (2, 5,0,25,2,3), (3, 4,2,75.90,4,5),
(4, 15,0,500,5,6), (5, 8,4,120.50,6,7), (6, 20,0,1250.25,7,8), 
(7, 1,0,10,8,9), (8, 7,0,7,9,10), (9, 10,0,685.75,10,11), (10, 0,10,0,11,12) 

SELECT * FROM Logins

/* TABLA VENTAS */
CREATE TABLE Ventas (
ID_Ventas int,
ID_Vendedor int,
Descripcion VARCHAR(400),
Fecha Date,
Total_Venta float,
PRIMARY KEY (ID_Ventas)
)

INSERT INTO ventas VALUES (1, 1, '1, 4; 3, 7; 4, 1; 7, 3', 06/12/2022, 150.43 );
INSERT INTO ventas VALUES (2, 1,'30, 2; 2, 10; 3, 9;4, 15;',06/12/2022, 200.89);
INSERT INTO ventas VALUES (3, 2,'15, 2; 3, 48; 16, 8;4, 10;',06/12/2022, 300.15);
INSERT INTO ventas VALUES (4, 2,'12, 11; 10, 9; 8, 7;6, 5;',06/12/2022, 168.50);
INSERT INTO ventas VALUES (5, 3,'29, 19; 15, 1; 20, 2; 25, 4;',06/12/2022, 95.5);
INSERT INTO ventas VALUES (6, 3,'18, 28; 16, 2; 21, 3; 26, 3;',06/12/2022, 110.5);
INSERT INTO ventas VALUES (7, 4,'7, 15; 17, 3; 22, 4; 27, 2;',06/12/2022, 416.5);
INSERT INTO ventas VALUES (8, 4,'2, 10; 18, 4; 23, 9; 28, 5;',06/12/2022, 91.10);
INSERT INTO ventas VALUES (9, 5,'3, 2; 19, 5; 24, 7; 29, 1;',06/12/2022, 50.5);
INSERT INTO ventas VALUES (10, 5, '26, 1; 28, 2;',06/12/2022, 15.1);

/* TABLA COMPRAS */
CREATE TABLE Compras (
ID_Compra int,
ID_Vendedor int,
Descripcion VARCHAR(250),
Fecha date,
Total_Compra float
)

INSERT INTO compras VALUES (1, 1, '2, 12; 3, 14; 4, 8; 5, 19;', 2022-12-07, 135.5);
INSERT INTO compras VALUES (2, 1, '6, 8; 7, 10; 8, 10; 9, 11;', 2022-12-07, 120.5);
INSERT INTO compras VALUES (3, 1, '10, 5; 11, 2; 12, 4; 13, 5;', 2022-12-07, 150.5);
INSERT INTO compras VALUES (4, 1, '1, 2', 2022-12-07, 231.5);
INSERT INTO compras VALUES (5, 2, '1, 4; 2, 5; 3, 4; 4, 3;', 2022-12-07, 214.5);
INSERT INTO compras VALUES (6, 2, '5, 1; 6, 2; 7, 2; 9, 1;', 2022-12-07, 220.5);
INSERT INTO compras VALUES (7, 2, '8, 1; 18, 2; 13, 4; 12, 2;', 2022-12-07, 200.4);
INSERT INTO compras VALUES (8, 3, '12, 1; 13, 2; 14, 1; 14, 1;', 2022-12-07, 95.8);
INSERT INTO compras VALUES (9, 4, '1, 1; 2, 1; 3, 2; 4, 1;', 2022-12-07, 100.5);
INSERT INTO compras VALUES (10, 5, '1, 2',  2022-12-07, 15.5);

/* TABLA Logins/Inicios de sesion/Registros */
CREATE TABLE Logins (
ID_Cliente int AUTO INCREMENT,
Nombre VARCHAR(50),
Apellido VARCHAR(50),
Correo VARCHAR(150),
Contrasenia VARCHAR(30)
)

INSERT INTO inventario VALUES (1, 1, '1, 4; 3, 7; 4, 1; 7, 3', 06/12/2022);
INSERT INTO inventario VALUES (2, 1,'30, 2; 2, 10; 3, 9;4, 15;',06/12/2022);
INSERT INTO inventario VALUES (3, 2,'15, 2; 3, 48; 16, 8;4, 10;',06/12/2022);
INSERT INTO inventario VALUES (4, 2,'12, 11; 10, 9; 8, 7;6, 5;',06/12/2022);
INSERT INTO inventario VALUES (5, 3,'29, 19; 15, 1; 20, 2; 25, 4;',06/12/2022);
INSERT INTO inventario VALUES (6, 3,'18, 28; 16, 2; 21, 3; 26, 3;',06/12/2022);
INSERT INTO inventario VALUES (7, 4,'7, 15; 17, 3; 22, 4; 27, 2;',06/12/2022);
INSERT INTO inventario VALUES (8, 4,'2, 10; 18, 4; 23, 9; 28, 5;',06/12/2022);
INSERT INTO inventario VALUES (9, 5,'3, 2; 19, 5; 24, 7; 29, 1;',06/12/2022);
INSERT INTO inventario VALUES (10, 5, '26, 1; 28, 2;',06/12/2022);