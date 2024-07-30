
# iso20022-cli (mx)
Convert ngx-iso-form output json to MX (ISO 20022) message.

![npm](https://img.shields.io/npm/v/iso20022-cli)
![NPM](https://img.shields.io/npm/l/iso20022-cli)
[![npm](https://img.shields.io/npm/dm/iso20022-cli)](https://npmjs.org/package/iso20022-cli)


## Features

- 🔥 Convert ngx-iso-form output json to MX (ISO 20022) message
- ⚡️  Supports ISO 20022 XSD Validation

## How to Install

1. Install npm package iso20022-cli.

Global (For CLI)
```console
    npm install -g iso20022-cli
```

Local (For SCRIPT/CLI)
```console
    npm install iso20022-cli
```

## How to Use

### CLI

Without XSD validation
```console
mx <json-file-path> <targetNamespace> <output-xml-file-path> 
```

With XSD Validation
```console
mx <json-file-path> <targetNamespace> <xsdFileName> <output-xml-file-path>
```

#### Example
##### Linux

```console
mx /mnt/c/source/xsd/camt.053.json urn:iso:std:iso:20022:tech:xsd:camt.053.001.10 /mnt/c/source/xsd/camt.053.001.10.xsd /mnt/c/source/xsd/camt.053.xml
```

##### Windows
```console
mx camt.053.json urn:iso:std:iso:20022:tech:xsd:camt.053.001.10 camt.053.001.10.xsd camt.053.xml
```
### Script
JavaScript
```js
const mx = require('iso20022-cli').default;

mx.convert('./camt.053.json', 'urn:iso:std:iso:20022:tech:xsd:camt.053.001.10')
.then(output => console.log(output))
  .catch(error => console.error(error));

mx.convertAndValidate('./camt.053.json', 'urn:iso:std:iso:20022:tech:xsd:camt.053.001.10','./camt.053.001.10.xsd')
    .then((data) => console.log(data))
    .catch((data) => console.log(data));
```

TypeScript
```ts
import mx from "iso20022-cli";


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