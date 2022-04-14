# tester l'api

## get (all)
```
curl http://localhost:5000/users
```

## get (by id)
```
curl http://localhost:5000/users/f530442f-eb26-46a2-a247-ec3b0f02531c
```

## post
```
curl -X POST http://localhost:5000/users -H 'Content-Type: application/json' -d '{"name":"sami","mail":"abc@gmail.com"}'
```

## put
```
curl -X PUT http://localhost:5000/users/f530442f-eb26-46a2-a247-ec3b0f02531c -H 'Content-Type: application/json' -d '{"name":"sami","mail":"abc@gmail.com"}'
```
## delete
```
curl -X DELETE http://localhost:5000/users/f530442f-eb26-46a2-a247-ec3b0f02531c"
```