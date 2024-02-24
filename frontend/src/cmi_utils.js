export const SHA512_2 = function(str) {
    function int64(msint_32, lsint_32) {
      this.highOrder = msint_32;
      this.lowOrder = lsint_32;
    }
  
    var H = [
      new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b),
      new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1),
      new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f),
      new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)
    ];
  
    var K = [
      new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd),
      new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc),
      new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019),
      new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118),
      new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe),
      new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2),
      new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1),
      new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694),
      new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3),
      new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65),
      new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
      new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5),
      new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210),
      new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4),
      new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725),
      new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70),
      new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
      new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df),
      new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8),
      new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b),
      new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001),
      new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30),
      new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910),
      new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
      new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53),
      new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8),
      new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb),
      new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3),
      new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
      new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec),
      new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9),
      new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b),
      new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207),
      new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178),
      new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6),
      new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b),
      new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
      new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c),
      new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a),
      new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)
    ];
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;
    var charsize = 8;
  
    function utf8_encode(str) {
      return unescape(encodeURIComponent(str));
    }
  
    function str2binb(str) {
      var bin = [];
      var mask = (1 << charsize) - 1;
      var len = str.length * charsize;
      for (var i = 0; i < len; i += charsize) {
        bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
      }
      return bin;
    }
  
    function binb2hex(binarray) {
      var hex_tab = "0123456789abcdef";
      var str = "";
      var length = binarray.length * 4;
      var srcByte;
      for (var i = 0; i < length; i += 1) {
        srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
        str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
      }
      return str;
    }
  
    function safe_add_2(x, y) {
      var lsw, msw, lowOrder, highOrder;
      lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
      msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
      lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
      msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
      highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      return new int64(highOrder, lowOrder);
    }
  
    function safe_add_4(a, b, c, d) {
      var lsw, msw, lowOrder, highOrder;
      lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
      msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
      lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
      msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
      highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      return new int64(highOrder, lowOrder);
    }
  
    function safe_add_5(a, b, c, d, e) {
      var lsw, msw, lowOrder, highOrder;
      lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF);
      msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16);
      lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16);
      msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16);
      highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      return new int64(highOrder, lowOrder);
    }
  
    function maj(x, y, z) {
      return new int64(
        (x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder),
        (x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)
      );
    }
  
    function ch(x, y, z) {
      return new int64(
        (x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
        (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
      );
    }
  
    function rotr(x, n) {
      if (n <= 32) {
        return new int64(
         (x.highOrder >>> n) | (x.lowOrder << (32 - n)),
         (x.lowOrder >>> n) | (x.highOrder << (32 - n))
        );
      }
      else {
        return new int64(
         (x.lowOrder >>> n) | (x.highOrder << (32 - n)),
         (x.highOrder >>> n) | (x.lowOrder << (32 - n))
        );
      }
    }
  
    function sigma0(x) {
      var rotr28 = rotr(x, 28);
      var rotr34 = rotr(x, 34);
      var rotr39 = rotr(x, 39);
      return new int64(
        rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
        rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
      );
    }
  
    function sigma1(x) {
      var rotr14 = rotr(x, 14);
      var rotr18 = rotr(x, 18);
      var rotr41 = rotr(x, 41);
      return new int64(
        rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
        rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
      );
    }
  
    function gamma0(x) {
      var rotr1 = rotr(x, 1), rotr8 = rotr(x, 8), shr7 = shr(x, 7);
      return new int64(
        rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
        rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
      );
    }
  
    function gamma1(x) {
      var rotr19 = rotr(x, 19);
      var rotr61 = rotr(x, 61);
      var shr6 = shr(x, 6);
      return new int64(
        rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
        rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
      );
    }
    function shr(x, n) {
      if (n <= 32) {
        return new int64(
         x.highOrder >>> n,
         x.lowOrder >>> n | (x.highOrder << (32 - n))
        );
      }
      else {
        return new int64(
         0,
         x.highOrder << (32 - n)
        );
      }
    }
    str = utf8_encode(str);
    var strlen = str.length*charsize;
    str = str2binb(str);
    str[strlen >> 5] |= 0x80 << (24 - strlen % 32);
    str[(((strlen + 128) >> 10) << 5) + 31] = strlen;
    for (var i = 0; i < str.length; i += 32) {
      a = H[0];
      b = H[1];
      c = H[2];
      d = H[3];
      e = H[4];
      f = H[5];
      g = H[6];
      h = H[7];
      for (var j = 0; j < 80; j++) {
        if (j < 16) {
          W[j] = new int64(str[j*2 + i], str[j*2 + i + 1]);
        } else {
          W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
        }
        T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
        T2 = safe_add_2(sigma0(a), maj(a, b, c));
        h = g;
        g = f;
        f = e;
        e = safe_add_2(d, T1);
        d = c;
        c = b;
        b = a;
        a = safe_add_2(T1, T2);
      }
      H[0] = safe_add_2(a, H[0]);
      H[1] = safe_add_2(b, H[1]);
      H[2] = safe_add_2(c, H[2]);
      H[3] = safe_add_2(d, H[3]);
      H[4] = safe_add_2(e, H[4]);
      H[5] = safe_add_2(f, H[5]);
      H[6] = safe_add_2(g, H[6]);
      H[7] = safe_add_2(h, H[7]);
    }
    var binarray = [];
    for (var i = 0; i < H.length; i++) {
      binarray.push(H[i].highOrder);
      binarray.push(H[i].lowOrder);
    }
    return binb2hex(binarray);
}
  
export const pack_2 = function  (format) {
    var formatPointer = 0;
    var argumentPointer = 1;
    var result = '';
    var argument = '';
    var i = 0;
    var r = [];
    var instruction, quantifier, word, precisionBits, exponentBits, extraNullCount;
    // vars used by float encoding
    var bias;
    var minExp;
    var maxExp;
    var minUnnormExp;
    var status;
    var exp;
    var len;
    var bin;
    var signal;
    var n;
    var intPart;
    var floatPart;
    var lastBit;
    var rounded;
    var j;
    var k;
    var tmpResult;
    while (formatPointer < format.length) {
      instruction = format.charAt(formatPointer);
      quantifier = '';
      formatPointer++;
      while ((formatPointer < format.length) && (format.charAt(formatPointer).match(/[\d*]/) !== null)) {
        quantifier += format.charAt(formatPointer);
        formatPointer++;
      }
      if(quantifier === '') {
        quantifier = '1';
      }
      // Now pack variables: 'quantifier' times 'instruction'
      switch (instruction) {
        case 'a':
        case 'A':
          // NUL-padded string
          // SPACE-padded string
          if (typeof arguments[argumentPointer] === 'undefined') {
            throw new Error('Warning:  pack() Type ' + instruction + ': not enough arguments');
          } else {
            argument = String(arguments[argumentPointer]);
          }
          if (quantifier === '*') {
            quantifier = argument.length;
          }
          for (i = 0; i < quantifier; i++) {
            if (typeof argument[i] === 'undefined') {
              if (instruction === 'a') {
                result += String.fromCharCode(0);
              } else {
                result += ' ';
              }
            } else {
              result += argument[i];
            }
          }
          argumentPointer++;
          break;
        case 'h':
        case 'H':
          // Hex string, low nibble first
          // Hex string, high nibble first
          if (typeof arguments[argumentPointer] === 'undefined') {
            throw new Error('Warning: pack() Type ' + instruction + ': not enough arguments');
          }
          else {
            argument = arguments[argumentPointer];
          }
          if (quantifier === '*') {
            quantifier = argument.length;
          }
          if (quantifier > argument.length) {
            var msg = 'Warning: pack() Type ' + instruction + ': not enough characters in string';
            throw new Error(msg);
          }
          for (i = 0; i < quantifier; i += 2) {
            // Always get per 2 bytes...
            word = argument[i];
            if (((i + 1) >= quantifier) || typeof argument[i + 1] === 'undefined') {
              word += '0'
            } else {
              word += argument[i + 1];
            }
            // The fastest way to reverse?
            if (instruction === 'h') {
              word = word[1] + word[0];
            }
            result += String.fromCharCode(parseInt(word, 16));
          }
          argumentPointer++;
          break;
        case 'c':
        case 'C':
          // signed char
          // unsigned char
          // c and C is the same in pack
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer]);
            argumentPointer++;
          }
          break;
        case 's':
        case 'S':
        case 'v':
          // signed short (always 16 bit, machine byte order)
          // unsigned short (always 16 bit, machine byte order)
          // s and S is the same in pack
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
  
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            argumentPointer++;
          }
          break;
        case 'n':
          // unsigned short (always 16 bit, big endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning: pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            argumentPointer++;
          }
          break;
        case 'i':
        case 'I':
        case 'l':
        case 'L':
        case 'V':
          // signed integer (machine dependent size and byte order)
          // unsigned integer (machine dependent size and byte order)
          // signed long (always 32 bit, machine byte order)
          // unsigned long (always 32 bit, machine byte order)
          // unsigned long (always 32 bit, little endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
  
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
            argumentPointer++;
          }
          break;
        case 'N':
          // unsigned long (always 32 bit, big endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }  
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            argumentPointer++;
          }
          break;
        case 'f':
        case 'd':
          // float (machine dependent size and representation)
          // double (machine dependent size and representation)
          // version based on IEEE754
          precisionBits = 23;
          exponentBits = 8;
          if (instruction === 'd') {
            precisionBits = 52;
            exponentBits = 11;
          }
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            argument = arguments[argumentPointer];
            bias = Math.pow(2, exponentBits - 1) - 1;
            minExp = -bias + 1;
            maxExp = bias;
            minUnnormExp = minExp - precisionBits;
            status = isNaN(n = parseFloat(argument)) || n === -Infinity || n === +Infinity ? n : 0;
            exp = 0;
            len = 2 * bias + 1 + precisionBits + 3;
            bin = new Array(len);
            signal = (n = status !== 0 ? 0 : n) < 0;
            n = Math.abs(n);
            intPart = Math.floor(n);
            floatPart = n - intPart;
            for (k = len; k;) {
              bin[--k] = 0;
            }
            for (k = bias + 2; intPart && k;) {
              bin[--k] = intPart % 2;
              intPart = Math.floor(intPart / 2);
            }
            for (k = bias + 1; floatPart > 0 && k; --floatPart) {
              (bin[++k] = ((floatPart *= 2) >= 1) - 0);
            }
            for (k = -1; ++k < len && !bin[k];) {}
  
            // @todo: Make this more readable:
            var key = (lastBit = precisionBits - 1 + (k = (exp = bias + 1 - k) >= minExp && exp <= maxExp ? k + 1 : bias + 1 - (exp = minExp - 1))) + 1;
            if (bin[key]) {
              if (!(rounded = bin[lastBit])) {
                for (j = lastBit + 2; !rounded && j < len; rounded = bin[j++]) {}
              }
              for (j = lastBit + 1; rounded && --j >= 0; (bin[j] = !bin[j] - 0) && (rounded = 0)) {}
            }
            for (k = k - 2 < 0 ? -1 : k - 3; ++k < len && !bin[k];) {}
            if ((exp = bias + 1 - k) >= minExp && exp <= maxExp) {
                ++k;
            }
            else {
              if (exp < minExp) {
                if (exp !== bias + 1 - len && exp < minUnnormExp) {
                  // "encodeFloat::float underflow"
                }
                k = bias + 1 - (exp = minExp - 1);
              }
            }
            if (intPart || status !== 0) {
              exp = maxExp + 1;
              k = bias + 2;
              if (status === -Infinity) {
                signal = 1;
              } else if (isNaN(status)) {
                bin[k] = 1;
              }
            }  
            n = Math.abs(exp + bias);
            tmpResult = '';  
            for (j = exponentBits + 1; --j;) {
              tmpResult = (n % 2) + tmpResult;
              n = n >>= 1;
            }  
            n = 0;
            j = 0;
            k = (tmpResult = (signal ? '1' : '0') + tmpResult + (bin.slice(k, k + precisionBits).join(''))).length;
            r = [];
              for (; k;) {
              n += (1 << j) * tmpResult.charAt(--k);
              if (j === 7) {
                r[r.length] = String.fromCharCode(n);
                n = 0;
              }
              j = (j + 1) % 8;
            }
            r[r.length] = n ? String.fromCharCode(n) : '';
            result += r.join('');
            argumentPointer++;
          }
          break;
        case 'x':
          // NUL byte
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type x: \'*\' ignored');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(0);
          }
          break;
  
        case 'X':
          // Back up one byte
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type X: \'*\' ignored');
          }
          for (i = 0; i < quantifier; i++) {
            if (result.length === 0) {
              throw new Error('Warning: pack(): Type X:' + ' outside of string');
            } else {
              result = result.substring(0, result.length - 1);
            }
          }
          break;
        case '@':
          // NUL-fill to absolute position
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type X: \'*\' ignored');
          }
          if (quantifier > result.length) {
            extraNullCount = quantifier - result.length;
            for (i = 0; i < extraNullCount; i++) {
              result += String.fromCharCode(0);
            }
          }
          if (quantifier < result.length) {
            result = result.substring(0, quantifier);
          }
          break;
      }
    }
    if (argumentPointer < arguments.length) {
      var msg2 = 'Warning: pack(): ' + (arguments.length - argumentPointer) + ' arguments unused';
      throw new Error(msg2);
    }
    return result;
  }
  
  export const SHA512 = function (str) {
    function int64(msint_32, lsint_32) {
      this.highOrder = msint_32;
      this.lowOrder = lsint_32;
    }
  
    var H = [
      new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b),
      new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1),
      new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f),
      new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)
    ];
  
    var K = [
      new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd),
      new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc),
      new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019),
      new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118),
      new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe),
      new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2),
      new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1),
      new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694),
      new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3),
      new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65),
      new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
      new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5),
      new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210),
      new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4),
      new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725),
      new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70),
      new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
      new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df),
      new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8),
      new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b),
      new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001),
      new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30),
      new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910),
      new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
      new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53),
      new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8),
      new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb),
      new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3),
      new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
      new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec),
      new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9),
      new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b),
      new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207),
      new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178),
      new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6),
      new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b),
      new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
      new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c),
      new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a),
      new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)
    ];
  
    var W = new Array(64);
    var a, b, c, d, e, f, g, h, i, j;
    var T1, T2;
    var charsize = 8;
  
    function utf8_encode(str) {
      return unescape(encodeURIComponent(str));
    }
  
    function str2binb(str) {
      var bin = [];
      var mask = (1 << charsize) - 1;
      var len = str.length * charsize;
      for (var i = 0; i < len; i += charsize) {
        bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
      }
      return bin;
    }
  
    function binb2hex(binarray) {
      var hex_tab = "0123456789abcdef";
      var str = "";
      var length = binarray.length * 4;
      var srcByte;
      for (var i = 0; i < length; i += 1) {
        srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
        str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
      }
      return str;
    }
  
    function safe_add_2(x, y) {
      var lsw, msw, lowOrder, highOrder;
      lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
      msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
      lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
      msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
      highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      return new int64(highOrder, lowOrder);
    }
  
    function safe_add_4(a, b, c, d) {
      var lsw, msw, lowOrder, highOrder;
      lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
      msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
      lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
      msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
      highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      return new int64(highOrder, lowOrder);
    }
  
    function safe_add_5(a, b, c, d, e) {
      var lsw, msw, lowOrder, highOrder;
      lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF);
      msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16);
      lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16);
      msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16);
      highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
      return new int64(highOrder, lowOrder);
    }
  
    function maj(x, y, z) {
      return new int64(
        (x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder),
        (x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)
      );
    }
  
    function ch(x, y, z) {
      return new int64(
        (x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
        (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
      );
    }
  
    function rotr(x, n) {
      if (n <= 32) {
        return new int64(
         (x.highOrder >>> n) | (x.lowOrder << (32 - n)),
         (x.lowOrder >>> n) | (x.highOrder << (32 - n))
        );
      }
      else {
        return new int64(
         (x.lowOrder >>> n) | (x.highOrder << (32 - n)),
         (x.highOrder >>> n) | (x.lowOrder << (32 - n))
        );
      }
    }
  
    function sigma0(x) {
      var rotr28 = rotr(x, 28);
      var rotr34 = rotr(x, 34);
      var rotr39 = rotr(x, 39);
      return new int64(
        rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
        rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
      );
    }
  
    function sigma1(x) {
      var rotr14 = rotr(x, 14);
      var rotr18 = rotr(x, 18);
      var rotr41 = rotr(x, 41);
      return new int64(
        rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
        rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
      );
    }
  
    function gamma0(x) {
      var rotr1 = rotr(x, 1), rotr8 = rotr(x, 8), shr7 = shr(x, 7);
      return new int64(
        rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
        rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
      );
    }
  
    function gamma1(x) {
      var rotr19 = rotr(x, 19);
      var rotr61 = rotr(x, 61);
      var shr6 = shr(x, 6);
      return new int64(
        rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
        rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
      );
    }
    function shr(x, n) {
      if (n <= 32) {
        return new int64(
         x.highOrder >>> n,
         x.lowOrder >>> n | (x.highOrder << (32 - n))
        );
      }
      else {
        return new int64(
         0,
         x.highOrder << (32 - n)
        );
      }
    }
  
    str = utf8_encode(str);
    var strlen = str.length*charsize;
    str = str2binb(str);
    str[strlen >> 5] |= 0x80 << (24 - strlen % 32);
    str[(((strlen + 128) >> 10) << 5) + 31] = strlen;
    for (var i = 0; i < str.length; i += 32) {
      a = H[0];
      b = H[1];
      c = H[2];
      d = H[3];
      e = H[4];
      f = H[5];
      g = H[6];
      h = H[7];
      for (var j = 0; j < 80; j++) {
        if (j < 16) {
          W[j] = new int64(str[j*2 + i], str[j*2 + i + 1]);
        } else {
          W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
        }
        T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
        T2 = safe_add_2(sigma0(a), maj(a, b, c));
        h = g;
        g = f;
        f = e;
        e = safe_add_2(d, T1);
        d = c;
        c = b;
        b = a;
        a = safe_add_2(T1, T2);
      }
      H[0] = safe_add_2(a, H[0]);
      H[1] = safe_add_2(b, H[1]);
      H[2] = safe_add_2(c, H[2]);
      H[3] = safe_add_2(d, H[3]);
      H[4] = safe_add_2(e, H[4]);
      H[5] = safe_add_2(f, H[5]);
      H[6] = safe_add_2(g, H[6]);
      H[7] = safe_add_2(h, H[7]);
    }
    var binarray = [];
    for (var i = 0; i < H.length; i++) {
      binarray.push(H[i].highOrder);
      binarray.push(H[i].lowOrder);
    }
    return binb2hex(binarray);
  }
  
export const pack = function  (format) {
  
    //  discuss at: http://locutus.io/php/pack/
    // original by: Tim de Koning (http://www.kingsquare.nl)
    //    parts by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // bugfixed by: Tim de Koning (http://www.kingsquare.nl)
    //      note 1: Float encoding by: Jonas Raoni Soares Silva
    //      note 1: Home: http://www.kingsquare.nl/blog/12-12-2009/13507444
    //      note 1: Feedback: phpjs-pack@kingsquare.nl
    //      note 1: "machine dependent byte order and size" aren't
    //      note 1: applicable for JavaScript; pack works as on a 32bit,
    //      note 1: little endian machine.
    //   example 1: pack('nvc*', 0x1234, 0x5678, 65, 66)
    //   returns 1: '\u00124xVAB'
    //   example 2: pack('H4', '2345')
    //   returns 2: '#E'
    //   example 3: pack('H*', 'D5')
    //   returns 3: 'Õ'
    //   example 4: pack('d', -100.876)
    //   returns 4: "\u0000\u0000\u0000\u0000\u00008YÀ"
    //        test: skip-1
    var formatPointer = 0
    var argumentPointer = 1
    var result = ''
    var argument = ''
    var i = 0
    var r = []
    var instruction, quantifier, word, precisionBits, exponentBits, extraNullCount
    // vars used by float encoding
    var bias
    var minExp
    var maxExp
    var minUnnormExp
    var status
    var exp
    var len
    var bin
    var signal
    var n
    var intPart
    var floatPart
    var lastBit
    var rounded
    var j
    var k
    var tmpResult
    while (formatPointer < format.length) {
      instruction = format.charAt(formatPointer);
      quantifier = '';
      formatPointer++;
      while ((formatPointer < format.length) && (format.charAt(formatPointer).match(/[\d*]/) !== null)) {
        quantifier += format.charAt(formatPointer)
        formatPointer++
      }
      if(quantifier === '') {
        quantifier = '1';
      }
      // Now pack variables: 'quantifier' times 'instruction'
      switch (instruction) {
        case 'a':
        case 'A':
          // NUL-padded string
          // SPACE-padded string
          if (typeof arguments[argumentPointer] === 'undefined') {
            throw new Error('Warning:  pack() Type ' + instruction + ': not enough arguments')
          } else {
            argument = String(arguments[argumentPointer])
          }
          if (quantifier === '*') {
            quantifier = argument.length;
          }
          for (i = 0; i < quantifier; i++) {
            if (typeof argument[i] === 'undefined') {
              if (instruction === 'a') {
                result += String.fromCharCode(0);
              } else {
                result += ' ';
              }
            } else {
              result += argument[i];
            }
          }
          argumentPointer++;
          break
        case 'h':
        case 'H':
          // Hex string, low nibble first
          // Hex string, high nibble first
          if (typeof arguments[argumentPointer] === 'undefined') {
            throw new Error('Warning: pack() Type ' + instruction + ': not enough arguments')
          } else {
            argument = arguments[argumentPointer];
          }
          if (quantifier === '*') {
            quantifier = argument.length;
          }
          if (quantifier > argument.length) {
            var msg = 'Warning: pack() Type ' + instruction + ': not enough characters in string'
            throw new Error(msg)
          }
          for (i = 0; i < quantifier; i += 2) {
            // Always get per 2 bytes...
            word = argument[i];
            if (((i + 1) >= quantifier) || typeof argument[i + 1] === 'undefined') {
              word += '0'
            } else {
              word += argument[i + 1];
            }
            // The fastest way to reverse?
            if (instruction === 'h') {
              word = word[1] + word[0];
            }
            result += String.fromCharCode(parseInt(word, 16));
          }
          argumentPointer++;
          break;
        case 'c':
        case 'C':
          // signed char
          // unsigned char
          // c and C is the same in pack
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer]);
            argumentPointer++;
          }
          break;
        case 's':
        case 'S':
        case 'v':
          // signed short (always 16 bit, machine byte order)
          // unsigned short (always 16 bit, machine byte order)
          // s and S is the same in pack
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
  
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            argumentPointer++;
          }
          break;
        case 'n':
          // unsigned short (always 16 bit, big endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning: pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            argumentPointer++;
          }
          break;
        case 'i':
        case 'I':
        case 'l':
        case 'L':
        case 'V':
          // signed integer (machine dependent size and byte order)
          // unsigned integer (machine dependent size and byte order)
          // signed long (always 32 bit, machine byte order)
          // unsigned long (always 32 bit, machine byte order)
          // unsigned long (always 32 bit, little endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
  
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
            argumentPointer++;
          }
          break;
        case 'N':
          // unsigned long (always 32 bit, big endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
  
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            argumentPointer++;
          }
          break;
        case 'f':
        case 'd':
          // float (machine dependent size and representation)
          // double (machine dependent size and representation)
          // version based on IEEE754
          precisionBits = 23;
          exponentBits = 8;
          if (instruction === 'd') {
            precisionBits = 52;
            exponentBits = 11;
          }
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            argument = arguments[argumentPointer];
            bias = Math.pow(2, exponentBits - 1) - 1;
            minExp = -bias + 1;
            maxExp = bias;
            minUnnormExp = minExp - precisionBits;
            status = isNaN(n = parseFloat(argument)) || n === -Infinity || n === +Infinity ? n : 0;
            exp = 0;
            len = 2 * bias + 1 + precisionBits + 3;
            bin = new Array(len);
            signal = (n = status !== 0 ? 0 : n) < 0;
            n = Math.abs(n);
            intPart = Math.floor(n);
            floatPart = n - intPart;
            for (k = len; k;) {
              bin[--k] = 0;
            }
            for (k = bias + 2; intPart && k;) {
              bin[--k] = intPart % 2;
              intPart = Math.floor(intPart / 2);
            }
            for (k = bias + 1; floatPart > 0 && k; --floatPart) {
              (bin[++k] = ((floatPart *= 2) >= 1) - 0);
            }
            for (k = -1; ++k < len && !bin[k];) {}
  
            // @todo: Make this more readable:
            var key = (lastBit = precisionBits - 1 +
              (k =
                (exp = bias + 1 - k) >= minExp &&
                exp <= maxExp ? k + 1 : bias + 1 - (exp = minExp - 1))) + 1
  
            if (bin[key]) {
              if (!(rounded = bin[lastBit])) {
                for (j = lastBit + 2; !rounded && j < len; rounded = bin[j++]) {}
              }
              for (j = lastBit + 1; rounded && --j >= 0;
              (bin[j] = !bin[j] - 0) && (rounded = 0)) {}
            }
  
            for (k = k - 2 < 0 ? -1 : k - 3; ++k < len && !bin[k];) {}
  
            if ((exp = bias + 1 - k) >= minExp && exp <= maxExp) {
              ++k
            } else {
              if (exp < minExp) {
                if (exp !== bias + 1 - len && exp < minUnnormExp) {
                  // "encodeFloat::float underflow"
                }
                k = bias + 1 - (exp = minExp - 1)
              }
            }
  
            if (intPart || status !== 0) {
              exp = maxExp + 1
              k = bias + 2
              if (status === -Infinity) {
                signal = 1
              } else if (isNaN(status)) {
                bin[k] = 1
              }
            }
  
            n = Math.abs(exp + bias);
            tmpResult = '';
  
            for (j = exponentBits + 1; --j;) {
              tmpResult = (n % 2) + tmpResult;
              n = n >>= 1;
            }
  
            n = 0;
            j = 0;
            k = (tmpResult = (signal ? '1' : '0') + tmpResult + (bin
              .slice(k, k + precisionBits)
              .join(''))
            ).length;
            r = [];
  
            for (; k;) {
              n += (1 << j) * tmpResult.charAt(--k);
              if (j === 7) {
                r[r.length] = String.fromCharCode(n);
                n = 0;
              }
              j = (j + 1) % 8;
            }
            r[r.length] = n ? String.fromCharCode(n) : '';
            result += r.join('');
            argumentPointer++;
          }
          break;
        case 'x':
          // NUL byte
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type x: \'*\' ignored');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(0);
          }
          break;
  
        case 'X':
          // Back up one byte
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type X: \'*\' ignored')
          }
          for (i = 0; i < quantifier; i++) {
            if (result.length === 0) {
              throw new Error('Warning: pack(): Type X:' + ' outside of string')
            } else {
              result = result.substring(0, result.length - 1);
            }
          }
          break;
        case '@':
          // NUL-fill to absolute position
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type X: \'*\' ignored')
          }
          if (quantifier > result.length) {
            extraNullCount = quantifier - result.length;
            for (i = 0; i < extraNullCount; i++) {
              result += String.fromCharCode(0);
            }
          }
          if (quantifier < result.length) {
            result = result.substring(0, quantifier);
          }
          break;
      }
    }
    if (argumentPointer < arguments.length) {
      var msg2 = 'Warning: pack(): ' + (arguments.length - argumentPointer) + ' arguments unused';
      throw new Error(msg2)
    }
    return result
  }
  
  