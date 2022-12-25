SELECT * FROM warehouse.stores;

-- Find the item that has minimum weight. 

select min(weight) from item;

-- Find the different warehouses in “Pune”.

select * from warehouse join cities  on warehouse.city_id = cities.id where cities.city ="Pune"; 

-- Find the details of items ordered by a customer “Mr. Patil”.

select * from orders where customer_id = (select cno from customer where cname ="Patil");

-- Find a Warehouse which has maximum stores.

select max(scount) from (select count(sid) as scount from stores group by w_id) as t; 

-- Find an item which is ordered for a minimum number of times.

select item_id,count(item_id) as count,description,weight from orderItems join item on orderItems.item_id = item.itemno group by item_id order by count limit 1; 
 
 
-- Find the detailed orders given by each custome 
select * from orders join customer on orders.customer_id = customer.cno;