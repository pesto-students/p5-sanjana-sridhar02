-- create database warehouse;

-- use warehouse;

CREATE TABLE cities(
	id 	bigint primary key,
    city CHAR(20), 
    state CHAR(20) 
); 


CREATE TABLE warehouse(
    wid bigint primary key,
    wname varchar(30),
    location varchar(20),
    exta_context nvarchar(10),
    city_id bigint,
    foreign key(city_id) references cities(id)
);

CREATE TABLE stores(
	sid bigint primary key,
    store_name varchar(20),
    location_city varchar(20),
    city_id bigint,
    w_id bigint,
    foreign key(city_id) references cities(id),
    foreign key(w_id) references warehouse(wid)
);

CREATE TABLE customer(
	cno bigint primary key,
    cname varchar(50),
    addr varchar(50),
    cu_city varchar(20)
);

CREATE TABLE item(
	itemno bigint primary key,
	description text,
	weight decimal(5,2),
	cost decimal(5,2) 
);

CREATE TABLE orders(
	ono bigint primary key,
    odate datetime,
    customer_id bigint,
    foreign key(customer_id) references customer(cno)
);

CREATE TABLE orderItems(
order_id bigint,
item_id bigint,
foreign key(order_id) references orders(ono),
foreign key(item_id) references item(itemno)
);

CREATE TABLE storeItems(
store_id bigint,
item_id bigint,
quantity bigint,
foreign key(store_id) references stores(sid),
foreign key(item_id) references item(itemno)
);

drop table customer;
drop table item;
drop table storeItems;
drop table stores;
drop table warehose;



