@app
remix-notes-d165

@aws
runtime nodejs18.x
# concurrency 1
# memory 1152
# profile default
# region us-west-1
# timeout 30

@http
/*
  method any
  src server

@plugins
plugin-remix
  src plugin-remix.js

@static
folder public
bucket my-remix-test-bucket


@tables
password
  pk *String # userId
  sk **String

singleTable
  pk *String  
  sk **String
