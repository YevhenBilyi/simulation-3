SELECT * FROM posts JOIN users on users.id=posts.author_id
WHERE title LIKE $1