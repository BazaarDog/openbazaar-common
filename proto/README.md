### Initializing proto files
 The OpenBazaar proto files were initially pulled from the openbazaar-go repo by running `update-proto-files.sh`
 **from the types/proto folder.**  As this script initializes, gits and removes a temporary git directory,
 running the script from project root will destroy `.git/` without warning.

 For convenience the `cd` operation and the command is available with the `update-pb` script in npm

 ### Note:
 There are two proto files imported from google which are not updated automatically.

### Generating Typescript/Javascript

Types are generated with protobufjs,

```
    "update-types-js": "./node_modules/protobufjs/bin/pbjs -t static-module -w commonjs -o types/openbazaar.js types/proto/*.proto",
    "update-types-ts": "./node_modules/protobufjs/bin/pbts -o types/openbazaar.d.ts types/openbazaar.js",
```

### Generating yaml/json

Definitions for the API are generated with protobuf-jsonschema by running the command `update-yaml-files.sh` from the
 types/proto folder.
