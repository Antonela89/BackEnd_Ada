-- ORDER BY
-- 1. Mostrar cinco productos más caros y su nombre ordenado en forma alfabética
-- • Tablas: Product
-- • Campos: Name, ListPrice
SELECT Name, ListPrice
FROM Product
ORDER BY ListPrice DESC, Name ASC
LIMIT 5;

-- 2. Mostrar las personas ordenadas primero por su apellido y luego por su nombre
-- • Tablas: Contact
-- • Campos: Firstname, Lastname
SELECT Firstname, Lastname
FROM Contact
ORDER BY Lastname, Firstname;

-- OPERADORES & JOINS
-- 1. Mostrar el nombre concatenado con el apellido de las personas cuyo apellido sea johnson
-- • Tablas: Contact
-- • Campos: FirstName, LastName
SELECT CONCAT(FirstName, ' ', LastName) AS NombreCompleto
FROM Contact
WHERE LastName = 'johnson';

-- 2. Mostrar todos los productos cuyo precio sea inferior a 150$ de color rojo o cuyo precio sea mayor a 500$ de color negro
-- • Tablas: Product
-- • Campos: ListPrice, Color
SELECT Name, ListPrice, Color
FROM Product
WHERE (ListPrice < 150 AND Color = 'Red') OR (ListPrice > 500 AND Color = 'Black');

-- 3. Mostrar los empleados que tienen más de 90 horas de vacaciones
-- • Tablas: Employee
-- • Campos: VacationHours, EmployeeID 
SELECT EmployeeID, VacationHours
FROM Employee
WHERE VacationHours > 90;

-- 4. Mostrar el nombre, precio y precio con iva de los productos con precio distinto de cero
-- • Tablas: Product
-- • Campos: Name, ListPrice
SELECT Name, ListPrice, ListPrice * 1.21 AS PrecioConIVA
FROM Product
WHERE ListPrice > 0;

-- 5. Mostrar precio y nombre de los productos 776, 777, 778
-- • Tablas: Product
-- • Campos: ProductID, Name, ListPrice
SELECT ProductID, Name, ListPrice
FROM Product
WHERE ProductID IN (776, 777, 778);

-- FUNCIONES DE AGREGACIÓN
-- 1. Mostrar la fecha más reciente de venta
-- • Tablas: SalesOrderHeader
-- • Campos: OrderDate
SELECT MAX(OrderDate) AS FechaMasReciente
FROM SalesOrderHeader;

-- 2. Mostrar el precio más barato de todas las bicicletas
-- • Tablas: Product
-- • Campos: ListPrice, Name
SELECT MIN(ListPrice) AS PrecioMasBarato
FROM Product
WHERE Name LIKE '%Bike%';

-- 3. Mostrar la cantidad y el total vendido por productos
-- • Tablas: SalesOrderDetail
-- • Campos: LineTotal
SELECT ProductID, SUM(OrderQty) AS CantidadTotal, SUM(LineTotal) AS TotalVendido
FROM SalesOrderDetail
GROUP BY ProductID; 

-- GROUP BY
-- 1. Mostrar los productos y la cantidad total vendida de cada uno de ellos
-- • Tablas: SalesOrderDetail
-- • Campos: ProductID, OrderQty
SELECT ProductID, SUM(OrderQty) AS CantidadVendida
FROM SalesOrderDetail
GROUP BY ProductID;

-- 2. Mostrar el código de subcategoría y el precio del producto más barato de cada una de ellas
-- • Tablas: Product
-- • Campos: ProductSubcategoryID, ListPrice
SELECT ProductSubcategoryID, MIN(ListPrice) AS PrecioMasBarato
FROM Product
GROUP BY ProductSubcategoryID;

-- HAVING
-- 1. Mostrar la cantidad de facturas que vendieron más de 20 unidades.
-- • Tablas: Sales.SalesOrderDetail
-- • Campos: SalesOrderID, OrderQty
SELECT SalesOrderID, SUM(OrderQty) AS CantidadVendida
FROM SalesOrderDetail
GROUP BY SalesOrderID
HAVING SUM(OrderQty) > 20;

-- 2. Mostrar todas las facturas realizadas y el total facturado de cada una de ellas ordenado por número de factura pero sólo de aquellas órdenes superen un total de $10.000
-- • Tablas: SalesOrderDetail
-- • Campos: SalesOrderID, LineTotal
SELECT SalesOrderID, SUM(LineTotal) AS TotalFacturado
FROM SalesOrderDetail
GROUP BY SalesOrderID
HAVING SUM(LineTotal) > 10000
ORDER BY SalesOrderID;

-- JOINS
-- 1. Mostrar el código de logueo, número de territorio y sueldo básico de los vendedores
-- • Tablas: Employee, SalesPerson
-- • Campos: LoginID, TerritoryID, Bonus, EmployeeID
SELECT e.LoginID, sp.TerritoryID, sp.Bonus, e.EmployeeID
FROM Employee e
JOIN SalesPerson sp ON e.EmployeeID = sp.EmployeeID;


-- 2. Mostrar los productos que sean ruedas
-- • Tablas: Product, ProductSubcategory
-- • Campos: Name, ProductSubcategoryID
SELECT p.Name, p.ProductSubcategoryID
FROM Product p
JOIN ProductSubcategory ps ON p.ProductSubcategoryID = ps.ProductSubcategoryID
WHERE p.Name LIKE '%Wheel%';

-- 3. Mostrar los nombres de los productos que no son bicicletas
-- • Tablas: Product, ProductSubcategory
-- • Campos: Name, ProductSubcategoryID
SELECT p.Name, p.ProductSubcategoryID
FROM Product p
JOIN ProductSubcategory ps ON p.ProductSubcategoryID = ps.ProductSubcategoryID
WHERE p.Name NOT LIKE '%Bike%';

-- 4. Mostrar los empleados que también son vendedores
-- • Tablas: Employee, SalesPerson
-- • Campos: EmployeeID
SELECT e.EmployeeID, c.LastName, c.FirstName
FROM Employee e
JOIN SalesPerson sp ON e.EmployeeID = sp.SalesPersonID;
JOIN Contact c ON e.ContactID = c.ContactID;

-- 5. Mostrar los empleados ordenados alfabéticamente por apellido y por nombre
-- • Tablas: Employee, SalesPerson
-- • Campos: EmployeeID, LastName, FirstName
SELECT e.EmployeeID, c.LastName, c.FirstName
FROM Employee e
JOIN Contact c ON e.ContactID = c.ContactID
ORDER BY c.LastName, c.FirstName;  