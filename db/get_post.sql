SELECT * FROM posts JOIN users on users.id=posts.author_id
WHERE posts.id=$1