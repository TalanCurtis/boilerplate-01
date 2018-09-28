create table if not exists bp_users (
    id serial primary key,
    user_name text,
    img text,
    auth_id text,
    eye_color varchar(80),
    hair_color varchar(80),
    age int
)

-- update new user
update bp_users
set eye_color = 'brown' , hair_color = 'brown', age = 33;
where id = <'id of user wanting to update'>

-- insert dummy users 
insert into bp_users
(user_name, img, eye_color, hair_color, age)
values('Joe', 'https://robohash.org/1', 'green', 'brown', 25);
insert into bp_users
(user_name, img, eye_color, hair_color, age)
values('Mike', 'https://robohash.org/2', 'blue', 'blond', 27);
insert into bp_users
(user_name, img, eye_color, hair_color, age)
values('Zoe', 'https://robohash.org/3', 'green', 'black', 35);