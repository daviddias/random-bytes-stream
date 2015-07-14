random-bytes-stream
===================

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs) [![Build Status](https://travis-ci.org/diasdavid/random-bytes-stream.svg)](https://travis-ci.org/diasdavid/random-bytes-stream)

> Create random bytes streams with or not a cap size

**note:** `cap` is a number of 64Mb blobs

# Usage

### Install

```bash
$ npm i random-bytes-stream --save
```

### Create infinite bytes stream

```javascript
var randStream = require('random-bytes-stream')

randStream() // returns a infinite random bytes stream in chuncks of 64Mb (max Buffer size)
```

### Create capped bytes stream


```javascript
var randStream = require('random-bytes-stream')

var nChuncks = 1

randStream(nChuncks) // returns nChunks * 64Mb of random bytes stream
```


