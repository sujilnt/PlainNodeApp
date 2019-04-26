# PlainNodeApp

### API Requirements
```
1)  The API listen on a Port and accepts incoming Http requests for POST,GET,PUT,DELETE and HEAD.
2)  The API allows a client to connect then create a new user , then edit and delete that user. 
3)  The API allows a user to sign in which gives them a token that they can use for subsequent authenicated requests.
4)  The API allows the user to "sign out" which invalidates their token.
5)  The API allows a signed-in user to their token to create a new check.
6)  The API allows a signed-in user to edit or delete any of their checks. 
7)  In the background , workes perform all the check at the appropriate times and send the alerts to the users when a check changes its state from "up" to "down" or visa versa .

```


`curl localhost: 3000`
