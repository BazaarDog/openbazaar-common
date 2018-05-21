#!/bin/bash

function git_sparse_clone() (
  rurl="$1" localdir="$2" && shift 2

  mkdir -p "$localdir"
  cd "$localdir"

  git init
  git remote add -f origin "$rurl"

  git config core.sparseCheckout true

  # Loops over remaining args
  for i; do
    echo "$i" >> .git/info/sparse-checkout
  done

  git pull origin master
)

rm *.proto
git_sparse_clone "https://github.com/OpenBazaar/openbazaar-go/" "./" "/pb/protos";
mv ./pb/protos/* ./;
rm -fr ./pb;
rm -fr .git/;


