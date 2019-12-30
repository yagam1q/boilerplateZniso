(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
  * CoreUI v2.1.16 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js")) :
  undefined;
}(this, (function (exports, $, PerfectScrollbar) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    Function('return this')();

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var f = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.3.4',
    mode:  'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var functionToString = shared('native-function-to-string', Function.toString);

  var WeakMap = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var WeakMap$1 = global_1.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap) {
    var store$1 = new WeakMap$1();
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
      wmset.call(store$1, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store$1, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(functionToString).split('toString');

  shared('inspectSource', function (it) {
    return functionToString.call(it);
  });

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
      enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
  });
  });

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

  var Symbol$1 = global_1.Symbol;
  var store$2 = shared('wks');

  var wellKnownSymbol = function (name) {
    return store$2[name] || (store$2[name] = nativeSymbol && Symbol$1[name]
      || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
  };

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  var SPECIES = wellKnownSymbol('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
      if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
    }
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.github.io/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  var SPECIES$1 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.github.io/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction(S);
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var arrayPush = [].push;
  var min$1 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = min$1(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SUPPORTS_Y);

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$1
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$2
  };

  var path = global_1;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var max = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$2(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  // optional / simple context binding
  var bindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      var returnMethod = iterator['return'];
      if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
      throw error;
    }
  };

  var iterators = {};

  var ITERATOR = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1]
      || it['@@iterator']
      || iterators[classof(it)];
  };

  // `Array.from` method implementation
  // https://tc39.github.io/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iteratorMethod = getIteratorMethod(O);
    var length, result, step, iterator, next;
    if (mapping) mapfn = bindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();
      for (;!(step = next.call(iterator)).done; index++) {
        createProperty(result, index, mapping
          ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
          : step.value
        );
      }
    } else {
      length = toLength(O.length);
      result = new C(length);
      for (;length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  };

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.github.io/ecma262/#sec-array.from
  _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: arrayFrom
  });

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var SPECIES$2 = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = bindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else if (IS_EVERY) return false;  // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6)
  };

  var userAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (userAgent) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }

  var v8Version = version && +version;

  var SPECIES$3 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return v8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $map = arrayIteration.map;


  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  var nativeAssign = Object.assign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  // should work with symbols and should have deterministic property order (V8 bug)
  var objectAssign = !nativeAssign || fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;
    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : nativeAssign;

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
    assign: objectAssign
  });

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype : null;
  };

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS = false;

  var returnThis = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if ( !has(IteratorPrototype, ITERATOR$3)) {
    createNonEnumerableProperty(IteratorPrototype, ITERATOR$3, returnThis);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
  };

  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html = getBuiltIn('document', 'documentElement');

  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var PROTOTYPE = 'prototype';
  var Empty = function () { /* empty */ };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var length = enumBugKeys.length;
    var lt = '<';
    var script = 'script';
    var gt = '>';
    var js = 'java' + script + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = String(js);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
    return createDict();
  };

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  hiddenKeys[IE_PROTO$1] = true;

  var defineProperty = objectDefineProperty.f;



  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
      defineProperty(it, TO_STRING_TAG$1, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis$1 = function () { return this; };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis$2 = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if ( IterablePrototype[ITERATOR$4] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
    }
    iterators[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var charAt$1 = stringMultibyte.charAt;



  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt$1(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  var max$1 = Math.max;
  var min$3 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max$1(min$3(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var sloppyArrayMethod = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !method || !fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;


  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AjaxLoad = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'ajaxLoad';
    var VERSION = '2.1.16';
    var DATA_KEY = 'coreui.ajaxLoad';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      NAV_PILLS: 'nav-pills',
      NAV_TABS: 'nav-tabs',
      OPEN: 'open',
      VIEW_SCRIPT: 'view-script'
    };
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      HEAD: 'head',
      NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
      NAV_LINK: '.sidebar-nav .nav-link',
      NAV_ITEM: '.sidebar-nav .nav-item',
      VIEW_SCRIPT: '.view-script'
    };
    var Default = {
      defaultPage: 'main.html',
      errorPage: '404.html',
      subpagesDirectory: 'views/'
    };

    var AjaxLoad =
    /*#__PURE__*/
    function () {
      function AjaxLoad(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        var url = location.hash.replace(/^#/, '');

        if (url !== '') {
          this.setUpUrl(url);
        } else {
          this.setUpUrl(this._config.defaultPage);
        }

        this._removeEventListeners();

        this._addEventListeners();
      } // Getters


      var _proto = AjaxLoad.prototype;

      // Public
      _proto.loadPage = function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src, element) {
          if (element === void 0) {
            element = 0;
          }

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      };

      _proto.setUpUrl = function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $(Selector.NAV_DROPDOWN + ":has(a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"])").addClass(ClassName.OPEN);
        $(Selector.NAV_ITEM + " a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"]").addClass(ClassName.ACTIVE);
        this.loadPage(url);
      };

      _proto.loadBlank = function loadBlank(url) {
        window.open(url);
      };

      _proto.loadTop = function loadTop(url) {
        window.location = url;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = Object.assign({}, Default, {}, config);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      };

      _proto._removeEventListeners = function _removeEventListeners() {
        $(document).off(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]");
      } // Static
      ;

      AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      };

      _createClass(AjaxLoad, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return AjaxLoad;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = AjaxLoad._jQueryInterface;
    $.fn[NAME].Constructor = AjaxLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AjaxLoad._jQueryInterface;
    };

    return AjaxLoad;
  }($);

  var SPECIES$4 = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max$2 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var removeClasses = function removeClasses(classNames) {
    return classNames.map(function (className) {
      return document.body.classList.contains(className);
    }).indexOf(true) !== -1;
  };

  var toggleClasses = function toggleClasses(toggleClass, classNames) {
    var breakpoint = classNames.indexOf(toggleClass);
    var newClassNames = classNames.slice(0, breakpoint + 1);

    if (removeClasses(newClassNames)) {
      newClassNames.map(function (className) {
        return document.body.classList.remove(className);
      });
    } else {
      document.body.classList.add(toggleClass);
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AsideMenu = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'aside-menu';
    var VERSION = '2.1.16';
    var DATA_KEY = 'coreui.aside-menu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      CLICK: 'click',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle'
    };
    var Selector = {
      BODY: 'body',
      ASIDE_MENU: '.aside-menu',
      ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
    };
    var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var AsideMenu =
    /*#__PURE__*/
    function () {
      function AsideMenu(element) {
        this._element = element;

        this._removeEventListeners();

        this._addEventListeners();
      } // Getters


      var _proto = AsideMenu.prototype;

      // Private
      _proto._addEventListeners = function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);
        });
      };

      _proto._removeEventListeners = function _removeEventListeners() {
        $(document).off(Event.CLICK, Selector.ASIDE_MENU_TOGGLER);
      } // Static
      ;

      AsideMenu._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(AsideMenu, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return AsideMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).one(Event.LOAD_DATA_API, function () {
      var asideMenu = $(Selector.ASIDE_MENU);

      AsideMenu._jQueryInterface.call(asideMenu);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = AsideMenu._jQueryInterface;
    $.fn[NAME].Constructor = AsideMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsideMenu._jQueryInterface;
    };

    return AsideMenu;
  }($);

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    createNonEnumerableProperty(ArrayPrototype$1, UNSCOPABLES, objectCreate(null));
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var $find = arrayIteration.find;


  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  // @@match logic
  fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : regexp[MATCH];
        return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative(nativeMatch, regexp, this);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);

        if (!rx.global) return regexpExecAbstract(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$3 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
    start: createMethod$3(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
    end: createMethod$3(2),
    // `String.prototype.trim` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.trim
    trim: createMethod$3(3)
  };

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var forcedStringTrimMethod = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;


  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.16): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var Sidebar = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'sidebar';
    var VERSION = '2.1.16';
    var DATA_KEY = 'coreui.sidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      transition: 400
    };
    var ClassName = {
      ACTIVE: 'active',
      BRAND_MINIMIZED: 'brand-minimized',
      NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
      NAV_LINK_QUERIED: 'nav-link-queried',
      OPEN: 'open',
      SIDEBAR_FIXED: 'sidebar-fixed',
      SIDEBAR_MINIMIZED: 'sidebar-minimized',
      SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
    };
    var Event = {
      CLICK: 'click',
      DESTROY: 'destroy',
      INIT: 'init',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle',
      UPDATE: 'update'
    };
    var Selector = {
      BODY: 'body',
      BRAND_MINIMIZER: '.brand-minimizer',
      NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
      NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
      NAV_ITEM: '.nav-item',
      NAV_LINK: '.nav-link',
      NAV_LINK_QUERIED: '.nav-link-queried',
      NAVIGATION_CONTAINER: '.sidebar-nav',
      NAVIGATION: '.sidebar-nav > .nav',
      SIDEBAR: '.sidebar',
      SIDEBAR_MINIMIZER: '.sidebar-minimizer',
      SIDEBAR_TOGGLER: '.sidebar-toggler',
      SIDEBAR_SCROLL: '.sidebar-scroll'
    };
    var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sidebar =
    /*#__PURE__*/
    function () {
      function Sidebar(element) {
        this._element = element;
        this.mobile = false;
        this.ps = null;
        this.perfectScrollbar(Event.INIT);
        this.setActiveLink();
        this._breakpointTest = this._breakpointTest.bind(this);
        this._clickOutListener = this._clickOutListener.bind(this);

        this._removeEventListeners();

        this._addEventListeners();

        this._addMediaQuery();
      } // Getters


      var _proto = Sidebar.prototype;

      // Public
      _proto.perfectScrollbar = function perfectScrollbar(event) {
        var _this = this;

        if (typeof PerfectScrollbar !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      };

      _proto.makeScrollbar = function makeScrollbar() {
        var container = Selector.SIDEBAR_SCROLL;

        if (document.querySelector(container) === null) {
          container = Selector.NAVIGATION_CONTAINER;

          if (document.querySelector(container) === null) {
            return null;
          }
        }

        var ps = new PerfectScrollbar(document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      };

      _proto.destroyScrollbar = function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      };

      _proto.setActiveLink = function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(ClassName.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private
      ;

      _proto._addMediaQuery = function _addMediaQuery() {
        var sm = getStyle('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: " + smVal + "px)");

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      };

      _proto._breakpointTest = function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      };

      _proto._clickOutListener = function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      };

      _proto._addClickOut = function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._removeClickOut = function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._toggleClickOut = function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      };

      _proto._removeEventListeners = function _removeEventListeners() {
        $(document).off(Event.CLICK, Selector.BRAND_MINIMIZER);
        $(document).off(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE);
        $(document).off(Event.CLICK, Selector.SIDEBAR_MINIMIZER);
        $(document).off(Event.CLICK, Selector.SIDEBAR_TOGGLER);
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").off(Event.CLICK);
      } // Static
      ;

      Sidebar._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sidebar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sidebar;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).one(Event.LOAD_DATA_API, function () {
      var sidebar = $(Selector.SIDEBAR);

      Sidebar._jQueryInterface.call(sidebar);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    return Sidebar;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.16): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.16): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG$2] = 'z';

  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  var objectToString = String(test) !== '[object z]' ? function toString() {
    return '[object ' + classof(this) + ']';
  } : test.toString;

  var ObjectPrototype$1 = Object.prototype;

  // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  if (objectToString !== ObjectPrototype$1.toString) {
    redefine(ObjectPrototype$1, 'toString', objectToString, { unsafe: true });
  }

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.16): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  window.getStyle = getStyle;
  window.hexToRgb = hexToRgb;
  window.hexToRgba = hexToRgba;
  window.rgbToHex = rgbToHex;

  exports.AjaxLoad = AjaxLoad;
  exports.AsideMenu = AsideMenu;
  exports.Sidebar = Sidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=coreui.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-table/dist/bootstrap-table.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.15.5
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){ true?module.exports=e(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")):undefined}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var n,o,r,a="object",s=function(t){return t&&t.Math==Math&&t},l=s(typeof globalThis==a&&globalThis)||s(typeof window==a&&window)||s(typeof self==a&&self)||s(typeof e==a&&e)||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},h=!c((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),u={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,f={f:d&&!u.call({1:2},1)?function(t){var e=d(this,t);return!!e&&e.enumerable}:u},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},g={}.toString,v=function(t){return g.call(t).slice(8,-1)},b="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?b.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},w=function(t){return y(m(t))},S=function(t){return"object"==typeof t?null!==t:"function"==typeof t},x=function(t,e){if(!S(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!S(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!S(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!S(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")},k={}.hasOwnProperty,O=function(t,e){return k.call(t,e)},T=l.document,C=S(T)&&S(T.createElement),P=function(t){return C?T.createElement(t):{}},$=!h&&!c((function(){return 7!=Object.defineProperty(P("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,A={f:h?I:function(t,e){if(t=w(t),e=x(e,!0),$)try{return I(t,e)}catch(t){}if(O(t,e))return p(!f.f.call(t,e),t[e])}},E=function(t){if(!S(t))throw TypeError(String(t)+" is not an object");return t},R=Object.defineProperty,N={f:h?R:function(t,e,i){if(E(t),e=x(e,!0),E(i),$)try{return R(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},j=h?function(t,e,i){return N.f(t,e,p(1,i))}:function(t,e,i){return t[e]=i,t},F=function(t,e){try{j(l,t,e)}catch(i){l[t]=e}return e},_=i((function(t){var e=l["__core-js_shared__"]||F("__core-js_shared__",{});(t.exports=function(t,i){return e[t]||(e[t]=void 0!==i?i:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),V=_("native-function-to-string",Function.toString),B=l.WeakMap,L="function"==typeof B&&/native code/.test(V.call(B)),D=0,H=Math.random(),M=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+H).toString(36)},U=_("keys"),q=function(t){return U[t]||(U[t]=M(t))},z={},W=l.WeakMap;if(L){var G=new W,K=G.get,J=G.has,Y=G.set;n=function(t,e){return Y.call(G,t,e),e},o=function(t){return K.call(G,t)||{}},r=function(t){return J.call(G,t)}}else{var X=q("state");z[X]=!0,n=function(t,e){return j(t,X,e),e},o=function(t){return O(t,X)?t[X]:{}},r=function(t){return O(t,X)}}var Q={set:n,get:o,has:r,enforce:function(t){return r(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var i;if(!S(e)||(i=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}},Z=i((function(t){var e=Q.get,i=Q.enforce,n=String(V).split("toString");_("inspectSource",(function(t){return V.call(t)})),(t.exports=function(t,e,o,r){var a=!!r&&!!r.unsafe,s=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof o&&("string"!=typeof e||O(o,"name")||j(o,"name",e),i(o).source=n.join("string"==typeof e?e:"")),t!==l?(a?!c&&t[e]&&(s=!0):delete t[e],s?t[e]=o:j(t,e,o)):s?t[e]=o:F(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||V.call(this)}))})),tt=l,et=function(t){return"function"==typeof t?t:void 0},it=function(t,e){return arguments.length<2?et(tt[t])||et(l[t]):tt[t]&&tt[t][e]||l[t]&&l[t][e]},nt=Math.ceil,ot=Math.floor,rt=function(t){return isNaN(t=+t)?0:(t>0?ot:nt)(t)},at=Math.min,st=function(t){return t>0?at(rt(t),9007199254740991):0},lt=Math.max,ct=Math.min,ht=function(t,e){var i=rt(t);return i<0?lt(i+e,0):ct(i,e)},ut=function(t){return function(e,i,n){var o,r=w(e),a=st(r.length),s=ht(n,a);if(t&&i!=i){for(;a>s;)if((o=r[s++])!=o)return!0}else for(;a>s;s++)if((t||s in r)&&r[s]===i)return t||s||0;return!t&&-1}},dt={includes:ut(!0),indexOf:ut(!1)},ft=dt.indexOf,pt=function(t,e){var i,n=w(t),o=0,r=[];for(i in n)!O(z,i)&&O(n,i)&&r.push(i);for(;e.length>o;)O(n,i=e[o++])&&(~ft(r,i)||r.push(i));return r},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vt=gt.concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return pt(t,vt)}},yt={f:Object.getOwnPropertySymbols},mt=it("Reflect","ownKeys")||function(t){var e=bt.f(E(t)),i=yt.f;return i?e.concat(i(t)):e},wt=function(t,e){for(var i=mt(e),n=N.f,o=A.f,r=0;r<i.length;r++){var a=i[r];O(t,a)||n(t,a,o(e,a))}},St=/#|\.prototype\./,xt=function(t,e){var i=Ot[kt(t)];return i==Ct||i!=Tt&&("function"==typeof e?c(e):!!e)},kt=xt.normalize=function(t){return String(t).replace(St,".").toLowerCase()},Ot=xt.data={},Tt=xt.NATIVE="N",Ct=xt.POLYFILL="P",Pt=xt,$t=A.f,It=function(t,e){var i,n,o,r,a,s=t.target,c=t.global,h=t.stat;if(i=c?l:h?l[s]||F(s,{}):(l[s]||{}).prototype)for(n in e){if(r=e[n],o=t.noTargetGet?(a=$t(i,n))&&a.value:i[n],!Pt(c?n:s+(h?".":"#")+n,t.forced)&&void 0!==o){if(typeof r==typeof o)continue;wt(r,o)}(t.sham||o&&o.sham)&&j(r,"sham",!0),Z(i,n,r,t)}},At=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Et=Array.isArray||function(t){return"Array"==v(t)},Rt=function(t){return Object(m(t))},Nt=Object.keys||function(t){return pt(t,gt)},jt=h?Object.defineProperties:function(t,e){E(t);for(var i,n=Nt(e),o=n.length,r=0;o>r;)N.f(t,i=n[r++],e[i]);return t},Ft=it("document","documentElement"),_t=q("IE_PROTO"),Vt=function(){},Bt=function(){var t,e=P("iframe"),i=gt.length;for(e.style.display="none",Ft.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Bt=t.F;i--;)delete Bt.prototype[gt[i]];return Bt()},Lt=Object.create||function(t,e){var i;return null!==t?(Vt.prototype=E(t),i=new Vt,Vt.prototype=null,i[_t]=t):i=Bt(),void 0===e?i:jt(i,e)};z[_t]=!0;var Dt=bt.f,Ht={}.toString,Mt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ut={f:function(t){return Mt&&"[object Window]"==Ht.call(t)?function(t){try{return Dt(t)}catch(t){return Mt.slice()}}(t):Dt(w(t))}},qt=l.Symbol,zt=_("wks"),Wt=function(t){return zt[t]||(zt[t]=At&&qt[t]||(At?qt:M)("Symbol."+t))},Gt={f:Wt},Kt=N.f,Jt=function(t){var e=tt.Symbol||(tt.Symbol={});O(e,t)||Kt(e,t,{value:Gt.f(t)})},Yt=N.f,Xt=Wt("toStringTag"),Qt=function(t,e,i){t&&!O(t=i?t:t.prototype,Xt)&&Yt(t,Xt,{configurable:!0,value:e})},Zt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},te=function(t,e,i){if(Zt(t),void 0===e)return t;switch(i){case 0:return function(){return t.call(e)};case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)}}return function(){return t.apply(e,arguments)}},ee=Wt("species"),ie=function(t,e){var i;return Et(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!Et(i.prototype)?S(i)&&null===(i=i[ee])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===e?0:e)},ne=[].push,oe=function(t){var e=1==t,i=2==t,n=3==t,o=4==t,r=6==t,a=5==t||r;return function(s,l,c,h){for(var u,d,f=Rt(s),p=y(f),g=te(l,c,3),v=st(p.length),b=0,m=h||ie,w=e?m(s,v):i?m(s,0):void 0;v>b;b++)if((a||b in p)&&(d=g(u=p[b],b,f),t))if(e)w[b]=d;else if(d)switch(t){case 3:return!0;case 5:return u;case 6:return b;case 2:ne.call(w,u)}else if(o)return!1;return r?-1:n||o?o:w}},re={forEach:oe(0),map:oe(1),filter:oe(2),some:oe(3),every:oe(4),find:oe(5),findIndex:oe(6)},ae=re.forEach,se=q("hidden"),le=Wt("toPrimitive"),ce=Q.set,he=Q.getterFor("Symbol"),ue=Object.prototype,de=l.Symbol,fe=l.JSON,pe=fe&&fe.stringify,ge=A.f,ve=N.f,be=Ut.f,ye=f.f,me=_("symbols"),we=_("op-symbols"),Se=_("string-to-symbol-registry"),xe=_("symbol-to-string-registry"),ke=_("wks"),Oe=l.QObject,Te=!Oe||!Oe.prototype||!Oe.prototype.findChild,Ce=h&&c((function(){return 7!=Lt(ve({},"a",{get:function(){return ve(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=ge(ue,e);n&&delete ue[e],ve(t,e,i),n&&t!==ue&&ve(ue,e,n)}:ve,Pe=function(t,e){var i=me[t]=Lt(de.prototype);return ce(i,{type:"Symbol",tag:t,description:e}),h||(i.description=e),i},$e=At&&"symbol"==typeof de.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof de},Ie=function(t,e,i){t===ue&&Ie(we,e,i),E(t);var n=x(e,!0);return E(i),O(me,n)?(i.enumerable?(O(t,se)&&t[se][n]&&(t[se][n]=!1),i=Lt(i,{enumerable:p(0,!1)})):(O(t,se)||ve(t,se,p(1,{})),t[se][n]=!0),Ce(t,n,i)):ve(t,n,i)},Ae=function(t,e){E(t);var i=w(e),n=Nt(i).concat(je(i));return ae(n,(function(e){h&&!Ee.call(i,e)||Ie(t,e,i[e])})),t},Ee=function(t){var e=x(t,!0),i=ye.call(this,e);return!(this===ue&&O(me,e)&&!O(we,e))&&(!(i||!O(this,e)||!O(me,e)||O(this,se)&&this[se][e])||i)},Re=function(t,e){var i=w(t),n=x(e,!0);if(i!==ue||!O(me,n)||O(we,n)){var o=ge(i,n);return!o||!O(me,n)||O(i,se)&&i[se][n]||(o.enumerable=!0),o}},Ne=function(t){var e=be(w(t)),i=[];return ae(e,(function(t){O(me,t)||O(z,t)||i.push(t)})),i},je=function(t){var e=t===ue,i=be(e?we:w(t)),n=[];return ae(i,(function(t){!O(me,t)||e&&!O(ue,t)||n.push(me[t])})),n};At||(Z((de=function(){if(this instanceof de)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),i=function(t){this===ue&&i.call(we,t),O(this,se)&&O(this[se],e)&&(this[se][e]=!1),Ce(this,e,p(1,t))};return h&&Te&&Ce(ue,e,{configurable:!0,set:i}),Pe(e,t)}).prototype,"toString",(function(){return he(this).tag})),f.f=Ee,N.f=Ie,A.f=Re,bt.f=Ut.f=Ne,yt.f=je,h&&(ve(de.prototype,"description",{configurable:!0,get:function(){return he(this).description}}),Z(ue,"propertyIsEnumerable",Ee,{unsafe:!0})),Gt.f=function(t){return Pe(Wt(t),t)}),It({global:!0,wrap:!0,forced:!At,sham:!At},{Symbol:de}),ae(Nt(ke),(function(t){Jt(t)})),It({target:"Symbol",stat:!0,forced:!At},{for:function(t){var e=String(t);if(O(Se,e))return Se[e];var i=de(e);return Se[e]=i,xe[i]=e,i},keyFor:function(t){if(!$e(t))throw TypeError(t+" is not a symbol");if(O(xe,t))return xe[t]},useSetter:function(){Te=!0},useSimple:function(){Te=!1}}),It({target:"Object",stat:!0,forced:!At,sham:!h},{create:function(t,e){return void 0===e?Lt(t):Ae(Lt(t),e)},defineProperty:Ie,defineProperties:Ae,getOwnPropertyDescriptor:Re}),It({target:"Object",stat:!0,forced:!At},{getOwnPropertyNames:Ne,getOwnPropertySymbols:je}),It({target:"Object",stat:!0,forced:c((function(){yt.f(1)}))},{getOwnPropertySymbols:function(t){return yt.f(Rt(t))}}),fe&&It({target:"JSON",stat:!0,forced:!At||c((function(){var t=de();return"[null]"!=pe([t])||"{}"!=pe({a:t})||"{}"!=pe(Object(t))}))},{stringify:function(t){for(var e,i,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(i=e=n[1],(S(e)||void 0!==t)&&!$e(t))return Et(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!$e(e))return e}),n[1]=e,pe.apply(fe,n)}}),de.prototype[le]||j(de.prototype,le,de.prototype.valueOf),Qt(de,"Symbol"),z[se]=!0;var Fe=N.f,_e=l.Symbol;if(h&&"function"==typeof _e&&(!("description"in _e.prototype)||void 0!==_e().description)){var Ve={},Be=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof Be?new _e(t):void 0===t?_e():_e(t);return""===t&&(Ve[e]=!0),e};wt(Be,_e);var Le=Be.prototype=_e.prototype;Le.constructor=Be;var De=Le.toString,He="Symbol(test)"==String(_e("test")),Me=/^Symbol\((.*)\)[^)]+$/;Fe(Le,"description",{configurable:!0,get:function(){var t=S(this)?this.valueOf():this,e=De.call(t);if(O(Ve,t))return"";var i=He?e.slice(7,-1):e.replace(Me,"$1");return""===i?void 0:i}}),It({global:!0,forced:!0},{Symbol:Be})}Jt("iterator");var Ue=function(t,e,i){var n=x(e);n in t?N.f(t,n,p(0,i)):t[n]=i},qe=Wt("species"),ze=function(t){return!c((function(){var e=[];return(e.constructor={})[qe]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},We=Wt("isConcatSpreadable"),Ge=!c((function(){var t=[];return t[We]=!1,t.concat()[0]!==t})),Ke=ze("concat"),Je=function(t){if(!S(t))return!1;var e=t[We];return void 0!==e?!!e:Et(t)};It({target:"Array",proto:!0,forced:!Ge||!Ke},{concat:function(t){var e,i,n,o,r,a=Rt(this),s=ie(a,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?a:arguments[e],Je(r)){if(l+(o=st(r.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(i=0;i<o;i++,l++)i in r&&Ue(s,l,r[i])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Ue(s,l++,r)}return s.length=l,s}});var Ye=re.filter;It({target:"Array",proto:!0,forced:!ze("filter")},{filter:function(t){return Ye(this,t,arguments.length>1?arguments[1]:void 0)}});var Xe=Wt("unscopables"),Qe=Array.prototype;null==Qe[Xe]&&j(Qe,Xe,Lt(null));var Ze=function(t){Qe[Xe][t]=!0},ti=re.find,ei=!0;"find"in[]&&Array(1).find((function(){ei=!1})),It({target:"Array",proto:!0,forced:ei},{find:function(t){return ti(this,t,arguments.length>1?arguments[1]:void 0)}}),Ze("find");var ii=re.findIndex,ni=!0;"findIndex"in[]&&Array(1).findIndex((function(){ni=!1})),It({target:"Array",proto:!0,forced:ni},{findIndex:function(t){return ii(this,t,arguments.length>1?arguments[1]:void 0)}}),Ze("findIndex");var oi=dt.includes;It({target:"Array",proto:!0},{includes:function(t){return oi(this,t,arguments.length>1?arguments[1]:void 0)}}),Ze("includes");var ri=function(t,e){var i=[][t];return!i||!c((function(){i.call(null,e||function(){throw 1},1)}))},ai=dt.indexOf,si=[].indexOf,li=!!si&&1/[1].indexOf(1,-0)<0,ci=ri("indexOf");It({target:"Array",proto:!0,forced:li||ci},{indexOf:function(t){return li?si.apply(this,arguments)||0:ai(this,t,arguments.length>1?arguments[1]:void 0)}});var hi,ui,di,fi=!c((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),pi=q("IE_PROTO"),gi=Object.prototype,vi=fi?Object.getPrototypeOf:function(t){return t=Rt(t),O(t,pi)?t[pi]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?gi:null},bi=Wt("iterator"),yi=!1;[].keys&&("next"in(di=[].keys())?(ui=vi(vi(di)))!==Object.prototype&&(hi=ui):yi=!0),null==hi&&(hi={}),O(hi,bi)||j(hi,bi,(function(){return this}));var mi={IteratorPrototype:hi,BUGGY_SAFARI_ITERATORS:yi},wi=mi.IteratorPrototype,Si=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,n){return E(i),function(t){if(!S(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(i,n):i.__proto__=n,i}}():void 0),xi=mi.IteratorPrototype,ki=mi.BUGGY_SAFARI_ITERATORS,Oi=Wt("iterator"),Ti=function(){return this},Ci=function(t,e,i,n,o,r,a){!function(t,e,i){var n=e+" Iterator";t.prototype=Lt(wi,{next:p(1,i)}),Qt(t,n,!1)}(i,e,n);var s,l,c,h=function(t){if(t===o&&v)return v;if(!ki&&t in f)return f[t];switch(t){case"keys":case"values":case"entries":return function(){return new i(this,t)}}return function(){return new i(this)}},u=e+" Iterator",d=!1,f=t.prototype,g=f[Oi]||f["@@iterator"]||o&&f[o],v=!ki&&g||h(o),b="Array"==e&&f.entries||g;if(b&&(s=vi(b.call(new t)),xi!==Object.prototype&&s.next&&(vi(s)!==xi&&(Si?Si(s,xi):"function"!=typeof s[Oi]&&j(s,Oi,Ti)),Qt(s,u,!0))),"values"==o&&g&&"values"!==g.name&&(d=!0,v=function(){return g.call(this)}),f[Oi]!==v&&j(f,Oi,v),o)if(l={values:h("values"),keys:r?v:h("keys"),entries:h("entries")},a)for(c in l)!ki&&!d&&c in f||Z(f,c,l[c]);else It({target:e,proto:!0,forced:ki||d},l);return l},Pi=Q.set,$i=Q.getterFor("Array Iterator"),Ii=Ci(Array,"Array",(function(t,e){Pi(this,{type:"Array Iterator",target:w(t),index:0,kind:e})}),(function(){var t=$i(this),e=t.target,i=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");Ze("keys"),Ze("values"),Ze("entries");var Ai=[].join,Ei=y!=Object,Ri=ri("join",",");It({target:"Array",proto:!0,forced:Ei||Ri},{join:function(t){return Ai.call(w(this),void 0===t?",":t)}});var Ni=Wt("species"),ji=[].slice,Fi=Math.max;It({target:"Array",proto:!0,forced:!ze("slice")},{slice:function(t,e){var i,n,o,r=w(this),a=st(r.length),s=ht(t,a),l=ht(void 0===e?a:e,a);if(Et(r)&&("function"!=typeof(i=r.constructor)||i!==Array&&!Et(i.prototype)?S(i)&&null===(i=i[Ni])&&(i=void 0):i=void 0,i===Array||void 0===i))return ji.call(r,s,l);for(n=new(void 0===i?Array:i)(Fi(l-s,0)),o=0;s<l;s++,o++)s in r&&Ue(n,o,r[s]);return n.length=o,n}});var _i=[].sort,Vi=[1,2,3],Bi=c((function(){Vi.sort(void 0)})),Li=c((function(){Vi.sort(null)})),Di=ri("sort");It({target:"Array",proto:!0,forced:Bi||!Li||Di},{sort:function(t){return void 0===t?_i.call(Rt(this)):_i.call(Rt(this),Zt(t))}});var Hi=Math.max,Mi=Math.min;It({target:"Array",proto:!0,forced:!ze("splice")},{splice:function(t,e){var i,n,o,r,a,s,l=Rt(this),c=st(l.length),h=ht(t,c),u=arguments.length;if(0===u?i=n=0:1===u?(i=0,n=c-h):(i=u-2,n=Mi(Hi(rt(e),0),c-h)),c+i-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(o=ie(l,n),r=0;r<n;r++)(a=h+r)in l&&Ue(o,r,l[a]);if(o.length=n,i<n){for(r=h;r<c-n;r++)s=r+i,(a=r+n)in l?l[s]=l[a]:delete l[s];for(r=c;r>c-n+i;r--)delete l[r-1]}else if(i>n)for(r=c-n;r>h;r--)s=r+i-1,(a=r+n-1)in l?l[s]=l[a]:delete l[s];for(r=0;r<i;r++)l[r+h]=arguments[r+2];return l.length=c-n+i,o}});var Ui=function(t,e,i){var n,o;return Si&&"function"==typeof(n=e.constructor)&&n!==i&&S(o=n.prototype)&&o!==i.prototype&&Si(t,o),t},qi="\t\n\v\f\r                　\u2028\u2029\ufeff",zi="["+qi+"]",Wi=RegExp("^"+zi+zi+"*"),Gi=RegExp(zi+zi+"*$"),Ki=function(t){return function(e){var i=String(m(e));return 1&t&&(i=i.replace(Wi,"")),2&t&&(i=i.replace(Gi,"")),i}},Ji={start:Ki(1),end:Ki(2),trim:Ki(3)},Yi=bt.f,Xi=A.f,Qi=N.f,Zi=Ji.trim,tn=l.Number,en=tn.prototype,nn="Number"==v(Lt(en)),on=function(t){var e,i,n,o,r,a,s,l,c=x(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=Zi(c)).charCodeAt(0))||45===e){if(88===(i=c.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(a=(r=c.slice(2)).length,s=0;s<a;s++)if((l=r.charCodeAt(s))<48||l>o)return NaN;return parseInt(r,n)}return+c};if(Pt("Number",!tn(" 0o1")||!tn("0b1")||tn("+0x1"))){for(var rn,an=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof an&&(nn?c((function(){en.valueOf.call(i)})):"Number"!=v(i))?Ui(new tn(on(e)),i,an):on(e)},sn=h?Yi(tn):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),ln=0;sn.length>ln;ln++)O(tn,rn=sn[ln])&&!O(an,rn)&&Qi(an,rn,Xi(tn,rn));an.prototype=en,en.constructor=an,Z(l,"Number",an)}var cn=Object.assign,hn=!cn||c((function(){var t={},e={},i=Symbol();return t[i]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=cn({},t)[i]||"abcdefghijklmnopqrst"!=Nt(cn({},e)).join("")}))?function(t,e){for(var i=Rt(t),n=arguments.length,o=1,r=yt.f,a=f.f;n>o;)for(var s,l=y(arguments[o++]),c=r?Nt(l).concat(r(l)):Nt(l),u=c.length,d=0;u>d;)s=c[d++],h&&!a.call(l,s)||(i[s]=l[s]);return i}:cn;It({target:"Object",stat:!0,forced:Object.assign!==hn},{assign:hn});var un=f.f,dn=function(t){return function(e){for(var i,n=w(e),o=Nt(n),r=o.length,a=0,s=[];r>a;)i=o[a++],h&&!un.call(n,i)||s.push(t?[i,n[i]]:n[i]);return s}},fn={entries:dn(!0),values:dn(!1)}.entries;It({target:"Object",stat:!0},{entries:function(t){return fn(t)}});var pn=Wt("toStringTag"),gn="Arguments"==v(function(){return arguments}()),vn={};vn[Wt("toStringTag")]="z";var bn="[object z]"!==String(vn)?function(){return"[object "+function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),pn))?i:gn?v(e):"Object"==(n=v(e))&&"function"==typeof e.callee?"Arguments":n}(this)+"]"}:vn.toString,yn=Object.prototype;bn!==yn.toString&&Z(yn,"toString",bn,{unsafe:!0});var mn=Ji.trim,wn=l.parseFloat,Sn=1/wn(qi+"-0")!=-1/0?function(t){var e=mn(String(t)),i=wn(e);return 0===i&&"-"==e.charAt(0)?-0:i}:wn;It({global:!0,forced:parseFloat!=Sn},{parseFloat:Sn});var xn=Ji.trim,kn=l.parseInt,On=/^[+-]?0[Xx]/,Tn=8!==kn(qi+"08")||22!==kn(qi+"0x16")?function(t,e){var i=xn(String(t));return kn(i,e>>>0||(On.test(i)?16:10))}:kn;It({global:!0,forced:parseInt!=Tn},{parseInt:Tn});var Cn=function(){var t=E(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Pn=RegExp.prototype,$n=Pn.toString,In=c((function(){return"/a/b"!=$n.call({source:"a",flags:"b"})})),An="toString"!=$n.name;(In||An)&&Z(RegExp.prototype,"toString",(function(){var t=E(this),e=String(t.source),i=t.flags;return"/"+e+"/"+String(void 0===i&&t instanceof RegExp&&!("flags"in Pn)?Cn.call(t):i)}),{unsafe:!0});var En=Wt("match"),Rn=function(t){var e;return S(t)&&(void 0!==(e=t[En])?!!e:"RegExp"==v(t))},Nn=function(t){if(Rn(t))throw TypeError("The method doesn't accept regular expressions");return t},jn=Wt("match");It({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[jn]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~String(m(this)).indexOf(Nn(t),arguments.length>1?arguments[1]:void 0)}});var Fn=function(t){return function(e,i){var n,o,r=String(m(e)),a=rt(i),s=r.length;return a<0||a>=s?t?"":void 0:(n=r.charCodeAt(a))<55296||n>56319||a+1===s||(o=r.charCodeAt(a+1))<56320||o>57343?t?r.charAt(a):n:t?r.slice(a,a+2):o-56320+(n-55296<<10)+65536}},_n={codeAt:Fn(!1),charAt:Fn(!0)},Vn=_n.charAt,Bn=Q.set,Ln=Q.getterFor("String Iterator");Ci(String,"String",(function(t){Bn(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Ln(this),i=e.string,n=e.index;return n>=i.length?{value:void 0,done:!0}:(t=Vn(i,n),e.index+=t.length,{value:t,done:!1})}));var Dn,Hn,Mn=RegExp.prototype.exec,Un=String.prototype.replace,qn=Mn,zn=(Dn=/a/,Hn=/b*/g,Mn.call(Dn,"a"),Mn.call(Hn,"a"),0!==Dn.lastIndex||0!==Hn.lastIndex),Wn=void 0!==/()??/.exec("")[1];(zn||Wn)&&(qn=function(t){var e,i,n,o,r=this;return Wn&&(i=new RegExp("^"+r.source+"$(?!\\s)",Cn.call(r))),zn&&(e=r.lastIndex),n=Mn.call(r,t),zn&&n&&(r.lastIndex=r.global?n.index+n[0].length:e),Wn&&n&&n.length>1&&Un.call(n[0],i,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n});var Gn=qn,Kn=Wt("species"),Jn=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Yn=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),Xn=function(t,e,i,n){var o=Wt(t),r=!c((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=r&&!c((function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[Kn]=function(){return i}),i[o](""),!e}));if(!r||!a||"replace"===t&&!Jn||"split"===t&&!Yn){var s=/./[o],l=i(o,""[t],(function(t,e,i,n,o){return e.exec===Gn?r&&!o?{done:!0,value:s.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}})),h=l[0],u=l[1];Z(String.prototype,t,h),Z(RegExp.prototype,o,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}),n&&j(RegExp.prototype[o],"sham",!0)}},Qn=_n.charAt,Zn=function(t,e,i){return e+(i?Qn(t,e).length:1)},to=function(t,e){var i=t.exec;if("function"==typeof i){var n=i.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==v(t))throw TypeError("RegExp#exec called on incompatible receiver");return Gn.call(t,e)},eo=Math.max,io=Math.min,no=Math.floor,oo=/\$([$&'`]|\d\d?|<[^>]*>)/g,ro=/\$([$&'`]|\d\d?)/g;Xn("replace",2,(function(t,e,i){return[function(i,n){var o=m(this),r=null==i?void 0:i[t];return void 0!==r?r.call(i,o,n):e.call(String(o),i,n)},function(t,o){var r=i(e,t,this,o);if(r.done)return r.value;var a=E(t),s=String(this),l="function"==typeof o;l||(o=String(o));var c=a.global;if(c){var h=a.unicode;a.lastIndex=0}for(var u=[];;){var d=to(a,s);if(null===d)break;if(u.push(d),!c)break;""===String(d[0])&&(a.lastIndex=Zn(s,st(a.lastIndex),h))}for(var f,p="",g=0,v=0;v<u.length;v++){d=u[v];for(var b=String(d[0]),y=eo(io(rt(d.index),s.length),0),m=[],w=1;w<d.length;w++)m.push(void 0===(f=d[w])?f:String(f));var S=d.groups;if(l){var x=[b].concat(m,y,s);void 0!==S&&x.push(S);var k=String(o.apply(void 0,x))}else k=n(b,s,y,m,S,o);y>=g&&(p+=s.slice(g,y)+k,g=y+b.length)}return p+s.slice(g)}];function n(t,i,n,o,r,a){var s=n+t.length,l=o.length,c=ro;return void 0!==r&&(r=Rt(r),c=oo),e.call(a,c,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,n);case"'":return i.slice(s);case"<":c=r[a.slice(1,-1)];break;default:var h=+a;if(0===h)return e;if(h>l){var u=no(h/10);return 0===u?e:u<=l?void 0===o[u-1]?a.charAt(1):o[u-1]+a.charAt(1):e}c=o[h-1]}return void 0===c?"":c}))}}));var ao=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};Xn("search",1,(function(t,e,i){return[function(e){var i=m(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var o=E(t),r=String(this),a=o.lastIndex;ao(a,0)||(o.lastIndex=0);var s=to(o,r);return ao(o.lastIndex,a)||(o.lastIndex=a),null===s?-1:s.index}]}));var so=Wt("species"),lo=[].push,co=Math.min,ho=!c((function(){return!RegExp(4294967295,"y")}));Xn("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(m(this)),o=void 0===i?4294967295:i>>>0;if(0===o)return[];if(void 0===t)return[n];if(!Rn(t))return e.call(n,t,o);for(var r,a,s,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,u=new RegExp(t.source,c+"g");(r=Gn.call(u,n))&&!((a=u.lastIndex)>h&&(l.push(n.slice(h,r.index)),r.length>1&&r.index<n.length&&lo.apply(l,r.slice(1)),s=r[0].length,h=a,l.length>=o));)u.lastIndex===r.index&&u.lastIndex++;return h===n.length?!s&&u.test("")||l.push(""):l.push(n.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var o=m(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,o,i):n.call(String(o),e,i)},function(t,o){var r=i(n,t,this,o,n!==e);if(r.done)return r.value;var a=E(t),s=String(this),l=function(t,e){var i,n=E(t).constructor;return void 0===n||null==(i=E(n)[so])?e:Zt(i)}(a,RegExp),c=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(ho?"y":"g"),u=new l(ho?a:"^(?:"+a.source+")",h),d=void 0===o?4294967295:o>>>0;if(0===d)return[];if(0===s.length)return null===to(u,s)?[s]:[];for(var f=0,p=0,g=[];p<s.length;){u.lastIndex=ho?p:0;var v,b=to(u,ho?s:s.slice(p));if(null===b||(v=co(st(u.lastIndex+(ho?0:p)),s.length))===f)p=Zn(s,p,c);else{if(g.push(s.slice(f,p)),g.length===d)return g;for(var y=1;y<=b.length-1;y++)if(g.push(b[y]),g.length===d)return g;p=f=v}}return g.push(s.slice(f)),g}]}),!ho);var uo=Ji.trim;It({target:"String",proto:!0,forced:function(t){return c((function(){return!!qi[t]()||"​᠎"!="​᠎"[t]()||qi[t].name!==t}))}("trim")},{trim:function(){return uo(this)}});var fo={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},po=re.forEach,go=ri("forEach")?function(t){return po(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach;for(var vo in fo){var bo=l[vo],yo=bo&&bo.prototype;if(yo&&yo.forEach!==go)try{j(yo,"forEach",go)}catch(t){yo.forEach=go}}var mo=Wt("iterator"),wo=Wt("toStringTag"),So=Ii.values;for(var xo in fo){var ko=l[xo],Oo=ko&&ko.prototype;if(Oo){if(Oo[mo]!==So)try{j(Oo,mo,So)}catch(t){Oo[mo]=So}if(Oo[wo]||j(Oo,wo,xo),fo[xo])for(var To in Ii)if(Oo[To]!==Ii[To])try{j(Oo,To,Ii[To])}catch(t){Oo[To]=Ii[To]}}}function Co(t){return(Co="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Po(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Io(t,e,i){return e&&$o(t.prototype,e),i&&$o(t,i),t}function Ao(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Eo(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Ro=4;try{var No=t.fn.dropdown.Constructor.VERSION;void 0!==No&&(Ro=parseInt(No,10))}catch(t){}var jo={3:{iconsPrefix:"glyphicon",icons:{paginationSwitchDown:"glyphicon-collapse-down icon-chevron-down",paginationSwitchUp:"glyphicon-collapse-up icon-chevron-up",refresh:"glyphicon-refresh icon-refresh",toggleOff:"glyphicon-list-alt icon-list-alt",toggleOn:"glyphicon-list-alt icon-list-alt",columns:"glyphicon-th icon-th",detailOpen:"glyphicon-plus icon-plus",detailClose:"glyphicon-minus icon-minus",fullscreen:"glyphicon-fullscreen",search:"glyphicon-search",clearSearch:"glyphicon-trash"},classes:{buttonsPrefix:"btn",buttons:"default",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"pull",inputGroup:"input-group",inputPrefix:"input-",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{toolbarDropdown:['<ul class="dropdown-menu" role="menu">',"</ul>"],toolbarDropdownItem:'<li role="menuitem"><label>%s</label></li>',toolbarDropdownSeparator:'<li class="divider"></li>',pageDropdown:['<ul class="dropdown-menu" role="menu">',"</ul>"],pageDropdownItem:'<li role="menuitem" class="%s"><a href="#">%s</a></li>',dropdownCaret:'<span class="caret"></span>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<span class="input-group-btn">%s</span></div>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'}},4:{iconsPrefix:"fa",icons:{paginationSwitchDown:"fa-caret-square-down",paginationSwitchUp:"fa-caret-square-up",refresh:"fa-sync",toggleOff:"fa-toggle-off",toggleOn:"fa-toggle-on",columns:"fa-th-list",detailOpen:"fa-plus",detailClose:"fa-minus",fullscreen:"fa-arrows-alt",search:"fa-search",clearSearch:"fa-trash"},classes:{buttonsPrefix:"btn",buttons:"secondary",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"float",inputGroup:"btn-group",inputPrefix:"form-control-",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{toolbarDropdown:['<div class="dropdown-menu dropdown-menu-right">',"</div>"],toolbarDropdownItem:'<label class="dropdown-item">%s</label>',pageDropdown:['<div class="dropdown-menu">',"</div>"],pageDropdownItem:'<a class="dropdown-item %s" href="#">%s</a>',toolbarDropdownSeparator:'<div class="dropdown-divider"></div>',dropdownCaret:'<span class="caret"></span>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<div class="input-group-append">%s</div></div>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'}}}[Ro],Fo={height:void 0,classes:"table table-bordered table-hover",theadClasses:"",rowStyle:function(t,e){return{}},rowAttributes:function(t,e){return{}},undefinedText:"-",locale:void 0,virtualScroll:!1,virtualScrollItemHeight:void 0,sortable:!0,sortClass:void 0,silentSort:!0,sortName:void 0,sortOrder:"asc",sortStable:!1,rememberOrder:!1,customSort:void 0,columns:[[]],data:[],url:void 0,method:"get",cache:!0,contentType:"application/json",dataType:"json",ajax:void 0,ajaxOptions:{},queryParams:function(t){return t},queryParamsType:"limit",responseHandler:function(t){return t},totalField:"total",totalNotFilteredField:"totalNotFiltered",dataField:"rows",pagination:!1,onlyInfoPagination:!1,showExtendedPagination:!1,paginationLoop:!0,sidePagination:"client",totalRows:0,totalNotFiltered:0,pageNumber:1,pageSize:10,pageList:[10,25,50,100],paginationHAlign:"right",paginationVAlign:"bottom",paginationDetailHAlign:"left",paginationPreText:"&lsaquo;",paginationNextText:"&rsaquo;",paginationSuccessivelySize:5,paginationPagesBySide:1,paginationUseIntermediate:!1,search:!1,searchOnEnterKey:!1,strictSearch:!1,visibleSearch:!1,showButtonIcons:!0,showButtonText:!1,showSearchButton:!1,showSearchClearButton:!1,trimOnSearch:!0,searchAlign:"right",searchTimeOut:500,searchText:"",customSearch:void 0,showHeader:!0,showFooter:!1,footerStyle:function(t,e){return{}},showColumns:!1,showColumnsToggleAll:!1,minimumCountColumns:1,showPaginationSwitch:!1,showRefresh:!1,showToggle:!1,showFullscreen:!1,smartDisplay:!0,escape:!1,filterOptions:{filterAlgorithm:"and"},idField:void 0,selectItemName:"btSelectItem",clickToSelect:!1,ignoreClickToSelectOn:function(t){var e=t.tagName;return["A","BUTTON"].includes(e)},singleSelect:!1,checkboxHeader:!0,maintainMetaData:!1,multipleSelectRow:!1,uniqueId:void 0,cardView:!1,detailView:!1,detailViewIcon:!0,detailViewByClick:!1,detailFormatter:function(t,e){return""},detailFilter:function(t,e){return!0},toolbar:void 0,toolbarAlign:"left",buttonsToolbar:void 0,buttonsAlign:"right",buttonsPrefix:jo.classes.buttonsPrefix,buttonsClass:jo.classes.buttons,icons:jo.icons,html:jo.html,iconSize:void 0,iconsPrefix:jo.iconsPrefix,onAll:function(t,e){return!1},onClickCell:function(t,e,i,n){return!1},onDblClickCell:function(t,e,i,n){return!1},onClickRow:function(t,e){return!1},onDblClickRow:function(t,e){return!1},onSort:function(t,e){return!1},onCheck:function(t){return!1},onUncheck:function(t){return!1},onCheckAll:function(t){return!1},onUncheckAll:function(t){return!1},onCheckSome:function(t){return!1},onUncheckSome:function(t){return!1},onLoadSuccess:function(t){return!1},onLoadError:function(t){return!1},onColumnSwitch:function(t,e){return!1},onPageChange:function(t,e){return!1},onSearch:function(t){return!1},onToggle:function(t){return!1},onPreBody:function(t){return!1},onPostBody:function(){return!1},onPostHeader:function(){return!1},onPostFooter:function(){return!1},onExpandRow:function(t,e,i){return!1},onCollapseRow:function(t,e){return!1},onRefreshOptions:function(t){return!1},onRefresh:function(t){return!1},onResetView:function(){return!1},onScrollBody:function(){return!1}},_o={formatLoadingMessage:function(){return"Loading, please wait"},formatRecordsPerPage:function(t){return"".concat(t," rows per page")},formatShowingRows:function(t,e,i,n){return void 0!==n&&n>0&&n>i?"Showing ".concat(t," to ").concat(e," of ").concat(i," rows (filtered from ").concat(n," total rows)"):"Showing ".concat(t," to ").concat(e," of ").concat(i," rows")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatSearch:function(){return"Search"},formatClearSearch:function(){return"Clear Search"},formatNoMatches:function(){return"No matching records found"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Refresh"},formatToggle:function(){return"Toggle"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Columns"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"All"}},Vo={field:void 0,title:void 0,titleTooltip:void 0,class:void 0,width:void 0,widthUnit:"px",rowspan:void 0,colspan:void 0,align:void 0,halign:void 0,falign:void 0,valign:void 0,cellStyle:void 0,radio:!1,checkbox:!1,checkboxEnabled:!0,clickToSelect:!0,showSelectTitle:!1,sortable:!1,sortName:void 0,order:"asc",sorter:void 0,visible:!0,switchable:!0,cardVisible:!0,searchable:!0,formatter:void 0,footerFormatter:void 0,detailFormatter:void 0,searchFormatter:!0,escape:!1,events:void 0};Object.assign(Fo,_o);var Bo={VERSION:"1.15.5",THEME:"bootstrap".concat(Ro),CONSTANTS:jo,DEFAULTS:Fo,COLUMN_DEFAULTS:Vo,METHODS:["getOptions","refreshOptions","getData","getSelections","getAllSelections","load","append","prepend","remove","removeAll","insertRow","updateRow","getRowByUniqueId","updateByUniqueId","removeByUniqueId","updateCell","updateCellByUniqueId","showRow","hideRow","getHiddenRows","showColumn","hideColumn","getVisibleColumns","getHiddenColumns","showAllColumns","hideAllColumns","mergeCells","checkAll","uncheckAll","checkInvert","check","uncheck","checkBy","uncheckBy","refresh","destroy","resetView","resetWidth","showLoading","hideLoading","togglePagination","toggleFullscreen","toggleView","resetSearch","filterBy","scrollTo","getScrollPosition","selectPage","prevPage","nextPage","toggleDetailView","expandRow","collapseRow","expandAllRows","collapseAllRows","updateColumnTitle","updateFormatText"],EVENTS:{"all.bs.table":"onAll","click-row.bs.table":"onClickRow","dbl-click-row.bs.table":"onDblClickRow","click-cell.bs.table":"onClickCell","dbl-click-cell.bs.table":"onDblClickCell","sort.bs.table":"onSort","check.bs.table":"onCheck","uncheck.bs.table":"onUncheck","check-all.bs.table":"onCheckAll","uncheck-all.bs.table":"onUncheckAll","check-some.bs.table":"onCheckSome","uncheck-some.bs.table":"onUncheckSome","load-success.bs.table":"onLoadSuccess","load-error.bs.table":"onLoadError","column-switch.bs.table":"onColumnSwitch","page-change.bs.table":"onPageChange","search.bs.table":"onSearch","toggle.bs.table":"onToggle","pre-body.bs.table":"onPreBody","post-body.bs.table":"onPostBody","post-header.bs.table":"onPostHeader","post-footer.bs.table":"onPostFooter","expand-row.bs.table":"onExpandRow","collapse-row.bs.table":"onCollapseRow","refresh-options.bs.table":"onRefreshOptions","reset-view.bs.table":"onResetView","refresh.bs.table":"onRefresh","scroll-body.bs.table":"onScrollBody"},LOCALES:{en:_o,"en-US":_o}},Lo=function(t,e,i,n,o,r,a,s){for(var l,c=o,h=0,u=!!a&&te(a,s,3);h<n;){if(h in i){if(l=u?u(i[h],h,e):i[h],r>0&&Et(l))c=Lo(t,e,l,st(l.length),c,r-1)-1;else{if(c>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[c]=l}c++}h++}return c},Do=Lo;It({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=Rt(this),i=st(e.length),n=ie(e,0);return n.length=Do(n,e,e,i,0,void 0===t?1:rt(t)),n}}),Ze("flat");var Ho=c((function(){Nt(1)}));It({target:"Object",stat:!0,forced:Ho},{keys:function(t){return Nt(Rt(t))}});var Mo={sprintf:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o=!0,r=0,a=t.replace(/%s/g,(function(){var t=i[r++];return void 0===t?(o=!1,""):t}));return o?a:""},isEmptyObject:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.entries(t).length&&t.constructor===Object},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getFieldTitle:function(t,e){var i=!0,n=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var s=r.value;if(s.field===e)return s.title}}catch(t){n=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return""},setFieldIndex:function(t){var e=0,i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[0][Symbol.iterator]();!(n=(a=s.next()).done);n=!0){e+=a.value.colspan||1}}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}for(var l=0;l<t.length;l++){i[l]=[];for(var c=0;c<e;c++)i[l][c]=!1}for(var h=0;h<t.length;h++){var u=!0,d=!1,f=void 0;try{for(var p,g=t[h][Symbol.iterator]();!(u=(p=g.next()).done);u=!0){var v=p.value,b=v.rowspan||1,y=v.colspan||1,m=i[h].indexOf(!1);v.colspanIndex=m,1===y?(v.fieldIndex=m,void 0===v.field&&(v.field=m)):v.colspanGroup=v.colspan;for(var w=0;w<b;w++)i[h+w][m]=!0;for(var S=0;S<y;S++)i[h][m+S]=!0}}catch(t){d=!0,f=t}finally{try{u||null==g.return||g.return()}finally{if(d)throw f}}}},updateFieldGroup:function(t){var e=t.flat(),i=!0,n=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var s=r.value,l=!0,c=!1,h=void 0;try{for(var u,d=s[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var f=u.value;if(f.colspanGroup>1){for(var p=0,g=function(t){e.find((function(e){return e.fieldIndex===t})).visible&&p++},v=f.colspanIndex;v<f.colspanIndex+f.colspanGroup;v++)g(v);f.colspan=p,f.visible=p>0}}}catch(t){c=!0,h=t}finally{try{l||null==d.return||d.return()}finally{if(c)throw h}}}}catch(t){n=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}},getScrollBarWidth:function(){if(void 0===this.cachedWidth){var e=t("<div/>").addClass("fixed-table-scroll-inner"),i=t("<div/>").addClass("fixed-table-scroll-outer");i.append(e),t("body").append(i);var n=e[0].offsetWidth;i.css("overflow","scroll");var o=e[0].offsetWidth;n===o&&(o=i[0].clientWidth),i.remove(),this.cachedWidth=n-o}return this.cachedWidth},calculateObjectValue:function(t,e,i,n){var o=e;if("string"==typeof e){var r=e.split(".");if(r.length>1){o=window;var a=!0,s=!1,l=void 0;try{for(var c,h=r[Symbol.iterator]();!(a=(c=h.next()).done);a=!0){o=o[c.value]}}catch(t){s=!0,l=t}finally{try{a||null==h.return||h.return()}finally{if(s)throw l}}}else o=window[e]}return null!==o&&"object"===Co(o)?o:"function"==typeof o?o.apply(t,i||[]):!o&&"string"==typeof e&&this.sprintf.apply(this,[e].concat(Eo(i)))?this.sprintf.apply(this,[e].concat(Eo(i))):n},compareObjects:function(t,e,i){var n=Object.keys(t),o=Object.keys(e);if(i&&n.length!==o.length)return!1;for(var r=0,a=n;r<a.length;r++){var s=a[r];if(o.includes(s)&&t[s]!==e[s])return!1}return!0},escapeHTML:function(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/`/g,"&#x60;"):t},getRealDataAttr:function(t){for(var e=0,i=Object.entries(t);e<i.length;e++){var n=Ao(i[e],2),o=n[0],r=n[1],a=o.split(/(?=[A-Z])/).join("-").toLowerCase();a!==o&&(t[a]=r,delete t[o])}return t},getItemField:function(t,e,i){var n=t;if("string"!=typeof e||t.hasOwnProperty(e))return i?this.escapeHTML(t[e]):t[e];var o=e.split("."),r=!0,a=!1,s=void 0;try{for(var l,c=o[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var h=l.value;n=n&&n[h]}}catch(t){a=!0,s=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return i?this.escapeHTML(n):n},isIEBrowser:function(){return navigator.userAgent.includes("MSIE ")||/Trident.*rv:11\./.test(navigator.userAgent)},findIndex:function(t,e){var i=!0,n=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var s=r.value;if(JSON.stringify(s)===JSON.stringify(e))return t.indexOf(s)}}catch(t){n=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}return-1},trToData:function(e,i){var n=this,o=[],r=[];return i.each((function(i,a){var s={};s._id=t(a).attr("id"),s._class=t(a).attr("class"),s._data=n.getRealDataAttr(t(a).data()),t(a).find(">td,>th").each((function(o,a){for(var l=+t(a).attr("colspan")||1,c=+t(a).attr("rowspan")||1,h=o;r[i]&&r[i][h];h++);for(var u=h;u<h+l;u++)for(var d=i;d<i+c;d++)r[d]||(r[d]=[]),r[d][u]=!0;var f=e[h].field;s[f]=t(a).html().trim(),s["_".concat(f,"_id")]=t(a).attr("id"),s["_".concat(f,"_class")]=t(a).attr("class"),s["_".concat(f,"_rowspan")]=t(a).attr("rowspan"),s["_".concat(f,"_colspan")]=t(a).attr("colspan"),s["_".concat(f,"_title")]=t(a).attr("title"),s["_".concat(f,"_data")]=n.getRealDataAttr(t(a).data())})),o.push(s)})),o},sort:function(t,e,i,n){return null==t&&(t=""),null==e&&(e=""),n&&t===e&&(t=t._position,e=e._position),this.isNumeric(t)&&this.isNumeric(e)?(t=parseFloat(t))<(e=parseFloat(e))?-1*i:t>e?i:0:t===e?0:("string"!=typeof t&&(t=t.toString()),-1===t.localeCompare(e)?-1*i:i)}},Uo=function(){function t(e){var i=this;Po(this,t),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.callback=e.callback,this.itemHeight=e.itemHeight,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows,e.fixedScroll),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;var n=function(){i.lastCluster!==(i.lastCluster=i.getNum())&&(i.initDOM(i.rows),i.callback())};this.scrollEl.addEventListener("scroll",n,!1),this.destroy=function(){i.contentEl.innerHtml="",i.scrollEl.removeEventListener("scroll",n,!1)}}return Io(t,[{key:"initDOM",value:function(t,e){void 0===this.clusterHeight&&(this.cache.scrollTop=this.scrollEl.scrollTop,this.cache.data=this.contentEl.innerHTML=t[0]+t[0]+t[0],this.getRowsHeight(t));var i=this.initData(t,this.getNum(e)),n=i.rows.join(""),o=this.checkChanges("data",n),r=this.checkChanges("top",i.topOffset),a=this.checkChanges("bottom",i.bottomOffset),s=[];o&&r?(i.topOffset&&s.push(this.getExtra("top",i.topOffset)),s.push(n),i.bottomOffset&&s.push(this.getExtra("bottom",i.bottomOffset)),this.contentEl.innerHTML=s.join(""),e&&(this.contentEl.scrollTop=this.cache.scrollTop)):a&&(this.contentEl.lastChild.style.height="".concat(i.bottomOffset,"px"))}},{key:"getRowsHeight",value:function(){if(void 0===this.itemHeight){var t=this.contentEl.children,e=t[Math.floor(t.length/2)];this.itemHeight=e.offsetHeight}this.blockHeight=50*this.itemHeight,this.clusterRows=200,this.clusterHeight=4*this.blockHeight}},{key:"getNum",value:function(t){return this.scrollTop=t?this.cache.scrollTop:this.scrollEl.scrollTop,Math.floor(this.scrollTop/(this.clusterHeight-this.blockHeight))||0}},{key:"initData",value:function(t,e){if(t.length<50)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:t};var i=Math.max((this.clusterRows-50)*e,0),n=i+this.clusterRows,o=Math.max(i*this.itemHeight,0),r=Math.max((t.length-n)*this.itemHeight,0),a=[],s=i;o<1&&s++;for(var l=i;l<n;l++)t[l]&&a.push(t[l]);return{topOffset:o,bottomOffset:r,rowsAbove:s,rows:a}}},{key:"checkChanges",value:function(t,e){var i=e!==this.cache[t];return this.cache[t]=e,i}},{key:"getExtra",value:function(t,e){var i=document.createElement("tr");return i.className="virtual-scroll-".concat(t),e&&(i.style.height="".concat(e,"px")),i.outerHTML}}]),t}(),qo=function(){function e(i,n){Po(this,e),this.options=n,this.$el=t(i),this.$el_=this.$el.clone(),this.timeoutId_=0,this.timeoutFooter_=0,this.init()}return Io(e,[{key:"init",value:function(){this.initConstants(),this.initLocale(),this.initContainer(),this.initTable(),this.initHeader(),this.initData(),this.initHiddenRows(),this.initToolbar(),this.initPagination(),this.initBody(),this.initSearchText(),this.initServer()}},{key:"initConstants",value:function(){var e=this.options;this.constants=Bo.CONSTANTS,this.constants.theme=t.fn.bootstrapTable.theme;var i=e.buttonsPrefix?"".concat(e.buttonsPrefix,"-"):"";this.constants.buttonsClass=[e.buttonsPrefix,i+e.buttonsClass,Mo.sprintf("".concat(i,"%s"),e.iconSize)].join(" ").trim()}},{key:"initLocale",value:function(){if(this.options.locale){var e=t.fn.bootstrapTable.locales,i=this.options.locale.split(/-|_/);i[0]=i[0].toLowerCase(),i[1]&&(i[1]=i[1].toUpperCase()),e[this.options.locale]?t.extend(this.options,e[this.options.locale]):e[i.join("-")]?t.extend(this.options,e[i.join("-")]):e[i[0]]&&t.extend(this.options,e[i[0]])}}},{key:"initContainer",value:function(){var e=["top","both"].includes(this.options.paginationVAlign)?'<div class="fixed-table-pagination clearfix"></div>':"",i=["bottom","both"].includes(this.options.paginationVAlign)?'<div class="fixed-table-pagination"></div>':"";this.$container=t('\n      <div class="bootstrap-table '.concat(this.constants.theme,'">\n      <div class="fixed-table-toolbar"></div>\n      ').concat(e,'\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      <span class="loading-wrap">\n      <span class="loading-text">').concat(this.options.formatLoadingMessage(),'</span>\n      <span class="animation-wrap"><span class="animation-dot"></span></span>\n      </span>\n      </div>\n      </div>\n      <div class="fixed-table-footer"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ').concat(i,"\n      </div>\n    ")),this.$container.insertAfter(this.$el),this.$tableContainer=this.$container.find(".fixed-table-container"),this.$tableHeader=this.$container.find(".fixed-table-header"),this.$tableBody=this.$container.find(".fixed-table-body"),this.$tableLoading=this.$container.find(".fixed-table-loading"),this.$tableFooter=this.$el.find("tfoot"),this.options.buttonsToolbar?this.$toolbar=t("body").find(this.options.buttonsToolbar):this.$toolbar=this.$container.find(".fixed-table-toolbar"),this.$pagination=this.$container.find(".fixed-table-pagination"),this.$tableBody.append(this.$el),this.$container.after('<div class="clearfix"></div>'),this.$el.addClass(this.options.classes),this.$tableLoading.addClass(this.options.classes),this.options.height?(this.$tableContainer.addClass("fixed-height"),this.options.showFooter&&this.$tableContainer.addClass("has-footer"),this.options.classes.split(" ").includes("table-bordered")&&(this.$tableBody.append('<div class="fixed-table-border"></div>'),this.$tableBorder=this.$tableBody.find(".fixed-table-border"),this.$tableLoading.addClass("fixed-table-border")),this.$tableFooter=this.$container.find(".fixed-table-footer")):this.$tableFooter.length||(this.$el.append("<tfoot><tr></tr></tfoot>"),this.$tableFooter=this.$el.find("tfoot"))}},{key:"initTable",value:function(){var i=this,n=[];this.$header=this.$el.find(">thead"),this.$header.length?this.options.theadClasses&&this.$header.addClass(this.options.theadClasses):this.$header=t('<thead class="'.concat(this.options.theadClasses,'"></thead>')).appendTo(this.$el),this.$header.find("tr").each((function(e,i){var o=[];t(i).find("th").each((function(e,i){void 0!==t(i).data("field")&&t(i).data("field","".concat(t(i).data("field"))),o.push(t.extend({},{title:t(i).html(),class:t(i).attr("class"),titleTooltip:t(i).attr("title"),rowspan:t(i).attr("rowspan")?+t(i).attr("rowspan"):void 0,colspan:t(i).attr("colspan")?+t(i).attr("colspan"):void 0},t(i).data()))})),n.push(o)})),Array.isArray(this.options.columns[0])||(this.options.columns=[this.options.columns]),this.options.columns=t.extend(!0,[],n,this.options.columns),this.columns=[],this.fieldsColumnsIndex=[],Mo.setFieldIndex(this.options.columns),this.options.columns.forEach((function(n,o){n.forEach((function(n,r){var a=t.extend({},e.COLUMN_DEFAULTS,n);void 0!==a.fieldIndex&&(i.columns[a.fieldIndex]=a,i.fieldsColumnsIndex[a.field]=a.fieldIndex),i.options.columns[o][r]=a}))})),this.options.data.length||(this.options.data=Mo.trToData(this.columns,this.$el.find(">tbody>tr")),[].length&&(this.fromHtml=!0)),this.footerData=Mo.trToData(this.columns,this.$el.find(">tfoot>tr")),this.footerData&&this.$el.find("tfoot").html("<tr></tr>"),!this.options.showFooter||this.options.cardView?this.$tableFooter.hide():this.$tableFooter.show()}},{key:"initHeader",value:function(){var e=this,i={},n=[];this.header={fields:[],styles:[],classes:[],formatters:[],detailFormatters:[],events:[],sorters:[],sortNames:[],cellStyles:[],searchables:[]},Mo.updateFieldGroup(this.options.columns),this.options.columns.forEach((function(t,o){n.push("<tr>"),0===o&&!e.options.cardView&&e.options.detailView&&e.options.detailViewIcon&&n.push('<th class="detail" rowspan="'.concat(e.options.columns.length,'">\n          <div class="fht-cell"></div>\n          </th>\n        ')),t.forEach((function(t,r){var a=Mo.sprintf(' class="%s"',t.class),s=t.widthUnit,l=parseFloat(t.width),c=Mo.sprintf("text-align: %s; ",t.halign?t.halign:t.align),h=Mo.sprintf("text-align: %s; ",t.align),u=Mo.sprintf("vertical-align: %s; ",t.valign);if(u+=Mo.sprintf("width: %s; ",!t.checkbox&&!t.radio||l?l?l+s:void 0:t.showSelectTitle?void 0:"36px"),void 0!==t.fieldIndex||t.visible){if(void 0!==t.fieldIndex){if(e.header.fields[t.fieldIndex]=t.field,e.header.styles[t.fieldIndex]=h+u,e.header.classes[t.fieldIndex]=a,e.header.formatters[t.fieldIndex]=t.formatter,e.header.detailFormatters[t.fieldIndex]=t.detailFormatter,e.header.events[t.fieldIndex]=t.events,e.header.sorters[t.fieldIndex]=t.sorter,e.header.sortNames[t.fieldIndex]=t.sortName,e.header.cellStyles[t.fieldIndex]=t.cellStyle,e.header.searchables[t.fieldIndex]=t.searchable,!t.visible)return;if(e.options.cardView&&!t.cardVisible)return;i[t.field]=t}n.push("<th".concat(Mo.sprintf(' title="%s"',t.titleTooltip)),t.checkbox||t.radio?Mo.sprintf(' class="bs-checkbox %s"',t.class||""):a,Mo.sprintf(' style="%s"',c+u),Mo.sprintf(' rowspan="%s"',t.rowspan),Mo.sprintf(' colspan="%s"',t.colspan),Mo.sprintf(' data-field="%s"',t.field),0===r&&o>0?" data-not-first-th":"",">"),n.push(Mo.sprintf('<div class="th-inner %s">',e.options.sortable&&t.sortable?"sortable both":""));var d=e.options.escape?Mo.escapeHTML(t.title):t.title,f=d;t.checkbox&&(d="",!e.options.singleSelect&&e.options.checkboxHeader&&(d='<label><input name="btSelectAll" type="checkbox" /><span></span></label>'),e.header.stateField=t.field),t.radio&&(d="",e.header.stateField=t.field,e.options.singleSelect=!0),!d&&t.showSelectTitle&&(d+=f),n.push(d),n.push("</div>"),n.push('<div class="fht-cell"></div>'),n.push("</div>"),n.push("</th>")}})),n.push("</tr>")})),this.$header.html(n.join("")),this.$header.find("th[data-field]").each((function(e,n){t(n).data(i[t(n).data("field")])})),this.$container.off("click",".th-inner").on("click",".th-inner",(function(i){var n=t(i.currentTarget);if(e.options.detailView&&!n.parent().hasClass("bs-checkbox")&&n.closest(".bootstrap-table")[0]!==e.$container[0])return!1;e.options.sortable&&n.parent().data().sortable&&e.onSort(i)})),this.$header.children().children().off("keypress").on("keypress",(function(i){e.options.sortable&&t(i.currentTarget).data().sortable&&(13===(i.keyCode||i.which)&&e.onSort(i))}));var o="resize.bootstrap-table".concat(this.$el.attr("id")||"");t(window).off(o),!this.options.showHeader||this.options.cardView?(this.$header.hide(),this.$tableHeader.hide(),this.$tableLoading.css("top",0)):(this.$header.show(),this.$tableHeader.show(),this.$tableLoading.css("top",this.$header.outerHeight()+1),this.getCaret(),t(window).on(o,(function(t){return e.resetWidth(t)}))),this.$selectAll=this.$header.find('[name="btSelectAll"]'),this.$selectAll.off("click").on("click",(function(i){var n=i.currentTarget,o=t(n).prop("checked");e[o?"checkAll":"uncheckAll"](),e.updateSelected()}))}},{key:"initData",value:function(t,e){this.options.data="append"===e?this.options.data.concat(t):"prepend"===e?[].concat(t).concat(this.options.data):t||this.options.data,this.data=this.options.data,"server"!==this.options.sidePagination&&this.initSort()}},{key:"initSort",value:function(){var t=this,e=this.options.sortName,i="desc"===this.options.sortOrder?-1:1,n=this.header.fields.indexOf(this.options.sortName),o=0;-1!==n&&(this.options.sortStable&&this.data.forEach((function(t,e){t.hasOwnProperty("_position")||(t._position=e)})),this.options.customSort?Mo.calculateObjectValue(this.options,this.options.customSort,[this.options.sortName,this.options.sortOrder,this.data]):this.data.sort((function(o,r){t.header.sortNames[n]&&(e=t.header.sortNames[n]);var a=Mo.getItemField(o,e,t.options.escape),s=Mo.getItemField(r,e,t.options.escape),l=Mo.calculateObjectValue(t.header,t.header.sorters[n],[a,s,o,r]);return void 0!==l?t.options.sortStable&&0===l?i*(o._position-r._position):i*l:Mo.sort(a,s,i,t.options.sortStable)})),void 0!==this.options.sortClass&&(clearTimeout(o),o=setTimeout((function(){t.$el.removeClass(t.options.sortClass);var e=t.$header.find('[data-field="'.concat(t.options.sortName,'"]')).index();t.$el.find("tr td:nth-child(".concat(e+1,")")).addClass(t.options.sortClass)}),250)))}},{key:"onSort",value:function(e){var i=e.type,n=e.currentTarget,o="keypress"===i?t(n):t(n).parent(),r=this.$header.find("th").eq(o.index());if(this.$header.add(this.$header_).find("span.order").remove(),this.options.sortName===o.data("field")?this.options.sortOrder="asc"===this.options.sortOrder?"desc":"asc":(this.options.sortName=o.data("field"),this.options.rememberOrder?this.options.sortOrder="asc"===o.data("order")?"desc":"asc":this.options.sortOrder=this.columns[this.fieldsColumnsIndex[o.data("field")]].sortOrder||this.columns[this.fieldsColumnsIndex[o.data("field")]].order),this.trigger("sort",this.options.sortName,this.options.sortOrder),o.add(r).data("order",this.options.sortOrder),this.getCaret(),"server"===this.options.sidePagination)return this.options.pageNumber=1,void this.initServer(this.options.silentSort);this.initSort(),this.initBody()}},{key:"initToolbar",value:function(){var e,i=this,n=this.options,o=[],r=0,a=0;if(this.$toolbar.find(".bs-bars").children().length&&t("body").append(t(n.toolbar)),this.$toolbar.html(""),"string"!=typeof n.toolbar&&"object"!==Co(n.toolbar)||t(Mo.sprintf('<div class="bs-bars %s-%s"></div>',this.constants.classes.pull,n.toolbarAlign)).appendTo(this.$toolbar).append(t(n.toolbar)),o=['<div class="'.concat(["columns","columns-".concat(n.buttonsAlign),this.constants.classes.buttonsGroup,"".concat(this.constants.classes.pull,"-").concat(n.buttonsAlign)].join(" "),'">')],"string"==typeof n.icons&&(n.icons=Mo.calculateObjectValue(null,n.icons)),n.showPaginationSwitch&&o.push('<button class="'.concat(this.constants.buttonsClass,'" type="button" name="paginationSwitch"\n        aria-label="Pagination Switch" title="').concat(n.formatPaginationSwitch(),'">\n        ').concat(n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.paginationSwitchDown):"","\n        ").concat(n.showButtonText?n.formatPaginationSwitchUp():"","\n        </button>")),n.showRefresh&&o.push('<button class="'.concat(this.constants.buttonsClass,'" type="button" name="refresh"\n        aria-label="Refresh" title="').concat(n.formatRefresh(),'">\n        ').concat(n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.refresh):"","\n        ").concat(n.showButtonText?n.formatRefresh():"","\n        </button>")),n.showToggle&&o.push('<button class="'.concat(this.constants.buttonsClass,'" type="button" name="toggle"\n        aria-label="Toggle" title="').concat(n.formatToggle(),'">\n        ').concat(n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.toggleOff):"","\n        ").concat(n.showButtonText?n.formatToggleOn():"","\n        </button>")),n.showFullscreen&&o.push('<button class="'.concat(this.constants.buttonsClass,'" type="button" name="fullscreen"\n        aria-label="Fullscreen" title="').concat(n.formatFullscreen(),'">\n        ').concat(n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.fullscreen):"","\n        ").concat(n.showButtonText?n.formatFullscreen():"","\n        </button>")),n.showColumns){if(o.push('<div class="keep-open '.concat(this.constants.classes.buttonsDropdown,'" title="').concat(n.formatColumns(),'">\n        <button class="').concat(this.constants.buttonsClass,' dropdown-toggle" type="button" data-toggle="dropdown"\n        aria-label="Columns" title="').concat(n.formatColumns(),'">\n        ').concat(n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.columns):"","\n        ").concat(n.showButtonText?n.formatColumns():"","\n        ").concat(this.constants.html.dropdownCaret,"\n        </button>\n        ").concat(this.constants.html.toolbarDropdown[0])),n.showColumnsToggleAll){var s=this.getVisibleColumns().length===this.columns.length;o.push(Mo.sprintf(this.constants.html.toolbarDropdownItem,Mo.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>',s?'checked="checked"':"",n.formatColumnsToggleAll()))),o.push(this.constants.html.toolbarDropdownSeparator)}this.columns.forEach((function(t,e){if(!t.radio&&!t.checkbox&&(!n.cardView||t.cardVisible)){var r=t.visible?' checked="checked"':"";t.switchable&&(o.push(Mo.sprintf(i.constants.html.toolbarDropdownItem,Mo.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> <span>%s</span>',t.field,e,r,t.title))),a++)}})),o.push(this.constants.html.toolbarDropdown[1],"</div>")}if(o.push("</div>"),(this.showToolbar||o.length>2)&&this.$toolbar.append(o.join("")),n.showPaginationSwitch&&this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click",(function(){return i.togglePagination()})),n.showFullscreen&&this.$toolbar.find('button[name="fullscreen"]').off("click").on("click",(function(){return i.toggleFullscreen()})),n.showRefresh&&this.$toolbar.find('button[name="refresh"]').off("click").on("click",(function(){return i.refresh()})),n.showToggle&&this.$toolbar.find('button[name="toggle"]').off("click").on("click",(function(){i.toggleView()})),n.showColumns){var l=(e=this.$toolbar.find(".keep-open")).find('input:not(".toggle-all")'),c=e.find("input.toggle-all");a<=n.minimumCountColumns&&e.find("input").prop("disabled",!0),e.find("li, label").off("click").on("click",(function(t){t.stopImmediatePropagation()})),l.off("click").on("click",(function(e){var n=e.currentTarget,o=t(n);i._toggleColumn(o.val(),o.prop("checked"),!1),i.trigger("column-switch",o.data("field"),o.prop("checked")),c.prop("checked",l.filter(":checked").length===i.columns.length)})),c.off("click").on("click",(function(e){var n=e.currentTarget;i._toggleAllColumns(t(n).prop("checked"))}))}if(n.search||this.showSearchClearButton){o=[];var h=Mo.sprintf(this.constants.html.searchButton,this.constants.buttonsClass,n.formatSearch(),n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.search):"",n.showButtonText?n.formatSearch():""),u=Mo.sprintf(this.constants.html.searchClearButton,this.constants.buttonsClass,n.formatClearSearch(),n.showButtonIcons?Mo.sprintf(this.constants.html.icon,n.iconsPrefix,n.icons.clearSearch):"",n.showButtonText?n.formatClearSearch():""),d='<input class="'.concat(this.constants.classes.input,"\n        ").concat(Mo.sprintf(" %s%s",this.constants.classes.inputPrefix,n.iconSize),'\n        search-input" type="text" placeholder="').concat(n.formatSearch(),'">'),f=d;if(n.showSearchButton||n.showSearchClearButton){var p=(n.showSearchButton?h:"")+(n.showSearchClearButton?u:"");f=n.search?Mo.sprintf(this.constants.html.inputGroup,d,p):p}o.push(Mo.sprintf('\n        <div class="'.concat(this.constants.classes.pull,"-").concat(n.searchAlign," search ").concat(this.constants.classes.inputGroup,'">\n          %s\n        </div>\n      '),f)),this.$toolbar.append(o.join(""));var g=this.$toolbar.find(".search input"),v=function(){var t=Mo.isIEBrowser()?"mouseup":"keyup drop blur";g.off(t).on(t,(function(t){n.searchOnEnterKey&&13!==t.keyCode||[37,38,39,40].includes(t.keyCode)||(clearTimeout(r),r=setTimeout((function(){i.onSearch(t)}),n.searchTimeOut))}))};n.showSearchButton?(this.$toolbar.find(".search button[name=search]").off("click").on("click",(function(t){clearTimeout(r),r=setTimeout((function(){i.onSearch({currentTarget:g})}),n.searchTimeOut)})),n.searchOnEnterKey&&v()):v(),n.showSearchClearButton&&this.$toolbar.find(".search button[name=clearSearch]").click((function(){i.resetSearch()}))}}},{key:"onSearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.currentTarget,n=e.firedByInitSearchText,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0!==i&&t(i).length&&o){var r=t(i).val().trim();if(this.options.trimOnSearch&&t(i).val()!==r&&t(i).val(r),this.searchText===r)return;t(i).hasClass("search-input")&&(this.searchText=r,this.options.searchText=r)}n||(this.options.pageNumber=1),this.initSearch(),n?"client"===this.options.sidePagination&&this.updatePagination():this.updatePagination(),this.trigger("search",this.searchText)}},{key:"initSearch",value:function(){var t=this;if(this.filterOptions=this.filterOptions||this.options.filterOptions,"server"!==this.options.sidePagination){if(this.options.customSearch)return void(this.data=Mo.calculateObjectValue(this.options,this.options.customSearch,[this.options.data,this.searchText,this.filterColumns]));var e=this.searchText&&(this.options.escape?Mo.escapeHTML(this.searchText):this.searchText).toLowerCase(),i=Mo.isEmptyObject(this.filterColumns)?null:this.filterColumns;"function"==typeof this.filterOptions.filterAlgorithm?this.data=this.options.data.filter((function(e,n){return t.filterOptions.filterAlgorithm.apply(null,[e,i])})):"string"==typeof this.filterOptions.filterAlgorithm&&(this.data=i?this.options.data.filter((function(e,n){var o=t.filterOptions.filterAlgorithm;if("and"===o){for(var r in i)if(Array.isArray(i[r])&&!i[r].includes(e[r])||!Array.isArray(i[r])&&e[r]!==i[r])return!1}else if("or"===o){var a=!1;for(var s in i)(Array.isArray(i[s])&&i[s].includes(e[s])||!Array.isArray(i[s])&&e[s]===i[s])&&(a=!0);return a}return!0})):this.options.data);var n=this.getVisibleFields();this.data=e?this.data.filter((function(i,o){for(var r=0;r<t.header.fields.length;r++)if(t.header.searchables[r]&&(!t.options.visibleSearch||-1!==n.indexOf(t.header.fields[r]))){var a=Mo.isNumeric(t.header.fields[r])?parseInt(t.header.fields[r],10):t.header.fields[r],s=t.columns[t.fieldsColumnsIndex[a]],l=void 0;if("string"==typeof a){l=i;for(var c=a.split("."),h=0;h<c.length;h++)null!==l[c[h]]&&(l=l[c[h]])}else l=i[a];if(s&&s.searchFormatter&&(l=Mo.calculateObjectValue(s,t.header.formatters[r],[l,i,o,s.field],l)),"string"==typeof l||"number"==typeof l)if(t.options.strictSearch){if("".concat(l).toLowerCase()===e)return!0}else{var u=/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(e),d=!1;if(u){var f=u[1]||"".concat(u[5],"l"),p=u[2]||u[3],g=parseInt(l,10),v=parseInt(p,10);switch(f){case">":case"<l":d=g>v;break;case"<":case">l":d=g<v;break;case"<=":case"=<":case">=l":case"=>l":d=g<=v;break;case">=":case"=>":case"<=l":case"=<l":d=g>=v}}if(d||"".concat(l).toLowerCase().includes(e))return!0}}return!1})):this.data}}},{key:"initPagination",value:function(){var t=this,e=this.options;if(e.pagination){this.$pagination.show();var i,n,o,r,a,s,l,c=[],h=!1,u=this.getData({includeHiddenRows:!1}),d=e.pageList;if("server"!==e.sidePagination&&(e.totalRows=u.length),this.totalPages=0,e.totalRows){if(e.pageSize===e.formatAllRows())e.pageSize=e.totalRows,h=!0;else if(e.pageSize===e.totalRows){("string"==typeof e.pageList?e.pageList.replace("[","").replace("]","").replace(/ /g,"").toLowerCase().split(","):e.pageList).includes(e.formatAllRows().toLowerCase())&&(h=!0)}this.totalPages=1+~~((e.totalRows-1)/e.pageSize),e.totalPages=this.totalPages}this.totalPages>0&&e.pageNumber>this.totalPages&&(e.pageNumber=this.totalPages),this.pageFrom=(e.pageNumber-1)*e.pageSize+1,this.pageTo=e.pageNumber*e.pageSize,this.pageTo>e.totalRows&&(this.pageTo=e.totalRows),this.options.pagination&&"server"!==this.options.sidePagination&&(this.options.totalNotFiltered=this.options.data.length),this.options.showExtendedPagination||(this.options.totalNotFiltered=void 0);var f=e.onlyInfoPagination?e.formatDetailPagination(e.totalRows):e.formatShowingRows(this.pageFrom,this.pageTo,e.totalRows,e.totalNotFiltered);if(c.push('<div class="'.concat(this.constants.classes.pull,"-").concat(e.paginationDetailHAlign,' pagination-detail">\n      <span class="pagination-info">\n      ').concat(f,"\n      </span>")),!e.onlyInfoPagination){c.push('<span class="page-list">');var p=['<span class="'.concat(this.constants.classes.paginationDropdown,'">\n        <button class="').concat(this.constants.buttonsClass,' dropdown-toggle" type="button" data-toggle="dropdown">\n        <span class="page-size">\n        ').concat(h?e.formatAllRows():e.pageSize,"\n        </span>\n        ").concat(this.constants.html.dropdownCaret,"\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];if("string"==typeof e.pageList){var g=e.pageList.replace("[","").replace("]","").replace(/ /g,"").split(",");d=[];var v=!0,b=!1,y=void 0;try{for(var m,w=g[Symbol.iterator]();!(v=(m=w.next()).done);v=!0){var S=m.value;d.push(S.toLowerCase()===e.formatAllRows().toLowerCase()||["all","unlimited"].includes(S.toLowerCase())?e.formatAllRows():+S)}}catch(t){b=!0,y=t}finally{try{v||null==w.return||w.return()}finally{if(b)throw y}}}d.forEach((function(i,n){var o;(!e.smartDisplay||0===n||d[n-1]<e.totalRows)&&(o=h?i===e.formatAllRows()?t.constants.classes.dropdownActive:"":i===e.pageSize?t.constants.classes.dropdownActive:"",p.push(Mo.sprintf(t.constants.html.pageDropdownItem,o,i)))})),p.push("".concat(this.constants.html.pageDropdown[1],"</span>")),c.push(e.formatRecordsPerPage(p.join(""))),c.push("</span></div>"),c.push('<div class="'.concat(this.constants.classes.pull,"-").concat(e.paginationHAlign,' pagination">'),Mo.sprintf(this.constants.html.pagination[0],Mo.sprintf(" pagination-%s",e.iconSize)),Mo.sprintf(this.constants.html.paginationItem," page-pre",e.formatSRPaginationPreText(),e.paginationPreText)),this.totalPages<e.paginationSuccessivelySize?(n=1,o=this.totalPages):o=(n=e.pageNumber-e.paginationPagesBySide)+2*e.paginationPagesBySide,e.pageNumber<e.paginationSuccessivelySize-1&&(o=e.paginationSuccessivelySize),e.paginationSuccessivelySize>this.totalPages-n&&(n=n-(e.paginationSuccessivelySize-(this.totalPages-n))+1),n<1&&(n=1),o>this.totalPages&&(o=this.totalPages);var x=Math.round(e.paginationPagesBySide/2),k=function(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Mo.sprintf(t.constants.html.paginationItem,n+(i===e.pageNumber?" ".concat(t.constants.classes.paginationActive):""),e.formatSRPaginationPageText(i),i)};if(n>1){var O=e.paginationPagesBySide;for(O>=n&&(O=n-1),i=1;i<=O;i++)c.push(k(i));n-1===O+1?(i=n-1,c.push(k(i))):n-1>O&&(n-2*e.paginationPagesBySide>e.paginationPagesBySide&&e.paginationUseIntermediate?(i=Math.round((n-x)/2+x),c.push(k(i," page-intermediate"))):c.push(Mo.sprintf(this.constants.html.paginationItem," page-first-separator disabled","","...")))}for(i=n;i<=o;i++)c.push(k(i));if(this.totalPages>o){var T=this.totalPages-(e.paginationPagesBySide-1);for(o>=T&&(T=o+1),o+1===T-1?(i=o+1,c.push(k(i))):T>o+1&&(this.totalPages-o>2*e.paginationPagesBySide&&e.paginationUseIntermediate?(i=Math.round((this.totalPages-x-o)/2+o),c.push(k(i," page-intermediate"))):c.push(Mo.sprintf(this.constants.html.paginationItem," page-last-separator disabled","","..."))),i=T;i<=this.totalPages;i++)c.push(k(i))}c.push(Mo.sprintf(this.constants.html.paginationItem," page-next",e.formatSRPaginationNextText(),e.paginationNextText)),c.push(this.constants.html.pagination[1],"</div>")}this.$pagination.html(c.join(""));var C=["bottom","both"].includes(e.paginationVAlign)?" ".concat(this.constants.classes.dropup):"";this.$pagination.last().find(".page-list > span").addClass(C),e.onlyInfoPagination||(r=this.$pagination.find(".page-list a"),a=this.$pagination.find(".page-pre"),s=this.$pagination.find(".page-next"),l=this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator"),this.totalPages<=1&&this.$pagination.find("div.pagination").hide(),e.smartDisplay&&(d.length<2||e.totalRows<=d[0])&&this.$pagination.find("span.page-list").hide(),this.$pagination[this.getData().length?"show":"hide"](),e.paginationLoop||(1===e.pageNumber&&a.addClass("disabled"),e.pageNumber===this.totalPages&&s.addClass("disabled")),h&&(e.pageSize=e.formatAllRows()),r.off("click").on("click",(function(e){return t.onPageListChange(e)})),a.off("click").on("click",(function(e){return t.onPagePre(e)})),s.off("click").on("click",(function(e){return t.onPageNext(e)})),l.off("click").on("click",(function(e){return t.onPageNumber(e)})))}else this.$pagination.hide()}},{key:"updatePagination",value:function(e){e&&t(e.currentTarget).hasClass("disabled")||(this.options.maintainMetaData||this.resetRows(),this.initPagination(),"server"===this.options.sidePagination?this.initServer():this.initBody(),this.trigger("page-change",this.options.pageNumber,this.options.pageSize))}},{key:"onPageListChange",value:function(e){e.preventDefault();var i=t(e.currentTarget);return i.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive),this.options.pageSize=i.text().toUpperCase()===this.options.formatAllRows().toUpperCase()?this.options.formatAllRows():+i.text(),this.$toolbar.find(".page-size").text(this.options.pageSize),this.updatePagination(e),!1}},{key:"onPagePre",value:function(t){return t.preventDefault(),this.options.pageNumber-1==0?this.options.pageNumber=this.options.totalPages:this.options.pageNumber--,this.updatePagination(t),!1}},{key:"onPageNext",value:function(t){return t.preventDefault(),this.options.pageNumber+1>this.options.totalPages?this.options.pageNumber=1:this.options.pageNumber++,this.updatePagination(t),!1}},{key:"onPageNumber",value:function(e){if(e.preventDefault(),this.options.pageNumber!==+t(e.currentTarget).text())return this.options.pageNumber=+t(e.currentTarget).text(),this.updatePagination(e),!1}},{key:"initRow",value:function(t,e,i,n){var o=this,r=[],a={},s=[],l="",c={},h=[];if(!(Mo.findIndex(this.hiddenRows,t)>-1)){if((a=Mo.calculateObjectValue(this.options,this.options.rowStyle,[t,e],a))&&a.css)for(var u=0,d=Object.entries(a.css);u<d.length;u++){var f=Ao(d[u],2),p=f[0],g=f[1];s.push("".concat(p,": ").concat(g))}if(c=Mo.calculateObjectValue(this.options,this.options.rowAttributes,[t,e],c))for(var v=0,b=Object.entries(c);v<b.length;v++){var y=Ao(b[v],2);p=y[0],g=y[1];h.push("".concat(p,'="').concat(Mo.escapeHTML(g),'"'))}if(t._data&&!Mo.isEmptyObject(t._data))for(var m=0,w=Object.entries(t._data);m<w.length;m++){var S=Ao(w[m],2),x=S[0],k=S[1];if("index"===x)return;l+=" data-".concat(x,"='").concat("object"===Co(k)?JSON.stringify(k):k,"'")}return r.push("<tr",Mo.sprintf(" %s",h.length?h.join(" "):void 0),Mo.sprintf(' id="%s"',Array.isArray(t)?void 0:t._id),Mo.sprintf(' class="%s"',a.classes||(Array.isArray(t)?void 0:t._class)),' data-index="'.concat(e,'"'),Mo.sprintf(' data-uniqueid="%s"',Mo.getItemField(t,this.options.uniqueId,!1)),Mo.sprintf(' data-has-detail-view="%s"',!this.options.cardView&&this.options.detailView&&Mo.calculateObjectValue(null,this.options.detailFilter,[e,t])?"true":void 0),Mo.sprintf("%s",l),">"),this.options.cardView&&r.push('<td colspan="'.concat(this.header.fields.length,'"><div class="card-views">')),!this.options.cardView&&this.options.detailView&&this.options.detailViewIcon&&(r.push("<td>"),Mo.calculateObjectValue(null,this.options.detailFilter,[e,t])&&r.push('\n          <a class="detail-icon" href="#">\n          '.concat(Mo.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen),"\n          </a>\n        ")),r.push("</td>")),this.header.fields.forEach((function(i,n){var a="",l=Mo.getItemField(t,i,o.options.escape),c="",h="",u={},d="",f=o.header.classes[n],p="",g="",v="",b="",y="",m=o.columns[n];if((!o.fromHtml||void 0!==l||m.checkbox||m.radio)&&m.visible&&(!o.options.cardView||m.cardVisible)){if(m.escape&&(l=Mo.escapeHTML(l)),s.concat([o.header.styles[n]]).length&&(p=' style="'.concat(s.concat([o.header.styles[n]]).join("; "),'"')),t["_".concat(i,"_id")]&&(d=Mo.sprintf(' id="%s"',t["_".concat(i,"_id")])),t["_".concat(i,"_class")]&&(f=Mo.sprintf(' class="%s"',t["_".concat(i,"_class")])),t["_".concat(i,"_rowspan")]&&(v=Mo.sprintf(' rowspan="%s"',t["_".concat(i,"_rowspan")])),t["_".concat(i,"_colspan")]&&(b=Mo.sprintf(' colspan="%s"',t["_".concat(i,"_colspan")])),t["_".concat(i,"_title")]&&(y=Mo.sprintf(' title="%s"',t["_".concat(i,"_title")])),(u=Mo.calculateObjectValue(o.header,o.header.cellStyles[n],[l,t,e,i],u)).classes&&(f=' class="'.concat(u.classes,'"')),u.css){for(var w=[],S=0,x=Object.entries(u.css);S<x.length;S++){var k=Ao(x[S],2),O=k[0],T=k[1];w.push("".concat(O,": ").concat(T))}p=' style="'.concat(w.concat(o.header.styles[n]).join("; "),'"')}if(c=Mo.calculateObjectValue(m,o.header.formatters[n],[l,t,e,i],l),t["_".concat(i,"_data")]&&!Mo.isEmptyObject(t["_".concat(i,"_data")]))for(var C=0,P=Object.entries(t["_".concat(i,"_data")]);C<P.length;C++){var $=Ao(P[C],2),I=$[0],A=$[1];if("index"===I)return;g+=" data-".concat(I,'="').concat(A,'"')}if(m.checkbox||m.radio){h=m.checkbox?"checkbox":h,h=m.radio?"radio":h;var E=m.class||"",R=(!0===c||l||c&&c.checked)&&!1!==c,N=!m.checkboxEnabled||c&&c.disabled;a=[o.options.cardView?'<div class="card-view '.concat(E,'">'):'<td class="bs-checkbox '.concat(E,'"').concat(f).concat(p,">"),'<label>\n            <input\n            data-index="'.concat(e,'"\n            name="').concat(o.options.selectItemName,'"\n            type="').concat(h,'"\n            ').concat(Mo.sprintf('value="%s"',t[o.options.idField]),"\n            ").concat(Mo.sprintf('checked="%s"',R?"checked":void 0),"\n            ").concat(Mo.sprintf('disabled="%s"',N?"disabled":void 0)," />\n            <span></span>\n            </label>"),o.header.formatters[n]&&"string"==typeof c?c:"",o.options.cardView?"</div>":"</td>"].join(""),t[o.header.stateField]=!0===c||!!l||c&&c.checked}else if(c=null==c?o.options.undefinedText:c,o.options.cardView){var j=o.options.showHeader?'<span class="card-view-title"'.concat(p,">").concat(Mo.getFieldTitle(o.columns,i),"</span>"):"";a='<div class="card-view">'.concat(j,'<span class="card-view-value">').concat(c,"</span></div>"),o.options.smartDisplay&&""===c&&(a='<div class="card-view"></div>')}else a="<td".concat(d).concat(f).concat(p).concat(g).concat(v).concat(b).concat(y,">").concat(c,"</td>");r.push(a)}})),this.options.cardView&&r.push("</div></td>"),r.push("</tr>"),r.join("")}}},{key:"initBody",value:function(e){var i=this,n=this.getData();this.trigger("pre-body",n),this.$body=this.$el.find(">tbody"),this.$body.length||(this.$body=t("<tbody></tbody>").appendTo(this.$el)),this.options.pagination&&"server"!==this.options.sidePagination||(this.pageFrom=1,this.pageTo=n.length);for(var o=[],r=t(document.createDocumentFragment()),a=!1,s=this.pageFrom-1;s<this.pageTo;s++){var l=n[s],c=this.initRow(l,s,n,r);a=a||!!c,c&&"string"==typeof c&&(this.options.virtualScroll?o.push(c):r.append(c))}a?this.options.virtualScroll?(this.virtualScroll&&this.virtualScroll.destroy(),this.virtualScroll=new Uo({rows:o,fixedScroll:e,scrollEl:this.$tableBody[0],contentEl:this.$body[0],itemHeight:this.options.virtualScrollItemHeight,callback:function(){i.fitHeader(),i.initBodyEvent()}})):this.$body.html(r):this.$body.html('<tr class="no-records-found">'.concat(Mo.sprintf('<td colspan="%s">%s</td>',this.$header.find("th").length,this.options.formatNoMatches()),"</tr>")),e||this.scrollTo(0),this.initBodyEvent(),this.updateSelected(),this.initFooter(),this.resetView(),"server"!==this.options.sidePagination&&(this.options.totalRows=n.length),this.trigger("post-body",n)}},{key:"initBodyEvent",value:function(){var e=this;this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",(function(i){var n=t(i.currentTarget),o=n.parent(),r=t(i.target).parents(".card-views").children(),a=t(i.target).parents(".card-view"),s=o.data("index"),l=e.data[s],c=e.options.cardView?r.index(a):n[0].cellIndex,h=e.getVisibleFields()[e.options.detailView&&e.options.detailViewIcon&&!e.options.cardView?c-1:c],u=e.columns[e.fieldsColumnsIndex[h]],d=Mo.getItemField(l,h,e.options.escape);if(!n.find(".detail-icon").length){if(e.trigger("click"===i.type?"click-cell":"dbl-click-cell",h,d,l,n),e.trigger("click"===i.type?"click-row":"dbl-click-row",l,o,h),"click"===i.type&&e.options.clickToSelect&&u.clickToSelect&&!Mo.calculateObjectValue(e.options,e.options.ignoreClickToSelectOn,[i.target])){var f=o.find(Mo.sprintf('[name="%s"]',e.options.selectItemName));f.length&&f[0].click()}"click"===i.type&&e.options.detailViewByClick&&e.toggleDetailView(s,e.header.detailFormatters[e.fieldsColumnsIndex[h]])}})).off("mousedown").on("mousedown",(function(t){e.multipleSelectRowCtrlKey=t.ctrlKey||t.metaKey,e.multipleSelectRowShiftKey=t.shiftKey})),this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click",(function(i){return i.preventDefault(),e.toggleDetailView(t(i.currentTarget).parent().parent().data("index")),!1})),this.$selectItem=this.$body.find(Mo.sprintf('[name="%s"]',this.options.selectItemName)),this.$selectItem.off("click").on("click",(function(i){i.stopImmediatePropagation();var n=t(i.currentTarget);e._toggleCheck(n.prop("checked"),n.data("index"))})),this.header.events.forEach((function(i,n){var o=i;if(o){"string"==typeof o&&(o=Mo.calculateObjectValue(null,o));var r=e.header.fields[n],a=e.getVisibleFields().indexOf(r);if(-1!==a){e.options.detailView&&!e.options.cardView&&(a+=1);var s=function(i){if(!o.hasOwnProperty(i))return"continue";var n=o[i];e.$body.find(">tr:not(.no-records-found)").each((function(o,s){var l=t(s),c=l.find(e.options.cardView?".card-views>.card-view":">td").eq(a),h=i.indexOf(" "),u=i.substring(0,h),d=i.substring(h+1);c.find(d).off(u).on(u,(function(t){var i=l.data("index"),o=e.data[i],a=o[r];n.apply(e,[t,a,o,i])}))}))};for(var l in o)s(l)}}}))}},{key:"initServer",value:function(e,i,n){var o=this,r={},a=this.header.fields.indexOf(this.options.sortName),s={searchText:this.searchText,sortName:this.options.sortName,sortOrder:this.options.sortOrder};if(this.header.sortNames[a]&&(s.sortName=this.header.sortNames[a]),this.options.pagination&&"server"===this.options.sidePagination&&(s.pageSize=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,s.pageNumber=this.options.pageNumber),(n||this.options.url||this.options.ajax)&&("limit"===this.options.queryParamsType&&(s={search:s.searchText,sort:s.sortName,order:s.sortOrder},this.options.pagination&&"server"===this.options.sidePagination&&(s.offset=this.options.pageSize===this.options.formatAllRows()?0:this.options.pageSize*(this.options.pageNumber-1),s.limit=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,0===s.limit&&delete s.limit)),Mo.isEmptyObject(this.filterColumnsPartial)||(s.filter=JSON.stringify(this.filterColumnsPartial,null)),t.extend(s,i||{}),!1!==(r=Mo.calculateObjectValue(this.options,this.options.queryParams,[s],r)))){e||this.showLoading();var l=t.extend({},Mo.calculateObjectValue(null,this.options.ajaxOptions),{type:this.options.method,url:n||this.options.url,data:"application/json"===this.options.contentType&&"post"===this.options.method?JSON.stringify(r):r,cache:this.options.cache,contentType:this.options.contentType,dataType:this.options.dataType,success:function(t,i,n){var r=Mo.calculateObjectValue(o.options,o.options.responseHandler,[t,n],t);o.load(r),o.trigger("load-success",r,n.status,n),e||o.hideLoading()},error:function(t){var i=[];"server"===o.options.sidePagination&&((i={})[o.options.totalField]=0,i[o.options.dataField]=[]),o.load(i),o.trigger("load-error",t.status,t),e||o.$tableLoading.hide()}});return this.options.ajax?Mo.calculateObjectValue(this,this.options.ajax,[l],null):(this._xhr&&4!==this._xhr.readyState&&this._xhr.abort(),this._xhr=t.ajax(l)),r}}},{key:"initSearchText",value:function(){if(this.options.search&&(this.searchText="",""!==this.options.searchText)){var t=this.$toolbar.find(".search input");t.val(this.options.searchText),this.onSearch({currentTarget:t,firedByInitSearchText:!0})}}},{key:"getCaret",value:function(){var e=this;this.$header.find("th").each((function(i,n){t(n).find(".sortable").removeClass("desc asc").addClass(t(n).data("field")===e.options.sortName?e.options.sortOrder:"both")}))}},{key:"updateSelected",value:function(){var e=this.$selectItem.filter(":enabled").length&&this.$selectItem.filter(":enabled").length===this.$selectItem.filter(":enabled").filter(":checked").length;this.$selectAll.add(this.$selectAll_).prop("checked",e),this.$selectItem.each((function(e,i){t(i).closest("tr")[t(i).prop("checked")?"addClass":"removeClass"]("selected")}))}},{key:"updateRows",value:function(){var e=this;this.$selectItem.each((function(i,n){e.data[t(n).data("index")][e.header.stateField]=t(n).prop("checked")}))}},{key:"resetRows",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,o=this.data[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var r=n.value;this.$selectAll.prop("checked",!1),this.$selectItem.prop("checked",!1),this.header.stateField&&(r[this.header.stateField]=!1)}}catch(t){e=!0,i=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}this.initHiddenRows()}},{key:"trigger",value:function(i){for(var n,o="".concat(i,".bs.table"),r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];(n=this.options)[e.EVENTS[o]].apply(n,a),this.$el.trigger(t.Event(o),a),this.options.onAll(o,a),this.$el.trigger(t.Event("all.bs.table"),[o,a])}},{key:"resetHeader",value:function(){var t=this;clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout((function(){return t.fitHeader()}),this.$el.is(":hidden")?100:0)}},{key:"fitHeader",value:function(){var e=this;if(this.$el.is(":hidden"))this.timeoutId_=setTimeout((function(){return e.fitHeader()}),100);else{var i=this.$tableBody.get(0),n=i.scrollWidth>i.clientWidth&&i.scrollHeight>i.clientHeight+this.$header.outerHeight()?Mo.getScrollBarWidth():0;this.$el.css("margin-top",-this.$header.outerHeight());var o=t(":focus");if(o.length>0){var r=o.parents("th");if(r.length>0){var a=r.attr("data-field");if(void 0!==a){var s=this.$header.find("[data-field='".concat(a,"']"));s.length>0&&s.find(":input").addClass("focus-temp")}}}this.$header_=this.$header.clone(!0,!0),this.$selectAll_=this.$header_.find('[name="btSelectAll"]'),this.$tableHeader.css("margin-right",n).find("table").css("width",this.$el.outerWidth()).html("").attr("class",this.$el.attr("class")).append(this.$header_),this.$tableLoading.css("width",this.$el.outerWidth());var l=t(".focus-temp:visible:eq(0)");l.length>0&&(l.focus(),this.$header.find(".focus-temp").removeClass("focus-temp")),this.$header.find("th[data-field]").each((function(i,n){e.$header_.find(Mo.sprintf('th[data-field="%s"]',t(n).data("field"))).data(t(n).data())}));for(var c=this.getVisibleFields(),h=this.$header_.find("th"),u=this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0);u.length&&u.find('>td[colspan]:not([colspan="1"])').length;)u=u.next();u.find("> *").each((function(i,n){var o=t(n),r=i;if(e.options.detailView&&e.options.detailViewIcon&&!e.options.cardView){if(0===i){var a=h.filter(".detail"),s=a.innerWidth()-a.find(".fht-cell").width();a.find(".fht-cell").width(o.innerWidth()-s)}r=i-1}if(-1!==r){var l=e.$header_.find(Mo.sprintf('th[data-field="%s"]',c[r]));l.length>1&&(l=t(h[o[0].cellIndex]));var u=l.innerWidth()-l.find(".fht-cell").width();l.find(".fht-cell").width(o.innerWidth()-u)}})),this.horizontalScroll(),this.trigger("post-header")}}},{key:"initFooter",value:function(){if(this.options.showFooter&&!this.options.cardView){var t=this.getData(),e=[];!this.options.cardView&&this.options.detailView&&this.options.detailViewIcon&&e.push('<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>');var i=!0,n=!1,o=void 0;try{for(var r,a=this.columns[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var s,l,c=r.value,h=[],u={},d=Mo.sprintf(' class="%s"',c.class);if(c.visible){if(this.options.cardView&&!c.cardVisible)return;if(s=Mo.sprintf("text-align: %s; ",c.falign?c.falign:c.align),l=Mo.sprintf("vertical-align: %s; ",c.valign),(u=Mo.calculateObjectValue(null,this.options.footerStyle,[c]))&&u.css)for(var f=0,p=Object.entries(u.css);f<p.length;f++){var g=Ao(p[f],2),v=g[0],b=g[1];h.push("".concat(v,": ").concat(b))}u&&u.classes&&(d=Mo.sprintf(' class="%s"',c.class?[c.class,u.classes].join(" "):u.classes)),e.push("<th",d,Mo.sprintf(' style="%s"',s+l+h.concat().join("; ")),">"),e.push('<div class="th-inner">'),e.push(Mo.calculateObjectValue(c,c.footerFormatter,[t],this.footerData[0]&&this.footerData[0][c.field]||"")),e.push("</div>"),e.push('<div class="fht-cell"></div>'),e.push("</div>"),e.push("</th>")}}}catch(t){n=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}this.$tableFooter.find("tr").html(e.join("")),this.trigger("post-footer",this.$tableFooter)}}},{key:"fitFooter",value:function(){var e=this;if(this.$el.is(":hidden"))setTimeout((function(){return e.fitFooter()}),100);else{var i=this.$tableBody.get(0),n=i.scrollWidth>i.clientWidth&&i.scrollHeight>i.clientHeight+this.$header.outerHeight()?Mo.getScrollBarWidth():0;this.$tableFooter.css("margin-right",n).find("table").css("width",this.$el.outerWidth()).attr("class",this.$el.attr("class"));this.getVisibleFields();for(var o=this.$tableFooter.find("th"),r=this.$body.find(">tr:first-child:not(.no-records-found)");r.length&&r.find('>td[colspan]:not([colspan="1"])').length;)r=r.next();r.find("> *").each((function(i,n){var r=t(n),a=i;if(e.options.detailView&&!e.options.cardView){if(0===i){var s=o.filter(".detail"),l=s.innerWidth()-s.find(".fht-cell").width();s.find(".fht-cell").width(r.innerWidth()-l)}a=i-1}if(-1!==a){var c=o.eq(i),h=c.innerWidth()-c.find(".fht-cell").width();c.find(".fht-cell").width(r.innerWidth()-h)}})),this.horizontalScroll()}}},{key:"horizontalScroll",value:function(){var e=this;this.$tableBody.off("scroll").on("scroll",(function(i){var n=i.currentTarget;e.options.showHeader&&e.options.height&&e.$tableHeader.scrollLeft(t(n).scrollLeft()),e.options.showFooter&&!e.options.cardView&&e.$tableFooter.scrollLeft(t(n).scrollLeft()),e.trigger("scroll-body",t(n))}))}},{key:"getVisibleFields",value:function(){var t=[],e=!0,i=!1,n=void 0;try{for(var o,r=this.header.fields[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var a=o.value,s=this.columns[this.fieldsColumnsIndex[a]];s&&s.visible&&t.push(a)}}catch(t){i=!0,n=t}finally{try{e||null==r.return||r.return()}finally{if(i)throw n}}return t}},{key:"initHiddenRows",value:function(){this.hiddenRows=[]}},{key:"getOptions",value:function(){var e=t.extend({},this.options);return delete e.data,t.extend(!0,{},e)}},{key:"refreshOptions",value:function(e){Mo.compareObjects(this.options,e,!0)||(this.options=t.extend(this.options,e),this.trigger("refresh-options",this.options),this.destroy(),this.init())}},{key:"getData",value:function(t){var e=this.options.data;if(!this.searchText&&!this.options.sortName&&Mo.isEmptyObject(this.filterColumns)&&Mo.isEmptyObject(this.filterColumnsPartial)||(e=this.data),t&&t.useCurrentPage&&(e=e.slice(this.pageFrom-1,this.pageTo)),t&&!t.includeHiddenRows){var i=this.getHiddenRows();e=e.filter((function(t){return-1===Mo.findIndex(i,t)}))}return e}},{key:"getSelections",value:function(){var t=this;return this.data.filter((function(e){return!0===e[t.header.stateField]}))}},{key:"getAllSelections",value:function(){var t=this;return this.options.data.filter((function(e){return!0===e[t.header.stateField]}))}},{key:"load",value:function(t){var e,i=t;this.options.pagination&&"server"===this.options.sidePagination&&(this.options.totalRows=i[this.options.totalField]),this.options.pagination&&"server"===this.options.sidePagination&&(this.options.totalNotFiltered=i[this.options.totalNotFilteredField]),e=i.fixedScroll,i=Array.isArray(i)?i:i[this.options.dataField],this.initData(i),this.initSearch(),this.initPagination(),this.initBody(e)}},{key:"append",value:function(t){this.initData(t,"append"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"prepend",value:function(t){this.initData(t,"prepend"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"remove",value:function(t){var e,i,n=this.options.data.length;if(t.hasOwnProperty("field")&&t.hasOwnProperty("values")){for(e=n-1;e>=0;e--)(i=this.options.data[e]).hasOwnProperty(t.field)&&t.values.includes(i[t.field])&&(this.options.data.splice(e,1),"server"===this.options.sidePagination&&(this.options.totalRows-=1));n!==this.options.data.length&&(this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}}},{key:"removeAll",value:function(){this.options.data.length>0&&(this.options.data.splice(0,this.options.data.length),this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"insertRow",value:function(t){t.hasOwnProperty("index")&&t.hasOwnProperty("row")&&(this.options.data.splice(t.index,0,t.row),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}},{key:"updateRow",value:function(e){var i=Array.isArray(e)?e:[e],n=!0,o=!1,r=void 0;try{for(var a,s=i[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;l.hasOwnProperty("index")&&l.hasOwnProperty("row")&&(t.extend(this.options.data[l.index],l.row),l.hasOwnProperty("replace")&&l.replace?this.options.data[l.index]=l.row:t.extend(this.options.data[l.index],l.row))}}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"getRowByUniqueId",value:function(t){var e,i,n,o=this.options.uniqueId,r=t,a=null;for(e=this.options.data.length-1;e>=0;e--){if((i=this.options.data[e]).hasOwnProperty(o))n=i[o];else{if(!i._data||!i._data.hasOwnProperty(o))continue;n=i._data[o]}if("string"==typeof n?r=r.toString():"number"==typeof n&&(Number(n)===n&&n%1==0?r=parseInt(r):n===Number(n)&&0!==n&&(r=parseFloat(r))),n===r){a=i;break}}return a}},{key:"updateByUniqueId",value:function(e){var i=Array.isArray(e)?e:[e],n=!0,o=!1,r=void 0;try{for(var a,s=i[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;if(l.hasOwnProperty("id")&&l.hasOwnProperty("row")){var c=this.options.data.indexOf(this.getRowByUniqueId(l.id));-1!==c&&(l.hasOwnProperty("replace")&&l.replace?this.options.data[c]=l.row:t.extend(this.options.data[c],l.row))}}}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"removeByUniqueId",value:function(t){var e=this.options.data.length,i=this.getRowByUniqueId(t);i&&this.options.data.splice(this.options.data.indexOf(i),1),e!==this.options.data.length&&(this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"updateCell",value:function(t){t.hasOwnProperty("index")&&t.hasOwnProperty("field")&&t.hasOwnProperty("value")&&(this.data[t.index][t.field]=t.value,!1!==t.reinit&&(this.initSort(),this.initBody(!0)))}},{key:"updateCellByUniqueId",value:function(t){var e=this;t.hasOwnProperty("id")&&t.hasOwnProperty("field")&&t.hasOwnProperty("value")&&((Array.isArray(t)?t:[t]).forEach((function(t){var i=t.id,n=t.field,o=t.value,r=e.options.data.indexOf(e.getRowByUniqueId(i));-1!==r&&(e.options.data[r][n]=o)})),!1!==t.reinit&&(this.initSort(),this.initBody(!0)))}},{key:"showRow",value:function(t){this._toggleRow(t,!0)}},{key:"hideRow",value:function(t){this._toggleRow(t,!1)}},{key:"_toggleRow",value:function(t,e){var i;if(t.hasOwnProperty("index")?i=this.getData()[t.index]:t.hasOwnProperty("uniqueId")&&(i=this.getRowByUniqueId(t.uniqueId)),i){var n=Mo.findIndex(this.hiddenRows,i);e||-1!==n?e&&n>-1&&this.hiddenRows.splice(n,1):this.hiddenRows.push(i),e?this.updatePagination():(this.initBody(!0),this.initPagination())}}},{key:"getHiddenRows",value:function(t){if(t)return this.initHiddenRows(),void this.initBody(!0);var e=this.getData(),i=[],n=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;this.hiddenRows.includes(l)&&i.push(l)}}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return this.hiddenRows=i,i}},{key:"showColumn",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){e._toggleColumn(e.fieldsColumnsIndex[t],!0,!0)}))}},{key:"hideColumn",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){e._toggleColumn(e.fieldsColumnsIndex[t],!1,!0)}))}},{key:"_toggleColumn",value:function(t,e,i){if(-1!==t&&this.columns[t].visible!==e&&(this.columns[t].visible=e,this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns)){var n=this.$toolbar.find(".keep-open input").prop("disabled",!1);i&&n.filter(Mo.sprintf('[value="%s"]',t)).prop("checked",e),n.filter(":checked").length<=this.options.minimumCountColumns&&n.filter(":checked").prop("disabled",!0)}}},{key:"getVisibleColumns",value:function(){return this.columns.filter((function(t){return t.visible}))}},{key:"getHiddenColumns",value:function(){return this.columns.filter((function(t){return!t.visible}))}},{key:"showAllColumns",value:function(){this._toggleAllColumns(!0)}},{key:"hideAllColumns",value:function(){this._toggleAllColumns(!1)}},{key:"_toggleAllColumns",value:function(e){var i=this,n=!0,o=!1,r=void 0;try{for(var a,s=this.columns.slice().reverse()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;if(l.switchable){if(!e&&this.options.showColumns&&this.getVisibleColumns().length===this.options.minimumCountColumns)continue;l.visible=e}}}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}if(this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns){var c=this.$toolbar.find('.keep-open input:not(".toggle-all")').prop("disabled",!1);e?c.prop("checked",e):c.get().reverse().forEach((function(n){c.filter(":checked").length>i.options.minimumCountColumns&&t(n).prop("checked",e)})),c.filter(":checked").length<=this.options.minimumCountColumns&&c.filter(":checked").prop("disabled",!0)}}},{key:"mergeCells",value:function(t){var e,i,n=t.index,o=this.getVisibleFields().indexOf(t.field),r=t.rowspan||1,a=t.colspan||1,s=this.$body.find(">tr");this.options.detailView&&!this.options.cardView&&(o+=1);var l=s.eq(n).find(">td").eq(o);if(!(n<0||o<0||n>=this.data.length)){for(e=n;e<n+r;e++)for(i=o;i<o+a;i++)s.eq(e).find(">td").eq(i).hide();l.attr("rowspan",r).attr("colspan",a).show()}}},{key:"checkAll",value:function(){this._toggleCheckAll(!0)}},{key:"uncheckAll",value:function(){this._toggleCheckAll(!1)}},{key:"_toggleCheckAll",value:function(t){var e=this.getSelections();this.$selectAll.add(this.$selectAll_).prop("checked",t),this.$selectItem.filter(":enabled").prop("checked",t),this.updateRows();var i=this.getSelections();t?this.trigger("check-all",i,e):this.trigger("uncheck-all",i,e)}},{key:"checkInvert",value:function(){var e=this.$selectItem.filter(":enabled"),i=e.filter(":checked");e.each((function(e,i){t(i).prop("checked",!t(i).prop("checked"))})),this.updateRows(),this.updateSelected(),this.trigger("uncheck-some",i),i=this.getSelections(),this.trigger("check-some",i)}},{key:"check",value:function(t){this._toggleCheck(!0,t)}},{key:"uncheck",value:function(t){this._toggleCheck(!1,t)}},{key:"_toggleCheck",value:function(t,e){var i=this.$selectItem.filter('[data-index="'.concat(e,'"]')),n=this.data[e];if(i.is(":radio")||this.options.singleSelect||this.options.multipleSelectRow&&!this.multipleSelectRowCtrlKey&&!this.multipleSelectRowShiftKey){var o=!0,r=!1,a=void 0;try{for(var s,l=this.options.data[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){s.value[this.header.stateField]=!1}}catch(t){r=!0,a=t}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}this.$selectItem.filter(":checked").not(i).prop("checked",!1)}if(n[this.header.stateField]=t,this.options.multipleSelectRow){if(this.multipleSelectRowShiftKey&&this.multipleSelectRowLastSelectedIndex>=0)for(var c=[this.multipleSelectRowLastSelectedIndex,e].sort(),h=c[0]+1;h<c[1];h++)this.data[h][this.header.stateField]=!0,this.$selectItem.filter('[data-index="'.concat(h,'"]')).prop("checked",!0);this.multipleSelectRowCtrlKey=!1,this.multipleSelectRowShiftKey=!1,this.multipleSelectRowLastSelectedIndex=t?e:-1}i.prop("checked",t),this.updateSelected(),this.trigger(t?"check":"uncheck",this.data[e],i)}},{key:"checkBy",value:function(t){this._toggleCheckBy(!0,t)}},{key:"uncheckBy",value:function(t){this._toggleCheckBy(!1,t)}},{key:"_toggleCheckBy",value:function(t,e){var i=this;if(e.hasOwnProperty("field")&&e.hasOwnProperty("values")){var n=[];this.data.forEach((function(o,r){if(!o.hasOwnProperty(e.field))return!1;if(e.values.includes(o[e.field])){var a=i.$selectItem.filter(":enabled").filter(Mo.sprintf('[data-index="%s"]',r));if(!(a=t?a.not(":checked"):a.filter(":checked")).length)return;a.prop("checked",t),o[i.header.stateField]=t,n.push(o),i.trigger(t?"check":"uncheck",o,a)}})),this.updateSelected(),this.trigger(t?"check-some":"uncheck-some",n)}}},{key:"refresh",value:function(t){t&&t.url&&(this.options.url=t.url),t&&t.pageNumber&&(this.options.pageNumber=t.pageNumber),t&&t.pageSize&&(this.options.pageSize=t.pageSize),this.trigger("refresh",this.initServer(t&&t.silent,t&&t.query,t&&t.url))}},{key:"destroy",value:function(){this.$el.insertBefore(this.$container),t(this.options.toolbar).insertBefore(this.$el),this.$container.next().remove(),this.$container.remove(),this.$el.html(this.$el_.html()).css("margin-top","0").attr("class",this.$el_.attr("class")||"")}},{key:"resetView",value:function(t){var e=0;if(t&&t.height&&(this.options.height=t.height),this.$selectAll.prop("checked",this.$selectItem.length>0&&this.$selectItem.length===this.$selectItem.filter(":checked").length),this.$tableContainer.toggleClass("has-card-view",this.options.cardView),!this.options.cardView&&this.options.showHeader&&this.options.height?(this.$tableHeader.show(),this.resetHeader(),e+=this.$header.outerHeight(!0)+1):(this.$tableHeader.hide(),this.trigger("post-header")),!this.options.cardView&&this.options.showFooter&&(this.$tableFooter.show(),this.fitFooter(),this.options.height&&(e+=this.$tableFooter.outerHeight(!0))),this.options.height){var i=this.$toolbar.outerHeight(!0),n=this.$pagination.outerHeight(!0),o=this.options.height-i-n,r=this.$tableBody.find("table").outerHeight(!0);this.$tableContainer.css("height","".concat(o,"px")),this.$tableBorder&&this.$tableBorder.css("height","".concat(o-r-e-1,"px"))}this.options.cardView?(this.$el.css("margin-top","0"),this.$tableContainer.css("padding-bottom","0"),this.$tableFooter.hide()):(this.getCaret(),this.$tableContainer.css("padding-bottom","".concat(e,"px"))),this.trigger("reset-view")}},{key:"resetWidth",value:function(){this.options.showHeader&&this.options.height&&this.fitHeader(),this.options.showFooter&&!this.options.cardView&&this.fitFooter()}},{key:"showLoading",value:function(){this.$tableLoading.css("display","flex")}},{key:"hideLoading",value:function(){this.$tableLoading.css("display","none")}},{key:"togglePagination",value:function(){this.options.pagination=!this.options.pagination;var t=this.options.showButtonIcons?this.options.pagination?this.options.icons.paginationSwitchDown:this.options.icons.paginationSwitchUp:"",e=this.options.showButtonText?this.options.pagination?this.options.formatPaginationSwitchUp():this.options.formatPaginationSwitchDown():"";this.$toolbar.find('button[name="paginationSwitch"]').html(Mo.sprintf(this.constants.html.icon,this.options.iconsPrefix,t)+" "+e),this.updatePagination()}},{key:"toggleFullscreen",value:function(){this.$el.closest(".bootstrap-table").toggleClass("fullscreen"),this.resetView()}},{key:"toggleView",value:function(){this.options.cardView=!this.options.cardView,this.initHeader();var t=this.options.showButtonIcons?this.options.cardView?this.options.icons.toggleOn:this.options.icons.toggleOff:"",e=this.options.showButtonText?this.options.cardView?this.options.formatToggleOff():this.options.formatToggleOn():"";this.$toolbar.find('button[name="toggle"]').html(Mo.sprintf(this.constants.html.icon,this.options.iconsPrefix,t)+" "+e),this.initBody(),this.trigger("toggle",this.options.cardView)}},{key:"resetSearch",value:function(t){var e=this.$toolbar.find(".search input");e.val(t||""),this.onSearch({currentTarget:e})}},{key:"filterBy",value:function(e,i){this.filterOptions=Mo.isEmptyObject(i)?this.options.filterOptions:t.extend(this.options.filterOptions,i),this.filterColumns=Mo.isEmptyObject(e)?{}:e,this.options.pageNumber=1,this.initSearch(),this.updatePagination()}},{key:"scrollTo",value:function(e){if(void 0===e)return this.$tableBody.scrollTop();var i={unit:"px",value:0};"object"===Co(e)?i=Object.assign(i,e):"string"==typeof e&&"bottom"===e?i.value=this.$tableBody[0].scrollHeight:"string"==typeof e&&(i.value=e);var n=i.value;"rows"===i.unit&&(n=0,this.$body.find("> tr:lt(".concat(i.value,")")).each((function(e,i){n+=t(i).outerHeight(!0)}))),this.$tableBody.scrollTop(n)}},{key:"getScrollPosition",value:function(){return this.scrollTo()}},{key:"selectPage",value:function(t){t>0&&t<=this.options.totalPages&&(this.options.pageNumber=t,this.updatePagination())}},{key:"prevPage",value:function(){this.options.pageNumber>1&&(this.options.pageNumber--,this.updatePagination())}},{key:"nextPage",value:function(){this.options.pageNumber<this.options.totalPages&&(this.options.pageNumber++,this.updatePagination())}},{key:"toggleDetailView",value:function(t,e){this.$body.find(Mo.sprintf('> tr[data-index="%s"]',t)).next().is("tr.detail-view")?this.collapseRow(t):this.expandRow(t,e),this.resetView()}},{key:"expandRow",value:function(t,e){var i=this.data[t],n=this.$body.find(Mo.sprintf('> tr[data-index="%s"][data-has-detail-view]',t));if(!n.next().is("tr.detail-view")){this.options.detailViewIcon&&n.find("a.detail-icon").html(Mo.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailClose)),n.after(Mo.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>',n.children("td").length));var o=n.next().find("td"),r=e||this.options.detailFormatter,a=Mo.calculateObjectValue(this.options,r,[t,i,o],"");1===o.length&&o.append(a),this.trigger("expand-row",t,i,o)}}},{key:"collapseRow",value:function(t){var e=this.data[t],i=this.$body.find(Mo.sprintf('> tr[data-index="%s"][data-has-detail-view]',t));i.next().is("tr.detail-view")&&(this.options.detailViewIcon&&i.find("a.detail-icon").html(Mo.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen)),this.trigger("collapse-row",t,e,i.next()),i.next().remove())}},{key:"expandAllRows",value:function(){for(var e=this.$body.find("> tr[data-index][data-has-detail-view]"),i=0;i<e.length;i++)this.expandRow(t(e[i]).data("index"))}},{key:"collapseAllRows",value:function(){for(var e=this.$body.find("> tr[data-index][data-has-detail-view]"),i=0;i<e.length;i++)this.collapseRow(t(e[i]).data("index"))}},{key:"updateColumnTitle",value:function(e){e.hasOwnProperty("field")&&e.hasOwnProperty("title")&&(this.columns[this.fieldsColumnsIndex[e.field]].title=this.options.escape?Mo.escapeHTML(e.title):e.title,this.columns[this.fieldsColumnsIndex[e.field]].visible&&(void 0!==this.options.height?this.$tableHeader:this.$header).find("th[data-field]").each((function(i,n){if(t(n).data("field")===e.field)return t(t(n).find(".th-inner")[0]).text(e.title),!1})))}},{key:"updateFormatText",value:function(t,e){/^format/.test(t)&&this.options[t]&&("string"==typeof e?this.options[t]=function(){return e}:"function"==typeof e&&(this.options[t]=e),this.initToolbar(),this.initPagination(),this.initBody())}}]),e}();return qo.VERSION=Bo.VERSION,qo.DEFAULTS=Bo.DEFAULTS,qo.LOCALES=Bo.LOCALES,qo.COLUMN_DEFAULTS=Bo.COLUMN_DEFAULTS,qo.METHODS=Bo.METHODS,qo.EVENTS=Bo.EVENTS,t.BootstrapTable=qo,t.fn.bootstrapTable=function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];var r;return this.each((function(i,o){var a=t(o).data("bootstrap.table"),s=t.extend({},qo.DEFAULTS,t(o).data(),"object"===Co(e)&&e);if("string"==typeof e){var l;if(!Bo.METHODS.includes(e))throw new Error("Unknown method: ".concat(e));if(!a)return;r=(l=a)[e].apply(l,n),"destroy"===e&&t(o).removeData("bootstrap.table")}a||t(o).data("bootstrap.table",a=new t.BootstrapTable(o,s))})),void 0===r?this:r},t.fn.bootstrapTable.Constructor=qo,t.fn.bootstrapTable.theme=Bo.THEME,t.fn.bootstrapTable.VERSION=Bo.VERSION,t.fn.bootstrapTable.defaults=qo.DEFAULTS,t.fn.bootstrapTable.columnDefaults=qo.COLUMN_DEFAULTS,t.fn.bootstrapTable.events=qo.EVENTS,t.fn.bootstrapTable.locales=qo.LOCALES,t.fn.bootstrapTable.methods=qo.METHODS,t.fn.bootstrapTable.utils=Mo,t((function(){t('[data-toggle="table"]').bootstrapTable()})),qo}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/pace/pace.js":
/*!***********************************!*\
  !*** ./node_modules/pace/pace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ "./node_modules/pace/pace.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Pace;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after CoreUI app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.js");
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before CoreUI app.js




/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-table */ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js");
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_table__WEBPACK_IMPORTED_MODULE_6__);
/**
 * This bootstrap file is used for both frontend and backend
 */




 // Required for BS4



/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}
/**
 * Place any jQuery/helper plugins in here.
 */


$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('form').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'warning'
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'info'
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
});

/***/ }),

/***/ 1:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! X:\xampp\htdocs\blog\resources\js\backend\before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! X:\xampp\htdocs\blog\resources\js\backend\app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! X:\xampp\htdocs\blog\resources\js\backend\after.js */"./resources/js/backend/after.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC10YWJsZS9kaXN0L2Jvb3RzdHJhcC10YWJsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhY2UvcGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9wZXJmZWN0LXNjcm9sbGJhci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJqUXVlcnkiLCJTd2FsIiwiXyIsImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFkZERlbGV0ZUZvcm1zIiwiYXBwZW5kIiwiZmluZCIsImxlbmd0aCIsImF0dHIiLCJzdWJtaXQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJsaW5rIiwiY2FuY2VsIiwiY29uZmlybSIsInRpdGxlIiwiZmlyZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0eXBlIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwibG9jYXRpb24iLCJhc3NpZ24iLCJ0b29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTRELG9CQUFvQixtQkFBTyxDQUFDLG9EQUFRLEdBQUcsbUJBQU8sQ0FBQyx5RkFBbUI7QUFDaEksRUFBRSxTQUM4RjtBQUNoRyxDQUFDLGlEQUFpRDs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUSxtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDNUUsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLG9CQUFvQixZQUFZLEVBQUU7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQyxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxzREFBc0Q7O0FBRXREOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkYsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHQUFHOztBQUVILHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFNBQVMsRUFBRTtBQUM1RCxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsK0VBQStFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLHFCQUFxQixFQUFFOztBQUVyRTtBQUNBO0FBQ0EsV0FBVyxvREFBb0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0RBQWdEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsc0JBQXNCO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyx3RUFBd0U7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFFBQVE7QUFDM0M7O0FBRUEsb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0QsOEJBQThCO0FBQ3BGLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsc0JBQXNCLEVBQUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHdEQUF3RCw0QkFBNEIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUgsd0RBQXdELDRCQUE0QixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFLHNDQUFzQywyRUFBMkU7O0FBRWpIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFt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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQSw2Qjs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q2dDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCYixJQUFJLENBQUNOLElBQUwsQ0FBVSxNQUFWLENBQXZCLENBQWhCO0FBQ0gsS0FSRDtBQVNILEdBdENEO0FBd0NBYixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QmlDLE9BQTdCO0FBQ0gsQ0EzREEsQ0FBRCxDIiwiZmlsZSI6Ii9qcy9iYWNrZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gICogQ29yZVVJIHYyLjEuMTYgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqIENvcHlyaWdodCAyMDE5IMWBdWthc3ogSG9sZWN6ZWtcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvKVxuICAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgncGVyZmVjdC1zY3JvbGxiYXInKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ2pxdWVyeScsICdwZXJmZWN0LXNjcm9sbGJhciddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuY29yZXVpID0ge30sIGdsb2JhbC5qUXVlcnksIGdsb2JhbC5QZXJmZWN0U2Nyb2xsYmFyKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cywgJCwgUGVyZmVjdFNjcm9sbGJhcikgeyAndXNlIHN0cmljdCc7XG5cbiAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcbiAgUGVyZmVjdFNjcm9sbGJhciA9IFBlcmZlY3RTY3JvbGxiYXIgJiYgUGVyZmVjdFNjcm9sbGJhci5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUGVyZmVjdFNjcm9sbGJhclsnZGVmYXVsdCddIDogUGVyZmVjdFNjcm9sbGJhcjtcblxuICB2YXIgZmFpbHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFleGVjKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG4gIHZhciBkZXNjcmlwdG9ycyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG4gIH0pO1xuXG4gIHZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcbiAgXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICB2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG4gIHZhciBnbG9iYWxfMSA9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICAgIGNoZWNrKHR5cGVvZiBjb21tb25qc0dsb2JhbCA9PSAnb2JqZWN0JyAmJiBjb21tb25qc0dsb2JhbCkgfHxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4gIHZhciBpc09iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG4gIH07XG5cbiAgdmFyIGRvY3VtZW50JDEgPSBnbG9iYWxfMS5kb2N1bWVudDtcbiAgLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG4gIHZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCQxKSAmJiBpc09iamVjdChkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQpO1xuXG4gIHZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xuICB9O1xuXG4gIC8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbiAgdmFyIGllOERvbURlZmluZSA9ICFkZXNjcmlwdG9ycyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgICB9KS5hICE9IDc7XG4gIH0pO1xuXG4gIHZhciBhbk9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICAgIH0gcmV0dXJuIGl0O1xuICB9O1xuXG4gIC8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4gIC8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4gIC8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG4gIHZhciB0b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICAgIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIGZuLCB2YWw7XG4gICAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfTtcblxuICB2YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuICB2YXIgZiA9IGRlc2NyaXB0b3JzID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICAgIGlmIChpZThEb21EZWZpbmUpIHRyeSB7XG4gICAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICByZXR1cm4gTztcbiAgfTtcblxuICB2YXIgb2JqZWN0RGVmaW5lUHJvcGVydHkgPSB7XG4gIFx0ZjogZlxuICB9O1xuXG4gIHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBkZXNjcmlwdG9ycyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gb2JqZWN0RGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gIH0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xuXG4gIHZhciBzZXRHbG9iYWwgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsXzEsIGtleSwgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBnbG9iYWxfMVtrZXldID0gdmFsdWU7XG4gICAgfSByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgdmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xuICB2YXIgc3RvcmUgPSBnbG9iYWxfMVtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxuICB2YXIgc2hhcmVkU3RvcmUgPSBzdG9yZTtcblxuICB2YXIgc2hhcmVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzaGFyZWRTdG9yZVtrZXldIHx8IChzaGFyZWRTdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xuICB9KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gICAgdmVyc2lvbjogJzMuMy40JyxcbiAgICBtb2RlOiAgJ2dsb2JhbCcsXG4gICAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbiAgfSk7XG4gIH0pO1xuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIHZhciBoYXMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuICB9O1xuXG4gIHZhciBmdW5jdGlvblRvU3RyaW5nID0gc2hhcmVkKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4gIHZhciBXZWFrTWFwID0gZ2xvYmFsXzEuV2Vha01hcDtcblxuICB2YXIgbmF0aXZlV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChmdW5jdGlvblRvU3RyaW5nLmNhbGwoV2Vha01hcCkpO1xuXG4gIHZhciBpZCA9IDA7XG4gIHZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxuICB2YXIgdWlkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG4gIH07XG5cbiAgdmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxuICB2YXIgc2hhcmVkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbiAgfTtcblxuICB2YXIgaGlkZGVuS2V5cyA9IHt9O1xuXG4gIHZhciBXZWFrTWFwJDEgPSBnbG9iYWxfMS5XZWFrTWFwO1xuICB2YXIgc2V0LCBnZXQsIGhhcyQxO1xuXG4gIHZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhcyQxKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbiAgfTtcblxuICB2YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgICB2YXIgc3RhdGU7XG4gICAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICAgIH0gcmV0dXJuIHN0YXRlO1xuICAgIH07XG4gIH07XG5cbiAgaWYgKG5hdGl2ZVdlYWtNYXApIHtcbiAgICB2YXIgc3RvcmUkMSA9IG5ldyBXZWFrTWFwJDEoKTtcbiAgICB2YXIgd21nZXQgPSBzdG9yZSQxLmdldDtcbiAgICB2YXIgd21oYXMgPSBzdG9yZSQxLmhhcztcbiAgICB2YXIgd21zZXQgPSBzdG9yZSQxLnNldDtcbiAgICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgICB3bXNldC5jYWxsKHN0b3JlJDEsIGl0LCBtZXRhZGF0YSk7XG4gICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgfTtcbiAgICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlJDEsIGl0KSB8fCB7fTtcbiAgICB9O1xuICAgIGhhcyQxID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSQxLCBpdCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gICAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICAgIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICB9O1xuICAgIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gICAgfTtcbiAgICBoYXMkMSA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgcmV0dXJuIGhhcyhpdCwgU1RBVEUpO1xuICAgIH07XG4gIH1cblxuICB2YXIgaW50ZXJuYWxTdGF0ZSA9IHtcbiAgICBzZXQ6IHNldCxcbiAgICBnZXQ6IGdldCxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGVuZm9yY2U6IGVuZm9yY2UsXG4gICAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3JcbiAgfTtcblxuICB2YXIgcmVkZWZpbmUgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5nZXQ7XG4gIHZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGUuZW5mb3JjZTtcbiAgdmFyIFRFTVBMQVRFID0gU3RyaW5nKGZ1bmN0aW9uVG9TdHJpbmcpLnNwbGl0KCd0b1N0cmluZycpO1xuXG4gIHNoYXJlZCgnaW5zcGVjdFNvdXJjZScsIGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9KTtcblxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICAgIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gICAgfVxuICAgIGlmIChPID09PSBnbG9iYWxfMSkge1xuICAgICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgICBzaW1wbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbiAgLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4gIH0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgZnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICB9KTtcbiAgfSk7XG5cbiAgdmFyIG5hdGl2ZVN5bWJvbCA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xuICB9KTtcblxuICB2YXIgU3ltYm9sJDEgPSBnbG9iYWxfMS5TeW1ib2w7XG4gIHZhciBzdG9yZSQyID0gc2hhcmVkKCd3a3MnKTtcblxuICB2YXIgd2VsbEtub3duU3ltYm9sID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmUkMltuYW1lXSB8fCAoc3RvcmUkMltuYW1lXSA9IG5hdGl2ZVN5bWJvbCAmJiBTeW1ib2wkMVtuYW1lXVxuICAgICAgfHwgKG5hdGl2ZVN5bWJvbCA/IFN5bWJvbCQxIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG4gIH07XG5cbiAgLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xuICB2YXIgcmVnZXhwRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICAgIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gICAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICAgIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICAgIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuICAvLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbiAgLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4gIC8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbiAgdmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbiAgdmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxuICB2YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmUxID0gL2EvO1xuICAgIHZhciByZTIgPSAvYiovZztcbiAgICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICAgIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gICAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbiAgfSkoKTtcblxuICAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG4gIHZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbiAgdmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbiAgaWYgKFBBVENIKSB7XG4gICAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgICAgdmFyIHJlID0gdGhpcztcbiAgICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgICB9XG4gICAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG5cbiAgICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICAgIHJlLmxhc3RJbmRleCA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfTtcbiAgfVxuXG4gIHZhciByZWdleHBFeGVjID0gcGF0Y2hlZEV4ZWM7XG5cbiAgdmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuICB2YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gICAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gICAgdmFyIHJlID0gLy4vO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xuICB9KTtcblxuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG4gIHZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZSA9IC8oPzopLztcbiAgICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xuICB9KTtcblxuICB2YXIgZml4UmVnZXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgICB2YXIgTyA9IHt9O1xuICAgICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gICAgfSk7XG5cbiAgICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICAgIHZhciByZSA9IC9hLztcblxuICAgICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICAgIHJlID0ge307XG4gICAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgICAgfVxuXG4gICAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICAgIHJlW1NZTUJPTF0oJycpO1xuICAgICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgICApIHtcbiAgICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgICB9KTtcbiAgICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgICAgdmFyIHJlZ2V4TWV0aG9kID0gbWV0aG9kc1sxXTtcblxuICAgICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICAgKTtcbiAgICAgIGlmIChzaGFtKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxuICB2YXIgY2xhc3NvZlJhdyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG4gIH07XG5cbiAgdmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4gIC8vIGBJc1JlZ0V4cGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG4gIHZhciBpc1JlZ2V4cCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBpc1JlZ0V4cDtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY2xhc3NvZlJhdyhpdCkgPT0gJ1JlZ0V4cCcpO1xuICB9O1xuXG4gIC8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuICB2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcblxuICB2YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9IHJldHVybiBpdDtcbiAgfTtcblxuICB2YXIgU1BFQ0lFUyQxID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbiAgLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxuICB2YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICAgIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gICAgdmFyIFM7XG4gICAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVMkMV0pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFGdW5jdGlvbihTKTtcbiAgfTtcblxuICB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICAvLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG4gIHZhciB0b0ludGVnZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbiAgfTtcblxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IGNvZGVQb2ludEF0LCBhdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG4gIHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICAgIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICAgICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgc3RyaW5nTXVsdGlieXRlID0ge1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG4gICAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG4gICAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbiAgfTtcblxuICB2YXIgY2hhckF0ID0gc3RyaW5nTXVsdGlieXRlLmNoYXJBdDtcblxuICAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG4gIHZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGNoYXJBdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG4gIH07XG5cbiAgdmFyIG1pbiA9IE1hdGgubWluO1xuXG4gIC8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG4gIHZhciB0b0xlbmd0aCA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH07XG5cbiAgLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG4gIHZhciByZWdleHBFeGVjQWJzdHJhY3QgPSBmdW5jdGlvbiAoUiwgUykge1xuICAgIHZhciBleGVjID0gUi5leGVjO1xuICAgIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoY2xhc3NvZlJhdyhSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICAgIH1cblxuICAgIHJldHVybiByZWdleHBFeGVjLmNhbGwoUiwgUyk7XG4gIH07XG5cbiAgdmFyIGFycmF5UHVzaCA9IFtdLnB1c2g7XG4gIHZhciBtaW4kMSA9IE1hdGgubWluO1xuICB2YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG5cbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gIVJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuICAvLyBAQHNwbGl0IGxvZ2ljXG4gIGZpeFJlZ2V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHZhciBpbnRlcm5hbFNwbGl0O1xuICAgIGlmIChcbiAgICAgICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICAgJ3Rlc3QnLnNwbGl0KC8oPzopLywgLTEpLmxlbmd0aCAhPSA0IHx8XG4gICAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcbiAgICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxuICAgICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAgICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICAgKSB7XG4gICAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcbiAgICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgICAgaWYgKCFpc1JlZ2V4cChzZXBhcmF0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHkubGFzdEluZGV4O1xuICAgICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkgYXJyYXlQdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW0pIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBvdXRwdXQuc2xpY2UoMCwgbGltKSA6IG91dHB1dDtcbiAgICAgIH07XG4gICAgLy8gQ2hha3JhLCBWOFxuICAgIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBuYXRpdmVTcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgICAgLy9cbiAgICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiByZWdleHBFeGVjQWJzdHJhY3Qoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIHEgPSAwO1xuICAgICAgICB2YXIgQSA9IFtdO1xuICAgICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICAgIHZhciB6ID0gcmVnZXhwRXhlY0Fic3RyYWN0KHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICAgIHZhciBlO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAgIChlID0gbWluJDEodG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICAgIHJldHVybiBBO1xuICAgICAgfVxuICAgIF07XG4gIH0sICFTVVBQT1JUU19ZKTtcblxuICB2YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgLy8gTmFzaG9ybiB+IEpESzggYnVnXG4gIHZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbiAgLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG4gIHZhciBmJDEgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbiAgfSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4gIHZhciBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHtcbiAgXHRmOiBmJDFcbiAgfTtcblxuICB2YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuICAvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xuICB2YXIgaW5kZXhlZE9iamVjdCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG4gIH0pID8gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGNsYXNzb2ZSYXcoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbiAgfSA6IE9iamVjdDtcblxuICAvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xuXG5cblxuICB2YXIgdG9JbmRleGVkT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xuICB9O1xuXG4gIHZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuICB2YXIgZiQyID0gZGVzY3JpcHRvcnMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICAgIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gICAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIGlmIChpZThEb21EZWZpbmUpIHRyeSB7XG4gICAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xuICB9O1xuXG4gIHZhciBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSB7XG4gIFx0ZjogZiQyXG4gIH07XG5cbiAgdmFyIHBhdGggPSBnbG9iYWxfMTtcblxuICB2YXIgYUZ1bmN0aW9uJDEgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbiAgfTtcblxuICB2YXIgZ2V0QnVpbHRJbiA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbiQxKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uJDEoZ2xvYmFsXzFbbmFtZXNwYWNlXSlcbiAgICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbF8xW25hbWVzcGFjZV0gJiYgZ2xvYmFsXzFbbmFtZXNwYWNlXVttZXRob2RdO1xuICB9O1xuXG4gIHZhciBtYXggPSBNYXRoLm1heDtcbiAgdmFyIG1pbiQyID0gTWF0aC5taW47XG5cbiAgLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4gIC8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbiAgLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4obGVuZ3RoLCBsZW5ndGgpLlxuICB2YXIgdG9BYnNvbHV0ZUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluJDIoaW50ZWdlciwgbGVuZ3RoKTtcbiAgfTtcblxuICAvLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxuICB2YXIgY3JlYXRlTWV0aG9kJDEgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhcnJheUluY2x1ZGVzID0ge1xuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICAgIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QkMSh0cnVlKSxcbiAgICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gICAgaW5kZXhPZjogY3JlYXRlTWV0aG9kJDEoZmFsc2UpXG4gIH07XG5cbiAgdmFyIGluZGV4T2YgPSBhcnJheUluY2x1ZGVzLmluZGV4T2Y7XG5cblxuICB2YXIgb2JqZWN0S2V5c0ludGVybmFsID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gICAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xuICB2YXIgZW51bUJ1Z0tleXMgPSBbXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaGFzT3duUHJvcGVydHknLFxuICAgICdpc1Byb3RvdHlwZU9mJyxcbiAgICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgJ3RvU3RyaW5nJyxcbiAgICAndmFsdWVPZidcbiAgXTtcblxuICB2YXIgaGlkZGVuS2V5cyQxID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgdmFyIGYkMyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICAgIHJldHVybiBvYmplY3RLZXlzSW50ZXJuYWwoTywgaGlkZGVuS2V5cyQxKTtcbiAgfTtcblxuICB2YXIgb2JqZWN0R2V0T3duUHJvcGVydHlOYW1lcyA9IHtcbiAgXHRmOiBmJDNcbiAgfTtcblxuICB2YXIgZiQ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuICB2YXIgb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzID0ge1xuICBcdGY6IGYkNFxuICB9O1xuXG4gIC8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbiAgdmFyIG93bktleXMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gICAgdmFyIGtleXMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzLmYoYW5PYmplY3QoaXQpKTtcbiAgICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzLmY7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbiAgfTtcblxuICB2YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICAgIHZhciBkZWZpbmVQcm9wZXJ0eSA9IG9iamVjdERlZmluZVByb3BlcnR5LmY7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvci5mO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxuICB2YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICAgIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgICAgOiAhIWRldGVjdGlvbjtcbiAgfTtcblxuICB2YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgdmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG4gIHZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG4gIHZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG4gIHZhciBpc0ZvcmNlZF8xID0gaXNGb3JjZWQ7XG5cbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciQxID0gb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmY7XG5cblxuXG5cblxuXG4gIC8qXG4gICAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICAgIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICAgIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gICAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gICAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICAgIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICAgIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gICovXG4gIHZhciBfZXhwb3J0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICAgIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gICAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICAgIGlmIChHTE9CQUwpIHtcbiAgICAgIHRhcmdldCA9IGdsb2JhbF8xO1xuICAgIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgICB0YXJnZXQgPSBnbG9iYWxfMVtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0ID0gKGdsb2JhbF8xW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciQxKHRhcmdldCwga2V5KTtcbiAgICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICAgIEZPUkNFRCA9IGlzRm9yY2VkXzEoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgICAgfVxuICAgICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgICAgfVxuICAgICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG4gIHZhciBiaW5kQ29udGV4dCA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gICAgYUZ1bmN0aW9uKGZuKTtcbiAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gICAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgICB9O1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgICB9O1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgICB9O1xuICAgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3RcbiAgdmFyIHRvT2JqZWN0ID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG4gIH07XG5cbiAgLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxuICB2YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICAgIGlmIChyZXR1cm5NZXRob2QgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0dXJuTWV0aG9kLmNhbGwoaXRlcmF0b3IpKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXRlcmF0b3JzID0ge307XG5cbiAgdmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuICB2YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbiAgLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxuICB2YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKGl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gICAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgb2JqZWN0RGVmaW5lUHJvcGVydHkuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgdmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbiAgLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbiAgdmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBpdFtrZXldO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgfTtcblxuICAvLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG4gIHZhciBjbGFzc29mID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICAgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIElURVJBVE9SJDEgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbiAgdmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SJDFdXG4gICAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgICB8fCBpdGVyYXRvcnNbY2xhc3NvZihpdCldO1xuICB9O1xuXG4gIC8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuICB2YXIgYXJyYXlGcm9tID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0O1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmRDb250ZXh0KG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICAgIHJlc3VsdCA9IG5ldyBDKCk7XG4gICAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmdcbiAgICAgICAgICA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKVxuICAgICAgICAgIDogc3RlcC52YWx1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiQyID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuICB2YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICB2YXIgY2FsbGVkID0gMDtcbiAgICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgICB9LFxuICAgICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUiQyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG4gIHZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gICAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgICBvYmplY3RbSVRFUkFUT1IkMl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIGV4ZWMob2JqZWN0KTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xuICB9O1xuXG4gIHZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbiAgfSk7XG5cbiAgLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4gIF9leHBvcnQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gICAgZnJvbTogYXJyYXlGcm9tXG4gIH0pO1xuXG4gIC8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgICByZXR1cm4gY2xhc3NvZlJhdyhhcmcpID09ICdBcnJheSc7XG4gIH07XG5cbiAgdmFyIFNQRUNJRVMkMiA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4gIC8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbiAgdmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgICB2YXIgQztcbiAgICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICAgIEMgPSBDW1NQRUNJRVMkMl07XG4gICAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IFtdLnB1c2g7XG5cbiAgLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbiAgdmFyIGNyZWF0ZU1ldGhvZCQyID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICAgIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gICAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gICAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICAgIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICAgIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICAgIHZhciBzZWxmID0gaW5kZXhlZE9iamVjdChPKTtcbiAgICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZENvbnRleHQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgICBjYXNlIDI6IHB1c2guY2FsbCh0YXJnZXQsIHZhbHVlKTsgLy8gZmlsdGVyXG4gICAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhcnJheUl0ZXJhdGlvbiA9IHtcbiAgICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gICAgZm9yRWFjaDogY3JlYXRlTWV0aG9kJDIoMCksXG4gICAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgICBtYXA6IGNyZWF0ZU1ldGhvZCQyKDEpLFxuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgZmlsdGVyOiBjcmVhdGVNZXRob2QkMigyKSxcbiAgICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gICAgc29tZTogY3JlYXRlTWV0aG9kJDIoMyksXG4gICAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gICAgZXZlcnk6IGNyZWF0ZU1ldGhvZCQyKDQpLFxuICAgIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgICBmaW5kOiBjcmVhdGVNZXRob2QkMig1KSxcbiAgICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICAgIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kJDIoNilcbiAgfTtcblxuICB2YXIgdXNlckFnZW50ID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuXG4gIHZhciBwcm9jZXNzID0gZ2xvYmFsXzEucHJvY2VzcztcbiAgdmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xuICB2YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbiAgdmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG4gIGlmICh2OCkge1xuICAgIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgICB2ZXJzaW9uID0gbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbiAgfSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgdjhWZXJzaW9uID0gdmVyc2lvbiAmJiArdmVyc2lvbjtcblxuICB2YXIgU1BFQ0lFUyQzID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbiAgdmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgICByZXR1cm4gdjhWZXJzaW9uID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgICBjb25zdHJ1Y3RvcltTUEVDSUVTJDNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgJG1hcCA9IGFycmF5SXRlcmF0aW9uLm1hcDtcblxuXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICAvLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuICBfZXhwb3J0KHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJykgfSwge1xuICAgIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICAgIHJldHVybiBvYmplY3RLZXlzSW50ZXJuYWwoTywgZW51bUJ1Z0tleXMpO1xuICB9O1xuXG4gIHZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4gIC8vIGBPYmplY3QuYXNzaWduYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIG9iamVjdEFzc2lnbiA9ICFuYXRpdmVBc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBBID0ge307XG4gICAgdmFyIEIgPSB7fTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gICAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgICBBW3N5bWJvbF0gPSA3O1xuICAgIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgICByZXR1cm4gbmF0aXZlQXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cyhuYXRpdmVBc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbiAgfSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSAxO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMuZjtcbiAgICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZS5mO1xuICAgIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFyIFMgPSBpbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IG9iamVjdEtleXMoUykuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgdmFyIGogPSAwO1xuICAgICAgdmFyIGtleTtcbiAgICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9ycyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICAgIH1cbiAgICB9IHJldHVybiBUO1xuICB9IDogbmF0aXZlQXNzaWduO1xuXG4gIC8vIGBPYmplY3QuYXNzaWduYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuICBfZXhwb3J0KHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBvYmplY3RBc3NpZ24gfSwge1xuICAgIGFzc2lnbjogb2JqZWN0QXNzaWduXG4gIH0pO1xuXG4gIHZhciBjb3JyZWN0UHJvdG90eXBlR2V0dGVyID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gICAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xuICB9KTtcblxuICB2YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG4gIHZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4gIC8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2ZcbiAgdmFyIG9iamVjdEdldFByb3RvdHlwZU9mID0gY29ycmVjdFByb3RvdHlwZUdldHRlciA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gICAgTyA9IHRvT2JqZWN0KE8pO1xuICAgIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gICAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IkMyA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbiAgdmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuICB2YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbiAgLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuICBpZiAoW10ua2V5cykge1xuICAgIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gICAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IG9iamVjdEdldFByb3RvdHlwZU9mKG9iamVjdEdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbiAgLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbiAgaWYgKCAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiQzKSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IkMywgcmV0dXJuVGhpcyk7XG4gIH1cblxuICB2YXIgaXRlcmF0b3JzQ29yZSA9IHtcbiAgICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gICAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xuICB9O1xuXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIHZhciBvYmplY3REZWZpbmVQcm9wZXJ0aWVzID0gZGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpbmRleCkgb2JqZWN0RGVmaW5lUHJvcGVydHkuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBodG1sID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG5cbiAgdmFyIElFX1BST1RPJDEgPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbiAgdmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuICB2YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbiAgLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxuICB2YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gICAgdmFyIGx0ID0gJzwnO1xuICAgIHZhciBzY3JpcHQgPSAnc2NyaXB0JztcbiAgICB2YXIgZ3QgPSAnPic7XG4gICAgdmFyIGpzID0gJ2phdmEnICsgc2NyaXB0ICsgJzonO1xuICAgIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgaWZyYW1lLnNyYyA9IFN0cmluZyhqcyk7XG4gICAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gICAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyBzY3JpcHQgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvJyArIHNjcmlwdCArIGd0KTtcbiAgICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICAgIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICAgIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgICByZXR1cm4gY3JlYXRlRGljdCgpO1xuICB9O1xuXG4gIC8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuICB2YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKE8gIT09IG51bGwpIHtcbiAgICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgICByZXN1bHRbSUVfUFJPVE8kMV0gPSBPO1xuICAgIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gICAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IG9iamVjdERlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbiAgfTtcblxuICBoaWRkZW5LZXlzW0lFX1BST1RPJDFdID0gdHJ1ZTtcblxuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBvYmplY3REZWZpbmVQcm9wZXJ0eS5mO1xuXG5cblxuICB2YXIgVE9fU1RSSU5HX1RBRyQxID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG4gIHZhciBzZXRUb1N0cmluZ1RhZyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgICBpZiAoaXQgJiYgIWhhcyhpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHJDEpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRyQxLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlJDEgPSBpdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xuXG5cblxuXG5cbiAgdmFyIHJldHVyblRoaXMkMSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbiAgdmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICAgIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICAgIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gb2JqZWN0Q3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlJDEsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlKTtcbiAgICBpdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzJDE7XG4gICAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG4gIH07XG5cbiAgdmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICAgIH0gcmV0dXJuIGl0O1xuICB9O1xuXG4gIC8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2ZcbiAgLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHZhciBvYmplY3RTZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gICAgdmFyIHRlc3QgPSB7fTtcbiAgICB2YXIgc2V0dGVyO1xuICAgIHRyeSB7XG4gICAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICBhbk9iamVjdChPKTtcbiAgICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgIHJldHVybiBPO1xuICAgIH07XG4gIH0oKSA6IHVuZGVmaW5lZCk7XG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlJDIgPSBpdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xuICB2YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyQxID0gaXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xuICB2YXIgSVRFUkFUT1IkNCA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbiAgdmFyIEtFWVMgPSAna2V5cyc7XG4gIHZhciBWQUxVRVMgPSAndmFsdWVzJztcbiAgdmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbiAgdmFyIHJldHVyblRoaXMkMiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbiAgdmFyIGRlZmluZUl0ZXJhdG9yID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAgIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyQxICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICAgIH07XG5cbiAgICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gICAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICAgIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SJDRdXG4gICAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICAgIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyQxICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gICAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gICAgLy8gZml4IG5hdGl2ZVxuICAgIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gb2JqZWN0R2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlJDIgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgICAgaWYgKCBvYmplY3RHZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSQyKSB7XG4gICAgICAgICAgaWYgKG9iamVjdFNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgICBvYmplY3RTZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlJDIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUiQ0XSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiQ0LCByZXR1cm5UaGlzJDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICAgIH1cblxuICAgIC8vIGRlZmluZSBpdGVyYXRvclxuICAgIGlmICggSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1IkNF0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiQ0LCBkZWZhdWx0SXRlcmF0b3IpO1xuICAgIH1cbiAgICBpdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gICAgaWYgKERFRkFVTFQpIHtcbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgICB9O1xuICAgICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyQxIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgX2V4cG9ydCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyQxIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfTtcblxuICB2YXIgY2hhckF0JDEgPSBzdHJpbmdNdWx0aWJ5dGUuY2hhckF0O1xuXG5cblxuICB2YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG4gIHZhciBzZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5zZXQ7XG4gIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuICAvLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuICBkZWZpbmVJdGVyYXRvcihTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcbiAgICAgIHN0cmluZzogU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICAgIGluZGV4OiAwXG4gICAgfSk7XG4gIC8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbiAgfSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gICAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXg7XG4gICAgdmFyIHBvaW50O1xuICAgIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgcG9pbnQgPSBjaGFyQXQkMShzdHJpbmcsIGluZGV4KTtcbiAgICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xuICB9KTtcblxuICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcbiAgdmFyIG1pbiQzID0gTWF0aC5taW47XG4gIHZhciBmbG9vciQxID0gTWF0aC5mbG9vcjtcbiAgdmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xuICB2YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJidgXXxcXGRcXGQ/KS9nO1xuXG4gIHZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG4gIH07XG5cbiAgLy8gQEByZXBsYWNlIGxvZ2ljXG4gIGZpeFJlZ2V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyByZXBsYWNlci5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUyk7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgkMShtaW4kMyh0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gICAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICB2YXIgZiA9IGZsb29yJDEobiAvIDEwKTtcbiAgICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuICAvLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG4gIHZhciBkb21JdGVyYWJsZXMgPSB7XG4gICAgQ1NTUnVsZUxpc3Q6IDAsXG4gICAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgICBDU1NWYWx1ZUxpc3Q6IDAsXG4gICAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gICAgRE9NUmVjdExpc3Q6IDAsXG4gICAgRE9NU3RyaW5nTGlzdDogMCxcbiAgICBET01Ub2tlbkxpc3Q6IDEsXG4gICAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gICAgRmlsZUxpc3Q6IDAsXG4gICAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gICAgSFRNTENvbGxlY3Rpb246IDAsXG4gICAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICAgIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICAgIE1lZGlhTGlzdDogMCxcbiAgICBNaW1lVHlwZUFycmF5OiAwLFxuICAgIE5hbWVkTm9kZU1hcDogMCxcbiAgICBOb2RlTGlzdDogMSxcbiAgICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICAgIFBsdWdpbjogMCxcbiAgICBQbHVnaW5BcnJheTogMCxcbiAgICBTVkdMZW5ndGhMaXN0OiAwLFxuICAgIFNWR051bWJlckxpc3Q6IDAsXG4gICAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gICAgU1ZHUG9pbnRMaXN0OiAwLFxuICAgIFNWR1N0cmluZ0xpc3Q6IDAsXG4gICAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICAgIFN0eWxlU2hlZXRMaXN0OiAwLFxuICAgIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gICAgVGV4dFRyYWNrTGlzdDogMCxcbiAgICBUb3VjaExpc3Q6IDBcbiAgfTtcblxuICB2YXIgc2xvcHB5QXJyYXlNZXRob2QgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gICAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgICByZXR1cm4gIW1ldGhvZCB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciAkZm9yRWFjaCA9IGFycmF5SXRlcmF0aW9uLmZvckVhY2g7XG5cblxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICB2YXIgYXJyYXlGb3JFYWNoID0gc2xvcHB5QXJyYXlNZXRob2QoJ2ZvckVhY2gnKSA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9IDogW10uZm9yRWFjaDtcblxuICBmb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gZG9tSXRlcmFibGVzKSB7XG4gICAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxfMVtDT0xMRUNUSU9OX05BTUVdO1xuICAgIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGFycmF5Rm9yRWFjaCkgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGFycmF5Rm9yRWFjaCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGFycmF5Rm9yRWFjaDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS4xNik6IGFqYXgtbG9hZC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBBamF4TG9hZCA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENvbnN0YW50c1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdhamF4TG9hZCc7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjE2JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLmFqYXhMb2FkJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICAgIE5BVl9QSUxMUzogJ25hdi1waWxscycsXG4gICAgICBOQVZfVEFCUzogJ25hdi10YWJzJyxcbiAgICAgIE9QRU46ICdvcGVuJyxcbiAgICAgIFZJRVdfU0NSSVBUOiAndmlldy1zY3JpcHQnXG4gICAgfTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgSEVBRDogJ2hlYWQnLFxuICAgICAgTkFWX0RST1BET1dOOiAnLnNpZGViYXItbmF2IC5uYXYtZHJvcGRvd24nLFxuICAgICAgTkFWX0xJTks6ICcuc2lkZWJhci1uYXYgLm5hdi1saW5rJyxcbiAgICAgIE5BVl9JVEVNOiAnLnNpZGViYXItbmF2IC5uYXYtaXRlbScsXG4gICAgICBWSUVXX1NDUklQVDogJy52aWV3LXNjcmlwdCdcbiAgICB9O1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgZGVmYXVsdFBhZ2U6ICdtYWluLmh0bWwnLFxuICAgICAgZXJyb3JQYWdlOiAnNDA0Lmh0bWwnLFxuICAgICAgc3VicGFnZXNEaXJlY3Rvcnk6ICd2aWV3cy8nXG4gICAgfTtcblxuICAgIHZhciBBamF4TG9hZCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIEFqYXhMb2FkKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xuXG4gICAgICAgIGlmICh1cmwgIT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5zZXRVcFVybCh1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VXBVcmwodGhpcy5fY29uZmlnLmRlZmF1bHRQYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBBamF4TG9hZC5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFB1YmxpY1xuICAgICAgX3Byb3RvLmxvYWRQYWdlID0gZnVuY3Rpb24gbG9hZFBhZ2UodXJsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuX2NvbmZpZztcblxuICAgICAgICB2YXIgbG9hZFNjcmlwdHMgPSBmdW5jdGlvbiBsb2FkU2NyaXB0cyhzcmMsIGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICBzY3JpcHQuc3JjID0gc3JjW2VsZW1lbnRdO1xuICAgICAgICAgIHNjcmlwdC5jbGFzc05hbWUgPSBDbGFzc05hbWUuVklFV19TQ1JJUFQ7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cblxuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJlYWR5U3RhdGUgfHwgdGhpcy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIGlmIChzcmMubGVuZ3RoID4gZWxlbWVudCArIDEpIHtcbiAgICAgICAgICAgICAgICBsb2FkU2NyaXB0cyhzcmMsIGVsZW1lbnQgKyAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgdXJsOiBjb25maWcuc3VicGFnZXNEaXJlY3RvcnkgKyB1cmwsXG4gICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiBiZWZvcmVTZW5kKCkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5WSUVXX1NDUklQVCkucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICAgICAgdmFyIHNjcmlwdHMgPSBBcnJheS5mcm9tKHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykpLm1hcChmdW5jdGlvbiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzY3JpcHQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ3NyYycpLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICQoZWxlbWVudCkuaHRtbCh3cmFwcGVyKTtcblxuICAgICAgICAgICAgaWYgKHNjcmlwdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGxvYWRTY3JpcHRzKHNjcmlwdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLmVycm9yUGFnZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldFVwVXJsID0gZnVuY3Rpb24gc2V0VXBVcmwodXJsKSB7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0xJTkspLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9EUk9QRE9XTikucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9EUk9QRE9XTiArIFwiOmhhcyhhW2hyZWY9XFxcIlwiICsgdXJsLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJz8nKVswXSArIFwiXFxcIl0pXCIpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfSVRFTSArIFwiIGFbaHJlZj1cXFwiXCIgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnPycpWzBdICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5sb2FkUGFnZSh1cmwpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmxvYWRCbGFuayA9IGZ1bmN0aW9uIGxvYWRCbGFuayh1cmwpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5sb2FkVG9wID0gZnVuY3Rpb24gbG9hZFRvcCh1cmwpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdCwge30sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfTElOSyArIFwiW2hyZWYhPVxcXCIjXFxcIl1cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gJ190b3AnKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkVG9wKGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZik7XG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhcmdldCA9PT0gJ19ibGFuaycpIHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRCbGFuayhldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRVcFVybChldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfTElOSyArIFwiW2hyZWYhPVxcXCIjXFxcIl1cIik7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBBamF4TG9hZC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQWpheExvYWQodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoQWpheExvYWQsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBBamF4TG9hZDtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJC5mbltOQU1FXSA9IEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFqYXhMb2FkO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBBamF4TG9hZC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWpheExvYWQ7XG4gIH0oJCk7XG5cbiAgdmFyIFNQRUNJRVMkNCA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuICB2YXIgbmF0aXZlU2xpY2UgPSBbXS5zbGljZTtcbiAgdmFyIG1heCQyID0gTWF0aC5tYXg7XG5cbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuICAvLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4gIF9leHBvcnQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpIH0sIHtcbiAgICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xuICAgICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFUyQ0XTtcbiAgICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBuYXRpdmVTbGljZS5jYWxsKE8sIGssIGZpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heCQyKGZpbiAtIGssIDApKTtcbiAgICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuMTYpOiB0b2dnbGUtY2xhc3Nlcy5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuICB2YXIgcmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoY2xhc3NOYW1lcykge1xuICAgIHJldHVybiBjbGFzc05hbWVzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9KS5pbmRleE9mKHRydWUpICE9PSAtMTtcbiAgfTtcblxuICB2YXIgdG9nZ2xlQ2xhc3NlcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzZXModG9nZ2xlQ2xhc3MsIGNsYXNzTmFtZXMpIHtcbiAgICB2YXIgYnJlYWtwb2ludCA9IGNsYXNzTmFtZXMuaW5kZXhPZih0b2dnbGVDbGFzcyk7XG4gICAgdmFyIG5ld0NsYXNzTmFtZXMgPSBjbGFzc05hbWVzLnNsaWNlKDAsIGJyZWFrcG9pbnQgKyAxKTtcblxuICAgIGlmIChyZW1vdmVDbGFzc2VzKG5ld0NsYXNzTmFtZXMpKSB7XG4gICAgICBuZXdDbGFzc05hbWVzLm1hcChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgIH1cbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS4xNik6IGFzaWRlLW1lbnUuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgQXNpZGVNZW51ID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ2FzaWRlLW1lbnUnO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS4xNic7XG4gICAgdmFyIERBVEFfS0VZID0gJ2NvcmV1aS5hc2lkZS1tZW51JztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgICBMT0FEX0RBVEFfQVBJOiBcImxvYWRcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICAgIFRPR0dMRTogJ3RvZ2dsZSdcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEJPRFk6ICdib2R5JyxcbiAgICAgIEFTSURFX01FTlU6ICcuYXNpZGUtbWVudScsXG4gICAgICBBU0lERV9NRU5VX1RPR0dMRVI6ICcuYXNpZGUtbWVudS10b2dnbGVyJ1xuICAgIH07XG4gICAgdmFyIFNob3dDbGFzc05hbWVzID0gWydhc2lkZS1tZW51LXNob3cnLCAnYXNpZGUtbWVudS1zbS1zaG93JywgJ2FzaWRlLW1lbnUtbWQtc2hvdycsICdhc2lkZS1tZW51LWxnLXNob3cnLCAnYXNpZGUtbWVudS14bC1zaG93J107XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENsYXNzIERlZmluaXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICB2YXIgQXNpZGVNZW51ID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gQXNpZGVNZW51KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IEFzaWRlTWVudS5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFByaXZhdGVcbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5BU0lERV9NRU5VX1RPR0dMRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUgOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3RvZ2dsZScpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzZXModG9nZ2xlLCBTaG93Q2xhc3NOYW1lcyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5BU0lERV9NRU5VX1RPR0dMRVIpO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQXNpZGVNZW51KHRoaXMpO1xuICAgICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhBc2lkZU1lbnUsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBBc2lkZU1lbnU7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uZShFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXNpZGVNZW51ID0gJChTZWxlY3Rvci5BU0lERV9NRU5VKTtcblxuICAgICAgQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbChhc2lkZU1lbnUpO1xuICAgIH0pO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFzaWRlTWVudTtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBc2lkZU1lbnU7XG4gIH0oJCk7XG5cbiAgdmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xuICB2YXIgQXJyYXlQcm90b3R5cGUkMSA9IEFycmF5LnByb3RvdHlwZTtcblxuICAvLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbiAgaWYgKEFycmF5UHJvdG90eXBlJDFbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShBcnJheVByb3RvdHlwZSQxLCBVTlNDT1BBQkxFUywgb2JqZWN0Q3JlYXRlKG51bGwpKTtcbiAgfVxuXG4gIC8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbiAgdmFyIGFkZFRvVW5zY29wYWJsZXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgQXJyYXlQcm90b3R5cGUkMVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG4gIH07XG5cbiAgdmFyICRmaW5kID0gYXJyYXlJdGVyYXRpb24uZmluZDtcblxuXG4gIHZhciBGSU5EID0gJ2ZpbmQnO1xuICB2YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4gIC8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4gIGlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gIF9leHBvcnQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbiAgYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcblxuICAvLyBAQG1hdGNoIGxvZ2ljXG4gIGZpeFJlZ2V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUyk7XG5cbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIEEgPSBbXTtcbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgICAgbisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSk7XG5cbiAgLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgdmFyIHdoaXRlc3BhY2VzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuXG4gIHZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG4gIHZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG4gIHZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbiAgdmFyIGNyZWF0ZU1ldGhvZCQzID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgc3RyaW5nVHJpbSA9IHtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gICAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCQzKDEpLFxuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgICBlbmQ6IGNyZWF0ZU1ldGhvZCQzKDIpLFxuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICAgIHRyaW06IGNyZWF0ZU1ldGhvZCQzKDMpXG4gIH07XG5cbiAgdmFyIG5vbiA9ICdcXHUyMDBCXFx1MDA4NVxcdTE4MEUnO1xuXG4gIC8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4gIC8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbiAgdmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyICR0cmltID0gc3RyaW5nVHJpbS50cmltO1xuXG5cbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICBfZXhwb3J0KHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjE2KTogZ2V0LWNzcy1jdXN0b20tcHJvcGVydGllcy5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgY3VzdG9tIHByb3BlcnR5IG5hbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuICB2YXIgZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcyA9IGZ1bmN0aW9uIGdldENzc0N1c3RvbVByb3BlcnRpZXMoKSB7XG4gICAgdmFyIGNzc0N1c3RvbVByb3BlcnRpZXMgPSB7fTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgdmFyIGNzc1RleHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSBzaGVldHMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcblxuICAgICAgZm9yICh2YXIgaiA9IHJ1bGVzLmxlbmd0aCAtIDE7IGogPiAtMTsgai0tKSB7XG4gICAgICAgIGlmIChydWxlc1tqXS5zZWxlY3RvclRleHQgPT09ICcuaWUtY3VzdG9tLXByb3BlcnRpZXMnKSB7XG4gICAgICAgICAgY3NzVGV4dCA9IHJ1bGVzW2pdLmNzc1RleHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNzc1RleHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGV4dCA9IGNzc1RleHQuc3Vic3RyaW5nKGNzc1RleHQubGFzdEluZGV4T2YoJ3snKSArIDEsIGNzc1RleHQubGFzdEluZGV4T2YoJ30nKSk7XG4gICAgY3NzVGV4dC5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBwcm9wZXJ0eS5zcGxpdCgnOiAnKVswXTtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHkuc3BsaXQoJzogJylbMV07XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICBjc3NDdXN0b21Qcm9wZXJ0aWVzW1wiLS1cIiArIG5hbWUudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjc3NDdXN0b21Qcm9wZXJ0aWVzO1xuICB9O1xuXG4gIHZhciBtaW5JRVZlcnNpb24gPSAxMDtcblxuICB2YXIgaXNJRTF4ID0gZnVuY3Rpb24gaXNJRTF4KCkge1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LmRvY3VtZW50TW9kZSkgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IG1pbklFVmVyc2lvbjtcbiAgfTtcblxuICB2YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14tLS4qL2kpO1xuICB9O1xuXG4gIHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHByb3BlcnR5LCBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlO1xuXG4gICAgaWYgKGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpICYmIGlzSUUxeCgpKSB7XG4gICAgICB2YXIgY3NzQ3VzdG9tUHJvcGVydGllcyA9IGdldENzc0N1c3RvbVByb3BlcnRpZXMoKTtcbiAgICAgIHN0eWxlID0gY3NzQ3VzdG9tUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkucmVwbGFjZSgvXlxccy8sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuMTYpOiBzaWRlYmFyLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgdmFyIFNpZGViYXIgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnc2lkZWJhcic7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjE2JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLnNpZGViYXInO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIHRyYW5zaXRpb246IDQwMFxuICAgIH07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgICBCUkFORF9NSU5JTUlaRUQ6ICdicmFuZC1taW5pbWl6ZWQnLFxuICAgICAgTkFWX0RST1BET1dOX1RPR0dMRTogJ25hdi1kcm9wZG93bi10b2dnbGUnLFxuICAgICAgTkFWX0xJTktfUVVFUklFRDogJ25hdi1saW5rLXF1ZXJpZWQnLFxuICAgICAgT1BFTjogJ29wZW4nLFxuICAgICAgU0lERUJBUl9GSVhFRDogJ3NpZGViYXItZml4ZWQnLFxuICAgICAgU0lERUJBUl9NSU5JTUlaRUQ6ICdzaWRlYmFyLW1pbmltaXplZCcsXG4gICAgICBTSURFQkFSX09GRl9DQU5WQVM6ICdzaWRlYmFyLW9mZi1jYW52YXMnXG4gICAgfTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJyxcbiAgICAgIERFU1RST1k6ICdkZXN0cm95JyxcbiAgICAgIElOSVQ6ICdpbml0JyxcbiAgICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgICAgVE9HR0xFOiAndG9nZ2xlJyxcbiAgICAgIFVQREFURTogJ3VwZGF0ZSdcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEJPRFk6ICdib2R5JyxcbiAgICAgIEJSQU5EX01JTklNSVpFUjogJy5icmFuZC1taW5pbWl6ZXInLFxuICAgICAgTkFWX0RST1BET1dOX1RPR0dMRTogJy5uYXYtZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9JVEVNUzogJy5uYXYtZHJvcGRvd24taXRlbXMnLFxuICAgICAgTkFWX0lURU06ICcubmF2LWl0ZW0nLFxuICAgICAgTkFWX0xJTks6ICcubmF2LWxpbmsnLFxuICAgICAgTkFWX0xJTktfUVVFUklFRDogJy5uYXYtbGluay1xdWVyaWVkJyxcbiAgICAgIE5BVklHQVRJT05fQ09OVEFJTkVSOiAnLnNpZGViYXItbmF2JyxcbiAgICAgIE5BVklHQVRJT046ICcuc2lkZWJhci1uYXYgPiAubmF2JyxcbiAgICAgIFNJREVCQVI6ICcuc2lkZWJhcicsXG4gICAgICBTSURFQkFSX01JTklNSVpFUjogJy5zaWRlYmFyLW1pbmltaXplcicsXG4gICAgICBTSURFQkFSX1RPR0dMRVI6ICcuc2lkZWJhci10b2dnbGVyJyxcbiAgICAgIFNJREVCQVJfU0NST0xMOiAnLnNpZGViYXItc2Nyb2xsJ1xuICAgIH07XG4gICAgdmFyIFNob3dDbGFzc05hbWVzID0gWydzaWRlYmFyLXNob3cnLCAnc2lkZWJhci1zbS1zaG93JywgJ3NpZGViYXItbWQtc2hvdycsICdzaWRlYmFyLWxnLXNob3cnLCAnc2lkZWJhci14bC1zaG93J107XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENsYXNzIERlZmluaXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICB2YXIgU2lkZWJhciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZ1bmN0aW9uIFNpZGViYXIoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5tb2JpbGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcyA9IG51bGw7XG4gICAgICAgIHRoaXMucGVyZmVjdFNjcm9sbGJhcihFdmVudC5JTklUKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVMaW5rKCk7XG4gICAgICAgIHRoaXMuX2JyZWFrcG9pbnRUZXN0ID0gdGhpcy5fYnJlYWtwb2ludFRlc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciA9IHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fYWRkTWVkaWFRdWVyeSgpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IFNpZGViYXIucHJvdG90eXBlO1xuXG4gICAgICAvLyBQdWJsaWNcbiAgICAgIF9wcm90by5wZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gcGVyZmVjdFNjcm9sbGJhcihldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgUGVyZmVjdFNjcm9sbGJhciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LklOSVQgJiYgIWNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICAgICAgICB0aGlzLnBzID0gdGhpcy5tYWtlU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5ERVNUUk9ZKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LlRPR0dMRSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICAgIHRoaXMucHMgPSB0aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LlVQREFURSAmJiAhY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgIC8vIFRvRG86IEFkZCBzbW9vdGggdHJhbnNpdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5wcyA9IF90aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIH0sIERlZmF1bHQudHJhbnNpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubWFrZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1ha2VTY3JvbGxiYXIoKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBTZWxlY3Rvci5TSURFQkFSX1NDUk9MTDtcblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpID09PSBudWxsKSB7XG4gICAgICAgICAgY29udGFpbmVyID0gU2VsZWN0b3IuTkFWSUdBVElPTl9DT05UQUlORVI7XG5cbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lciksIHtcbiAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IHRydWVcbiAgICAgICAgfSk7IC8vIFRvRG86IGZpbmQgcmVhbCBmaXggZm9yIHBzIHJ0bFxuXG4gICAgICAgIHBzLmlzUnRsID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBwcztcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5kZXN0cm95U2Nyb2xsYmFyID0gZnVuY3Rpb24gZGVzdHJveVNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHMpIHtcbiAgICAgICAgICB0aGlzLnBzLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLnBzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldEFjdGl2ZUxpbmsgPSBmdW5jdGlvbiBzZXRBY3RpdmVMaW5rKCkge1xuICAgICAgICAkKFNlbGVjdG9yLk5BVklHQVRJT04pLmZpbmQoU2VsZWN0b3IuTkFWX0xJTkspLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgbGluayA9IHZhbHVlO1xuICAgICAgICAgIHZhciBjVXJsO1xuXG4gICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5OQVZfTElOS19RVUVSSUVEKSkge1xuICAgICAgICAgICAgY1VybCA9IFN0cmluZyh3aW5kb3cubG9jYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjVXJsID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbikuc3BsaXQoJz8nKVswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY1VybC5zdWJzdHIoY1VybC5sZW5ndGggLSAxKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICBjVXJsID0gY1VybC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCQoJChsaW5rKSlbMF0uaHJlZiA9PT0gY1VybCkge1xuICAgICAgICAgICAgJChsaW5rKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKS5wYXJlbnRzKFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9JVEVNUykuYWRkKGxpbmspLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgbGluayA9IHZhbHVlO1xuICAgICAgICAgICAgICAkKGxpbmspLnBhcmVudCgpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9hZGRNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24gX2FkZE1lZGlhUXVlcnkoKSB7XG4gICAgICAgIHZhciBzbSA9IGdldFN0eWxlKCctLWJyZWFrcG9pbnQtc20nKTtcblxuICAgICAgICBpZiAoIXNtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNtVmFsID0gcGFyc2VJbnQoc20sIDEwKSAtIDE7XG4gICAgICAgIHZhciBtZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogXCIgKyBzbVZhbCArIFwicHgpXCIpO1xuXG4gICAgICAgIHRoaXMuX2JyZWFrcG9pbnRUZXN0KG1lZGlhUXVlcnlMaXN0KTtcblxuICAgICAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLl9icmVha3BvaW50VGVzdCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2JyZWFrcG9pbnRUZXN0ID0gZnVuY3Rpb24gX2JyZWFrcG9pbnRUZXN0KGUpIHtcbiAgICAgICAgdGhpcy5tb2JpbGUgPSBCb29sZWFuKGUubWF0Y2hlcyk7XG5cbiAgICAgICAgdGhpcy5fdG9nZ2xlQ2xpY2tPdXQoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fY2xpY2tPdXRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9jbGlja091dExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgLy8gb3IgdXNlOiBldmVudC50YXJnZXQuY2xvc2VzdChTZWxlY3Rvci5TSURFQkFSKSA9PT0gbnVsbFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGlja091dCgpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRDbGlja091dCA9IGZ1bmN0aW9uIF9hZGRDbGlja091dCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFdmVudC5DTElDSywgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3JlbW92ZUNsaWNrT3V0ID0gZnVuY3Rpb24gX3JlbW92ZUNsaWNrT3V0KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja091dExpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fdG9nZ2xlQ2xpY2tPdXQgPSBmdW5jdGlvbiBfdG9nZ2xlQ2xpY2tPdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vYmlsZSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLW1lbnUtc2hvdycpO1xuXG4gICAgICAgICAgdGhpcy5fYWRkQ2xpY2tPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGlja091dCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuQlJBTkRfTUlOSU1JWkVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkJSQU5EX01JTklNSVpFRCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuTkFWX0RST1BET1dOX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgZHJvcGRvd24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgJChkcm9wZG93bikucGFyZW50KCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuXG4gICAgICAgICAgX3RoaXMyLnBlcmZlY3RTY3JvbGxiYXIoRXZlbnQuVVBEQVRFKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5TSURFQkFSX01JTklNSVpFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCk7XG5cbiAgICAgICAgICBfdGhpczIucGVyZmVjdFNjcm9sbGJhcihFdmVudC5UT0dHTEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLlNJREVCQVJfVE9HR0xFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndG9nZ2xlJyk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0b2dnbGUsIFNob3dDbGFzc05hbWVzKTtcblxuICAgICAgICAgIF90aGlzMi5fdG9nZ2xlQ2xpY2tPdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWSUdBVElPTiArIFwiID4gXCIgKyBTZWxlY3Rvci5OQVZfSVRFTSArIFwiIFwiICsgU2VsZWN0b3IuTkFWX0xJTksgKyBcIjpub3QoXCIgKyBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFICsgXCIpXCIpLm9uKEV2ZW50LkNMSUNLLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9yZW1vdmVDbGlja091dCgpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXNob3cnKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3JlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX3JlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLkJSQU5EX01JTklNSVpFUik7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5DTElDSywgU2VsZWN0b3IuTkFWX0RST1BET1dOX1RPR0dMRSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9NSU5JTUlaRVIpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLlNJREVCQVJfVE9HR0xFUik7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWSUdBVElPTiArIFwiID4gXCIgKyBTZWxlY3Rvci5OQVZfSVRFTSArIFwiIFwiICsgU2VsZWN0b3IuTkFWX0xJTksgKyBcIjpub3QoXCIgKyBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFICsgXCIpXCIpLm9mZihFdmVudC5DTElDSyk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgU2lkZWJhcih0aGlzKTtcbiAgICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoU2lkZWJhciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFNpZGViYXI7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uZShFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2lkZWJhciA9ICQoU2VsZWN0b3IuU0lERUJBUik7XG5cbiAgICAgIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKHNpZGViYXIpO1xuICAgIH0pO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTaWRlYmFyO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBTaWRlYmFyO1xuICB9KCQpO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJIFV0aWxpdGllcyAodjIuMS4xNik6IGhleC10by1yZ2IuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciBoZXhUb1JnYiA9IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9IGNvbG9yLm1hdGNoKC9eIyg/OlswLTlhLWZdezN9KXsxLDJ9JC9pKTtcblxuICAgIGlmICghaGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMiksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgMyksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCI7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjE2KTogaGV4LXRvLXJnYmEuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciBoZXhUb1JnYmEgPSBmdW5jdGlvbiBoZXhUb1JnYmEoY29sb3IsIG9wYWNpdHkpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdm9pZCAwKSB7XG4gICAgICBvcGFjaXR5ID0gMTAwO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hleCBjb2xvciBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBoZXggPSBjb2xvci5tYXRjaCgvXiMoPzpbMC05YS1mXXszfSl7MSwyfSQvaSk7XG5cbiAgICBpZiAoIWhleCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbG9yICsgXCIgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yXCIpO1xuICAgIH1cblxuICAgIHZhciByO1xuICAgIHZhciBnO1xuICAgIHZhciBiO1xuXG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gNykge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg1LCA3KSwgMTYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDIpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDIsIDMpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIG9wYWNpdHkgLyAxMDAgKyBcIilcIjtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyQyID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuICB2YXIgdGVzdCA9IHt9O1xuXG4gIHRlc3RbVE9fU1RSSU5HX1RBRyQyXSA9ICd6JztcblxuICAvLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbiAgdmFyIG9iamVjdFRvU3RyaW5nID0gU3RyaW5nKHRlc3QpICE9PSAnW29iamVjdCB6XScgPyBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0gOiB0ZXN0LnRvU3RyaW5nO1xuXG4gIHZhciBPYmplY3RQcm90b3R5cGUkMSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbiAgLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG4gIGlmIChvYmplY3RUb1N0cmluZyAhPT0gT2JqZWN0UHJvdG90eXBlJDEudG9TdHJpbmcpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90b3R5cGUkMSwgJ3RvU3RyaW5nJywgb2JqZWN0VG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICB9XG5cbiAgdmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG4gIHZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcblxuICB2YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbiAgLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbiAgdmFyIElOQ09SUkVDVF9OQU1FID0gbmF0aXZlVG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkc7XG5cbiAgLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gIGlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIHAgPSBTdHJpbmcoUi5zb3VyY2UpO1xuICAgICAgdmFyIHJmID0gUi5mbGFncztcbiAgICAgIHZhciBmID0gU3RyaW5nKHJmID09PSB1bmRlZmluZWQgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCAmJiAhKCdmbGFncycgaW4gUmVnRXhwUHJvdG90eXBlKSA/IHJlZ2V4cEZsYWdzLmNhbGwoUikgOiByZik7XG4gICAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gICAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS4xNik6IHJnYi10by1oZXguanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciByZ2JUb0hleCA9IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICByZXR1cm4gJyMwMDAwMDAwMCc7XG4gICAgfVxuXG4gICAgdmFyIHJnYiA9IGNvbG9yLm1hdGNoKC9ecmdiYT9bXFxzK10/XFwoW1xccytdPyhcXGQrKVtcXHMrXT8sW1xccytdPyhcXGQrKVtcXHMrXT8sW1xccytdPyhcXGQrKVtcXHMrXT8vaSk7XG5cbiAgICBpZiAoIXJnYikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbG9yICsgXCIgaXMgbm90IGEgdmFsaWQgcmdiIGNvbG9yXCIpO1xuICAgIH1cblxuICAgIHZhciByID0gXCIwXCIgKyBwYXJzZUludChyZ2JbMV0sIDEwKS50b1N0cmluZygxNik7XG4gICAgdmFyIGcgPSBcIjBcIiArIHBhcnNlSW50KHJnYlsyXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYiA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzNdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiBcIiNcIiArIHIuc2xpY2UoLTIpICsgZy5zbGljZSgtMikgKyBiLnNsaWNlKC0yKTtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS4xNik6IGluZGV4LmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgKGZ1bmN0aW9uICgkKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29yZVVJXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIENvcmVVSVxcJ3MgSmF2YVNjcmlwdC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdmVyc2lvbiA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcgJylbMF0uc3BsaXQoJy4nKTtcbiAgICB2YXIgbWluTWFqb3IgPSAxO1xuICAgIHZhciBsdE1ham9yID0gMjtcbiAgICB2YXIgbWluTWlub3IgPSA5O1xuICAgIHZhciBtaW5QYXRjaCA9IDE7XG4gICAgdmFyIG1heE1ham9yID0gNDtcblxuICAgIGlmICh2ZXJzaW9uWzBdIDwgbHRNYWpvciAmJiB2ZXJzaW9uWzFdIDwgbWluTWlub3IgfHwgdmVyc2lvblswXSA9PT0gbWluTWFqb3IgJiYgdmVyc2lvblsxXSA9PT0gbWluTWlub3IgJiYgdmVyc2lvblsyXSA8IG1pblBhdGNoIHx8IHZlcnNpb25bMF0gPj0gbWF4TWFqb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29yZVVJXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKTtcbiAgICB9XG4gIH0pKCQpO1xuICB3aW5kb3cuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiAgd2luZG93LmhleFRvUmdiID0gaGV4VG9SZ2I7XG4gIHdpbmRvdy5oZXhUb1JnYmEgPSBoZXhUb1JnYmE7XG4gIHdpbmRvdy5yZ2JUb0hleCA9IHJnYlRvSGV4O1xuXG4gIGV4cG9ydHMuQWpheExvYWQgPSBBamF4TG9hZDtcbiAgZXhwb3J0cy5Bc2lkZU1lbnUgPSBBc2lkZU1lbnU7XG4gIGV4cG9ydHMuU2lkZWJhciA9IFNpZGViYXI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmV1aS5qcy5tYXBcbiIsIi8qKlxuICAqIGJvb3RzdHJhcC10YWJsZSAtIEFuIGV4dGVuZGVkIHRhYmxlIHRvIGludGVncmF0aW9uIHdpdGggc29tZSBvZiB0aGUgbW9zdCB3aWRlbHkgdXNlZCBDU1MgZnJhbWV3b3Jrcy4gKFN1cHBvcnRzIEJvb3RzdHJhcCwgU2VtYW50aWMgVUksIEJ1bG1hLCBNYXRlcmlhbCBEZXNpZ24sIEZvdW5kYXRpb24pXG4gICpcbiAgKiBAdmVyc2lvbiB2MS4xNS41XG4gICogQGhvbWVwYWdlIGh0dHBzOi8vYm9vdHN0cmFwLXRhYmxlLmNvbVxuICAqIEBhdXRob3Igd2VuemhpeGluIDx3ZW56aGl4aW4yMDEwQGdtYWlsLmNvbT4gKGh0dHA6Ly93ZW56aGl4aW4ubmV0LmNuLylcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cblxuIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxlKToodD10fHxzZWxmKS5Cb290c3RyYXBUYWJsZT1lKHQualF1ZXJ5KX0odGhpcywoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dD10JiZ0Lmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT90LmRlZmF1bHQ6dDt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e307ZnVuY3Rpb24gaSh0LGUpe3JldHVybiB0KGU9e2V4cG9ydHM6e319LGUuZXhwb3J0cyksZS5leHBvcnRzfXZhciBuLG8scixhPVwib2JqZWN0XCIscz1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5NYXRoPT1NYXRoJiZ0fSxsPXModHlwZW9mIGdsb2JhbFRoaXM9PWEmJmdsb2JhbFRoaXMpfHxzKHR5cGVvZiB3aW5kb3c9PWEmJndpbmRvdyl8fHModHlwZW9mIHNlbGY9PWEmJnNlbGYpfHxzKHR5cGVvZiBlPT1hJiZlKXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKHQpe3JldHVybiEwfX0saD0hYygoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSkpLHU9e30ucHJvcGVydHlJc0VudW1lcmFibGUsZD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGY9e2Y6ZCYmIXUuY2FsbCh7MToyfSwxKT9mdW5jdGlvbih0KXt2YXIgZT1kKHRoaXMsdCk7cmV0dXJuISFlJiZlLmVudW1lcmFibGV9OnV9LHA9ZnVuY3Rpb24odCxlKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6ZX19LGc9e30udG9TdHJpbmcsdj1mdW5jdGlvbih0KXtyZXR1cm4gZy5jYWxsKHQpLnNsaWNlKDgsLTEpfSxiPVwiXCIuc3BsaXQseT1jKChmdW5jdGlvbigpe3JldHVybiFPYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApfSkpP2Z1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXYodCk/Yi5jYWxsKHQsXCJcIik6T2JqZWN0KHQpfTpPYmplY3QsbT1mdW5jdGlvbih0KXtpZihudWxsPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiK3QpO3JldHVybiB0fSx3PWZ1bmN0aW9uKHQpe3JldHVybiB5KG0odCkpfSxTPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9LHg9ZnVuY3Rpb24odCxlKXtpZighUyh0KSlyZXR1cm4gdDt2YXIgaSxuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKGk9dC50b1N0cmluZykmJiFTKG49aS5jYWxsKHQpKSlyZXR1cm4gbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZihpPXQudmFsdWVPZikmJiFTKG49aS5jYWxsKHQpKSlyZXR1cm4gbjtpZighZSYmXCJmdW5jdGlvblwiPT10eXBlb2YoaT10LnRvU3RyaW5nKSYmIVMobj1pLmNhbGwodCkpKXJldHVybiBuO3Rocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKX0saz17fS5oYXNPd25Qcm9wZXJ0eSxPPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGsuY2FsbCh0LGUpfSxUPWwuZG9jdW1lbnQsQz1TKFQpJiZTKFQuY3JlYXRlRWxlbWVudCksUD1mdW5jdGlvbih0KXtyZXR1cm4gQz9ULmNyZWF0ZUVsZW1lbnQodCk6e319LCQ9IWgmJiFjKChmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoUChcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pKSxJPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsQT17ZjpoP0k6ZnVuY3Rpb24odCxlKXtpZih0PXcodCksZT14KGUsITApLCQpdHJ5e3JldHVybiBJKHQsZSl9Y2F0Y2godCl7fWlmKE8odCxlKSlyZXR1cm4gcCghZi5mLmNhbGwodCxlKSx0W2VdKX19LEU9ZnVuY3Rpb24odCl7aWYoIVModCkpdGhyb3cgVHlwZUVycm9yKFN0cmluZyh0KStcIiBpcyBub3QgYW4gb2JqZWN0XCIpO3JldHVybiB0fSxSPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxOPXtmOmg/UjpmdW5jdGlvbih0LGUsaSl7aWYoRSh0KSxlPXgoZSwhMCksRShpKSwkKXRyeXtyZXR1cm4gUih0LGUsaSl9Y2F0Y2godCl7fWlmKFwiZ2V0XCJpbiBpfHxcInNldFwiaW4gaSl0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZFwiKTtyZXR1cm5cInZhbHVlXCJpbiBpJiYodFtlXT1pLnZhbHVlKSx0fX0saj1oP2Z1bmN0aW9uKHQsZSxpKXtyZXR1cm4gTi5mKHQsZSxwKDEsaSkpfTpmdW5jdGlvbih0LGUsaSl7cmV0dXJuIHRbZV09aSx0fSxGPWZ1bmN0aW9uKHQsZSl7dHJ5e2oobCx0LGUpfWNhdGNoKGkpe2xbdF09ZX1yZXR1cm4gZX0sXz1pKChmdW5jdGlvbih0KXt2YXIgZT1sW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdfHxGKFwiX19jb3JlLWpzX3NoYXJlZF9fXCIse30pOyh0LmV4cG9ydHM9ZnVuY3Rpb24odCxpKXtyZXR1cm4gZVt0XXx8KGVbdF09dm9pZCAwIT09aT9pOnt9KX0pKFwidmVyc2lvbnNcIixbXSkucHVzaCh7dmVyc2lvbjpcIjMuMS4zXCIsbW9kZTpcImdsb2JhbFwiLGNvcHlyaWdodDpcIsKpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSlcIn0pfSkpLFY9XyhcIm5hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmdcIixGdW5jdGlvbi50b1N0cmluZyksQj1sLldlYWtNYXAsTD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBCJiYvbmF0aXZlIGNvZGUvLnRlc3QoVi5jYWxsKEIpKSxEPTAsSD1NYXRoLnJhbmRvbSgpLE09ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIrU3RyaW5nKHZvaWQgMD09PXQ/XCJcIjp0KStcIilfXCIrKCsrRCtIKS50b1N0cmluZygzNil9LFU9XyhcImtleXNcIikscT1mdW5jdGlvbih0KXtyZXR1cm4gVVt0XXx8KFVbdF09TSh0KSl9LHo9e30sVz1sLldlYWtNYXA7aWYoTCl7dmFyIEc9bmV3IFcsSz1HLmdldCxKPUcuaGFzLFk9Ry5zZXQ7bj1mdW5jdGlvbih0LGUpe3JldHVybiBZLmNhbGwoRyx0LGUpLGV9LG89ZnVuY3Rpb24odCl7cmV0dXJuIEsuY2FsbChHLHQpfHx7fX0scj1mdW5jdGlvbih0KXtyZXR1cm4gSi5jYWxsKEcsdCl9fWVsc2V7dmFyIFg9cShcInN0YXRlXCIpO3pbWF09ITAsbj1mdW5jdGlvbih0LGUpe3JldHVybiBqKHQsWCxlKSxlfSxvPWZ1bmN0aW9uKHQpe3JldHVybiBPKHQsWCk/dFtYXTp7fX0scj1mdW5jdGlvbih0KXtyZXR1cm4gTyh0LFgpfX12YXIgUT17c2V0Om4sZ2V0Om8saGFzOnIsZW5mb3JjZTpmdW5jdGlvbih0KXtyZXR1cm4gcih0KT9vKHQpOm4odCx7fSl9LGdldHRlckZvcjpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIGk7aWYoIVMoZSl8fChpPW8oZSkpLnR5cGUhPT10KXRocm93IFR5cGVFcnJvcihcIkluY29tcGF0aWJsZSByZWNlaXZlciwgXCIrdCtcIiByZXF1aXJlZFwiKTtyZXR1cm4gaX19fSxaPWkoKGZ1bmN0aW9uKHQpe3ZhciBlPVEuZ2V0LGk9US5lbmZvcmNlLG49U3RyaW5nKFYpLnNwbGl0KFwidG9TdHJpbmdcIik7XyhcImluc3BlY3RTb3VyY2VcIiwoZnVuY3Rpb24odCl7cmV0dXJuIFYuY2FsbCh0KX0pKSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxvLHIpe3ZhciBhPSEhciYmISFyLnVuc2FmZSxzPSEhciYmISFyLmVudW1lcmFibGUsYz0hIXImJiEhci5ub1RhcmdldEdldDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiYoXCJzdHJpbmdcIiE9dHlwZW9mIGV8fE8obyxcIm5hbWVcIil8fGoobyxcIm5hbWVcIixlKSxpKG8pLnNvdXJjZT1uLmpvaW4oXCJzdHJpbmdcIj09dHlwZW9mIGU/ZTpcIlwiKSksdCE9PWw/KGE/IWMmJnRbZV0mJihzPSEwKTpkZWxldGUgdFtlXSxzP3RbZV09bzpqKHQsZSxvKSk6cz90W2VdPW86RihlLG8pfSkoRnVuY3Rpb24ucHJvdG90eXBlLFwidG9TdHJpbmdcIiwoZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzJiZlKHRoaXMpLnNvdXJjZXx8Vi5jYWxsKHRoaXMpfSkpfSkpLHR0PWwsZXQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90OnZvaWQgMH0saXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aDwyP2V0KHR0W3RdKXx8ZXQobFt0XSk6dHRbdF0mJnR0W3RdW2VdfHxsW3RdJiZsW3RdW2VdfSxudD1NYXRoLmNlaWwsb3Q9TWF0aC5mbG9vcixydD1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP290Om50KSh0KX0sYXQ9TWF0aC5taW4sc3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9hdChydCh0KSw5MDA3MTk5MjU0NzQwOTkxKTowfSxsdD1NYXRoLm1heCxjdD1NYXRoLm1pbixodD1mdW5jdGlvbih0LGUpe3ZhciBpPXJ0KHQpO3JldHVybiBpPDA/bHQoaStlLDApOmN0KGksZSl9LHV0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLGksbil7dmFyIG8scj13KGUpLGE9c3Qoci5sZW5ndGgpLHM9aHQobixhKTtpZih0JiZpIT1pKXtmb3IoO2E+czspaWYoKG89cltzKytdKSE9bylyZXR1cm4hMH1lbHNlIGZvcig7YT5zO3MrKylpZigodHx8cyBpbiByKSYmcltzXT09PWkpcmV0dXJuIHR8fHN8fDA7cmV0dXJuIXQmJi0xfX0sZHQ9e2luY2x1ZGVzOnV0KCEwKSxpbmRleE9mOnV0KCExKX0sZnQ9ZHQuaW5kZXhPZixwdD1mdW5jdGlvbih0LGUpe3ZhciBpLG49dyh0KSxvPTAscj1bXTtmb3IoaSBpbiBuKSFPKHosaSkmJk8obixpKSYmci5wdXNoKGkpO2Zvcig7ZS5sZW5ndGg+bzspTyhuLGk9ZVtvKytdKSYmKH5mdChyLGkpfHxyLnB1c2goaSkpO3JldHVybiByfSxndD1bXCJjb25zdHJ1Y3RvclwiLFwiaGFzT3duUHJvcGVydHlcIixcImlzUHJvdG90eXBlT2ZcIixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXCJ0b0xvY2FsZVN0cmluZ1wiLFwidG9TdHJpbmdcIixcInZhbHVlT2ZcIl0sdnQ9Z3QuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIiksYnQ9e2Y6T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiBwdCh0LHZ0KX19LHl0PXtmOk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LG10PWl0KFwiUmVmbGVjdFwiLFwib3duS2V5c1wiKXx8ZnVuY3Rpb24odCl7dmFyIGU9YnQuZihFKHQpKSxpPXl0LmY7cmV0dXJuIGk/ZS5jb25jYXQoaSh0KSk6ZX0sd3Q9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9bXQoZSksbj1OLmYsbz1BLmYscj0wO3I8aS5sZW5ndGg7cisrKXt2YXIgYT1pW3JdO08odCxhKXx8bih0LGEsbyhlLGEpKX19LFN0PS8jfFxcLnByb3RvdHlwZVxcLi8seHQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1PdFtrdCh0KV07cmV0dXJuIGk9PUN0fHxpIT1UdCYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/YyhlKTohIWUpfSxrdD14dC5ub3JtYWxpemU9ZnVuY3Rpb24odCl7cmV0dXJuIFN0cmluZyh0KS5yZXBsYWNlKFN0LFwiLlwiKS50b0xvd2VyQ2FzZSgpfSxPdD14dC5kYXRhPXt9LFR0PXh0Lk5BVElWRT1cIk5cIixDdD14dC5QT0xZRklMTD1cIlBcIixQdD14dCwkdD1BLmYsSXQ9ZnVuY3Rpb24odCxlKXt2YXIgaSxuLG8scixhLHM9dC50YXJnZXQsYz10Lmdsb2JhbCxoPXQuc3RhdDtpZihpPWM/bDpoP2xbc118fEYocyx7fSk6KGxbc118fHt9KS5wcm90b3R5cGUpZm9yKG4gaW4gZSl7aWYocj1lW25dLG89dC5ub1RhcmdldEdldD8oYT0kdChpLG4pKSYmYS52YWx1ZTppW25dLCFQdChjP246cysoaD9cIi5cIjpcIiNcIikrbix0LmZvcmNlZCkmJnZvaWQgMCE9PW8pe2lmKHR5cGVvZiByPT10eXBlb2Ygbyljb250aW51ZTt3dChyLG8pfSh0LnNoYW18fG8mJm8uc2hhbSkmJmoocixcInNoYW1cIiwhMCksWihpLG4scix0KX19LEF0PSEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyYmIWMoKGZ1bmN0aW9uKCl7cmV0dXJuIVN0cmluZyhTeW1ib2woKSl9KSksRXQ9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT12KHQpfSxSdD1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KG0odCkpfSxOdD1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHB0KHQsZ3QpfSxqdD1oP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsZSl7RSh0KTtmb3IodmFyIGksbj1OdChlKSxvPW4ubGVuZ3RoLHI9MDtvPnI7KU4uZih0LGk9bltyKytdLGVbaV0pO3JldHVybiB0fSxGdD1pdChcImRvY3VtZW50XCIsXCJkb2N1bWVudEVsZW1lbnRcIiksX3Q9cShcIklFX1BST1RPXCIpLFZ0PWZ1bmN0aW9uKCl7fSxCdD1mdW5jdGlvbigpe3ZhciB0LGU9UChcImlmcmFtZVwiKSxpPWd0Lmxlbmd0aDtmb3IoZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLEZ0LmFwcGVuZENoaWxkKGUpLGUuc3JjPVN0cmluZyhcImphdmFzY3JpcHQ6XCIpLCh0PWUuY29udGVudFdpbmRvdy5kb2N1bWVudCkub3BlbigpLHQud3JpdGUoXCI8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PFxcL3NjcmlwdD5cIiksdC5jbG9zZSgpLEJ0PXQuRjtpLS07KWRlbGV0ZSBCdC5wcm90b3R5cGVbZ3RbaV1dO3JldHVybiBCdCgpfSxMdD1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LGUpe3ZhciBpO3JldHVybiBudWxsIT09dD8oVnQucHJvdG90eXBlPUUodCksaT1uZXcgVnQsVnQucHJvdG90eXBlPW51bGwsaVtfdF09dCk6aT1CdCgpLHZvaWQgMD09PWU/aTpqdChpLGUpfTt6W190XT0hMDt2YXIgRHQ9YnQuZixIdD17fS50b1N0cmluZyxNdD1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sVXQ9e2Y6ZnVuY3Rpb24odCl7cmV0dXJuIE10JiZcIltvYmplY3QgV2luZG93XVwiPT1IdC5jYWxsKHQpP2Z1bmN0aW9uKHQpe3RyeXtyZXR1cm4gRHQodCl9Y2F0Y2godCl7cmV0dXJuIE10LnNsaWNlKCl9fSh0KTpEdCh3KHQpKX19LHF0PWwuU3ltYm9sLHp0PV8oXCJ3a3NcIiksV3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHp0W3RdfHwoenRbdF09QXQmJnF0W3RdfHwoQXQ/cXQ6TSkoXCJTeW1ib2wuXCIrdCkpfSxHdD17ZjpXdH0sS3Q9Ti5mLEp0PWZ1bmN0aW9uKHQpe3ZhciBlPXR0LlN5bWJvbHx8KHR0LlN5bWJvbD17fSk7TyhlLHQpfHxLdChlLHQse3ZhbHVlOkd0LmYodCl9KX0sWXQ9Ti5mLFh0PVd0KFwidG9TdHJpbmdUYWdcIiksUXQ9ZnVuY3Rpb24odCxlLGkpe3QmJiFPKHQ9aT90OnQucHJvdG90eXBlLFh0KSYmWXQodCxYdCx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOmV9KX0sWnQ9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKHQpK1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO3JldHVybiB0fSx0ZT1mdW5jdGlvbih0LGUsaSl7aWYoWnQodCksdm9pZCAwPT09ZSlyZXR1cm4gdDtzd2l0Y2goaSl7Y2FzZSAwOnJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmNhbGwoZSl9O2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oaSl7cmV0dXJuIHQuY2FsbChlLGkpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGksbil7cmV0dXJuIHQuY2FsbChlLGksbil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24oaSxuLG8pe3JldHVybiB0LmNhbGwoZSxpLG4sbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KGUsYXJndW1lbnRzKX19LGVlPVd0KFwic3BlY2llc1wiKSxpZT1mdW5jdGlvbih0LGUpe3ZhciBpO3JldHVybiBFdCh0KSYmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGk9dC5jb25zdHJ1Y3Rvcil8fGkhPT1BcnJheSYmIUV0KGkucHJvdG90eXBlKT9TKGkpJiZudWxsPT09KGk9aVtlZV0pJiYoaT12b2lkIDApOmk9dm9pZCAwKSxuZXcodm9pZCAwPT09aT9BcnJheTppKSgwPT09ZT8wOmUpfSxuZT1bXS5wdXNoLG9lPWZ1bmN0aW9uKHQpe3ZhciBlPTE9PXQsaT0yPT10LG49Mz09dCxvPTQ9PXQscj02PT10LGE9NT09dHx8cjtyZXR1cm4gZnVuY3Rpb24ocyxsLGMsaCl7Zm9yKHZhciB1LGQsZj1SdChzKSxwPXkoZiksZz10ZShsLGMsMyksdj1zdChwLmxlbmd0aCksYj0wLG09aHx8aWUsdz1lP20ocyx2KTppP20ocywwKTp2b2lkIDA7dj5iO2IrKylpZigoYXx8YiBpbiBwKSYmKGQ9Zyh1PXBbYl0sYixmKSx0KSlpZihlKXdbYl09ZDtlbHNlIGlmKGQpc3dpdGNoKHQpe2Nhc2UgMzpyZXR1cm4hMDtjYXNlIDU6cmV0dXJuIHU7Y2FzZSA2OnJldHVybiBiO2Nhc2UgMjpuZS5jYWxsKHcsdSl9ZWxzZSBpZihvKXJldHVybiExO3JldHVybiByPy0xOm58fG8/bzp3fX0scmU9e2ZvckVhY2g6b2UoMCksbWFwOm9lKDEpLGZpbHRlcjpvZSgyKSxzb21lOm9lKDMpLGV2ZXJ5Om9lKDQpLGZpbmQ6b2UoNSksZmluZEluZGV4Om9lKDYpfSxhZT1yZS5mb3JFYWNoLHNlPXEoXCJoaWRkZW5cIiksbGU9V3QoXCJ0b1ByaW1pdGl2ZVwiKSxjZT1RLnNldCxoZT1RLmdldHRlckZvcihcIlN5bWJvbFwiKSx1ZT1PYmplY3QucHJvdG90eXBlLGRlPWwuU3ltYm9sLGZlPWwuSlNPTixwZT1mZSYmZmUuc3RyaW5naWZ5LGdlPUEuZix2ZT1OLmYsYmU9VXQuZix5ZT1mLmYsbWU9XyhcInN5bWJvbHNcIiksd2U9XyhcIm9wLXN5bWJvbHNcIiksU2U9XyhcInN0cmluZy10by1zeW1ib2wtcmVnaXN0cnlcIikseGU9XyhcInN5bWJvbC10by1zdHJpbmctcmVnaXN0cnlcIiksa2U9XyhcIndrc1wiKSxPZT1sLlFPYmplY3QsVGU9IU9lfHwhT2UucHJvdG90eXBlfHwhT2UucHJvdG90eXBlLmZpbmRDaGlsZCxDZT1oJiZjKChmdW5jdGlvbigpe3JldHVybiA3IT1MdCh2ZSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHZlKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSkpP2Z1bmN0aW9uKHQsZSxpKXt2YXIgbj1nZSh1ZSxlKTtuJiZkZWxldGUgdWVbZV0sdmUodCxlLGkpLG4mJnQhPT11ZSYmdmUodWUsZSxuKX06dmUsUGU9ZnVuY3Rpb24odCxlKXt2YXIgaT1tZVt0XT1MdChkZS5wcm90b3R5cGUpO3JldHVybiBjZShpLHt0eXBlOlwiU3ltYm9sXCIsdGFnOnQsZGVzY3JpcHRpb246ZX0pLGh8fChpLmRlc2NyaXB0aW9uPWUpLGl9LCRlPUF0JiZcInN5bWJvbFwiPT10eXBlb2YgZGUuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QodClpbnN0YW5jZW9mIGRlfSxJZT1mdW5jdGlvbih0LGUsaSl7dD09PXVlJiZJZSh3ZSxlLGkpLEUodCk7dmFyIG49eChlLCEwKTtyZXR1cm4gRShpKSxPKG1lLG4pPyhpLmVudW1lcmFibGU/KE8odCxzZSkmJnRbc2VdW25dJiYodFtzZV1bbl09ITEpLGk9THQoaSx7ZW51bWVyYWJsZTpwKDAsITEpfSkpOihPKHQsc2UpfHx2ZSh0LHNlLHAoMSx7fSkpLHRbc2VdW25dPSEwKSxDZSh0LG4saSkpOnZlKHQsbixpKX0sQWU9ZnVuY3Rpb24odCxlKXtFKHQpO3ZhciBpPXcoZSksbj1OdChpKS5jb25jYXQoamUoaSkpO3JldHVybiBhZShuLChmdW5jdGlvbihlKXtoJiYhRWUuY2FsbChpLGUpfHxJZSh0LGUsaVtlXSl9KSksdH0sRWU9ZnVuY3Rpb24odCl7dmFyIGU9eCh0LCEwKSxpPXllLmNhbGwodGhpcyxlKTtyZXR1cm4hKHRoaXM9PT11ZSYmTyhtZSxlKSYmIU8od2UsZSkpJiYoIShpfHwhTyh0aGlzLGUpfHwhTyhtZSxlKXx8Tyh0aGlzLHNlKSYmdGhpc1tzZV1bZV0pfHxpKX0sUmU9ZnVuY3Rpb24odCxlKXt2YXIgaT13KHQpLG49eChlLCEwKTtpZihpIT09dWV8fCFPKG1lLG4pfHxPKHdlLG4pKXt2YXIgbz1nZShpLG4pO3JldHVybiFvfHwhTyhtZSxuKXx8TyhpLHNlKSYmaVtzZV1bbl18fChvLmVudW1lcmFibGU9ITApLG99fSxOZT1mdW5jdGlvbih0KXt2YXIgZT1iZSh3KHQpKSxpPVtdO3JldHVybiBhZShlLChmdW5jdGlvbih0KXtPKG1lLHQpfHxPKHosdCl8fGkucHVzaCh0KX0pKSxpfSxqZT1mdW5jdGlvbih0KXt2YXIgZT10PT09dWUsaT1iZShlP3dlOncodCkpLG49W107cmV0dXJuIGFlKGksKGZ1bmN0aW9uKHQpeyFPKG1lLHQpfHxlJiYhTyh1ZSx0KXx8bi5wdXNoKG1lW3RdKX0pKSxufTtBdHx8KFooKGRlPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIGRlKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTt2YXIgdD1hcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/U3RyaW5nKGFyZ3VtZW50c1swXSk6dm9pZCAwLGU9TSh0KSxpPWZ1bmN0aW9uKHQpe3RoaXM9PT11ZSYmaS5jYWxsKHdlLHQpLE8odGhpcyxzZSkmJk8odGhpc1tzZV0sZSkmJih0aGlzW3NlXVtlXT0hMSksQ2UodGhpcyxlLHAoMSx0KSl9O3JldHVybiBoJiZUZSYmQ2UodWUsZSx7Y29uZmlndXJhYmxlOiEwLHNldDppfSksUGUoZSx0KX0pLnByb3RvdHlwZSxcInRvU3RyaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGhlKHRoaXMpLnRhZ30pKSxmLmY9RWUsTi5mPUllLEEuZj1SZSxidC5mPVV0LmY9TmUseXQuZj1qZSxoJiYodmUoZGUucHJvdG90eXBlLFwiZGVzY3JpcHRpb25cIix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBoZSh0aGlzKS5kZXNjcmlwdGlvbn19KSxaKHVlLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixFZSx7dW5zYWZlOiEwfSkpLEd0LmY9ZnVuY3Rpb24odCl7cmV0dXJuIFBlKFd0KHQpLHQpfSksSXQoe2dsb2JhbDohMCx3cmFwOiEwLGZvcmNlZDohQXQsc2hhbTohQXR9LHtTeW1ib2w6ZGV9KSxhZShOdChrZSksKGZ1bmN0aW9uKHQpe0p0KHQpfSkpLEl0KHt0YXJnZXQ6XCJTeW1ib2xcIixzdGF0OiEwLGZvcmNlZDohQXR9LHtmb3I6ZnVuY3Rpb24odCl7dmFyIGU9U3RyaW5nKHQpO2lmKE8oU2UsZSkpcmV0dXJuIFNlW2VdO3ZhciBpPWRlKGUpO3JldHVybiBTZVtlXT1pLHhlW2ldPWUsaX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKCEkZSh0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2xcIik7aWYoTyh4ZSx0KSlyZXR1cm4geGVbdF19LHVzZVNldHRlcjpmdW5jdGlvbigpe1RlPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtUZT0hMX19KSxJdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6IUF0LHNoYW06IWh9LHtjcmVhdGU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZT9MdCh0KTpBZShMdCh0KSxlKX0sZGVmaW5lUHJvcGVydHk6SWUsZGVmaW5lUHJvcGVydGllczpBZSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6UmV9KSxJdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6IUF0fSx7Z2V0T3duUHJvcGVydHlOYW1lczpOZSxnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6amV9KSxJdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMCxmb3JjZWQ6YygoZnVuY3Rpb24oKXt5dC5mKDEpfSkpfSx7Z2V0T3duUHJvcGVydHlTeW1ib2xzOmZ1bmN0aW9uKHQpe3JldHVybiB5dC5mKFJ0KHQpKX19KSxmZSYmSXQoe3RhcmdldDpcIkpTT05cIixzdGF0OiEwLGZvcmNlZDohQXR8fGMoKGZ1bmN0aW9uKCl7dmFyIHQ9ZGUoKTtyZXR1cm5cIltudWxsXVwiIT1wZShbdF0pfHxcInt9XCIhPXBlKHthOnR9KXx8XCJ7fVwiIT1wZShPYmplY3QodCkpfSkpfSx7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxpLG49W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KW4ucHVzaChhcmd1bWVudHNbbysrXSk7aWYoaT1lPW5bMV0sKFMoZSl8fHZvaWQgMCE9PXQpJiYhJGUodCkpcmV0dXJuIEV0KGUpfHwoZT1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJihlPWkuY2FsbCh0aGlzLHQsZSkpLCEkZShlKSlyZXR1cm4gZX0pLG5bMV09ZSxwZS5hcHBseShmZSxuKX19KSxkZS5wcm90b3R5cGVbbGVdfHxqKGRlLnByb3RvdHlwZSxsZSxkZS5wcm90b3R5cGUudmFsdWVPZiksUXQoZGUsXCJTeW1ib2xcIikseltzZV09ITA7dmFyIEZlPU4uZixfZT1sLlN5bWJvbDtpZihoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBfZSYmKCEoXCJkZXNjcmlwdGlvblwiaW4gX2UucHJvdG90eXBlKXx8dm9pZCAwIT09X2UoKS5kZXNjcmlwdGlvbikpe3ZhciBWZT17fSxCZT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg8MXx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3ZvaWQgMDpTdHJpbmcoYXJndW1lbnRzWzBdKSxlPXRoaXMgaW5zdGFuY2VvZiBCZT9uZXcgX2UodCk6dm9pZCAwPT09dD9fZSgpOl9lKHQpO3JldHVyblwiXCI9PT10JiYoVmVbZV09ITApLGV9O3d0KEJlLF9lKTt2YXIgTGU9QmUucHJvdG90eXBlPV9lLnByb3RvdHlwZTtMZS5jb25zdHJ1Y3Rvcj1CZTt2YXIgRGU9TGUudG9TdHJpbmcsSGU9XCJTeW1ib2wodGVzdClcIj09U3RyaW5nKF9lKFwidGVzdFwiKSksTWU9L15TeW1ib2xcXCgoLiopXFwpW14pXSskLztGZShMZSxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1TKHRoaXMpP3RoaXMudmFsdWVPZigpOnRoaXMsZT1EZS5jYWxsKHQpO2lmKE8oVmUsdCkpcmV0dXJuXCJcIjt2YXIgaT1IZT9lLnNsaWNlKDcsLTEpOmUucmVwbGFjZShNZSxcIiQxXCIpO3JldHVyblwiXCI9PT1pP3ZvaWQgMDppfX0pLEl0KHtnbG9iYWw6ITAsZm9yY2VkOiEwfSx7U3ltYm9sOkJlfSl9SnQoXCJpdGVyYXRvclwiKTt2YXIgVWU9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXgoZSk7biBpbiB0P04uZih0LG4scCgwLGkpKTp0W25dPWl9LHFlPVd0KFwic3BlY2llc1wiKSx6ZT1mdW5jdGlvbih0KXtyZXR1cm4hYygoZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4oZS5jb25zdHJ1Y3Rvcj17fSlbcWVdPWZ1bmN0aW9uKCl7cmV0dXJue2ZvbzoxfX0sMSE9PWVbdF0oQm9vbGVhbikuZm9vfSkpfSxXZT1XdChcImlzQ29uY2F0U3ByZWFkYWJsZVwiKSxHZT0hYygoZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdFtXZV09ITEsdC5jb25jYXQoKVswXSE9PXR9KSksS2U9emUoXCJjb25jYXRcIiksSmU9ZnVuY3Rpb24odCl7aWYoIVModCkpcmV0dXJuITE7dmFyIGU9dFtXZV07cmV0dXJuIHZvaWQgMCE9PWU/ISFlOkV0KHQpfTtJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6IUdlfHwhS2V9LHtjb25jYXQ6ZnVuY3Rpb24odCl7dmFyIGUsaSxuLG8scixhPVJ0KHRoaXMpLHM9aWUoYSwwKSxsPTA7Zm9yKGU9LTEsbj1hcmd1bWVudHMubGVuZ3RoO2U8bjtlKyspaWYocj0tMT09PWU/YTphcmd1bWVudHNbZV0sSmUocikpe2lmKGwrKG89c3Qoci5sZW5ndGgpKT45MDA3MTk5MjU0NzQwOTkxKXRocm93IFR5cGVFcnJvcihcIk1heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZFwiKTtmb3IoaT0wO2k8bztpKyssbCsrKWkgaW4gciYmVWUocyxsLHJbaV0pfWVsc2V7aWYobD49OTAwNzE5OTI1NDc0MDk5MSl0aHJvdyBUeXBlRXJyb3IoXCJNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWRcIik7VWUocyxsKysscil9cmV0dXJuIHMubGVuZ3RoPWwsc319KTt2YXIgWWU9cmUuZmlsdGVyO0l0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwLGZvcmNlZDohemUoXCJmaWx0ZXJcIil9LHtmaWx0ZXI6ZnVuY3Rpb24odCl7cmV0dXJuIFllKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSk7dmFyIFhlPVd0KFwidW5zY29wYWJsZXNcIiksUWU9QXJyYXkucHJvdG90eXBlO251bGw9PVFlW1hlXSYmaihRZSxYZSxMdChudWxsKSk7dmFyIFplPWZ1bmN0aW9uKHQpe1FlW1hlXVt0XT0hMH0sdGk9cmUuZmluZCxlaT0hMDtcImZpbmRcImluW10mJkFycmF5KDEpLmZpbmQoKGZ1bmN0aW9uKCl7ZWk9ITF9KSksSXQoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITAsZm9yY2VkOmVpfSx7ZmluZDpmdW5jdGlvbih0KXtyZXR1cm4gdGkodGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxaZShcImZpbmRcIik7dmFyIGlpPXJlLmZpbmRJbmRleCxuaT0hMDtcImZpbmRJbmRleFwiaW5bXSYmQXJyYXkoMSkuZmluZEluZGV4KChmdW5jdGlvbigpe25pPSExfSkpLEl0KHt0YXJnZXQ6XCJBcnJheVwiLHByb3RvOiEwLGZvcmNlZDpuaX0se2ZpbmRJbmRleDpmdW5jdGlvbih0KXtyZXR1cm4gaWkodGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxaZShcImZpbmRJbmRleFwiKTt2YXIgb2k9ZHQuaW5jbHVkZXM7SXQoe3RhcmdldDpcIkFycmF5XCIscHJvdG86ITB9LHtpbmNsdWRlczpmdW5jdGlvbih0KXtyZXR1cm4gb2kodGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxaZShcImluY2x1ZGVzXCIpO3ZhciByaT1mdW5jdGlvbih0LGUpe3ZhciBpPVtdW3RdO3JldHVybiFpfHwhYygoZnVuY3Rpb24oKXtpLmNhbGwobnVsbCxlfHxmdW5jdGlvbigpe3Rocm93IDF9LDEpfSkpfSxhaT1kdC5pbmRleE9mLHNpPVtdLmluZGV4T2YsbGk9ISFzaSYmMS9bMV0uaW5kZXhPZigxLC0wKTwwLGNpPXJpKFwiaW5kZXhPZlwiKTtJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6bGl8fGNpfSx7aW5kZXhPZjpmdW5jdGlvbih0KXtyZXR1cm4gbGk/c2kuYXBwbHkodGhpcyxhcmd1bWVudHMpfHwwOmFpKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSk7dmFyIGhpLHVpLGRpLGZpPSFjKChmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPW51bGwsT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyB0KSE9PXQucHJvdG90eXBlfSkpLHBpPXEoXCJJRV9QUk9UT1wiKSxnaT1PYmplY3QucHJvdG90eXBlLHZpPWZpP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0KXtyZXR1cm4gdD1SdCh0KSxPKHQscGkpP3RbcGldOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/Z2k6bnVsbH0sYmk9V3QoXCJpdGVyYXRvclwiKSx5aT0hMTtbXS5rZXlzJiYoXCJuZXh0XCJpbihkaT1bXS5rZXlzKCkpPyh1aT12aSh2aShkaSkpKSE9PU9iamVjdC5wcm90b3R5cGUmJihoaT11aSk6eWk9ITApLG51bGw9PWhpJiYoaGk9e30pLE8oaGksYmkpfHxqKGhpLGJpLChmdW5jdGlvbigpe3JldHVybiB0aGlzfSkpO3ZhciBtaT17SXRlcmF0b3JQcm90b3R5cGU6aGksQlVHR1lfU0FGQVJJX0lURVJBVE9SUzp5aX0sd2k9bWkuSXRlcmF0b3JQcm90b3R5cGUsU2k9T2JqZWN0LnNldFByb3RvdHlwZU9mfHwoXCJfX3Byb3RvX19cImlue30/ZnVuY3Rpb24oKXt2YXIgdCxlPSExLGk9e307dHJ5eyh0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSxcIl9fcHJvdG9fX1wiKS5zZXQpLmNhbGwoaSxbXSksZT1pIGluc3RhbmNlb2YgQXJyYXl9Y2F0Y2godCl7fXJldHVybiBmdW5jdGlvbihpLG4pe3JldHVybiBFKGkpLGZ1bmN0aW9uKHQpe2lmKCFTKHQpJiZudWxsIT09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIrU3RyaW5nKHQpK1wiIGFzIGEgcHJvdG90eXBlXCIpfShuKSxlP3QuY2FsbChpLG4pOmkuX19wcm90b19fPW4saX19KCk6dm9pZCAwKSx4aT1taS5JdGVyYXRvclByb3RvdHlwZSxraT1taS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTLE9pPVd0KFwiaXRlcmF0b3JcIiksVGk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sQ2k9ZnVuY3Rpb24odCxlLGksbixvLHIsYSl7IWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj1lK1wiIEl0ZXJhdG9yXCI7dC5wcm90b3R5cGU9THQod2kse25leHQ6cCgxLGkpfSksUXQodCxuLCExKX0oaSxlLG4pO3ZhciBzLGwsYyxoPWZ1bmN0aW9uKHQpe2lmKHQ9PT1vJiZ2KXJldHVybiB2O2lmKCFraSYmdCBpbiBmKXJldHVybiBmW3RdO3N3aXRjaCh0KXtjYXNlXCJrZXlzXCI6Y2FzZVwidmFsdWVzXCI6Y2FzZVwiZW50cmllc1wiOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgaSh0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkodGhpcyl9fSx1PWUrXCIgSXRlcmF0b3JcIixkPSExLGY9dC5wcm90b3R5cGUsZz1mW09pXXx8ZltcIkBAaXRlcmF0b3JcIl18fG8mJmZbb10sdj0ha2kmJmd8fGgobyksYj1cIkFycmF5XCI9PWUmJmYuZW50cmllc3x8ZztpZihiJiYocz12aShiLmNhbGwobmV3IHQpKSx4aSE9PU9iamVjdC5wcm90b3R5cGUmJnMubmV4dCYmKHZpKHMpIT09eGkmJihTaT9TaShzLHhpKTpcImZ1bmN0aW9uXCIhPXR5cGVvZiBzW09pXSYmaihzLE9pLFRpKSksUXQocyx1LCEwKSkpLFwidmFsdWVzXCI9PW8mJmcmJlwidmFsdWVzXCIhPT1nLm5hbWUmJihkPSEwLHY9ZnVuY3Rpb24oKXtyZXR1cm4gZy5jYWxsKHRoaXMpfSksZltPaV0hPT12JiZqKGYsT2ksdiksbylpZihsPXt2YWx1ZXM6aChcInZhbHVlc1wiKSxrZXlzOnI/djpoKFwia2V5c1wiKSxlbnRyaWVzOmgoXCJlbnRyaWVzXCIpfSxhKWZvcihjIGluIGwpIWtpJiYhZCYmYyBpbiBmfHxaKGYsYyxsW2NdKTtlbHNlIEl0KHt0YXJnZXQ6ZSxwcm90bzohMCxmb3JjZWQ6a2l8fGR9LGwpO3JldHVybiBsfSxQaT1RLnNldCwkaT1RLmdldHRlckZvcihcIkFycmF5IEl0ZXJhdG9yXCIpLElpPUNpKEFycmF5LFwiQXJyYXlcIiwoZnVuY3Rpb24odCxlKXtQaSh0aGlzLHt0eXBlOlwiQXJyYXkgSXRlcmF0b3JcIix0YXJnZXQ6dyh0KSxpbmRleDowLGtpbmQ6ZX0pfSksKGZ1bmN0aW9uKCl7dmFyIHQ9JGkodGhpcyksZT10LnRhcmdldCxpPXQua2luZCxuPXQuaW5kZXgrKztyZXR1cm4hZXx8bj49ZS5sZW5ndGg/KHQudGFyZ2V0PXZvaWQgMCx7dmFsdWU6dm9pZCAwLGRvbmU6ITB9KTpcImtleXNcIj09aT97dmFsdWU6bixkb25lOiExfTpcInZhbHVlc1wiPT1pP3t2YWx1ZTplW25dLGRvbmU6ITF9Ont2YWx1ZTpbbixlW25dXSxkb25lOiExfX0pLFwidmFsdWVzXCIpO1plKFwia2V5c1wiKSxaZShcInZhbHVlc1wiKSxaZShcImVudHJpZXNcIik7dmFyIEFpPVtdLmpvaW4sRWk9eSE9T2JqZWN0LFJpPXJpKFwiam9pblwiLFwiLFwiKTtJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6RWl8fFJpfSx7am9pbjpmdW5jdGlvbih0KXtyZXR1cm4gQWkuY2FsbCh3KHRoaXMpLHZvaWQgMD09PXQ/XCIsXCI6dCl9fSk7dmFyIE5pPVd0KFwic3BlY2llc1wiKSxqaT1bXS5zbGljZSxGaT1NYXRoLm1heDtJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6IXplKFwic2xpY2VcIil9LHtzbGljZTpmdW5jdGlvbih0LGUpe3ZhciBpLG4sbyxyPXcodGhpcyksYT1zdChyLmxlbmd0aCkscz1odCh0LGEpLGw9aHQodm9pZCAwPT09ZT9hOmUsYSk7aWYoRXQocikmJihcImZ1bmN0aW9uXCIhPXR5cGVvZihpPXIuY29uc3RydWN0b3IpfHxpIT09QXJyYXkmJiFFdChpLnByb3RvdHlwZSk/UyhpKSYmbnVsbD09PShpPWlbTmldKSYmKGk9dm9pZCAwKTppPXZvaWQgMCxpPT09QXJyYXl8fHZvaWQgMD09PWkpKXJldHVybiBqaS5jYWxsKHIscyxsKTtmb3Iobj1uZXcodm9pZCAwPT09aT9BcnJheTppKShGaShsLXMsMCkpLG89MDtzPGw7cysrLG8rKylzIGluIHImJlVlKG4sbyxyW3NdKTtyZXR1cm4gbi5sZW5ndGg9byxufX0pO3ZhciBfaT1bXS5zb3J0LFZpPVsxLDIsM10sQmk9YygoZnVuY3Rpb24oKXtWaS5zb3J0KHZvaWQgMCl9KSksTGk9YygoZnVuY3Rpb24oKXtWaS5zb3J0KG51bGwpfSkpLERpPXJpKFwic29ydFwiKTtJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6Qml8fCFMaXx8RGl9LHtzb3J0OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10P19pLmNhbGwoUnQodGhpcykpOl9pLmNhbGwoUnQodGhpcyksWnQodCkpfX0pO3ZhciBIaT1NYXRoLm1heCxNaT1NYXRoLm1pbjtJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMCxmb3JjZWQ6IXplKFwic3BsaWNlXCIpfSx7c3BsaWNlOmZ1bmN0aW9uKHQsZSl7dmFyIGksbixvLHIsYSxzLGw9UnQodGhpcyksYz1zdChsLmxlbmd0aCksaD1odCh0LGMpLHU9YXJndW1lbnRzLmxlbmd0aDtpZigwPT09dT9pPW49MDoxPT09dT8oaT0wLG49Yy1oKTooaT11LTIsbj1NaShIaShydChlKSwwKSxjLWgpKSxjK2ktbj45MDA3MTk5MjU0NzQwOTkxKXRocm93IFR5cGVFcnJvcihcIk1heGltdW0gYWxsb3dlZCBsZW5ndGggZXhjZWVkZWRcIik7Zm9yKG89aWUobCxuKSxyPTA7cjxuO3IrKykoYT1oK3IpaW4gbCYmVWUobyxyLGxbYV0pO2lmKG8ubGVuZ3RoPW4saTxuKXtmb3Iocj1oO3I8Yy1uO3IrKylzPXIraSwoYT1yK24paW4gbD9sW3NdPWxbYV06ZGVsZXRlIGxbc107Zm9yKHI9YztyPmMtbitpO3ItLSlkZWxldGUgbFtyLTFdfWVsc2UgaWYoaT5uKWZvcihyPWMtbjtyPmg7ci0tKXM9citpLTEsKGE9cituLTEpaW4gbD9sW3NdPWxbYV06ZGVsZXRlIGxbc107Zm9yKHI9MDtyPGk7cisrKWxbcitoXT1hcmd1bWVudHNbcisyXTtyZXR1cm4gbC5sZW5ndGg9Yy1uK2ksb319KTt2YXIgVWk9ZnVuY3Rpb24odCxlLGkpe3ZhciBuLG87cmV0dXJuIFNpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPWUuY29uc3RydWN0b3IpJiZuIT09aSYmUyhvPW4ucHJvdG90eXBlKSYmbyE9PWkucHJvdG90eXBlJiZTaSh0LG8pLHR9LHFpPVwiXFx0XFxuXFx2XFxmXFxyIMKg4ZqA4oCA4oCB4oCC4oCD4oCE4oCF4oCG4oCH4oCI4oCJ4oCK4oCv4oGf44CAXFx1MjAyOFxcdTIwMjlcXHVmZWZmXCIsemk9XCJbXCIrcWkrXCJdXCIsV2k9UmVnRXhwKFwiXlwiK3ppK3ppK1wiKlwiKSxHaT1SZWdFeHAoemkremkrXCIqJFwiKSxLaT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIGk9U3RyaW5nKG0oZSkpO3JldHVybiAxJnQmJihpPWkucmVwbGFjZShXaSxcIlwiKSksMiZ0JiYoaT1pLnJlcGxhY2UoR2ksXCJcIikpLGl9fSxKaT17c3RhcnQ6S2koMSksZW5kOktpKDIpLHRyaW06S2koMyl9LFlpPWJ0LmYsWGk9QS5mLFFpPU4uZixaaT1KaS50cmltLHRuPWwuTnVtYmVyLGVuPXRuLnByb3RvdHlwZSxubj1cIk51bWJlclwiPT12KEx0KGVuKSksb249ZnVuY3Rpb24odCl7dmFyIGUsaSxuLG8scixhLHMsbCxjPXgodCwhMSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMmJmMubGVuZ3RoPjIpaWYoNDM9PT0oZT0oYz1aaShjKSkuY2hhckNvZGVBdCgwKSl8fDQ1PT09ZSl7aWYoODg9PT0oaT1jLmNoYXJDb2RlQXQoMikpfHwxMjA9PT1pKXJldHVybiBOYU59ZWxzZSBpZig0OD09PWUpe3N3aXRjaChjLmNoYXJDb2RlQXQoMSkpe2Nhc2UgNjY6Y2FzZSA5ODpuPTIsbz00OTticmVhaztjYXNlIDc5OmNhc2UgMTExOm49OCxvPTU1O2JyZWFrO2RlZmF1bHQ6cmV0dXJuK2N9Zm9yKGE9KHI9Yy5zbGljZSgyKSkubGVuZ3RoLHM9MDtzPGE7cysrKWlmKChsPXIuY2hhckNvZGVBdChzKSk8NDh8fGw+bylyZXR1cm4gTmFOO3JldHVybiBwYXJzZUludChyLG4pfXJldHVybitjfTtpZihQdChcIk51bWJlclwiLCF0bihcIiAwbzFcIil8fCF0bihcIjBiMVwiKXx8dG4oXCIrMHgxXCIpKSl7Zm9yKHZhciBybixhbj1mdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPDE/MDp0LGk9dGhpcztyZXR1cm4gaSBpbnN0YW5jZW9mIGFuJiYobm4/YygoZnVuY3Rpb24oKXtlbi52YWx1ZU9mLmNhbGwoaSl9KSk6XCJOdW1iZXJcIiE9dihpKSk/VWkobmV3IHRuKG9uKGUpKSxpLGFuKTpvbihlKX0sc249aD9ZaSh0bik6XCJNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSxFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlclwiLnNwbGl0KFwiLFwiKSxsbj0wO3NuLmxlbmd0aD5sbjtsbisrKU8odG4scm49c25bbG5dKSYmIU8oYW4scm4pJiZRaShhbixybixYaSh0bixybikpO2FuLnByb3RvdHlwZT1lbixlbi5jb25zdHJ1Y3Rvcj1hbixaKGwsXCJOdW1iZXJcIixhbil9dmFyIGNuPU9iamVjdC5hc3NpZ24saG49IWNufHxjKChmdW5jdGlvbigpe3ZhciB0PXt9LGU9e30saT1TeW1ib2woKTtyZXR1cm4gdFtpXT03LFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKChmdW5jdGlvbih0KXtlW3RdPXR9KSksNyE9Y24oe30sdClbaV18fFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIiE9TnQoY24oe30sZSkpLmpvaW4oXCJcIil9KSk/ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9UnQodCksbj1hcmd1bWVudHMubGVuZ3RoLG89MSxyPXl0LmYsYT1mLmY7bj5vOylmb3IodmFyIHMsbD15KGFyZ3VtZW50c1tvKytdKSxjPXI/TnQobCkuY29uY2F0KHIobCkpOk50KGwpLHU9Yy5sZW5ndGgsZD0wO3U+ZDspcz1jW2QrK10saCYmIWEuY2FsbChsLHMpfHwoaVtzXT1sW3NdKTtyZXR1cm4gaX06Y247SXQoe3RhcmdldDpcIk9iamVjdFwiLHN0YXQ6ITAsZm9yY2VkOk9iamVjdC5hc3NpZ24hPT1obn0se2Fzc2lnbjpobn0pO3ZhciB1bj1mLmYsZG49ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgaSxuPXcoZSksbz1OdChuKSxyPW8ubGVuZ3RoLGE9MCxzPVtdO3I+YTspaT1vW2ErK10saCYmIXVuLmNhbGwobixpKXx8cy5wdXNoKHQ/W2ksbltpXV06bltpXSk7cmV0dXJuIHN9fSxmbj17ZW50cmllczpkbighMCksdmFsdWVzOmRuKCExKX0uZW50cmllcztJdCh7dGFyZ2V0OlwiT2JqZWN0XCIsc3RhdDohMH0se2VudHJpZXM6ZnVuY3Rpb24odCl7cmV0dXJuIGZuKHQpfX0pO3ZhciBwbj1XdChcInRvU3RyaW5nVGFnXCIpLGduPVwiQXJndW1lbnRzXCI9PXYoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKSx2bj17fTt2bltXdChcInRvU3RyaW5nVGFnXCIpXT1cInpcIjt2YXIgYm49XCJbb2JqZWN0IHpdXCIhPT1TdHJpbmcodm4pP2Z1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IFwiK2Z1bmN0aW9uKHQpe3ZhciBlLGksbjtyZXR1cm4gdm9pZCAwPT09dD9cIlVuZGVmaW5lZFwiOm51bGw9PT10P1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihpPWZ1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiB0W2VdfWNhdGNoKHQpe319KGU9T2JqZWN0KHQpLHBuKSk/aTpnbj92KGUpOlwiT2JqZWN0XCI9PShuPXYoZSkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNhbGxlZT9cIkFyZ3VtZW50c1wiOm59KHRoaXMpK1wiXVwifTp2bi50b1N0cmluZyx5bj1PYmplY3QucHJvdG90eXBlO2JuIT09eW4udG9TdHJpbmcmJlooeW4sXCJ0b1N0cmluZ1wiLGJuLHt1bnNhZmU6ITB9KTt2YXIgbW49SmkudHJpbSx3bj1sLnBhcnNlRmxvYXQsU249MS93bihxaStcIi0wXCIpIT0tMS8wP2Z1bmN0aW9uKHQpe3ZhciBlPW1uKFN0cmluZyh0KSksaT13bihlKTtyZXR1cm4gMD09PWkmJlwiLVwiPT1lLmNoYXJBdCgwKT8tMDppfTp3bjtJdCh7Z2xvYmFsOiEwLGZvcmNlZDpwYXJzZUZsb2F0IT1Tbn0se3BhcnNlRmxvYXQ6U259KTt2YXIgeG49SmkudHJpbSxrbj1sLnBhcnNlSW50LE9uPS9eWystXT8wW1h4XS8sVG49OCE9PWtuKHFpK1wiMDhcIil8fDIyIT09a24ocWkrXCIweDE2XCIpP2Z1bmN0aW9uKHQsZSl7dmFyIGk9eG4oU3RyaW5nKHQpKTtyZXR1cm4ga24oaSxlPj4+MHx8KE9uLnRlc3QoaSk/MTY6MTApKX06a247SXQoe2dsb2JhbDohMCxmb3JjZWQ6cGFyc2VJbnQhPVRufSx7cGFyc2VJbnQ6VG59KTt2YXIgQ249ZnVuY3Rpb24oKXt2YXIgdD1FKHRoaXMpLGU9XCJcIjtyZXR1cm4gdC5nbG9iYWwmJihlKz1cImdcIiksdC5pZ25vcmVDYXNlJiYoZSs9XCJpXCIpLHQubXVsdGlsaW5lJiYoZSs9XCJtXCIpLHQuZG90QWxsJiYoZSs9XCJzXCIpLHQudW5pY29kZSYmKGUrPVwidVwiKSx0LnN0aWNreSYmKGUrPVwieVwiKSxlfSxQbj1SZWdFeHAucHJvdG90eXBlLCRuPVBuLnRvU3RyaW5nLEluPWMoKGZ1bmN0aW9uKCl7cmV0dXJuXCIvYS9iXCIhPSRuLmNhbGwoe3NvdXJjZTpcImFcIixmbGFnczpcImJcIn0pfSkpLEFuPVwidG9TdHJpbmdcIiE9JG4ubmFtZTsoSW58fEFuKSYmWihSZWdFeHAucHJvdG90eXBlLFwidG9TdHJpbmdcIiwoZnVuY3Rpb24oKXt2YXIgdD1FKHRoaXMpLGU9U3RyaW5nKHQuc291cmNlKSxpPXQuZmxhZ3M7cmV0dXJuXCIvXCIrZStcIi9cIitTdHJpbmcodm9pZCAwPT09aSYmdCBpbnN0YW5jZW9mIFJlZ0V4cCYmIShcImZsYWdzXCJpbiBQbik/Q24uY2FsbCh0KTppKX0pLHt1bnNhZmU6ITB9KTt2YXIgRW49V3QoXCJtYXRjaFwiKSxSbj1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gUyh0KSYmKHZvaWQgMCE9PShlPXRbRW5dKT8hIWU6XCJSZWdFeHBcIj09dih0KSl9LE5uPWZ1bmN0aW9uKHQpe2lmKFJuKHQpKXRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtyZXR1cm4gdH0sam49V3QoXCJtYXRjaFwiKTtJdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOiFmdW5jdGlvbih0KXt2YXIgZT0vLi87dHJ5e1wiLy4vXCJbdF0oZSl9Y2F0Y2goaSl7dHJ5e3JldHVybiBlW2puXT0hMSxcIi8uL1wiW3RdKGUpfWNhdGNoKHQpe319cmV0dXJuITF9KFwiaW5jbHVkZXNcIil9LHtpbmNsdWRlczpmdW5jdGlvbih0KXtyZXR1cm4hIX5TdHJpbmcobSh0aGlzKSkuaW5kZXhPZihObih0KSxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSk7dmFyIEZuPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLGkpe3ZhciBuLG8scj1TdHJpbmcobShlKSksYT1ydChpKSxzPXIubGVuZ3RoO3JldHVybiBhPDB8fGE+PXM/dD9cIlwiOnZvaWQgMDoobj1yLmNoYXJDb2RlQXQoYSkpPDU1Mjk2fHxuPjU2MzE5fHxhKzE9PT1zfHwobz1yLmNoYXJDb2RlQXQoYSsxKSk8NTYzMjB8fG8+NTczNDM/dD9yLmNoYXJBdChhKTpuOnQ/ci5zbGljZShhLGErMik6by01NjMyMCsobi01NTI5Njw8MTApKzY1NTM2fX0sX249e2NvZGVBdDpGbighMSksY2hhckF0OkZuKCEwKX0sVm49X24uY2hhckF0LEJuPVEuc2V0LExuPVEuZ2V0dGVyRm9yKFwiU3RyaW5nIEl0ZXJhdG9yXCIpO0NpKFN0cmluZyxcIlN0cmluZ1wiLChmdW5jdGlvbih0KXtCbih0aGlzLHt0eXBlOlwiU3RyaW5nIEl0ZXJhdG9yXCIsc3RyaW5nOlN0cmluZyh0KSxpbmRleDowfSl9KSwoZnVuY3Rpb24oKXt2YXIgdCxlPUxuKHRoaXMpLGk9ZS5zdHJpbmcsbj1lLmluZGV4O3JldHVybiBuPj1pLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PVZuKGksbiksZS5pbmRleCs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSkpO3ZhciBEbixIbixNbj1SZWdFeHAucHJvdG90eXBlLmV4ZWMsVW49U3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLHFuPU1uLHpuPShEbj0vYS8sSG49L2IqL2csTW4uY2FsbChEbixcImFcIiksTW4uY2FsbChIbixcImFcIiksMCE9PURuLmxhc3RJbmRleHx8MCE9PUhuLmxhc3RJbmRleCksV249dm9pZCAwIT09LygpPz8vLmV4ZWMoXCJcIilbMV07KHpufHxXbikmJihxbj1mdW5jdGlvbih0KXt2YXIgZSxpLG4sbyxyPXRoaXM7cmV0dXJuIFduJiYoaT1uZXcgUmVnRXhwKFwiXlwiK3Iuc291cmNlK1wiJCg/IVxcXFxzKVwiLENuLmNhbGwocikpKSx6biYmKGU9ci5sYXN0SW5kZXgpLG49TW4uY2FsbChyLHQpLHpuJiZuJiYoci5sYXN0SW5kZXg9ci5nbG9iYWw/bi5pbmRleCtuWzBdLmxlbmd0aDplKSxXbiYmbiYmbi5sZW5ndGg+MSYmVW4uY2FsbChuWzBdLGksKGZ1bmN0aW9uKCl7Zm9yKG89MTtvPGFyZ3VtZW50cy5sZW5ndGgtMjtvKyspdm9pZCAwPT09YXJndW1lbnRzW29dJiYobltvXT12b2lkIDApfSkpLG59KTt2YXIgR249cW4sS249V3QoXCJzcGVjaWVzXCIpLEpuPSFjKChmdW5jdGlvbigpe3ZhciB0PS8uLztyZXR1cm4gdC5leGVjPWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIHQuZ3JvdXBzPXthOlwiN1wifSx0fSxcIjdcIiE9PVwiXCIucmVwbGFjZSh0LFwiJDxhPlwiKX0pKSxZbj0hYygoZnVuY3Rpb24oKXt2YXIgdD0vKD86KS8sZT10LmV4ZWM7dC5leGVjPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTt2YXIgaT1cImFiXCIuc3BsaXQodCk7cmV0dXJuIDIhPT1pLmxlbmd0aHx8XCJhXCIhPT1pWzBdfHxcImJcIiE9PWlbMV19KSksWG49ZnVuY3Rpb24odCxlLGksbil7dmFyIG89V3QodCkscj0hYygoZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gZVtvXT1mdW5jdGlvbigpe3JldHVybiA3fSw3IT1cIlwiW3RdKGUpfSkpLGE9ciYmIWMoKGZ1bmN0aW9uKCl7dmFyIGU9ITEsaT0vYS87cmV0dXJuIGkuZXhlYz1mdW5jdGlvbigpe3JldHVybiBlPSEwLG51bGx9LFwic3BsaXRcIj09PXQmJihpLmNvbnN0cnVjdG9yPXt9LGkuY29uc3RydWN0b3JbS25dPWZ1bmN0aW9uKCl7cmV0dXJuIGl9KSxpW29dKFwiXCIpLCFlfSkpO2lmKCFyfHwhYXx8XCJyZXBsYWNlXCI9PT10JiYhSm58fFwic3BsaXRcIj09PXQmJiFZbil7dmFyIHM9Ly4vW29dLGw9aShvLFwiXCJbdF0sKGZ1bmN0aW9uKHQsZSxpLG4sbyl7cmV0dXJuIGUuZXhlYz09PUduP3ImJiFvP3tkb25lOiEwLHZhbHVlOnMuY2FsbChlLGksbil9Ontkb25lOiEwLHZhbHVlOnQuY2FsbChpLGUsbil9Ontkb25lOiExfX0pKSxoPWxbMF0sdT1sWzFdO1ooU3RyaW5nLnByb3RvdHlwZSx0LGgpLFooUmVnRXhwLnByb3RvdHlwZSxvLDI9PWU/ZnVuY3Rpb24odCxlKXtyZXR1cm4gdS5jYWxsKHQsdGhpcyxlKX06ZnVuY3Rpb24odCl7cmV0dXJuIHUuY2FsbCh0LHRoaXMpfSksbiYmaihSZWdFeHAucHJvdG90eXBlW29dLFwic2hhbVwiLCEwKX19LFFuPV9uLmNoYXJBdCxabj1mdW5jdGlvbih0LGUsaSl7cmV0dXJuIGUrKGk/UW4odCxlKS5sZW5ndGg6MSl9LHRvPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dC5leGVjO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkpe3ZhciBuPWkuY2FsbCh0LGUpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBuKXRocm93IFR5cGVFcnJvcihcIlJlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbFwiKTtyZXR1cm4gbn1pZihcIlJlZ0V4cFwiIT09dih0KSl0aHJvdyBUeXBlRXJyb3IoXCJSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyXCIpO3JldHVybiBHbi5jYWxsKHQsZSl9LGVvPU1hdGgubWF4LGlvPU1hdGgubWluLG5vPU1hdGguZmxvb3Isb289L1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nLHJvPS9cXCQoWyQmJ2BdfFxcZFxcZD8pL2c7WG4oXCJyZXBsYWNlXCIsMiwoZnVuY3Rpb24odCxlLGkpe3JldHVybltmdW5jdGlvbihpLG4pe3ZhciBvPW0odGhpcykscj1udWxsPT1pP3ZvaWQgMDppW3RdO3JldHVybiB2b2lkIDAhPT1yP3IuY2FsbChpLG8sbik6ZS5jYWxsKFN0cmluZyhvKSxpLG4pfSxmdW5jdGlvbih0LG8pe3ZhciByPWkoZSx0LHRoaXMsbyk7aWYoci5kb25lKXJldHVybiByLnZhbHVlO3ZhciBhPUUodCkscz1TdHJpbmcodGhpcyksbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvO2x8fChvPVN0cmluZyhvKSk7dmFyIGM9YS5nbG9iYWw7aWYoYyl7dmFyIGg9YS51bmljb2RlO2EubGFzdEluZGV4PTB9Zm9yKHZhciB1PVtdOzspe3ZhciBkPXRvKGEscyk7aWYobnVsbD09PWQpYnJlYWs7aWYodS5wdXNoKGQpLCFjKWJyZWFrO1wiXCI9PT1TdHJpbmcoZFswXSkmJihhLmxhc3RJbmRleD1abihzLHN0KGEubGFzdEluZGV4KSxoKSl9Zm9yKHZhciBmLHA9XCJcIixnPTAsdj0wO3Y8dS5sZW5ndGg7disrKXtkPXVbdl07Zm9yKHZhciBiPVN0cmluZyhkWzBdKSx5PWVvKGlvKHJ0KGQuaW5kZXgpLHMubGVuZ3RoKSwwKSxtPVtdLHc9MTt3PGQubGVuZ3RoO3crKyltLnB1c2godm9pZCAwPT09KGY9ZFt3XSk/ZjpTdHJpbmcoZikpO3ZhciBTPWQuZ3JvdXBzO2lmKGwpe3ZhciB4PVtiXS5jb25jYXQobSx5LHMpO3ZvaWQgMCE9PVMmJngucHVzaChTKTt2YXIgaz1TdHJpbmcoby5hcHBseSh2b2lkIDAseCkpfWVsc2Ugaz1uKGIscyx5LG0sUyxvKTt5Pj1nJiYocCs9cy5zbGljZShnLHkpK2ssZz15K2IubGVuZ3RoKX1yZXR1cm4gcCtzLnNsaWNlKGcpfV07ZnVuY3Rpb24gbih0LGksbixvLHIsYSl7dmFyIHM9bit0Lmxlbmd0aCxsPW8ubGVuZ3RoLGM9cm87cmV0dXJuIHZvaWQgMCE9PXImJihyPVJ0KHIpLGM9b28pLGUuY2FsbChhLGMsKGZ1bmN0aW9uKGUsYSl7dmFyIGM7c3dpdGNoKGEuY2hhckF0KDApKXtjYXNlXCIkXCI6cmV0dXJuXCIkXCI7Y2FzZVwiJlwiOnJldHVybiB0O2Nhc2VcImBcIjpyZXR1cm4gaS5zbGljZSgwLG4pO2Nhc2VcIidcIjpyZXR1cm4gaS5zbGljZShzKTtjYXNlXCI8XCI6Yz1yW2Euc2xpY2UoMSwtMSldO2JyZWFrO2RlZmF1bHQ6dmFyIGg9K2E7aWYoMD09PWgpcmV0dXJuIGU7aWYoaD5sKXt2YXIgdT1ubyhoLzEwKTtyZXR1cm4gMD09PXU/ZTp1PD1sP3ZvaWQgMD09PW9bdS0xXT9hLmNoYXJBdCgxKTpvW3UtMV0rYS5jaGFyQXQoMSk6ZX1jPW9baC0xXX1yZXR1cm4gdm9pZCAwPT09Yz9cIlwiOmN9KSl9fSkpO3ZhciBhbz1PYmplY3QuaXN8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9PT1lPzAhPT10fHwxL3Q9PTEvZTp0IT10JiZlIT1lfTtYbihcInNlYXJjaFwiLDEsKGZ1bmN0aW9uKHQsZSxpKXtyZXR1cm5bZnVuY3Rpb24oZSl7dmFyIGk9bSh0aGlzKSxuPW51bGw9PWU/dm9pZCAwOmVbdF07cmV0dXJuIHZvaWQgMCE9PW4/bi5jYWxsKGUsaSk6bmV3IFJlZ0V4cChlKVt0XShTdHJpbmcoaSkpfSxmdW5jdGlvbih0KXt2YXIgbj1pKGUsdCx0aGlzKTtpZihuLmRvbmUpcmV0dXJuIG4udmFsdWU7dmFyIG89RSh0KSxyPVN0cmluZyh0aGlzKSxhPW8ubGFzdEluZGV4O2FvKGEsMCl8fChvLmxhc3RJbmRleD0wKTt2YXIgcz10byhvLHIpO3JldHVybiBhbyhvLmxhc3RJbmRleCxhKXx8KG8ubGFzdEluZGV4PWEpLG51bGw9PT1zPy0xOnMuaW5kZXh9XX0pKTt2YXIgc289V3QoXCJzcGVjaWVzXCIpLGxvPVtdLnB1c2gsY289TWF0aC5taW4saG89IWMoKGZ1bmN0aW9uKCl7cmV0dXJuIVJlZ0V4cCg0Mjk0OTY3Mjk1LFwieVwiKX0pKTtYbihcInNwbGl0XCIsMiwoZnVuY3Rpb24odCxlLGkpe3ZhciBuO3JldHVybiBuPVwiY1wiPT1cImFiYmNcIi5zcGxpdCgvKGIpKi8pWzFdfHw0IT1cInRlc3RcIi5zcGxpdCgvKD86KS8sLTEpLmxlbmd0aHx8MiE9XCJhYlwiLnNwbGl0KC8oPzphYikqLykubGVuZ3RofHw0IT1cIi5cIi5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGh8fFwiLlwiLnNwbGl0KC8oKSgpLykubGVuZ3RoPjF8fFwiXCIuc3BsaXQoLy4/LykubGVuZ3RoP2Z1bmN0aW9uKHQsaSl7dmFyIG49U3RyaW5nKG0odGhpcykpLG89dm9pZCAwPT09aT80Mjk0OTY3Mjk1Omk+Pj4wO2lmKDA9PT1vKXJldHVybltdO2lmKHZvaWQgMD09PXQpcmV0dXJuW25dO2lmKCFSbih0KSlyZXR1cm4gZS5jYWxsKG4sdCxvKTtmb3IodmFyIHIsYSxzLGw9W10sYz0odC5pZ25vcmVDYXNlP1wiaVwiOlwiXCIpKyh0Lm11bHRpbGluZT9cIm1cIjpcIlwiKSsodC51bmljb2RlP1widVwiOlwiXCIpKyh0LnN0aWNreT9cInlcIjpcIlwiKSxoPTAsdT1uZXcgUmVnRXhwKHQuc291cmNlLGMrXCJnXCIpOyhyPUduLmNhbGwodSxuKSkmJiEoKGE9dS5sYXN0SW5kZXgpPmgmJihsLnB1c2gobi5zbGljZShoLHIuaW5kZXgpKSxyLmxlbmd0aD4xJiZyLmluZGV4PG4ubGVuZ3RoJiZsby5hcHBseShsLHIuc2xpY2UoMSkpLHM9clswXS5sZW5ndGgsaD1hLGwubGVuZ3RoPj1vKSk7KXUubGFzdEluZGV4PT09ci5pbmRleCYmdS5sYXN0SW5kZXgrKztyZXR1cm4gaD09PW4ubGVuZ3RoPyFzJiZ1LnRlc3QoXCJcIil8fGwucHVzaChcIlwiKTpsLnB1c2gobi5zbGljZShoKSksbC5sZW5ndGg+bz9sLnNsaWNlKDAsbyk6bH06XCIwXCIuc3BsaXQodm9pZCAwLDApLmxlbmd0aD9mdW5jdGlvbih0LGkpe3JldHVybiB2b2lkIDA9PT10JiYwPT09aT9bXTplLmNhbGwodGhpcyx0LGkpfTplLFtmdW5jdGlvbihlLGkpe3ZhciBvPW0odGhpcykscj1udWxsPT1lP3ZvaWQgMDplW3RdO3JldHVybiB2b2lkIDAhPT1yP3IuY2FsbChlLG8saSk6bi5jYWxsKFN0cmluZyhvKSxlLGkpfSxmdW5jdGlvbih0LG8pe3ZhciByPWkobix0LHRoaXMsbyxuIT09ZSk7aWYoci5kb25lKXJldHVybiByLnZhbHVlO3ZhciBhPUUodCkscz1TdHJpbmcodGhpcyksbD1mdW5jdGlvbih0LGUpe3ZhciBpLG49RSh0KS5jb25zdHJ1Y3RvcjtyZXR1cm4gdm9pZCAwPT09bnx8bnVsbD09KGk9RShuKVtzb10pP2U6WnQoaSl9KGEsUmVnRXhwKSxjPWEudW5pY29kZSxoPShhLmlnbm9yZUNhc2U/XCJpXCI6XCJcIikrKGEubXVsdGlsaW5lP1wibVwiOlwiXCIpKyhhLnVuaWNvZGU/XCJ1XCI6XCJcIikrKGhvP1wieVwiOlwiZ1wiKSx1PW5ldyBsKGhvP2E6XCJeKD86XCIrYS5zb3VyY2UrXCIpXCIsaCksZD12b2lkIDA9PT1vPzQyOTQ5NjcyOTU6bz4+PjA7aWYoMD09PWQpcmV0dXJuW107aWYoMD09PXMubGVuZ3RoKXJldHVybiBudWxsPT09dG8odSxzKT9bc106W107Zm9yKHZhciBmPTAscD0wLGc9W107cDxzLmxlbmd0aDspe3UubGFzdEluZGV4PWhvP3A6MDt2YXIgdixiPXRvKHUsaG8/czpzLnNsaWNlKHApKTtpZihudWxsPT09Ynx8KHY9Y28oc3QodS5sYXN0SW5kZXgrKGhvPzA6cCkpLHMubGVuZ3RoKSk9PT1mKXA9Wm4ocyxwLGMpO2Vsc2V7aWYoZy5wdXNoKHMuc2xpY2UoZixwKSksZy5sZW5ndGg9PT1kKXJldHVybiBnO2Zvcih2YXIgeT0xO3k8PWIubGVuZ3RoLTE7eSsrKWlmKGcucHVzaChiW3ldKSxnLmxlbmd0aD09PWQpcmV0dXJuIGc7cD1mPXZ9fXJldHVybiBnLnB1c2gocy5zbGljZShmKSksZ31dfSksIWhvKTt2YXIgdW89SmkudHJpbTtJdCh7dGFyZ2V0OlwiU3RyaW5nXCIscHJvdG86ITAsZm9yY2VkOmZ1bmN0aW9uKHQpe3JldHVybiBjKChmdW5jdGlvbigpe3JldHVybiEhcWlbdF0oKXx8XCLigIvCheGgjlwiIT1cIuKAi8KF4aCOXCJbdF0oKXx8cWlbdF0ubmFtZSE9PXR9KSl9KFwidHJpbVwiKX0se3RyaW06ZnVuY3Rpb24oKXtyZXR1cm4gdW8odGhpcyl9fSk7dmFyIGZvPXtDU1NSdWxlTGlzdDowLENTU1N0eWxlRGVjbGFyYXRpb246MCxDU1NWYWx1ZUxpc3Q6MCxDbGllbnRSZWN0TGlzdDowLERPTVJlY3RMaXN0OjAsRE9NU3RyaW5nTGlzdDowLERPTVRva2VuTGlzdDoxLERhdGFUcmFuc2Zlckl0ZW1MaXN0OjAsRmlsZUxpc3Q6MCxIVE1MQWxsQ29sbGVjdGlvbjowLEhUTUxDb2xsZWN0aW9uOjAsSFRNTEZvcm1FbGVtZW50OjAsSFRNTFNlbGVjdEVsZW1lbnQ6MCxNZWRpYUxpc3Q6MCxNaW1lVHlwZUFycmF5OjAsTmFtZWROb2RlTWFwOjAsTm9kZUxpc3Q6MSxQYWludFJlcXVlc3RMaXN0OjAsUGx1Z2luOjAsUGx1Z2luQXJyYXk6MCxTVkdMZW5ndGhMaXN0OjAsU1ZHTnVtYmVyTGlzdDowLFNWR1BhdGhTZWdMaXN0OjAsU1ZHUG9pbnRMaXN0OjAsU1ZHU3RyaW5nTGlzdDowLFNWR1RyYW5zZm9ybUxpc3Q6MCxTb3VyY2VCdWZmZXJMaXN0OjAsU3R5bGVTaGVldExpc3Q6MCxUZXh0VHJhY2tDdWVMaXN0OjAsVGV4dFRyYWNrTGlzdDowLFRvdWNoTGlzdDowfSxwbz1yZS5mb3JFYWNoLGdvPXJpKFwiZm9yRWFjaFwiKT9mdW5jdGlvbih0KXtyZXR1cm4gcG8odGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX06W10uZm9yRWFjaDtmb3IodmFyIHZvIGluIGZvKXt2YXIgYm89bFt2b10seW89Ym8mJmJvLnByb3RvdHlwZTtpZih5byYmeW8uZm9yRWFjaCE9PWdvKXRyeXtqKHlvLFwiZm9yRWFjaFwiLGdvKX1jYXRjaCh0KXt5by5mb3JFYWNoPWdvfX12YXIgbW89V3QoXCJpdGVyYXRvclwiKSx3bz1XdChcInRvU3RyaW5nVGFnXCIpLFNvPUlpLnZhbHVlcztmb3IodmFyIHhvIGluIGZvKXt2YXIga289bFt4b10sT289a28mJmtvLnByb3RvdHlwZTtpZihPbyl7aWYoT29bbW9dIT09U28pdHJ5e2ooT28sbW8sU28pfWNhdGNoKHQpe09vW21vXT1Tb31pZihPb1t3b118fGooT28sd28seG8pLGZvW3hvXSlmb3IodmFyIFRvIGluIElpKWlmKE9vW1RvXSE9PUlpW1RvXSl0cnl7aihPbyxUbyxJaVtUb10pfWNhdGNoKHQpe09vW1RvXT1JaVtUb119fX1mdW5jdGlvbiBDbyh0KXtyZXR1cm4oQ289XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIFBvKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiAkbyh0LGUpe2Zvcih2YXIgaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgbj1lW2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLmtleSxuKX19ZnVuY3Rpb24gSW8odCxlLGkpe3JldHVybiBlJiYkbyh0LnByb3RvdHlwZSxlKSxpJiYkbyh0LGkpLHR9ZnVuY3Rpb24gQW8odCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdH0odCl8fGZ1bmN0aW9uKHQsZSl7dmFyIGk9W10sbj0hMCxvPSExLHI9dm9pZCAwO3RyeXtmb3IodmFyIGEscz10W1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KGE9cy5uZXh0KCkpLmRvbmUpJiYoaS5wdXNoKGEudmFsdWUpLCFlfHxpLmxlbmd0aCE9PWUpO249ITApO31jYXRjaCh0KXtvPSEwLHI9dH1maW5hbGx5e3RyeXtufHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKG8pdGhyb3cgcn19cmV0dXJuIGl9KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIil9KCl9ZnVuY3Rpb24gRW8odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgZT0wLGk9bmV3IEFycmF5KHQubGVuZ3RoKTtlPHQubGVuZ3RoO2UrKylpW2VdPXRbZV07cmV0dXJuIGl9fSh0KXx8ZnVuY3Rpb24odCl7aWYoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4gQXJyYXkuZnJvbSh0KX0odCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfXZhciBSbz00O3RyeXt2YXIgTm89dC5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvci5WRVJTSU9OO3ZvaWQgMCE9PU5vJiYoUm89cGFyc2VJbnQoTm8sMTApKX1jYXRjaCh0KXt9dmFyIGpvPXszOntpY29uc1ByZWZpeDpcImdseXBoaWNvblwiLGljb25zOntwYWdpbmF0aW9uU3dpdGNoRG93bjpcImdseXBoaWNvbi1jb2xsYXBzZS1kb3duIGljb24tY2hldnJvbi1kb3duXCIscGFnaW5hdGlvblN3aXRjaFVwOlwiZ2x5cGhpY29uLWNvbGxhcHNlLXVwIGljb24tY2hldnJvbi11cFwiLHJlZnJlc2g6XCJnbHlwaGljb24tcmVmcmVzaCBpY29uLXJlZnJlc2hcIix0b2dnbGVPZmY6XCJnbHlwaGljb24tbGlzdC1hbHQgaWNvbi1saXN0LWFsdFwiLHRvZ2dsZU9uOlwiZ2x5cGhpY29uLWxpc3QtYWx0IGljb24tbGlzdC1hbHRcIixjb2x1bW5zOlwiZ2x5cGhpY29uLXRoIGljb24tdGhcIixkZXRhaWxPcGVuOlwiZ2x5cGhpY29uLXBsdXMgaWNvbi1wbHVzXCIsZGV0YWlsQ2xvc2U6XCJnbHlwaGljb24tbWludXMgaWNvbi1taW51c1wiLGZ1bGxzY3JlZW46XCJnbHlwaGljb24tZnVsbHNjcmVlblwiLHNlYXJjaDpcImdseXBoaWNvbi1zZWFyY2hcIixjbGVhclNlYXJjaDpcImdseXBoaWNvbi10cmFzaFwifSxjbGFzc2VzOntidXR0b25zUHJlZml4OlwiYnRuXCIsYnV0dG9uczpcImRlZmF1bHRcIixidXR0b25zR3JvdXA6XCJidG4tZ3JvdXBcIixidXR0b25zRHJvcGRvd246XCJidG4tZ3JvdXBcIixwdWxsOlwicHVsbFwiLGlucHV0R3JvdXA6XCJpbnB1dC1ncm91cFwiLGlucHV0UHJlZml4OlwiaW5wdXQtXCIsaW5wdXQ6XCJmb3JtLWNvbnRyb2xcIixwYWdpbmF0aW9uRHJvcGRvd246XCJidG4tZ3JvdXAgZHJvcGRvd25cIixkcm9wdXA6XCJkcm9wdXBcIixkcm9wZG93bkFjdGl2ZTpcImFjdGl2ZVwiLHBhZ2luYXRpb25BY3RpdmU6XCJhY3RpdmVcIixidXR0b25BY3RpdmU6XCJhY3RpdmVcIn0saHRtbDp7dG9vbGJhckRyb3Bkb3duOlsnPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+JyxcIjwvdWw+XCJdLHRvb2xiYXJEcm9wZG93bkl0ZW06JzxsaSByb2xlPVwibWVudWl0ZW1cIj48bGFiZWw+JXM8L2xhYmVsPjwvbGk+Jyx0b29sYmFyRHJvcGRvd25TZXBhcmF0b3I6JzxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPicscGFnZURyb3Bkb3duOlsnPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+JyxcIjwvdWw+XCJdLHBhZ2VEcm9wZG93bkl0ZW06JzxsaSByb2xlPVwibWVudWl0ZW1cIiBjbGFzcz1cIiVzXCI+PGEgaHJlZj1cIiNcIj4lczwvYT48L2xpPicsZHJvcGRvd25DYXJldDonPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj4nLHBhZ2luYXRpb246Wyc8dWwgY2xhc3M9XCJwYWdpbmF0aW9uJXNcIj4nLFwiPC91bD5cIl0scGFnaW5hdGlvbkl0ZW06JzxsaSBjbGFzcz1cInBhZ2UtaXRlbSVzXCI+PGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBhcmlhLWxhYmVsPVwiJXNcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+JXM8L2E+PC9saT4nLGljb246JzxpIGNsYXNzPVwiJXMgJXNcIj48L2k+JyxpbnB1dEdyb3VwOic8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj4lczxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+JXM8L3NwYW4+PC9kaXY+JyxzZWFyY2hJbnB1dDonPGlucHV0IGNsYXNzPVwiJXMlc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIlc1wiPicsc2VhcmNoQnV0dG9uOic8YnV0dG9uIGNsYXNzPVwiJXNcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInNlYXJjaFwiIHRpdGxlPVwiJXNcIj4lcyAlczwvYnV0dG9uPicsc2VhcmNoQ2xlYXJCdXR0b246JzxidXR0b24gY2xhc3M9XCIlc1wiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiY2xlYXJTZWFyY2hcIiB0aXRsZT1cIiVzXCI+JXMgJXM8L2J1dHRvbj4nfX0sNDp7aWNvbnNQcmVmaXg6XCJmYVwiLGljb25zOntwYWdpbmF0aW9uU3dpdGNoRG93bjpcImZhLWNhcmV0LXNxdWFyZS1kb3duXCIscGFnaW5hdGlvblN3aXRjaFVwOlwiZmEtY2FyZXQtc3F1YXJlLXVwXCIscmVmcmVzaDpcImZhLXN5bmNcIix0b2dnbGVPZmY6XCJmYS10b2dnbGUtb2ZmXCIsdG9nZ2xlT246XCJmYS10b2dnbGUtb25cIixjb2x1bW5zOlwiZmEtdGgtbGlzdFwiLGRldGFpbE9wZW46XCJmYS1wbHVzXCIsZGV0YWlsQ2xvc2U6XCJmYS1taW51c1wiLGZ1bGxzY3JlZW46XCJmYS1hcnJvd3MtYWx0XCIsc2VhcmNoOlwiZmEtc2VhcmNoXCIsY2xlYXJTZWFyY2g6XCJmYS10cmFzaFwifSxjbGFzc2VzOntidXR0b25zUHJlZml4OlwiYnRuXCIsYnV0dG9uczpcInNlY29uZGFyeVwiLGJ1dHRvbnNHcm91cDpcImJ0bi1ncm91cFwiLGJ1dHRvbnNEcm9wZG93bjpcImJ0bi1ncm91cFwiLHB1bGw6XCJmbG9hdFwiLGlucHV0R3JvdXA6XCJidG4tZ3JvdXBcIixpbnB1dFByZWZpeDpcImZvcm0tY29udHJvbC1cIixpbnB1dDpcImZvcm0tY29udHJvbFwiLHBhZ2luYXRpb25Ecm9wZG93bjpcImJ0bi1ncm91cCBkcm9wZG93blwiLGRyb3B1cDpcImRyb3B1cFwiLGRyb3Bkb3duQWN0aXZlOlwiYWN0aXZlXCIscGFnaW5hdGlvbkFjdGl2ZTpcImFjdGl2ZVwiLGJ1dHRvbkFjdGl2ZTpcImFjdGl2ZVwifSxodG1sOnt0b29sYmFyRHJvcGRvd246Wyc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+JyxcIjwvZGl2PlwiXSx0b29sYmFyRHJvcGRvd25JdGVtOic8bGFiZWwgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+JXM8L2xhYmVsPicscGFnZURyb3Bkb3duOlsnPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj4nLFwiPC9kaXY+XCJdLHBhZ2VEcm9wZG93bkl0ZW06JzxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSAlc1wiIGhyZWY9XCIjXCI+JXM8L2E+Jyx0b29sYmFyRHJvcGRvd25TZXBhcmF0b3I6JzxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+Jyxkcm9wZG93bkNhcmV0Oic8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPicscGFnaW5hdGlvbjpbJzx1bCBjbGFzcz1cInBhZ2luYXRpb24lc1wiPicsXCI8L3VsPlwiXSxwYWdpbmF0aW9uSXRlbTonPGxpIGNsYXNzPVwicGFnZS1pdGVtJXNcIj48YSBjbGFzcz1cInBhZ2UtbGlua1wiIGFyaWEtbGFiZWw9XCIlc1wiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj4lczwvYT48L2xpPicsaWNvbjonPGkgY2xhc3M9XCIlcyAlc1wiPjwvaT4nLGlucHV0R3JvdXA6JzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiVzPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPiVzPC9kaXY+PC9kaXY+JyxzZWFyY2hJbnB1dDonPGlucHV0IGNsYXNzPVwiJXMlc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIlc1wiPicsc2VhcmNoQnV0dG9uOic8YnV0dG9uIGNsYXNzPVwiJXNcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInNlYXJjaFwiIHRpdGxlPVwiJXNcIj4lcyAlczwvYnV0dG9uPicsc2VhcmNoQ2xlYXJCdXR0b246JzxidXR0b24gY2xhc3M9XCIlc1wiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiY2xlYXJTZWFyY2hcIiB0aXRsZT1cIiVzXCI+JXMgJXM8L2J1dHRvbj4nfX19W1JvXSxGbz17aGVpZ2h0OnZvaWQgMCxjbGFzc2VzOlwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXJcIix0aGVhZENsYXNzZXM6XCJcIixyb3dTdHlsZTpmdW5jdGlvbih0LGUpe3JldHVybnt9fSxyb3dBdHRyaWJ1dGVzOmZ1bmN0aW9uKHQsZSl7cmV0dXJue319LHVuZGVmaW5lZFRleHQ6XCItXCIsbG9jYWxlOnZvaWQgMCx2aXJ0dWFsU2Nyb2xsOiExLHZpcnR1YWxTY3JvbGxJdGVtSGVpZ2h0OnZvaWQgMCxzb3J0YWJsZTohMCxzb3J0Q2xhc3M6dm9pZCAwLHNpbGVudFNvcnQ6ITAsc29ydE5hbWU6dm9pZCAwLHNvcnRPcmRlcjpcImFzY1wiLHNvcnRTdGFibGU6ITEscmVtZW1iZXJPcmRlcjohMSxjdXN0b21Tb3J0OnZvaWQgMCxjb2x1bW5zOltbXV0sZGF0YTpbXSx1cmw6dm9pZCAwLG1ldGhvZDpcImdldFwiLGNhY2hlOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24vanNvblwiLGRhdGFUeXBlOlwianNvblwiLGFqYXg6dm9pZCAwLGFqYXhPcHRpb25zOnt9LHF1ZXJ5UGFyYW1zOmZ1bmN0aW9uKHQpe3JldHVybiB0fSxxdWVyeVBhcmFtc1R5cGU6XCJsaW1pdFwiLHJlc3BvbnNlSGFuZGxlcjpmdW5jdGlvbih0KXtyZXR1cm4gdH0sdG90YWxGaWVsZDpcInRvdGFsXCIsdG90YWxOb3RGaWx0ZXJlZEZpZWxkOlwidG90YWxOb3RGaWx0ZXJlZFwiLGRhdGFGaWVsZDpcInJvd3NcIixwYWdpbmF0aW9uOiExLG9ubHlJbmZvUGFnaW5hdGlvbjohMSxzaG93RXh0ZW5kZWRQYWdpbmF0aW9uOiExLHBhZ2luYXRpb25Mb29wOiEwLHNpZGVQYWdpbmF0aW9uOlwiY2xpZW50XCIsdG90YWxSb3dzOjAsdG90YWxOb3RGaWx0ZXJlZDowLHBhZ2VOdW1iZXI6MSxwYWdlU2l6ZToxMCxwYWdlTGlzdDpbMTAsMjUsNTAsMTAwXSxwYWdpbmF0aW9uSEFsaWduOlwicmlnaHRcIixwYWdpbmF0aW9uVkFsaWduOlwiYm90dG9tXCIscGFnaW5hdGlvbkRldGFpbEhBbGlnbjpcImxlZnRcIixwYWdpbmF0aW9uUHJlVGV4dDpcIiZsc2FxdW87XCIscGFnaW5hdGlvbk5leHRUZXh0OlwiJnJzYXF1bztcIixwYWdpbmF0aW9uU3VjY2Vzc2l2ZWx5U2l6ZTo1LHBhZ2luYXRpb25QYWdlc0J5U2lkZToxLHBhZ2luYXRpb25Vc2VJbnRlcm1lZGlhdGU6ITEsc2VhcmNoOiExLHNlYXJjaE9uRW50ZXJLZXk6ITEsc3RyaWN0U2VhcmNoOiExLHZpc2libGVTZWFyY2g6ITEsc2hvd0J1dHRvbkljb25zOiEwLHNob3dCdXR0b25UZXh0OiExLHNob3dTZWFyY2hCdXR0b246ITEsc2hvd1NlYXJjaENsZWFyQnV0dG9uOiExLHRyaW1PblNlYXJjaDohMCxzZWFyY2hBbGlnbjpcInJpZ2h0XCIsc2VhcmNoVGltZU91dDo1MDAsc2VhcmNoVGV4dDpcIlwiLGN1c3RvbVNlYXJjaDp2b2lkIDAsc2hvd0hlYWRlcjohMCxzaG93Rm9vdGVyOiExLGZvb3RlclN0eWxlOmZ1bmN0aW9uKHQsZSl7cmV0dXJue319LHNob3dDb2x1bW5zOiExLHNob3dDb2x1bW5zVG9nZ2xlQWxsOiExLG1pbmltdW1Db3VudENvbHVtbnM6MSxzaG93UGFnaW5hdGlvblN3aXRjaDohMSxzaG93UmVmcmVzaDohMSxzaG93VG9nZ2xlOiExLHNob3dGdWxsc2NyZWVuOiExLHNtYXJ0RGlzcGxheTohMCxlc2NhcGU6ITEsZmlsdGVyT3B0aW9uczp7ZmlsdGVyQWxnb3JpdGhtOlwiYW5kXCJ9LGlkRmllbGQ6dm9pZCAwLHNlbGVjdEl0ZW1OYW1lOlwiYnRTZWxlY3RJdGVtXCIsY2xpY2tUb1NlbGVjdDohMSxpZ25vcmVDbGlja1RvU2VsZWN0T246ZnVuY3Rpb24odCl7dmFyIGU9dC50YWdOYW1lO3JldHVybltcIkFcIixcIkJVVFRPTlwiXS5pbmNsdWRlcyhlKX0sc2luZ2xlU2VsZWN0OiExLGNoZWNrYm94SGVhZGVyOiEwLG1haW50YWluTWV0YURhdGE6ITEsbXVsdGlwbGVTZWxlY3RSb3c6ITEsdW5pcXVlSWQ6dm9pZCAwLGNhcmRWaWV3OiExLGRldGFpbFZpZXc6ITEsZGV0YWlsVmlld0ljb246ITAsZGV0YWlsVmlld0J5Q2xpY2s6ITEsZGV0YWlsRm9ybWF0dGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJcIn0sZGV0YWlsRmlsdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuITB9LHRvb2xiYXI6dm9pZCAwLHRvb2xiYXJBbGlnbjpcImxlZnRcIixidXR0b25zVG9vbGJhcjp2b2lkIDAsYnV0dG9uc0FsaWduOlwicmlnaHRcIixidXR0b25zUHJlZml4OmpvLmNsYXNzZXMuYnV0dG9uc1ByZWZpeCxidXR0b25zQ2xhc3M6am8uY2xhc3Nlcy5idXR0b25zLGljb25zOmpvLmljb25zLGh0bWw6am8uaHRtbCxpY29uU2l6ZTp2b2lkIDAsaWNvbnNQcmVmaXg6am8uaWNvbnNQcmVmaXgsb25BbGw6ZnVuY3Rpb24odCxlKXtyZXR1cm4hMX0sb25DbGlja0NlbGw6ZnVuY3Rpb24odCxlLGksbil7cmV0dXJuITF9LG9uRGJsQ2xpY2tDZWxsOmZ1bmN0aW9uKHQsZSxpLG4pe3JldHVybiExfSxvbkNsaWNrUm93OmZ1bmN0aW9uKHQsZSl7cmV0dXJuITF9LG9uRGJsQ2xpY2tSb3c6ZnVuY3Rpb24odCxlKXtyZXR1cm4hMX0sb25Tb3J0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuITF9LG9uQ2hlY2s6ZnVuY3Rpb24odCl7cmV0dXJuITF9LG9uVW5jaGVjazpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25DaGVja0FsbDpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25VbmNoZWNrQWxsOmZ1bmN0aW9uKHQpe3JldHVybiExfSxvbkNoZWNrU29tZTpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25VbmNoZWNrU29tZTpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25Mb2FkU3VjY2VzczpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25Mb2FkRXJyb3I6ZnVuY3Rpb24odCl7cmV0dXJuITF9LG9uQ29sdW1uU3dpdGNoOmZ1bmN0aW9uKHQsZSl7cmV0dXJuITF9LG9uUGFnZUNoYW5nZTpmdW5jdGlvbih0LGUpe3JldHVybiExfSxvblNlYXJjaDpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25Ub2dnbGU6ZnVuY3Rpb24odCl7cmV0dXJuITF9LG9uUHJlQm9keTpmdW5jdGlvbih0KXtyZXR1cm4hMX0sb25Qb3N0Qm9keTpmdW5jdGlvbigpe3JldHVybiExfSxvblBvc3RIZWFkZXI6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sb25Qb3N0Rm9vdGVyOmZ1bmN0aW9uKCl7cmV0dXJuITF9LG9uRXhwYW5kUm93OmZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4hMX0sb25Db2xsYXBzZVJvdzpmdW5jdGlvbih0LGUpe3JldHVybiExfSxvblJlZnJlc2hPcHRpb25zOmZ1bmN0aW9uKHQpe3JldHVybiExfSxvblJlZnJlc2g6ZnVuY3Rpb24odCl7cmV0dXJuITF9LG9uUmVzZXRWaWV3OmZ1bmN0aW9uKCl7cmV0dXJuITF9LG9uU2Nyb2xsQm9keTpmdW5jdGlvbigpe3JldHVybiExfX0sX289e2Zvcm1hdExvYWRpbmdNZXNzYWdlOmZ1bmN0aW9uKCl7cmV0dXJuXCJMb2FkaW5nLCBwbGVhc2Ugd2FpdFwifSxmb3JtYXRSZWNvcmRzUGVyUGFnZTpmdW5jdGlvbih0KXtyZXR1cm5cIlwiLmNvbmNhdCh0LFwiIHJvd3MgcGVyIHBhZ2VcIil9LGZvcm1hdFNob3dpbmdSb3dzOmZ1bmN0aW9uKHQsZSxpLG4pe3JldHVybiB2b2lkIDAhPT1uJiZuPjAmJm4+aT9cIlNob3dpbmcgXCIuY29uY2F0KHQsXCIgdG8gXCIpLmNvbmNhdChlLFwiIG9mIFwiKS5jb25jYXQoaSxcIiByb3dzIChmaWx0ZXJlZCBmcm9tIFwiKS5jb25jYXQobixcIiB0b3RhbCByb3dzKVwiKTpcIlNob3dpbmcgXCIuY29uY2F0KHQsXCIgdG8gXCIpLmNvbmNhdChlLFwiIG9mIFwiKS5jb25jYXQoaSxcIiByb3dzXCIpfSxmb3JtYXRTUlBhZ2luYXRpb25QcmVUZXh0OmZ1bmN0aW9uKCl7cmV0dXJuXCJwcmV2aW91cyBwYWdlXCJ9LGZvcm1hdFNSUGFnaW5hdGlvblBhZ2VUZXh0OmZ1bmN0aW9uKHQpe3JldHVyblwidG8gcGFnZSBcIi5jb25jYXQodCl9LGZvcm1hdFNSUGFnaW5hdGlvbk5leHRUZXh0OmZ1bmN0aW9uKCl7cmV0dXJuXCJuZXh0IHBhZ2VcIn0sZm9ybWF0RGV0YWlsUGFnaW5hdGlvbjpmdW5jdGlvbih0KXtyZXR1cm5cIlNob3dpbmcgXCIuY29uY2F0KHQsXCIgcm93c1wiKX0sZm9ybWF0U2VhcmNoOmZ1bmN0aW9uKCl7cmV0dXJuXCJTZWFyY2hcIn0sZm9ybWF0Q2xlYXJTZWFyY2g6ZnVuY3Rpb24oKXtyZXR1cm5cIkNsZWFyIFNlYXJjaFwifSxmb3JtYXROb01hdGNoZXM6ZnVuY3Rpb24oKXtyZXR1cm5cIk5vIG1hdGNoaW5nIHJlY29yZHMgZm91bmRcIn0sZm9ybWF0UGFnaW5hdGlvblN3aXRjaDpmdW5jdGlvbigpe3JldHVyblwiSGlkZS9TaG93IHBhZ2luYXRpb25cIn0sZm9ybWF0UGFnaW5hdGlvblN3aXRjaERvd246ZnVuY3Rpb24oKXtyZXR1cm5cIlNob3cgcGFnaW5hdGlvblwifSxmb3JtYXRQYWdpbmF0aW9uU3dpdGNoVXA6ZnVuY3Rpb24oKXtyZXR1cm5cIkhpZGUgcGFnaW5hdGlvblwifSxmb3JtYXRSZWZyZXNoOmZ1bmN0aW9uKCl7cmV0dXJuXCJSZWZyZXNoXCJ9LGZvcm1hdFRvZ2dsZTpmdW5jdGlvbigpe3JldHVyblwiVG9nZ2xlXCJ9LGZvcm1hdFRvZ2dsZU9uOmZ1bmN0aW9uKCl7cmV0dXJuXCJTaG93IGNhcmQgdmlld1wifSxmb3JtYXRUb2dnbGVPZmY6ZnVuY3Rpb24oKXtyZXR1cm5cIkhpZGUgY2FyZCB2aWV3XCJ9LGZvcm1hdENvbHVtbnM6ZnVuY3Rpb24oKXtyZXR1cm5cIkNvbHVtbnNcIn0sZm9ybWF0Q29sdW1uc1RvZ2dsZUFsbDpmdW5jdGlvbigpe3JldHVyblwiVG9nZ2xlIGFsbFwifSxmb3JtYXRGdWxsc2NyZWVuOmZ1bmN0aW9uKCl7cmV0dXJuXCJGdWxsc2NyZWVuXCJ9LGZvcm1hdEFsbFJvd3M6ZnVuY3Rpb24oKXtyZXR1cm5cIkFsbFwifX0sVm89e2ZpZWxkOnZvaWQgMCx0aXRsZTp2b2lkIDAsdGl0bGVUb29sdGlwOnZvaWQgMCxjbGFzczp2b2lkIDAsd2lkdGg6dm9pZCAwLHdpZHRoVW5pdDpcInB4XCIscm93c3Bhbjp2b2lkIDAsY29sc3Bhbjp2b2lkIDAsYWxpZ246dm9pZCAwLGhhbGlnbjp2b2lkIDAsZmFsaWduOnZvaWQgMCx2YWxpZ246dm9pZCAwLGNlbGxTdHlsZTp2b2lkIDAscmFkaW86ITEsY2hlY2tib3g6ITEsY2hlY2tib3hFbmFibGVkOiEwLGNsaWNrVG9TZWxlY3Q6ITAsc2hvd1NlbGVjdFRpdGxlOiExLHNvcnRhYmxlOiExLHNvcnROYW1lOnZvaWQgMCxvcmRlcjpcImFzY1wiLHNvcnRlcjp2b2lkIDAsdmlzaWJsZTohMCxzd2l0Y2hhYmxlOiEwLGNhcmRWaXNpYmxlOiEwLHNlYXJjaGFibGU6ITAsZm9ybWF0dGVyOnZvaWQgMCxmb290ZXJGb3JtYXR0ZXI6dm9pZCAwLGRldGFpbEZvcm1hdHRlcjp2b2lkIDAsc2VhcmNoRm9ybWF0dGVyOiEwLGVzY2FwZTohMSxldmVudHM6dm9pZCAwfTtPYmplY3QuYXNzaWduKEZvLF9vKTt2YXIgQm89e1ZFUlNJT046XCIxLjE1LjVcIixUSEVNRTpcImJvb3RzdHJhcFwiLmNvbmNhdChSbyksQ09OU1RBTlRTOmpvLERFRkFVTFRTOkZvLENPTFVNTl9ERUZBVUxUUzpWbyxNRVRIT0RTOltcImdldE9wdGlvbnNcIixcInJlZnJlc2hPcHRpb25zXCIsXCJnZXREYXRhXCIsXCJnZXRTZWxlY3Rpb25zXCIsXCJnZXRBbGxTZWxlY3Rpb25zXCIsXCJsb2FkXCIsXCJhcHBlbmRcIixcInByZXBlbmRcIixcInJlbW92ZVwiLFwicmVtb3ZlQWxsXCIsXCJpbnNlcnRSb3dcIixcInVwZGF0ZVJvd1wiLFwiZ2V0Um93QnlVbmlxdWVJZFwiLFwidXBkYXRlQnlVbmlxdWVJZFwiLFwicmVtb3ZlQnlVbmlxdWVJZFwiLFwidXBkYXRlQ2VsbFwiLFwidXBkYXRlQ2VsbEJ5VW5pcXVlSWRcIixcInNob3dSb3dcIixcImhpZGVSb3dcIixcImdldEhpZGRlblJvd3NcIixcInNob3dDb2x1bW5cIixcImhpZGVDb2x1bW5cIixcImdldFZpc2libGVDb2x1bW5zXCIsXCJnZXRIaWRkZW5Db2x1bW5zXCIsXCJzaG93QWxsQ29sdW1uc1wiLFwiaGlkZUFsbENvbHVtbnNcIixcIm1lcmdlQ2VsbHNcIixcImNoZWNrQWxsXCIsXCJ1bmNoZWNrQWxsXCIsXCJjaGVja0ludmVydFwiLFwiY2hlY2tcIixcInVuY2hlY2tcIixcImNoZWNrQnlcIixcInVuY2hlY2tCeVwiLFwicmVmcmVzaFwiLFwiZGVzdHJveVwiLFwicmVzZXRWaWV3XCIsXCJyZXNldFdpZHRoXCIsXCJzaG93TG9hZGluZ1wiLFwiaGlkZUxvYWRpbmdcIixcInRvZ2dsZVBhZ2luYXRpb25cIixcInRvZ2dsZUZ1bGxzY3JlZW5cIixcInRvZ2dsZVZpZXdcIixcInJlc2V0U2VhcmNoXCIsXCJmaWx0ZXJCeVwiLFwic2Nyb2xsVG9cIixcImdldFNjcm9sbFBvc2l0aW9uXCIsXCJzZWxlY3RQYWdlXCIsXCJwcmV2UGFnZVwiLFwibmV4dFBhZ2VcIixcInRvZ2dsZURldGFpbFZpZXdcIixcImV4cGFuZFJvd1wiLFwiY29sbGFwc2VSb3dcIixcImV4cGFuZEFsbFJvd3NcIixcImNvbGxhcHNlQWxsUm93c1wiLFwidXBkYXRlQ29sdW1uVGl0bGVcIixcInVwZGF0ZUZvcm1hdFRleHRcIl0sRVZFTlRTOntcImFsbC5icy50YWJsZVwiOlwib25BbGxcIixcImNsaWNrLXJvdy5icy50YWJsZVwiOlwib25DbGlja1Jvd1wiLFwiZGJsLWNsaWNrLXJvdy5icy50YWJsZVwiOlwib25EYmxDbGlja1Jvd1wiLFwiY2xpY2stY2VsbC5icy50YWJsZVwiOlwib25DbGlja0NlbGxcIixcImRibC1jbGljay1jZWxsLmJzLnRhYmxlXCI6XCJvbkRibENsaWNrQ2VsbFwiLFwic29ydC5icy50YWJsZVwiOlwib25Tb3J0XCIsXCJjaGVjay5icy50YWJsZVwiOlwib25DaGVja1wiLFwidW5jaGVjay5icy50YWJsZVwiOlwib25VbmNoZWNrXCIsXCJjaGVjay1hbGwuYnMudGFibGVcIjpcIm9uQ2hlY2tBbGxcIixcInVuY2hlY2stYWxsLmJzLnRhYmxlXCI6XCJvblVuY2hlY2tBbGxcIixcImNoZWNrLXNvbWUuYnMudGFibGVcIjpcIm9uQ2hlY2tTb21lXCIsXCJ1bmNoZWNrLXNvbWUuYnMudGFibGVcIjpcIm9uVW5jaGVja1NvbWVcIixcImxvYWQtc3VjY2Vzcy5icy50YWJsZVwiOlwib25Mb2FkU3VjY2Vzc1wiLFwibG9hZC1lcnJvci5icy50YWJsZVwiOlwib25Mb2FkRXJyb3JcIixcImNvbHVtbi1zd2l0Y2guYnMudGFibGVcIjpcIm9uQ29sdW1uU3dpdGNoXCIsXCJwYWdlLWNoYW5nZS5icy50YWJsZVwiOlwib25QYWdlQ2hhbmdlXCIsXCJzZWFyY2guYnMudGFibGVcIjpcIm9uU2VhcmNoXCIsXCJ0b2dnbGUuYnMudGFibGVcIjpcIm9uVG9nZ2xlXCIsXCJwcmUtYm9keS5icy50YWJsZVwiOlwib25QcmVCb2R5XCIsXCJwb3N0LWJvZHkuYnMudGFibGVcIjpcIm9uUG9zdEJvZHlcIixcInBvc3QtaGVhZGVyLmJzLnRhYmxlXCI6XCJvblBvc3RIZWFkZXJcIixcInBvc3QtZm9vdGVyLmJzLnRhYmxlXCI6XCJvblBvc3RGb290ZXJcIixcImV4cGFuZC1yb3cuYnMudGFibGVcIjpcIm9uRXhwYW5kUm93XCIsXCJjb2xsYXBzZS1yb3cuYnMudGFibGVcIjpcIm9uQ29sbGFwc2VSb3dcIixcInJlZnJlc2gtb3B0aW9ucy5icy50YWJsZVwiOlwib25SZWZyZXNoT3B0aW9uc1wiLFwicmVzZXQtdmlldy5icy50YWJsZVwiOlwib25SZXNldFZpZXdcIixcInJlZnJlc2guYnMudGFibGVcIjpcIm9uUmVmcmVzaFwiLFwic2Nyb2xsLWJvZHkuYnMudGFibGVcIjpcIm9uU2Nyb2xsQm9keVwifSxMT0NBTEVTOntlbjpfbyxcImVuLVVTXCI6X299fSxMbz1mdW5jdGlvbih0LGUsaSxuLG8scixhLHMpe2Zvcih2YXIgbCxjPW8saD0wLHU9ISFhJiZ0ZShhLHMsMyk7aDxuOyl7aWYoaCBpbiBpKXtpZihsPXU/dShpW2hdLGgsZSk6aVtoXSxyPjAmJkV0KGwpKWM9TG8odCxlLGwsc3QobC5sZW5ndGgpLGMsci0xKS0xO2Vsc2V7aWYoYz49OTAwNzE5OTI1NDc0MDk5MSl0aHJvdyBUeXBlRXJyb3IoXCJFeGNlZWQgdGhlIGFjY2VwdGFibGUgYXJyYXkgbGVuZ3RoXCIpO3RbY109bH1jKyt9aCsrfXJldHVybiBjfSxEbz1MbztJdCh7dGFyZ2V0OlwiQXJyYXlcIixwcm90bzohMH0se2ZsYXQ6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1swXTp2b2lkIDAsZT1SdCh0aGlzKSxpPXN0KGUubGVuZ3RoKSxuPWllKGUsMCk7cmV0dXJuIG4ubGVuZ3RoPURvKG4sZSxlLGksMCx2b2lkIDA9PT10PzE6cnQodCkpLG59fSksWmUoXCJmbGF0XCIpO3ZhciBIbz1jKChmdW5jdGlvbigpe050KDEpfSkpO0l0KHt0YXJnZXQ6XCJPYmplY3RcIixzdGF0OiEwLGZvcmNlZDpIb30se2tleXM6ZnVuY3Rpb24odCl7cmV0dXJuIE50KFJ0KHQpKX19KTt2YXIgTW89e3NwcmludGY6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkoZT4xP2UtMTowKSxuPTE7bjxlO24rKylpW24tMV09YXJndW1lbnRzW25dO3ZhciBvPSEwLHI9MCxhPXQucmVwbGFjZSgvJXMvZywoZnVuY3Rpb24oKXt2YXIgdD1pW3IrK107cmV0dXJuIHZvaWQgMD09PXQ/KG89ITEsXCJcIik6dH0pKTtyZXR1cm4gbz9hOlwiXCJ9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307cmV0dXJuIDA9PT1PYmplY3QuZW50cmllcyh0KS5sZW5ndGgmJnQuY29uc3RydWN0b3I9PT1PYmplY3R9LGlzTnVtZXJpYzpmdW5jdGlvbih0KXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdCh0KSkmJmlzRmluaXRlKHQpfSxnZXRGaWVsZFRpdGxlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9ITAsbj0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciByLGE9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShpPShyPWEubmV4dCgpKS5kb25lKTtpPSEwKXt2YXIgcz1yLnZhbHVlO2lmKHMuZmllbGQ9PT1lKXJldHVybiBzLnRpdGxlfX1jYXRjaCh0KXtuPSEwLG89dH1maW5hbGx5e3RyeXtpfHxudWxsPT1hLnJldHVybnx8YS5yZXR1cm4oKX1maW5hbGx5e2lmKG4pdGhyb3cgb319cmV0dXJuXCJcIn0sc2V0RmllbGRJbmRleDpmdW5jdGlvbih0KXt2YXIgZT0wLGk9W10sbj0hMCxvPSExLHI9dm9pZCAwO3RyeXtmb3IodmFyIGEscz10WzBdW1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KGE9cy5uZXh0KCkpLmRvbmUpO249ITApe2UrPWEudmFsdWUuY29sc3Bhbnx8MX19Y2F0Y2godCl7bz0hMCxyPXR9ZmluYWxseXt0cnl7bnx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IHJ9fWZvcih2YXIgbD0wO2w8dC5sZW5ndGg7bCsrKXtpW2xdPVtdO2Zvcih2YXIgYz0wO2M8ZTtjKyspaVtsXVtjXT0hMX1mb3IodmFyIGg9MDtoPHQubGVuZ3RoO2grKyl7dmFyIHU9ITAsZD0hMSxmPXZvaWQgMDt0cnl7Zm9yKHZhciBwLGc9dFtoXVtTeW1ib2wuaXRlcmF0b3JdKCk7ISh1PShwPWcubmV4dCgpKS5kb25lKTt1PSEwKXt2YXIgdj1wLnZhbHVlLGI9di5yb3dzcGFufHwxLHk9di5jb2xzcGFufHwxLG09aVtoXS5pbmRleE9mKCExKTt2LmNvbHNwYW5JbmRleD1tLDE9PT15Pyh2LmZpZWxkSW5kZXg9bSx2b2lkIDA9PT12LmZpZWxkJiYodi5maWVsZD1tKSk6di5jb2xzcGFuR3JvdXA9di5jb2xzcGFuO2Zvcih2YXIgdz0wO3c8Yjt3KyspaVtoK3ddW21dPSEwO2Zvcih2YXIgUz0wO1M8eTtTKyspaVtoXVttK1NdPSEwfX1jYXRjaCh0KXtkPSEwLGY9dH1maW5hbGx5e3RyeXt1fHxudWxsPT1nLnJldHVybnx8Zy5yZXR1cm4oKX1maW5hbGx5e2lmKGQpdGhyb3cgZn19fX0sdXBkYXRlRmllbGRHcm91cDpmdW5jdGlvbih0KXt2YXIgZT10LmZsYXQoKSxpPSEwLG49ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgcixhPXRbU3ltYm9sLml0ZXJhdG9yXSgpOyEoaT0ocj1hLm5leHQoKSkuZG9uZSk7aT0hMCl7dmFyIHM9ci52YWx1ZSxsPSEwLGM9ITEsaD12b2lkIDA7dHJ5e2Zvcih2YXIgdSxkPXNbU3ltYm9sLml0ZXJhdG9yXSgpOyEobD0odT1kLm5leHQoKSkuZG9uZSk7bD0hMCl7dmFyIGY9dS52YWx1ZTtpZihmLmNvbHNwYW5Hcm91cD4xKXtmb3IodmFyIHA9MCxnPWZ1bmN0aW9uKHQpe2UuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZmllbGRJbmRleD09PXR9KSkudmlzaWJsZSYmcCsrfSx2PWYuY29sc3BhbkluZGV4O3Y8Zi5jb2xzcGFuSW5kZXgrZi5jb2xzcGFuR3JvdXA7disrKWcodik7Zi5jb2xzcGFuPXAsZi52aXNpYmxlPXA+MH19fWNhdGNoKHQpe2M9ITAsaD10fWZpbmFsbHl7dHJ5e2x8fG51bGw9PWQucmV0dXJufHxkLnJldHVybigpfWZpbmFsbHl7aWYoYyl0aHJvdyBofX19fWNhdGNoKHQpe249ITAsbz10fWZpbmFsbHl7dHJ5e2l8fG51bGw9PWEucmV0dXJufHxhLnJldHVybigpfWZpbmFsbHl7aWYobil0aHJvdyBvfX19LGdldFNjcm9sbEJhcldpZHRoOmZ1bmN0aW9uKCl7aWYodm9pZCAwPT09dGhpcy5jYWNoZWRXaWR0aCl7dmFyIGU9dChcIjxkaXYvPlwiKS5hZGRDbGFzcyhcImZpeGVkLXRhYmxlLXNjcm9sbC1pbm5lclwiKSxpPXQoXCI8ZGl2Lz5cIikuYWRkQ2xhc3MoXCJmaXhlZC10YWJsZS1zY3JvbGwtb3V0ZXJcIik7aS5hcHBlbmQoZSksdChcImJvZHlcIikuYXBwZW5kKGkpO3ZhciBuPWVbMF0ub2Zmc2V0V2lkdGg7aS5jc3MoXCJvdmVyZmxvd1wiLFwic2Nyb2xsXCIpO3ZhciBvPWVbMF0ub2Zmc2V0V2lkdGg7bj09PW8mJihvPWlbMF0uY2xpZW50V2lkdGgpLGkucmVtb3ZlKCksdGhpcy5jYWNoZWRXaWR0aD1uLW99cmV0dXJuIHRoaXMuY2FjaGVkV2lkdGh9LGNhbGN1bGF0ZU9iamVjdFZhbHVlOmZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBvPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciByPWUuc3BsaXQoXCIuXCIpO2lmKHIubGVuZ3RoPjEpe289d2luZG93O3ZhciBhPSEwLHM9ITEsbD12b2lkIDA7dHJ5e2Zvcih2YXIgYyxoPXJbU3ltYm9sLml0ZXJhdG9yXSgpOyEoYT0oYz1oLm5leHQoKSkuZG9uZSk7YT0hMCl7bz1vW2MudmFsdWVdfX1jYXRjaCh0KXtzPSEwLGw9dH1maW5hbGx5e3RyeXthfHxudWxsPT1oLnJldHVybnx8aC5yZXR1cm4oKX1maW5hbGx5e2lmKHMpdGhyb3cgbH19fWVsc2Ugbz13aW5kb3dbZV19cmV0dXJuIG51bGwhPT1vJiZcIm9iamVjdFwiPT09Q28obyk/bzpcImZ1bmN0aW9uXCI9PXR5cGVvZiBvP28uYXBwbHkodCxpfHxbXSk6IW8mJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZ0aGlzLnNwcmludGYuYXBwbHkodGhpcyxbZV0uY29uY2F0KEVvKGkpKSk/dGhpcy5zcHJpbnRmLmFwcGx5KHRoaXMsW2VdLmNvbmNhdChFbyhpKSkpOm59LGNvbXBhcmVPYmplY3RzOmZ1bmN0aW9uKHQsZSxpKXt2YXIgbj1PYmplY3Qua2V5cyh0KSxvPU9iamVjdC5rZXlzKGUpO2lmKGkmJm4ubGVuZ3RoIT09by5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciByPTAsYT1uO3I8YS5sZW5ndGg7cisrKXt2YXIgcz1hW3JdO2lmKG8uaW5jbHVkZXMocykmJnRbc10hPT1lW3NdKXJldHVybiExfXJldHVybiEwfSxlc2NhcGVIVE1MOmZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3QucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csXCImcXVvdDtcIikucmVwbGFjZSgvJy9nLFwiJiMwMzk7XCIpLnJlcGxhY2UoL2AvZyxcIiYjeDYwO1wiKTp0fSxnZXRSZWFsRGF0YUF0dHI6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsaT1PYmplY3QuZW50cmllcyh0KTtlPGkubGVuZ3RoO2UrKyl7dmFyIG49QW8oaVtlXSwyKSxvPW5bMF0scj1uWzFdLGE9by5zcGxpdCgvKD89W0EtWl0pLykuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKTthIT09byYmKHRbYV09cixkZWxldGUgdFtvXSl9cmV0dXJuIHR9LGdldEl0ZW1GaWVsZDpmdW5jdGlvbih0LGUsaSl7dmFyIG49dDtpZihcInN0cmluZ1wiIT10eXBlb2YgZXx8dC5oYXNPd25Qcm9wZXJ0eShlKSlyZXR1cm4gaT90aGlzLmVzY2FwZUhUTUwodFtlXSk6dFtlXTt2YXIgbz1lLnNwbGl0KFwiLlwiKSxyPSEwLGE9ITEscz12b2lkIDA7dHJ5e2Zvcih2YXIgbCxjPW9bU3ltYm9sLml0ZXJhdG9yXSgpOyEocj0obD1jLm5leHQoKSkuZG9uZSk7cj0hMCl7dmFyIGg9bC52YWx1ZTtuPW4mJm5baF19fWNhdGNoKHQpe2E9ITAscz10fWZpbmFsbHl7dHJ5e3J8fG51bGw9PWMucmV0dXJufHxjLnJldHVybigpfWZpbmFsbHl7aWYoYSl0aHJvdyBzfX1yZXR1cm4gaT90aGlzLmVzY2FwZUhUTUwobik6bn0saXNJRUJyb3dzZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIk1TSUUgXCIpfHwvVHJpZGVudC4qcnY6MTFcXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl9LGZpbmRJbmRleDpmdW5jdGlvbih0LGUpe3ZhciBpPSEwLG49ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgcixhPXRbU3ltYm9sLml0ZXJhdG9yXSgpOyEoaT0ocj1hLm5leHQoKSkuZG9uZSk7aT0hMCl7dmFyIHM9ci52YWx1ZTtpZihKU09OLnN0cmluZ2lmeShzKT09PUpTT04uc3RyaW5naWZ5KGUpKXJldHVybiB0LmluZGV4T2Yocyl9fWNhdGNoKHQpe249ITAsbz10fWZpbmFsbHl7dHJ5e2l8fG51bGw9PWEucmV0dXJufHxhLnJldHVybigpfWZpbmFsbHl7aWYobil0aHJvdyBvfX1yZXR1cm4tMX0sdHJUb0RhdGE6ZnVuY3Rpb24oZSxpKXt2YXIgbj10aGlzLG89W10scj1bXTtyZXR1cm4gaS5lYWNoKChmdW5jdGlvbihpLGEpe3ZhciBzPXt9O3MuX2lkPXQoYSkuYXR0cihcImlkXCIpLHMuX2NsYXNzPXQoYSkuYXR0cihcImNsYXNzXCIpLHMuX2RhdGE9bi5nZXRSZWFsRGF0YUF0dHIodChhKS5kYXRhKCkpLHQoYSkuZmluZChcIj50ZCw+dGhcIikuZWFjaCgoZnVuY3Rpb24obyxhKXtmb3IodmFyIGw9K3QoYSkuYXR0cihcImNvbHNwYW5cIil8fDEsYz0rdChhKS5hdHRyKFwicm93c3BhblwiKXx8MSxoPW87cltpXSYmcltpXVtoXTtoKyspO2Zvcih2YXIgdT1oO3U8aCtsO3UrKylmb3IodmFyIGQ9aTtkPGkrYztkKyspcltkXXx8KHJbZF09W10pLHJbZF1bdV09ITA7dmFyIGY9ZVtoXS5maWVsZDtzW2ZdPXQoYSkuaHRtbCgpLnRyaW0oKSxzW1wiX1wiLmNvbmNhdChmLFwiX2lkXCIpXT10KGEpLmF0dHIoXCJpZFwiKSxzW1wiX1wiLmNvbmNhdChmLFwiX2NsYXNzXCIpXT10KGEpLmF0dHIoXCJjbGFzc1wiKSxzW1wiX1wiLmNvbmNhdChmLFwiX3Jvd3NwYW5cIildPXQoYSkuYXR0cihcInJvd3NwYW5cIiksc1tcIl9cIi5jb25jYXQoZixcIl9jb2xzcGFuXCIpXT10KGEpLmF0dHIoXCJjb2xzcGFuXCIpLHNbXCJfXCIuY29uY2F0KGYsXCJfdGl0bGVcIildPXQoYSkuYXR0cihcInRpdGxlXCIpLHNbXCJfXCIuY29uY2F0KGYsXCJfZGF0YVwiKV09bi5nZXRSZWFsRGF0YUF0dHIodChhKS5kYXRhKCkpfSkpLG8ucHVzaChzKX0pKSxvfSxzb3J0OmZ1bmN0aW9uKHQsZSxpLG4pe3JldHVybiBudWxsPT10JiYodD1cIlwiKSxudWxsPT1lJiYoZT1cIlwiKSxuJiZ0PT09ZSYmKHQ9dC5fcG9zaXRpb24sZT1lLl9wb3NpdGlvbiksdGhpcy5pc051bWVyaWModCkmJnRoaXMuaXNOdW1lcmljKGUpPyh0PXBhcnNlRmxvYXQodCkpPChlPXBhcnNlRmxvYXQoZSkpPy0xKmk6dD5lP2k6MDp0PT09ZT8wOihcInN0cmluZ1wiIT10eXBlb2YgdCYmKHQ9dC50b1N0cmluZygpKSwtMT09PXQubG9jYWxlQ29tcGFyZShlKT8tMSppOmkpfX0sVW89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpe3ZhciBpPXRoaXM7UG8odGhpcyx0KSx0aGlzLnJvd3M9ZS5yb3dzLHRoaXMuc2Nyb2xsRWw9ZS5zY3JvbGxFbCx0aGlzLmNvbnRlbnRFbD1lLmNvbnRlbnRFbCx0aGlzLmNhbGxiYWNrPWUuY2FsbGJhY2ssdGhpcy5pdGVtSGVpZ2h0PWUuaXRlbUhlaWdodCx0aGlzLmNhY2hlPXt9LHRoaXMuc2Nyb2xsVG9wPXRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wLHRoaXMuaW5pdERPTSh0aGlzLnJvd3MsZS5maXhlZFNjcm9sbCksdGhpcy5zY3JvbGxFbC5zY3JvbGxUb3A9dGhpcy5zY3JvbGxUb3AsdGhpcy5sYXN0Q2x1c3Rlcj0wO3ZhciBuPWZ1bmN0aW9uKCl7aS5sYXN0Q2x1c3RlciE9PShpLmxhc3RDbHVzdGVyPWkuZ2V0TnVtKCkpJiYoaS5pbml0RE9NKGkucm93cyksaS5jYWxsYmFjaygpKX07dGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbiwhMSksdGhpcy5kZXN0cm95PWZ1bmN0aW9uKCl7aS5jb250ZW50RWwuaW5uZXJIdG1sPVwiXCIsaS5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsbiwhMSl9fXJldHVybiBJbyh0LFt7a2V5OlwiaW5pdERPTVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09dGhpcy5jbHVzdGVySGVpZ2h0JiYodGhpcy5jYWNoZS5zY3JvbGxUb3A9dGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AsdGhpcy5jYWNoZS5kYXRhPXRoaXMuY29udGVudEVsLmlubmVySFRNTD10WzBdK3RbMF0rdFswXSx0aGlzLmdldFJvd3NIZWlnaHQodCkpO3ZhciBpPXRoaXMuaW5pdERhdGEodCx0aGlzLmdldE51bShlKSksbj1pLnJvd3Muam9pbihcIlwiKSxvPXRoaXMuY2hlY2tDaGFuZ2VzKFwiZGF0YVwiLG4pLHI9dGhpcy5jaGVja0NoYW5nZXMoXCJ0b3BcIixpLnRvcE9mZnNldCksYT10aGlzLmNoZWNrQ2hhbmdlcyhcImJvdHRvbVwiLGkuYm90dG9tT2Zmc2V0KSxzPVtdO28mJnI/KGkudG9wT2Zmc2V0JiZzLnB1c2godGhpcy5nZXRFeHRyYShcInRvcFwiLGkudG9wT2Zmc2V0KSkscy5wdXNoKG4pLGkuYm90dG9tT2Zmc2V0JiZzLnB1c2godGhpcy5nZXRFeHRyYShcImJvdHRvbVwiLGkuYm90dG9tT2Zmc2V0KSksdGhpcy5jb250ZW50RWwuaW5uZXJIVE1MPXMuam9pbihcIlwiKSxlJiYodGhpcy5jb250ZW50RWwuc2Nyb2xsVG9wPXRoaXMuY2FjaGUuc2Nyb2xsVG9wKSk6YSYmKHRoaXMuY29udGVudEVsLmxhc3RDaGlsZC5zdHlsZS5oZWlnaHQ9XCJcIi5jb25jYXQoaS5ib3R0b21PZmZzZXQsXCJweFwiKSl9fSx7a2V5OlwiZ2V0Um93c0hlaWdodFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodm9pZCAwPT09dGhpcy5pdGVtSGVpZ2h0KXt2YXIgdD10aGlzLmNvbnRlbnRFbC5jaGlsZHJlbixlPXRbTWF0aC5mbG9vcih0Lmxlbmd0aC8yKV07dGhpcy5pdGVtSGVpZ2h0PWUub2Zmc2V0SGVpZ2h0fXRoaXMuYmxvY2tIZWlnaHQ9NTAqdGhpcy5pdGVtSGVpZ2h0LHRoaXMuY2x1c3RlclJvd3M9MjAwLHRoaXMuY2x1c3RlckhlaWdodD00KnRoaXMuYmxvY2tIZWlnaHR9fSx7a2V5OlwiZ2V0TnVtXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2Nyb2xsVG9wPXQ/dGhpcy5jYWNoZS5zY3JvbGxUb3A6dGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AsTWF0aC5mbG9vcih0aGlzLnNjcm9sbFRvcC8odGhpcy5jbHVzdGVySGVpZ2h0LXRoaXMuYmxvY2tIZWlnaHQpKXx8MH19LHtrZXk6XCJpbml0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYodC5sZW5ndGg8NTApcmV0dXJue3RvcE9mZnNldDowLGJvdHRvbU9mZnNldDowLHJvd3NBYm92ZTowLHJvd3M6dH07dmFyIGk9TWF0aC5tYXgoKHRoaXMuY2x1c3RlclJvd3MtNTApKmUsMCksbj1pK3RoaXMuY2x1c3RlclJvd3Msbz1NYXRoLm1heChpKnRoaXMuaXRlbUhlaWdodCwwKSxyPU1hdGgubWF4KCh0Lmxlbmd0aC1uKSp0aGlzLml0ZW1IZWlnaHQsMCksYT1bXSxzPWk7bzwxJiZzKys7Zm9yKHZhciBsPWk7bDxuO2wrKyl0W2xdJiZhLnB1c2godFtsXSk7cmV0dXJue3RvcE9mZnNldDpvLGJvdHRvbU9mZnNldDpyLHJvd3NBYm92ZTpzLHJvd3M6YX19fSx7a2V5OlwiY2hlY2tDaGFuZ2VzXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT1lIT09dGhpcy5jYWNoZVt0XTtyZXR1cm4gdGhpcy5jYWNoZVt0XT1lLGl9fSx7a2V5OlwiZ2V0RXh0cmFcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtyZXR1cm4gaS5jbGFzc05hbWU9XCJ2aXJ0dWFsLXNjcm9sbC1cIi5jb25jYXQodCksZSYmKGkuc3R5bGUuaGVpZ2h0PVwiXCIuY29uY2F0KGUsXCJweFwiKSksaS5vdXRlckhUTUx9fV0pLHR9KCkscW89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGksbil7UG8odGhpcyxlKSx0aGlzLm9wdGlvbnM9bix0aGlzLiRlbD10KGkpLHRoaXMuJGVsXz10aGlzLiRlbC5jbG9uZSgpLHRoaXMudGltZW91dElkXz0wLHRoaXMudGltZW91dEZvb3Rlcl89MCx0aGlzLmluaXQoKX1yZXR1cm4gSW8oZSxbe2tleTpcImluaXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaW5pdENvbnN0YW50cygpLHRoaXMuaW5pdExvY2FsZSgpLHRoaXMuaW5pdENvbnRhaW5lcigpLHRoaXMuaW5pdFRhYmxlKCksdGhpcy5pbml0SGVhZGVyKCksdGhpcy5pbml0RGF0YSgpLHRoaXMuaW5pdEhpZGRlblJvd3MoKSx0aGlzLmluaXRUb29sYmFyKCksdGhpcy5pbml0UGFnaW5hdGlvbigpLHRoaXMuaW5pdEJvZHkoKSx0aGlzLmluaXRTZWFyY2hUZXh0KCksdGhpcy5pbml0U2VydmVyKCl9fSx7a2V5OlwiaW5pdENvbnN0YW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcHRpb25zO3RoaXMuY29uc3RhbnRzPUJvLkNPTlNUQU5UUyx0aGlzLmNvbnN0YW50cy50aGVtZT10LmZuLmJvb3RzdHJhcFRhYmxlLnRoZW1lO3ZhciBpPWUuYnV0dG9uc1ByZWZpeD9cIlwiLmNvbmNhdChlLmJ1dHRvbnNQcmVmaXgsXCItXCIpOlwiXCI7dGhpcy5jb25zdGFudHMuYnV0dG9uc0NsYXNzPVtlLmJ1dHRvbnNQcmVmaXgsaStlLmJ1dHRvbnNDbGFzcyxNby5zcHJpbnRmKFwiXCIuY29uY2F0KGksXCIlc1wiKSxlLmljb25TaXplKV0uam9pbihcIiBcIikudHJpbSgpfX0se2tleTpcImluaXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5sb2NhbGUpe3ZhciBlPXQuZm4uYm9vdHN0cmFwVGFibGUubG9jYWxlcyxpPXRoaXMub3B0aW9ucy5sb2NhbGUuc3BsaXQoLy18Xy8pO2lbMF09aVswXS50b0xvd2VyQ2FzZSgpLGlbMV0mJihpWzFdPWlbMV0udG9VcHBlckNhc2UoKSksZVt0aGlzLm9wdGlvbnMubG9jYWxlXT90LmV4dGVuZCh0aGlzLm9wdGlvbnMsZVt0aGlzLm9wdGlvbnMubG9jYWxlXSk6ZVtpLmpvaW4oXCItXCIpXT90LmV4dGVuZCh0aGlzLm9wdGlvbnMsZVtpLmpvaW4oXCItXCIpXSk6ZVtpWzBdXSYmdC5leHRlbmQodGhpcy5vcHRpb25zLGVbaVswXV0pfX19LHtrZXk6XCJpbml0Q29udGFpbmVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1bXCJ0b3BcIixcImJvdGhcIl0uaW5jbHVkZXModGhpcy5vcHRpb25zLnBhZ2luYXRpb25WQWxpZ24pPyc8ZGl2IGNsYXNzPVwiZml4ZWQtdGFibGUtcGFnaW5hdGlvbiBjbGVhcmZpeFwiPjwvZGl2Pic6XCJcIixpPVtcImJvdHRvbVwiLFwiYm90aFwiXS5pbmNsdWRlcyh0aGlzLm9wdGlvbnMucGFnaW5hdGlvblZBbGlnbik/JzxkaXYgY2xhc3M9XCJmaXhlZC10YWJsZS1wYWdpbmF0aW9uXCI+PC9kaXY+JzpcIlwiO3RoaXMuJGNvbnRhaW5lcj10KCdcXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9vdHN0cmFwLXRhYmxlICcuY29uY2F0KHRoaXMuY29uc3RhbnRzLnRoZW1lLCdcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQtdGFibGUtdG9vbGJhclwiPjwvZGl2PlxcbiAgICAgICcpLmNvbmNhdChlLCdcXG4gICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQtdGFibGUtY29udGFpbmVyXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImZpeGVkLXRhYmxlLWhlYWRlclwiPjx0YWJsZT48L3RhYmxlPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJmaXhlZC10YWJsZS1ib2R5XCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImZpeGVkLXRhYmxlLWxvYWRpbmdcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cImxvYWRpbmctd3JhcFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwibG9hZGluZy10ZXh0XCI+JykuY29uY2F0KHRoaXMub3B0aW9ucy5mb3JtYXRMb2FkaW5nTWVzc2FnZSgpLCc8L3NwYW4+XFxuICAgICAgPHNwYW4gY2xhc3M9XCJhbmltYXRpb24td3JhcFwiPjxzcGFuIGNsYXNzPVwiYW5pbWF0aW9uLWRvdFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgICAgPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJmaXhlZC10YWJsZS1mb290ZXJcIj48dGFibGU+PHRoZWFkPjx0cj48L3RyPjwvdGhlYWQ+PC90YWJsZT48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICAnKS5jb25jYXQoaSxcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIikpLHRoaXMuJGNvbnRhaW5lci5pbnNlcnRBZnRlcih0aGlzLiRlbCksdGhpcy4kdGFibGVDb250YWluZXI9dGhpcy4kY29udGFpbmVyLmZpbmQoXCIuZml4ZWQtdGFibGUtY29udGFpbmVyXCIpLHRoaXMuJHRhYmxlSGVhZGVyPXRoaXMuJGNvbnRhaW5lci5maW5kKFwiLmZpeGVkLXRhYmxlLWhlYWRlclwiKSx0aGlzLiR0YWJsZUJvZHk9dGhpcy4kY29udGFpbmVyLmZpbmQoXCIuZml4ZWQtdGFibGUtYm9keVwiKSx0aGlzLiR0YWJsZUxvYWRpbmc9dGhpcy4kY29udGFpbmVyLmZpbmQoXCIuZml4ZWQtdGFibGUtbG9hZGluZ1wiKSx0aGlzLiR0YWJsZUZvb3Rlcj10aGlzLiRlbC5maW5kKFwidGZvb3RcIiksdGhpcy5vcHRpb25zLmJ1dHRvbnNUb29sYmFyP3RoaXMuJHRvb2xiYXI9dChcImJvZHlcIikuZmluZCh0aGlzLm9wdGlvbnMuYnV0dG9uc1Rvb2xiYXIpOnRoaXMuJHRvb2xiYXI9dGhpcy4kY29udGFpbmVyLmZpbmQoXCIuZml4ZWQtdGFibGUtdG9vbGJhclwiKSx0aGlzLiRwYWdpbmF0aW9uPXRoaXMuJGNvbnRhaW5lci5maW5kKFwiLmZpeGVkLXRhYmxlLXBhZ2luYXRpb25cIiksdGhpcy4kdGFibGVCb2R5LmFwcGVuZCh0aGlzLiRlbCksdGhpcy4kY29udGFpbmVyLmFmdGVyKCc8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj4nKSx0aGlzLiRlbC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuY2xhc3NlcyksdGhpcy4kdGFibGVMb2FkaW5nLmFkZENsYXNzKHRoaXMub3B0aW9ucy5jbGFzc2VzKSx0aGlzLm9wdGlvbnMuaGVpZ2h0Pyh0aGlzLiR0YWJsZUNvbnRhaW5lci5hZGRDbGFzcyhcImZpeGVkLWhlaWdodFwiKSx0aGlzLm9wdGlvbnMuc2hvd0Zvb3RlciYmdGhpcy4kdGFibGVDb250YWluZXIuYWRkQ2xhc3MoXCJoYXMtZm9vdGVyXCIpLHRoaXMub3B0aW9ucy5jbGFzc2VzLnNwbGl0KFwiIFwiKS5pbmNsdWRlcyhcInRhYmxlLWJvcmRlcmVkXCIpJiYodGhpcy4kdGFibGVCb2R5LmFwcGVuZCgnPGRpdiBjbGFzcz1cImZpeGVkLXRhYmxlLWJvcmRlclwiPjwvZGl2PicpLHRoaXMuJHRhYmxlQm9yZGVyPXRoaXMuJHRhYmxlQm9keS5maW5kKFwiLmZpeGVkLXRhYmxlLWJvcmRlclwiKSx0aGlzLiR0YWJsZUxvYWRpbmcuYWRkQ2xhc3MoXCJmaXhlZC10YWJsZS1ib3JkZXJcIikpLHRoaXMuJHRhYmxlRm9vdGVyPXRoaXMuJGNvbnRhaW5lci5maW5kKFwiLmZpeGVkLXRhYmxlLWZvb3RlclwiKSk6dGhpcy4kdGFibGVGb290ZXIubGVuZ3RofHwodGhpcy4kZWwuYXBwZW5kKFwiPHRmb290Pjx0cj48L3RyPjwvdGZvb3Q+XCIpLHRoaXMuJHRhYmxlRm9vdGVyPXRoaXMuJGVsLmZpbmQoXCJ0Zm9vdFwiKSl9fSx7a2V5OlwiaW5pdFRhYmxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLG49W107dGhpcy4kaGVhZGVyPXRoaXMuJGVsLmZpbmQoXCI+dGhlYWRcIiksdGhpcy4kaGVhZGVyLmxlbmd0aD90aGlzLm9wdGlvbnMudGhlYWRDbGFzc2VzJiZ0aGlzLiRoZWFkZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnRoZWFkQ2xhc3Nlcyk6dGhpcy4kaGVhZGVyPXQoJzx0aGVhZCBjbGFzcz1cIicuY29uY2F0KHRoaXMub3B0aW9ucy50aGVhZENsYXNzZXMsJ1wiPjwvdGhlYWQ+JykpLmFwcGVuZFRvKHRoaXMuJGVsKSx0aGlzLiRoZWFkZXIuZmluZChcInRyXCIpLmVhY2goKGZ1bmN0aW9uKGUsaSl7dmFyIG89W107dChpKS5maW5kKFwidGhcIikuZWFjaCgoZnVuY3Rpb24oZSxpKXt2b2lkIDAhPT10KGkpLmRhdGEoXCJmaWVsZFwiKSYmdChpKS5kYXRhKFwiZmllbGRcIixcIlwiLmNvbmNhdCh0KGkpLmRhdGEoXCJmaWVsZFwiKSkpLG8ucHVzaCh0LmV4dGVuZCh7fSx7dGl0bGU6dChpKS5odG1sKCksY2xhc3M6dChpKS5hdHRyKFwiY2xhc3NcIiksdGl0bGVUb29sdGlwOnQoaSkuYXR0cihcInRpdGxlXCIpLHJvd3NwYW46dChpKS5hdHRyKFwicm93c3BhblwiKT8rdChpKS5hdHRyKFwicm93c3BhblwiKTp2b2lkIDAsY29sc3Bhbjp0KGkpLmF0dHIoXCJjb2xzcGFuXCIpPyt0KGkpLmF0dHIoXCJjb2xzcGFuXCIpOnZvaWQgMH0sdChpKS5kYXRhKCkpKX0pKSxuLnB1c2gobyl9KSksQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMuY29sdW1uc1swXSl8fCh0aGlzLm9wdGlvbnMuY29sdW1ucz1bdGhpcy5vcHRpb25zLmNvbHVtbnNdKSx0aGlzLm9wdGlvbnMuY29sdW1ucz10LmV4dGVuZCghMCxbXSxuLHRoaXMub3B0aW9ucy5jb2x1bW5zKSx0aGlzLmNvbHVtbnM9W10sdGhpcy5maWVsZHNDb2x1bW5zSW5kZXg9W10sTW8uc2V0RmllbGRJbmRleCh0aGlzLm9wdGlvbnMuY29sdW1ucyksdGhpcy5vcHRpb25zLmNvbHVtbnMuZm9yRWFjaCgoZnVuY3Rpb24obixvKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4scil7dmFyIGE9dC5leHRlbmQoe30sZS5DT0xVTU5fREVGQVVMVFMsbik7dm9pZCAwIT09YS5maWVsZEluZGV4JiYoaS5jb2x1bW5zW2EuZmllbGRJbmRleF09YSxpLmZpZWxkc0NvbHVtbnNJbmRleFthLmZpZWxkXT1hLmZpZWxkSW5kZXgpLGkub3B0aW9ucy5jb2x1bW5zW29dW3JdPWF9KSl9KSksdGhpcy5vcHRpb25zLmRhdGEubGVuZ3RofHwodGhpcy5vcHRpb25zLmRhdGE9TW8udHJUb0RhdGEodGhpcy5jb2x1bW5zLHRoaXMuJGVsLmZpbmQoXCI+dGJvZHk+dHJcIikpLFtdLmxlbmd0aCYmKHRoaXMuZnJvbUh0bWw9ITApKSx0aGlzLmZvb3RlckRhdGE9TW8udHJUb0RhdGEodGhpcy5jb2x1bW5zLHRoaXMuJGVsLmZpbmQoXCI+dGZvb3Q+dHJcIikpLHRoaXMuZm9vdGVyRGF0YSYmdGhpcy4kZWwuZmluZChcInRmb290XCIpLmh0bWwoXCI8dHI+PC90cj5cIiksIXRoaXMub3B0aW9ucy5zaG93Rm9vdGVyfHx0aGlzLm9wdGlvbnMuY2FyZFZpZXc/dGhpcy4kdGFibGVGb290ZXIuaGlkZSgpOnRoaXMuJHRhYmxlRm9vdGVyLnNob3coKX19LHtrZXk6XCJpbml0SGVhZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGk9e30sbj1bXTt0aGlzLmhlYWRlcj17ZmllbGRzOltdLHN0eWxlczpbXSxjbGFzc2VzOltdLGZvcm1hdHRlcnM6W10sZGV0YWlsRm9ybWF0dGVyczpbXSxldmVudHM6W10sc29ydGVyczpbXSxzb3J0TmFtZXM6W10sY2VsbFN0eWxlczpbXSxzZWFyY2hhYmxlczpbXX0sTW8udXBkYXRlRmllbGRHcm91cCh0aGlzLm9wdGlvbnMuY29sdW1ucyksdGhpcy5vcHRpb25zLmNvbHVtbnMuZm9yRWFjaCgoZnVuY3Rpb24odCxvKXtuLnB1c2goXCI8dHI+XCIpLDA9PT1vJiYhZS5vcHRpb25zLmNhcmRWaWV3JiZlLm9wdGlvbnMuZGV0YWlsVmlldyYmZS5vcHRpb25zLmRldGFpbFZpZXdJY29uJiZuLnB1c2goJzx0aCBjbGFzcz1cImRldGFpbFwiIHJvd3NwYW49XCInLmNvbmNhdChlLm9wdGlvbnMuY29sdW1ucy5sZW5ndGgsJ1wiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmh0LWNlbGxcIj48L2Rpdj5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgICcpKSx0LmZvckVhY2goKGZ1bmN0aW9uKHQscil7dmFyIGE9TW8uc3ByaW50ZignIGNsYXNzPVwiJXNcIicsdC5jbGFzcykscz10LndpZHRoVW5pdCxsPXBhcnNlRmxvYXQodC53aWR0aCksYz1Nby5zcHJpbnRmKFwidGV4dC1hbGlnbjogJXM7IFwiLHQuaGFsaWduP3QuaGFsaWduOnQuYWxpZ24pLGg9TW8uc3ByaW50ZihcInRleHQtYWxpZ246ICVzOyBcIix0LmFsaWduKSx1PU1vLnNwcmludGYoXCJ2ZXJ0aWNhbC1hbGlnbjogJXM7IFwiLHQudmFsaWduKTtpZih1Kz1Nby5zcHJpbnRmKFwid2lkdGg6ICVzOyBcIiwhdC5jaGVja2JveCYmIXQucmFkaW98fGw/bD9sK3M6dm9pZCAwOnQuc2hvd1NlbGVjdFRpdGxlP3ZvaWQgMDpcIjM2cHhcIiksdm9pZCAwIT09dC5maWVsZEluZGV4fHx0LnZpc2libGUpe2lmKHZvaWQgMCE9PXQuZmllbGRJbmRleCl7aWYoZS5oZWFkZXIuZmllbGRzW3QuZmllbGRJbmRleF09dC5maWVsZCxlLmhlYWRlci5zdHlsZXNbdC5maWVsZEluZGV4XT1oK3UsZS5oZWFkZXIuY2xhc3Nlc1t0LmZpZWxkSW5kZXhdPWEsZS5oZWFkZXIuZm9ybWF0dGVyc1t0LmZpZWxkSW5kZXhdPXQuZm9ybWF0dGVyLGUuaGVhZGVyLmRldGFpbEZvcm1hdHRlcnNbdC5maWVsZEluZGV4XT10LmRldGFpbEZvcm1hdHRlcixlLmhlYWRlci5ldmVudHNbdC5maWVsZEluZGV4XT10LmV2ZW50cyxlLmhlYWRlci5zb3J0ZXJzW3QuZmllbGRJbmRleF09dC5zb3J0ZXIsZS5oZWFkZXIuc29ydE5hbWVzW3QuZmllbGRJbmRleF09dC5zb3J0TmFtZSxlLmhlYWRlci5jZWxsU3R5bGVzW3QuZmllbGRJbmRleF09dC5jZWxsU3R5bGUsZS5oZWFkZXIuc2VhcmNoYWJsZXNbdC5maWVsZEluZGV4XT10LnNlYXJjaGFibGUsIXQudmlzaWJsZSlyZXR1cm47aWYoZS5vcHRpb25zLmNhcmRWaWV3JiYhdC5jYXJkVmlzaWJsZSlyZXR1cm47aVt0LmZpZWxkXT10fW4ucHVzaChcIjx0aFwiLmNvbmNhdChNby5zcHJpbnRmKCcgdGl0bGU9XCIlc1wiJyx0LnRpdGxlVG9vbHRpcCkpLHQuY2hlY2tib3h8fHQucmFkaW8/TW8uc3ByaW50ZignIGNsYXNzPVwiYnMtY2hlY2tib3ggJXNcIicsdC5jbGFzc3x8XCJcIik6YSxNby5zcHJpbnRmKCcgc3R5bGU9XCIlc1wiJyxjK3UpLE1vLnNwcmludGYoJyByb3dzcGFuPVwiJXNcIicsdC5yb3dzcGFuKSxNby5zcHJpbnRmKCcgY29sc3Bhbj1cIiVzXCInLHQuY29sc3BhbiksTW8uc3ByaW50ZignIGRhdGEtZmllbGQ9XCIlc1wiJyx0LmZpZWxkKSwwPT09ciYmbz4wP1wiIGRhdGEtbm90LWZpcnN0LXRoXCI6XCJcIixcIj5cIiksbi5wdXNoKE1vLnNwcmludGYoJzxkaXYgY2xhc3M9XCJ0aC1pbm5lciAlc1wiPicsZS5vcHRpb25zLnNvcnRhYmxlJiZ0LnNvcnRhYmxlP1wic29ydGFibGUgYm90aFwiOlwiXCIpKTt2YXIgZD1lLm9wdGlvbnMuZXNjYXBlP01vLmVzY2FwZUhUTUwodC50aXRsZSk6dC50aXRsZSxmPWQ7dC5jaGVja2JveCYmKGQ9XCJcIiwhZS5vcHRpb25zLnNpbmdsZVNlbGVjdCYmZS5vcHRpb25zLmNoZWNrYm94SGVhZGVyJiYoZD0nPGxhYmVsPjxpbnB1dCBuYW1lPVwiYnRTZWxlY3RBbGxcIiB0eXBlPVwiY2hlY2tib3hcIiAvPjxzcGFuPjwvc3Bhbj48L2xhYmVsPicpLGUuaGVhZGVyLnN0YXRlRmllbGQ9dC5maWVsZCksdC5yYWRpbyYmKGQ9XCJcIixlLmhlYWRlci5zdGF0ZUZpZWxkPXQuZmllbGQsZS5vcHRpb25zLnNpbmdsZVNlbGVjdD0hMCksIWQmJnQuc2hvd1NlbGVjdFRpdGxlJiYoZCs9Ziksbi5wdXNoKGQpLG4ucHVzaChcIjwvZGl2PlwiKSxuLnB1c2goJzxkaXYgY2xhc3M9XCJmaHQtY2VsbFwiPjwvZGl2PicpLG4ucHVzaChcIjwvZGl2PlwiKSxuLnB1c2goXCI8L3RoPlwiKX19KSksbi5wdXNoKFwiPC90cj5cIil9KSksdGhpcy4kaGVhZGVyLmh0bWwobi5qb2luKFwiXCIpKSx0aGlzLiRoZWFkZXIuZmluZChcInRoW2RhdGEtZmllbGRdXCIpLmVhY2goKGZ1bmN0aW9uKGUsbil7dChuKS5kYXRhKGlbdChuKS5kYXRhKFwiZmllbGRcIildKX0pKSx0aGlzLiRjb250YWluZXIub2ZmKFwiY2xpY2tcIixcIi50aC1pbm5lclwiKS5vbihcImNsaWNrXCIsXCIudGgtaW5uZXJcIiwoZnVuY3Rpb24oaSl7dmFyIG49dChpLmN1cnJlbnRUYXJnZXQpO2lmKGUub3B0aW9ucy5kZXRhaWxWaWV3JiYhbi5wYXJlbnQoKS5oYXNDbGFzcyhcImJzLWNoZWNrYm94XCIpJiZuLmNsb3Nlc3QoXCIuYm9vdHN0cmFwLXRhYmxlXCIpWzBdIT09ZS4kY29udGFpbmVyWzBdKXJldHVybiExO2Uub3B0aW9ucy5zb3J0YWJsZSYmbi5wYXJlbnQoKS5kYXRhKCkuc29ydGFibGUmJmUub25Tb3J0KGkpfSkpLHRoaXMuJGhlYWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkub2ZmKFwia2V5cHJlc3NcIikub24oXCJrZXlwcmVzc1wiLChmdW5jdGlvbihpKXtlLm9wdGlvbnMuc29ydGFibGUmJnQoaS5jdXJyZW50VGFyZ2V0KS5kYXRhKCkuc29ydGFibGUmJigxMz09PShpLmtleUNvZGV8fGkud2hpY2gpJiZlLm9uU29ydChpKSl9KSk7dmFyIG89XCJyZXNpemUuYm9vdHN0cmFwLXRhYmxlXCIuY29uY2F0KHRoaXMuJGVsLmF0dHIoXCJpZFwiKXx8XCJcIik7dCh3aW5kb3cpLm9mZihvKSwhdGhpcy5vcHRpb25zLnNob3dIZWFkZXJ8fHRoaXMub3B0aW9ucy5jYXJkVmlldz8odGhpcy4kaGVhZGVyLmhpZGUoKSx0aGlzLiR0YWJsZUhlYWRlci5oaWRlKCksdGhpcy4kdGFibGVMb2FkaW5nLmNzcyhcInRvcFwiLDApKToodGhpcy4kaGVhZGVyLnNob3coKSx0aGlzLiR0YWJsZUhlYWRlci5zaG93KCksdGhpcy4kdGFibGVMb2FkaW5nLmNzcyhcInRvcFwiLHRoaXMuJGhlYWRlci5vdXRlckhlaWdodCgpKzEpLHRoaXMuZ2V0Q2FyZXQoKSx0KHdpbmRvdykub24obywoZnVuY3Rpb24odCl7cmV0dXJuIGUucmVzZXRXaWR0aCh0KX0pKSksdGhpcy4kc2VsZWN0QWxsPXRoaXMuJGhlYWRlci5maW5kKCdbbmFtZT1cImJ0U2VsZWN0QWxsXCJdJyksdGhpcy4kc2VsZWN0QWxsLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24oaSl7dmFyIG49aS5jdXJyZW50VGFyZ2V0LG89dChuKS5wcm9wKFwiY2hlY2tlZFwiKTtlW28/XCJjaGVja0FsbFwiOlwidW5jaGVja0FsbFwiXSgpLGUudXBkYXRlU2VsZWN0ZWQoKX0pKX19LHtrZXk6XCJpbml0RGF0YVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dGhpcy5vcHRpb25zLmRhdGE9XCJhcHBlbmRcIj09PWU/dGhpcy5vcHRpb25zLmRhdGEuY29uY2F0KHQpOlwicHJlcGVuZFwiPT09ZT9bXS5jb25jYXQodCkuY29uY2F0KHRoaXMub3B0aW9ucy5kYXRhKTp0fHx0aGlzLm9wdGlvbnMuZGF0YSx0aGlzLmRhdGE9dGhpcy5vcHRpb25zLmRhdGEsXCJzZXJ2ZXJcIiE9PXRoaXMub3B0aW9ucy5zaWRlUGFnaW5hdGlvbiYmdGhpcy5pbml0U29ydCgpfX0se2tleTpcImluaXRTb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5vcHRpb25zLnNvcnROYW1lLGk9XCJkZXNjXCI9PT10aGlzLm9wdGlvbnMuc29ydE9yZGVyPy0xOjEsbj10aGlzLmhlYWRlci5maWVsZHMuaW5kZXhPZih0aGlzLm9wdGlvbnMuc29ydE5hbWUpLG89MDstMSE9PW4mJih0aGlzLm9wdGlvbnMuc29ydFN0YWJsZSYmdGhpcy5kYXRhLmZvckVhY2goKGZ1bmN0aW9uKHQsZSl7dC5oYXNPd25Qcm9wZXJ0eShcIl9wb3NpdGlvblwiKXx8KHQuX3Bvc2l0aW9uPWUpfSkpLHRoaXMub3B0aW9ucy5jdXN0b21Tb3J0P01vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKHRoaXMub3B0aW9ucyx0aGlzLm9wdGlvbnMuY3VzdG9tU29ydCxbdGhpcy5vcHRpb25zLnNvcnROYW1lLHRoaXMub3B0aW9ucy5zb3J0T3JkZXIsdGhpcy5kYXRhXSk6dGhpcy5kYXRhLnNvcnQoKGZ1bmN0aW9uKG8scil7dC5oZWFkZXIuc29ydE5hbWVzW25dJiYoZT10LmhlYWRlci5zb3J0TmFtZXNbbl0pO3ZhciBhPU1vLmdldEl0ZW1GaWVsZChvLGUsdC5vcHRpb25zLmVzY2FwZSkscz1Nby5nZXRJdGVtRmllbGQocixlLHQub3B0aW9ucy5lc2NhcGUpLGw9TW8uY2FsY3VsYXRlT2JqZWN0VmFsdWUodC5oZWFkZXIsdC5oZWFkZXIuc29ydGVyc1tuXSxbYSxzLG8scl0pO3JldHVybiB2b2lkIDAhPT1sP3Qub3B0aW9ucy5zb3J0U3RhYmxlJiYwPT09bD9pKihvLl9wb3NpdGlvbi1yLl9wb3NpdGlvbik6aSpsOk1vLnNvcnQoYSxzLGksdC5vcHRpb25zLnNvcnRTdGFibGUpfSkpLHZvaWQgMCE9PXRoaXMub3B0aW9ucy5zb3J0Q2xhc3MmJihjbGVhclRpbWVvdXQobyksbz1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuJGVsLnJlbW92ZUNsYXNzKHQub3B0aW9ucy5zb3J0Q2xhc3MpO3ZhciBlPXQuJGhlYWRlci5maW5kKCdbZGF0YS1maWVsZD1cIicuY29uY2F0KHQub3B0aW9ucy5zb3J0TmFtZSwnXCJdJykpLmluZGV4KCk7dC4kZWwuZmluZChcInRyIHRkOm50aC1jaGlsZChcIi5jb25jYXQoZSsxLFwiKVwiKSkuYWRkQ2xhc3ModC5vcHRpb25zLnNvcnRDbGFzcyl9KSwyNTApKSl9fSx7a2V5Olwib25Tb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIGk9ZS50eXBlLG49ZS5jdXJyZW50VGFyZ2V0LG89XCJrZXlwcmVzc1wiPT09aT90KG4pOnQobikucGFyZW50KCkscj10aGlzLiRoZWFkZXIuZmluZChcInRoXCIpLmVxKG8uaW5kZXgoKSk7aWYodGhpcy4kaGVhZGVyLmFkZCh0aGlzLiRoZWFkZXJfKS5maW5kKFwic3Bhbi5vcmRlclwiKS5yZW1vdmUoKSx0aGlzLm9wdGlvbnMuc29ydE5hbWU9PT1vLmRhdGEoXCJmaWVsZFwiKT90aGlzLm9wdGlvbnMuc29ydE9yZGVyPVwiYXNjXCI9PT10aGlzLm9wdGlvbnMuc29ydE9yZGVyP1wiZGVzY1wiOlwiYXNjXCI6KHRoaXMub3B0aW9ucy5zb3J0TmFtZT1vLmRhdGEoXCJmaWVsZFwiKSx0aGlzLm9wdGlvbnMucmVtZW1iZXJPcmRlcj90aGlzLm9wdGlvbnMuc29ydE9yZGVyPVwiYXNjXCI9PT1vLmRhdGEoXCJvcmRlclwiKT9cImRlc2NcIjpcImFzY1wiOnRoaXMub3B0aW9ucy5zb3J0T3JkZXI9dGhpcy5jb2x1bW5zW3RoaXMuZmllbGRzQ29sdW1uc0luZGV4W28uZGF0YShcImZpZWxkXCIpXV0uc29ydE9yZGVyfHx0aGlzLmNvbHVtbnNbdGhpcy5maWVsZHNDb2x1bW5zSW5kZXhbby5kYXRhKFwiZmllbGRcIildXS5vcmRlciksdGhpcy50cmlnZ2VyKFwic29ydFwiLHRoaXMub3B0aW9ucy5zb3J0TmFtZSx0aGlzLm9wdGlvbnMuc29ydE9yZGVyKSxvLmFkZChyKS5kYXRhKFwib3JkZXJcIix0aGlzLm9wdGlvbnMuc29ydE9yZGVyKSx0aGlzLmdldENhcmV0KCksXCJzZXJ2ZXJcIj09PXRoaXMub3B0aW9ucy5zaWRlUGFnaW5hdGlvbilyZXR1cm4gdGhpcy5vcHRpb25zLnBhZ2VOdW1iZXI9MSx2b2lkIHRoaXMuaW5pdFNlcnZlcih0aGlzLm9wdGlvbnMuc2lsZW50U29ydCk7dGhpcy5pbml0U29ydCgpLHRoaXMuaW5pdEJvZHkoKX19LHtrZXk6XCJpbml0VG9vbGJhclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGUsaT10aGlzLG49dGhpcy5vcHRpb25zLG89W10scj0wLGE9MDtpZih0aGlzLiR0b29sYmFyLmZpbmQoXCIuYnMtYmFyc1wiKS5jaGlsZHJlbigpLmxlbmd0aCYmdChcImJvZHlcIikuYXBwZW5kKHQobi50b29sYmFyKSksdGhpcy4kdG9vbGJhci5odG1sKFwiXCIpLFwic3RyaW5nXCIhPXR5cGVvZiBuLnRvb2xiYXImJlwib2JqZWN0XCIhPT1DbyhuLnRvb2xiYXIpfHx0KE1vLnNwcmludGYoJzxkaXYgY2xhc3M9XCJicy1iYXJzICVzLSVzXCI+PC9kaXY+Jyx0aGlzLmNvbnN0YW50cy5jbGFzc2VzLnB1bGwsbi50b29sYmFyQWxpZ24pKS5hcHBlbmRUbyh0aGlzLiR0b29sYmFyKS5hcHBlbmQodChuLnRvb2xiYXIpKSxvPVsnPGRpdiBjbGFzcz1cIicuY29uY2F0KFtcImNvbHVtbnNcIixcImNvbHVtbnMtXCIuY29uY2F0KG4uYnV0dG9uc0FsaWduKSx0aGlzLmNvbnN0YW50cy5jbGFzc2VzLmJ1dHRvbnNHcm91cCxcIlwiLmNvbmNhdCh0aGlzLmNvbnN0YW50cy5jbGFzc2VzLnB1bGwsXCItXCIpLmNvbmNhdChuLmJ1dHRvbnNBbGlnbildLmpvaW4oXCIgXCIpLCdcIj4nKV0sXCJzdHJpbmdcIj09dHlwZW9mIG4uaWNvbnMmJihuLmljb25zPU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKG51bGwsbi5pY29ucykpLG4uc2hvd1BhZ2luYXRpb25Td2l0Y2gmJm8ucHVzaCgnPGJ1dHRvbiBjbGFzcz1cIicuY29uY2F0KHRoaXMuY29uc3RhbnRzLmJ1dHRvbnNDbGFzcywnXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJwYWdpbmF0aW9uU3dpdGNoXCJcXG4gICAgICAgIGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uIFN3aXRjaFwiIHRpdGxlPVwiJykuY29uY2F0KG4uZm9ybWF0UGFnaW5hdGlvblN3aXRjaCgpLCdcIj5cXG4gICAgICAgICcpLmNvbmNhdChuLnNob3dCdXR0b25JY29ucz9Nby5zcHJpbnRmKHRoaXMuY29uc3RhbnRzLmh0bWwuaWNvbixuLmljb25zUHJlZml4LG4uaWNvbnMucGFnaW5hdGlvblN3aXRjaERvd24pOlwiXCIsXCJcXG4gICAgICAgIFwiKS5jb25jYXQobi5zaG93QnV0dG9uVGV4dD9uLmZvcm1hdFBhZ2luYXRpb25Td2l0Y2hVcCgpOlwiXCIsXCJcXG4gICAgICAgIDwvYnV0dG9uPlwiKSksbi5zaG93UmVmcmVzaCYmby5wdXNoKCc8YnV0dG9uIGNsYXNzPVwiJy5jb25jYXQodGhpcy5jb25zdGFudHMuYnV0dG9uc0NsYXNzLCdcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInJlZnJlc2hcIlxcbiAgICAgICAgYXJpYS1sYWJlbD1cIlJlZnJlc2hcIiB0aXRsZT1cIicpLmNvbmNhdChuLmZvcm1hdFJlZnJlc2goKSwnXCI+XFxuICAgICAgICAnKS5jb25jYXQobi5zaG93QnV0dG9uSWNvbnM/TW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLmljb24sbi5pY29uc1ByZWZpeCxuLmljb25zLnJlZnJlc2gpOlwiXCIsXCJcXG4gICAgICAgIFwiKS5jb25jYXQobi5zaG93QnV0dG9uVGV4dD9uLmZvcm1hdFJlZnJlc2goKTpcIlwiLFwiXFxuICAgICAgICA8L2J1dHRvbj5cIikpLG4uc2hvd1RvZ2dsZSYmby5wdXNoKCc8YnV0dG9uIGNsYXNzPVwiJy5jb25jYXQodGhpcy5jb25zdGFudHMuYnV0dG9uc0NsYXNzLCdcIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInRvZ2dsZVwiXFxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlXCIgdGl0bGU9XCInKS5jb25jYXQobi5mb3JtYXRUb2dnbGUoKSwnXCI+XFxuICAgICAgICAnKS5jb25jYXQobi5zaG93QnV0dG9uSWNvbnM/TW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLmljb24sbi5pY29uc1ByZWZpeCxuLmljb25zLnRvZ2dsZU9mZik6XCJcIixcIlxcbiAgICAgICAgXCIpLmNvbmNhdChuLnNob3dCdXR0b25UZXh0P24uZm9ybWF0VG9nZ2xlT24oKTpcIlwiLFwiXFxuICAgICAgICA8L2J1dHRvbj5cIikpLG4uc2hvd0Z1bGxzY3JlZW4mJm8ucHVzaCgnPGJ1dHRvbiBjbGFzcz1cIicuY29uY2F0KHRoaXMuY29uc3RhbnRzLmJ1dHRvbnNDbGFzcywnXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJmdWxsc2NyZWVuXCJcXG4gICAgICAgIGFyaWEtbGFiZWw9XCJGdWxsc2NyZWVuXCIgdGl0bGU9XCInKS5jb25jYXQobi5mb3JtYXRGdWxsc2NyZWVuKCksJ1wiPlxcbiAgICAgICAgJykuY29uY2F0KG4uc2hvd0J1dHRvbkljb25zP01vLnNwcmludGYodGhpcy5jb25zdGFudHMuaHRtbC5pY29uLG4uaWNvbnNQcmVmaXgsbi5pY29ucy5mdWxsc2NyZWVuKTpcIlwiLFwiXFxuICAgICAgICBcIikuY29uY2F0KG4uc2hvd0J1dHRvblRleHQ/bi5mb3JtYXRGdWxsc2NyZWVuKCk6XCJcIixcIlxcbiAgICAgICAgPC9idXR0b24+XCIpKSxuLnNob3dDb2x1bW5zKXtpZihvLnB1c2goJzxkaXYgY2xhc3M9XCJrZWVwLW9wZW4gJy5jb25jYXQodGhpcy5jb25zdGFudHMuY2xhc3Nlcy5idXR0b25zRHJvcGRvd24sJ1wiIHRpdGxlPVwiJykuY29uY2F0KG4uZm9ybWF0Q29sdW1ucygpLCdcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCInKS5jb25jYXQodGhpcy5jb25zdGFudHMuYnV0dG9uc0NsYXNzLCcgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxcbiAgICAgICAgYXJpYS1sYWJlbD1cIkNvbHVtbnNcIiB0aXRsZT1cIicpLmNvbmNhdChuLmZvcm1hdENvbHVtbnMoKSwnXCI+XFxuICAgICAgICAnKS5jb25jYXQobi5zaG93QnV0dG9uSWNvbnM/TW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLmljb24sbi5pY29uc1ByZWZpeCxuLmljb25zLmNvbHVtbnMpOlwiXCIsXCJcXG4gICAgICAgIFwiKS5jb25jYXQobi5zaG93QnV0dG9uVGV4dD9uLmZvcm1hdENvbHVtbnMoKTpcIlwiLFwiXFxuICAgICAgICBcIikuY29uY2F0KHRoaXMuY29uc3RhbnRzLmh0bWwuZHJvcGRvd25DYXJldCxcIlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICBcIikuY29uY2F0KHRoaXMuY29uc3RhbnRzLmh0bWwudG9vbGJhckRyb3Bkb3duWzBdKSksbi5zaG93Q29sdW1uc1RvZ2dsZUFsbCl7dmFyIHM9dGhpcy5nZXRWaXNpYmxlQ29sdW1ucygpLmxlbmd0aD09PXRoaXMuY29sdW1ucy5sZW5ndGg7by5wdXNoKE1vLnNwcmludGYodGhpcy5jb25zdGFudHMuaHRtbC50b29sYmFyRHJvcGRvd25JdGVtLE1vLnNwcmludGYoJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZ2dsZS1hbGxcIiAlcz4gPHNwYW4+JXM8L3NwYW4+JyxzPydjaGVja2VkPVwiY2hlY2tlZFwiJzpcIlwiLG4uZm9ybWF0Q29sdW1uc1RvZ2dsZUFsbCgpKSkpLG8ucHVzaCh0aGlzLmNvbnN0YW50cy5odG1sLnRvb2xiYXJEcm9wZG93blNlcGFyYXRvcil9dGhpcy5jb2x1bW5zLmZvckVhY2goKGZ1bmN0aW9uKHQsZSl7aWYoIXQucmFkaW8mJiF0LmNoZWNrYm94JiYoIW4uY2FyZFZpZXd8fHQuY2FyZFZpc2libGUpKXt2YXIgcj10LnZpc2libGU/JyBjaGVja2VkPVwiY2hlY2tlZFwiJzpcIlwiO3Quc3dpdGNoYWJsZSYmKG8ucHVzaChNby5zcHJpbnRmKGkuY29uc3RhbnRzLmh0bWwudG9vbGJhckRyb3Bkb3duSXRlbSxNby5zcHJpbnRmKCc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGF0YS1maWVsZD1cIiVzXCIgdmFsdWU9XCIlc1wiJXM+IDxzcGFuPiVzPC9zcGFuPicsdC5maWVsZCxlLHIsdC50aXRsZSkpKSxhKyspfX0pKSxvLnB1c2godGhpcy5jb25zdGFudHMuaHRtbC50b29sYmFyRHJvcGRvd25bMV0sXCI8L2Rpdj5cIil9aWYoby5wdXNoKFwiPC9kaXY+XCIpLCh0aGlzLnNob3dUb29sYmFyfHxvLmxlbmd0aD4yKSYmdGhpcy4kdG9vbGJhci5hcHBlbmQoby5qb2luKFwiXCIpKSxuLnNob3dQYWdpbmF0aW9uU3dpdGNoJiZ0aGlzLiR0b29sYmFyLmZpbmQoJ2J1dHRvbltuYW1lPVwicGFnaW5hdGlvblN3aXRjaFwiXScpLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaS50b2dnbGVQYWdpbmF0aW9uKCl9KSksbi5zaG93RnVsbHNjcmVlbiYmdGhpcy4kdG9vbGJhci5maW5kKCdidXR0b25bbmFtZT1cImZ1bGxzY3JlZW5cIl0nKS5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGkudG9nZ2xlRnVsbHNjcmVlbigpfSkpLG4uc2hvd1JlZnJlc2gmJnRoaXMuJHRvb2xiYXIuZmluZCgnYnV0dG9uW25hbWU9XCJyZWZyZXNoXCJdJykub2ZmKFwiY2xpY2tcIikub24oXCJjbGlja1wiLChmdW5jdGlvbigpe3JldHVybiBpLnJlZnJlc2goKX0pKSxuLnNob3dUb2dnbGUmJnRoaXMuJHRvb2xiYXIuZmluZCgnYnV0dG9uW25hbWU9XCJ0b2dnbGVcIl0nKS5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsKGZ1bmN0aW9uKCl7aS50b2dnbGVWaWV3KCl9KSksbi5zaG93Q29sdW1ucyl7dmFyIGw9KGU9dGhpcy4kdG9vbGJhci5maW5kKFwiLmtlZXAtb3BlblwiKSkuZmluZCgnaW5wdXQ6bm90KFwiLnRvZ2dsZS1hbGxcIiknKSxjPWUuZmluZChcImlucHV0LnRvZ2dsZS1hbGxcIik7YTw9bi5taW5pbXVtQ291bnRDb2x1bW5zJiZlLmZpbmQoXCJpbnB1dFwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhMCksZS5maW5kKFwibGksIGxhYmVsXCIpLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24odCl7dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKX0pKSxsLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24oZSl7dmFyIG49ZS5jdXJyZW50VGFyZ2V0LG89dChuKTtpLl90b2dnbGVDb2x1bW4oby52YWwoKSxvLnByb3AoXCJjaGVja2VkXCIpLCExKSxpLnRyaWdnZXIoXCJjb2x1bW4tc3dpdGNoXCIsby5kYXRhKFwiZmllbGRcIiksby5wcm9wKFwiY2hlY2tlZFwiKSksYy5wcm9wKFwiY2hlY2tlZFwiLGwuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoPT09aS5jb2x1bW5zLmxlbmd0aCl9KSksYy5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe3ZhciBuPWUuY3VycmVudFRhcmdldDtpLl90b2dnbGVBbGxDb2x1bW5zKHQobikucHJvcChcImNoZWNrZWRcIikpfSkpfWlmKG4uc2VhcmNofHx0aGlzLnNob3dTZWFyY2hDbGVhckJ1dHRvbil7bz1bXTt2YXIgaD1Nby5zcHJpbnRmKHRoaXMuY29uc3RhbnRzLmh0bWwuc2VhcmNoQnV0dG9uLHRoaXMuY29uc3RhbnRzLmJ1dHRvbnNDbGFzcyxuLmZvcm1hdFNlYXJjaCgpLG4uc2hvd0J1dHRvbkljb25zP01vLnNwcmludGYodGhpcy5jb25zdGFudHMuaHRtbC5pY29uLG4uaWNvbnNQcmVmaXgsbi5pY29ucy5zZWFyY2gpOlwiXCIsbi5zaG93QnV0dG9uVGV4dD9uLmZvcm1hdFNlYXJjaCgpOlwiXCIpLHU9TW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLnNlYXJjaENsZWFyQnV0dG9uLHRoaXMuY29uc3RhbnRzLmJ1dHRvbnNDbGFzcyxuLmZvcm1hdENsZWFyU2VhcmNoKCksbi5zaG93QnV0dG9uSWNvbnM/TW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLmljb24sbi5pY29uc1ByZWZpeCxuLmljb25zLmNsZWFyU2VhcmNoKTpcIlwiLG4uc2hvd0J1dHRvblRleHQ/bi5mb3JtYXRDbGVhclNlYXJjaCgpOlwiXCIpLGQ9JzxpbnB1dCBjbGFzcz1cIicuY29uY2F0KHRoaXMuY29uc3RhbnRzLmNsYXNzZXMuaW5wdXQsXCJcXG4gICAgICAgIFwiKS5jb25jYXQoTW8uc3ByaW50ZihcIiAlcyVzXCIsdGhpcy5jb25zdGFudHMuY2xhc3Nlcy5pbnB1dFByZWZpeCxuLmljb25TaXplKSwnXFxuICAgICAgICBzZWFyY2gtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJykuY29uY2F0KG4uZm9ybWF0U2VhcmNoKCksJ1wiPicpLGY9ZDtpZihuLnNob3dTZWFyY2hCdXR0b258fG4uc2hvd1NlYXJjaENsZWFyQnV0dG9uKXt2YXIgcD0obi5zaG93U2VhcmNoQnV0dG9uP2g6XCJcIikrKG4uc2hvd1NlYXJjaENsZWFyQnV0dG9uP3U6XCJcIik7Zj1uLnNlYXJjaD9Nby5zcHJpbnRmKHRoaXMuY29uc3RhbnRzLmh0bWwuaW5wdXRHcm91cCxkLHApOnB9by5wdXNoKE1vLnNwcmludGYoJ1xcbiAgICAgICAgPGRpdiBjbGFzcz1cIicuY29uY2F0KHRoaXMuY29uc3RhbnRzLmNsYXNzZXMucHVsbCxcIi1cIikuY29uY2F0KG4uc2VhcmNoQWxpZ24sXCIgc2VhcmNoIFwiKS5jb25jYXQodGhpcy5jb25zdGFudHMuY2xhc3Nlcy5pbnB1dEdyb3VwLCdcIj5cXG4gICAgICAgICAgJXNcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICcpLGYpKSx0aGlzLiR0b29sYmFyLmFwcGVuZChvLmpvaW4oXCJcIikpO3ZhciBnPXRoaXMuJHRvb2xiYXIuZmluZChcIi5zZWFyY2ggaW5wdXRcIiksdj1mdW5jdGlvbigpe3ZhciB0PU1vLmlzSUVCcm93c2VyKCk/XCJtb3VzZXVwXCI6XCJrZXl1cCBkcm9wIGJsdXJcIjtnLm9mZih0KS5vbih0LChmdW5jdGlvbih0KXtuLnNlYXJjaE9uRW50ZXJLZXkmJjEzIT09dC5rZXlDb2RlfHxbMzcsMzgsMzksNDBdLmluY2x1ZGVzKHQua2V5Q29kZSl8fChjbGVhclRpbWVvdXQocikscj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2kub25TZWFyY2godCl9KSxuLnNlYXJjaFRpbWVPdXQpKX0pKX07bi5zaG93U2VhcmNoQnV0dG9uPyh0aGlzLiR0b29sYmFyLmZpbmQoXCIuc2VhcmNoIGJ1dHRvbltuYW1lPXNlYXJjaF1cIikub2ZmKFwiY2xpY2tcIikub24oXCJjbGlja1wiLChmdW5jdGlvbih0KXtjbGVhclRpbWVvdXQocikscj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2kub25TZWFyY2goe2N1cnJlbnRUYXJnZXQ6Z30pfSksbi5zZWFyY2hUaW1lT3V0KX0pKSxuLnNlYXJjaE9uRW50ZXJLZXkmJnYoKSk6digpLG4uc2hvd1NlYXJjaENsZWFyQnV0dG9uJiZ0aGlzLiR0b29sYmFyLmZpbmQoXCIuc2VhcmNoIGJ1dHRvbltuYW1lPWNsZWFyU2VhcmNoXVwiKS5jbGljaygoZnVuY3Rpb24oKXtpLnJlc2V0U2VhcmNoKCl9KSl9fX0se2tleTpcIm9uU2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30saT1lLmN1cnJlbnRUYXJnZXQsbj1lLmZpcmVkQnlJbml0U2VhcmNoVGV4dCxvPSEoYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0pfHxhcmd1bWVudHNbMV07aWYodm9pZCAwIT09aSYmdChpKS5sZW5ndGgmJm8pe3ZhciByPXQoaSkudmFsKCkudHJpbSgpO2lmKHRoaXMub3B0aW9ucy50cmltT25TZWFyY2gmJnQoaSkudmFsKCkhPT1yJiZ0KGkpLnZhbChyKSx0aGlzLnNlYXJjaFRleHQ9PT1yKXJldHVybjt0KGkpLmhhc0NsYXNzKFwic2VhcmNoLWlucHV0XCIpJiYodGhpcy5zZWFyY2hUZXh0PXIsdGhpcy5vcHRpb25zLnNlYXJjaFRleHQ9cil9bnx8KHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyPTEpLHRoaXMuaW5pdFNlYXJjaCgpLG4/XCJjbGllbnRcIj09PXRoaXMub3B0aW9ucy5zaWRlUGFnaW5hdGlvbiYmdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk6dGhpcy51cGRhdGVQYWdpbmF0aW9uKCksdGhpcy50cmlnZ2VyKFwic2VhcmNoXCIsdGhpcy5zZWFyY2hUZXh0KX19LHtrZXk6XCJpbml0U2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2lmKHRoaXMuZmlsdGVyT3B0aW9ucz10aGlzLmZpbHRlck9wdGlvbnN8fHRoaXMub3B0aW9ucy5maWx0ZXJPcHRpb25zLFwic2VydmVyXCIhPT10aGlzLm9wdGlvbnMuc2lkZVBhZ2luYXRpb24pe2lmKHRoaXMub3B0aW9ucy5jdXN0b21TZWFyY2gpcmV0dXJuIHZvaWQodGhpcy5kYXRhPU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKHRoaXMub3B0aW9ucyx0aGlzLm9wdGlvbnMuY3VzdG9tU2VhcmNoLFt0aGlzLm9wdGlvbnMuZGF0YSx0aGlzLnNlYXJjaFRleHQsdGhpcy5maWx0ZXJDb2x1bW5zXSkpO3ZhciBlPXRoaXMuc2VhcmNoVGV4dCYmKHRoaXMub3B0aW9ucy5lc2NhcGU/TW8uZXNjYXBlSFRNTCh0aGlzLnNlYXJjaFRleHQpOnRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKSxpPU1vLmlzRW1wdHlPYmplY3QodGhpcy5maWx0ZXJDb2x1bW5zKT9udWxsOnRoaXMuZmlsdGVyQ29sdW1ucztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmZpbHRlck9wdGlvbnMuZmlsdGVyQWxnb3JpdGhtP3RoaXMuZGF0YT10aGlzLm9wdGlvbnMuZGF0YS5maWx0ZXIoKGZ1bmN0aW9uKGUsbil7cmV0dXJuIHQuZmlsdGVyT3B0aW9ucy5maWx0ZXJBbGdvcml0aG0uYXBwbHkobnVsbCxbZSxpXSl9KSk6XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuZmlsdGVyT3B0aW9ucy5maWx0ZXJBbGdvcml0aG0mJih0aGlzLmRhdGE9aT90aGlzLm9wdGlvbnMuZGF0YS5maWx0ZXIoKGZ1bmN0aW9uKGUsbil7dmFyIG89dC5maWx0ZXJPcHRpb25zLmZpbHRlckFsZ29yaXRobTtpZihcImFuZFwiPT09byl7Zm9yKHZhciByIGluIGkpaWYoQXJyYXkuaXNBcnJheShpW3JdKSYmIWlbcl0uaW5jbHVkZXMoZVtyXSl8fCFBcnJheS5pc0FycmF5KGlbcl0pJiZlW3JdIT09aVtyXSlyZXR1cm4hMX1lbHNlIGlmKFwib3JcIj09PW8pe3ZhciBhPSExO2Zvcih2YXIgcyBpbiBpKShBcnJheS5pc0FycmF5KGlbc10pJiZpW3NdLmluY2x1ZGVzKGVbc10pfHwhQXJyYXkuaXNBcnJheShpW3NdKSYmZVtzXT09PWlbc10pJiYoYT0hMCk7cmV0dXJuIGF9cmV0dXJuITB9KSk6dGhpcy5vcHRpb25zLmRhdGEpO3ZhciBuPXRoaXMuZ2V0VmlzaWJsZUZpZWxkcygpO3RoaXMuZGF0YT1lP3RoaXMuZGF0YS5maWx0ZXIoKGZ1bmN0aW9uKGksbyl7Zm9yKHZhciByPTA7cjx0LmhlYWRlci5maWVsZHMubGVuZ3RoO3IrKylpZih0LmhlYWRlci5zZWFyY2hhYmxlc1tyXSYmKCF0Lm9wdGlvbnMudmlzaWJsZVNlYXJjaHx8LTEhPT1uLmluZGV4T2YodC5oZWFkZXIuZmllbGRzW3JdKSkpe3ZhciBhPU1vLmlzTnVtZXJpYyh0LmhlYWRlci5maWVsZHNbcl0pP3BhcnNlSW50KHQuaGVhZGVyLmZpZWxkc1tyXSwxMCk6dC5oZWFkZXIuZmllbGRzW3JdLHM9dC5jb2x1bW5zW3QuZmllbGRzQ29sdW1uc0luZGV4W2FdXSxsPXZvaWQgMDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7bD1pO2Zvcih2YXIgYz1hLnNwbGl0KFwiLlwiKSxoPTA7aDxjLmxlbmd0aDtoKyspbnVsbCE9PWxbY1toXV0mJihsPWxbY1toXV0pfWVsc2UgbD1pW2FdO2lmKHMmJnMuc2VhcmNoRm9ybWF0dGVyJiYobD1Nby5jYWxjdWxhdGVPYmplY3RWYWx1ZShzLHQuaGVhZGVyLmZvcm1hdHRlcnNbcl0sW2wsaSxvLHMuZmllbGRdLGwpKSxcInN0cmluZ1wiPT10eXBlb2YgbHx8XCJudW1iZXJcIj09dHlwZW9mIGwpaWYodC5vcHRpb25zLnN0cmljdFNlYXJjaCl7aWYoXCJcIi5jb25jYXQobCkudG9Mb3dlckNhc2UoKT09PWUpcmV0dXJuITB9ZWxzZXt2YXIgdT0vKD86KDw9fD0+fD08fD49fD58PCkoPzpcXHMrKT8oXFxkKyk/fChcXGQrKT8oXFxzKyk/KDw9fD0+fD08fD49fD58PCkpL2dtLmV4ZWMoZSksZD0hMTtpZih1KXt2YXIgZj11WzFdfHxcIlwiLmNvbmNhdCh1WzVdLFwibFwiKSxwPXVbMl18fHVbM10sZz1wYXJzZUludChsLDEwKSx2PXBhcnNlSW50KHAsMTApO3N3aXRjaChmKXtjYXNlXCI+XCI6Y2FzZVwiPGxcIjpkPWc+djticmVhaztjYXNlXCI8XCI6Y2FzZVwiPmxcIjpkPWc8djticmVhaztjYXNlXCI8PVwiOmNhc2VcIj08XCI6Y2FzZVwiPj1sXCI6Y2FzZVwiPT5sXCI6ZD1nPD12O2JyZWFrO2Nhc2VcIj49XCI6Y2FzZVwiPT5cIjpjYXNlXCI8PWxcIjpjYXNlXCI9PGxcIjpkPWc+PXZ9fWlmKGR8fFwiXCIuY29uY2F0KGwpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZSkpcmV0dXJuITB9fXJldHVybiExfSkpOnRoaXMuZGF0YX19fSx7a2V5OlwiaW5pdFBhZ2luYXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLm9wdGlvbnM7aWYoZS5wYWdpbmF0aW9uKXt0aGlzLiRwYWdpbmF0aW9uLnNob3coKTt2YXIgaSxuLG8scixhLHMsbCxjPVtdLGg9ITEsdT10aGlzLmdldERhdGEoe2luY2x1ZGVIaWRkZW5Sb3dzOiExfSksZD1lLnBhZ2VMaXN0O2lmKFwic2VydmVyXCIhPT1lLnNpZGVQYWdpbmF0aW9uJiYoZS50b3RhbFJvd3M9dS5sZW5ndGgpLHRoaXMudG90YWxQYWdlcz0wLGUudG90YWxSb3dzKXtpZihlLnBhZ2VTaXplPT09ZS5mb3JtYXRBbGxSb3dzKCkpZS5wYWdlU2l6ZT1lLnRvdGFsUm93cyxoPSEwO2Vsc2UgaWYoZS5wYWdlU2l6ZT09PWUudG90YWxSb3dzKXsoXCJzdHJpbmdcIj09dHlwZW9mIGUucGFnZUxpc3Q/ZS5wYWdlTGlzdC5yZXBsYWNlKFwiW1wiLFwiXCIpLnJlcGxhY2UoXCJdXCIsXCJcIikucmVwbGFjZSgvIC9nLFwiXCIpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIsXCIpOmUucGFnZUxpc3QpLmluY2x1ZGVzKGUuZm9ybWF0QWxsUm93cygpLnRvTG93ZXJDYXNlKCkpJiYoaD0hMCl9dGhpcy50b3RhbFBhZ2VzPTErfn4oKGUudG90YWxSb3dzLTEpL2UucGFnZVNpemUpLGUudG90YWxQYWdlcz10aGlzLnRvdGFsUGFnZXN9dGhpcy50b3RhbFBhZ2VzPjAmJmUucGFnZU51bWJlcj50aGlzLnRvdGFsUGFnZXMmJihlLnBhZ2VOdW1iZXI9dGhpcy50b3RhbFBhZ2VzKSx0aGlzLnBhZ2VGcm9tPShlLnBhZ2VOdW1iZXItMSkqZS5wYWdlU2l6ZSsxLHRoaXMucGFnZVRvPWUucGFnZU51bWJlciplLnBhZ2VTaXplLHRoaXMucGFnZVRvPmUudG90YWxSb3dzJiYodGhpcy5wYWdlVG89ZS50b3RhbFJvd3MpLHRoaXMub3B0aW9ucy5wYWdpbmF0aW9uJiZcInNlcnZlclwiIT09dGhpcy5vcHRpb25zLnNpZGVQYWdpbmF0aW9uJiYodGhpcy5vcHRpb25zLnRvdGFsTm90RmlsdGVyZWQ9dGhpcy5vcHRpb25zLmRhdGEubGVuZ3RoKSx0aGlzLm9wdGlvbnMuc2hvd0V4dGVuZGVkUGFnaW5hdGlvbnx8KHRoaXMub3B0aW9ucy50b3RhbE5vdEZpbHRlcmVkPXZvaWQgMCk7dmFyIGY9ZS5vbmx5SW5mb1BhZ2luYXRpb24/ZS5mb3JtYXREZXRhaWxQYWdpbmF0aW9uKGUudG90YWxSb3dzKTplLmZvcm1hdFNob3dpbmdSb3dzKHRoaXMucGFnZUZyb20sdGhpcy5wYWdlVG8sZS50b3RhbFJvd3MsZS50b3RhbE5vdEZpbHRlcmVkKTtpZihjLnB1c2goJzxkaXYgY2xhc3M9XCInLmNvbmNhdCh0aGlzLmNvbnN0YW50cy5jbGFzc2VzLnB1bGwsXCItXCIpLmNvbmNhdChlLnBhZ2luYXRpb25EZXRhaWxIQWxpZ24sJyBwYWdpbmF0aW9uLWRldGFpbFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1pbmZvXCI+XFxuICAgICAgJykuY29uY2F0KGYsXCJcXG4gICAgICA8L3NwYW4+XCIpKSwhZS5vbmx5SW5mb1BhZ2luYXRpb24pe2MucHVzaCgnPHNwYW4gY2xhc3M9XCJwYWdlLWxpc3RcIj4nKTt2YXIgcD1bJzxzcGFuIGNsYXNzPVwiJy5jb25jYXQodGhpcy5jb25zdGFudHMuY2xhc3Nlcy5wYWdpbmF0aW9uRHJvcGRvd24sJ1wiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIicpLmNvbmNhdCh0aGlzLmNvbnN0YW50cy5idXR0b25zQ2xhc3MsJyBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdlLXNpemVcIj5cXG4gICAgICAgICcpLmNvbmNhdChoP2UuZm9ybWF0QWxsUm93cygpOmUucGFnZVNpemUsXCJcXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIFwiKS5jb25jYXQodGhpcy5jb25zdGFudHMuaHRtbC5kcm9wZG93bkNhcmV0LFwiXFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIFwiKS5jb25jYXQodGhpcy5jb25zdGFudHMuaHRtbC5wYWdlRHJvcGRvd25bMF0pXTtpZihcInN0cmluZ1wiPT10eXBlb2YgZS5wYWdlTGlzdCl7dmFyIGc9ZS5wYWdlTGlzdC5yZXBsYWNlKFwiW1wiLFwiXCIpLnJlcGxhY2UoXCJdXCIsXCJcIikucmVwbGFjZSgvIC9nLFwiXCIpLnNwbGl0KFwiLFwiKTtkPVtdO3ZhciB2PSEwLGI9ITEseT12b2lkIDA7dHJ5e2Zvcih2YXIgbSx3PWdbU3ltYm9sLml0ZXJhdG9yXSgpOyEodj0obT13Lm5leHQoKSkuZG9uZSk7dj0hMCl7dmFyIFM9bS52YWx1ZTtkLnB1c2goUy50b0xvd2VyQ2FzZSgpPT09ZS5mb3JtYXRBbGxSb3dzKCkudG9Mb3dlckNhc2UoKXx8W1wiYWxsXCIsXCJ1bmxpbWl0ZWRcIl0uaW5jbHVkZXMoUy50b0xvd2VyQ2FzZSgpKT9lLmZvcm1hdEFsbFJvd3MoKTorUyl9fWNhdGNoKHQpe2I9ITAseT10fWZpbmFsbHl7dHJ5e3Z8fG51bGw9PXcucmV0dXJufHx3LnJldHVybigpfWZpbmFsbHl7aWYoYil0aHJvdyB5fX19ZC5mb3JFYWNoKChmdW5jdGlvbihpLG4pe3ZhciBvOyghZS5zbWFydERpc3BsYXl8fDA9PT1ufHxkW24tMV08ZS50b3RhbFJvd3MpJiYobz1oP2k9PT1lLmZvcm1hdEFsbFJvd3MoKT90LmNvbnN0YW50cy5jbGFzc2VzLmRyb3Bkb3duQWN0aXZlOlwiXCI6aT09PWUucGFnZVNpemU/dC5jb25zdGFudHMuY2xhc3Nlcy5kcm9wZG93bkFjdGl2ZTpcIlwiLHAucHVzaChNby5zcHJpbnRmKHQuY29uc3RhbnRzLmh0bWwucGFnZURyb3Bkb3duSXRlbSxvLGkpKSl9KSkscC5wdXNoKFwiXCIuY29uY2F0KHRoaXMuY29uc3RhbnRzLmh0bWwucGFnZURyb3Bkb3duWzFdLFwiPC9zcGFuPlwiKSksYy5wdXNoKGUuZm9ybWF0UmVjb3Jkc1BlclBhZ2UocC5qb2luKFwiXCIpKSksYy5wdXNoKFwiPC9zcGFuPjwvZGl2PlwiKSxjLnB1c2goJzxkaXYgY2xhc3M9XCInLmNvbmNhdCh0aGlzLmNvbnN0YW50cy5jbGFzc2VzLnB1bGwsXCItXCIpLmNvbmNhdChlLnBhZ2luYXRpb25IQWxpZ24sJyBwYWdpbmF0aW9uXCI+JyksTW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLnBhZ2luYXRpb25bMF0sTW8uc3ByaW50ZihcIiBwYWdpbmF0aW9uLSVzXCIsZS5pY29uU2l6ZSkpLE1vLnNwcmludGYodGhpcy5jb25zdGFudHMuaHRtbC5wYWdpbmF0aW9uSXRlbSxcIiBwYWdlLXByZVwiLGUuZm9ybWF0U1JQYWdpbmF0aW9uUHJlVGV4dCgpLGUucGFnaW5hdGlvblByZVRleHQpKSx0aGlzLnRvdGFsUGFnZXM8ZS5wYWdpbmF0aW9uU3VjY2Vzc2l2ZWx5U2l6ZT8obj0xLG89dGhpcy50b3RhbFBhZ2VzKTpvPShuPWUucGFnZU51bWJlci1lLnBhZ2luYXRpb25QYWdlc0J5U2lkZSkrMiplLnBhZ2luYXRpb25QYWdlc0J5U2lkZSxlLnBhZ2VOdW1iZXI8ZS5wYWdpbmF0aW9uU3VjY2Vzc2l2ZWx5U2l6ZS0xJiYobz1lLnBhZ2luYXRpb25TdWNjZXNzaXZlbHlTaXplKSxlLnBhZ2luYXRpb25TdWNjZXNzaXZlbHlTaXplPnRoaXMudG90YWxQYWdlcy1uJiYobj1uLShlLnBhZ2luYXRpb25TdWNjZXNzaXZlbHlTaXplLSh0aGlzLnRvdGFsUGFnZXMtbikpKzEpLG48MSYmKG49MSksbz50aGlzLnRvdGFsUGFnZXMmJihvPXRoaXMudG90YWxQYWdlcyk7dmFyIHg9TWF0aC5yb3VuZChlLnBhZ2luYXRpb25QYWdlc0J5U2lkZS8yKSxrPWZ1bmN0aW9uKGkpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcIlwiO3JldHVybiBNby5zcHJpbnRmKHQuY29uc3RhbnRzLmh0bWwucGFnaW5hdGlvbkl0ZW0sbisoaT09PWUucGFnZU51bWJlcj9cIiBcIi5jb25jYXQodC5jb25zdGFudHMuY2xhc3Nlcy5wYWdpbmF0aW9uQWN0aXZlKTpcIlwiKSxlLmZvcm1hdFNSUGFnaW5hdGlvblBhZ2VUZXh0KGkpLGkpfTtpZihuPjEpe3ZhciBPPWUucGFnaW5hdGlvblBhZ2VzQnlTaWRlO2ZvcihPPj1uJiYoTz1uLTEpLGk9MTtpPD1PO2krKyljLnB1c2goayhpKSk7bi0xPT09TysxPyhpPW4tMSxjLnB1c2goayhpKSkpOm4tMT5PJiYobi0yKmUucGFnaW5hdGlvblBhZ2VzQnlTaWRlPmUucGFnaW5hdGlvblBhZ2VzQnlTaWRlJiZlLnBhZ2luYXRpb25Vc2VJbnRlcm1lZGlhdGU/KGk9TWF0aC5yb3VuZCgobi14KS8yK3gpLGMucHVzaChrKGksXCIgcGFnZS1pbnRlcm1lZGlhdGVcIikpKTpjLnB1c2goTW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLnBhZ2luYXRpb25JdGVtLFwiIHBhZ2UtZmlyc3Qtc2VwYXJhdG9yIGRpc2FibGVkXCIsXCJcIixcIi4uLlwiKSkpfWZvcihpPW47aTw9bztpKyspYy5wdXNoKGsoaSkpO2lmKHRoaXMudG90YWxQYWdlcz5vKXt2YXIgVD10aGlzLnRvdGFsUGFnZXMtKGUucGFnaW5hdGlvblBhZ2VzQnlTaWRlLTEpO2ZvcihvPj1UJiYoVD1vKzEpLG8rMT09PVQtMT8oaT1vKzEsYy5wdXNoKGsoaSkpKTpUPm8rMSYmKHRoaXMudG90YWxQYWdlcy1vPjIqZS5wYWdpbmF0aW9uUGFnZXNCeVNpZGUmJmUucGFnaW5hdGlvblVzZUludGVybWVkaWF0ZT8oaT1NYXRoLnJvdW5kKCh0aGlzLnRvdGFsUGFnZXMteC1vKS8yK28pLGMucHVzaChrKGksXCIgcGFnZS1pbnRlcm1lZGlhdGVcIikpKTpjLnB1c2goTW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLnBhZ2luYXRpb25JdGVtLFwiIHBhZ2UtbGFzdC1zZXBhcmF0b3IgZGlzYWJsZWRcIixcIlwiLFwiLi4uXCIpKSksaT1UO2k8PXRoaXMudG90YWxQYWdlcztpKyspYy5wdXNoKGsoaSkpfWMucHVzaChNby5zcHJpbnRmKHRoaXMuY29uc3RhbnRzLmh0bWwucGFnaW5hdGlvbkl0ZW0sXCIgcGFnZS1uZXh0XCIsZS5mb3JtYXRTUlBhZ2luYXRpb25OZXh0VGV4dCgpLGUucGFnaW5hdGlvbk5leHRUZXh0KSksYy5wdXNoKHRoaXMuY29uc3RhbnRzLmh0bWwucGFnaW5hdGlvblsxXSxcIjwvZGl2PlwiKX10aGlzLiRwYWdpbmF0aW9uLmh0bWwoYy5qb2luKFwiXCIpKTt2YXIgQz1bXCJib3R0b21cIixcImJvdGhcIl0uaW5jbHVkZXMoZS5wYWdpbmF0aW9uVkFsaWduKT9cIiBcIi5jb25jYXQodGhpcy5jb25zdGFudHMuY2xhc3Nlcy5kcm9wdXApOlwiXCI7dGhpcy4kcGFnaW5hdGlvbi5sYXN0KCkuZmluZChcIi5wYWdlLWxpc3QgPiBzcGFuXCIpLmFkZENsYXNzKEMpLGUub25seUluZm9QYWdpbmF0aW9ufHwocj10aGlzLiRwYWdpbmF0aW9uLmZpbmQoXCIucGFnZS1saXN0IGFcIiksYT10aGlzLiRwYWdpbmF0aW9uLmZpbmQoXCIucGFnZS1wcmVcIikscz10aGlzLiRwYWdpbmF0aW9uLmZpbmQoXCIucGFnZS1uZXh0XCIpLGw9dGhpcy4kcGFnaW5hdGlvbi5maW5kKFwiLnBhZ2UtaXRlbVwiKS5ub3QoXCIucGFnZS1uZXh0LCAucGFnZS1wcmUsIC5wYWdlLWxhc3Qtc2VwYXJhdG9yLCAucGFnZS1maXJzdC1zZXBhcmF0b3JcIiksdGhpcy50b3RhbFBhZ2VzPD0xJiZ0aGlzLiRwYWdpbmF0aW9uLmZpbmQoXCJkaXYucGFnaW5hdGlvblwiKS5oaWRlKCksZS5zbWFydERpc3BsYXkmJihkLmxlbmd0aDwyfHxlLnRvdGFsUm93czw9ZFswXSkmJnRoaXMuJHBhZ2luYXRpb24uZmluZChcInNwYW4ucGFnZS1saXN0XCIpLmhpZGUoKSx0aGlzLiRwYWdpbmF0aW9uW3RoaXMuZ2V0RGF0YSgpLmxlbmd0aD9cInNob3dcIjpcImhpZGVcIl0oKSxlLnBhZ2luYXRpb25Mb29wfHwoMT09PWUucGFnZU51bWJlciYmYS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGUucGFnZU51bWJlcj09PXRoaXMudG90YWxQYWdlcyYmcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpKSxoJiYoZS5wYWdlU2l6ZT1lLmZvcm1hdEFsbFJvd3MoKSksci5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe3JldHVybiB0Lm9uUGFnZUxpc3RDaGFuZ2UoZSl9KSksYS5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe3JldHVybiB0Lm9uUGFnZVByZShlKX0pKSxzLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIHQub25QYWdlTmV4dChlKX0pKSxsLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIHQub25QYWdlTnVtYmVyKGUpfSkpKX1lbHNlIHRoaXMuJHBhZ2luYXRpb24uaGlkZSgpfX0se2tleTpcInVwZGF0ZVBhZ2luYXRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtlJiZ0KGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8KHRoaXMub3B0aW9ucy5tYWludGFpbk1ldGFEYXRhfHx0aGlzLnJlc2V0Um93cygpLHRoaXMuaW5pdFBhZ2luYXRpb24oKSxcInNlcnZlclwiPT09dGhpcy5vcHRpb25zLnNpZGVQYWdpbmF0aW9uP3RoaXMuaW5pdFNlcnZlcigpOnRoaXMuaW5pdEJvZHkoKSx0aGlzLnRyaWdnZXIoXCJwYWdlLWNoYW5nZVwiLHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyLHRoaXMub3B0aW9ucy5wYWdlU2l6ZSkpfX0se2tleTpcIm9uUGFnZUxpc3RDaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIGk9dChlLmN1cnJlbnRUYXJnZXQpO3JldHVybiBpLnBhcmVudCgpLmFkZENsYXNzKHRoaXMuY29uc3RhbnRzLmNsYXNzZXMuZHJvcGRvd25BY3RpdmUpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3ModGhpcy5jb25zdGFudHMuY2xhc3Nlcy5kcm9wZG93bkFjdGl2ZSksdGhpcy5vcHRpb25zLnBhZ2VTaXplPWkudGV4dCgpLnRvVXBwZXJDYXNlKCk9PT10aGlzLm9wdGlvbnMuZm9ybWF0QWxsUm93cygpLnRvVXBwZXJDYXNlKCk/dGhpcy5vcHRpb25zLmZvcm1hdEFsbFJvd3MoKToraS50ZXh0KCksdGhpcy4kdG9vbGJhci5maW5kKFwiLnBhZ2Utc2l6ZVwiKS50ZXh0KHRoaXMub3B0aW9ucy5wYWdlU2l6ZSksdGhpcy51cGRhdGVQYWdpbmF0aW9uKGUpLCExfX0se2tleTpcIm9uUGFnZVByZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0LnByZXZlbnREZWZhdWx0KCksdGhpcy5vcHRpb25zLnBhZ2VOdW1iZXItMT09MD90aGlzLm9wdGlvbnMucGFnZU51bWJlcj10aGlzLm9wdGlvbnMudG90YWxQYWdlczp0aGlzLm9wdGlvbnMucGFnZU51bWJlci0tLHRoaXMudXBkYXRlUGFnaW5hdGlvbih0KSwhMX19LHtrZXk6XCJvblBhZ2VOZXh0XCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHQucHJldmVudERlZmF1bHQoKSx0aGlzLm9wdGlvbnMucGFnZU51bWJlcisxPnRoaXMub3B0aW9ucy50b3RhbFBhZ2VzP3RoaXMub3B0aW9ucy5wYWdlTnVtYmVyPTE6dGhpcy5vcHRpb25zLnBhZ2VOdW1iZXIrKyx0aGlzLnVwZGF0ZVBhZ2luYXRpb24odCksITF9fSx7a2V5Olwib25QYWdlTnVtYmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyIT09K3QoZS5jdXJyZW50VGFyZ2V0KS50ZXh0KCkpcmV0dXJuIHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyPSt0KGUuY3VycmVudFRhcmdldCkudGV4dCgpLHRoaXMudXBkYXRlUGFnaW5hdGlvbihlKSwhMX19LHtrZXk6XCJpbml0Um93XCIsdmFsdWU6ZnVuY3Rpb24odCxlLGksbil7dmFyIG89dGhpcyxyPVtdLGE9e30scz1bXSxsPVwiXCIsYz17fSxoPVtdO2lmKCEoTW8uZmluZEluZGV4KHRoaXMuaGlkZGVuUm93cyx0KT4tMSkpe2lmKChhPU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKHRoaXMub3B0aW9ucyx0aGlzLm9wdGlvbnMucm93U3R5bGUsW3QsZV0sYSkpJiZhLmNzcylmb3IodmFyIHU9MCxkPU9iamVjdC5lbnRyaWVzKGEuY3NzKTt1PGQubGVuZ3RoO3UrKyl7dmFyIGY9QW8oZFt1XSwyKSxwPWZbMF0sZz1mWzFdO3MucHVzaChcIlwiLmNvbmNhdChwLFwiOiBcIikuY29uY2F0KGcpKX1pZihjPU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKHRoaXMub3B0aW9ucyx0aGlzLm9wdGlvbnMucm93QXR0cmlidXRlcyxbdCxlXSxjKSlmb3IodmFyIHY9MCxiPU9iamVjdC5lbnRyaWVzKGMpO3Y8Yi5sZW5ndGg7disrKXt2YXIgeT1BbyhiW3ZdLDIpO3A9eVswXSxnPXlbMV07aC5wdXNoKFwiXCIuY29uY2F0KHAsJz1cIicpLmNvbmNhdChNby5lc2NhcGVIVE1MKGcpLCdcIicpKX1pZih0Ll9kYXRhJiYhTW8uaXNFbXB0eU9iamVjdCh0Ll9kYXRhKSlmb3IodmFyIG09MCx3PU9iamVjdC5lbnRyaWVzKHQuX2RhdGEpO208dy5sZW5ndGg7bSsrKXt2YXIgUz1Bbyh3W21dLDIpLHg9U1swXSxrPVNbMV07aWYoXCJpbmRleFwiPT09eClyZXR1cm47bCs9XCIgZGF0YS1cIi5jb25jYXQoeCxcIj0nXCIpLmNvbmNhdChcIm9iamVjdFwiPT09Q28oayk/SlNPTi5zdHJpbmdpZnkoayk6ayxcIidcIil9cmV0dXJuIHIucHVzaChcIjx0clwiLE1vLnNwcmludGYoXCIgJXNcIixoLmxlbmd0aD9oLmpvaW4oXCIgXCIpOnZvaWQgMCksTW8uc3ByaW50ZignIGlkPVwiJXNcIicsQXJyYXkuaXNBcnJheSh0KT92b2lkIDA6dC5faWQpLE1vLnNwcmludGYoJyBjbGFzcz1cIiVzXCInLGEuY2xhc3Nlc3x8KEFycmF5LmlzQXJyYXkodCk/dm9pZCAwOnQuX2NsYXNzKSksJyBkYXRhLWluZGV4PVwiJy5jb25jYXQoZSwnXCInKSxNby5zcHJpbnRmKCcgZGF0YS11bmlxdWVpZD1cIiVzXCInLE1vLmdldEl0ZW1GaWVsZCh0LHRoaXMub3B0aW9ucy51bmlxdWVJZCwhMSkpLE1vLnNwcmludGYoJyBkYXRhLWhhcy1kZXRhaWwtdmlldz1cIiVzXCInLCF0aGlzLm9wdGlvbnMuY2FyZFZpZXcmJnRoaXMub3B0aW9ucy5kZXRhaWxWaWV3JiZNby5jYWxjdWxhdGVPYmplY3RWYWx1ZShudWxsLHRoaXMub3B0aW9ucy5kZXRhaWxGaWx0ZXIsW2UsdF0pP1widHJ1ZVwiOnZvaWQgMCksTW8uc3ByaW50ZihcIiVzXCIsbCksXCI+XCIpLHRoaXMub3B0aW9ucy5jYXJkVmlldyYmci5wdXNoKCc8dGQgY29sc3Bhbj1cIicuY29uY2F0KHRoaXMuaGVhZGVyLmZpZWxkcy5sZW5ndGgsJ1wiPjxkaXYgY2xhc3M9XCJjYXJkLXZpZXdzXCI+JykpLCF0aGlzLm9wdGlvbnMuY2FyZFZpZXcmJnRoaXMub3B0aW9ucy5kZXRhaWxWaWV3JiZ0aGlzLm9wdGlvbnMuZGV0YWlsVmlld0ljb24mJihyLnB1c2goXCI8dGQ+XCIpLE1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKG51bGwsdGhpcy5vcHRpb25zLmRldGFpbEZpbHRlcixbZSx0XSkmJnIucHVzaCgnXFxuICAgICAgICAgIDxhIGNsYXNzPVwiZGV0YWlsLWljb25cIiBocmVmPVwiI1wiPlxcbiAgICAgICAgICAnLmNvbmNhdChNby5zcHJpbnRmKHRoaXMuY29uc3RhbnRzLmh0bWwuaWNvbix0aGlzLm9wdGlvbnMuaWNvbnNQcmVmaXgsdGhpcy5vcHRpb25zLmljb25zLmRldGFpbE9wZW4pLFwiXFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIFwiKSksci5wdXNoKFwiPC90ZD5cIikpLHRoaXMuaGVhZGVyLmZpZWxkcy5mb3JFYWNoKChmdW5jdGlvbihpLG4pe3ZhciBhPVwiXCIsbD1Nby5nZXRJdGVtRmllbGQodCxpLG8ub3B0aW9ucy5lc2NhcGUpLGM9XCJcIixoPVwiXCIsdT17fSxkPVwiXCIsZj1vLmhlYWRlci5jbGFzc2VzW25dLHA9XCJcIixnPVwiXCIsdj1cIlwiLGI9XCJcIix5PVwiXCIsbT1vLmNvbHVtbnNbbl07aWYoKCFvLmZyb21IdG1sfHx2b2lkIDAhPT1sfHxtLmNoZWNrYm94fHxtLnJhZGlvKSYmbS52aXNpYmxlJiYoIW8ub3B0aW9ucy5jYXJkVmlld3x8bS5jYXJkVmlzaWJsZSkpe2lmKG0uZXNjYXBlJiYobD1Nby5lc2NhcGVIVE1MKGwpKSxzLmNvbmNhdChbby5oZWFkZXIuc3R5bGVzW25dXSkubGVuZ3RoJiYocD0nIHN0eWxlPVwiJy5jb25jYXQocy5jb25jYXQoW28uaGVhZGVyLnN0eWxlc1tuXV0pLmpvaW4oXCI7IFwiKSwnXCInKSksdFtcIl9cIi5jb25jYXQoaSxcIl9pZFwiKV0mJihkPU1vLnNwcmludGYoJyBpZD1cIiVzXCInLHRbXCJfXCIuY29uY2F0KGksXCJfaWRcIildKSksdFtcIl9cIi5jb25jYXQoaSxcIl9jbGFzc1wiKV0mJihmPU1vLnNwcmludGYoJyBjbGFzcz1cIiVzXCInLHRbXCJfXCIuY29uY2F0KGksXCJfY2xhc3NcIildKSksdFtcIl9cIi5jb25jYXQoaSxcIl9yb3dzcGFuXCIpXSYmKHY9TW8uc3ByaW50ZignIHJvd3NwYW49XCIlc1wiJyx0W1wiX1wiLmNvbmNhdChpLFwiX3Jvd3NwYW5cIildKSksdFtcIl9cIi5jb25jYXQoaSxcIl9jb2xzcGFuXCIpXSYmKGI9TW8uc3ByaW50ZignIGNvbHNwYW49XCIlc1wiJyx0W1wiX1wiLmNvbmNhdChpLFwiX2NvbHNwYW5cIildKSksdFtcIl9cIi5jb25jYXQoaSxcIl90aXRsZVwiKV0mJih5PU1vLnNwcmludGYoJyB0aXRsZT1cIiVzXCInLHRbXCJfXCIuY29uY2F0KGksXCJfdGl0bGVcIildKSksKHU9TW8uY2FsY3VsYXRlT2JqZWN0VmFsdWUoby5oZWFkZXIsby5oZWFkZXIuY2VsbFN0eWxlc1tuXSxbbCx0LGUsaV0sdSkpLmNsYXNzZXMmJihmPScgY2xhc3M9XCInLmNvbmNhdCh1LmNsYXNzZXMsJ1wiJykpLHUuY3NzKXtmb3IodmFyIHc9W10sUz0wLHg9T2JqZWN0LmVudHJpZXModS5jc3MpO1M8eC5sZW5ndGg7UysrKXt2YXIgaz1Bbyh4W1NdLDIpLE89a1swXSxUPWtbMV07dy5wdXNoKFwiXCIuY29uY2F0KE8sXCI6IFwiKS5jb25jYXQoVCkpfXA9JyBzdHlsZT1cIicuY29uY2F0KHcuY29uY2F0KG8uaGVhZGVyLnN0eWxlc1tuXSkuam9pbihcIjsgXCIpLCdcIicpfWlmKGM9TW8uY2FsY3VsYXRlT2JqZWN0VmFsdWUobSxvLmhlYWRlci5mb3JtYXR0ZXJzW25dLFtsLHQsZSxpXSxsKSx0W1wiX1wiLmNvbmNhdChpLFwiX2RhdGFcIildJiYhTW8uaXNFbXB0eU9iamVjdCh0W1wiX1wiLmNvbmNhdChpLFwiX2RhdGFcIildKSlmb3IodmFyIEM9MCxQPU9iamVjdC5lbnRyaWVzKHRbXCJfXCIuY29uY2F0KGksXCJfZGF0YVwiKV0pO0M8UC5sZW5ndGg7QysrKXt2YXIgJD1BbyhQW0NdLDIpLEk9JFswXSxBPSRbMV07aWYoXCJpbmRleFwiPT09SSlyZXR1cm47Zys9XCIgZGF0YS1cIi5jb25jYXQoSSwnPVwiJykuY29uY2F0KEEsJ1wiJyl9aWYobS5jaGVja2JveHx8bS5yYWRpbyl7aD1tLmNoZWNrYm94P1wiY2hlY2tib3hcIjpoLGg9bS5yYWRpbz9cInJhZGlvXCI6aDt2YXIgRT1tLmNsYXNzfHxcIlwiLFI9KCEwPT09Y3x8bHx8YyYmYy5jaGVja2VkKSYmITEhPT1jLE49IW0uY2hlY2tib3hFbmFibGVkfHxjJiZjLmRpc2FibGVkO2E9W28ub3B0aW9ucy5jYXJkVmlldz8nPGRpdiBjbGFzcz1cImNhcmQtdmlldyAnLmNvbmNhdChFLCdcIj4nKTonPHRkIGNsYXNzPVwiYnMtY2hlY2tib3ggJy5jb25jYXQoRSwnXCInKS5jb25jYXQoZikuY29uY2F0KHAsXCI+XCIpLCc8bGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgZGF0YS1pbmRleD1cIicuY29uY2F0KGUsJ1wiXFxuICAgICAgICAgICAgbmFtZT1cIicpLmNvbmNhdChvLm9wdGlvbnMuc2VsZWN0SXRlbU5hbWUsJ1wiXFxuICAgICAgICAgICAgdHlwZT1cIicpLmNvbmNhdChoLCdcIlxcbiAgICAgICAgICAgICcpLmNvbmNhdChNby5zcHJpbnRmKCd2YWx1ZT1cIiVzXCInLHRbby5vcHRpb25zLmlkRmllbGRdKSxcIlxcbiAgICAgICAgICAgIFwiKS5jb25jYXQoTW8uc3ByaW50ZignY2hlY2tlZD1cIiVzXCInLFI/XCJjaGVja2VkXCI6dm9pZCAwKSxcIlxcbiAgICAgICAgICAgIFwiKS5jb25jYXQoTW8uc3ByaW50ZignZGlzYWJsZWQ9XCIlc1wiJyxOP1wiZGlzYWJsZWRcIjp2b2lkIDApLFwiIC8+XFxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvbGFiZWw+XCIpLG8uaGVhZGVyLmZvcm1hdHRlcnNbbl0mJlwic3RyaW5nXCI9PXR5cGVvZiBjP2M6XCJcIixvLm9wdGlvbnMuY2FyZFZpZXc/XCI8L2Rpdj5cIjpcIjwvdGQ+XCJdLmpvaW4oXCJcIiksdFtvLmhlYWRlci5zdGF0ZUZpZWxkXT0hMD09PWN8fCEhbHx8YyYmYy5jaGVja2VkfWVsc2UgaWYoYz1udWxsPT1jP28ub3B0aW9ucy51bmRlZmluZWRUZXh0OmMsby5vcHRpb25zLmNhcmRWaWV3KXt2YXIgaj1vLm9wdGlvbnMuc2hvd0hlYWRlcj8nPHNwYW4gY2xhc3M9XCJjYXJkLXZpZXctdGl0bGVcIicuY29uY2F0KHAsXCI+XCIpLmNvbmNhdChNby5nZXRGaWVsZFRpdGxlKG8uY29sdW1ucyxpKSxcIjwvc3Bhbj5cIik6XCJcIjthPSc8ZGl2IGNsYXNzPVwiY2FyZC12aWV3XCI+Jy5jb25jYXQoaiwnPHNwYW4gY2xhc3M9XCJjYXJkLXZpZXctdmFsdWVcIj4nKS5jb25jYXQoYyxcIjwvc3Bhbj48L2Rpdj5cIiksby5vcHRpb25zLnNtYXJ0RGlzcGxheSYmXCJcIj09PWMmJihhPSc8ZGl2IGNsYXNzPVwiY2FyZC12aWV3XCI+PC9kaXY+Jyl9ZWxzZSBhPVwiPHRkXCIuY29uY2F0KGQpLmNvbmNhdChmKS5jb25jYXQocCkuY29uY2F0KGcpLmNvbmNhdCh2KS5jb25jYXQoYikuY29uY2F0KHksXCI+XCIpLmNvbmNhdChjLFwiPC90ZD5cIik7ci5wdXNoKGEpfX0pKSx0aGlzLm9wdGlvbnMuY2FyZFZpZXcmJnIucHVzaChcIjwvZGl2PjwvdGQ+XCIpLHIucHVzaChcIjwvdHI+XCIpLHIuam9pbihcIlwiKX19fSx7a2V5OlwiaW5pdEJvZHlcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgaT10aGlzLG49dGhpcy5nZXREYXRhKCk7dGhpcy50cmlnZ2VyKFwicHJlLWJvZHlcIixuKSx0aGlzLiRib2R5PXRoaXMuJGVsLmZpbmQoXCI+dGJvZHlcIiksdGhpcy4kYm9keS5sZW5ndGh8fCh0aGlzLiRib2R5PXQoXCI8dGJvZHk+PC90Ym9keT5cIikuYXBwZW5kVG8odGhpcy4kZWwpKSx0aGlzLm9wdGlvbnMucGFnaW5hdGlvbiYmXCJzZXJ2ZXJcIiE9PXRoaXMub3B0aW9ucy5zaWRlUGFnaW5hdGlvbnx8KHRoaXMucGFnZUZyb209MSx0aGlzLnBhZ2VUbz1uLmxlbmd0aCk7Zm9yKHZhciBvPVtdLHI9dChkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLGE9ITEscz10aGlzLnBhZ2VGcm9tLTE7czx0aGlzLnBhZ2VUbztzKyspe3ZhciBsPW5bc10sYz10aGlzLmluaXRSb3cobCxzLG4scik7YT1hfHwhIWMsYyYmXCJzdHJpbmdcIj09dHlwZW9mIGMmJih0aGlzLm9wdGlvbnMudmlydHVhbFNjcm9sbD9vLnB1c2goYyk6ci5hcHBlbmQoYykpfWE/dGhpcy5vcHRpb25zLnZpcnR1YWxTY3JvbGw/KHRoaXMudmlydHVhbFNjcm9sbCYmdGhpcy52aXJ0dWFsU2Nyb2xsLmRlc3Ryb3koKSx0aGlzLnZpcnR1YWxTY3JvbGw9bmV3IFVvKHtyb3dzOm8sZml4ZWRTY3JvbGw6ZSxzY3JvbGxFbDp0aGlzLiR0YWJsZUJvZHlbMF0sY29udGVudEVsOnRoaXMuJGJvZHlbMF0saXRlbUhlaWdodDp0aGlzLm9wdGlvbnMudmlydHVhbFNjcm9sbEl0ZW1IZWlnaHQsY2FsbGJhY2s6ZnVuY3Rpb24oKXtpLmZpdEhlYWRlcigpLGkuaW5pdEJvZHlFdmVudCgpfX0pKTp0aGlzLiRib2R5Lmh0bWwocik6dGhpcy4kYm9keS5odG1sKCc8dHIgY2xhc3M9XCJuby1yZWNvcmRzLWZvdW5kXCI+Jy5jb25jYXQoTW8uc3ByaW50ZignPHRkIGNvbHNwYW49XCIlc1wiPiVzPC90ZD4nLHRoaXMuJGhlYWRlci5maW5kKFwidGhcIikubGVuZ3RoLHRoaXMub3B0aW9ucy5mb3JtYXROb01hdGNoZXMoKSksXCI8L3RyPlwiKSksZXx8dGhpcy5zY3JvbGxUbygwKSx0aGlzLmluaXRCb2R5RXZlbnQoKSx0aGlzLnVwZGF0ZVNlbGVjdGVkKCksdGhpcy5pbml0Rm9vdGVyKCksdGhpcy5yZXNldFZpZXcoKSxcInNlcnZlclwiIT09dGhpcy5vcHRpb25zLnNpZGVQYWdpbmF0aW9uJiYodGhpcy5vcHRpb25zLnRvdGFsUm93cz1uLmxlbmd0aCksdGhpcy50cmlnZ2VyKFwicG9zdC1ib2R5XCIsbil9fSx7a2V5OlwiaW5pdEJvZHlFdmVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLiRib2R5LmZpbmQoXCI+IHRyW2RhdGEtaW5kZXhdID4gdGRcIikub2ZmKFwiY2xpY2sgZGJsY2xpY2tcIikub24oXCJjbGljayBkYmxjbGlja1wiLChmdW5jdGlvbihpKXt2YXIgbj10KGkuY3VycmVudFRhcmdldCksbz1uLnBhcmVudCgpLHI9dChpLnRhcmdldCkucGFyZW50cyhcIi5jYXJkLXZpZXdzXCIpLmNoaWxkcmVuKCksYT10KGkudGFyZ2V0KS5wYXJlbnRzKFwiLmNhcmQtdmlld1wiKSxzPW8uZGF0YShcImluZGV4XCIpLGw9ZS5kYXRhW3NdLGM9ZS5vcHRpb25zLmNhcmRWaWV3P3IuaW5kZXgoYSk6blswXS5jZWxsSW5kZXgsaD1lLmdldFZpc2libGVGaWVsZHMoKVtlLm9wdGlvbnMuZGV0YWlsVmlldyYmZS5vcHRpb25zLmRldGFpbFZpZXdJY29uJiYhZS5vcHRpb25zLmNhcmRWaWV3P2MtMTpjXSx1PWUuY29sdW1uc1tlLmZpZWxkc0NvbHVtbnNJbmRleFtoXV0sZD1Nby5nZXRJdGVtRmllbGQobCxoLGUub3B0aW9ucy5lc2NhcGUpO2lmKCFuLmZpbmQoXCIuZGV0YWlsLWljb25cIikubGVuZ3RoKXtpZihlLnRyaWdnZXIoXCJjbGlja1wiPT09aS50eXBlP1wiY2xpY2stY2VsbFwiOlwiZGJsLWNsaWNrLWNlbGxcIixoLGQsbCxuKSxlLnRyaWdnZXIoXCJjbGlja1wiPT09aS50eXBlP1wiY2xpY2stcm93XCI6XCJkYmwtY2xpY2stcm93XCIsbCxvLGgpLFwiY2xpY2tcIj09PWkudHlwZSYmZS5vcHRpb25zLmNsaWNrVG9TZWxlY3QmJnUuY2xpY2tUb1NlbGVjdCYmIU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKGUub3B0aW9ucyxlLm9wdGlvbnMuaWdub3JlQ2xpY2tUb1NlbGVjdE9uLFtpLnRhcmdldF0pKXt2YXIgZj1vLmZpbmQoTW8uc3ByaW50ZignW25hbWU9XCIlc1wiXScsZS5vcHRpb25zLnNlbGVjdEl0ZW1OYW1lKSk7Zi5sZW5ndGgmJmZbMF0uY2xpY2soKX1cImNsaWNrXCI9PT1pLnR5cGUmJmUub3B0aW9ucy5kZXRhaWxWaWV3QnlDbGljayYmZS50b2dnbGVEZXRhaWxWaWV3KHMsZS5oZWFkZXIuZGV0YWlsRm9ybWF0dGVyc1tlLmZpZWxkc0NvbHVtbnNJbmRleFtoXV0pfX0pKS5vZmYoXCJtb3VzZWRvd25cIikub24oXCJtb3VzZWRvd25cIiwoZnVuY3Rpb24odCl7ZS5tdWx0aXBsZVNlbGVjdFJvd0N0cmxLZXk9dC5jdHJsS2V5fHx0Lm1ldGFLZXksZS5tdWx0aXBsZVNlbGVjdFJvd1NoaWZ0S2V5PXQuc2hpZnRLZXl9KSksdGhpcy4kYm9keS5maW5kKFwiPiB0cltkYXRhLWluZGV4XSA+IHRkID4gLmRldGFpbC1pY29uXCIpLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwoZnVuY3Rpb24oaSl7cmV0dXJuIGkucHJldmVudERlZmF1bHQoKSxlLnRvZ2dsZURldGFpbFZpZXcodChpLmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLnBhcmVudCgpLmRhdGEoXCJpbmRleFwiKSksITF9KSksdGhpcy4kc2VsZWN0SXRlbT10aGlzLiRib2R5LmZpbmQoTW8uc3ByaW50ZignW25hbWU9XCIlc1wiXScsdGhpcy5vcHRpb25zLnNlbGVjdEl0ZW1OYW1lKSksdGhpcy4kc2VsZWN0SXRlbS5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsKGZ1bmN0aW9uKGkpe2kuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7dmFyIG49dChpLmN1cnJlbnRUYXJnZXQpO2UuX3RvZ2dsZUNoZWNrKG4ucHJvcChcImNoZWNrZWRcIiksbi5kYXRhKFwiaW5kZXhcIikpfSkpLHRoaXMuaGVhZGVyLmV2ZW50cy5mb3JFYWNoKChmdW5jdGlvbihpLG4pe3ZhciBvPWk7aWYobyl7XCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKG51bGwsbykpO3ZhciByPWUuaGVhZGVyLmZpZWxkc1tuXSxhPWUuZ2V0VmlzaWJsZUZpZWxkcygpLmluZGV4T2Yocik7aWYoLTEhPT1hKXtlLm9wdGlvbnMuZGV0YWlsVmlldyYmIWUub3B0aW9ucy5jYXJkVmlldyYmKGErPTEpO3ZhciBzPWZ1bmN0aW9uKGkpe2lmKCFvLmhhc093blByb3BlcnR5KGkpKXJldHVyblwiY29udGludWVcIjt2YXIgbj1vW2ldO2UuJGJvZHkuZmluZChcIj50cjpub3QoLm5vLXJlY29yZHMtZm91bmQpXCIpLmVhY2goKGZ1bmN0aW9uKG8scyl7dmFyIGw9dChzKSxjPWwuZmluZChlLm9wdGlvbnMuY2FyZFZpZXc/XCIuY2FyZC12aWV3cz4uY2FyZC12aWV3XCI6XCI+dGRcIikuZXEoYSksaD1pLmluZGV4T2YoXCIgXCIpLHU9aS5zdWJzdHJpbmcoMCxoKSxkPWkuc3Vic3RyaW5nKGgrMSk7Yy5maW5kKGQpLm9mZih1KS5vbih1LChmdW5jdGlvbih0KXt2YXIgaT1sLmRhdGEoXCJpbmRleFwiKSxvPWUuZGF0YVtpXSxhPW9bcl07bi5hcHBseShlLFt0LGEsbyxpXSl9KSl9KSl9O2Zvcih2YXIgbCBpbiBvKXMobCl9fX0pKX19LHtrZXk6XCJpbml0U2VydmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSxpLG4pe3ZhciBvPXRoaXMscj17fSxhPXRoaXMuaGVhZGVyLmZpZWxkcy5pbmRleE9mKHRoaXMub3B0aW9ucy5zb3J0TmFtZSkscz17c2VhcmNoVGV4dDp0aGlzLnNlYXJjaFRleHQsc29ydE5hbWU6dGhpcy5vcHRpb25zLnNvcnROYW1lLHNvcnRPcmRlcjp0aGlzLm9wdGlvbnMuc29ydE9yZGVyfTtpZih0aGlzLmhlYWRlci5zb3J0TmFtZXNbYV0mJihzLnNvcnROYW1lPXRoaXMuaGVhZGVyLnNvcnROYW1lc1thXSksdGhpcy5vcHRpb25zLnBhZ2luYXRpb24mJlwic2VydmVyXCI9PT10aGlzLm9wdGlvbnMuc2lkZVBhZ2luYXRpb24mJihzLnBhZ2VTaXplPXRoaXMub3B0aW9ucy5wYWdlU2l6ZT09PXRoaXMub3B0aW9ucy5mb3JtYXRBbGxSb3dzKCk/dGhpcy5vcHRpb25zLnRvdGFsUm93czp0aGlzLm9wdGlvbnMucGFnZVNpemUscy5wYWdlTnVtYmVyPXRoaXMub3B0aW9ucy5wYWdlTnVtYmVyKSwobnx8dGhpcy5vcHRpb25zLnVybHx8dGhpcy5vcHRpb25zLmFqYXgpJiYoXCJsaW1pdFwiPT09dGhpcy5vcHRpb25zLnF1ZXJ5UGFyYW1zVHlwZSYmKHM9e3NlYXJjaDpzLnNlYXJjaFRleHQsc29ydDpzLnNvcnROYW1lLG9yZGVyOnMuc29ydE9yZGVyfSx0aGlzLm9wdGlvbnMucGFnaW5hdGlvbiYmXCJzZXJ2ZXJcIj09PXRoaXMub3B0aW9ucy5zaWRlUGFnaW5hdGlvbiYmKHMub2Zmc2V0PXRoaXMub3B0aW9ucy5wYWdlU2l6ZT09PXRoaXMub3B0aW9ucy5mb3JtYXRBbGxSb3dzKCk/MDp0aGlzLm9wdGlvbnMucGFnZVNpemUqKHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyLTEpLHMubGltaXQ9dGhpcy5vcHRpb25zLnBhZ2VTaXplPT09dGhpcy5vcHRpb25zLmZvcm1hdEFsbFJvd3MoKT90aGlzLm9wdGlvbnMudG90YWxSb3dzOnRoaXMub3B0aW9ucy5wYWdlU2l6ZSwwPT09cy5saW1pdCYmZGVsZXRlIHMubGltaXQpKSxNby5pc0VtcHR5T2JqZWN0KHRoaXMuZmlsdGVyQ29sdW1uc1BhcnRpYWwpfHwocy5maWx0ZXI9SlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJDb2x1bW5zUGFydGlhbCxudWxsKSksdC5leHRlbmQocyxpfHx7fSksITEhPT0ocj1Nby5jYWxjdWxhdGVPYmplY3RWYWx1ZSh0aGlzLm9wdGlvbnMsdGhpcy5vcHRpb25zLnF1ZXJ5UGFyYW1zLFtzXSxyKSkpKXtlfHx0aGlzLnNob3dMb2FkaW5nKCk7dmFyIGw9dC5leHRlbmQoe30sTW8uY2FsY3VsYXRlT2JqZWN0VmFsdWUobnVsbCx0aGlzLm9wdGlvbnMuYWpheE9wdGlvbnMpLHt0eXBlOnRoaXMub3B0aW9ucy5tZXRob2QsdXJsOm58fHRoaXMub3B0aW9ucy51cmwsZGF0YTpcImFwcGxpY2F0aW9uL2pzb25cIj09PXRoaXMub3B0aW9ucy5jb250ZW50VHlwZSYmXCJwb3N0XCI9PT10aGlzLm9wdGlvbnMubWV0aG9kP0pTT04uc3RyaW5naWZ5KHIpOnIsY2FjaGU6dGhpcy5vcHRpb25zLmNhY2hlLGNvbnRlbnRUeXBlOnRoaXMub3B0aW9ucy5jb250ZW50VHlwZSxkYXRhVHlwZTp0aGlzLm9wdGlvbnMuZGF0YVR5cGUsc3VjY2VzczpmdW5jdGlvbih0LGksbil7dmFyIHI9TW8uY2FsY3VsYXRlT2JqZWN0VmFsdWUoby5vcHRpb25zLG8ub3B0aW9ucy5yZXNwb25zZUhhbmRsZXIsW3Qsbl0sdCk7by5sb2FkKHIpLG8udHJpZ2dlcihcImxvYWQtc3VjY2Vzc1wiLHIsbi5zdGF0dXMsbiksZXx8by5oaWRlTG9hZGluZygpfSxlcnJvcjpmdW5jdGlvbih0KXt2YXIgaT1bXTtcInNlcnZlclwiPT09by5vcHRpb25zLnNpZGVQYWdpbmF0aW9uJiYoKGk9e30pW28ub3B0aW9ucy50b3RhbEZpZWxkXT0wLGlbby5vcHRpb25zLmRhdGFGaWVsZF09W10pLG8ubG9hZChpKSxvLnRyaWdnZXIoXCJsb2FkLWVycm9yXCIsdC5zdGF0dXMsdCksZXx8by4kdGFibGVMb2FkaW5nLmhpZGUoKX19KTtyZXR1cm4gdGhpcy5vcHRpb25zLmFqYXg/TW8uY2FsY3VsYXRlT2JqZWN0VmFsdWUodGhpcyx0aGlzLm9wdGlvbnMuYWpheCxbbF0sbnVsbCk6KHRoaXMuX3hociYmNCE9PXRoaXMuX3hoci5yZWFkeVN0YXRlJiZ0aGlzLl94aHIuYWJvcnQoKSx0aGlzLl94aHI9dC5hamF4KGwpKSxyfX19LHtrZXk6XCJpbml0U2VhcmNoVGV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLnNlYXJjaCYmKHRoaXMuc2VhcmNoVGV4dD1cIlwiLFwiXCIhPT10aGlzLm9wdGlvbnMuc2VhcmNoVGV4dCkpe3ZhciB0PXRoaXMuJHRvb2xiYXIuZmluZChcIi5zZWFyY2ggaW5wdXRcIik7dC52YWwodGhpcy5vcHRpb25zLnNlYXJjaFRleHQpLHRoaXMub25TZWFyY2goe2N1cnJlbnRUYXJnZXQ6dCxmaXJlZEJ5SW5pdFNlYXJjaFRleHQ6ITB9KX19fSx7a2V5OlwiZ2V0Q2FyZXRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy4kaGVhZGVyLmZpbmQoXCJ0aFwiKS5lYWNoKChmdW5jdGlvbihpLG4pe3QobikuZmluZChcIi5zb3J0YWJsZVwiKS5yZW1vdmVDbGFzcyhcImRlc2MgYXNjXCIpLmFkZENsYXNzKHQobikuZGF0YShcImZpZWxkXCIpPT09ZS5vcHRpb25zLnNvcnROYW1lP2Uub3B0aW9ucy5zb3J0T3JkZXI6XCJib3RoXCIpfSkpfX0se2tleTpcInVwZGF0ZVNlbGVjdGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRzZWxlY3RJdGVtLmZpbHRlcihcIjplbmFibGVkXCIpLmxlbmd0aCYmdGhpcy4kc2VsZWN0SXRlbS5maWx0ZXIoXCI6ZW5hYmxlZFwiKS5sZW5ndGg9PT10aGlzLiRzZWxlY3RJdGVtLmZpbHRlcihcIjplbmFibGVkXCIpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aDt0aGlzLiRzZWxlY3RBbGwuYWRkKHRoaXMuJHNlbGVjdEFsbF8pLnByb3AoXCJjaGVja2VkXCIsZSksdGhpcy4kc2VsZWN0SXRlbS5lYWNoKChmdW5jdGlvbihlLGkpe3QoaSkuY2xvc2VzdChcInRyXCIpW3QoaSkucHJvcChcImNoZWNrZWRcIik/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oXCJzZWxlY3RlZFwiKX0pKX19LHtrZXk6XCJ1cGRhdGVSb3dzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMuJHNlbGVjdEl0ZW0uZWFjaCgoZnVuY3Rpb24oaSxuKXtlLmRhdGFbdChuKS5kYXRhKFwiaW5kZXhcIildW2UuaGVhZGVyLnN0YXRlRmllbGRdPXQobikucHJvcChcImNoZWNrZWRcIil9KSl9fSx7a2V5OlwicmVzZXRSb3dzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD0hMCxlPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIG4sbz10aGlzLmRhdGFbU3ltYm9sLml0ZXJhdG9yXSgpOyEodD0obj1vLm5leHQoKSkuZG9uZSk7dD0hMCl7dmFyIHI9bi52YWx1ZTt0aGlzLiRzZWxlY3RBbGwucHJvcChcImNoZWNrZWRcIiwhMSksdGhpcy4kc2VsZWN0SXRlbS5wcm9wKFwiY2hlY2tlZFwiLCExKSx0aGlzLmhlYWRlci5zdGF0ZUZpZWxkJiYoclt0aGlzLmhlYWRlci5zdGF0ZUZpZWxkXT0hMSl9fWNhdGNoKHQpe2U9ITAsaT10fWZpbmFsbHl7dHJ5e3R8fG51bGw9PW8ucmV0dXJufHxvLnJldHVybigpfWZpbmFsbHl7aWYoZSl0aHJvdyBpfX10aGlzLmluaXRIaWRkZW5Sb3dzKCl9fSx7a2V5OlwidHJpZ2dlclwiLHZhbHVlOmZ1bmN0aW9uKGkpe2Zvcih2YXIgbixvPVwiXCIuY29uY2F0KGksXCIuYnMudGFibGVcIikscj1hcmd1bWVudHMubGVuZ3RoLGE9bmV3IEFycmF5KHI+MT9yLTE6MCkscz0xO3M8cjtzKyspYVtzLTFdPWFyZ3VtZW50c1tzXTsobj10aGlzLm9wdGlvbnMpW2UuRVZFTlRTW29dXS5hcHBseShuLGEpLHRoaXMuJGVsLnRyaWdnZXIodC5FdmVudChvKSxhKSx0aGlzLm9wdGlvbnMub25BbGwobyxhKSx0aGlzLiRlbC50cmlnZ2VyKHQuRXZlbnQoXCJhbGwuYnMudGFibGVcIiksW28sYV0pfX0se2tleTpcInJlc2V0SGVhZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZF8pLHRoaXMudGltZW91dElkXz1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiB0LmZpdEhlYWRlcigpfSksdGhpcy4kZWwuaXMoXCI6aGlkZGVuXCIpPzEwMDowKX19LHtrZXk6XCJmaXRIZWFkZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy4kZWwuaXMoXCI6aGlkZGVuXCIpKXRoaXMudGltZW91dElkXz1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiBlLmZpdEhlYWRlcigpfSksMTAwKTtlbHNle3ZhciBpPXRoaXMuJHRhYmxlQm9keS5nZXQoMCksbj1pLnNjcm9sbFdpZHRoPmkuY2xpZW50V2lkdGgmJmkuc2Nyb2xsSGVpZ2h0PmkuY2xpZW50SGVpZ2h0K3RoaXMuJGhlYWRlci5vdXRlckhlaWdodCgpP01vLmdldFNjcm9sbEJhcldpZHRoKCk6MDt0aGlzLiRlbC5jc3MoXCJtYXJnaW4tdG9wXCIsLXRoaXMuJGhlYWRlci5vdXRlckhlaWdodCgpKTt2YXIgbz10KFwiOmZvY3VzXCIpO2lmKG8ubGVuZ3RoPjApe3ZhciByPW8ucGFyZW50cyhcInRoXCIpO2lmKHIubGVuZ3RoPjApe3ZhciBhPXIuYXR0cihcImRhdGEtZmllbGRcIik7aWYodm9pZCAwIT09YSl7dmFyIHM9dGhpcy4kaGVhZGVyLmZpbmQoXCJbZGF0YS1maWVsZD0nXCIuY29uY2F0KGEsXCInXVwiKSk7cy5sZW5ndGg+MCYmcy5maW5kKFwiOmlucHV0XCIpLmFkZENsYXNzKFwiZm9jdXMtdGVtcFwiKX19fXRoaXMuJGhlYWRlcl89dGhpcy4kaGVhZGVyLmNsb25lKCEwLCEwKSx0aGlzLiRzZWxlY3RBbGxfPXRoaXMuJGhlYWRlcl8uZmluZCgnW25hbWU9XCJidFNlbGVjdEFsbFwiXScpLHRoaXMuJHRhYmxlSGVhZGVyLmNzcyhcIm1hcmdpbi1yaWdodFwiLG4pLmZpbmQoXCJ0YWJsZVwiKS5jc3MoXCJ3aWR0aFwiLHRoaXMuJGVsLm91dGVyV2lkdGgoKSkuaHRtbChcIlwiKS5hdHRyKFwiY2xhc3NcIix0aGlzLiRlbC5hdHRyKFwiY2xhc3NcIikpLmFwcGVuZCh0aGlzLiRoZWFkZXJfKSx0aGlzLiR0YWJsZUxvYWRpbmcuY3NzKFwid2lkdGhcIix0aGlzLiRlbC5vdXRlcldpZHRoKCkpO3ZhciBsPXQoXCIuZm9jdXMtdGVtcDp2aXNpYmxlOmVxKDApXCIpO2wubGVuZ3RoPjAmJihsLmZvY3VzKCksdGhpcy4kaGVhZGVyLmZpbmQoXCIuZm9jdXMtdGVtcFwiKS5yZW1vdmVDbGFzcyhcImZvY3VzLXRlbXBcIikpLHRoaXMuJGhlYWRlci5maW5kKFwidGhbZGF0YS1maWVsZF1cIikuZWFjaCgoZnVuY3Rpb24oaSxuKXtlLiRoZWFkZXJfLmZpbmQoTW8uc3ByaW50ZigndGhbZGF0YS1maWVsZD1cIiVzXCJdJyx0KG4pLmRhdGEoXCJmaWVsZFwiKSkpLmRhdGEodChuKS5kYXRhKCkpfSkpO2Zvcih2YXIgYz10aGlzLmdldFZpc2libGVGaWVsZHMoKSxoPXRoaXMuJGhlYWRlcl8uZmluZChcInRoXCIpLHU9dGhpcy4kYm9keS5maW5kKFwiPnRyOm5vdCgubm8tcmVjb3Jkcy1mb3VuZCwudmlydHVhbC1zY3JvbGwtdG9wKVwiKS5lcSgwKTt1Lmxlbmd0aCYmdS5maW5kKCc+dGRbY29sc3Bhbl06bm90KFtjb2xzcGFuPVwiMVwiXSknKS5sZW5ndGg7KXU9dS5uZXh0KCk7dS5maW5kKFwiPiAqXCIpLmVhY2goKGZ1bmN0aW9uKGksbil7dmFyIG89dChuKSxyPWk7aWYoZS5vcHRpb25zLmRldGFpbFZpZXcmJmUub3B0aW9ucy5kZXRhaWxWaWV3SWNvbiYmIWUub3B0aW9ucy5jYXJkVmlldyl7aWYoMD09PWkpe3ZhciBhPWguZmlsdGVyKFwiLmRldGFpbFwiKSxzPWEuaW5uZXJXaWR0aCgpLWEuZmluZChcIi5maHQtY2VsbFwiKS53aWR0aCgpO2EuZmluZChcIi5maHQtY2VsbFwiKS53aWR0aChvLmlubmVyV2lkdGgoKS1zKX1yPWktMX1pZigtMSE9PXIpe3ZhciBsPWUuJGhlYWRlcl8uZmluZChNby5zcHJpbnRmKCd0aFtkYXRhLWZpZWxkPVwiJXNcIl0nLGNbcl0pKTtsLmxlbmd0aD4xJiYobD10KGhbb1swXS5jZWxsSW5kZXhdKSk7dmFyIHU9bC5pbm5lcldpZHRoKCktbC5maW5kKFwiLmZodC1jZWxsXCIpLndpZHRoKCk7bC5maW5kKFwiLmZodC1jZWxsXCIpLndpZHRoKG8uaW5uZXJXaWR0aCgpLXUpfX0pKSx0aGlzLmhvcml6b250YWxTY3JvbGwoKSx0aGlzLnRyaWdnZXIoXCJwb3N0LWhlYWRlclwiKX19fSx7a2V5OlwiaW5pdEZvb3RlclwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLnNob3dGb290ZXImJiF0aGlzLm9wdGlvbnMuY2FyZFZpZXcpe3ZhciB0PXRoaXMuZ2V0RGF0YSgpLGU9W107IXRoaXMub3B0aW9ucy5jYXJkVmlldyYmdGhpcy5vcHRpb25zLmRldGFpbFZpZXcmJnRoaXMub3B0aW9ucy5kZXRhaWxWaWV3SWNvbiYmZS5wdXNoKCc8dGggY2xhc3M9XCJkZXRhaWxcIj48ZGl2IGNsYXNzPVwidGgtaW5uZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZmh0LWNlbGxcIj48L2Rpdj48L3RoPicpO3ZhciBpPSEwLG49ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgcixhPXRoaXMuY29sdW1uc1tTeW1ib2wuaXRlcmF0b3JdKCk7IShpPShyPWEubmV4dCgpKS5kb25lKTtpPSEwKXt2YXIgcyxsLGM9ci52YWx1ZSxoPVtdLHU9e30sZD1Nby5zcHJpbnRmKCcgY2xhc3M9XCIlc1wiJyxjLmNsYXNzKTtpZihjLnZpc2libGUpe2lmKHRoaXMub3B0aW9ucy5jYXJkVmlldyYmIWMuY2FyZFZpc2libGUpcmV0dXJuO2lmKHM9TW8uc3ByaW50ZihcInRleHQtYWxpZ246ICVzOyBcIixjLmZhbGlnbj9jLmZhbGlnbjpjLmFsaWduKSxsPU1vLnNwcmludGYoXCJ2ZXJ0aWNhbC1hbGlnbjogJXM7IFwiLGMudmFsaWduKSwodT1Nby5jYWxjdWxhdGVPYmplY3RWYWx1ZShudWxsLHRoaXMub3B0aW9ucy5mb290ZXJTdHlsZSxbY10pKSYmdS5jc3MpZm9yKHZhciBmPTAscD1PYmplY3QuZW50cmllcyh1LmNzcyk7ZjxwLmxlbmd0aDtmKyspe3ZhciBnPUFvKHBbZl0sMiksdj1nWzBdLGI9Z1sxXTtoLnB1c2goXCJcIi5jb25jYXQodixcIjogXCIpLmNvbmNhdChiKSl9dSYmdS5jbGFzc2VzJiYoZD1Nby5zcHJpbnRmKCcgY2xhc3M9XCIlc1wiJyxjLmNsYXNzP1tjLmNsYXNzLHUuY2xhc3Nlc10uam9pbihcIiBcIik6dS5jbGFzc2VzKSksZS5wdXNoKFwiPHRoXCIsZCxNby5zcHJpbnRmKCcgc3R5bGU9XCIlc1wiJyxzK2wraC5jb25jYXQoKS5qb2luKFwiOyBcIikpLFwiPlwiKSxlLnB1c2goJzxkaXYgY2xhc3M9XCJ0aC1pbm5lclwiPicpLGUucHVzaChNby5jYWxjdWxhdGVPYmplY3RWYWx1ZShjLGMuZm9vdGVyRm9ybWF0dGVyLFt0XSx0aGlzLmZvb3RlckRhdGFbMF0mJnRoaXMuZm9vdGVyRGF0YVswXVtjLmZpZWxkXXx8XCJcIikpLGUucHVzaChcIjwvZGl2PlwiKSxlLnB1c2goJzxkaXYgY2xhc3M9XCJmaHQtY2VsbFwiPjwvZGl2PicpLGUucHVzaChcIjwvZGl2PlwiKSxlLnB1c2goXCI8L3RoPlwiKX19fWNhdGNoKHQpe249ITAsbz10fWZpbmFsbHl7dHJ5e2l8fG51bGw9PWEucmV0dXJufHxhLnJldHVybigpfWZpbmFsbHl7aWYobil0aHJvdyBvfX10aGlzLiR0YWJsZUZvb3Rlci5maW5kKFwidHJcIikuaHRtbChlLmpvaW4oXCJcIikpLHRoaXMudHJpZ2dlcihcInBvc3QtZm9vdGVyXCIsdGhpcy4kdGFibGVGb290ZXIpfX19LHtrZXk6XCJmaXRGb290ZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy4kZWwuaXMoXCI6aGlkZGVuXCIpKXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGUuZml0Rm9vdGVyKCl9KSwxMDApO2Vsc2V7dmFyIGk9dGhpcy4kdGFibGVCb2R5LmdldCgwKSxuPWkuc2Nyb2xsV2lkdGg+aS5jbGllbnRXaWR0aCYmaS5zY3JvbGxIZWlnaHQ+aS5jbGllbnRIZWlnaHQrdGhpcy4kaGVhZGVyLm91dGVySGVpZ2h0KCk/TW8uZ2V0U2Nyb2xsQmFyV2lkdGgoKTowO3RoaXMuJHRhYmxlRm9vdGVyLmNzcyhcIm1hcmdpbi1yaWdodFwiLG4pLmZpbmQoXCJ0YWJsZVwiKS5jc3MoXCJ3aWR0aFwiLHRoaXMuJGVsLm91dGVyV2lkdGgoKSkuYXR0cihcImNsYXNzXCIsdGhpcy4kZWwuYXR0cihcImNsYXNzXCIpKTt0aGlzLmdldFZpc2libGVGaWVsZHMoKTtmb3IodmFyIG89dGhpcy4kdGFibGVGb290ZXIuZmluZChcInRoXCIpLHI9dGhpcy4kYm9keS5maW5kKFwiPnRyOmZpcnN0LWNoaWxkOm5vdCgubm8tcmVjb3Jkcy1mb3VuZClcIik7ci5sZW5ndGgmJnIuZmluZCgnPnRkW2NvbHNwYW5dOm5vdChbY29sc3Bhbj1cIjFcIl0pJykubGVuZ3RoOylyPXIubmV4dCgpO3IuZmluZChcIj4gKlwiKS5lYWNoKChmdW5jdGlvbihpLG4pe3ZhciByPXQobiksYT1pO2lmKGUub3B0aW9ucy5kZXRhaWxWaWV3JiYhZS5vcHRpb25zLmNhcmRWaWV3KXtpZigwPT09aSl7dmFyIHM9by5maWx0ZXIoXCIuZGV0YWlsXCIpLGw9cy5pbm5lcldpZHRoKCktcy5maW5kKFwiLmZodC1jZWxsXCIpLndpZHRoKCk7cy5maW5kKFwiLmZodC1jZWxsXCIpLndpZHRoKHIuaW5uZXJXaWR0aCgpLWwpfWE9aS0xfWlmKC0xIT09YSl7dmFyIGM9by5lcShpKSxoPWMuaW5uZXJXaWR0aCgpLWMuZmluZChcIi5maHQtY2VsbFwiKS53aWR0aCgpO2MuZmluZChcIi5maHQtY2VsbFwiKS53aWR0aChyLmlubmVyV2lkdGgoKS1oKX19KSksdGhpcy5ob3Jpem9udGFsU2Nyb2xsKCl9fX0se2tleTpcImhvcml6b250YWxTY3JvbGxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy4kdGFibGVCb2R5Lm9mZihcInNjcm9sbFwiKS5vbihcInNjcm9sbFwiLChmdW5jdGlvbihpKXt2YXIgbj1pLmN1cnJlbnRUYXJnZXQ7ZS5vcHRpb25zLnNob3dIZWFkZXImJmUub3B0aW9ucy5oZWlnaHQmJmUuJHRhYmxlSGVhZGVyLnNjcm9sbExlZnQodChuKS5zY3JvbGxMZWZ0KCkpLGUub3B0aW9ucy5zaG93Rm9vdGVyJiYhZS5vcHRpb25zLmNhcmRWaWV3JiZlLiR0YWJsZUZvb3Rlci5zY3JvbGxMZWZ0KHQobikuc2Nyb2xsTGVmdCgpKSxlLnRyaWdnZXIoXCJzY3JvbGwtYm9keVwiLHQobikpfSkpfX0se2tleTpcImdldFZpc2libGVGaWVsZHNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PVtdLGU9ITAsaT0hMSxuPXZvaWQgMDt0cnl7Zm9yKHZhciBvLHI9dGhpcy5oZWFkZXIuZmllbGRzW1N5bWJvbC5pdGVyYXRvcl0oKTshKGU9KG89ci5uZXh0KCkpLmRvbmUpO2U9ITApe3ZhciBhPW8udmFsdWUscz10aGlzLmNvbHVtbnNbdGhpcy5maWVsZHNDb2x1bW5zSW5kZXhbYV1dO3MmJnMudmlzaWJsZSYmdC5wdXNoKGEpfX1jYXRjaCh0KXtpPSEwLG49dH1maW5hbGx5e3RyeXtlfHxudWxsPT1yLnJldHVybnx8ci5yZXR1cm4oKX1maW5hbGx5e2lmKGkpdGhyb3cgbn19cmV0dXJuIHR9fSx7a2V5OlwiaW5pdEhpZGRlblJvd3NcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaGlkZGVuUm93cz1bXX19LHtrZXk6XCJnZXRPcHRpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10LmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMpO3JldHVybiBkZWxldGUgZS5kYXRhLHQuZXh0ZW5kKCEwLHt9LGUpfX0se2tleTpcInJlZnJlc2hPcHRpb25zXCIsdmFsdWU6ZnVuY3Rpb24oZSl7TW8uY29tcGFyZU9iamVjdHModGhpcy5vcHRpb25zLGUsITApfHwodGhpcy5vcHRpb25zPXQuZXh0ZW5kKHRoaXMub3B0aW9ucyxlKSx0aGlzLnRyaWdnZXIoXCJyZWZyZXNoLW9wdGlvbnNcIix0aGlzLm9wdGlvbnMpLHRoaXMuZGVzdHJveSgpLHRoaXMuaW5pdCgpKX19LHtrZXk6XCJnZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5vcHRpb25zLmRhdGE7aWYoIXRoaXMuc2VhcmNoVGV4dCYmIXRoaXMub3B0aW9ucy5zb3J0TmFtZSYmTW8uaXNFbXB0eU9iamVjdCh0aGlzLmZpbHRlckNvbHVtbnMpJiZNby5pc0VtcHR5T2JqZWN0KHRoaXMuZmlsdGVyQ29sdW1uc1BhcnRpYWwpfHwoZT10aGlzLmRhdGEpLHQmJnQudXNlQ3VycmVudFBhZ2UmJihlPWUuc2xpY2UodGhpcy5wYWdlRnJvbS0xLHRoaXMucGFnZVRvKSksdCYmIXQuaW5jbHVkZUhpZGRlblJvd3Mpe3ZhciBpPXRoaXMuZ2V0SGlkZGVuUm93cygpO2U9ZS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybi0xPT09TW8uZmluZEluZGV4KGksdCl9KSl9cmV0dXJuIGV9fSx7a2V5OlwiZ2V0U2VsZWN0aW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5kYXRhLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lW3QuaGVhZGVyLnN0YXRlRmllbGRdfSkpfX0se2tleTpcImdldEFsbFNlbGVjdGlvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMub3B0aW9ucy5kYXRhLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lW3QuaGVhZGVyLnN0YXRlRmllbGRdfSkpfX0se2tleTpcImxvYWRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZSxpPXQ7dGhpcy5vcHRpb25zLnBhZ2luYXRpb24mJlwic2VydmVyXCI9PT10aGlzLm9wdGlvbnMuc2lkZVBhZ2luYXRpb24mJih0aGlzLm9wdGlvbnMudG90YWxSb3dzPWlbdGhpcy5vcHRpb25zLnRvdGFsRmllbGRdKSx0aGlzLm9wdGlvbnMucGFnaW5hdGlvbiYmXCJzZXJ2ZXJcIj09PXRoaXMub3B0aW9ucy5zaWRlUGFnaW5hdGlvbiYmKHRoaXMub3B0aW9ucy50b3RhbE5vdEZpbHRlcmVkPWlbdGhpcy5vcHRpb25zLnRvdGFsTm90RmlsdGVyZWRGaWVsZF0pLGU9aS5maXhlZFNjcm9sbCxpPUFycmF5LmlzQXJyYXkoaSk/aTppW3RoaXMub3B0aW9ucy5kYXRhRmllbGRdLHRoaXMuaW5pdERhdGEoaSksdGhpcy5pbml0U2VhcmNoKCksdGhpcy5pbml0UGFnaW5hdGlvbigpLHRoaXMuaW5pdEJvZHkoZSl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5pbml0RGF0YSh0LFwiYXBwZW5kXCIpLHRoaXMuaW5pdFNlYXJjaCgpLHRoaXMuaW5pdFBhZ2luYXRpb24oKSx0aGlzLmluaXRTb3J0KCksdGhpcy5pbml0Qm9keSghMCl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuaW5pdERhdGEodCxcInByZXBlbmRcIiksdGhpcy5pbml0U2VhcmNoKCksdGhpcy5pbml0UGFnaW5hdGlvbigpLHRoaXMuaW5pdFNvcnQoKSx0aGlzLmluaXRCb2R5KCEwKX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZSxpLG49dGhpcy5vcHRpb25zLmRhdGEubGVuZ3RoO2lmKHQuaGFzT3duUHJvcGVydHkoXCJmaWVsZFwiKSYmdC5oYXNPd25Qcm9wZXJ0eShcInZhbHVlc1wiKSl7Zm9yKGU9bi0xO2U+PTA7ZS0tKShpPXRoaXMub3B0aW9ucy5kYXRhW2VdKS5oYXNPd25Qcm9wZXJ0eSh0LmZpZWxkKSYmdC52YWx1ZXMuaW5jbHVkZXMoaVt0LmZpZWxkXSkmJih0aGlzLm9wdGlvbnMuZGF0YS5zcGxpY2UoZSwxKSxcInNlcnZlclwiPT09dGhpcy5vcHRpb25zLnNpZGVQYWdpbmF0aW9uJiYodGhpcy5vcHRpb25zLnRvdGFsUm93cy09MSkpO24hPT10aGlzLm9wdGlvbnMuZGF0YS5sZW5ndGgmJih0aGlzLmluaXRTZWFyY2goKSx0aGlzLmluaXRQYWdpbmF0aW9uKCksdGhpcy5pbml0U29ydCgpLHRoaXMuaW5pdEJvZHkoITApKX19fSx7a2V5OlwicmVtb3ZlQWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuZGF0YS5sZW5ndGg+MCYmKHRoaXMub3B0aW9ucy5kYXRhLnNwbGljZSgwLHRoaXMub3B0aW9ucy5kYXRhLmxlbmd0aCksdGhpcy5pbml0U2VhcmNoKCksdGhpcy5pbml0UGFnaW5hdGlvbigpLHRoaXMuaW5pdEJvZHkoITApKX19LHtrZXk6XCJpbnNlcnRSb3dcIix2YWx1ZTpmdW5jdGlvbih0KXt0Lmhhc093blByb3BlcnR5KFwiaW5kZXhcIikmJnQuaGFzT3duUHJvcGVydHkoXCJyb3dcIikmJih0aGlzLm9wdGlvbnMuZGF0YS5zcGxpY2UodC5pbmRleCwwLHQucm93KSx0aGlzLmluaXRTZWFyY2goKSx0aGlzLmluaXRQYWdpbmF0aW9uKCksdGhpcy5pbml0U29ydCgpLHRoaXMuaW5pdEJvZHkoITApKX19LHtrZXk6XCJ1cGRhdGVSb3dcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgaT1BcnJheS5pc0FycmF5KGUpP2U6W2VdLG49ITAsbz0hMSxyPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHM9aVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShhPXMubmV4dCgpKS5kb25lKTtuPSEwKXt2YXIgbD1hLnZhbHVlO2wuaGFzT3duUHJvcGVydHkoXCJpbmRleFwiKSYmbC5oYXNPd25Qcm9wZXJ0eShcInJvd1wiKSYmKHQuZXh0ZW5kKHRoaXMub3B0aW9ucy5kYXRhW2wuaW5kZXhdLGwucm93KSxsLmhhc093blByb3BlcnR5KFwicmVwbGFjZVwiKSYmbC5yZXBsYWNlP3RoaXMub3B0aW9ucy5kYXRhW2wuaW5kZXhdPWwucm93OnQuZXh0ZW5kKHRoaXMub3B0aW9ucy5kYXRhW2wuaW5kZXhdLGwucm93KSl9fWNhdGNoKHQpe289ITAscj10fWZpbmFsbHl7dHJ5e258fG51bGw9PXMucmV0dXJufHxzLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyByfX10aGlzLmluaXRTZWFyY2goKSx0aGlzLmluaXRQYWdpbmF0aW9uKCksdGhpcy5pbml0U29ydCgpLHRoaXMuaW5pdEJvZHkoITApfX0se2tleTpcImdldFJvd0J5VW5pcXVlSWRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZSxpLG4sbz10aGlzLm9wdGlvbnMudW5pcXVlSWQscj10LGE9bnVsbDtmb3IoZT10aGlzLm9wdGlvbnMuZGF0YS5sZW5ndGgtMTtlPj0wO2UtLSl7aWYoKGk9dGhpcy5vcHRpb25zLmRhdGFbZV0pLmhhc093blByb3BlcnR5KG8pKW49aVtvXTtlbHNle2lmKCFpLl9kYXRhfHwhaS5fZGF0YS5oYXNPd25Qcm9wZXJ0eShvKSljb250aW51ZTtuPWkuX2RhdGFbb119aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4/cj1yLnRvU3RyaW5nKCk6XCJudW1iZXJcIj09dHlwZW9mIG4mJihOdW1iZXIobik9PT1uJiZuJTE9PTA/cj1wYXJzZUludChyKTpuPT09TnVtYmVyKG4pJiYwIT09biYmKHI9cGFyc2VGbG9hdChyKSkpLG49PT1yKXthPWk7YnJlYWt9fXJldHVybiBhfX0se2tleTpcInVwZGF0ZUJ5VW5pcXVlSWRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgaT1BcnJheS5pc0FycmF5KGUpP2U6W2VdLG49ITAsbz0hMSxyPXZvaWQgMDt0cnl7Zm9yKHZhciBhLHM9aVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShhPXMubmV4dCgpKS5kb25lKTtuPSEwKXt2YXIgbD1hLnZhbHVlO2lmKGwuaGFzT3duUHJvcGVydHkoXCJpZFwiKSYmbC5oYXNPd25Qcm9wZXJ0eShcInJvd1wiKSl7dmFyIGM9dGhpcy5vcHRpb25zLmRhdGEuaW5kZXhPZih0aGlzLmdldFJvd0J5VW5pcXVlSWQobC5pZCkpOy0xIT09YyYmKGwuaGFzT3duUHJvcGVydHkoXCJyZXBsYWNlXCIpJiZsLnJlcGxhY2U/dGhpcy5vcHRpb25zLmRhdGFbY109bC5yb3c6dC5leHRlbmQodGhpcy5vcHRpb25zLmRhdGFbY10sbC5yb3cpKX19fWNhdGNoKHQpe289ITAscj10fWZpbmFsbHl7dHJ5e258fG51bGw9PXMucmV0dXJufHxzLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyByfX10aGlzLmluaXRTZWFyY2goKSx0aGlzLmluaXRQYWdpbmF0aW9uKCksdGhpcy5pbml0U29ydCgpLHRoaXMuaW5pdEJvZHkoITApfX0se2tleTpcInJlbW92ZUJ5VW5pcXVlSWRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLm9wdGlvbnMuZGF0YS5sZW5ndGgsaT10aGlzLmdldFJvd0J5VW5pcXVlSWQodCk7aSYmdGhpcy5vcHRpb25zLmRhdGEuc3BsaWNlKHRoaXMub3B0aW9ucy5kYXRhLmluZGV4T2YoaSksMSksZSE9PXRoaXMub3B0aW9ucy5kYXRhLmxlbmd0aCYmKHRoaXMuaW5pdFNlYXJjaCgpLHRoaXMuaW5pdFBhZ2luYXRpb24oKSx0aGlzLmluaXRCb2R5KCEwKSl9fSx7a2V5OlwidXBkYXRlQ2VsbFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3QuaGFzT3duUHJvcGVydHkoXCJpbmRleFwiKSYmdC5oYXNPd25Qcm9wZXJ0eShcImZpZWxkXCIpJiZ0Lmhhc093blByb3BlcnR5KFwidmFsdWVcIikmJih0aGlzLmRhdGFbdC5pbmRleF1bdC5maWVsZF09dC52YWx1ZSwhMSE9PXQucmVpbml0JiYodGhpcy5pbml0U29ydCgpLHRoaXMuaW5pdEJvZHkoITApKSl9fSx7a2V5OlwidXBkYXRlQ2VsbEJ5VW5pcXVlSWRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3QuaGFzT3duUHJvcGVydHkoXCJpZFwiKSYmdC5oYXNPd25Qcm9wZXJ0eShcImZpZWxkXCIpJiZ0Lmhhc093blByb3BlcnR5KFwidmFsdWVcIikmJigoQXJyYXkuaXNBcnJheSh0KT90Olt0XSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGk9dC5pZCxuPXQuZmllbGQsbz10LnZhbHVlLHI9ZS5vcHRpb25zLmRhdGEuaW5kZXhPZihlLmdldFJvd0J5VW5pcXVlSWQoaSkpOy0xIT09ciYmKGUub3B0aW9ucy5kYXRhW3JdW25dPW8pfSkpLCExIT09dC5yZWluaXQmJih0aGlzLmluaXRTb3J0KCksdGhpcy5pbml0Qm9keSghMCkpKX19LHtrZXk6XCJzaG93Um93XCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5fdG9nZ2xlUm93KHQsITApfX0se2tleTpcImhpZGVSb3dcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLl90b2dnbGVSb3codCwhMSl9fSx7a2V5OlwiX3RvZ2dsZVJvd1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIGk7aWYodC5oYXNPd25Qcm9wZXJ0eShcImluZGV4XCIpP2k9dGhpcy5nZXREYXRhKClbdC5pbmRleF06dC5oYXNPd25Qcm9wZXJ0eShcInVuaXF1ZUlkXCIpJiYoaT10aGlzLmdldFJvd0J5VW5pcXVlSWQodC51bmlxdWVJZCkpLGkpe3ZhciBuPU1vLmZpbmRJbmRleCh0aGlzLmhpZGRlblJvd3MsaSk7ZXx8LTEhPT1uP2UmJm4+LTEmJnRoaXMuaGlkZGVuUm93cy5zcGxpY2UobiwxKTp0aGlzLmhpZGRlblJvd3MucHVzaChpKSxlP3RoaXMudXBkYXRlUGFnaW5hdGlvbigpOih0aGlzLmluaXRCb2R5KCEwKSx0aGlzLmluaXRQYWdpbmF0aW9uKCkpfX19LHtrZXk6XCJnZXRIaWRkZW5Sb3dzXCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYodClyZXR1cm4gdGhpcy5pbml0SGlkZGVuUm93cygpLHZvaWQgdGhpcy5pbml0Qm9keSghMCk7dmFyIGU9dGhpcy5nZXREYXRhKCksaT1bXSxuPSEwLG89ITEscj12b2lkIDA7dHJ5e2Zvcih2YXIgYSxzPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oYT1zLm5leHQoKSkuZG9uZSk7bj0hMCl7dmFyIGw9YS52YWx1ZTt0aGlzLmhpZGRlblJvd3MuaW5jbHVkZXMobCkmJmkucHVzaChsKX19Y2F0Y2godCl7bz0hMCxyPXR9ZmluYWxseXt0cnl7bnx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IHJ9fXJldHVybiB0aGlzLmhpZGRlblJvd3M9aSxpfX0se2tleTpcInNob3dDb2x1bW5cIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzOyhBcnJheS5pc0FycmF5KHQpP3Q6W3RdKS5mb3JFYWNoKChmdW5jdGlvbih0KXtlLl90b2dnbGVDb2x1bW4oZS5maWVsZHNDb2x1bW5zSW5kZXhbdF0sITAsITApfSkpfX0se2tleTpcImhpZGVDb2x1bW5cIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzOyhBcnJheS5pc0FycmF5KHQpP3Q6W3RdKS5mb3JFYWNoKChmdW5jdGlvbih0KXtlLl90b2dnbGVDb2x1bW4oZS5maWVsZHNDb2x1bW5zSW5kZXhbdF0sITEsITApfSkpfX0se2tleTpcIl90b2dnbGVDb2x1bW5cIix2YWx1ZTpmdW5jdGlvbih0LGUsaSl7aWYoLTEhPT10JiZ0aGlzLmNvbHVtbnNbdF0udmlzaWJsZSE9PWUmJih0aGlzLmNvbHVtbnNbdF0udmlzaWJsZT1lLHRoaXMuaW5pdEhlYWRlcigpLHRoaXMuaW5pdFNlYXJjaCgpLHRoaXMuaW5pdFBhZ2luYXRpb24oKSx0aGlzLmluaXRCb2R5KCksdGhpcy5vcHRpb25zLnNob3dDb2x1bW5zKSl7dmFyIG49dGhpcy4kdG9vbGJhci5maW5kKFwiLmtlZXAtb3BlbiBpbnB1dFwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhMSk7aSYmbi5maWx0ZXIoTW8uc3ByaW50ZignW3ZhbHVlPVwiJXNcIl0nLHQpKS5wcm9wKFwiY2hlY2tlZFwiLGUpLG4uZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RoPD10aGlzLm9wdGlvbnMubWluaW11bUNvdW50Q29sdW1ucyYmbi5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhMCl9fX0se2tleTpcImdldFZpc2libGVDb2x1bW5zXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQudmlzaWJsZX0pKX19LHtrZXk6XCJnZXRIaWRkZW5Db2x1bW5zXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2x1bW5zLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIXQudmlzaWJsZX0pKX19LHtrZXk6XCJzaG93QWxsQ29sdW1uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fdG9nZ2xlQWxsQ29sdW1ucyghMCl9fSx7a2V5OlwiaGlkZUFsbENvbHVtbnNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3RvZ2dsZUFsbENvbHVtbnMoITEpfX0se2tleTpcIl90b2dnbGVBbGxDb2x1bW5zXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIGk9dGhpcyxuPSEwLG89ITEscj12b2lkIDA7dHJ5e2Zvcih2YXIgYSxzPXRoaXMuY29sdW1ucy5zbGljZSgpLnJldmVyc2UoKVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShhPXMubmV4dCgpKS5kb25lKTtuPSEwKXt2YXIgbD1hLnZhbHVlO2lmKGwuc3dpdGNoYWJsZSl7aWYoIWUmJnRoaXMub3B0aW9ucy5zaG93Q29sdW1ucyYmdGhpcy5nZXRWaXNpYmxlQ29sdW1ucygpLmxlbmd0aD09PXRoaXMub3B0aW9ucy5taW5pbXVtQ291bnRDb2x1bW5zKWNvbnRpbnVlO2wudmlzaWJsZT1lfX19Y2F0Y2godCl7bz0hMCxyPXR9ZmluYWxseXt0cnl7bnx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IHJ9fWlmKHRoaXMuaW5pdEhlYWRlcigpLHRoaXMuaW5pdFNlYXJjaCgpLHRoaXMuaW5pdFBhZ2luYXRpb24oKSx0aGlzLmluaXRCb2R5KCksdGhpcy5vcHRpb25zLnNob3dDb2x1bW5zKXt2YXIgYz10aGlzLiR0b29sYmFyLmZpbmQoJy5rZWVwLW9wZW4gaW5wdXQ6bm90KFwiLnRvZ2dsZS1hbGxcIiknKS5wcm9wKFwiZGlzYWJsZWRcIiwhMSk7ZT9jLnByb3AoXCJjaGVja2VkXCIsZSk6Yy5nZXQoKS5yZXZlcnNlKCkuZm9yRWFjaCgoZnVuY3Rpb24obil7Yy5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGg+aS5vcHRpb25zLm1pbmltdW1Db3VudENvbHVtbnMmJnQobikucHJvcChcImNoZWNrZWRcIixlKX0pKSxjLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aDw9dGhpcy5vcHRpb25zLm1pbmltdW1Db3VudENvbHVtbnMmJmMuZmlsdGVyKFwiOmNoZWNrZWRcIikucHJvcChcImRpc2FibGVkXCIsITApfX19LHtrZXk6XCJtZXJnZUNlbGxzXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGUsaSxuPXQuaW5kZXgsbz10aGlzLmdldFZpc2libGVGaWVsZHMoKS5pbmRleE9mKHQuZmllbGQpLHI9dC5yb3dzcGFufHwxLGE9dC5jb2xzcGFufHwxLHM9dGhpcy4kYm9keS5maW5kKFwiPnRyXCIpO3RoaXMub3B0aW9ucy5kZXRhaWxWaWV3JiYhdGhpcy5vcHRpb25zLmNhcmRWaWV3JiYobys9MSk7dmFyIGw9cy5lcShuKS5maW5kKFwiPnRkXCIpLmVxKG8pO2lmKCEobjwwfHxvPDB8fG4+PXRoaXMuZGF0YS5sZW5ndGgpKXtmb3IoZT1uO2U8bityO2UrKylmb3IoaT1vO2k8bythO2krKylzLmVxKGUpLmZpbmQoXCI+dGRcIikuZXEoaSkuaGlkZSgpO2wuYXR0cihcInJvd3NwYW5cIixyKS5hdHRyKFwiY29sc3BhblwiLGEpLnNob3coKX19fSx7a2V5OlwiY2hlY2tBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX3RvZ2dsZUNoZWNrQWxsKCEwKX19LHtrZXk6XCJ1bmNoZWNrQWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl90b2dnbGVDaGVja0FsbCghMSl9fSx7a2V5OlwiX3RvZ2dsZUNoZWNrQWxsXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRTZWxlY3Rpb25zKCk7dGhpcy4kc2VsZWN0QWxsLmFkZCh0aGlzLiRzZWxlY3RBbGxfKS5wcm9wKFwiY2hlY2tlZFwiLHQpLHRoaXMuJHNlbGVjdEl0ZW0uZmlsdGVyKFwiOmVuYWJsZWRcIikucHJvcChcImNoZWNrZWRcIix0KSx0aGlzLnVwZGF0ZVJvd3MoKTt2YXIgaT10aGlzLmdldFNlbGVjdGlvbnMoKTt0P3RoaXMudHJpZ2dlcihcImNoZWNrLWFsbFwiLGksZSk6dGhpcy50cmlnZ2VyKFwidW5jaGVjay1hbGxcIixpLGUpfX0se2tleTpcImNoZWNrSW52ZXJ0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRzZWxlY3RJdGVtLmZpbHRlcihcIjplbmFibGVkXCIpLGk9ZS5maWx0ZXIoXCI6Y2hlY2tlZFwiKTtlLmVhY2goKGZ1bmN0aW9uKGUsaSl7dChpKS5wcm9wKFwiY2hlY2tlZFwiLCF0KGkpLnByb3AoXCJjaGVja2VkXCIpKX0pKSx0aGlzLnVwZGF0ZVJvd3MoKSx0aGlzLnVwZGF0ZVNlbGVjdGVkKCksdGhpcy50cmlnZ2VyKFwidW5jaGVjay1zb21lXCIsaSksaT10aGlzLmdldFNlbGVjdGlvbnMoKSx0aGlzLnRyaWdnZXIoXCJjaGVjay1zb21lXCIsaSl9fSx7a2V5OlwiY2hlY2tcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLl90b2dnbGVDaGVjayghMCx0KX19LHtrZXk6XCJ1bmNoZWNrXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5fdG9nZ2xlQ2hlY2soITEsdCl9fSx7a2V5OlwiX3RvZ2dsZUNoZWNrXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLiRzZWxlY3RJdGVtLmZpbHRlcignW2RhdGEtaW5kZXg9XCInLmNvbmNhdChlLCdcIl0nKSksbj10aGlzLmRhdGFbZV07aWYoaS5pcyhcIjpyYWRpb1wiKXx8dGhpcy5vcHRpb25zLnNpbmdsZVNlbGVjdHx8dGhpcy5vcHRpb25zLm11bHRpcGxlU2VsZWN0Um93JiYhdGhpcy5tdWx0aXBsZVNlbGVjdFJvd0N0cmxLZXkmJiF0aGlzLm11bHRpcGxlU2VsZWN0Um93U2hpZnRLZXkpe3ZhciBvPSEwLHI9ITEsYT12b2lkIDA7dHJ5e2Zvcih2YXIgcyxsPXRoaXMub3B0aW9ucy5kYXRhW1N5bWJvbC5pdGVyYXRvcl0oKTshKG89KHM9bC5uZXh0KCkpLmRvbmUpO289ITApe3MudmFsdWVbdGhpcy5oZWFkZXIuc3RhdGVGaWVsZF09ITF9fWNhdGNoKHQpe3I9ITAsYT10fWZpbmFsbHl7dHJ5e298fG51bGw9PWwucmV0dXJufHxsLnJldHVybigpfWZpbmFsbHl7aWYocil0aHJvdyBhfX10aGlzLiRzZWxlY3RJdGVtLmZpbHRlcihcIjpjaGVja2VkXCIpLm5vdChpKS5wcm9wKFwiY2hlY2tlZFwiLCExKX1pZihuW3RoaXMuaGVhZGVyLnN0YXRlRmllbGRdPXQsdGhpcy5vcHRpb25zLm11bHRpcGxlU2VsZWN0Um93KXtpZih0aGlzLm11bHRpcGxlU2VsZWN0Um93U2hpZnRLZXkmJnRoaXMubXVsdGlwbGVTZWxlY3RSb3dMYXN0U2VsZWN0ZWRJbmRleD49MClmb3IodmFyIGM9W3RoaXMubXVsdGlwbGVTZWxlY3RSb3dMYXN0U2VsZWN0ZWRJbmRleCxlXS5zb3J0KCksaD1jWzBdKzE7aDxjWzFdO2grKyl0aGlzLmRhdGFbaF1bdGhpcy5oZWFkZXIuc3RhdGVGaWVsZF09ITAsdGhpcy4kc2VsZWN0SXRlbS5maWx0ZXIoJ1tkYXRhLWluZGV4PVwiJy5jb25jYXQoaCwnXCJdJykpLnByb3AoXCJjaGVja2VkXCIsITApO3RoaXMubXVsdGlwbGVTZWxlY3RSb3dDdHJsS2V5PSExLHRoaXMubXVsdGlwbGVTZWxlY3RSb3dTaGlmdEtleT0hMSx0aGlzLm11bHRpcGxlU2VsZWN0Um93TGFzdFNlbGVjdGVkSW5kZXg9dD9lOi0xfWkucHJvcChcImNoZWNrZWRcIix0KSx0aGlzLnVwZGF0ZVNlbGVjdGVkKCksdGhpcy50cmlnZ2VyKHQ/XCJjaGVja1wiOlwidW5jaGVja1wiLHRoaXMuZGF0YVtlXSxpKX19LHtrZXk6XCJjaGVja0J5XCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5fdG9nZ2xlQ2hlY2tCeSghMCx0KX19LHtrZXk6XCJ1bmNoZWNrQnlcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLl90b2dnbGVDaGVja0J5KCExLHQpfX0se2tleTpcIl90b2dnbGVDaGVja0J5XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzO2lmKGUuaGFzT3duUHJvcGVydHkoXCJmaWVsZFwiKSYmZS5oYXNPd25Qcm9wZXJ0eShcInZhbHVlc1wiKSl7dmFyIG49W107dGhpcy5kYXRhLmZvckVhY2goKGZ1bmN0aW9uKG8scil7aWYoIW8uaGFzT3duUHJvcGVydHkoZS5maWVsZCkpcmV0dXJuITE7aWYoZS52YWx1ZXMuaW5jbHVkZXMob1tlLmZpZWxkXSkpe3ZhciBhPWkuJHNlbGVjdEl0ZW0uZmlsdGVyKFwiOmVuYWJsZWRcIikuZmlsdGVyKE1vLnNwcmludGYoJ1tkYXRhLWluZGV4PVwiJXNcIl0nLHIpKTtpZighKGE9dD9hLm5vdChcIjpjaGVja2VkXCIpOmEuZmlsdGVyKFwiOmNoZWNrZWRcIikpLmxlbmd0aClyZXR1cm47YS5wcm9wKFwiY2hlY2tlZFwiLHQpLG9baS5oZWFkZXIuc3RhdGVGaWVsZF09dCxuLnB1c2gobyksaS50cmlnZ2VyKHQ/XCJjaGVja1wiOlwidW5jaGVja1wiLG8sYSl9fSkpLHRoaXMudXBkYXRlU2VsZWN0ZWQoKSx0aGlzLnRyaWdnZXIodD9cImNoZWNrLXNvbWVcIjpcInVuY2hlY2stc29tZVwiLG4pfX19LHtrZXk6XCJyZWZyZXNoXCIsdmFsdWU6ZnVuY3Rpb24odCl7dCYmdC51cmwmJih0aGlzLm9wdGlvbnMudXJsPXQudXJsKSx0JiZ0LnBhZ2VOdW1iZXImJih0aGlzLm9wdGlvbnMucGFnZU51bWJlcj10LnBhZ2VOdW1iZXIpLHQmJnQucGFnZVNpemUmJih0aGlzLm9wdGlvbnMucGFnZVNpemU9dC5wYWdlU2l6ZSksdGhpcy50cmlnZ2VyKFwicmVmcmVzaFwiLHRoaXMuaW5pdFNlcnZlcih0JiZ0LnNpbGVudCx0JiZ0LnF1ZXJ5LHQmJnQudXJsKSl9fSx7a2V5OlwiZGVzdHJveVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy4kZWwuaW5zZXJ0QmVmb3JlKHRoaXMuJGNvbnRhaW5lciksdCh0aGlzLm9wdGlvbnMudG9vbGJhcikuaW5zZXJ0QmVmb3JlKHRoaXMuJGVsKSx0aGlzLiRjb250YWluZXIubmV4dCgpLnJlbW92ZSgpLHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKSx0aGlzLiRlbC5odG1sKHRoaXMuJGVsXy5odG1sKCkpLmNzcyhcIm1hcmdpbi10b3BcIixcIjBcIikuYXR0cihcImNsYXNzXCIsdGhpcy4kZWxfLmF0dHIoXCJjbGFzc1wiKXx8XCJcIil9fSx7a2V5OlwicmVzZXRWaWV3XCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9MDtpZih0JiZ0LmhlaWdodCYmKHRoaXMub3B0aW9ucy5oZWlnaHQ9dC5oZWlnaHQpLHRoaXMuJHNlbGVjdEFsbC5wcm9wKFwiY2hlY2tlZFwiLHRoaXMuJHNlbGVjdEl0ZW0ubGVuZ3RoPjAmJnRoaXMuJHNlbGVjdEl0ZW0ubGVuZ3RoPT09dGhpcy4kc2VsZWN0SXRlbS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGgpLHRoaXMuJHRhYmxlQ29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiaGFzLWNhcmQtdmlld1wiLHRoaXMub3B0aW9ucy5jYXJkVmlldyksIXRoaXMub3B0aW9ucy5jYXJkVmlldyYmdGhpcy5vcHRpb25zLnNob3dIZWFkZXImJnRoaXMub3B0aW9ucy5oZWlnaHQ/KHRoaXMuJHRhYmxlSGVhZGVyLnNob3coKSx0aGlzLnJlc2V0SGVhZGVyKCksZSs9dGhpcy4kaGVhZGVyLm91dGVySGVpZ2h0KCEwKSsxKToodGhpcy4kdGFibGVIZWFkZXIuaGlkZSgpLHRoaXMudHJpZ2dlcihcInBvc3QtaGVhZGVyXCIpKSwhdGhpcy5vcHRpb25zLmNhcmRWaWV3JiZ0aGlzLm9wdGlvbnMuc2hvd0Zvb3RlciYmKHRoaXMuJHRhYmxlRm9vdGVyLnNob3coKSx0aGlzLmZpdEZvb3RlcigpLHRoaXMub3B0aW9ucy5oZWlnaHQmJihlKz10aGlzLiR0YWJsZUZvb3Rlci5vdXRlckhlaWdodCghMCkpKSx0aGlzLm9wdGlvbnMuaGVpZ2h0KXt2YXIgaT10aGlzLiR0b29sYmFyLm91dGVySGVpZ2h0KCEwKSxuPXRoaXMuJHBhZ2luYXRpb24ub3V0ZXJIZWlnaHQoITApLG89dGhpcy5vcHRpb25zLmhlaWdodC1pLW4scj10aGlzLiR0YWJsZUJvZHkuZmluZChcInRhYmxlXCIpLm91dGVySGVpZ2h0KCEwKTt0aGlzLiR0YWJsZUNvbnRhaW5lci5jc3MoXCJoZWlnaHRcIixcIlwiLmNvbmNhdChvLFwicHhcIikpLHRoaXMuJHRhYmxlQm9yZGVyJiZ0aGlzLiR0YWJsZUJvcmRlci5jc3MoXCJoZWlnaHRcIixcIlwiLmNvbmNhdChvLXItZS0xLFwicHhcIikpfXRoaXMub3B0aW9ucy5jYXJkVmlldz8odGhpcy4kZWwuY3NzKFwibWFyZ2luLXRvcFwiLFwiMFwiKSx0aGlzLiR0YWJsZUNvbnRhaW5lci5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiLFwiMFwiKSx0aGlzLiR0YWJsZUZvb3Rlci5oaWRlKCkpOih0aGlzLmdldENhcmV0KCksdGhpcy4kdGFibGVDb250YWluZXIuY3NzKFwicGFkZGluZy1ib3R0b21cIixcIlwiLmNvbmNhdChlLFwicHhcIikpKSx0aGlzLnRyaWdnZXIoXCJyZXNldC12aWV3XCIpfX0se2tleTpcInJlc2V0V2lkdGhcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMub3B0aW9ucy5zaG93SGVhZGVyJiZ0aGlzLm9wdGlvbnMuaGVpZ2h0JiZ0aGlzLmZpdEhlYWRlcigpLHRoaXMub3B0aW9ucy5zaG93Rm9vdGVyJiYhdGhpcy5vcHRpb25zLmNhcmRWaWV3JiZ0aGlzLmZpdEZvb3RlcigpfX0se2tleTpcInNob3dMb2FkaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLiR0YWJsZUxvYWRpbmcuY3NzKFwiZGlzcGxheVwiLFwiZmxleFwiKX19LHtrZXk6XCJoaWRlTG9hZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy4kdGFibGVMb2FkaW5nLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIil9fSx7a2V5OlwidG9nZ2xlUGFnaW5hdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLnBhZ2luYXRpb249IXRoaXMub3B0aW9ucy5wYWdpbmF0aW9uO3ZhciB0PXRoaXMub3B0aW9ucy5zaG93QnV0dG9uSWNvbnM/dGhpcy5vcHRpb25zLnBhZ2luYXRpb24/dGhpcy5vcHRpb25zLmljb25zLnBhZ2luYXRpb25Td2l0Y2hEb3duOnRoaXMub3B0aW9ucy5pY29ucy5wYWdpbmF0aW9uU3dpdGNoVXA6XCJcIixlPXRoaXMub3B0aW9ucy5zaG93QnV0dG9uVGV4dD90aGlzLm9wdGlvbnMucGFnaW5hdGlvbj90aGlzLm9wdGlvbnMuZm9ybWF0UGFnaW5hdGlvblN3aXRjaFVwKCk6dGhpcy5vcHRpb25zLmZvcm1hdFBhZ2luYXRpb25Td2l0Y2hEb3duKCk6XCJcIjt0aGlzLiR0b29sYmFyLmZpbmQoJ2J1dHRvbltuYW1lPVwicGFnaW5hdGlvblN3aXRjaFwiXScpLmh0bWwoTW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLmljb24sdGhpcy5vcHRpb25zLmljb25zUHJlZml4LHQpK1wiIFwiK2UpLHRoaXMudXBkYXRlUGFnaW5hdGlvbigpfX0se2tleTpcInRvZ2dsZUZ1bGxzY3JlZW5cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuJGVsLmNsb3Nlc3QoXCIuYm9vdHN0cmFwLXRhYmxlXCIpLnRvZ2dsZUNsYXNzKFwiZnVsbHNjcmVlblwiKSx0aGlzLnJlc2V0VmlldygpfX0se2tleTpcInRvZ2dsZVZpZXdcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMub3B0aW9ucy5jYXJkVmlldz0hdGhpcy5vcHRpb25zLmNhcmRWaWV3LHRoaXMuaW5pdEhlYWRlcigpO3ZhciB0PXRoaXMub3B0aW9ucy5zaG93QnV0dG9uSWNvbnM/dGhpcy5vcHRpb25zLmNhcmRWaWV3P3RoaXMub3B0aW9ucy5pY29ucy50b2dnbGVPbjp0aGlzLm9wdGlvbnMuaWNvbnMudG9nZ2xlT2ZmOlwiXCIsZT10aGlzLm9wdGlvbnMuc2hvd0J1dHRvblRleHQ/dGhpcy5vcHRpb25zLmNhcmRWaWV3P3RoaXMub3B0aW9ucy5mb3JtYXRUb2dnbGVPZmYoKTp0aGlzLm9wdGlvbnMuZm9ybWF0VG9nZ2xlT24oKTpcIlwiO3RoaXMuJHRvb2xiYXIuZmluZCgnYnV0dG9uW25hbWU9XCJ0b2dnbGVcIl0nKS5odG1sKE1vLnNwcmludGYodGhpcy5jb25zdGFudHMuaHRtbC5pY29uLHRoaXMub3B0aW9ucy5pY29uc1ByZWZpeCx0KStcIiBcIitlKSx0aGlzLmluaXRCb2R5KCksdGhpcy50cmlnZ2VyKFwidG9nZ2xlXCIsdGhpcy5vcHRpb25zLmNhcmRWaWV3KX19LHtrZXk6XCJyZXNldFNlYXJjaFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHRvb2xiYXIuZmluZChcIi5zZWFyY2ggaW5wdXRcIik7ZS52YWwodHx8XCJcIiksdGhpcy5vblNlYXJjaCh7Y3VycmVudFRhcmdldDplfSl9fSx7a2V5OlwiZmlsdGVyQnlcIix2YWx1ZTpmdW5jdGlvbihlLGkpe3RoaXMuZmlsdGVyT3B0aW9ucz1Nby5pc0VtcHR5T2JqZWN0KGkpP3RoaXMub3B0aW9ucy5maWx0ZXJPcHRpb25zOnQuZXh0ZW5kKHRoaXMub3B0aW9ucy5maWx0ZXJPcHRpb25zLGkpLHRoaXMuZmlsdGVyQ29sdW1ucz1Nby5pc0VtcHR5T2JqZWN0KGUpP3t9OmUsdGhpcy5vcHRpb25zLnBhZ2VOdW1iZXI9MSx0aGlzLmluaXRTZWFyY2goKSx0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKX19LHtrZXk6XCJzY3JvbGxUb1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpcmV0dXJuIHRoaXMuJHRhYmxlQm9keS5zY3JvbGxUb3AoKTt2YXIgaT17dW5pdDpcInB4XCIsdmFsdWU6MH07XCJvYmplY3RcIj09PUNvKGUpP2k9T2JqZWN0LmFzc2lnbihpLGUpOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZcImJvdHRvbVwiPT09ZT9pLnZhbHVlPXRoaXMuJHRhYmxlQm9keVswXS5zY3JvbGxIZWlnaHQ6XCJzdHJpbmdcIj09dHlwZW9mIGUmJihpLnZhbHVlPWUpO3ZhciBuPWkudmFsdWU7XCJyb3dzXCI9PT1pLnVuaXQmJihuPTAsdGhpcy4kYm9keS5maW5kKFwiPiB0cjpsdChcIi5jb25jYXQoaS52YWx1ZSxcIilcIikpLmVhY2goKGZ1bmN0aW9uKGUsaSl7bis9dChpKS5vdXRlckhlaWdodCghMCl9KSkpLHRoaXMuJHRhYmxlQm9keS5zY3JvbGxUb3Aobil9fSx7a2V5OlwiZ2V0U2Nyb2xsUG9zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNjcm9sbFRvKCl9fSx7a2V5Olwic2VsZWN0UGFnZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3Q+MCYmdDw9dGhpcy5vcHRpb25zLnRvdGFsUGFnZXMmJih0aGlzLm9wdGlvbnMucGFnZU51bWJlcj10LHRoaXMudXBkYXRlUGFnaW5hdGlvbigpKX19LHtrZXk6XCJwcmV2UGFnZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLnBhZ2VOdW1iZXI+MSYmKHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyLS0sdGhpcy51cGRhdGVQYWdpbmF0aW9uKCkpfX0se2tleTpcIm5leHRQYWdlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMucGFnZU51bWJlcjx0aGlzLm9wdGlvbnMudG90YWxQYWdlcyYmKHRoaXMub3B0aW9ucy5wYWdlTnVtYmVyKyssdGhpcy51cGRhdGVQYWdpbmF0aW9uKCkpfX0se2tleTpcInRvZ2dsZURldGFpbFZpZXdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3RoaXMuJGJvZHkuZmluZChNby5zcHJpbnRmKCc+IHRyW2RhdGEtaW5kZXg9XCIlc1wiXScsdCkpLm5leHQoKS5pcyhcInRyLmRldGFpbC12aWV3XCIpP3RoaXMuY29sbGFwc2VSb3codCk6dGhpcy5leHBhbmRSb3codCxlKSx0aGlzLnJlc2V0VmlldygpfX0se2tleTpcImV4cGFuZFJvd1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5kYXRhW3RdLG49dGhpcy4kYm9keS5maW5kKE1vLnNwcmludGYoJz4gdHJbZGF0YS1pbmRleD1cIiVzXCJdW2RhdGEtaGFzLWRldGFpbC12aWV3XScsdCkpO2lmKCFuLm5leHQoKS5pcyhcInRyLmRldGFpbC12aWV3XCIpKXt0aGlzLm9wdGlvbnMuZGV0YWlsVmlld0ljb24mJm4uZmluZChcImEuZGV0YWlsLWljb25cIikuaHRtbChNby5zcHJpbnRmKHRoaXMuY29uc3RhbnRzLmh0bWwuaWNvbix0aGlzLm9wdGlvbnMuaWNvbnNQcmVmaXgsdGhpcy5vcHRpb25zLmljb25zLmRldGFpbENsb3NlKSksbi5hZnRlcihNby5zcHJpbnRmKCc8dHIgY2xhc3M9XCJkZXRhaWwtdmlld1wiPjx0ZCBjb2xzcGFuPVwiJXNcIj48L3RkPjwvdHI+JyxuLmNoaWxkcmVuKFwidGRcIikubGVuZ3RoKSk7dmFyIG89bi5uZXh0KCkuZmluZChcInRkXCIpLHI9ZXx8dGhpcy5vcHRpb25zLmRldGFpbEZvcm1hdHRlcixhPU1vLmNhbGN1bGF0ZU9iamVjdFZhbHVlKHRoaXMub3B0aW9ucyxyLFt0LGksb10sXCJcIik7MT09PW8ubGVuZ3RoJiZvLmFwcGVuZChhKSx0aGlzLnRyaWdnZXIoXCJleHBhbmQtcm93XCIsdCxpLG8pfX19LHtrZXk6XCJjb2xsYXBzZVJvd1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZGF0YVt0XSxpPXRoaXMuJGJvZHkuZmluZChNby5zcHJpbnRmKCc+IHRyW2RhdGEtaW5kZXg9XCIlc1wiXVtkYXRhLWhhcy1kZXRhaWwtdmlld10nLHQpKTtpLm5leHQoKS5pcyhcInRyLmRldGFpbC12aWV3XCIpJiYodGhpcy5vcHRpb25zLmRldGFpbFZpZXdJY29uJiZpLmZpbmQoXCJhLmRldGFpbC1pY29uXCIpLmh0bWwoTW8uc3ByaW50Zih0aGlzLmNvbnN0YW50cy5odG1sLmljb24sdGhpcy5vcHRpb25zLmljb25zUHJlZml4LHRoaXMub3B0aW9ucy5pY29ucy5kZXRhaWxPcGVuKSksdGhpcy50cmlnZ2VyKFwiY29sbGFwc2Utcm93XCIsdCxlLGkubmV4dCgpKSxpLm5leHQoKS5yZW1vdmUoKSl9fSx7a2V5OlwiZXhwYW5kQWxsUm93c1wiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuJGJvZHkuZmluZChcIj4gdHJbZGF0YS1pbmRleF1bZGF0YS1oYXMtZGV0YWlsLXZpZXddXCIpLGk9MDtpPGUubGVuZ3RoO2krKyl0aGlzLmV4cGFuZFJvdyh0KGVbaV0pLmRhdGEoXCJpbmRleFwiKSl9fSx7a2V5OlwiY29sbGFwc2VBbGxSb3dzXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy4kYm9keS5maW5kKFwiPiB0cltkYXRhLWluZGV4XVtkYXRhLWhhcy1kZXRhaWwtdmlld11cIiksaT0wO2k8ZS5sZW5ndGg7aSsrKXRoaXMuY29sbGFwc2VSb3codChlW2ldKS5kYXRhKFwiaW5kZXhcIikpfX0se2tleTpcInVwZGF0ZUNvbHVtblRpdGxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5oYXNPd25Qcm9wZXJ0eShcImZpZWxkXCIpJiZlLmhhc093blByb3BlcnR5KFwidGl0bGVcIikmJih0aGlzLmNvbHVtbnNbdGhpcy5maWVsZHNDb2x1bW5zSW5kZXhbZS5maWVsZF1dLnRpdGxlPXRoaXMub3B0aW9ucy5lc2NhcGU/TW8uZXNjYXBlSFRNTChlLnRpdGxlKTplLnRpdGxlLHRoaXMuY29sdW1uc1t0aGlzLmZpZWxkc0NvbHVtbnNJbmRleFtlLmZpZWxkXV0udmlzaWJsZSYmKHZvaWQgMCE9PXRoaXMub3B0aW9ucy5oZWlnaHQ/dGhpcy4kdGFibGVIZWFkZXI6dGhpcy4kaGVhZGVyKS5maW5kKFwidGhbZGF0YS1maWVsZF1cIikuZWFjaCgoZnVuY3Rpb24oaSxuKXtpZih0KG4pLmRhdGEoXCJmaWVsZFwiKT09PWUuZmllbGQpcmV0dXJuIHQodChuKS5maW5kKFwiLnRoLWlubmVyXCIpWzBdKS50ZXh0KGUudGl0bGUpLCExfSkpKX19LHtrZXk6XCJ1cGRhdGVGb3JtYXRUZXh0XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXsvXmZvcm1hdC8udGVzdCh0KSYmdGhpcy5vcHRpb25zW3RdJiYoXCJzdHJpbmdcIj09dHlwZW9mIGU/dGhpcy5vcHRpb25zW3RdPWZ1bmN0aW9uKCl7cmV0dXJuIGV9OlwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJih0aGlzLm9wdGlvbnNbdF09ZSksdGhpcy5pbml0VG9vbGJhcigpLHRoaXMuaW5pdFBhZ2luYXRpb24oKSx0aGlzLmluaXRCb2R5KCkpfX1dKSxlfSgpO3JldHVybiBxby5WRVJTSU9OPUJvLlZFUlNJT04scW8uREVGQVVMVFM9Qm8uREVGQVVMVFMscW8uTE9DQUxFUz1Cby5MT0NBTEVTLHFvLkNPTFVNTl9ERUZBVUxUUz1Cby5DT0xVTU5fREVGQVVMVFMscW8uTUVUSE9EUz1Cby5NRVRIT0RTLHFvLkVWRU5UUz1Cby5FVkVOVFMsdC5Cb290c3RyYXBUYWJsZT1xbyx0LmZuLmJvb3RzdHJhcFRhYmxlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgaT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGk+MT9pLTE6MCksbz0xO288aTtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgcjtyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbihpLG8pe3ZhciBhPXQobykuZGF0YShcImJvb3RzdHJhcC50YWJsZVwiKSxzPXQuZXh0ZW5kKHt9LHFvLkRFRkFVTFRTLHQobykuZGF0YSgpLFwib2JqZWN0XCI9PT1DbyhlKSYmZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBsO2lmKCFCby5NRVRIT0RTLmluY2x1ZGVzKGUpKXRocm93IG5ldyBFcnJvcihcIlVua25vd24gbWV0aG9kOiBcIi5jb25jYXQoZSkpO2lmKCFhKXJldHVybjtyPShsPWEpW2VdLmFwcGx5KGwsbiksXCJkZXN0cm95XCI9PT1lJiZ0KG8pLnJlbW92ZURhdGEoXCJib290c3RyYXAudGFibGVcIil9YXx8dChvKS5kYXRhKFwiYm9vdHN0cmFwLnRhYmxlXCIsYT1uZXcgdC5Cb290c3RyYXBUYWJsZShvLHMpKX0pKSx2b2lkIDA9PT1yP3RoaXM6cn0sdC5mbi5ib290c3RyYXBUYWJsZS5Db25zdHJ1Y3Rvcj1xbyx0LmZuLmJvb3RzdHJhcFRhYmxlLnRoZW1lPUJvLlRIRU1FLHQuZm4uYm9vdHN0cmFwVGFibGUuVkVSU0lPTj1Cby5WRVJTSU9OLHQuZm4uYm9vdHN0cmFwVGFibGUuZGVmYXVsdHM9cW8uREVGQVVMVFMsdC5mbi5ib290c3RyYXBUYWJsZS5jb2x1bW5EZWZhdWx0cz1xby5DT0xVTU5fREVGQVVMVFMsdC5mbi5ib290c3RyYXBUYWJsZS5ldmVudHM9cW8uRVZFTlRTLHQuZm4uYm9vdHN0cmFwVGFibGUubG9jYWxlcz1xby5MT0NBTEVTLHQuZm4uYm9vdHN0cmFwVGFibGUubWV0aG9kcz1xby5NRVRIT0RTLHQuZm4uYm9vdHN0cmFwVGFibGUudXRpbHM9TW8sdCgoZnVuY3Rpb24oKXt0KCdbZGF0YS10b2dnbGU9XCJ0YWJsZVwiXScpLmJvb3RzdHJhcFRhYmxlKCl9KSkscW99KSk7XG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIEFqYXhNb25pdG9yLCBCYXIsIERvY3VtZW50TW9uaXRvciwgRWxlbWVudE1vbml0b3IsIEVsZW1lbnRUcmFja2VyLCBFdmVudExhZ01vbml0b3IsIEV2ZW50ZWQsIEV2ZW50cywgTm9UYXJnZXRFcnJvciwgUGFjZSwgUmVxdWVzdEludGVyY2VwdCwgU09VUkNFX0tFWVMsIFNjYWxlciwgU29ja2V0UmVxdWVzdFRyYWNrZXIsIFhIUlJlcXVlc3RUcmFja2VyLCBhbmltYXRpb24sIGF2Z0FtcGxpdHVkZSwgYmFyLCBjYW5jZWxBbmltYXRpb24sIGNhbmNlbEFuaW1hdGlvbkZyYW1lLCBkZWZhdWx0T3B0aW9ucywgZXh0ZW5kLCBleHRlbmROYXRpdmUsIGdldEZyb21ET00sIGdldEludGVyY2VwdCwgaGFuZGxlUHVzaFN0YXRlLCBpZ25vcmVTdGFjaywgaW5pdCwgbm93LCBvcHRpb25zLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlc3VsdCwgcnVuQW5pbWF0aW9uLCBzY2FsZXJzLCBzaG91bGRJZ25vcmVVUkwsIHNob3VsZFRyYWNrLCBzb3VyY2UsIHNvdXJjZXMsIHVuaVNjYWxlciwgX1dlYlNvY2tldCwgX1hEb21haW5SZXF1ZXN0LCBfWE1MSHR0cFJlcXVlc3QsIF9pLCBfaW50ZXJjZXB0LCBfbGVuLCBfcHVzaFN0YXRlLCBfcmVmLCBfcmVmMSwgX3JlcGxhY2VTdGF0ZSxcclxuICAgIF9fc2xpY2UgPSBbXS5zbGljZSxcclxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxyXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXHJcbiAgICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcclxuXHJcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBjYXRjaHVwVGltZTogMTAwLFxyXG4gICAgaW5pdGlhbFJhdGU6IC4wMyxcclxuICAgIG1pblRpbWU6IDI1MCxcclxuICAgIGdob3N0VGltZTogMTAwLFxyXG4gICAgbWF4UHJvZ3Jlc3NQZXJGcmFtZTogMjAsXHJcbiAgICBlYXNlRmFjdG9yOiAxLjI1LFxyXG4gICAgc3RhcnRPblBhZ2VMb2FkOiB0cnVlLFxyXG4gICAgcmVzdGFydE9uUHVzaFN0YXRlOiB0cnVlLFxyXG4gICAgcmVzdGFydE9uUmVxdWVzdEFmdGVyOiA1MDAsXHJcbiAgICB0YXJnZXQ6ICdib2R5JyxcclxuICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgIGNoZWNrSW50ZXJ2YWw6IDEwMCxcclxuICAgICAgc2VsZWN0b3JzOiBbJ2JvZHknXVxyXG4gICAgfSxcclxuICAgIGV2ZW50TGFnOiB7XHJcbiAgICAgIG1pblNhbXBsZXM6IDEwLFxyXG4gICAgICBzYW1wbGVDb3VudDogMyxcclxuICAgICAgbGFnVGhyZXNob2xkOiAzXHJcbiAgICB9LFxyXG4gICAgYWpheDoge1xyXG4gICAgICB0cmFja01ldGhvZHM6IFsnR0VUJ10sXHJcbiAgICAgIHRyYWNrV2ViU29ja2V0czogdHJ1ZSxcclxuICAgICAgaWdub3JlVVJMczogW11cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBub3cgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfcmVmO1xyXG4gICAgcmV0dXJuIChfcmVmID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsID8gdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiID8gcGVyZm9ybWFuY2Uubm93KCkgOiB2b2lkIDAgOiB2b2lkIDApICE9IG51bGwgPyBfcmVmIDogKyhuZXcgRGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcblxyXG4gIGlmIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gbnVsbCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oZm4pIHtcclxuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDUwKTtcclxuICAgIH07XHJcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJ1bkFuaW1hdGlvbiA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICB2YXIgbGFzdCwgdGljaztcclxuICAgIGxhc3QgPSBub3coKTtcclxuICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGRpZmY7XHJcbiAgICAgIGRpZmYgPSBub3coKSAtIGxhc3Q7XHJcbiAgICAgIGlmIChkaWZmID49IDMzKSB7XHJcbiAgICAgICAgbGFzdCA9IG5vdygpO1xyXG4gICAgICAgIHJldHVybiBmbihkaWZmLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQodGljaywgMzMgLSBkaWZmKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVzdWx0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYXJncywga2V5LCBvYmo7XHJcbiAgICBvYmogPSBhcmd1bWVudHNbMF0sIGtleSA9IGFyZ3VtZW50c1sxXSwgYXJncyA9IDMgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogW107XHJcbiAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBvYmpba2V5XS5hcHBseShvYmosIGFyZ3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGtleSwgb3V0LCBzb3VyY2UsIHNvdXJjZXMsIHZhbCwgX2ksIF9sZW47XHJcbiAgICBvdXQgPSBhcmd1bWVudHNbMF0sIHNvdXJjZXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBzb3VyY2VzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XHJcbiAgICAgIHNvdXJjZSA9IHNvdXJjZXNbX2ldO1xyXG4gICAgICBpZiAoc291cmNlKSB7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XHJcbiAgICAgICAgICB2YWwgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICAgIGlmICgob3V0W2tleV0gIT0gbnVsbCkgJiYgdHlwZW9mIG91dFtrZXldID09PSAnb2JqZWN0JyAmJiAodmFsICE9IG51bGwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGV4dGVuZChvdXRba2V5XSwgdmFsKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dFtrZXldID0gdmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxuICB9O1xyXG5cclxuICBhdmdBbXBsaXR1ZGUgPSBmdW5jdGlvbihhcnIpIHtcclxuICAgIHZhciBjb3VudCwgc3VtLCB2LCBfaSwgX2xlbjtcclxuICAgIHN1bSA9IGNvdW50ID0gMDtcclxuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gYXJyLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XHJcbiAgICAgIHYgPSBhcnJbX2ldO1xyXG4gICAgICBzdW0gKz0gTWF0aC5hYnModik7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RnJvbURPTSA9IGZ1bmN0aW9uKGtleSwganNvbikge1xyXG4gICAgdmFyIGRhdGEsIGUsIGVsO1xyXG4gICAgaWYgKGtleSA9PSBudWxsKSB7XHJcbiAgICAgIGtleSA9ICdvcHRpb25zJztcclxuICAgIH1cclxuICAgIGlmIChqc29uID09IG51bGwpIHtcclxuICAgICAganNvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWNlLVwiICsga2V5ICsgXCJdXCIpO1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkYXRhID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiICsga2V5KTtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGUgPSBfZXJyb3I7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlICE9PSBudWxsID8gY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgaW5saW5lIHBhY2Ugb3B0aW9uc1wiLCBlKSA6IHZvaWQgMDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBFdmVudGVkID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRlZCgpIHt9XHJcblxyXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4LCBvbmNlKSB7XHJcbiAgICAgIHZhciBfYmFzZTtcclxuICAgICAgaWYgKG9uY2UgPT0gbnVsbCkge1xyXG4gICAgICAgIG9uY2UgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5iaW5kaW5ncyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoX2Jhc2UgPSB0aGlzLmJpbmRpbmdzKVtldmVudF0gPT0gbnVsbCkge1xyXG4gICAgICAgIF9iYXNlW2V2ZW50XSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmJpbmRpbmdzW2V2ZW50XS5wdXNoKHtcclxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gICAgICAgIGN0eDogY3R4LFxyXG4gICAgICAgIG9uY2U6IG9uY2VcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEV2ZW50ZWQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBFdmVudGVkLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgICB2YXIgaSwgX3JlZiwgX3Jlc3VsdHM7XHJcbiAgICAgIGlmICgoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1tldmVudF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcclxuICAgICAgICB3aGlsZSAoaSA8IHRoaXMuYmluZGluZ3NbZXZlbnRdLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgRXZlbnRlZC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYXJncywgY3R4LCBldmVudCwgaGFuZGxlciwgaSwgb25jZSwgX3JlZiwgX3JlZjEsIF9yZXN1bHRzO1xyXG4gICAgICBldmVudCA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XHJcbiAgICAgIGlmICgoX3JlZiA9IHRoaXMuYmluZGluZ3MpICE9IG51bGwgPyBfcmVmW2V2ZW50XSA6IHZvaWQgMCkge1xyXG4gICAgICAgIGkgPSAwO1xyXG4gICAgICAgIF9yZXN1bHRzID0gW107XHJcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcclxuICAgICAgICAgIF9yZWYxID0gdGhpcy5iaW5kaW5nc1tldmVudF1baV0sIGhhbmRsZXIgPSBfcmVmMS5oYW5kbGVyLCBjdHggPSBfcmVmMS5jdHgsIG9uY2UgPSBfcmVmMS5vbmNlO1xyXG4gICAgICAgICAgaGFuZGxlci5hcHBseShjdHggIT0gbnVsbCA/IGN0eCA6IHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgaWYgKG9uY2UpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaSwgMSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50ZWQ7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIFBhY2UgPSB3aW5kb3cuUGFjZSB8fCB7fTtcclxuXHJcbiAgd2luZG93LlBhY2UgPSBQYWNlO1xyXG5cclxuICBleHRlbmQoUGFjZSwgRXZlbnRlZC5wcm90b3R5cGUpO1xyXG5cclxuICBvcHRpb25zID0gUGFjZS5vcHRpb25zID0gZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgd2luZG93LnBhY2VPcHRpb25zLCBnZXRGcm9tRE9NKCkpO1xyXG5cclxuICBfcmVmID0gWydhamF4JywgJ2RvY3VtZW50JywgJ2V2ZW50TGFnJywgJ2VsZW1lbnRzJ107XHJcbiAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XHJcbiAgICBzb3VyY2UgPSBfcmVmW19pXTtcclxuICAgIGlmIChvcHRpb25zW3NvdXJjZV0gPT09IHRydWUpIHtcclxuICAgICAgb3B0aW9uc1tzb3VyY2VdID0gZGVmYXVsdE9wdGlvbnNbc291cmNlXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE5vVGFyZ2V0RXJyb3IgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTm9UYXJnZXRFcnJvciwgX3N1cGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBOb1RhcmdldEVycm9yKCkge1xyXG4gICAgICBfcmVmMSA9IE5vVGFyZ2V0RXJyb3IuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHJldHVybiBfcmVmMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTm9UYXJnZXRFcnJvcjtcclxuXHJcbiAgfSkoRXJyb3IpO1xyXG5cclxuICBCYXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBCYXIoKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJhci5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdGFyZ2V0RWxlbWVudDtcclxuICAgICAgaWYgKHRoaXMuZWwgPT0gbnVsbCkge1xyXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KTtcclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBOb1RhcmdldEVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSBcInBhY2UgcGFjZS1hY3RpdmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3BhY2UtZG9uZS9nLCAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLXJ1bm5pbmcnO1xyXG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzXCI+XFxuICA8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzcy1pbm5lclwiPjwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XCJwYWNlLWFjdGl2aXR5XCI+PC9kaXY+JztcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5maXJzdENoaWxkICE9IG51bGwpIHtcclxuICAgICAgICAgIHRhcmdldEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRhcmdldEVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmVsO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgZWw7XHJcbiAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICcnKTtcclxuICAgICAgZWwuY2xhc3NOYW1lICs9ICcgcGFjZS1pbmFjdGl2ZSc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1ydW5uaW5nJywgJycpO1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLWRvbmUnO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByb2cpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2c7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBCYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZ2V0RWxlbWVudCgpKTtcclxuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgICAgTm9UYXJnZXRFcnJvciA9IF9lcnJvcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5lbCA9IHZvaWQgMDtcclxuICAgIH07XHJcblxyXG4gICAgQmFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGVsLCBrZXksIHByb2dyZXNzU3RyLCB0cmFuc2Zvcm0sIF9qLCBfbGVuMSwgX3JlZjI7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KSA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgIHRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyB0aGlzLnByb2dyZXNzICsgXCIlLCAwLCAwKVwiO1xyXG4gICAgICBfcmVmMiA9IFsnd2Via2l0VHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddO1xyXG4gICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgICBrZXkgPSBfcmVmMltfal07XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc3R5bGVba2V5XSA9IHRyYW5zZm9ybTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgfHwgdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyB8IDAgIT09IHRoaXMucHJvZ3Jlc3MgfCAwKSB7XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzLXRleHQnLCBcIlwiICsgKHRoaXMucHJvZ3Jlc3MgfCAwKSArIFwiJVwiKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHtcclxuICAgICAgICAgIHByb2dyZXNzU3RyID0gJzk5JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSB0aGlzLnByb2dyZXNzIDwgMTAgPyBcIjBcIiA6IFwiXCI7XHJcbiAgICAgICAgICBwcm9ncmVzc1N0ciArPSB0aGlzLnByb2dyZXNzIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzJywgXCJcIiArIHByb2dyZXNzU3RyKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIEJhci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA+PSAxMDA7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBCYXI7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIEV2ZW50cyA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50cygpIHtcclxuICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIEV2ZW50cy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xyXG4gICAgICB2YXIgYmluZGluZywgX2osIF9sZW4xLCBfcmVmMiwgX3Jlc3VsdHM7XHJcbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzW25hbWVdICE9IG51bGwpIHtcclxuICAgICAgICBfcmVmMiA9IHRoaXMuYmluZGluZ3NbbmFtZV07XHJcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcclxuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcclxuICAgICAgICAgIGJpbmRpbmcgPSBfcmVmMltfal07XHJcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKGJpbmRpbmcuY2FsbCh0aGlzLCB2YWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEV2ZW50cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbihuYW1lLCBmbikge1xyXG4gICAgICB2YXIgX2Jhc2U7XHJcbiAgICAgIGlmICgoX2Jhc2UgPSB0aGlzLmJpbmRpbmdzKVtuYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgX2Jhc2VbbmFtZV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5iaW5kaW5nc1tuYW1lXS5wdXNoKGZuKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50cztcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgX1hNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xyXG5cclxuICBfWERvbWFpblJlcXVlc3QgPSB3aW5kb3cuWERvbWFpblJlcXVlc3Q7XHJcblxyXG4gIF9XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0O1xyXG5cclxuICBleHRlbmROYXRpdmUgPSBmdW5jdGlvbih0bywgZnJvbSkge1xyXG4gICAgdmFyIGUsIGtleSwgX3Jlc3VsdHM7XHJcbiAgICBfcmVzdWx0cyA9IFtdO1xyXG4gICAgZm9yIChrZXkgaW4gZnJvbS5wcm90b3R5cGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoKHRvW2tleV0gPT0gbnVsbCkgJiYgdHlwZW9mIGZyb21ba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xyXG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbS5wcm90b3R5cGVba2V5XTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godG9ba2V5XSA9IGZyb20ucHJvdG90eXBlW2tleV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKHZvaWQgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgICBlID0gX2Vycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgfTtcclxuXHJcbiAgaWdub3JlU3RhY2sgPSBbXTtcclxuXHJcbiAgUGFjZS5pZ25vcmUgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBhcmdzLCBmbiwgcmV0O1xyXG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgnaWdub3JlJyk7XHJcbiAgICByZXQgPSBmbi5hcHBseShudWxsLCBhcmdzKTtcclxuICAgIGlnbm9yZVN0YWNrLnNoaWZ0KCk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH07XHJcblxyXG4gIFBhY2UudHJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBhcmdzLCBmbiwgcmV0O1xyXG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xyXG4gICAgaWdub3JlU3RhY2sudW5zaGlmdCgndHJhY2snKTtcclxuICAgIHJldCA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfTtcclxuXHJcbiAgc2hvdWxkVHJhY2sgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICAgIHZhciBfcmVmMjtcclxuICAgIGlmIChtZXRob2QgPT0gbnVsbCkge1xyXG4gICAgICBtZXRob2QgPSAnR0VUJztcclxuICAgIH1cclxuICAgIGlmIChpZ25vcmVTdGFja1swXSA9PT0gJ3RyYWNrJykge1xyXG4gICAgICByZXR1cm4gJ2ZvcmNlJztcclxuICAgIH1cclxuICAgIGlmICghaWdub3JlU3RhY2subGVuZ3RoICYmIG9wdGlvbnMuYWpheCkge1xyXG4gICAgICBpZiAobWV0aG9kID09PSAnc29ja2V0JyAmJiBvcHRpb25zLmFqYXgudHJhY2tXZWJTb2NrZXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoX3JlZjIgPSBtZXRob2QudG9VcHBlckNhc2UoKSwgX19pbmRleE9mLmNhbGwob3B0aW9ucy5hamF4LnRyYWNrTWV0aG9kcywgX3JlZjIpID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIFJlcXVlc3RJbnRlcmNlcHQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmVxdWVzdEludGVyY2VwdCwgX3N1cGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBSZXF1ZXN0SW50ZXJjZXB0KCkge1xyXG4gICAgICB2YXIgbW9uaXRvclhIUixcclxuICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIFJlcXVlc3RJbnRlcmNlcHQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIG1vbml0b3JYSFIgPSBmdW5jdGlvbihyZXEpIHtcclxuICAgICAgICB2YXIgX29wZW47XHJcbiAgICAgICAgX29wZW4gPSByZXEub3BlbjtcclxuICAgICAgICByZXR1cm4gcmVxLm9wZW4gPSBmdW5jdGlvbih0eXBlLCB1cmwsIGFzeW5jKSB7XHJcbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2sodHlwZSkpIHtcclxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBfb3Blbi5hcHBseShyZXEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgICAgd2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24oZmxhZ3MpIHtcclxuICAgICAgICB2YXIgcmVxO1xyXG4gICAgICAgIHJlcSA9IG5ldyBfWE1MSHR0cFJlcXVlc3QoZmxhZ3MpO1xyXG4gICAgICAgIG1vbml0b3JYSFIocmVxKTtcclxuICAgICAgICByZXR1cm4gcmVxO1xyXG4gICAgICB9O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuWE1MSHR0cFJlcXVlc3QsIF9YTUxIdHRwUmVxdWVzdCk7XHJcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cclxuICAgICAgaWYgKF9YRG9tYWluUmVxdWVzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgcmVxO1xyXG4gICAgICAgICAgcmVxID0gbmV3IF9YRG9tYWluUmVxdWVzdDtcclxuICAgICAgICAgIG1vbml0b3JYSFIocmVxKTtcclxuICAgICAgICAgIHJldHVybiByZXE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgX1hEb21haW5SZXF1ZXN0KTtcclxuICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChfV2ViU29ja2V0ICE9IG51bGwpICYmIG9wdGlvbnMuYWpheC50cmFja1dlYlNvY2tldHMpIHtcclxuICAgICAgICB3aW5kb3cuV2ViU29ja2V0ID0gZnVuY3Rpb24odXJsLCBwcm90b2NvbHMpIHtcclxuICAgICAgICAgIHZhciByZXE7XHJcbiAgICAgICAgICBpZiAocHJvdG9jb2xzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsLCBwcm90b2NvbHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzaG91bGRUcmFjaygnc29ja2V0JykpIHtcclxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcclxuICAgICAgICAgICAgICB0eXBlOiAnc29ja2V0JyxcclxuICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyxcclxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGV4dGVuZE5hdGl2ZSh3aW5kb3cuV2ViU29ja2V0LCBfV2ViU29ja2V0KTtcclxuICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHt9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUmVxdWVzdEludGVyY2VwdDtcclxuXHJcbiAgfSkoRXZlbnRzKTtcclxuXHJcbiAgX2ludGVyY2VwdCA9IG51bGw7XHJcblxyXG4gIGdldEludGVyY2VwdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKF9pbnRlcmNlcHQgPT0gbnVsbCkge1xyXG4gICAgICBfaW50ZXJjZXB0ID0gbmV3IFJlcXVlc3RJbnRlcmNlcHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX2ludGVyY2VwdDtcclxuICB9O1xyXG5cclxuICBzaG91bGRJZ25vcmVVUkwgPSBmdW5jdGlvbih1cmwpIHtcclxuICAgIHZhciBwYXR0ZXJuLCBfaiwgX2xlbjEsIF9yZWYyO1xyXG4gICAgX3JlZjIgPSBvcHRpb25zLmFqYXguaWdub3JlVVJMcztcclxuICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICBwYXR0ZXJuID0gX3JlZjJbX2pdO1xyXG4gICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhdHRlcm4pICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihfYXJnKSB7XHJcbiAgICB2YXIgYWZ0ZXIsIGFyZ3MsIHJlcXVlc3QsIHR5cGUsIHVybDtcclxuICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xyXG4gICAgaWYgKHNob3VsZElnbm9yZVVSTCh1cmwpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghUGFjZS5ydW5uaW5nICYmIChvcHRpb25zLnJlc3RhcnRPblJlcXVlc3RBZnRlciAhPT0gZmFsc2UgfHwgc2hvdWxkVHJhY2sodHlwZSkgPT09ICdmb3JjZScpKSB7XHJcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgIGFmdGVyID0gb3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgfHwgMDtcclxuICAgICAgaWYgKHR5cGVvZiBhZnRlciA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgYWZ0ZXIgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdGlsbEFjdGl2ZSwgX2osIF9sZW4xLCBfcmVmMiwgX3JlZjMsIF9yZXN1bHRzO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xyXG4gICAgICAgICAgc3RpbGxBY3RpdmUgPSByZXF1ZXN0LnJlYWR5U3RhdGUgPCAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGlsbEFjdGl2ZSA9ICgwIDwgKF9yZWYyID0gcmVxdWVzdC5yZWFkeVN0YXRlKSAmJiBfcmVmMiA8IDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RpbGxBY3RpdmUpIHtcclxuICAgICAgICAgIFBhY2UucmVzdGFydCgpO1xyXG4gICAgICAgICAgX3JlZjMgPSBQYWNlLnNvdXJjZXM7XHJcbiAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYzW19qXTtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIEFqYXhNb25pdG9yKSB7XHJcbiAgICAgICAgICAgICAgc291cmNlLndhdGNoLmFwcGx5KHNvdXJjZSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBhZnRlcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIEFqYXhNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gQWpheE1vbml0b3IoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuICAgICAgZ2V0SW50ZXJjZXB0KCkub24oJ3JlcXVlc3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3RoaXMud2F0Y2guYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEFqYXhNb25pdG9yLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKF9hcmcpIHtcclxuICAgICAgdmFyIHJlcXVlc3QsIHRyYWNrZXIsIHR5cGUsIHVybDtcclxuICAgICAgdHlwZSA9IF9hcmcudHlwZSwgcmVxdWVzdCA9IF9hcmcucmVxdWVzdCwgdXJsID0gX2FyZy51cmw7XHJcbiAgICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3NvY2tldCcpIHtcclxuICAgICAgICB0cmFja2VyID0gbmV3IFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyYWNrZXIgPSBuZXcgWEhSUmVxdWVzdFRyYWNrZXIocmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHMucHVzaCh0cmFja2VyKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEFqYXhNb25pdG9yO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBYSFJSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIFhIUlJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcclxuICAgICAgdmFyIGV2ZW50LCBzaXplLCBfaiwgX2xlbjEsIF9vbnJlYWR5c3RhdGVjaGFuZ2UsIF9yZWYyLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgIGlmICh3aW5kb3cuUHJvZ3Jlc3NFdmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgc2l6ZSA9IG51bGw7XHJcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWw7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSBfdGhpcy5wcm9ncmVzcyArICgxMDAgLSBfdGhpcy5wcm9ncmVzcykgLyAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBfcmVmMiA9IFsnbG9hZCcsICdhYm9ydCcsICd0aW1lb3V0JywgJ2Vycm9yJ107XHJcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcclxuICAgICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgX3JlZjM7XHJcbiAgICAgICAgICBpZiAoKF9yZWYzID0gcmVxdWVzdC5yZWFkeVN0YXRlKSA9PT0gMCB8fCBfcmVmMyA9PT0gNCkge1xyXG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gNTA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFhIUlJlcXVlc3RUcmFja2VyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBTb2NrZXRSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIFNvY2tldFJlcXVlc3RUcmFja2VyKHJlcXVlc3QpIHtcclxuICAgICAgdmFyIGV2ZW50LCBfaiwgX2xlbjEsIF9yZWYyLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgIF9yZWYyID0gWydlcnJvcicsICdvcGVuJ107XHJcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICAgIGV2ZW50ID0gX3JlZjJbX2pdO1xyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFNvY2tldFJlcXVlc3RUcmFja2VyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBFbGVtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIEVsZW1lbnRNb25pdG9yKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHNlbGVjdG9yLCBfaiwgX2xlbjEsIF9yZWYyO1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zLnNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIF9yZWYyID0gb3B0aW9ucy5zZWxlY3RvcnM7XHJcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xyXG4gICAgICAgIHNlbGVjdG9yID0gX3JlZjJbX2pdO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXcgRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBFbGVtZW50TW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgRWxlbWVudFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBFbGVtZW50VHJhY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRWxlbWVudFRyYWNrZXIucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9uZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiBfdGhpcy5jaGVjaygpO1xyXG4gICAgICAgIH0pLCBvcHRpb25zLmVsZW1lbnRzLmNoZWNrSW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID0gMTAwO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gRWxlbWVudFRyYWNrZXI7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIERvY3VtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIERvY3VtZW50TW9uaXRvci5wcm90b3R5cGUuc3RhdGVzID0ge1xyXG4gICAgICBsb2FkaW5nOiAwLFxyXG4gICAgICBpbnRlcmFjdGl2ZTogNTAsXHJcbiAgICAgIGNvbXBsZXRlOiAxMDBcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRNb25pdG9yKCkge1xyXG4gICAgICB2YXIgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXHJcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gKF9yZWYyID0gdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pICE9IG51bGwgPyBfcmVmMiA6IDEwMDtcclxuICAgICAgX29ucmVhZHlzdGF0ZWNoYW5nZSA9IGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcclxuICAgICAgZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfb25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIgPyBfb25yZWFkeXN0YXRlY2hhbmdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiB2b2lkIDA7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERvY3VtZW50TW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgRXZlbnRMYWdNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRMYWdNb25pdG9yKCkge1xyXG4gICAgICB2YXIgYXZnLCBpbnRlcnZhbCwgbGFzdCwgcG9pbnRzLCBzYW1wbGVzLFxyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XHJcbiAgICAgIGF2ZyA9IDA7XHJcbiAgICAgIHNhbXBsZXMgPSBbXTtcclxuICAgICAgcG9pbnRzID0gMDtcclxuICAgICAgbGFzdCA9IG5vdygpO1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaWZmO1xyXG4gICAgICAgIGRpZmYgPSBub3coKSAtIGxhc3QgLSA1MDtcclxuICAgICAgICBsYXN0ID0gbm93KCk7XHJcbiAgICAgICAgc2FtcGxlcy5wdXNoKGRpZmYpO1xyXG4gICAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+IG9wdGlvbnMuZXZlbnRMYWcuc2FtcGxlQ291bnQpIHtcclxuICAgICAgICAgIHNhbXBsZXMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXZnID0gYXZnQW1wbGl0dWRlKHNhbXBsZXMpO1xyXG4gICAgICAgIGlmICgrK3BvaW50cyA+PSBvcHRpb25zLmV2ZW50TGFnLm1pblNhbXBsZXMgJiYgYXZnIDwgb3B0aW9ucy5ldmVudExhZy5sYWdUaHJlc2hvbGQpIHtcclxuICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDAgKiAoMyAvIChhdmcgKyAzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEV2ZW50TGFnTW9uaXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgU2NhbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gU2NhbGVyKHNvdXJjZSkge1xyXG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgdGhpcy5sYXN0ID0gdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xyXG4gICAgICB0aGlzLnJhdGUgPSBvcHRpb25zLmluaXRpYWxSYXRlO1xyXG4gICAgICB0aGlzLmNhdGNodXAgPSAwO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5sYXN0UHJvZ3Jlc3MgPSAwO1xyXG4gICAgICBpZiAodGhpcy5zb3VyY2UgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSByZXN1bHQodGhpcy5zb3VyY2UsICdwcm9ncmVzcycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgU2NhbGVyLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oZnJhbWVUaW1lLCB2YWwpIHtcclxuICAgICAgdmFyIHNjYWxpbmc7XHJcbiAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xyXG4gICAgICAgIHZhbCA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbCA+PSAxMDApIHtcclxuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWwgPT09IHRoaXMubGFzdCkge1xyXG4gICAgICAgIHRoaXMuc2luY2VMYXN0VXBkYXRlICs9IGZyYW1lVGltZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5zaW5jZUxhc3RVcGRhdGUpIHtcclxuICAgICAgICAgIHRoaXMucmF0ZSA9ICh2YWwgLSB0aGlzLmxhc3QpIC8gdGhpcy5zaW5jZUxhc3RVcGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2F0Y2h1cCA9ICh2YWwgLSB0aGlzLnByb2dyZXNzKSAvIG9wdGlvbnMuY2F0Y2h1cFRpbWU7XHJcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdCA9IHZhbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsID4gdGhpcy5wcm9ncmVzcykge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gdGhpcy5jYXRjaHVwICogZnJhbWVUaW1lO1xyXG4gICAgICB9XHJcbiAgICAgIHNjYWxpbmcgPSAxIC0gTWF0aC5wb3codGhpcy5wcm9ncmVzcyAvIDEwMCwgb3B0aW9ucy5lYXNlRmFjdG9yKTtcclxuICAgICAgdGhpcy5wcm9ncmVzcyArPSBzY2FsaW5nICogdGhpcy5yYXRlICogZnJhbWVUaW1lO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4odGhpcy5sYXN0UHJvZ3Jlc3MgKyBvcHRpb25zLm1heFByb2dyZXNzUGVyRnJhbWUsIHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9ncmVzcyk7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLmxhc3RQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gU2NhbGVyO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBzb3VyY2VzID0gbnVsbDtcclxuXHJcbiAgc2NhbGVycyA9IG51bGw7XHJcblxyXG4gIGJhciA9IG51bGw7XHJcblxyXG4gIHVuaVNjYWxlciA9IG51bGw7XHJcblxyXG4gIGFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIGNhbmNlbEFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gIFBhY2UucnVubmluZyA9IGZhbHNlO1xyXG5cclxuICBoYW5kbGVQdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChvcHRpb25zLnJlc3RhcnRPblB1c2hTdGF0ZSkge1xyXG4gICAgICByZXR1cm4gUGFjZS5yZXN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAhPSBudWxsKSB7XHJcbiAgICBfcHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xyXG4gICAgICByZXR1cm4gX3B1c2hTdGF0ZS5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlICE9IG51bGwpIHtcclxuICAgIF9yZXBsYWNlU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaGFuZGxlUHVzaFN0YXRlKCk7XHJcbiAgICAgIHJldHVybiBfcmVwbGFjZVN0YXRlLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIFNPVVJDRV9LRVlTID0ge1xyXG4gICAgYWpheDogQWpheE1vbml0b3IsXHJcbiAgICBlbGVtZW50czogRWxlbWVudE1vbml0b3IsXHJcbiAgICBkb2N1bWVudDogRG9jdW1lbnRNb25pdG9yLFxyXG4gICAgZXZlbnRMYWc6IEV2ZW50TGFnTW9uaXRvclxyXG4gIH07XHJcblxyXG4gIChpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdHlwZSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyLCBfcmVmMywgX3JlZjQ7XHJcbiAgICBQYWNlLnNvdXJjZXMgPSBzb3VyY2VzID0gW107XHJcbiAgICBfcmVmMiA9IFsnYWpheCcsICdlbGVtZW50cycsICdkb2N1bWVudCcsICdldmVudExhZyddO1xyXG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XHJcbiAgICAgIHR5cGUgPSBfcmVmMltfal07XHJcbiAgICAgIGlmIChvcHRpb25zW3R5cGVdICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHNvdXJjZXMucHVzaChuZXcgU09VUkNFX0tFWVNbdHlwZV0ob3B0aW9uc1t0eXBlXSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVmNCA9IChfcmVmMyA9IG9wdGlvbnMuZXh0cmFTb3VyY2VzKSAhPSBudWxsID8gX3JlZjMgOiBbXTtcclxuICAgIGZvciAoX2sgPSAwLCBfbGVuMiA9IF9yZWY0Lmxlbmd0aDsgX2sgPCBfbGVuMjsgX2srKykge1xyXG4gICAgICBzb3VyY2UgPSBfcmVmNFtfa107XHJcbiAgICAgIHNvdXJjZXMucHVzaChuZXcgc291cmNlKG9wdGlvbnMpKTtcclxuICAgIH1cclxuICAgIFBhY2UuYmFyID0gYmFyID0gbmV3IEJhcjtcclxuICAgIHNjYWxlcnMgPSBbXTtcclxuICAgIHJldHVybiB1bmlTY2FsZXIgPSBuZXcgU2NhbGVyO1xyXG4gIH0pKCk7XHJcblxyXG4gIFBhY2Uuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgUGFjZS50cmlnZ2VyKCdzdG9wJyk7XHJcbiAgICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIGJhci5kZXN0cm95KCk7XHJcbiAgICBjYW5jZWxBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgaWYgKGFuaW1hdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgYW5pbWF0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBpbml0KCk7XHJcbiAgfTtcclxuXHJcbiAgUGFjZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBQYWNlLnRyaWdnZXIoJ3Jlc3RhcnQnKTtcclxuICAgIFBhY2Uuc3RvcCgpO1xyXG4gICAgcmV0dXJuIFBhY2Uuc3RhcnQoKTtcclxuICB9O1xyXG5cclxuICBQYWNlLmdvID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3RhcnQ7XHJcbiAgICBQYWNlLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgYmFyLnJlbmRlcigpO1xyXG4gICAgc3RhcnQgPSBub3coKTtcclxuICAgIGNhbmNlbEFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGFuaW1hdGlvbiA9IHJ1bkFuaW1hdGlvbihmdW5jdGlvbihmcmFtZVRpbWUsIGVucXVldWVOZXh0RnJhbWUpIHtcclxuICAgICAgdmFyIGF2ZywgY291bnQsIGRvbmUsIGVsZW1lbnQsIGVsZW1lbnRzLCBpLCBqLCByZW1haW5pbmcsIHNjYWxlciwgc2NhbGVyTGlzdCwgc3VtLCBfaiwgX2ssIF9sZW4xLCBfbGVuMiwgX3JlZjI7XHJcbiAgICAgIHJlbWFpbmluZyA9IDEwMCAtIGJhci5wcm9ncmVzcztcclxuICAgICAgY291bnQgPSBzdW0gPSAwO1xyXG4gICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgZm9yIChpID0gX2ogPSAwLCBfbGVuMSA9IHNvdXJjZXMubGVuZ3RoOyBfaiA8IF9sZW4xOyBpID0gKytfaikge1xyXG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XHJcbiAgICAgICAgc2NhbGVyTGlzdCA9IHNjYWxlcnNbaV0gIT0gbnVsbCA/IHNjYWxlcnNbaV0gOiBzY2FsZXJzW2ldID0gW107XHJcbiAgICAgICAgZWxlbWVudHMgPSAoX3JlZjIgPSBzb3VyY2UuZWxlbWVudHMpICE9IG51bGwgPyBfcmVmMiA6IFtzb3VyY2VdO1xyXG4gICAgICAgIGZvciAoaiA9IF9rID0gMCwgX2xlbjIgPSBlbGVtZW50cy5sZW5ndGg7IF9rIDwgX2xlbjI7IGogPSArK19rKSB7XHJcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudHNbal07XHJcbiAgICAgICAgICBzY2FsZXIgPSBzY2FsZXJMaXN0W2pdICE9IG51bGwgPyBzY2FsZXJMaXN0W2pdIDogc2NhbGVyTGlzdFtqXSA9IG5ldyBTY2FsZXIoZWxlbWVudCk7XHJcbiAgICAgICAgICBkb25lICY9IHNjYWxlci5kb25lO1xyXG4gICAgICAgICAgaWYgKHNjYWxlci5kb25lKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgIHN1bSArPSBzY2FsZXIudGljayhmcmFtZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhdmcgPSBzdW0gLyBjb3VudDtcclxuICAgICAgYmFyLnVwZGF0ZSh1bmlTY2FsZXIudGljayhmcmFtZVRpbWUsIGF2ZykpO1xyXG4gICAgICBpZiAoYmFyLmRvbmUoKSB8fCBkb25lIHx8IGNhbmNlbEFuaW1hdGlvbikge1xyXG4gICAgICAgIGJhci51cGRhdGUoMTAwKTtcclxuICAgICAgICBQYWNlLnRyaWdnZXIoJ2RvbmUnKTtcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGJhci5maW5pc2goKTtcclxuICAgICAgICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIFBhY2UudHJpZ2dlcignaGlkZScpO1xyXG4gICAgICAgIH0sIE1hdGgubWF4KG9wdGlvbnMuZ2hvc3RUaW1lLCBNYXRoLm1heChvcHRpb25zLm1pblRpbWUgLSAobm93KCkgLSBzdGFydCksIDApKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGVucXVldWVOZXh0RnJhbWUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgUGFjZS5zdGFydCA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XHJcbiAgICBleHRlbmQob3B0aW9ucywgX29wdGlvbnMpO1xyXG4gICAgUGFjZS5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGJhci5yZW5kZXIoKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFjZScpKSB7XHJcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KFBhY2Uuc3RhcnQsIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFBhY2UudHJpZ2dlcignc3RhcnQnKTtcclxuICAgICAgcmV0dXJuIFBhY2UuZ28oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoWydwYWNlJ10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gUGFjZTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFBhY2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChvcHRpb25zLnN0YXJ0T25QYWdlTG9hZCkge1xyXG4gICAgICBQYWNlLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkuY2FsbCh0aGlzKTtcclxuIiwiLyohXG4gKiBwZXJmZWN0LXNjcm9sbGJhciB2MS40LjBcbiAqIChjKSAyMDE4IEh5dW5qZSBKdW5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBnZXQoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0KGVsZW1lbnQsIG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsID0gdmFsICsgXCJweFwiO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRpdihjbGFzc05hbWUpIHtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gZGl2O1xufVxuXG52YXIgZWxNYXRjaGVzID1cbiAgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gIChFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IpO1xuXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHF1ZXJ5KSB7XG4gIGlmICghZWxNYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG1hdGNoaW5nIG1ldGhvZCBzdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBlbE1hdGNoZXMuY2FsbChlbGVtZW50LCBxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnJlbW92ZSkge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBtYXRjaGVzKGNoaWxkLCBzZWxlY3Rvcik7IH1cbiAgKTtcbn1cblxudmFyIGNscyA9IHtcbiAgbWFpbjogJ3BzJyxcbiAgZWxlbWVudDoge1xuICAgIHRodW1iOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3RodW1iLVwiICsgeCk7IH0sXG4gICAgcmFpbDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzX19yYWlsLVwiICsgeCk7IH0sXG4gICAgY29uc3VtaW5nOiAncHNfX2NoaWxkLS1jb25zdW1lJyxcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICBmb2N1czogJ3BzLS1mb2N1cycsXG4gICAgY2xpY2tpbmc6ICdwcy0tY2xpY2tpbmcnLFxuICAgIGFjdGl2ZTogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1hY3RpdmUtXCIgKyB4KTsgfSxcbiAgICBzY3JvbGxpbmc6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwcy0tc2Nyb2xsaW5nLVwiICsgeCk7IH0sXG4gIH0sXG59O1xuXG4vKlxuICogSGVscGVyIG1ldGhvZHNcbiAqL1xudmFyIHNjcm9sbGluZ0NsYXNzVGltZW91dCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG5mdW5jdGlvbiBhZGRTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHZhciBjbGFzc0xpc3QgPSBpLmVsZW1lbnQuY2xhc3NMaXN0O1xuICB2YXIgY2xhc3NOYW1lID0gY2xzLnN0YXRlLnNjcm9sbGluZyh4KTtcblxuICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBjbGVhclRpbWVvdXQoc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0W3hdKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeCkge1xuICBzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0gPSBzZXRUaW1lb3V0KFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGkuaXNBbGl2ZSAmJiBpLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpKTsgfSxcbiAgICBpLnNldHRpbmdzLnNjcm9sbGluZ1RocmVzaG9sZFxuICApO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxpbmdDbGFzc0luc3RhbnRseShpLCB4KSB7XG4gIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpO1xuICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KTtcbn1cblxudmFyIEV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIEV2ZW50RWxlbWVudChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMuaGFuZGxlcnMgPSB7fTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzRW1wdHk6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG4gIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kIChldmVudE5hbWUsIHRhcmdldCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9IHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiAodGFyZ2V0ICYmIGhhbmRsZXIgIT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMkMS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gdW5iaW5kQWxsICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBmb3IgKHZhciBuYW1lIGluIHRoaXMkMS5oYW5kbGVycykge1xuICAgIHRoaXMkMS51bmJpbmQobmFtZSk7XG4gIH1cbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5pc0VtcHR5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuZXZlcnkoXG4gICAgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcyQxLmhhbmRsZXJzW2tleV0ubGVuZ3RoID09PSAwOyB9XG4gICk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRXZlbnRFbGVtZW50LnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiBFdmVudE1hbmFnZXIoKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5ldmVudEVsZW1lbnQgPSBmdW5jdGlvbiBldmVudEVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZWUpIHsgcmV0dXJuIGVlLmVsZW1lbnQgPT09IGVsZW1lbnQ7IH0pWzBdO1xuICBpZiAoIWVlKSB7XG4gICAgZWUgPSBuZXcgRXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5wdXNoKGVlKTtcbiAgfVxuICByZXR1cm4gZWU7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCkuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgZWUudW5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cbiAgaWYgKGVlLmlzRW1wdHkpIHtcbiAgICAvLyByZW1vdmVcbiAgICB0aGlzLmV2ZW50RWxlbWVudHMuc3BsaWNlKHRoaXMuZXZlbnRFbGVtZW50cy5pbmRleE9mKGVlKSwgMSk7XG4gIH1cbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gdW5iaW5kQWxsICgpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUudW5iaW5kQWxsKCk7IH0pO1xuICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIG9uY2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGVlLnVuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbiAgICBoYW5kbGVyKGV2dCk7XG4gIH07XG4gIGVlLmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudChuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChuYW1lLCBmYWxzZSwgZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfVxufVxuXG52YXIgcHJvY2Vzc1Njcm9sbERpZmYgPSBmdW5jdGlvbihcbiAgaSxcbiAgYXhpcyxcbiAgZGlmZixcbiAgdXNlU2Nyb2xsaW5nQ2xhc3MsXG4gIGZvcmNlRmlyZVJlYWNoRXZlbnRcbikge1xuICBpZiAoIHVzZVNjcm9sbGluZ0NsYXNzID09PSB2b2lkIDAgKSB1c2VTY3JvbGxpbmdDbGFzcyA9IHRydWU7XG4gIGlmICggZm9yY2VGaXJlUmVhY2hFdmVudCA9PT0gdm9pZCAwICkgZm9yY2VGaXJlUmVhY2hFdmVudCA9IGZhbHNlO1xuXG4gIHZhciBmaWVsZHM7XG4gIGlmIChheGlzID09PSAndG9wJykge1xuICAgIGZpZWxkcyA9IFtcbiAgICAgICdjb250ZW50SGVpZ2h0JyxcbiAgICAgICdjb250YWluZXJIZWlnaHQnLFxuICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAneScsXG4gICAgICAndXAnLFxuICAgICAgJ2Rvd24nIF07XG4gIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ2xlZnQnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRXaWR0aCcsXG4gICAgICAnY29udGFpbmVyV2lkdGgnLFxuICAgICAgJ3Njcm9sbExlZnQnLFxuICAgICAgJ3gnLFxuICAgICAgJ2xlZnQnLFxuICAgICAgJ3JpZ2h0JyBdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBwcm9wZXIgYXhpcyBzaG91bGQgYmUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIHByb2Nlc3NTY3JvbGxEaWZmJDEoaSwgZGlmZiwgZmllbGRzLCB1c2VTY3JvbGxpbmdDbGFzcywgZm9yY2VGaXJlUmVhY2hFdmVudCk7XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzU2Nyb2xsRGlmZiQxKFxuICBpLFxuICBkaWZmLFxuICByZWYsXG4gIHVzZVNjcm9sbGluZ0NsYXNzLFxuICBmb3JjZUZpcmVSZWFjaEV2ZW50XG4pIHtcbiAgdmFyIGNvbnRlbnRIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMV07XG4gIHZhciBzY3JvbGxUb3AgPSByZWZbMl07XG4gIHZhciB5ID0gcmVmWzNdO1xuICB2YXIgdXAgPSByZWZbNF07XG4gIHZhciBkb3duID0gcmVmWzVdO1xuICBpZiAoIHVzZVNjcm9sbGluZ0NsYXNzID09PSB2b2lkIDAgKSB1c2VTY3JvbGxpbmdDbGFzcyA9IHRydWU7XG4gIGlmICggZm9yY2VGaXJlUmVhY2hFdmVudCA9PT0gdm9pZCAwICkgZm9yY2VGaXJlUmVhY2hFdmVudCA9IGZhbHNlO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIC8vIHJlc2V0IHJlYWNoXG4gIGkucmVhY2hbeV0gPSBudWxsO1xuXG4gIC8vIDEgZm9yIHN1YnBpeGVsIHJvdW5kaW5nXG4gIGlmIChlbGVtZW50W3Njcm9sbFRvcF0gPCAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdzdGFydCc7XG4gIH1cblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdID4gaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSAtIDEpIHtcbiAgICBpLnJlYWNoW3ldID0gJ2VuZCc7XG4gIH1cblxuICBpZiAoZGlmZikge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyB5KSkpO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgdXApKSk7XG4gICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIGRvd24pKSk7XG4gICAgfVxuXG4gICAgaWYgKHVzZVNjcm9sbGluZ0NsYXNzKSB7XG4gICAgICBzZXRTY3JvbGxpbmdDbGFzc0luc3RhbnRseShpLCB5KTtcbiAgICB9XG4gIH1cblxuICBpZiAoaS5yZWFjaFt5XSAmJiAoZGlmZiB8fCBmb3JjZUZpcmVSZWFjaEV2ZW50KSkge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1cIiArIHkgKyBcIi1yZWFjaC1cIiArIChpLnJlYWNoW3ldKSkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0ludCh4KSB7XG4gIHJldHVybiBwYXJzZUludCh4LCAxMCkgfHwgMDtcbn1cblxuZnVuY3Rpb24gaXNFZGl0YWJsZShlbCkge1xuICByZXR1cm4gKFxuICAgIG1hdGNoZXMoZWwsICdpbnB1dCxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ3NlbGVjdCxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ3RleHRhcmVhLFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAnYnV0dG9uLFtjb250ZW50ZWRpdGFibGVdJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gb3V0ZXJXaWR0aChlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSBnZXQoZWxlbWVudCk7XG4gIHJldHVybiAoXG4gICAgdG9JbnQoc3R5bGVzLndpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLnBhZGRpbmdMZWZ0KSArXG4gICAgdG9JbnQoc3R5bGVzLnBhZGRpbmdSaWdodCkgK1xuICAgIHRvSW50KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyUmlnaHRXaWR0aClcbiAgKTtcbn1cblxudmFyIGVudiA9IHtcbiAgaXNXZWJLaXQ6XG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gIHN1cHBvcnRzVG91Y2g6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8XG4gICAgICAod2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCkpLFxuICBzdXBwb3J0c0llUG9pbnRlcjpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyxcbiAgaXNDaHJvbWU6XG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvQ2hyb21lL2kudGVzdChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCksXG59O1xuXG52YXIgdXBkYXRlR2VvbWV0cnkgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gIGkuY29udGFpbmVyV2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICBpLmNvbnRhaW5lckhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICBpLmNvbnRlbnRXaWR0aCA9IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIGkuY29udGVudEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhclhSYWlsKSkge1xuICAgIC8vIGNsZWFuIHVwIGFuZCBhcHBlbmRcbiAgICBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIGNscy5lbGVtZW50LnJhaWwoJ3gnKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHJlbW92ZShlbCk7IH1cbiAgICApO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaS5zY3JvbGxiYXJYUmFpbCk7XG4gIH1cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWVJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneScpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhcllSYWlsKTtcbiAgfVxuXG4gIGlmIChcbiAgICAhaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiZcbiAgICBpLmNvbnRhaW5lcldpZHRoICsgaS5zZXR0aW5ncy5zY3JvbGxYTWFyZ2luT2Zmc2V0IDwgaS5jb250ZW50V2lkdGhcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxYV2lkdGggPSBpLmNvbnRhaW5lcldpZHRoIC0gaS5yYWlsWE1hcmdpbldpZHRoO1xuICAgIGkucmFpbFhSYXRpbyA9IGkuY29udGFpbmVyV2lkdGggLyBpLnJhaWxYV2lkdGg7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoaS5yYWlsWFdpZHRoICogaS5jb250YWluZXJXaWR0aCAvIGkuY29udGVudFdpZHRoKVxuICAgICk7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IHRvSW50KFxuICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAqXG4gICAgICAgIChpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkgL1xuICAgICAgICAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmXG4gICAgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHRcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xuICAgIGkucmFpbFlSYXRpbyA9IGkuY29udGFpbmVySGVpZ2h0IC8gaS5yYWlsWUhlaWdodDtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoaS5yYWlsWUhlaWdodCAqIGkuY29udGFpbmVySGVpZ2h0IC8gaS5jb250ZW50SGVpZ2h0KVxuICAgICk7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gdG9JbnQoXG4gICAgICByb3VuZGVkU2Nyb2xsVG9wICpcbiAgICAgICAgKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIC9cbiAgICAgICAgKGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaS5zY3JvbGxiYXJYTGVmdCA+PSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkge1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aDtcbiAgfVxuICBpZiAoaS5zY3JvbGxiYXJZVG9wID49IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIHtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0O1xuICB9XG5cbiAgdXBkYXRlQ3NzKGVsZW1lbnQsIGkpO1xuXG4gIGlmIChpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmFjdGl2ZSgneCcpKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmFjdGl2ZSgneCcpKTtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IDA7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMDtcbiAgfVxuICBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3knKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3knKSk7XG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gMDtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xuICBpZiAoaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1heCh0aHVtYlNpemUsIGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICBpZiAoaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1pbih0aHVtYlNpemUsIGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gdGh1bWJTaXplO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWxlbWVudCwgaSkge1xuICB2YXIgeFJhaWxPZmZzZXQgPSB7IHdpZHRoOiBpLnJhaWxYV2lkdGggfTtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpZiAoaS5pc1J0bCkge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgIGkuY29udGFpbmVyV2lkdGggLVxuICAgICAgaS5jb250ZW50V2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuICBpZiAoaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSkge1xuICAgIHhSYWlsT2Zmc2V0LmJvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSAtIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgcm91bmRlZFNjcm9sbFRvcDtcbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xuXG4gIHZhciB5UmFpbE9mZnNldCA9IHsgdG9wOiByb3VuZGVkU2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHQgfTtcbiAgaWYgKGkuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCkge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9XG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWVJpZ2h0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeVJhaWxPZmZzZXQucmlnaHQgPSBpLnNjcm9sbGJhcllSaWdodCAtIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArXG4gICAgICAgIGkuY29udGFpbmVyV2lkdGggKiAyIC1cbiAgICAgICAgaS5jb250ZW50V2lkdGggLVxuICAgICAgICBpLnNjcm9sbGJhcllMZWZ0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9IGkuc2Nyb2xsYmFyWUxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG4gIHNldChpLnNjcm9sbGJhcllSYWlsLCB5UmFpbE9mZnNldCk7XG5cbiAgc2V0KGkuc2Nyb2xsYmFyWCwge1xuICAgIGxlZnQ6IGkuc2Nyb2xsYmFyWExlZnQsXG4gICAgd2lkdGg6IGkuc2Nyb2xsYmFyWFdpZHRoIC0gaS5yYWlsQm9yZGVyWFdpZHRoLFxuICB9KTtcbiAgc2V0KGkuc2Nyb2xsYmFyWSwge1xuICAgIHRvcDogaS5zY3JvbGxiYXJZVG9wLFxuICAgIGhlaWdodDogaS5zY3JvbGxiYXJZSGVpZ2h0IC0gaS5yYWlsQm9yZGVyWVdpZHRoLFxuICB9KTtcbn1cblxudmFyIGNsaWNrUmFpbCA9IGZ1bmN0aW9uKGkpIHtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWVJhaWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb3NpdGlvblRvcCA9XG4gICAgICBlLnBhZ2VZIC1cbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCAtXG4gICAgICBpLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25Ub3AgPiBpLnNjcm9sbGJhcllUb3AgPyAxIDogLTE7XG5cbiAgICBpLmVsZW1lbnQuc2Nyb2xsVG9wICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVySGVpZ2h0O1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWFJhaWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb3NpdGlvbkxlZnQgPVxuICAgICAgZS5wYWdlWCAtXG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJYUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvbkxlZnQgPiBpLnNjcm9sbGJhclhMZWZ0ID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbExlZnQgKz0gZGlyZWN0aW9uICogaS5jb250YWluZXJXaWR0aDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufTtcblxudmFyIGRyYWdUaHVtYiA9IGZ1bmN0aW9uKGkpIHtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAnY29udGVudFdpZHRoJyxcbiAgICAncGFnZVgnLFxuICAgICdyYWlsWFdpZHRoJyxcbiAgICAnc2Nyb2xsYmFyWCcsXG4gICAgJ3Njcm9sbGJhclhXaWR0aCcsXG4gICAgJ3Njcm9sbExlZnQnLFxuICAgICd4JyxcbiAgICAnc2Nyb2xsYmFyWFJhaWwnIF0pO1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAnY29udGVudEhlaWdodCcsXG4gICAgJ3BhZ2VZJyxcbiAgICAncmFpbFlIZWlnaHQnLFxuICAgICdzY3JvbGxiYXJZJyxcbiAgICAnc2Nyb2xsYmFyWUhlaWdodCcsXG4gICAgJ3Njcm9sbFRvcCcsXG4gICAgJ3knLFxuICAgICdzY3JvbGxiYXJZUmFpbCcgXSk7XG59O1xuXG5mdW5jdGlvbiBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKFxuICBpLFxuICByZWZcbikge1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGVudEhlaWdodCA9IHJlZlsxXTtcbiAgdmFyIHBhZ2VZID0gcmVmWzJdO1xuICB2YXIgcmFpbFlIZWlnaHQgPSByZWZbM107XG4gIHZhciBzY3JvbGxiYXJZID0gcmVmWzRdO1xuICB2YXIgc2Nyb2xsYmFyWUhlaWdodCA9IHJlZls1XTtcbiAgdmFyIHNjcm9sbFRvcCA9IHJlZls2XTtcbiAgdmFyIHkgPSByZWZbN107XG4gIHZhciBzY3JvbGxiYXJZUmFpbCA9IHJlZls4XTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICB2YXIgc3RhcnRpbmdTY3JvbGxUb3AgPSBudWxsO1xuICB2YXIgc3RhcnRpbmdNb3VzZVBhZ2VZID0gbnVsbDtcbiAgdmFyIHNjcm9sbEJ5ID0gbnVsbDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICBlbGVtZW50W3Njcm9sbFRvcF0gPVxuICAgICAgc3RhcnRpbmdTY3JvbGxUb3AgKyBzY3JvbGxCeSAqIChlW3BhZ2VZXSAtIHN0YXJ0aW5nTW91c2VQYWdlWSk7XG4gICAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeSk7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIGlbc2Nyb2xsYmFyWVJhaWxdLmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmNsaWNraW5nKTtcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpW3Njcm9sbGJhclldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzdGFydGluZ1Njcm9sbFRvcCA9IGVsZW1lbnRbc2Nyb2xsVG9wXTtcbiAgICBzdGFydGluZ01vdXNlUGFnZVkgPSBlW3BhZ2VZXTtcbiAgICBzY3JvbGxCeSA9XG4gICAgICAoaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSkgL1xuICAgICAgKGlbcmFpbFlIZWlnaHRdIC0gaVtzY3JvbGxiYXJZSGVpZ2h0XSk7XG5cbiAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgaS5ldmVudC5vbmNlKGkub3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5jbGlja2luZyk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cbnZhciBrZXlib2FyZCA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1lbnRIb3ZlcmVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCAnOmhvdmVyJyk7IH07XG4gIHZhciBzY3JvbGxiYXJGb2N1c2VkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpLnNjcm9sbGJhclgsICc6Zm9jdXMnKSB8fCBtYXRjaGVzKGkuc2Nyb2xsYmFyWSwgJzpmb2N1cycpOyB9O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIGlmIChkZWx0YVggPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fFxuICAgICAgICAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgKGUuaXNEZWZhdWx0UHJldmVudGVkICYmIGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHx8XG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnRIb3ZlcmVkKCkgJiYgIXNjcm9sbGJhckZvY3VzZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA6IGkub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvIGRlZXBlciBpZiBlbGVtZW50IGlzIGEgd2ViY29tcG9uZW50XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0VkaXRhYmxlKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGFYID0gMDtcbiAgICB2YXIgZGVsdGFZID0gMDtcblxuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMjogLy8gc3BhY2UgYmFyXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzY6IC8vIGhvbWVcbiAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzU6IC8vIGVuZFxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgZGVsdGFYICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHdoZWVsID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIGlzVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgPT09IDA7XG4gICAgdmFyIGlzQm90dG9tID1cbiAgICAgIHJvdW5kZWRTY3JvbGxUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCA9PT0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIGlzTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICB2YXIgaXNSaWdodCA9XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoID09PSBlbGVtZW50LnNjcm9sbFdpZHRoO1xuXG4gICAgdmFyIGhpdHNCb3VuZDtcblxuICAgIC8vIHBpY2sgYXhpcyB3aXRoIHByaW1hcnkgZGlyZWN0aW9uXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWSkgPiBNYXRoLmFicyhkZWx0YVgpKSB7XG4gICAgICBoaXRzQm91bmQgPSBpc1RvcCB8fCBpc0JvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGl0c0JvdW5kID0gaXNMZWZ0IHx8IGlzUmlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpdHNCb3VuZCA/ICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsdGFGcm9tRXZlbnQoZSkge1xuICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICB2YXIgZGVsdGFZID0gLTEgKiBlLmRlbHRhWTtcblxuICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGVsdGFZID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gT1MgWCBTYWZhcmlcbiAgICAgIGRlbHRhWCA9IC0xICogZS53aGVlbERlbHRhWCAvIDY7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gNjtcbiAgICB9XG5cbiAgICBpZiAoZS5kZWx0YU1vZGUgJiYgZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgIC8vIEZpcmVmb3ggaW4gZGVsdGFNb2RlIDE6IExpbmUgc2Nyb2xsaW5nXG4gICAgICBkZWx0YVggKj0gMTA7XG4gICAgICBkZWx0YVkgKj0gMTA7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gZGVsdGFYICYmIGRlbHRhWSAhPT0gZGVsdGFZIC8qIE5hTiBjaGVja3MgKi8pIHtcbiAgICAgIC8vIElFIGluIHNvbWUgbW91c2UgZHJpdmVyc1xuICAgICAgZGVsdGFYID0gMDtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgLy8gcmV2ZXJzZSBheGlzIHdpdGggc2hpZnQga2V5XG4gICAgICByZXR1cm4gWy1kZWx0YVksIC1kZWx0YVhdO1xuICAgIH1cbiAgICByZXR1cm4gW2RlbHRhWCwgZGVsdGFZXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAvLyBGSVhNRTogdGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIDxzZWxlY3Q+IGlzc3VlIGluIEZGIGFuZCBJRSAjNTcxXG4gICAgaWYgKCFlbnYuaXNXZWJLaXQgJiYgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3Q6Zm9jdXMnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gdGFyZ2V0O1xuXG4gICAgd2hpbGUgKGN1cnNvciAmJiBjdXJzb3IgIT09IGVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5lbGVtZW50LmNvbnN1bWluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IGdldChjdXJzb3IpO1xuICAgICAgdmFyIG92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV0uam9pbihcbiAgICAgICAgJydcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIHNjcm9sbGFibGVcbiAgICAgIGlmIChvdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsV2lkdGggLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZXdoZWVsSGFuZGxlcihlKSB7XG4gICAgdmFyIHJlZiA9IGdldERlbHRhRnJvbUV2ZW50KGUpO1xuICAgIHZhciBkZWx0YVggPSByZWZbMF07XG4gICAgdmFyIGRlbHRhWSA9IHJlZlsxXTtcblxuICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChlLnRhcmdldCwgZGVsdGFYLCBkZWx0YVkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcbiAgICBpZiAoIWkuc2V0dGluZ3MudXNlQm90aFdoZWVsQXhlcykge1xuICAgICAgLy8gZGVsdGFYIHdpbGwgb25seSBiZSB1c2VkIGZvciBob3Jpem9udGFsIHNjcm9sbGluZyBhbmQgZGVsdGFZIHdpbGxcbiAgICAgIC8vIG9ubHkgYmUgdXNlZCBmb3IgdmVydGljYWwgc2Nyb2xsaW5nIC0gdGhpcyBpcyB0aGUgZGVmYXVsdFxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAvLyBvbmx5IHZlcnRpY2FsIHNjcm9sbGJhciBpcyBhY3RpdmUgYW5kIHVzZUJvdGhXaGVlbEF4ZXMgb3B0aW9uIGlzXG4gICAgICAvLyBhY3RpdmUsIHNvIGxldCdzIHNjcm9sbCB2ZXJ0aWNhbCBiYXIgdXNpbmcgYm90aCBtb3VzZSB3aGVlbCBheGVzXG4gICAgICBpZiAoZGVsdGFZKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlICYmICFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgIC8vIHVzZUJvdGhXaGVlbEF4ZXMgYW5kIG9ubHkgaG9yaXpvbnRhbCBiYXIgaXMgYWN0aXZlLCBzbyB1c2UgYm90aFxuICAgICAgLy8gd2hlZWwgYXhlcyBmb3IgaG9yaXpvbnRhbCBiYXJcbiAgICAgIGlmIChkZWx0YVgpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9XG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIHNob3VsZFByZXZlbnQgPSBzaG91bGRQcmV2ZW50IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKTtcbiAgICBpZiAoc2hvdWxkUHJldmVudCAmJiAhZS5jdHJsS2V5KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93Lm9ud2hlZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Lm9ubW91c2V3aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNld2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XG4gIH1cbn07XG5cbnZhciB0b3VjaCA9IGZ1bmN0aW9uKGkpIHtcbiAgaWYgKCFlbnYuc3VwcG9ydHNUb3VjaCAmJiAhZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgbWFnbml0dWRlWCA9IE1hdGguYWJzKGRlbHRhWCk7XG4gICAgdmFyIG1hZ25pdHVkZVkgPSBNYXRoLmFicyhkZWx0YVkpO1xuXG4gICAgaWYgKG1hZ25pdHVkZVkgPiBtYWduaXR1ZGVYKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIHVwL2Rvd24gdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFZIDwgMCAmJiBzY3JvbGxUb3AgPT09IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSB8fFxuICAgICAgICAoZGVsdGFZID4gMCAmJiBzY3JvbGxUb3AgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgLy8gc2V0IHByZXZlbnQgZm9yIG1vYmlsZSBDaHJvbWUgcmVmcmVzaFxuICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgPT09IDAgJiYgZGVsdGFZID4gMCAmJiBlbnYuaXNDaHJvbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYWduaXR1ZGVYID4gbWFnbml0dWRlWSkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSBsZWZ0L3JpZ2h0IGFjcm9zcyB0aGUgcGFnZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChkZWx0YVggPCAwICYmIHNjcm9sbExlZnQgPT09IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkgfHxcbiAgICAgICAgKGRlbHRhWCA+IDAgJiYgc2Nyb2xsTGVmdCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRpZmZlcmVuY2VZO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBkaWZmZXJlbmNlWDtcblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuICB9XG5cbiAgdmFyIHN0YXJ0T2Zmc2V0ID0ge307XG4gIHZhciBzdGFydFRpbWUgPSAwO1xuICB2YXIgc3BlZWQgPSB7fTtcbiAgdmFyIGVhc2luZ0xvb3AgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGdldFRvdWNoKGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXliZSBJRSBwb2ludGVyXG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRIYW5kbGUoZSkge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlICYmIGUucG9pbnRlclR5cGUgPT09ICdwZW4nICYmIGUuYnV0dG9ucyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBlLnBvaW50ZXJUeXBlICYmXG4gICAgICBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnICYmXG4gICAgICBlLnBvaW50ZXJUeXBlICE9PSBlLk1TUE9JTlRFUl9UWVBFX01PVVNFXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hTdGFydChlKSB7XG4gICAgaWYgKCFzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcblxuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VYID0gdG91Y2gucGFnZVg7XG4gICAgc3RhcnRPZmZzZXQucGFnZVkgPSB0b3VjaC5wYWdlWTtcblxuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKGVhc2luZ0xvb3AgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQodGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcbiAgICAgIHZhciBvdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldLmpvaW4oXG4gICAgICAgICcnXG4gICAgICApO1xuXG4gICAgICAvLyBpZiBzY3JvbGxhYmxlXG4gICAgICBpZiAob3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gY3Vyc29yLnNjcm9sbEhlaWdodCAtIGN1cnNvci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmIChtYXhTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhTY3JvbGxMZWZ0ID0gY3Vyc29yLnNjcm9sbExlZnQgLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xuICAgIGlmIChzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHsgcGFnZVg6IHRvdWNoLnBhZ2VYLCBwYWdlWTogdG91Y2gucGFnZVkgfTtcblxuICAgICAgdmFyIGRpZmZlcmVuY2VYID0gY3VycmVudE9mZnNldC5wYWdlWCAtIHN0YXJ0T2Zmc2V0LnBhZ2VYO1xuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xuXG4gICAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpO1xuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIHRpbWVHYXAgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xuICAgICAgICBzcGVlZC55ID0gZGlmZmVyZW5jZVkgLyB0aW1lR2FwO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFByZXZlbnQoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvdWNoRW5kKCkge1xuICAgIGlmIChpLnNldHRpbmdzLnN3aXBlRWFzaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgZWFzaW5nTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaS5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNwZWVkLnggJiYgIXNwZWVkLnkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhcHBseVRvdWNoTW92ZShzcGVlZC54ICogMzAsIHNwZWVkLnkgKiAzMCk7XG5cbiAgICAgICAgc3BlZWQueCAqPSAwLjg7XG4gICAgICAgIHNwZWVkLnkgKj0gMC44O1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbnYuc3VwcG9ydHNUb3VjaCkge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuICB9IGVsc2UgaWYgKGVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJtb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlclVwJywgdG91Y2hFbmQpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRlZmF1bHRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gIGhhbmRsZXJzOiBbJ2NsaWNrLXJhaWwnLCAnZHJhZy10aHVtYicsICdrZXlib2FyZCcsICd3aGVlbCcsICd0b3VjaCddLFxuICBtYXhTY3JvbGxiYXJMZW5ndGg6IG51bGwsXG4gIG1pblNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgc2Nyb2xsaW5nVGhyZXNob2xkOiAxMDAwLFxuICBzY3JvbGxYTWFyZ2luT2Zmc2V0OiAwLFxuICBzY3JvbGxZTWFyZ2luT2Zmc2V0OiAwLFxuICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxuICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxuICBzd2lwZUVhc2luZzogdHJ1ZSxcbiAgdXNlQm90aFdoZWVsQXhlczogZmFsc2UsXG4gIHdoZWVsUHJvcGFnYXRpb246IHRydWUsXG4gIHdoZWVsU3BlZWQ6IDEsXG59KTsgfTtcblxudmFyIGhhbmRsZXJzID0ge1xuICAnY2xpY2stcmFpbCc6IGNsaWNrUmFpbCxcbiAgJ2RyYWctdGh1bWInOiBkcmFnVGh1bWIsXG4gIGtleWJvYXJkOiBrZXlib2FyZCxcbiAgd2hlZWw6IHdoZWVsLFxuICB0b3VjaDogdG91Y2gsXG59O1xuXG52YXIgUGVyZmVjdFNjcm9sbGJhciA9IGZ1bmN0aW9uIFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwgdXNlclNldHRpbmdzKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIHVzZXJTZXR0aW5ncyA9PT0gdm9pZCAwICkgdXNlclNldHRpbmdzID0ge307XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IGlzIHNwZWNpZmllZCB0byBpbml0aWFsaXplIFBlcmZlY3RTY3JvbGxiYXInKTtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5tYWluKTtcblxuICB0aGlzLnNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzKCk7XG4gIGZvciAodmFyIGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzJDEuc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRlbnRIZWlnaHQgPSBudWxsO1xuXG4gIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuZm9jdXMpOyB9O1xuICB2YXIgYmx1ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuZm9jdXMpOyB9O1xuXG4gIHRoaXMuaXNSdGwgPSBnZXQoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcbiAgdGhpcy5pc05lZ2F0aXZlU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0xO1xuICAgIHJlc3VsdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA8IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pKCk7XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcbiAgdGhpcy5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneCcpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd4JykpO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHRoaXMuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYV2lkdGggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhMZWZ0ID0gbnVsbDtcbiAgdmFyIHJhaWxYU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSA9IHBhcnNlSW50KHJhaWxYU3R5bGUuYm90dG9tLCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhclhCb3R0b20pKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWFRvcCA9IHRvSW50KHJhaWxYU3R5bGUudG9wKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnJhaWxCb3JkZXJYV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLm1hcmdpbkxlZnQpICsgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5SaWdodCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxYV2lkdGggPSBudWxsO1xuICB0aGlzLnJhaWxYUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneScpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd5JykpO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHRoaXMuc2Nyb2xsYmFyWS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJZQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZVG9wID0gbnVsbDtcbiAgdmFyIHJhaWxZU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJpZ2h0ID0gcGFyc2VJbnQocmFpbFlTdHlsZS5yaWdodCwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJZUmlnaHQpKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJZTGVmdCA9IHRvSW50KHJhaWxZU3R5bGUubGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnNjcm9sbGJhcllPdXRlcldpZHRoID0gdGhpcy5pc1J0bCA/IG91dGVyV2lkdGgodGhpcy5zY3JvbGxiYXJZKSA6IG51bGw7XG4gIHRoaXMucmFpbEJvcmRlcllXaWR0aCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyB0b0ludChyYWlsWVN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Ub3ApICsgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Cb3R0b20pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWUhlaWdodCA9IG51bGw7XG4gIHRoaXMucmFpbFlSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5yZWFjaCA9IHtcbiAgICB4OlxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxMZWZ0ID49IHRoaXMuY29udGVudFdpZHRoIC0gdGhpcy5jb250YWluZXJXaWR0aFxuICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgeTpcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxUb3AgPj0gdGhpcy5jb250ZW50SGVpZ2h0IC0gdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgOiBudWxsLFxuICB9O1xuXG4gIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG5cbiAgdGhpcy5zZXR0aW5ncy5oYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyTmFtZSkgeyByZXR1cm4gaGFuZGxlcnNbaGFuZGxlck5hbWVdKHRoaXMkMSk7IH0pO1xuXG4gIHRoaXMubGFzdFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApOyAvLyBmb3Igb25TY3JvbGwgb25seVxuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0OyAvLyBmb3Igb25TY3JvbGwgb25seVxuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5lbGVtZW50LCAnc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHRoaXMkMS5vblNjcm9sbChlKTsgfSk7XG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZWNhbGN1YXRlIG5lZ2F0aXZlIHNjcm9sbExlZnQgYWRqdXN0bWVudFxuICB0aGlzLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IHRoaXMuaXNOZWdhdGl2ZVNjcm9sbFxuICAgID8gdGhpcy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoXG4gICAgOiAwO1xuXG4gIC8vIFJlY2FsY3VsYXRlIHJhaWwgbWFyZ2luc1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxYTWFyZ2luV2lkdGggPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5MZWZ0KSArXG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpLm1hcmdpblJpZ2h0KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpLm1hcmdpblRvcCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Cb3R0b20pO1xuXG4gIC8vIEhpZGUgc2Nyb2xsYmFycyBub3QgdG8gYWZmZWN0IHNjcm9sbFdpZHRoIGFuZCBzY3JvbGxIZWlnaHRcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG5cbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIDAsIGZhbHNlLCB0cnVlKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ2xlZnQnLCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUub25TY3JvbGwgPSBmdW5jdGlvbiBvblNjcm9sbCAoZSkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAndG9wJywgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCAtIHRoaXMubGFzdFNjcm9sbFRvcCk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKFxuICAgIHRoaXMsXG4gICAgJ2xlZnQnLFxuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0IC0gdGhpcy5sYXN0U2Nyb2xsTGVmdFxuICApO1xuXG4gIHRoaXMubGFzdFNjcm9sbFRvcCA9IE1hdGguZmxvb3IodGhpcy5lbGVtZW50LnNjcm9sbFRvcCk7XG4gIHRoaXMubGFzdFNjcm9sbExlZnQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50LnVuYmluZEFsbCgpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnJlbW92ZVBzQ2xhc3NlcygpO1xuXG4gIC8vIHVuc2V0IGVsZW1lbnRzXG4gIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsID0gbnVsbDtcblxuICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnJlbW92ZVBzQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZVBzQ2xhc3NlcyAoKSB7XG4gIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lXG4gICAgLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbmFtZS5tYXRjaCgvXnBzKFstX10uK3wpJC8pOyB9KVxuICAgIC5qb2luKCcgJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJmZWN0U2Nyb2xsYmFyO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8vIExvYWRlZCBhZnRlciBDb3JlVUkgYXBwLmpzXG5cbiIsImltcG9ydCAnQGNvcmV1aS9jb3JldWknXG4iLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxuLy8gTG9hZGVkIGJlZm9yZSBDb3JlVUkgYXBwLmpzXG5pbXBvcnQgJy4uL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ3BhY2UnO1xuaW1wb3J0ICcuLi9wbHVnaW5zJztcbiIsIi8qKlxuICogVGhpcyBib290c3RyYXAgZmlsZSBpcyB1c2VkIGZvciBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAncG9wcGVyLmpzJzsgLy8gUmVxdWlyZWQgZm9yIEJTNFxuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAtdGFibGUnO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJDtcbndpbmRvdy5Td2FsID0gU3dhbDtcbndpbmRvdy5fID0gXzsgLy8gTG9kYXNoXG5cblxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGVuY3J5cHRlZDogdHJ1ZVxuLy8gfSk7XG4iLCIvKipcbiAqIEFsbG93cyB5b3UgdG8gYWRkIGRhdGEtbWV0aG9kPVwiTUVUSE9EIHRvIGxpbmtzIHRvIGF1dG9tYXRpY2FsbHkgaW5qZWN0IGEgZm9ybVxuICogd2l0aCB0aGUgbWV0aG9kIG9uIGNsaWNrXG4gKlxuICogRXhhbXBsZTogPGEgaHJlZj1cInt7cm91dGUoJ2N1c3RvbWVycy5kZXN0cm95JywgJGN1c3RvbWVyLT5pZCl9fVwiXG4gKiBkYXRhLW1ldGhvZD1cImRlbGV0ZVwiIG5hbWU9XCJkZWxldGVfaXRlbVwiPkRlbGV0ZTwvYT5cbiAqXG4gKiBJbmplY3RzIGEgZm9ybSB3aXRoIHRoYXQncyBmaXJlZCBvbiBjbGljayBvZiB0aGUgbGluayB3aXRoIGEgREVMRVRFIHJlcXVlc3QuXG4gKiBHb29kIGJlY2F1c2UgeW91IGRvbid0IGhhdmUgdG8gZGlydHkgeW91ciBIVE1MIHdpdGggZGVsZXRlIGZvcm1zIGV2ZXJ5d2hlcmUuXG4gKi9cbmZ1bmN0aW9uIGFkZERlbGV0ZUZvcm1zKCkge1xuICAgICQoJ1tkYXRhLW1ldGhvZF0nKS5hcHBlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQodGhpcykuZmluZCgnZm9ybScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcbjxmb3JtIGFjdGlvbj0nXCIgKyAkKHRoaXMpLmF0dHIoJ2hyZWYnKSArIFwiJyBtZXRob2Q9J1BPU1QnIG5hbWU9J2RlbGV0ZV9pdGVtJyBzdHlsZT0nZGlzcGxheTpub25lJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdfbWV0aG9kJyB2YWx1ZT0nXCIgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtbWV0aG9kJykgKyBcIic+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX3Rva2VuJyB2YWx1ZT0nXCIgKyAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICAnPC9mb3JtPlxcbic7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiAnJyB9XG4gICAgfSlcbiAgICAgICAgLmF0dHIoJ2hyZWYnLCAnIycpXG4gICAgICAgIC5hdHRyKCdzdHlsZScsICdjdXJzb3I6cG9pbnRlcjsnKVxuICAgICAgICAuYXR0cignb25jbGljaycsICckKHRoaXMpLmZpbmQoXCJmb3JtXCIpLnN1Ym1pdCgpOycpO1xufVxuXG4vKipcbiAqIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cbiAqL1xuJChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBkYXRhLW1ldGhvZD1cImRlbGV0ZVwiIGZvcm1zIHRvIGFsbCBkZWxldGUgbGlua3NcbiAgICAgKi9cbiAgICBhZGREZWxldGVGb3JtcygpO1xuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBhbGwgc3VibWl0IGJ1dHRvbnMgb25jZSBjbGlja2VkXG4gICAgICovXG4gICAgJCgnZm9ybScpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgY29uZmlybSBmb3JtIGRlbGV0ZSB1c2luZyBTd2VldCBBbGVydFxuICAgICAqL1xuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ2Zvcm1bbmFtZT1kZWxldGVfaXRlbV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGxpbmsgPSAkKCdhW2RhdGEtbWV0aG9kPVwiZGVsZXRlXCJdJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdZZXMsIGRlbGV0ZSc7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpIDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPyc7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbCxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcbiAgICB9KS5vbignY2xpY2snLCAnYVtuYW1lPWNvbmZpcm1faXRlbV0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJpYyAnYXJlIHlvdSBzdXJlJyBjb25maXJtIGJveFxuICAgICAgICAgKi9cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSA6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZG8gdGhpcz8nO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpIDogJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGNvbmZpcm0gPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykgOiAnQ29udGludWUnO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm0sXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWwsXG4gICAgICAgICAgICB0eXBlOiAnaW5mbydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgd2luZG93LmxvY2F0aW9uLmFzc2lnbihsaW5rLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==