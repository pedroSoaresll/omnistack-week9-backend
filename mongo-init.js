db.createUser(
  {
    user: "oliveira",
    pwd: "oliveira1234",
    roles: [
      {
        role: "readWrite",
        db: "omnistack-oliveira"
      }
    ]
  }
);