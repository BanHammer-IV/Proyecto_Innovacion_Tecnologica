/*TABLA PROVEEDORES*/
CREATE TABLE Proveedores (
ID_Proveedor int,
Nombre_Empresa VARCHAR(50),
Lista_Productos VARCHAR(50)
PRIMARY KEY (ID_Proveedor)
)

INSERT INTO Proveedores VALUES (1, 'Bimbo', '1, 3, 7' )
INSERT INTO Proveedores VALUES (2, 'La Costeña', '2, 6, 10' )
INSERT INTO Proveedores VALUES (3, 'Sabritas', '4, 5, 8' )
INSERT INTO Proveedores VALUES (4, 'Coca-Cola', '9, 12, 20' )
INSERT INTO Proveedores VALUES (5, 'Lala', '11, 14, 17' )
INSERT INTO Proveedores VALUES (6, 'PepsiCo', '13, 15, 16' )
INSERT INTO Proveedores VALUES (7, 'Nestlé', '18, 30, 23' )
INSERT INTO Proveedores VALUES (8, 'Gamesa', '19, 22, 25' )
INSERT INTO Proveedores VALUES (9, 'Herdez', '21, 24, 29' )
INSERT INTO Proveedores VALUES (10, 'Dulces de la Rosa', '26, 27, 28' )

SELECT * FROM Proveedores

/*TABLA PRODUCTOS*/
CREATE TABLE Productos(
ID_Producto int not null,
Nombre_Producto VARCHAR(50) not null, 
Existencias INT null, 
Precio FLOAT not null,
ID_Proveedor int FOREIGN KEY  REFERENCES Proveedores (ID_Proveedor),
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