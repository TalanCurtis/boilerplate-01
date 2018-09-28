insert into bp_users
(user_name, img, auth_id)
values
($1, $2, $3)
-- returning returns the new user or row that was created
returning *;