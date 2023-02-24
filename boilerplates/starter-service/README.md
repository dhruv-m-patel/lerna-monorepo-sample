# starter-service

You can use this service as your starting point to writing a service within this monorepo.

### Steps to create a new service using this template

- Copy paste the `starter-service` folder into **services** folder and rename the new folder
- Edit `package.json` and update the package name along with any additional edits you want to make
- Edit `.env.example` and add new environment variable specific to your service to run it on a separate port. Add the same to `.env` file
- Edit `src/index.ts` replacing `STARTER_SERVICE_PORT` to your new environment variable to map port correctly
- Search globally for `starter-service` and `Starter Service` within your new service and change those occurrences with your service name
- Run `npm ci && npm run clean && npm run bootstrap && npm run build`
- Run `npm run start-dev`
- Run this command in your terminal to see service health endpoint responding: `curl -i http://localhost:8999/api/health`

### NOTE

To be able to run the service, you will need to add these commands to package.json

```json
{
  "scripts": {
    "start": "node -r dotenv/config build/index.js",
    "start-dev": "nodemon",
  }
}
```
