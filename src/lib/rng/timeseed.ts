'use strict'
/* This is a conversion from libRmath.so to Typescript/Javascript
Copyright (C) 2018  Jacob K.F. Bogers  info@mail.jacob-bogers.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import * as debug from 'debug'
const printer = debug('timeseed');
const { trunc, ceil, min, log2, pow } = Math;
const { now } = Date;


export function timeseed() {
  printer('using timeseed')
  let n = now();
  if (typeof window !== 'undefined'){ //browser
    if (window.crypto && window.crypto.getRandomValues){
      const sampler = new Uint32Array(1);
      window.crypto.getRandomValues(sampler)
      n = sampler[1];
    }
  }
  else { //node
    const crypto = require('crypto');
    n = crypto.randomBytes(4).readUInt32BE()
  }
 
  return n;
}
