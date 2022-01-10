# A-1 Checking Client 

Deprecated - migrating to Vue 3

Vue application built for employees to log transactions, intended for usage on a Raspberry Pi running Raspbian. The entirety of the application works out of box without the need to touch deployment, as it is built offline-first with sync to remote CouchDB/Cloudant using PouchDB and packaged via Electron.

## Screenshots

https://imgur.com/a/JnqADTy

## Electron Build Windows (for development purposes)

```
npm run electron:build -- --win nsis

npm run electron:build -- --linux arm7l
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Runs Unit Tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```
