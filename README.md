# Red Social API

### url base: http://localhost:9000/api/v1

-/auth
    -/login -> login con las credenciales de usuario para autenticar
-/posts
    -/me -> mis propias publicaciones
    -/users/:id -> publicaciones de usuarios en particular
    -/:id -> una publicacion en especifico
    -/:id/comments -> los comentarios de una publicacion en especifico
    -/:id/likes -> los likes de una publciacion en especifico

-/users
    -/me -> Mi información de usuario
    -/:id -> un usuario en especifico
    -/:id/add-follow -> 

-/follows
    -/:id

-/followers
    -/:id