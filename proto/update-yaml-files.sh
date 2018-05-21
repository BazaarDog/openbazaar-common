#!/bin/bash

for f in *.proto; do 
  base=${f%.proto}
  protobuf-jsonschema --format yaml ./${base}.proto >> ../yaml/${base}.yaml; 
done
