
# iso20022 (mx)
Convert ngx-iso-form output json to MX (ISO 20022) message.

![npm](https://img.shields.io/npm/v/iso20022)
![NPM](https://img.shields.io/npm/l/iso20022)
[![npm](https://img.shields.io/npm/dm/iso20022)](https://npmjs.org/package/iso20022)


## Features

- 🔥 Convert ngx-iso-form output json to ISO 20022 payment message
- ⚡️  Supports ISO 20022 XSD Validation

## How to Install

1. Install npm package iso20022.

Global (For CLI)
```console
    npm install -g iso20022
```

Local (For SCRIPT)
```console
    npm install iso20022
```

## How to Use

### Script
JavaScript
```js
const mx = require('iso20022').default;

mx.convert('./camt.053.json', 'urn:iso:std:iso:20022:tech:xsd:camt.053.001.10')
.then(output => console.log(output))
  .catch(error => console.error(error));

mx.convertAndValidate('./camt.053.json', 'urn:iso:std:iso:20022:tech:xsd:camt.053.001.10','./camt.053.001.10.xsd')
    .then((data) => console.log(data))
    .catch((data) => console.log(data));
```

TypeScript
```ts
import mx from "iso20022";


mx.convert('./camt.053.json', 'urn:iso:std:iso:20022:tech:xsd:camt.053.001.10')
.then(output => console.log(output))
  .catch(error => console.error(error));

mx.convertAndValidate('./camt.053.json', 'urn:iso:std:iso:20022:tech:xsd:camt.053.001.10','./camt.053.001.10.xsd')
    .then((data) => console.log(data))
    .catch((data) => console.log(data));
```
**NOTE**: For script please install the package locally





## Supported OS

- win-64x
- osx-64x
- linux-64x