-- inner join from one table to two others by using two foreign keys in the Order Table
select (e.firstName || ' ' || e.lastName) as SoldBy
    ,o.id 
    ,o.CustomerId as Customer
    ,o.ShipCountry as ShippedTo
    , c.CompanyName as OrderedBy
from [order] as o
join employee as e 
    on o.EmployeeId = e.id
join customer as c 
    on o.CustomerId = c.id;

-- joining orders to order detail to product to get information from all tables
select o.id as OrderNumber
    , p.ProductName
    , od.Quantity
    , p.UnitPrice
    , *     
from [order] as o
join orderdetail as od
    on o.id = od.OrderId
join product as p
    on od.productId = p.id;

-- look mah, four tables joined!
select o.id as OrderNumber
    , p.ProductName
    , od.Quantity
    , p.UnitPrice as Price
    , (od.Quantity * p.UnitPrice) as LineTotal  
    , s.CompanyName  as SoldBy  
from [Order] as o
join OrderDetail as od
    on o.id = od.OrderId
join Product as p
    on od.productId = p.id
join Supplier as s
    on s.id = p.SupplierId;

-- all the customer, even if they have no orders
select c.id, c.companyName as Customer, o.Id 
from customer as c
left join [order] as o on c.id = o.customerId
order by c.id;

select * from [order]
-- delete from [order]
where customerId = 'ALFKI';