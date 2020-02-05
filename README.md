## Big Corp API

This is an API for getting employees from Glade endpoint.

## Getting started
Run `npm install` to install the application dependencies.
You can start the application by running either `npm run start` or `npm run startDebug`.
The latter will write a log line each time the external API is called, in order to check for unnecesary requests.

## Using the API
Available enpoints are:
- GET /employees
- GET /employees/{employeeId}
- GET /departments
- GET /departments/{departmentId}
- GET /offices
- GET /offices/{officeId}

Please refer to the challenge documentation for futher details regarding pagination and relations expansion