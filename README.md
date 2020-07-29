![Banner](https://raw.githubusercontent.com/oSoc20/bit-of-trust/master/img/banner.png)

# Bit of Trust (MVP)

This application supports creation of relationships and their visualisation. The relations are
stored inside a ‘git database’. Every user will have a randomly generated token, this token will be
added to a file, and the git hash of that file will represent the relationship identifier.

The application is deployed at [https://bit-of-trust.osoc.be](https://bit-of-trust.osoc.be).

### Usage

In order to test the application locally, you can run the following command:
```bash
npm install && npm run dev
```
You can then go to `http://localhost:5000` in a browser to view the application.

In order to locally deploy the application you can run the following command:
```bash
npm install && npm run build && npx serve dist
```
