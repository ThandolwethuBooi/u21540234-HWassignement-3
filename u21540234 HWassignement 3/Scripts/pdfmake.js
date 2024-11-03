/*! pdfmake v0.2.6, @license MIT, @link http://pdfmake.org */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else {
        var a = factory();
        for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(typeof self !== 'undefined' ? self : this, function () {
    return // (function () { // webpackBootstrap
// 	var _webpack_modules_ = ({

/*/ 9282:
/*/ (function (module, _unused_webpack_exports, __webpack_require_) {

        "use strict";
/* provided dependency */ var process = _webpack_require_(4155);
        // Currently in sync with Node.js lib/assert.js
        // https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
        // Originally from narwhal.js (http://narwhaljs.org)
        // Copyright (c) 2009 Thomas Robinson <280north.com>
        //
        // Permission is hereby granted, free of charge, to any person obtaining a copy
        // of this software and associated documentation files (the 'Software'), to
        // deal in the Software without restriction, including without limitation the
        // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        // sell copies of the Software, and to permit persons to whom the Software is
        // furnished to do so, subject to the following conditions:
        //
        // The above copyright notice and this permission notice shall be included in
        // all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
        // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
        // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


        function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var require = __webpack_require_(2136),
            _require$codes = _require.codes,
            ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT,
            ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
            ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE,
            ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE,
            ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;

        var AssertionError = _webpack_require_(5961);

        var require2 = __webpack_require_(9539),
            inspect = _require2.inspect;

        var require$types = (webpack_require_(9539).types),
            isPromise = _require$types.isPromise,
            isRegExp = _require$types.isRegExp;

        var objectAssign = Object.assign ? Object.assign : (_webpack_require_(8091).assign);
        var objectIs = Object.is ? Object.is : _webpack_require_(609);
        var errorCache = new Map();
        var isDeepEqual;
        var isDeepStrictEqual;
        var parseExpressionAt;
        var findNodeAround;
        var decoder;

        function lazyLoadComparison() {
            var comparison = _webpack_require_(9158);

            isDeepEqual = comparison.isDeepEqual;
            isDeepStrictEqual = comparison.isDeepStrictEqual;
        } // Escape control characters but not \n and \t to keep the line breaks and
        // indentation intact.
        // eslint-disable-next-line no-control-regex


        var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
        var meta = (/* unused pure expression or super */ null && (["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", '\\b', '', '', "\\u000b", '\\f', '', "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"]));

        var escapeFn = function escapeFn(str) {
            return meta[str.charCodeAt(0)];
        };

        var warned = false; // The assert module provides functions that throw
        // AssertionError's when particular conditions are not met. The
        // assert module must conform to the following interface.

        var assert = module.exports = ok;
        var NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
        // when a corresponding condition is not met, with a message that
        // may be undefined if not provided. All assertion methods provide
        // both the actual and expected values to the assertion error for
        // display purposes.

        function innerFail(obj) {
            if (obj.message instanceof Error) throw obj.message;
            throw new AssertionError(obj);
        }

        function fail(actual, expected, message, operator, stackStartFn) {
            var argsLen = arguments.length;
            var internalMessage;

            if (argsLen === 0) {
                internalMessage = 'Failed';
            } else if (argsLen === 1) {
                message = actual;
                actual = undefined;
            } else {
                if (warned === false) {
                    warned = true;
                    var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
                    warn('assert.fail() with more than one argument is deprecated. ' + 'Please use assert.strictEqual() instead or only pass a message.', 'DeprecationWarning', 'DEP0094');
                }

                if (argsLen === 2) operator = '!=';
            }

            if (message instanceof Error) throw message;
            var errArgs = {
                actual: actual,
                expected: expected,
                operator: operator === undefined ? 'fail' : operator,
                stackStartFn: stackStartFn || fail
            };

            if (message !== undefined) {
                errArgs.message = message;
            }

            var err = new AssertionError(errArgs);

            if (internalMessage) {
                err.message = internalMessage;
                err.generatedMessage = true;
            }

            throw err;
        }

        assert.fail = fail; // The AssertionError is defined in internal/error.

        assert.AssertionError = AssertionError;

        function innerOk(fn, argLen, value, message) {
            if (!value) {
                var generatedMessage = false;

                if (argLen === 0) {
                    generatedMessage = true;
                    message = 'No value argument passed to assert.ok()';
                } else if (message instanceof Error) {
                    throw message;
                }

                var err = new AssertionError({
                    actual: value,
                    expected: true,
                    message: message,
                    operator: '==',
                    stackStartFn: fn
                });
                err.generatedMessage = generatedMessage;
                throw err;
            }
        } // Pure assertion tests whether a value is truthy, as determined
        // by !!value.


        function ok() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            innerOk.apply(void 0, [ok, args.length].concat(args));
        }

        assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.

        /* eslint-disable no-restricted-properties */

        assert.equal = function equal(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            } // eslint-disable-next-line eqeqeq


            if (actual != expected) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: '==',
                    stackStartFn: equal
                });
            }
        }; // The non-equality assertion tests for whether two objects are not
        // equal with !=.


        assert.notEqual = function notEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            } // eslint-disable-next-line eqeqeq


            if (actual == expected) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: '!=',
                    stackStartFn: notEqual
                });
            }
        }; // The equivalence assertion tests a deep equality relation.


        assert.deepEqual = function deepEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            }

            if (isDeepEqual === undefined) lazyLoadComparison();

            if (!isDeepEqual(actual, expected)) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: 'deepEqual',
                    stackStartFn: deepEqual
                });
            }
        }; // The non-equivalence assertion tests for any deep inequality.


        assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            }

            if (isDeepEqual === undefined) lazyLoadComparison();

            if (isDeepEqual(actual, expected)) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: 'notDeepEqual',
                    stackStartFn: notDeepEqual
                });
            }
        };
        /* eslint-enable */


        assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            }

            if (isDeepEqual === undefined) lazyLoadComparison();

            if (!isDeepStrictEqual(actual, expected)) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: 'deepStrictEqual',
                    stackStartFn: deepStrictEqual
                });
            }
        };

        assert.notDeepStrictEqual = notDeepStrictEqual;

        function notDeepStrictEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            }

            if (isDeepEqual === undefined) lazyLoadComparison();

            if (isDeepStrictEqual(actual, expected)) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: 'notDeepStrictEqual',
                    stackStartFn: notDeepStrictEqual
                });
            }
        }

        assert.strictEqual = function strictEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            }

            if (!objectIs(actual, expected)) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: 'strictEqual',
                    stackStartFn: strictEqual
                });
            }
        };

        assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
            if (arguments.length < 2) {
                throw new ERR_MISSING_ARGS('actual', 'expected');
            }

            if (objectIs(actual, expected)) {
                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: 'notStrictEqual',
                    stackStartFn: notStrictEqual
                });
            }
        };

        var Comparison = function Comparison(obj, keys, actual) {
            var _this = this;

            _classCallCheck(this, Comparison);

            keys.forEach(function (key) {
                if (key in obj) {
                    if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) {
                        _this[key] = actual[key];
                    } else {
                        _this[key] = obj[key];
                    }
                }
            });
        };

        function compareExceptionKey(actual, expected, key, message, keys, fn) {
            if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
                if (!message) {
                    // Create placeholder objects to create a nice output.
                    var a = new Comparison(actual, keys);
                    var b = new Comparison(expected, keys, actual);
                    var err = new AssertionError({
                        actual: a,
                        expected: b,
                        operator: 'deepStrictEqual',
                        stackStartFn: fn
                    });
                    err.actual = actual;
                    err.expected = expected;
                    err.operator = fn.name;
                    throw err;
                }

                innerFail({
                    actual: actual,
                    expected: expected,
                    message: message,
                    operator: fn.name,
                    stackStartFn: fn
                });
            }
        }

        function expectedException(actual, expected, msg, fn) {
            if (typeof expected !== 'function') {
                if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.

                if (arguments.length === 2) {
                    throw new ERR_INVALID_ARG_TYPE('expected', ['Function', 'RegExp'], expected);
                } // Handle primitives properly.


                if (_typeof(actual) !== 'object' || actual === null) {
                    var err = new AssertionError({
                        actual: actual,
                        expected: expected,
                        message: msg,
                        operator: 'deepStrictEqual',
                        stackStartFn: fn
                    });
                    err.operator = fn.name;
                    throw err;
                }

                var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
                // as well.

                if (expected instanceof Error) {
                    keys.push('name', 'message');
                } else if (keys.length === 0) {
                    throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
                }

                if (isDeepEqual === undefined) lazyLoadComparison();
                keys.forEach(function (key) {
                    if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) {
                        return;
                    }

                    compareExceptionKey(actual, expected, key, msg, keys, fn);
                });
                return true;
            } // Guard instanceof against arrow functions as they don't have a prototype.


            if (expected.prototype !== undefined && actual instanceof expected) {
                return true;
            }

            if (Error.isPrototypeOf(expected)) {
                return false;
            }

            return expected.call({}, actual) === true;
        }

        function getActual(fn) {
            if (typeof fn !== 'function') {
                throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
            }

            try {
                fn();
            } catch (e) {
                return e;
            }

            return NO_EXCEPTION_SENTINEL;
        }

        function checkIsPromise(obj) {
            // Accept native ES6 promises and promises that are implemented in a similar
            // way. Do not accept thenables that use a function as obj and that have no
            // catch handler.
            // TODO: thenables are checked up until they have the correct methods,
            // but according to documentation, the then method should receive
            // the fulfill and reject arguments as well or it may be never resolved.
            return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
        }

        function waitForActual(promiseFn) {
            return Promise.resolve().then(function () {
                var resultPromise;

                if (typeof promiseFn === 'function') {
                    // Return a rejected promise if promiseFn throws synchronously.
                    resultPromise = promiseFn(); // Fail in case no promise is returned.

                    if (!checkIsPromise(resultPromise)) {
                        throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
                    }
                } else if (checkIsPromise(promiseFn)) {
                    resultPromise = promiseFn;
                } else {
                    throw new ERR_INVALID_ARG_TYPE('promiseFn', ['Function', 'Promise'], promiseFn);
                }

                return Promise.resolve().then(function () {
                    return resultPromise;
                }).then(function () {
                    return NO_EXCEPTION_SENTINEL;
                }).catch(function (e) {
                    return e;
                });
            });
        }

        function expectsError(stackStartFn, actual, error, message) {
            if (typeof error === 'string') {
                if (arguments.length === 4) {
                    throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
                }

                if (_typeof(actual) === 'object' && actual !== null) {
                    if (actual.message === error) {
                        throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
                    }
                } else if (actual === error) {
                    throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
                }

                message = error;
                error = undefined;
            } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') {
                throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
            }

            if (actual === NO_EXCEPTION_SENTINEL) {
                var details = '';

                if (error && error.name) {
                    details += " (".concat(error.name, ")");
                }

                details += message ? ": ".concat(message) : '.';
                var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
                innerFail({
                    actual: undefined,
                    expected: error,
                    operator: stackStartFn.name,
                    message: "Missing expected ".concat(fnType).concat(details),
                    stackStartFn: stackStartFn
                });
            }

            if (error && !expectedException(actual, error, message, stackStartFn)) {
                throw actual;
            }
        }

        function expectsNoError(stackStartFn, actual, error, message) {
            if (actual === NO_EXCEPTION_SENTINEL) return;

            if (typeof error === 'string') {
                message = error;
                error = undefined;
            }

            if (!error || expectedException(actual, error)) {
                var details = message ? ": ".concat(message) : '.';
                var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
                innerFail({
                    actual: actual,
                    expected: error,
                    operator: stackStartFn.name,
                    message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
                    stackStartFn: stackStartFn
                });
            }

            throw actual;
        }

        assert.throws = function throws(promiseFn) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
        };

        assert.rejects = function rejects(promiseFn) {
            for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }

            return waitForActual(promiseFn).then(function (result) {
                return expectsError.apply(void 0, [rejects, result].concat(args));
            });
        };

        assert.doesNotThrow = function doesNotThrow(fn) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = arguments[_key4];
            }

            expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
        };

        assert.doesNotReject = function doesNotReject(fn) {
            for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                args[_key5 - 1] = arguments[_key5];
            }

            return waitForActual(fn).then(function (result) {
                return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
            });
        };

        assert.ifError = function ifError(err) {
            if (err !== null && err !== undefined) {
                var message = 'ifError got unwanted exception: ';

                if (_typeof(err) === 'object' && typeof err.message === 'string') {
                    if (err.message.length === 0 && err.constructor) {
                        message += err.constructor.name;
                    } else {
                        message += err.message;
                    }
                } else {
                    message += inspect(err);
                }

                var newErr = new AssertionError({
                    actual: err,
                    expected: null,
                    operator: 'ifError',
                    message: message,
                    stackStartFn: ifError
                }); // Make sure we actually have a stack trace!

                var origStack = err.stack;

                if (typeof origStack === 'string') {
                    // This will remove any duplicated frames from the error frames taken
                    // from within ifError and add the original error frames to the newly
                    // created ones.
                    var tmp2 = origStack.split('\n');
                    tmp2.shift(); // Filter all frames existing in err.stack.

                    var tmp1 = newErr.stack.split('\n');

                    for (var i = 0; i < tmp2.length; i++) {
                        // Find the first occurrence of the frame.
                        var pos = tmp1.indexOf(tmp2[i]);

                        if (pos !== -1) {
                            // Only keep new frames.
                            tmp1 = tmp1.slice(0, pos);
                            break;
                        }
                    }

                    newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
                }

                throw newErr;
            }
        }; // Expose a strict only variant of assert


        function strict() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
            }

            innerOk.apply(void 0, [strict, args.length].concat(args));
        }

        assert.strict = objectAssign(strict, assert, {
            equal: assert.strictEqual,
            deepEqual: assert.deepStrictEqual,
            notEqual: assert.notStrictEqual,
            notDeepEqual: assert.notDeepStrictEqual
        });
        assert.strict.strict = assert.strict;

                    /*/
}),

/*/ 5961:
/*/ (function (module, _unused_webpack_exports, __webpack_require_) {

                    "use strict";
/* provided dependency */ var process = _webpack_require_(4155);
        // Currently in sync with Node.js lib/internal/assert/assertion_error.js
        // https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c


        function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

        function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

        function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

        function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

        function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

        function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

        function setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.proto_ = p; return o; }; return _setPrototypeOf(o, p); }

        function getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.proto_ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

        function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

        var require = __webpack_require_(9539),
            inspect = _require.inspect;

        var require2 = __webpack_require_(2136),
            ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


        function endsWith(str, search, this_len) {
            if (this_len === undefined || this_len > str.length) {
                this_len = str.length;
            }

            return str.substring(this_len - search.length, this_len) === search;
        } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat


        function repeat(str, count) {
            count = Math.floor(count);
            if (str.length == 0 || count == 0) return '';
            var maxCount = str.length * count;
            count = Math.floor(Math.log(count) / Math.log(2));

            while (count) {
                str += str;
                count--;
            }

            str += str.substring(0, maxCount - str.length);
            return str;
        }

        var blue = '';
        var green = '';
        var red = '';
        var white = '';
        var kReadableOperator = {
            deepStrictEqual: 'Expected values to be strictly deep-equal:',
            strictEqual: 'Expected values to be strictly equal:',
            strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
            deepEqual: 'Expected values to be loosely deep-equal:',
            equal: 'Expected values to be loosely equal:',
            notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
            notStrictEqual: 'Expected "actual" to be strictly unequal to:',
            notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
            notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
            notEqual: 'Expected "actual" to be loosely unequal to:',
            notIdentical: 'Values identical but not reference-equal:'
        }; // Comparing short primitives should just show === / !== instead of using the
        // diff.

        var kMaxShortLength = 10;

        function copyError(source) {
            var keys = Object.keys(source);
            var target = Object.create(Object.getPrototypeOf(source));
            keys.forEach(function (key) {
                target[key] = source[key];
            });
            Object.defineProperty(target, 'message', {
                value: source.message
            });
            return target;
        }

        function inspectValue(val) {
            // The util.inspect default values could be changed. This makes sure the
            // error messages contain the necessary information nevertheless.
            return inspect(val, {
                compact: false,
                customInspect: false,
                depth: 1000,
                maxArrayLength: Infinity,
                // Assert compares only enumerable properties (with a few exceptions).
                showHidden: false,
                // Having a long line as error is better than wrapping the line for
                // comparison for now.
                // TODO(BridgeAR): breakLength should be limited as soon as soon as we
                // have meta information about the inspected properties (i.e., know where
                // in what line the property starts and ends).
                breakLength: Infinity,
                // Assert does not detect proxies currently.
                showProxy: false,
                sorted: true,
                // Inspect getters as we also check them when comparing entries.
                getters: true
            });
        }

        function createErrDiff(actual, expected, operator) {
            var other = '';
            var res = '';
            var lastPos = 0;
            var end = '';
            var skipped = false;
            var actualInspected = inspectValue(actual);
            var actualLines = actualInspected.split('\n');
            var expectedLines = inspectValue(expected).split('\n');
            var i = 0;
            var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
            // for the strictEqual operator.

            if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) {
                operator = 'strictEqualObject';
            } // If "actual" and "expected" fit on a single line and they are not strictly
            // equal, check further special handling.


            if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
                var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
                // kMaxShortLength and if neither is an object and at least one of them is
                // not zero, use the strict equal comparison to visualize the output.

                if (inputLength <= kMaxShortLength) {
                    if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) {
                        // -0 === +0
                        return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
                    }
                } else if (operator !== 'strictEqualObject') {
                    // If the stderr is a tty and the input length is lower than the current
                    // columns per line, add a mismatch indicator below the output. If it is
                    // not a tty, use a default value of 80 characters.
                    var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;

                    if (inputLength < maxLength) {
                        while (actualLines[0][i] === expectedLines[0][i]) {
                            i++;
                        } // Ignore the first characters.


                        if (i > 2) {
                            // Add position indicator for the first mismatch in case it is a
                            // single line and the input length is less than the column length.
                            indicator = "\n  ".concat(repeat(' ', i), "^");
                            i = 0;
                        }
                    }
                }
            } // Remove all ending lines that match (this optimizes the output for
            // readability by reducing the number of total changed lines).


            var a = actualLines[actualLines.length - 1];
            var b = expectedLines[expectedLines.length - 1];

            while (a === b) {
                if (i++ < 2) {
                    end = "\n  ".concat(a).concat(end);
                } else {
                    other = a;
                }

                actualLines.pop();
                expectedLines.pop();
                if (actualLines.length === 0 || expectedLines.length === 0) break;
                a = actualLines[actualLines.length - 1];
                b = expectedLines[expectedLines.length - 1];
            }

            var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
            // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })

            if (maxLines === 0) {
                // We have to get the result again. The lines were all removed before.
                var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.


                if (_actualLines.length > 30) {
                    _actualLines[26] = "".concat(blue, "...").concat(white);

                    while (_actualLines.length > 27) {
                        _actualLines.pop();
                    }
                }

                return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
            }

            if (i > 3) {
                end = "\n".concat(blue, "...").concat(white).concat(end);
                skipped = true;
            }

            if (other !== '') {
                end = "\n  ".concat(other).concat(end);
                other = '';
            }

            var printedLines = 0;
            var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
            var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");

            for (i = 0; i < maxLines; i++) {
                // Only extra expected lines exist
                var cur = i - lastPos;

                if (actualLines.length < i + 1) {
                    // If the last diverging line is more than one line above and the
                    // current line is at least line three, add some of the former lines and
                    // also add dots to indicate skipped entries.
                    if (cur > 1 && i > 2) {
                        if (cur > 4) {
                            res += "\n".concat(blue, "...").concat(white);
                            skipped = true;
                        } else if (cur > 3) {
                            res += "\n  ".concat(expectedLines[i - 2]);
                            printedLines++;
                        }

                        res += "\n  ".concat(expectedLines[i - 1]);
                        printedLines++;
                    } // Mark the current line as the last diverging one.


                    lastPos = i; // Add the expected line to the cache.

                    other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
                    printedLines++; // Only extra actual lines exist
                } else if (expectedLines.length < i + 1) {
                    // If the last diverging line is more than one line above and the
                    // current line is at least line three, add some of the former lines and
                    // also add dots to indicate skipped entries.
                    if (cur > 1 && i > 2) {
                        if (cur > 4) {
                            res += "\n".concat(blue, "...").concat(white);
                            skipped = true;
                        } else if (cur > 3) {
                            res += "\n  ".concat(actualLines[i - 2]);
                            printedLines++;
                        }

                        res += "\n  ".concat(actualLines[i - 1]);
                        printedLines++;
                    } // Mark the current line as the last diverging one.


                    lastPos = i; // Add the actual line to the result.

                    res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
                    printedLines++; // Lines diverge
                } else {
                    var expectedLine = expectedLines[i];
                    var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
                    // a trailing comma. In that case it is actually identical and we should
                    // mark it as such.

                    var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
                    // add a comma at the end of the actual line. Otherwise the output could
                    // look weird as in:
                    //
                    //   [
                    //     1         // No comma at the end!
                    // +   2
                    //   ]
                    //

                    if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
                        divergingLines = false;
                        actualLine += ',';
                    }

                    if (divergingLines) {
                        // If the last diverging line is more than one line above and the
                        // current line is at least line three, add some of the former lines and
                        // also add dots to indicate skipped entries.
                        if (cur > 1 && i > 2) {
                            if (cur > 4) {
                                res += "\n".concat(blue, "...").concat(white);
                                skipped = true;
                            } else if (cur > 3) {
                                res += "\n  ".concat(actualLines[i - 2]);
                                printedLines++;
                            }

                            res += "\n  ".concat(actualLines[i - 1]);
                            printedLines++;
                        } // Mark the current line as the last diverging one.


                        lastPos = i; // Add the actual line to the result and cache the expected diverging
                        // line so consecutive diverging lines show up as +++--- and not +-+-+-.

                        res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                        printedLines += 2; // Lines are identical
                    } else {
                        // Add all cached information to the result before adding other things
                        // and reset the cache.
                        res += other;
                        other = ''; // If the last diverging line is exactly one line above or if it is the
                        // very first line, add the line to the result.

                        if (cur === 1 || i === 0) {
                            res += "\n  ".concat(actualLine);
                            printedLines++;
                        }
                    }
                } // Inspected object to big (Show ~20 rows max)


                if (printedLines > 20 && i < maxLines - 2) {
                    return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
                }
            }

            return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
        }

        var AssertionError =
            /#_PURE_/
        function (_Error) {
            _inherits(AssertionError, _Error);

            function AssertionError(options) {
                var _this;

                _classCallCheck(this, AssertionError);

                if (_typeof(options) !== 'object' || options === null) {
                    throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
                }

                var message = options.message,
                    operator = options.operator,
                    stackStartFn = options.stackStartFn;
                var actual = options.actual,
                    expected = options.expected;
                var limit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;

                if (message != null) {
                    _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
                } else {
                    if (process.stderr && process.stderr.isTTY) {
                        // Reset on each call to make sure we handle dynamically set environment
                        // variables correct.
                        if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                            blue = "\x1B[34m";
                            green = "\x1B[32m";
                            white = "\x1B[39m";
                            red = "\x1B[31m";
                        } else {
                            blue = '';
                            green = '';
                            white = '';
                            red = '';
                        }
                    } // Prevent the error stack from being visible by duplicating the error
                    // in a very close way to the original in case both sides are actually
                    // instances of Error.


                    if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
                        actual = copyError(actual);
                        expected = copyError(expected);
                    }

                    if (operator === 'deepStrictEqual' || operator === 'strictEqual') {
                        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
                    } else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
                        // In case the objects are equal but the operator requires unequal, show
                        // the first object and say A equals B
                        var base = kReadableOperator[operator];
                        var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.

                        if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) {
                            base = kReadableOperator.notStrictEqualObject;
                        } // Only remove lines in case it makes sense to collapse those.
                        // TODO: Accept env to always show the full error.


                        if (res.length > 30) {
                            res[26] = "".concat(blue, "...").concat(white);

                            while (res.length > 27) {
                                res.pop();
                            }
                        } // Only print a single input.


                        if (res.length === 1) {
                            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                        } else {
                            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
                        }
                    } else {
                        var _res = inspectValue(actual);

                        var other = '';
                        var knownOperators = kReadableOperator[operator];

                        if (operator === 'notDeepEqual' || operator === 'notEqual') {
                            _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);

                            if (_res.length > 1024) {
                                _res = "".concat(_res.slice(0, 1021), "...");
                            }
                        } else {
                            other = "".concat(inspectValue(expected));

                            if (_res.length > 512) {
                                _res = "".concat(_res.slice(0, 509), "...");
                            }

                            if (other.length > 512) {
                                other = "".concat(other.slice(0, 509), "...");
                            }

                            if (operator === 'deepEqual' || operator === 'equal') {
                                _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                            } else {
                                other = " ".concat(operator, " ").concat(other);
                            }
                        }

                        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
                    }
                }

                Error.stackTraceLimit = limit;
                _this.generatedMessage = !message;
                Object.defineProperty(_assertThisInitialized(_this), 'name', {
                    value: 'AssertionError [ERR_ASSERTION]',
                    enumerable: false,
                    writable: true,
                    configurable: true
                });
                _this.code = 'ERR_ASSERTION';
                _this.actual = actual;
                _this.expected = expected;
                _this.operator = operator;

                if (Error.captureStackTrace) {
                    // eslint-disable-next-line no-restricted-syntax
                    Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
                } // Create error message including the error code in the name.


                _this.stack; // Reset the name.

                _this.name = 'AssertionError';
                return _possibleConstructorReturn(_this);
            }

            _createClass(AssertionError, [{
                key: "toString",
                value: function toString() {
                    return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
                }
            }, {
                key: inspect.custom,
                value: function value(recurseTimes, ctx) {
// This limits the actual and expected property default inspection to
// the minimum depth. Otherwise those values would be too verbose compared
// to the actual error message which contains a combined view of these two
// input