## RFs (Functional Requirements)

- [x] It must be possible to register;
- [ ] It must be possible to authenticate;
- [ ] It must be possible to retrieve the profile of a logged-in user;
- [ ] It must be possible to get the number of check-ins made by the logged-in user;

## RNs (Business Rules)

- [x] The user should not be able to register with a duplicate email;
- [ ] The user cannot check in twice on the same day;
- [ ] The user cannot check in if not near (100m) the gym;
- [ ] The check-in can only be validated up to 20 minutes after being created;

## RNFs (Non-functional Requirements)

- [x] The user's password must be encrypted;
- [x] The application's data must be persisted in a PostgreSQL database;
- [ ] All data lists must be paginated with 20 items per page;
- [ ] The user must be identified by a JWT (JSON Web Token);



 
 
 
 