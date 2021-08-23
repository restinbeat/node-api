# NodeJS API
<hr>

### How to start

```bash
$ npm init - all Enter
$ npm i express --save
$ npm i morgan --save

or

$ rm -rf node-modules/
$ npm i
```
### TDD
**install mocha**
```bash
$ npm i mocha --save-dev
```

**install should**
```bash
$ npm i should --save-dev
```

**install superTest**
```bash
$ npm i supertest --save-dev
```

**test**
```bash
$ node_modules/.bin/mocha <test fine name>
```

**install body-parser**
```bash
$ npm i body-parser --save
```

**install corss-env (WINDOWS)**
***1. install library***
```bash
$ npm i cross-env
```

***2. change test script***
```bash
- package.json > scripts > test
cross-env NODE_ENV=test mocha lib/api/user/user.spec.js
```

***3. test***
```bash
$ npm t
```