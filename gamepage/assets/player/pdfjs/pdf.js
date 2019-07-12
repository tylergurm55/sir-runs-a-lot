/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define('pdfjs-dist/build/pdf', [], factory);
  else if (typeof exports === 'object') exports['pdfjs-dist/build/pdf'] = factory();
  else root['pdfjs-dist/build/pdf'] = root.pdfjsDistBuildPdf = factory();
}(this, () =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __w_pdfjs_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__w_pdfjs_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__w_pdfjs_require__.c = installedModules;
    /** *** */
    /** *** */ 	// identity function for calling harmony imports with the correct context
    /** *** */ 	__w_pdfjs_require__.i = function (value) { return value; };
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__w_pdfjs_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__w_pdfjs_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, {
          /** *** */ 				configurable: false,
          /** *** */ 				enumerable: true,
          /** *** */ 				get: getter,
          /** *** */ 			});
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__w_pdfjs_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__w_pdfjs_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__w_pdfjs_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__w_pdfjs_require__.p = '';
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 15);
    /** *** */ }([
    /* 0 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.unreachable = exports.warn = exports.utf8StringToString = exports.stringToUTF8String = exports.stringToPDFString = exports.stringToBytes = exports.string32 = exports.shadow = exports.setVerbosityLevel = exports.ReadableStream = exports.removeNullCharacters = exports.readUint32 = exports.readUint16 = exports.readInt8 = exports.log2 = exports.loadJpegStream = exports.isEvalSupported = exports.isLittleEndian = exports.createValidAbsoluteUrl = exports.isSameOrigin = exports.isNodeJS = exports.isSpace = exports.isString = exports.isNum = exports.isInt = exports.isEmptyObj = exports.isBool = exports.isArrayBuffer = exports.isArray = exports.info = exports.globalScope = exports.getVerbosityLevel = exports.getLookupTableFactory = exports.deprecated = exports.createObjectURL = exports.createPromiseCapability = exports.createBlob = exports.bytesToString = exports.assert = exports.arraysToBytes = exports.arrayByteLength = exports.FormatError = exports.XRefParseException = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.StatTimer = exports.PasswordResponses = exports.PasswordException = exports.PageViewport = exports.NotImplementedException = exports.NativeImageDecoding = exports.MissingPDFException = exports.MissingDataException = exports.MessageHandler = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VERBOSITY_LEVELS = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = undefined;

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      __w_pdfjs_require__(16);

      const _streams_polyfill = __w_pdfjs_require__(17);

      const globalScope = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : undefined;
      const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
      const NativeImageDecoding = {
        NONE: 'none',
        DECODE: 'decode',
        DISPLAY: 'display',
      };
      const TextRenderingMode = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4,
      };
      const ImageKind = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3,
      };
      const AnnotationType = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26,
      };
      const AnnotationFlag = {
        INVISIBLE: 0x01,
        HIDDEN: 0x02,
        PRINT: 0x04,
        NOZOOM: 0x08,
        NOROTATE: 0x10,
        NOVIEW: 0x20,
        READONLY: 0x40,
        LOCKED: 0x80,
        TOGGLENOVIEW: 0x100,
        LOCKEDCONTENTS: 0x200,
      };
      const AnnotationFieldFlag = {
        READONLY: 0x0000001,
        REQUIRED: 0x0000002,
        NOEXPORT: 0x0000004,
        MULTILINE: 0x0001000,
        PASSWORD: 0x0002000,
        NOTOGGLETOOFF: 0x0004000,
        RADIO: 0x0008000,
        PUSHBUTTON: 0x0010000,
        COMBO: 0x0020000,
        EDIT: 0x0040000,
        SORT: 0x0080000,
        FILESELECT: 0x0100000,
        MULTISELECT: 0x0200000,
        DONOTSPELLCHECK: 0x0400000,
        DONOTSCROLL: 0x0800000,
        COMB: 0x1000000,
        RICHTEXT: 0x2000000,
        RADIOSINUNISON: 0x2000000,
        COMMITONSELCHANGE: 0x4000000,
      };
      const AnnotationBorderStyleType = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5,
      };
      const StreamType = {
        UNKNOWN: 0,
        FLATE: 1,
        LZW: 2,
        DCT: 3,
        JPX: 4,
        JBIG: 5,
        A85: 6,
        AHX: 7,
        CCF: 8,
        RL: 9,
      };
      const FontType = {
        UNKNOWN: 0,
        TYPE1: 1,
        TYPE1C: 2,
        CIDFONTTYPE0: 3,
        CIDFONTTYPE0C: 4,
        TRUETYPE: 5,
        CIDFONTTYPE2: 6,
        TYPE3: 7,
        OPENTYPE: 8,
        TYPE0: 9,
        MMTYPE1: 10,
      };
      const VERBOSITY_LEVELS = {
        errors: 0,
        warnings: 1,
        infos: 5,
      };
      const CMapCompressionType = {
        NONE: 0,
        BINARY: 1,
        STREAM: 2,
      };
      const OPS = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotations: 78,
        endAnnotations: 79,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintJpegXObject: 82,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
      };
      let verbosity = VERBOSITY_LEVELS.warnings;
      function setVerbosityLevel(level) {
        verbosity = level;
      }
      function getVerbosityLevel() {
        return verbosity;
      }
      function info(msg) {
        if (verbosity >= VERBOSITY_LEVELS.infos) {
          console.log(`Info: ${msg}`);
        }
      }
      function warn(msg) {
        if (verbosity >= VERBOSITY_LEVELS.warnings) {
          console.log(`Warning: ${msg}`);
        }
      }
      function deprecated(details) {
        console.log(`Deprecated API usage: ${details}`);
      }
      function unreachable(msg) {
        throw new Error(msg);
      }
      function assert(cond, msg) {
        if (!cond) {
          unreachable(msg);
        }
      }
      const UNSUPPORTED_FEATURES = {
        unknown: 'unknown',
        forms: 'forms',
        javaScript: 'javaScript',
        smask: 'smask',
        shadingPattern: 'shadingPattern',
        font: 'font',
      };
      function isSameOrigin(baseUrl, otherUrl) {
        try {
          var base = new URL(baseUrl);
          if (!base.origin || base.origin === 'null') {
            return false;
          }
        } catch (e) {
          return false;
        }
        const other = new URL(otherUrl, base);
        return base.origin === other.origin;
      }
      function isValidProtocol(url) {
        if (!url) {
          return false;
        }
        switch (url.protocol) {
          case 'http:':
          case 'https:':
          case 'ftp:':
          case 'mailto:':
          case 'tel:':
            return true;
          default:
            return false;
        }
      }
      function createValidAbsoluteUrl(url, baseUrl) {
        if (!url) {
          return null;
        }
        try {
          const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
          if (isValidProtocol(absoluteUrl)) {
            return absoluteUrl;
          }
        } catch (ex) {}
        return null;
      }
      function shadow(obj, prop, value) {
        Object.defineProperty(obj, prop, {
          value,
          enumerable: true,
          configurable: true,
          writable: false,
        });
        return value;
      }
      function getLookupTableFactory(initializer) {
        let lookup;
        return function () {
          if (initializer) {
            lookup = Object.create(null);
            initializer(lookup);
            initializer = null;
          }
          return lookup;
        };
      }
      const PasswordResponses = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2,
      };
      const PasswordException = (function PasswordExceptionClosure() {
        function PasswordException(msg, code) {
          this.name = 'PasswordException';
          this.message = msg;
          this.code = code;
        }
        PasswordException.prototype = new Error();
        PasswordException.constructor = PasswordException;
        return PasswordException;
      }());
      const UnknownErrorException = (function UnknownErrorExceptionClosure() {
        function UnknownErrorException(msg, details) {
          this.name = 'UnknownErrorException';
          this.message = msg;
          this.details = details;
        }
        UnknownErrorException.prototype = new Error();
        UnknownErrorException.constructor = UnknownErrorException;
        return UnknownErrorException;
      }());
      const InvalidPDFException = (function InvalidPDFExceptionClosure() {
        function InvalidPDFException(msg) {
          this.name = 'InvalidPDFException';
          this.message = msg;
        }
        InvalidPDFException.prototype = new Error();
        InvalidPDFException.constructor = InvalidPDFException;
        return InvalidPDFException;
      }());
      const MissingPDFException = (function MissingPDFExceptionClosure() {
        function MissingPDFException(msg) {
          this.name = 'MissingPDFException';
          this.message = msg;
        }
        MissingPDFException.prototype = new Error();
        MissingPDFException.constructor = MissingPDFException;
        return MissingPDFException;
      }());
      const UnexpectedResponseException = (function UnexpectedResponseExceptionClosure() {
        function UnexpectedResponseException(msg, status) {
          this.name = 'UnexpectedResponseException';
          this.message = msg;
          this.status = status;
        }
        UnexpectedResponseException.prototype = new Error();
        UnexpectedResponseException.constructor = UnexpectedResponseException;
        return UnexpectedResponseException;
      }());
      const NotImplementedException = (function NotImplementedExceptionClosure() {
        function NotImplementedException(msg) {
          this.message = msg;
        }
        NotImplementedException.prototype = new Error();
        NotImplementedException.prototype.name = 'NotImplementedException';
        NotImplementedException.constructor = NotImplementedException;
        return NotImplementedException;
      }());
      const MissingDataException = (function MissingDataExceptionClosure() {
        function MissingDataException(begin, end) {
          this.begin = begin;
          this.end = end;
          this.message = `Missing data [${begin}, ${end})`;
        }
        MissingDataException.prototype = new Error();
        MissingDataException.prototype.name = 'MissingDataException';
        MissingDataException.constructor = MissingDataException;
        return MissingDataException;
      }());
      const XRefParseException = (function XRefParseExceptionClosure() {
        function XRefParseException(msg) {
          this.message = msg;
        }
        XRefParseException.prototype = new Error();
        XRefParseException.prototype.name = 'XRefParseException';
        XRefParseException.constructor = XRefParseException;
        return XRefParseException;
      }());
      const FormatError = (function FormatErrorClosure() {
        function FormatError(msg) {
          this.message = msg;
        }
        FormatError.prototype = new Error();
        FormatError.prototype.name = 'FormatError';
        FormatError.constructor = FormatError;
        return FormatError;
      }());
      const AbortException = (function AbortExceptionClosure() {
        function AbortException(msg) {
          this.name = 'AbortException';
          this.message = msg;
        }
        AbortException.prototype = new Error();
        AbortException.constructor = AbortException;
        return AbortException;
      }());
      const NullCharactersRegExp = /\x00/g;
      function removeNullCharacters(str) {
        if (typeof str !== 'string') {
          warn('The argument for removeNullCharacters must be a string.');
          return str;
        }
        return str.replace(NullCharactersRegExp, '');
      }
      function bytesToString(bytes) {
        assert(bytes !== null && (typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
        const { length } = bytes;
        const MAX_ARGUMENT_COUNT = 8192;
        if (length < MAX_ARGUMENT_COUNT) {
          return String.fromCharCode.apply(null, bytes);
        }
        const strBuf = [];
        for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
          const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
          const chunk = bytes.subarray(i, chunkEnd);
          strBuf.push(String.fromCharCode.apply(null, chunk));
        }
        return strBuf.join('');
      }
      function stringToBytes(str) {
        assert(typeof str === 'string', 'Invalid argument for stringToBytes');
        const { length } = str;
        const bytes = new Uint8Array(length);
        for (let i = 0; i < length; ++i) {
          bytes[i] = str.charCodeAt(i) & 0xFF;
        }
        return bytes;
      }
      function arrayByteLength(arr) {
        if (arr.length !== undefined) {
          return arr.length;
        }
        assert(arr.byteLength !== undefined);
        return arr.byteLength;
      }
      function arraysToBytes(arr) {
        if (arr.length === 1 && arr[0] instanceof Uint8Array) {
          return arr[0];
        }
        let resultLength = 0;
        let i;
        const ii = arr.length;
        let item; let
          itemLength;
        for (i = 0; i < ii; i++) {
          item = arr[i];
          itemLength = arrayByteLength(item);
          resultLength += itemLength;
        }
        let pos = 0;
        const data = new Uint8Array(resultLength);
        for (i = 0; i < ii; i++) {
          item = arr[i];
          if (!(item instanceof Uint8Array)) {
            if (typeof item === 'string') {
              item = stringToBytes(item);
            } else {
              item = new Uint8Array(item);
            }
          }
          itemLength = item.byteLength;
          data.set(item, pos);
          pos += itemLength;
        }
        return data;
      }
      function string32(value) {
        return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
      }
      function log2(x) {
        let n = 1;
        let i = 0;
        while (x > n) {
          n <<= 1;
          i++;
        }
        return i;
      }
      function readInt8(data, start) {
        return data[start] << 24 >> 24;
      }
      function readUint16(data, offset) {
        return data[offset] << 8 | data[offset + 1];
      }
      function readUint32(data, offset) {
        return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
      }
      function isLittleEndian() {
        const buffer8 = new Uint8Array(4);
        buffer8[0] = 1;
        const view32 = new Uint32Array(buffer8.buffer, 0, 1);
        return view32[0] === 1;
      }
      function isEvalSupported() {
        try {
          new Function('');
          return true;
        } catch (e) {
          return false;
        }
      }
      const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
      const Util = (function UtilClosure() {
        function Util() {}
        const rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];
        Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
          rgbBuf[1] = r;
          rgbBuf[3] = g;
          rgbBuf[5] = b;
          return rgbBuf.join('');
        };
        Util.transform = function Util_transform(m1, m2) {
          return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
        };
        Util.applyTransform = function Util_applyTransform(p, m) {
          const xt = p[0] * m[0] + p[1] * m[2] + m[4];
          const yt = p[0] * m[1] + p[1] * m[3] + m[5];
          return [xt, yt];
        };
        Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
          const d = m[0] * m[3] - m[1] * m[2];
          const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
          const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
          return [xt, yt];
        };
        Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
          const p1 = Util.applyTransform(r, m);
          const p2 = Util.applyTransform(r.slice(2, 4), m);
          const p3 = Util.applyTransform([r[0], r[3]], m);
          const p4 = Util.applyTransform([r[2], r[1]], m);
          return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
        };
        Util.inverseTransform = function Util_inverseTransform(m) {
          const d = m[0] * m[3] - m[1] * m[2];
          return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
        };
        Util.apply3dTransform = function Util_apply3dTransform(m, v) {
          return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
        };
        Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
          const transpose = [m[0], m[2], m[1], m[3]];
          const a = m[0] * transpose[0] + m[1] * transpose[2];
          const b = m[0] * transpose[1] + m[1] * transpose[3];
          const c = m[2] * transpose[0] + m[3] * transpose[2];
          const d = m[2] * transpose[1] + m[3] * transpose[3];
          const first = (a + d) / 2;
          const second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
          const sx = first + second || 1;
          const sy = first - second || 1;
          return [Math.sqrt(sx), Math.sqrt(sy)];
        };
        Util.normalizeRect = function Util_normalizeRect(rect) {
          const r = rect.slice(0);
          if (rect[0] > rect[2]) {
            r[0] = rect[2];
            r[2] = rect[0];
          }
          if (rect[1] > rect[3]) {
            r[1] = rect[3];
            r[3] = rect[1];
          }
          return r;
        };
        Util.intersect = function Util_intersect(rect1, rect2) {
          function compare(a, b) {
            return a - b;
          }
          const orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
          const orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
          const result = [];
          rect1 = Util.normalizeRect(rect1);
          rect2 = Util.normalizeRect(rect2);
          if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
            result[0] = orderedX[1];
            result[2] = orderedX[2];
          } else {
            return false;
          }
          if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
            result[1] = orderedY[1];
            result[3] = orderedY[2];
          } else {
            return false;
          }
          return result;
        };
        Util.sign = function Util_sign(num) {
          return num < 0 ? -1 : 1;
        };
        const ROMAN_NUMBER_MAP = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        Util.toRoman = function Util_toRoman(number, lowerCase) {
          assert(isInt(number) && number > 0, 'The number should be a positive integer.');
          let pos;
          const romanBuf = [];
          while (number >= 1000) {
            number -= 1000;
            romanBuf.push('M');
          }
          pos = number / 100 | 0;
          number %= 100;
          romanBuf.push(ROMAN_NUMBER_MAP[pos]);
          pos = number / 10 | 0;
          number %= 10;
          romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
          romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
          const romanStr = romanBuf.join('');
          return lowerCase ? romanStr.toLowerCase() : romanStr;
        };
        Util.appendToArray = function Util_appendToArray(arr1, arr2) {
          Array.prototype.push.apply(arr1, arr2);
        };
        Util.prependToArray = function Util_prependToArray(arr1, arr2) {
          Array.prototype.unshift.apply(arr1, arr2);
        };
        Util.extendObj = function extendObj(obj1, obj2) {
          for (const key in obj2) {
            obj1[key] = obj2[key];
          }
        };
        Util.getInheritableProperty = function Util_getInheritableProperty(dict, name, getArray) {
          while (dict && !dict.has(name)) {
            dict = dict.get('Parent');
          }
          if (!dict) {
            return null;
          }
          return getArray ? dict.getArray(name) : dict.get(name);
        };
        Util.inherit = function Util_inherit(sub, base, prototype) {
          sub.prototype = Object.create(base.prototype);
          sub.prototype.constructor = sub;
          for (const prop in prototype) {
            sub.prototype[prop] = prototype[prop];
          }
        };
        Util.loadScript = function Util_loadScript(src, callback) {
          const script = document.createElement('script');
          let loaded = false;
          script.setAttribute('src', src);
          if (callback) {
            script.onload = function () {
              if (!loaded) {
                callback();
              }
              loaded = true;
            };
          }
          document.getElementsByTagName('head')[0].appendChild(script);
        };
        return Util;
      }());
      const PageViewport = (function PageViewportClosure() {
        function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
          this.viewBox = viewBox;
          this.scale = scale;
          this.rotation = rotation;
          this.offsetX = offsetX;
          this.offsetY = offsetY;
          const centerX = (viewBox[2] + viewBox[0]) / 2;
          const centerY = (viewBox[3] + viewBox[1]) / 2;
          let rotateA; let rotateB; let rotateC; let
            rotateD;
          rotation %= 360;
          rotation = rotation < 0 ? rotation + 360 : rotation;
          switch (rotation) {
            case 180:
              rotateA = -1;
              rotateB = 0;
              rotateC = 0;
              rotateD = 1;
              break;
            case 90:
              rotateA = 0;
              rotateB = 1;
              rotateC = 1;
              rotateD = 0;
              break;
            case 270:
              rotateA = 0;
              rotateB = -1;
              rotateC = -1;
              rotateD = 0;
              break;
            default:
              rotateA = 1;
              rotateB = 0;
              rotateC = 0;
              rotateD = -1;
              break;
          }
          if (dontFlip) {
            rotateC = -rotateC;
            rotateD = -rotateD;
          }
          let offsetCanvasX; let
            offsetCanvasY;
          let width; let
            height;
          if (rotateA === 0) {
            offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
            width = Math.abs(viewBox[3] - viewBox[1]) * scale;
            height = Math.abs(viewBox[2] - viewBox[0]) * scale;
          } else {
            offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
            width = Math.abs(viewBox[2] - viewBox[0]) * scale;
            height = Math.abs(viewBox[3] - viewBox[1]) * scale;
          }
          this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
          this.width = width;
          this.height = height;
          this.fontScale = scale;
        }
        PageViewport.prototype = {
          clone: function PageViewPort_clone(args) {
            args = args || {};
            const scale = 'scale' in args ? args.scale : this.scale;
            const rotation = 'rotation' in args ? args.rotation : this.rotation;
            return new PageViewport(this.viewBox.slice(), scale, rotation, this.offsetX, this.offsetY, args.dontFlip);
          },
          convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
            return Util.applyTransform([x, y], this.transform);
          },
          convertToViewportRectangle: function PageViewport_convertToViewportRectangle(rect) {
            const tl = Util.applyTransform([rect[0], rect[1]], this.transform);
            const br = Util.applyTransform([rect[2], rect[3]], this.transform);
            return [tl[0], tl[1], br[0], br[1]];
          },
          convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
            return Util.applyInverseTransform([x, y], this.transform);
          },
        };
        return PageViewport;
      }());
      const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];
      function stringToPDFString(str) {
        let i;
        const n = str.length;
        const strBuf = [];
        if (str[0] === '\xFE' && str[1] === '\xFF') {
          for (i = 2; i < n; i += 2) {
            strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
          }
        } else {
          for (i = 0; i < n; ++i) {
            const code = PDFStringTranslateTable[str.charCodeAt(i)];
            strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
          }
        }
        return strBuf.join('');
      }
      function stringToUTF8String(str) {
        return decodeURIComponent(escape(str));
      }
      function utf8StringToString(str) {
        return unescape(encodeURIComponent(str));
      }
      function isEmptyObj(obj) {
        for (const key in obj) {
          return false;
        }
        return true;
      }
      function isBool(v) {
        return typeof v === 'boolean';
      }
      function isInt(v) {
        return typeof v === 'number' && (v | 0) === v;
      }
      function isNum(v) {
        return typeof v === 'number';
      }
      function isString(v) {
        return typeof v === 'string';
      }
      function isArray(v) {
        return v instanceof Array;
      }
      function isArrayBuffer(v) {
        return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.byteLength !== undefined;
      }
      function isSpace(ch) {
        return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
      }
      function isNodeJS() {
        return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && `${process}` === '[object process]';
      }
      function createPromiseCapability() {
        const capability = {};
        capability.promise = new Promise(((resolve, reject) => {
          capability.resolve = resolve;
          capability.reject = reject;
        }));
        return capability;
      }
      const StatTimer = (function StatTimerClosure() {
        function rpad(str, pad, length) {
          while (str.length < length) {
            str += pad;
          }
          return str;
        }
        function StatTimer() {
          this.started = Object.create(null);
          this.times = [];
          this.enabled = true;
        }
        StatTimer.prototype = {
          time: function StatTimer_time(name) {
            if (!this.enabled) {
              return;
            }
            if (name in this.started) {
              warn(`Timer is already running for ${name}`);
            }
            this.started[name] = Date.now();
          },
          timeEnd: function StatTimer_timeEnd(name) {
            if (!this.enabled) {
              return;
            }
            if (!(name in this.started)) {
              warn(`Timer has not been started for ${name}`);
            }
            this.times.push({
              name,
              start: this.started[name],
              end: Date.now(),
            });
            delete this.started[name];
          },
          toString: function StatTimer_toString() {
            let i; let
              ii;
            const { times } = this;
            let out = '';
            let longest = 0;
            for (i = 0, ii = times.length; i < ii; ++i) {
              const { name } = times[i];
              if (name.length > longest) {
                longest = name.length;
              }
            }
            for (i = 0, ii = times.length; i < ii; ++i) {
              const span = times[i];
              const duration = span.end - span.start;
              out += `${rpad(span.name, ' ', longest)} ${duration}ms\n`;
            }
            return out;
          },
        };
        return StatTimer;
      }());
      const createBlob = function createBlob(data, contentType) {
        if (typeof Blob !== 'undefined') {
          return new Blob([data], { type: contentType });
        }
        throw new Error('The "Blob" constructor is not supported.');
      };
      const createObjectURL = (function createObjectURLClosure() {
        const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        return function createObjectURL(data, contentType) {
          const forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!forceDataSchema && URL.createObjectURL) {
            const blob = createBlob(data, contentType);
            return URL.createObjectURL(blob);
          }
          let buffer = `data:${contentType};base64,`;
          for (let i = 0, ii = data.length; i < ii; i += 3) {
            const b1 = data[i] & 0xFF;
            const b2 = data[i + 1] & 0xFF;
            const b3 = data[i + 2] & 0xFF;
            const d1 = b1 >> 2;
            const d2 = (b1 & 3) << 4 | b2 >> 4;
            const d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
            const d4 = i + 2 < ii ? b3 & 0x3F : 64;
            buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
          }
          return buffer;
        };
      }());
      function resolveCall(fn, args) {
        const thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (!fn) {
          return Promise.resolve(undefined);
        }
        return new Promise(((resolve, reject) => {
          resolve(fn.apply(thisArg, args));
        }));
      }
      function wrapReason(reason) {
        if ((typeof reason === 'undefined' ? 'undefined' : _typeof(reason)) !== 'object') {
          return reason;
        }
        switch (reason.name) {
          case 'AbortException':
            return new AbortException(reason.message);
          case 'MissingPDFException':
            return new MissingPDFException(reason.message);
          case 'UnexpectedResponseException':
            return new UnexpectedResponseException(reason.message, reason.status);
          default:
            return new UnknownErrorException(reason.message, reason.details);
        }
      }
      function resolveOrReject(capability, success, reason) {
        if (success) {
          capability.resolve();
        } else {
          capability.reject(reason);
        }
      }
      function finalize(promise) {
        return Promise.resolve(promise).catch(() => {});
      }
      function MessageHandler(sourceName, targetName, comObj) {
        const _this = this;

        this.sourceName = sourceName;
        this.targetName = targetName;
        this.comObj = comObj;
        this.callbackId = 1;
        this.streamId = 1;
        this.postMessageTransfers = true;
        this.streamSinks = Object.create(null);
        this.streamControllers = Object.create(null);
        const callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
        const ah = this.actionHandler = Object.create(null);
        this._onComObjOnMessage = function (event) {
          const { data } = event;
          if (data.targetName !== _this.sourceName) {
            return;
          }
          if (data.stream) {
            _this._processStreamMessage(data);
          } else if (data.isReply) {
            const { callbackId } = data;
            if (data.callbackId in callbacksCapabilities) {
              const callback = callbacksCapabilities[callbackId];
              delete callbacksCapabilities[callbackId];
              if ('error' in data) {
                callback.reject(wrapReason(data.error));
              } else {
                callback.resolve(data.data);
              }
            } else {
              throw new Error(`Cannot resolve callback ${callbackId}`);
            }
          } else if (data.action in ah) {
            const action = ah[data.action];
            if (data.callbackId) {
              const _sourceName = _this.sourceName;
              const _targetName = data.sourceName;
              Promise.resolve().then(() => action[0].call(action[1], data.data)).then((result) => {
                comObj.postMessage({
                  sourceName: _sourceName,
                  targetName: _targetName,
                  isReply: true,
                  callbackId: data.callbackId,
                  data: result,
                });
              }, (reason) => {
                if (reason instanceof Error) {
                  reason = `${reason}`;
                }
                comObj.postMessage({
                  sourceName: _sourceName,
                  targetName: _targetName,
                  isReply: true,
                  callbackId: data.callbackId,
                  error: reason,
                });
              });
            } else if (data.streamId) {
              _this._createStreamSink(data);
            } else {
              action[0].call(action[1], data.data);
            }
          } else {
            throw new Error(`Unknown action from worker: ${data.action}`);
          }
        };
        comObj.addEventListener('message', this._onComObjOnMessage);
      }
      MessageHandler.prototype = {
        on: function on(actionName, handler, scope) {
          const ah = this.actionHandler;
          if (ah[actionName]) {
            throw new Error(`There is already an actionName called "${actionName}"`);
          }
          ah[actionName] = [handler, scope];
        },
        send: function send(actionName, data, transfers) {
          const message = {
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: actionName,
            data,
          };
          this.postMessage(message, transfers);
        },
        sendWithPromise: function sendWithPromise(actionName, data, transfers) {
          const callbackId = this.callbackId++;
          const message = {
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: actionName,
            data,
            callbackId,
          };
          const capability = createPromiseCapability();
          this.callbacksCapabilities[callbackId] = capability;
          try {
            this.postMessage(message, transfers);
          } catch (e) {
            capability.reject(e);
          }
          return capability.promise;
        },
        sendWithStream: function sendWithStream(actionName, data, queueingStrategy, transfers) {
          const _this2 = this;

          const streamId = this.streamId++;
          const { sourceName } = this;
          const { targetName } = this;
          return new _streams_polyfill.ReadableStream({
            start: function start(controller) {
              const startCapability = createPromiseCapability();
              _this2.streamControllers[streamId] = {
                controller,
                startCall: startCapability,
                isClosed: false,
              };
              _this2.postMessage({
                sourceName,
                targetName,
                action: actionName,
                streamId,
                data,
                desiredSize: controller.desiredSize,
              });
              return startCapability.promise;
            },
            pull: function pull(controller) {
              const pullCapability = createPromiseCapability();
              _this2.streamControllers[streamId].pullCall = pullCapability;
              _this2.postMessage({
                sourceName,
                targetName,
                stream: 'pull',
                streamId,
                desiredSize: controller.desiredSize,
              });
              return pullCapability.promise;
            },
            cancel: function cancel(reason) {
              const cancelCapability = createPromiseCapability();
              _this2.streamControllers[streamId].cancelCall = cancelCapability;
              _this2.streamControllers[streamId].isClosed = true;
              _this2.postMessage({
                sourceName,
                targetName,
                stream: 'cancel',
                reason,
                streamId,
              });
              return cancelCapability.promise;
            },
          }, queueingStrategy);
        },
        _createStreamSink: function _createStreamSink(data) {
          const _this3 = this;

          const self = this;
          const action = this.actionHandler[data.action];
          const { streamId } = data;
          const { desiredSize } = data;
          const { sourceName } = this;
          const targetName = data.sourceName;
          const capability = createPromiseCapability();
          const sendStreamRequest = function sendStreamRequest(_ref) {
            const { stream } = _ref;
            const { chunk } = _ref;
            const { transfers } = _ref;
            const { success } = _ref;
            const { reason } = _ref;

            _this3.postMessage({
              sourceName,
              targetName,
              stream,
              streamId,
              chunk,
              success,
              reason,
            }, transfers);
          };
          const streamSink = {
            enqueue: function enqueue(chunk) {
              const size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              const transfers = arguments[2];

              if (this.isCancelled) {
                return;
              }
              const lastDesiredSize = this.desiredSize;
              this.desiredSize -= size;
              if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                this.sinkCapability = createPromiseCapability();
                this.ready = this.sinkCapability.promise;
              }
              sendStreamRequest({
                stream: 'enqueue',
                chunk,
                transfers,
              });
            },
            close: function close() {
              if (this.isCancelled) {
                return;
              }
              sendStreamRequest({ stream: 'close' });
              delete self.streamSinks[streamId];
            },
            error: function error(reason) {
              if (this.isCancelled) {
                return;
              }
              this.isCancelled = true;
              sendStreamRequest({
                stream: 'error',
                reason,
              });
            },

            sinkCapability: capability,
            onPull: null,
            onCancel: null,
            isCancelled: false,
            desiredSize,
            ready: null,
          };
          streamSink.sinkCapability.resolve();
          streamSink.ready = streamSink.sinkCapability.promise;
          this.streamSinks[streamId] = streamSink;
          resolveCall(action[0], [data.data, streamSink], action[1]).then(() => {
            sendStreamRequest({
              stream: 'start_complete',
              success: true,
            });
          }, (reason) => {
            sendStreamRequest({
              stream: 'start_complete',
              success: false,
              reason,
            });
          });
        },
        _processStreamMessage: function _processStreamMessage(data) {
          const _this4 = this;

          const { sourceName } = this;
          const targetName = data.sourceName;
          const { streamId } = data;
          const sendStreamResponse = function sendStreamResponse(_ref2) {
            const { stream } = _ref2;
            const { success } = _ref2;
            const { reason } = _ref2;

            _this4.comObj.postMessage({
              sourceName,
              targetName,
              stream,
              success,
              streamId,
              reason,
            });
          };
          const deleteStreamController = function deleteStreamController() {
            Promise.all([_this4.streamControllers[data.streamId].startCall, _this4.streamControllers[data.streamId].pullCall, _this4.streamControllers[data.streamId].cancelCall].map(capability => capability && finalize(capability.promise))).then(() => {
              delete _this4.streamControllers[data.streamId];
            });
          };
          switch (data.stream) {
            case 'start_complete':
              resolveOrReject(this.streamControllers[data.streamId].startCall, data.success, wrapReason(data.reason));
              break;
            case 'pull_complete':
              resolveOrReject(this.streamControllers[data.streamId].pullCall, data.success, wrapReason(data.reason));
              break;
            case 'pull':
              if (!this.streamSinks[data.streamId]) {
                sendStreamResponse({
                  stream: 'pull_complete',
                  success: true,
                });
                break;
              }
              if (this.streamSinks[data.streamId].desiredSize <= 0 && data.desiredSize > 0) {
                this.streamSinks[data.streamId].sinkCapability.resolve();
              }
              this.streamSinks[data.streamId].desiredSize = data.desiredSize;
              resolveCall(this.streamSinks[data.streamId].onPull).then(() => {
                sendStreamResponse({
                  stream: 'pull_complete',
                  success: true,
                });
              }, (reason) => {
                sendStreamResponse({
                  stream: 'pull_complete',
                  success: false,
                  reason,
                });
              });
              break;
            case 'enqueue':
              assert(this.streamControllers[data.streamId], 'enqueue should have stream controller');
              if (!this.streamControllers[data.streamId].isClosed) {
                this.streamControllers[data.streamId].controller.enqueue(data.chunk);
              }
              break;
            case 'close':
              assert(this.streamControllers[data.streamId], 'close should have stream controller');
              if (this.streamControllers[data.streamId].isClosed) {
                break;
              }
              this.streamControllers[data.streamId].isClosed = true;
              this.streamControllers[data.streamId].controller.close();
              deleteStreamController();
              break;
            case 'error':
              assert(this.streamControllers[data.streamId], 'error should have stream controller');
              this.streamControllers[data.streamId].controller.error(wrapReason(data.reason));
              deleteStreamController();
              break;
            case 'cancel_complete':
              resolveOrReject(this.streamControllers[data.streamId].cancelCall, data.success, wrapReason(data.reason));
              deleteStreamController();
              break;
            case 'cancel':
              if (!this.streamSinks[data.streamId]) {
                break;
              }
              resolveCall(this.streamSinks[data.streamId].onCancel, [wrapReason(data.reason)]).then(() => {
                sendStreamResponse({
                  stream: 'cancel_complete',
                  success: true,
                });
              }, (reason) => {
                sendStreamResponse({
                  stream: 'cancel_complete',
                  success: false,
                  reason,
                });
              });
              this.streamSinks[data.streamId].sinkCapability.reject(wrapReason(data.reason));
              this.streamSinks[data.streamId].isCancelled = true;
              delete this.streamSinks[data.streamId];
              break;
            default:
              throw new Error('Unexpected stream case');
          }
        },
        postMessage: function postMessage(message, transfers) {
          if (transfers && this.postMessageTransfers) {
            this.comObj.postMessage(message, transfers);
          } else {
            this.comObj.postMessage(message);
          }
        },
        destroy: function destroy() {
          this.comObj.removeEventListener('message', this._onComObjOnMessage);
        },
      };
      function loadJpegStream(id, imageUrl, objs) {
        const img = new Image();
        img.onload = function loadJpegStream_onloadClosure() {
          objs.resolve(id, img);
        };
        img.onerror = function loadJpegStream_onerrorClosure() {
          objs.resolve(id, null);
          warn('Error during JPEG image loading');
        };
        img.src = imageUrl;
      }
      exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
      exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
      exports.OPS = OPS;
      exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
      exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
      exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
      exports.AnnotationFieldFlag = AnnotationFieldFlag;
      exports.AnnotationFlag = AnnotationFlag;
      exports.AnnotationType = AnnotationType;
      exports.FontType = FontType;
      exports.ImageKind = ImageKind;
      exports.CMapCompressionType = CMapCompressionType;
      exports.AbortException = AbortException;
      exports.InvalidPDFException = InvalidPDFException;
      exports.MessageHandler = MessageHandler;
      exports.MissingDataException = MissingDataException;
      exports.MissingPDFException = MissingPDFException;
      exports.NativeImageDecoding = NativeImageDecoding;
      exports.NotImplementedException = NotImplementedException;
      exports.PageViewport = PageViewport;
      exports.PasswordException = PasswordException;
      exports.PasswordResponses = PasswordResponses;
      exports.StatTimer = StatTimer;
      exports.StreamType = StreamType;
      exports.TextRenderingMode = TextRenderingMode;
      exports.UnexpectedResponseException = UnexpectedResponseException;
      exports.UnknownErrorException = UnknownErrorException;
      exports.Util = Util;
      exports.XRefParseException = XRefParseException;
      exports.FormatError = FormatError;
      exports.arrayByteLength = arrayByteLength;
      exports.arraysToBytes = arraysToBytes;
      exports.assert = assert;
      exports.bytesToString = bytesToString;
      exports.createBlob = createBlob;
      exports.createPromiseCapability = createPromiseCapability;
      exports.createObjectURL = createObjectURL;
      exports.deprecated = deprecated;
      exports.getLookupTableFactory = getLookupTableFactory;
      exports.getVerbosityLevel = getVerbosityLevel;
      exports.globalScope = globalScope;
      exports.info = info;
      exports.isArray = isArray;
      exports.isArrayBuffer = isArrayBuffer;
      exports.isBool = isBool;
      exports.isEmptyObj = isEmptyObj;
      exports.isInt = isInt;
      exports.isNum = isNum;
      exports.isString = isString;
      exports.isSpace = isSpace;
      exports.isNodeJS = isNodeJS;
      exports.isSameOrigin = isSameOrigin;
      exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
      exports.isLittleEndian = isLittleEndian;
      exports.isEvalSupported = isEvalSupported;
      exports.loadJpegStream = loadJpegStream;
      exports.log2 = log2;
      exports.readInt8 = readInt8;
      exports.readUint16 = readUint16;
      exports.readUint32 = readUint32;
      exports.removeNullCharacters = removeNullCharacters;
      exports.ReadableStream = _streams_polyfill.ReadableStream;
      exports.setVerbosityLevel = setVerbosityLevel;
      exports.shadow = shadow;
      exports.string32 = string32;
      exports.stringToBytes = stringToBytes;
      exports.stringToPDFString = stringToPDFString;
      exports.stringToUTF8String = stringToUTF8String;
      exports.utf8StringToString = utf8StringToString;
      exports.warn = warn;
      exports.unreachable = unreachable;
      /** */ }),
    /* 1 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.getDefaultSetting = exports.LinkTarget = exports.getFilenameFromUrl = exports.isValidUrl = exports.isExternalLinkTargetSet = exports.addLinkAttributes = exports.RenderingCancelledException = exports.CustomStyle = undefined;

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      const _util = __w_pdfjs_require__(0);

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      const DEFAULT_LINK_REL = 'noopener noreferrer nofollow';

      const DOMCanvasFactory = (function () {
        function DOMCanvasFactory() {
          _classCallCheck(this, DOMCanvasFactory);
        }

        _createClass(DOMCanvasFactory, [{
          key: 'create',
          value: function create(width, height) {
            if (width <= 0 || height <= 0) {
              throw new Error('invalid canvas size');
            }
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            return {
              canvas,
              context,
            };
          },
        }, {
          key: 'reset',
          value: function reset(canvasAndContext, width, height) {
            if (!canvasAndContext.canvas) {
              throw new Error('canvas is not specified');
            }
            if (width <= 0 || height <= 0) {
              throw new Error('invalid canvas size');
            }
            canvasAndContext.canvas.width = width;
            canvasAndContext.canvas.height = height;
          },
        }, {
          key: 'destroy',
          value: function destroy(canvasAndContext) {
            if (!canvasAndContext.canvas) {
              throw new Error('canvas is not specified');
            }
            canvasAndContext.canvas.width = 0;
            canvasAndContext.canvas.height = 0;
            canvasAndContext.canvas = null;
            canvasAndContext.context = null;
          },
        }]);

        return DOMCanvasFactory;
      }());

      const DOMCMapReaderFactory = (function () {
        function DOMCMapReaderFactory(_ref) {
          const _ref$baseUrl = _ref.baseUrl;
          const baseUrl = _ref$baseUrl === undefined ? null : _ref$baseUrl;
          const _ref$isCompressed = _ref.isCompressed;
          const isCompressed = _ref$isCompressed === undefined ? false : _ref$isCompressed;

          _classCallCheck(this, DOMCMapReaderFactory);

          this.baseUrl = baseUrl;
          this.isCompressed = isCompressed;
        }

        _createClass(DOMCMapReaderFactory, [{
          key: 'fetch',
          value: function fetch(_ref2) {
            const _this = this;

            const { name } = _ref2;

            if (!name) {
              return Promise.reject(new Error('CMap name must be specified.'));
            }
            return new Promise(((resolve, reject) => {
              const url = _this.baseUrl + name + (_this.isCompressed ? '.bcmap' : '');
              if (PDFJS.disableWorker) {
                // use base64 version of cmap binary
                const key = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
                const binary_array = get_binary_bcmap(key);
                if (binary_array) {
                  resolve({
                    cMapData: binary_array,
                    compressionType: _this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE,
                  });
                  return;
                }
                reject(new Error(`Unable to load ${_this.isCompressed ? 'binary ' : ''}CMap at: ${url}`));
              } else {
                const request = new XMLHttpRequest();
                request.open('GET', url, true);
                if (_this.isCompressed) {
                  request.responseType = 'arraybuffer';
                }
                request.onreadystatechange = function () {
                  if (request.readyState !== XMLHttpRequest.DONE) {
                    return;
                  }
                  if (request.status === 200 || request.status === 0) {
                    let data = void 0;
                    if (_this.isCompressed && request.response) {
                      data = new Uint8Array(request.response);
                    } else if (!_this.isCompressed && request.responseText) {
                      data = (0, _util.stringToBytes)(request.responseText);
                    }
                    if (data) {
                      resolve({
                        cMapData: data,
                        compressionType: _this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE,
                      });
                      return;
                    }
                  }
                  reject(new Error(`Unable to load ${_this.isCompressed ? 'binary ' : ''}CMap at: ${url}`));
                };
                request.send(null);
              }
            }));
          },
        }]);

        return DOMCMapReaderFactory;
      }());

      const CustomStyle = (function CustomStyleClosure() {
        const prefixes = ['ms', 'Moz', 'Webkit', 'O'];
        const _cache = Object.create(null);
        function CustomStyle() {}
        CustomStyle.getProp = function get(propName, element) {
          if (arguments.length === 1 && typeof _cache[propName] === 'string') {
            return _cache[propName];
          }
          element = element || document.documentElement;
          const { style } = element;
          let prefixed;
          let uPropName;
          if (typeof style[propName] === 'string') {
            return _cache[propName] = propName;
          }
          uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
          for (let i = 0, l = prefixes.length; i < l; i++) {
            prefixed = prefixes[i] + uPropName;
            if (typeof style[prefixed] === 'string') {
              return _cache[propName] = prefixed;
            }
          }
          return _cache[propName] = 'undefined';
        };
        CustomStyle.setProp = function set(propName, element, str) {
          const prop = this.getProp(propName);
          if (prop !== 'undefined') {
            element.style[prop] = str;
          }
        };
        return CustomStyle;
      }());
      const RenderingCancelledException = (function RenderingCancelledException() {
        function RenderingCancelledException(msg, type) {
          this.message = msg;
          this.type = type;
        }
        RenderingCancelledException.prototype = new Error();
        RenderingCancelledException.prototype.name = 'RenderingCancelledException';
        RenderingCancelledException.constructor = RenderingCancelledException;
        return RenderingCancelledException;
      }());
      const LinkTarget = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4,
      };
      const LinkTargetStringMap = ['', '_self', '_blank', '_parent', '_top'];
      function addLinkAttributes(link, params) {
        const url = params && params.url;
        link.href = link.title = url ? (0, _util.removeNullCharacters)(url) : '';
        if (url) {
          let { target } = params;
          if (typeof target === 'undefined') {
            target = getDefaultSetting('externalLinkTarget');
          }
          link.target = LinkTargetStringMap[target];
          let { rel } = params;
          if (typeof rel === 'undefined') {
            rel = getDefaultSetting('externalLinkRel');
          }
          link.rel = rel;
        }
      }
      function getFilenameFromUrl(url) {
        const anchor = url.indexOf('#');
        const query = url.indexOf('?');
        const end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
        return url.substring(url.lastIndexOf('/', end) + 1, end);
      }
      function getDefaultSetting(id) {
        const globalSettings = _util.globalScope.PDFJS;
        switch (id) {
          case 'pdfBug':
            return globalSettings ? globalSettings.pdfBug : false;
          case 'disableAutoFetch':
            return globalSettings ? globalSettings.disableAutoFetch : false;
          case 'disableStream':
            return globalSettings ? globalSettings.disableStream : false;
          case 'disableRange':
            return globalSettings ? globalSettings.disableRange : false;
          case 'disableFontFace':
            return globalSettings ? globalSettings.disableFontFace : false;
          case 'disableCreateObjectURL':
            return globalSettings ? globalSettings.disableCreateObjectURL : false;
          case 'disableWebGL':
            return globalSettings ? globalSettings.disableWebGL : true;
          case 'cMapUrl':
            return globalSettings ? globalSettings.cMapUrl : null;
          case 'cMapPacked':
            return globalSettings ? globalSettings.cMapPacked : false;
          case 'postMessageTransfers':
            return globalSettings ? globalSettings.postMessageTransfers : true;
          case 'workerPort':
            return globalSettings ? globalSettings.workerPort : null;
          case 'workerSrc':
            return globalSettings ? globalSettings.workerSrc : null;
          case 'disableWorker':
            return globalSettings ? globalSettings.disableWorker : false;
          case 'maxImageSize':
            return globalSettings ? globalSettings.maxImageSize : -1;
          case 'imageResourcesPath':
            return globalSettings ? globalSettings.imageResourcesPath : '';
          case 'isEvalSupported':
            return globalSettings ? globalSettings.isEvalSupported : true;
          case 'externalLinkTarget':
            if (!globalSettings) {
              return LinkTarget.NONE;
            }
            switch (globalSettings.externalLinkTarget) {
              case LinkTarget.NONE:
              case LinkTarget.SELF:
              case LinkTarget.BLANK:
              case LinkTarget.PARENT:
              case LinkTarget.TOP:
                return globalSettings.externalLinkTarget;
            }
            (0, _util.warn)(`PDFJS.externalLinkTarget is invalid: ${globalSettings.externalLinkTarget}`);
            globalSettings.externalLinkTarget = LinkTarget.NONE;
            return LinkTarget.NONE;
          case 'externalLinkRel':
            return globalSettings ? globalSettings.externalLinkRel : DEFAULT_LINK_REL;
          case 'enableStats':
            return !!(globalSettings && globalSettings.enableStats);
          case 'pdfjsNext':
            return !!(globalSettings && globalSettings.pdfjsNext);
          default:
            throw new Error(`Unknown default setting: ${id}`);
        }
      }
      function isExternalLinkTargetSet() {
        const externalLinkTarget = getDefaultSetting('externalLinkTarget');
        switch (externalLinkTarget) {
          case LinkTarget.NONE:
            return false;
          case LinkTarget.SELF:
          case LinkTarget.BLANK:
          case LinkTarget.PARENT:
          case LinkTarget.TOP:
            return true;
        }
      }
      function isValidUrl(url, allowRelative) {
        (0, _util.deprecated)('isValidUrl(), please use createValidAbsoluteUrl() instead.');
        const baseUrl = allowRelative ? 'http://example.com' : null;
        return (0, _util.createValidAbsoluteUrl)(url, baseUrl) !== null;
      }
      exports.CustomStyle = CustomStyle;
      exports.RenderingCancelledException = RenderingCancelledException;
      exports.addLinkAttributes = addLinkAttributes;
      exports.isExternalLinkTargetSet = isExternalLinkTargetSet;
      exports.isValidUrl = isValidUrl;
      exports.getFilenameFromUrl = getFilenameFromUrl;
      exports.LinkTarget = LinkTarget;
      exports.getDefaultSetting = getDefaultSetting;
      exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
      exports.DOMCanvasFactory = DOMCanvasFactory;
      exports.DOMCMapReaderFactory = DOMCMapReaderFactory;
      /** */ }),
    /* 2 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.build = exports.version = exports._UnsupportedManager = exports.setPDFNetworkStreamClass = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.getDocument = undefined;

      const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      const _util = __w_pdfjs_require__(0);

      const _dom_utils = __w_pdfjs_require__(1);

      const _font_loader = __w_pdfjs_require__(12);

      const _canvas = __w_pdfjs_require__(11);

      const _metadata = __w_pdfjs_require__(6);

      const _transport_stream = __w_pdfjs_require__(14);

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      const DEFAULT_RANGE_CHUNK_SIZE = 65536;
      let isWorkerDisabled = false;
      let workerSrc;
      let isPostMessageTransfersDisabled = false;
      const pdfjsFilePath = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : null;
      let fakeWorkerFilesLoader = null;
      let useRequireEnsure = false;
      {
        if (typeof window === 'undefined') {
          isWorkerDisabled = true;
          if (typeof require.ensure === 'undefined') {
            require.ensure = require('node-ensure');
          }
          useRequireEnsure = true;
        } else if (typeof require !== 'undefined' && typeof require.ensure === 'function') {
          useRequireEnsure = true;
        }
        if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
          workerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
        }
        const dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
        fakeWorkerFilesLoader = useRequireEnsure ? function (callback) {
          require.ensure([], () => {
            let worker;
            worker = require('./pdf.worker.js');
            callback(worker.WorkerMessageHandler);
          });
        } : dynamicLoaderSupported ? function (callback) {
          requirejs(['pdfjs-dist/build/pdf.worker'], (worker) => {
            callback(worker.WorkerMessageHandler);
          });
        } : null;
      }
      let PDFNetworkStream;
      function setPDFNetworkStreamClass(cls) {
        PDFNetworkStream = cls;
      }
      function getDocument(src, pdfDataRangeTransport, passwordCallback, progressCallback) {
        const task = new PDFDocumentLoadingTask();
        if (arguments.length > 1) {
          (0, _util.deprecated)('getDocument is called with pdfDataRangeTransport, ' + 'passwordCallback or progressCallback argument');
        }
        if (pdfDataRangeTransport) {
          if (!(pdfDataRangeTransport instanceof PDFDataRangeTransport)) {
            pdfDataRangeTransport = Object.create(pdfDataRangeTransport);
            pdfDataRangeTransport.length = src.length;
            pdfDataRangeTransport.initialData = src.initialData;
            if (!pdfDataRangeTransport.abort) {
              pdfDataRangeTransport.abort = function () {};
            }
          }
          src = Object.create(src);
          src.range = pdfDataRangeTransport;
        }
        task.onPassword = passwordCallback || null;
        task.onProgress = progressCallback || null;
        let source;
        if (typeof src === 'string') {
          source = { url: src };
        } else if ((0, _util.isArrayBuffer)(src)) {
          source = { data: src };
        } else if (src instanceof PDFDataRangeTransport) {
          source = { range: src };
        } else {
          if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) !== 'object') {
            throw new Error('Invalid parameter in getDocument, ' + 'need either Uint8Array, string or a parameter object');
          }
          if (!src.url && !src.data && !src.range) {
            throw new Error('Invalid parameter object: need either .data, .range or .url');
          }
          source = src;
        }
        const params = {};
        let rangeTransport = null;
        let worker = null;
        let CMapReaderFactory = _dom_utils.DOMCMapReaderFactory;
        for (const key in source) {
          if (key === 'url' && typeof window !== 'undefined') {
            params[key] = new URL(source[key], window.location).href;
            continue;
          } else if (key === 'range') {
            rangeTransport = source[key];
            continue;
          } else if (key === 'worker') {
            worker = source[key];
            continue;
          } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
            const pdfBytes = source[key];
            if (typeof pdfBytes === 'string') {
              params[key] = (0, _util.stringToBytes)(pdfBytes);
            } else if ((typeof pdfBytes === 'undefined' ? 'undefined' : _typeof(pdfBytes)) === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
              params[key] = new Uint8Array(pdfBytes);
            } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
              params[key] = new Uint8Array(pdfBytes);
            } else {
              throw new Error('Invalid PDF binary data: either typed array, ' + 'string or array-like object is expected in the ' + 'data property.');
            }
            continue;
          } else if (key === 'CMapReaderFactory') {
            CMapReaderFactory = source[key];
            continue;
          }
          params[key] = source[key];
        }
        params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
        params.ignoreErrors = params.stopAtErrors !== true;
        if (params.disableNativeImageDecoder !== undefined) {
          (0, _util.deprecated)('parameter disableNativeImageDecoder, ' + 'use nativeImageDecoderSupport instead');
        }
        params.nativeImageDecoderSupport = params.nativeImageDecoderSupport || (params.disableNativeImageDecoder === true ? _util.NativeImageDecoding.NONE : _util.NativeImageDecoding.DECODE);
        if (params.nativeImageDecoderSupport !== _util.NativeImageDecoding.DECODE && params.nativeImageDecoderSupport !== _util.NativeImageDecoding.NONE && params.nativeImageDecoderSupport !== _util.NativeImageDecoding.DISPLAY) {
          (0, _util.warn)('Invalid parameter nativeImageDecoderSupport: ' + 'need a state of enum {NativeImageDecoding}');
          params.nativeImageDecoderSupport = _util.NativeImageDecoding.DECODE;
        }
        if (!worker) {
          const workerPort = (0, _dom_utils.getDefaultSetting)('workerPort');
          worker = workerPort ? PDFWorker.fromPort(workerPort) : new PDFWorker();
          task._worker = worker;
        }
        const { docId } = task;
        worker.promise.then(() => {
          if (task.destroyed) {
            throw new Error('Loading aborted');
          }
          return _fetchDocument(worker, params, rangeTransport, docId).then((workerId) => {
            if (task.destroyed) {
              throw new Error('Loading aborted');
            }
            let networkStream = void 0;
            if (rangeTransport) {
              networkStream = new _transport_stream.PDFDataTransportStream(params, rangeTransport);
            } else if (!params.data) {
              networkStream = new PDFNetworkStream({
                source: params,
                disableRange: (0, _dom_utils.getDefaultSetting)('disableRange'),
              });
            }
            const messageHandler = new _util.MessageHandler(docId, workerId, worker.port);
            messageHandler.postMessageTransfers = worker.postMessageTransfers;
            const transport = new WorkerTransport(messageHandler, task, networkStream, CMapReaderFactory);
            task._transport = transport;
            messageHandler.send('Ready', null);
          });
        }).catch(task._capability.reject);
        return task;
      }
      function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
        if (worker.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }
        source.disableAutoFetch = (0, _dom_utils.getDefaultSetting)('disableAutoFetch');
        source.disableStream = (0, _dom_utils.getDefaultSetting)('disableStream');
        source.chunkedViewerLoading = !!pdfDataRangeTransport;
        if (pdfDataRangeTransport) {
          source.length = pdfDataRangeTransport.length;
          source.initialData = pdfDataRangeTransport.initialData;
        }
        return worker.messageHandler.sendWithPromise('GetDocRequest', {
          docId,
          source: {
            data: source.data,
            url: source.url,
            password: source.password,
            disableAutoFetch: source.disableAutoFetch,
            rangeChunkSize: source.rangeChunkSize,
            length: source.length,
          },
          maxImageSize: (0, _dom_utils.getDefaultSetting)('maxImageSize'),
          disableFontFace: (0, _dom_utils.getDefaultSetting)('disableFontFace'),
          disableCreateObjectURL: (0, _dom_utils.getDefaultSetting)('disableCreateObjectURL'),
          postMessageTransfers: (0, _dom_utils.getDefaultSetting)('postMessageTransfers') && !isPostMessageTransfersDisabled,
          docBaseUrl: source.docBaseUrl,
          nativeImageDecoderSupport: source.nativeImageDecoderSupport,
          ignoreErrors: source.ignoreErrors,
        }).then((workerId) => {
          if (worker.destroyed) {
            throw new Error('Worker was destroyed');
          }
          return workerId;
        });
      }
      var PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
        let nextDocumentId = 0;
        function PDFDocumentLoadingTask() {
          this._capability = (0, _util.createPromiseCapability)();
          this._transport = null;
          this._worker = null;
          this.docId = `d${nextDocumentId++}`;
          this.destroyed = false;
          this.onPassword = null;
          this.onProgress = null;
          this.onUnsupportedFeature = null;
        }
        PDFDocumentLoadingTask.prototype = {
          get promise() {
            return this._capability.promise;
          },
          destroy: function destroy() {
            const _this = this;

            this.destroyed = true;
            const transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
            return transportDestroyed.then(() => {
              _this._transport = null;
              if (_this._worker) {
                _this._worker.destroy();
                _this._worker = null;
              }
            });
          },

          then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
            return this.promise.then.apply(this.promise, arguments);
          },
        };
        return PDFDocumentLoadingTask;
      }());
      var PDFDataRangeTransport = (function pdfDataRangeTransportClosure() {
        function PDFDataRangeTransport(length, initialData) {
          this.length = length;
          this.initialData = initialData;
          this._rangeListeners = [];
          this._progressListeners = [];
          this._progressiveReadListeners = [];
          this._readyCapability = (0, _util.createPromiseCapability)();
        }
        PDFDataRangeTransport.prototype = {
          addRangeListener: function PDFDataRangeTransport_addRangeListener(listener) {
            this._rangeListeners.push(listener);
          },
          addProgressListener: function PDFDataRangeTransport_addProgressListener(listener) {
            this._progressListeners.push(listener);
          },
          addProgressiveReadListener: function PDFDataRangeTransport_addProgressiveReadListener(listener) {
            this._progressiveReadListeners.push(listener);
          },
          onDataRange: function PDFDataRangeTransport_onDataRange(begin, chunk) {
            const listeners = this._rangeListeners;
            for (let i = 0, n = listeners.length; i < n; ++i) {
              listeners[i](begin, chunk);
            }
          },
          onDataProgress: function PDFDataRangeTransport_onDataProgress(loaded) {
            const _this2 = this;

            this._readyCapability.promise.then(() => {
              const listeners = _this2._progressListeners;
              for (let i = 0, n = listeners.length; i < n; ++i) {
                listeners[i](loaded);
              }
            });
          },
          onDataProgressiveRead: function PDFDataRangeTransport_onDataProgress(chunk) {
            const _this3 = this;

            this._readyCapability.promise.then(() => {
              const listeners = _this3._progressiveReadListeners;
              for (let i = 0, n = listeners.length; i < n; ++i) {
                listeners[i](chunk);
              }
            });
          },
          transportReady: function PDFDataRangeTransport_transportReady() {
            this._readyCapability.resolve();
          },
          requestDataRange: function PDFDataRangeTransport_requestDataRange(begin, end) {
            throw new Error('Abstract method PDFDataRangeTransport.requestDataRange');
          },
          abort: function PDFDataRangeTransport_abort() {},
        };
        return PDFDataRangeTransport;
      }());
      const PDFDocumentProxy = (function PDFDocumentProxyClosure() {
        function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
          this.pdfInfo = pdfInfo;
          this.transport = transport;
          this.loadingTask = loadingTask;
        }
        PDFDocumentProxy.prototype = {
          get numPages() {
            return this.pdfInfo.numPages;
          },
          get fingerprint() {
            return this.pdfInfo.fingerprint;
          },
          getPage: function PDFDocumentProxy_getPage(pageNumber) {
            return this.transport.getPage(pageNumber);
          },
          getPageIndex: function PDFDocumentProxy_getPageIndex(ref) {
            return this.transport.getPageIndex(ref);
          },
          getDestinations: function PDFDocumentProxy_getDestinations() {
            return this.transport.getDestinations();
          },
          getDestination: function PDFDocumentProxy_getDestination(id) {
            return this.transport.getDestination(id);
          },
          getPageLabels: function PDFDocumentProxy_getPageLabels() {
            return this.transport.getPageLabels();
          },
          getPageMode: function getPageMode() {
            return this.transport.getPageMode();
          },

          getAttachments: function PDFDocumentProxy_getAttachments() {
            return this.transport.getAttachments();
          },
          getJavaScript: function PDFDocumentProxy_getJavaScript() {
            return this.transport.getJavaScript();
          },
          getOutline: function PDFDocumentProxy_getOutline() {
            return this.transport.getOutline();
          },
          getMetadata: function PDFDocumentProxy_getMetadata() {
            return this.transport.getMetadata();
          },
          getData: function PDFDocumentProxy_getData() {
            return this.transport.getData();
          },
          getDownloadInfo: function PDFDocumentProxy_getDownloadInfo() {
            return this.transport.downloadInfoCapability.promise;
          },
          getStats: function PDFDocumentProxy_getStats() {
            return this.transport.getStats();
          },
          cleanup: function PDFDocumentProxy_cleanup() {
            this.transport.startCleanup();
          },
          destroy: function PDFDocumentProxy_destroy() {
            return this.loadingTask.destroy();
          },
        };
        return PDFDocumentProxy;
      }());
      const PDFPageProxy = (function PDFPageProxyClosure() {
        function PDFPageProxy(pageIndex, pageInfo, transport) {
          this.pageIndex = pageIndex;
          this.pageInfo = pageInfo;
          this.transport = transport;
          this.stats = new _util.StatTimer();
          this.stats.enabled = (0, _dom_utils.getDefaultSetting)('enableStats');
          this.commonObjs = transport.commonObjs;
          this.objs = new PDFObjects();
          this.cleanupAfterRender = false;
          this.pendingCleanup = false;
          this.intentStates = Object.create(null);
          this.destroyed = false;
        }
        PDFPageProxy.prototype = {
          get pageNumber() {
            return this.pageIndex + 1;
          },
          get rotate() {
            return this.pageInfo.rotate;
          },
          get ref() {
            return this.pageInfo.ref;
          },
          get userUnit() {
            return this.pageInfo.userUnit;
          },
          get view() {
            return this.pageInfo.view;
          },
          getViewport: function PDFPageProxy_getViewport(scale, rotate) {
            if (arguments.length < 2) {
              rotate = this.rotate;
            }
            return new _util.PageViewport(this.view, scale, rotate, 0, 0);
          },
          getAnnotations: function PDFPageProxy_getAnnotations(params) {
            const intent = params && params.intent || null;
            if (!this.annotationsPromise || this.annotationsIntent !== intent) {
              this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, intent);
              this.annotationsIntent = intent;
            }
            return this.annotationsPromise;
          },
          render: function PDFPageProxy_render(params) {
            const _this4 = this;

            const { stats } = this;
            stats.time('Overall');
            this.pendingCleanup = false;
            const renderingIntent = params.intent === 'print' ? 'print' : 'display';
            const canvasFactory = params.canvasFactory || new _dom_utils.DOMCanvasFactory();
            if (!this.intentStates[renderingIntent]) {
              this.intentStates[renderingIntent] = Object.create(null);
            }
            const intentState = this.intentStates[renderingIntent];
            if (!intentState.displayReadyCapability) {
              intentState.receivingOperatorList = true;
              intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
              intentState.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
              };
              this.stats.time('Page Request');
              this.transport.messageHandler.send('RenderPageRequest', {
                pageIndex: this.pageNumber - 1,
                intent: renderingIntent,
                renderInteractiveForms: params.renderInteractiveForms === true,
              });
            }
            const complete = function complete(error) {
              const i = intentState.renderTasks.indexOf(internalRenderTask);
              if (i >= 0) {
                intentState.renderTasks.splice(i, 1);
              }
              if (_this4.cleanupAfterRender) {
                _this4.pendingCleanup = true;
              }
              _this4._tryCleanup();
              if (error) {
                internalRenderTask.capability.reject(error);
              } else {
                internalRenderTask.capability.resolve();
              }
              stats.timeEnd('Rendering');
              stats.timeEnd('Overall');
            };
            var internalRenderTask = new InternalRenderTask(complete, params, this.objs, this.commonObjs, intentState.operatorList, this.pageNumber, canvasFactory);
            internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
            if (!intentState.renderTasks) {
              intentState.renderTasks = [];
            }
            intentState.renderTasks.push(internalRenderTask);
            const renderTask = internalRenderTask.task;
            if (params.continueCallback) {
              (0, _util.deprecated)('render is used with continueCallback parameter');
              renderTask.onContinue = params.continueCallback;
            }
            intentState.displayReadyCapability.promise.then((transparency) => {
              if (_this4.pendingCleanup) {
                complete();
                return;
              }
              stats.time('Rendering');
              internalRenderTask.initializeGraphics(transparency);
              internalRenderTask.operatorListChanged();
            }).catch(complete);
            return renderTask;
          },
          getOperatorList: function PDFPageProxy_getOperatorList() {
            function operatorListChanged() {
              if (intentState.operatorList.lastChunk) {
                intentState.opListReadCapability.resolve(intentState.operatorList);
                const i = intentState.renderTasks.indexOf(opListTask);
                if (i >= 0) {
                  intentState.renderTasks.splice(i, 1);
                }
              }
            }
            const renderingIntent = 'oplist';
            if (!this.intentStates[renderingIntent]) {
              this.intentStates[renderingIntent] = Object.create(null);
            }
            var intentState = this.intentStates[renderingIntent];
            let opListTask;
            if (!intentState.opListReadCapability) {
              opListTask = {};
              opListTask.operatorListChanged = operatorListChanged;
              intentState.receivingOperatorList = true;
              intentState.opListReadCapability = (0, _util.createPromiseCapability)();
              intentState.renderTasks = [];
              intentState.renderTasks.push(opListTask);
              intentState.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false,
              };
              this.transport.messageHandler.send('RenderPageRequest', {
                pageIndex: this.pageIndex,
                intent: renderingIntent,
              });
            }
            return intentState.opListReadCapability.promise;
          },
          streamTextContent: function streamTextContent() {
            const params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            const TEXT_CONTENT_CHUNK_SIZE = 100;
            return this.transport.messageHandler.sendWithStream('GetTextContent', {
              pageIndex: this.pageNumber - 1,
              normalizeWhitespace: params.normalizeWhitespace === true,
              combineTextItems: params.disableCombineTextItems !== true,
            }, {
              highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
              size: function size(textContent) {
                return textContent.items.length;
              },
            });
          },

          getTextContent: function PDFPageProxy_getTextContent(params) {
            params = params || {};
            const readableStream = this.streamTextContent(params);
            return new Promise(((resolve, reject) => {
              function pump() {
                reader.read().then((_ref) => {
                  const { value } = _ref;
                  const { done } = _ref;

                  if (done) {
                    resolve(textContent);
                    return;
                  }
                  _util.Util.extendObj(textContent.styles, value.styles);
                  _util.Util.appendToArray(textContent.items, value.items);
                  pump();
                }, reject);
              }
              var reader = readableStream.getReader();
              var textContent = {
                items: [],
                styles: Object.create(null),
              };
              pump();
            }));
          },
          _destroy: function PDFPageProxy_destroy() {
            this.destroyed = true;
            this.transport.pageCache[this.pageIndex] = null;
            const waitOn = [];
            Object.keys(this.intentStates).forEach(function (intent) {
              if (intent === 'oplist') {
                return;
              }
              const intentState = this.intentStates[intent];
              intentState.renderTasks.forEach((renderTask) => {
                const renderCompleted = renderTask.capability.promise.catch(() => {});
                waitOn.push(renderCompleted);
                renderTask.cancel();
              });
            }, this);
            this.objs.clear();
            this.annotationsPromise = null;
            this.pendingCleanup = false;
            return Promise.all(waitOn);
          },
          destroy: function destroy() {
            (0, _util.deprecated)('page destroy method, use cleanup() instead');
            this.cleanup();
          },

          cleanup: function PDFPageProxy_cleanup() {
            this.pendingCleanup = true;
            this._tryCleanup();
          },
          _tryCleanup: function PDFPageProxy_tryCleanup() {
            if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
              const intentState = this.intentStates[intent];
              return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
            }, this)) {
              return;
            }
            Object.keys(this.intentStates).forEach(function (intent) {
              delete this.intentStates[intent];
            }, this);
            this.objs.clear();
            this.annotationsPromise = null;
            this.pendingCleanup = false;
          },
          _startRenderPage: function PDFPageProxy_startRenderPage(transparency, intent) {
            const intentState = this.intentStates[intent];
            if (intentState.displayReadyCapability) {
              intentState.displayReadyCapability.resolve(transparency);
            }
          },
          _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk, intent) {
            const intentState = this.intentStates[intent];
            let i; let
              ii;
            for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
              intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
              intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
            }
            intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
            for (i = 0; i < intentState.renderTasks.length; i++) {
              intentState.renderTasks[i].operatorListChanged();
            }
            if (operatorListChunk.lastChunk) {
              intentState.receivingOperatorList = false;
              this._tryCleanup();
            }
          },
        };
        return PDFPageProxy;
      }());

      const LoopbackPort = (function () {
        function LoopbackPort(defer) {
          _classCallCheck(this, LoopbackPort);

          this._listeners = [];
          this._defer = defer;
          this._deferred = Promise.resolve(undefined);
        }

        _createClass(LoopbackPort, [{
          key: 'postMessage',
          value: function postMessage(obj, transfers) {
            const _this5 = this;

            function cloneValue(value) {
              if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
                return value;
              }
              if (cloned.has(value)) {
                return cloned.get(value);
              }
              let result;
              let buffer;
              if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
                const transferable = transfers && transfers.indexOf(buffer) >= 0;
                if (value === buffer) {
                  result = value;
                } else if (transferable) {
                  result = new value.constructor(buffer, value.byteOffset, value.byteLength);
                } else {
                  result = new value.constructor(value);
                }
                cloned.set(value, result);
                return result;
              }
              result = (0, _util.isArray)(value) ? [] : {};
              cloned.set(value, result);
              for (const i in value) {
                var desc;
                let p = value;
                while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
                  p = Object.getPrototypeOf(p);
                }
                if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
                  continue;
                }
                result[i] = cloneValue(desc.value);
              }
              return result;
            }
            if (!this._defer) {
              this._listeners.forEach(function (listener) {
                listener.call(this, { data: obj });
              }, this);
              return;
            }
            var cloned = new WeakMap();
            const e = { data: cloneValue(obj) };
            this._deferred.then(() => {
              _this5._listeners.forEach(function (listener) {
                listener.call(this, e);
              }, _this5);
            });
          },
        }, {
          key: 'addEventListener',
          value: function addEventListener(name, listener) {
            this._listeners.push(listener);
          },
        }, {
          key: 'removeEventListener',
          value: function removeEventListener(name, listener) {
            const i = this._listeners.indexOf(listener);
            this._listeners.splice(i, 1);
          },
        }, {
          key: 'terminate',
          value: function terminate() {
            this._listeners = [];
          },
        }]);

        return LoopbackPort;
      }());

      var PDFWorker = (function PDFWorkerClosure() {
        let nextFakeWorkerId = 0;
        function getWorkerSrc() {
          if (typeof workerSrc !== 'undefined') {
            return workerSrc;
          }
          if ((0, _dom_utils.getDefaultSetting)('workerSrc')) {
            return (0, _dom_utils.getDefaultSetting)('workerSrc');
          }
          if (pdfjsFilePath) {
            return pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, '.worker$1$2');
          }
          throw new Error('No PDFJS.workerSrc specified');
        }
        let fakeWorkerFilesLoadedCapability = void 0;
        function setupFakeWorkerGlobal() {
          let WorkerMessageHandler;
          if (fakeWorkerFilesLoadedCapability) {
            return fakeWorkerFilesLoadedCapability.promise;
          }
          fakeWorkerFilesLoadedCapability = (0, _util.createPromiseCapability)();
          const loader = fakeWorkerFilesLoader || function (callback) {
            _util.Util.loadScript(getWorkerSrc(), () => {
              callback(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
            });
          };
          loader(fakeWorkerFilesLoadedCapability.resolve);
          return fakeWorkerFilesLoadedCapability.promise;
        }
        function createCDNWrapper(url) {
          const wrapper = `importScripts('${url}');`;
          return URL.createObjectURL(new Blob([wrapper]));
        }
        const pdfWorkerPorts = new WeakMap();
        function PDFWorker(name, port) {
          if (port && pdfWorkerPorts.has(port)) {
            throw new Error('Cannot use more than one PDFWorker per port');
          }
          this.name = name;
          this.destroyed = false;
          this.postMessageTransfers = true;
          this._readyCapability = (0, _util.createPromiseCapability)();
          this._port = null;
          this._webWorker = null;
          this._messageHandler = null;
          if (port) {
            pdfWorkerPorts.set(port, this);
            this._initializeFromPort(port);
            return;
          }
          this._initialize();
        }
        PDFWorker.prototype = {
          get promise() {
            return this._readyCapability.promise;
          },
          get port() {
            return this._port;
          },
          get messageHandler() {
            return this._messageHandler;
          },
          _initializeFromPort: function PDFWorker_initializeFromPort(port) {
            this._port = port;
            this._messageHandler = new _util.MessageHandler('main', 'worker', port);
            this._messageHandler.on('ready', () => {});
            this._readyCapability.resolve();
          },
          _initialize: function PDFWorker_initialize() {
            const _this6 = this;

            if (!isWorkerDisabled && !(0, _dom_utils.getDefaultSetting)('disableWorker') && typeof Worker !== 'undefined') {
              let workerSrc = getWorkerSrc();
              try {
                if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
                  workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
                }
                const worker = new Worker(workerSrc);
                const messageHandler = new _util.MessageHandler('main', 'worker', worker);
                const terminateEarly = function terminateEarly() {
                  worker.removeEventListener('error', onWorkerError);
                  messageHandler.destroy();
                  worker.terminate();
                  if (_this6.destroyed) {
                    _this6._readyCapability.reject(new Error('Worker was destroyed'));
                  } else {
                    _this6._setupFakeWorker();
                  }
                };
                var onWorkerError = function onWorkerError() {
                  if (!_this6._webWorker) {
                    terminateEarly();
                  }
                };
                worker.addEventListener('error', onWorkerError);
                messageHandler.on('test', (data) => {
                  worker.removeEventListener('error', onWorkerError);
                  if (_this6.destroyed) {
                    terminateEarly();
                    return;
                  }
                  const supportTypedArray = data && data.supportTypedArray;
                  if (supportTypedArray) {
                    _this6._messageHandler = messageHandler;
                    _this6._port = worker;
                    _this6._webWorker = worker;
                    if (!data.supportTransfers) {
                      _this6.postMessageTransfers = false;
                      isPostMessageTransfersDisabled = true;
                    }
                    _this6._readyCapability.resolve();
                    messageHandler.send('configure', { verbosity: (0, _util.getVerbosityLevel)() });
                  } else {
                    _this6._setupFakeWorker();
                    messageHandler.destroy();
                    worker.terminate();
                  }
                });
                messageHandler.on('console_log', (data) => {
                  console.log.apply(console, data);
                });
                messageHandler.on('console_error', (data) => {
                  console.error.apply(console, data);
                });
                messageHandler.on('ready', (data) => {
                  worker.removeEventListener('error', onWorkerError);
                  if (_this6.destroyed) {
                    terminateEarly();
                    return;
                  }
                  try {
                    sendTest();
                  } catch (e) {
                    _this6._setupFakeWorker();
                  }
                });
                var sendTest = function sendTest() {
                  const postMessageTransfers = (0, _dom_utils.getDefaultSetting)('postMessageTransfers') && !isPostMessageTransfersDisabled;
                  const testObj = new Uint8Array([postMessageTransfers ? 255 : 0]);
                  try {
                    messageHandler.send('test', testObj, [testObj.buffer]);
                  } catch (ex) {
                    (0, _util.info)('Cannot use postMessage transfers');
                    testObj[0] = 0;
                    messageHandler.send('test', testObj);
                  }
                };
                sendTest();
                return;
              } catch (e) {
                (0, _util.info)('The worker has been disabled.');
              }
            }
            this._setupFakeWorker();
          },
          _setupFakeWorker: function PDFWorker_setupFakeWorker() {
            const _this7 = this;

            if (!isWorkerDisabled && !(0, _dom_utils.getDefaultSetting)('disableWorker')) {
              (0, _util.warn)('Setting up fake worker.');
              isWorkerDisabled = true;
            }
            setupFakeWorkerGlobal().then((WorkerMessageHandler) => {
              if (_this7.destroyed) {
                _this7._readyCapability.reject(new Error('Worker was destroyed'));
                return;
              }
              const isTypedArraysPresent = Uint8Array !== Float32Array;
              const port = new LoopbackPort(isTypedArraysPresent);
              _this7._port = port;
              const id = `fake${nextFakeWorkerId++}`;
              const workerHandler = new _util.MessageHandler(`${id}_worker`, id, port);
              WorkerMessageHandler.setup(workerHandler, port);
              const messageHandler = new _util.MessageHandler(id, `${id}_worker`, port);
              _this7._messageHandler = messageHandler;
              _this7._readyCapability.resolve();
            });
          },
          destroy: function PDFWorker_destroy() {
            this.destroyed = true;
            if (this._webWorker) {
              this._webWorker.terminate();
              this._webWorker = null;
            }
            pdfWorkerPorts.delete(this._port);
            this._port = null;
            if (this._messageHandler) {
              this._messageHandler.destroy();
              this._messageHandler = null;
            }
          },
        };
        PDFWorker.fromPort = function (port) {
          if (pdfWorkerPorts.has(port)) {
            return pdfWorkerPorts.get(port);
          }
          return new PDFWorker(null, port);
        };
        return PDFWorker;
      }());
      var WorkerTransport = (function WorkerTransportClosure() {
        function WorkerTransport(messageHandler, loadingTask, networkStream, CMapReaderFactory) {
          this.messageHandler = messageHandler;
          this.loadingTask = loadingTask;
          this.commonObjs = new PDFObjects();
          this.fontLoader = new _font_loader.FontLoader(loadingTask.docId);
          this.CMapReaderFactory = new CMapReaderFactory({
            baseUrl: (0, _dom_utils.getDefaultSetting)('cMapUrl'),
            isCompressed: (0, _dom_utils.getDefaultSetting)('cMapPacked'),
          });
          this.destroyed = false;
          this.destroyCapability = null;
          this._passwordCapability = null;
          this._networkStream = networkStream;
          this._fullReader = null;
          this._lastProgress = null;
          this.pageCache = [];
          this.pagePromises = [];
          this.downloadInfoCapability = (0, _util.createPromiseCapability)();
          this.setupMessageHandler();
        }
        WorkerTransport.prototype = {
          destroy: function WorkerTransport_destroy() {
            const _this8 = this;

            if (this.destroyCapability) {
              return this.destroyCapability.promise;
            }
            this.destroyed = true;
            this.destroyCapability = (0, _util.createPromiseCapability)();
            if (this._passwordCapability) {
              this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
            }
            const waitOn = [];
            this.pageCache.forEach((page) => {
              if (page) {
                waitOn.push(page._destroy());
              }
            });
            this.pageCache = [];
            this.pagePromises = [];
            const terminated = this.messageHandler.sendWithPromise('Terminate', null);
            waitOn.push(terminated);
            Promise.all(waitOn).then(() => {
              _this8.fontLoader.clear();
              if (_this8._networkStream) {
                _this8._networkStream.cancelAllRequests();
              }
              if (_this8.messageHandler) {
                _this8.messageHandler.destroy();
                _this8.messageHandler = null;
              }
              _this8.destroyCapability.resolve();
            }, this.destroyCapability.reject);
            return this.destroyCapability.promise;
          },
          setupMessageHandler: function WorkerTransport_setupMessageHandler() {
            const { messageHandler } = this;
            const { loadingTask } = this;
            messageHandler.on('GetReader', function (data, sink) {
              const _this9 = this;

              (0, _util.assert)(this._networkStream);
              this._fullReader = this._networkStream.getFullReader();
              this._fullReader.onProgress = function (evt) {
                _this9._lastProgress = {
                  loaded: evt.loaded,
                  total: evt.total,
                };
              };
              sink.onPull = function () {
                _this9._fullReader.read().then((_ref2) => {
                  const { value } = _ref2;
                  const { done } = _ref2;

                  if (done) {
                    sink.close();
                    return;
                  }
                  (0, _util.assert)((0, _util.isArrayBuffer)(value));
                  sink.enqueue(new Uint8Array(value), 1, [value]);
                }).catch((reason) => {
                  sink.error(reason);
                });
              };
              sink.onCancel = function (reason) {
                _this9._fullReader.cancel(reason);
              };
            }, this);
            messageHandler.on('ReaderHeadersReady', function (data) {
              const _this10 = this;

              const headersCapability = (0, _util.createPromiseCapability)();
              const fullReader = this._fullReader;
              fullReader.headersReady.then(() => {
                if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                  if (_this10._lastProgress) {
                    const _loadingTask = _this10.loadingTask;
                    if (_loadingTask.onProgress) {
                      _loadingTask.onProgress(_this10._lastProgress);
                    }
                  }
                  fullReader.onProgress = function (evt) {
                    const { loadingTask } = _this10;
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: evt.loaded,
                        total: evt.total,
                      });
                    }
                  };
                }
                headersCapability.resolve({
                  isStreamingSupported: fullReader.isStreamingSupported,
                  isRangeSupported: fullReader.isRangeSupported,
                  contentLength: fullReader.contentLength,
                });
              }, headersCapability.reject);
              return headersCapability.promise;
            }, this);
            messageHandler.on('GetRangeReader', function (data, sink) {
              (0, _util.assert)(this._networkStream);
              const _rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
              sink.onPull = function () {
                _rangeReader.read().then((_ref3) => {
                  const { value } = _ref3;
                  const { done } = _ref3;

                  if (done) {
                    sink.close();
                    return;
                  }
                  (0, _util.assert)((0, _util.isArrayBuffer)(value));
                  sink.enqueue(new Uint8Array(value), 1, [value]);
                }).catch((reason) => {
                  sink.error(reason);
                });
              };
              sink.onCancel = function (reason) {
                _rangeReader.cancel(reason);
              };
            }, this);
            messageHandler.on('GetDoc', function transportDoc(data) {
              const { pdfInfo } = data;
              this.numPages = data.pdfInfo.numPages;
              const { loadingTask } = this;
              const pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
              this.pdfDocument = pdfDocument;
              loadingTask._capability.resolve(pdfDocument);
            }, this);
            messageHandler.on('PasswordRequest', function transportPasswordRequest(exception) {
              const _this11 = this;

              this._passwordCapability = (0, _util.createPromiseCapability)();
              if (loadingTask.onPassword) {
                const updatePassword = function updatePassword(password) {
                  _this11._passwordCapability.resolve({ password });
                };
                loadingTask.onPassword(updatePassword, exception.code);
              } else {
                this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
              }
              return this._passwordCapability.promise;
            }, this);
            messageHandler.on('PasswordException', (exception) => {
              loadingTask._capability.reject(new _util.PasswordException(exception.message, exception.code));
            }, this);
            messageHandler.on('InvalidPDF', function transportInvalidPDF(exception) {
              this.loadingTask._capability.reject(new _util.InvalidPDFException(exception.message));
            }, this);
            messageHandler.on('MissingPDF', function transportMissingPDF(exception) {
              this.loadingTask._capability.reject(new _util.MissingPDFException(exception.message));
            }, this);
            messageHandler.on('UnexpectedResponse', function transportUnexpectedResponse(exception) {
              this.loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message, exception.status));
            }, this);
            messageHandler.on('UnknownError', function transportUnknownError(exception) {
              this.loadingTask._capability.reject(new _util.UnknownErrorException(exception.message, exception.details));
            }, this);
            messageHandler.on('DataLoaded', function transportPage(data) {
              this.downloadInfoCapability.resolve(data);
            }, this);
            messageHandler.on('PDFManagerReady', (data) => {}, this);
            messageHandler.on('StartRenderPage', function transportRender(data) {
              if (this.destroyed) {
                return;
              }
              const page = this.pageCache[data.pageIndex];
              page.stats.timeEnd('Page Request');
              page._startRenderPage(data.transparency, data.intent);
            }, this);
            messageHandler.on('RenderPageChunk', function transportRender(data) {
              if (this.destroyed) {
                return;
              }
              const page = this.pageCache[data.pageIndex];
              page._renderPageChunk(data.operatorList, data.intent);
            }, this);
            messageHandler.on('commonobj', function transportObj(data) {
              const _this12 = this;

              if (this.destroyed) {
                return;
              }
              const id = data[0];
              const type = data[1];
              if (this.commonObjs.hasData(id)) {
                return;
              }
              switch (type) {
                case 'Font':
                  var exportedData = data[2];
                  if ('error' in exportedData) {
                    const exportedError = exportedData.error;
                    (0, _util.warn)(`Error during font loading: ${exportedError}`);
                    this.commonObjs.resolve(id, exportedError);
                    break;
                  }
                  var fontRegistry = null;
                  if ((0, _dom_utils.getDefaultSetting)('pdfBug') && _util.globalScope.FontInspector && _util.globalScope.FontInspector.enabled) {
                    fontRegistry = {
                      registerFont: function registerFont(font, url) {
                        _util.globalScope.FontInspector.fontAdded(font, url);
                      },
                    };
                  }
                  var font = new _font_loader.FontFaceObject(exportedData, {
                    isEvalSuported: (0, _dom_utils.getDefaultSetting)('isEvalSupported'),
                    disableFontFace: (0, _dom_utils.getDefaultSetting)('disableFontFace'),
                    fontRegistry,
                  });
                  var fontReady = function fontReady(fontObjs) {
                    _this12.commonObjs.resolve(id, font);
                  };
                  this.fontLoader.bind([font], fontReady);
                  break;
                case 'FontPath':
                  this.commonObjs.resolve(id, data[2]);
                  break;
                default:
                  throw new Error(`Got unknown common object type ${type}`);
              }
            }, this);
            messageHandler.on('obj', function transportObj(data) {
              if (this.destroyed) {
                return;
              }
              const id = data[0];
              const pageIndex = data[1];
              const type = data[2];
              const pageProxy = this.pageCache[pageIndex];
              let imageData;
              if (pageProxy.objs.hasData(id)) {
                return;
              }
              switch (type) {
                case 'JpegStream':
                  imageData = data[3];
                  (0, _util.loadJpegStream)(id, imageData, pageProxy.objs);
                  break;
                case 'Image':
                  imageData = data[3];
                  pageProxy.objs.resolve(id, imageData);
                  var MAX_IMAGE_SIZE_TO_STORE = 8000000;
                  if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
                    pageProxy.cleanupAfterRender = true;
                  }
                  break;
                default:
                  throw new Error(`Got unknown object type ${type}`);
              }
            }, this);
            messageHandler.on('DocProgress', function transportDocProgress(data) {
              if (this.destroyed) {
                return;
              }
              const { loadingTask } = this;
              if (loadingTask.onProgress) {
                loadingTask.onProgress({
                  loaded: data.loaded,
                  total: data.total,
                });
              }
            }, this);
            messageHandler.on('PageError', function transportError(data) {
              if (this.destroyed) {
                return;
              }
              const page = this.pageCache[data.pageNum - 1];
              const intentState = page.intentStates[data.intent];
              if (intentState.displayReadyCapability) {
                intentState.displayReadyCapability.reject(data.error);
              } else {
                throw new Error(data.error);
              }
              if (intentState.operatorList) {
                intentState.operatorList.lastChunk = true;
                for (let i = 0; i < intentState.renderTasks.length; i++) {
                  intentState.renderTasks[i].operatorListChanged();
                }
              }
            }, this);
            messageHandler.on('UnsupportedFeature', function transportUnsupportedFeature(data) {
              if (this.destroyed) {
                return;
              }
              const { featureId } = data;
              const { loadingTask } = this;
              if (loadingTask.onUnsupportedFeature) {
                loadingTask.onUnsupportedFeature(featureId);
              }
              _UnsupportedManager.notify(featureId);
            }, this);
            messageHandler.on('JpegDecode', function (data) {
              if (this.destroyed) {
                return Promise.reject(new Error('Worker was destroyed'));
              }
              if (typeof document === 'undefined') {
                return Promise.reject(new Error('"document" is not defined.'));
              }
              const imageUrl = data[0];
              const components = data[1];
              if (components !== 3 && components !== 1) {
                return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
              }
              return new Promise(((resolve, reject) => {
                const img = new Image();
                img.onload = function () {
                  const { width } = img;
                  const { height } = img;
                  const size = width * height;
                  const rgbaLength = size * 4;
                  const buf = new Uint8Array(size * components);
                  const tmpCanvas = document.createElement('canvas');
                  tmpCanvas.width = width;
                  tmpCanvas.height = height;
                  const tmpCtx = tmpCanvas.getContext('2d');
                  tmpCtx.drawImage(img, 0, 0);
                  const { data } = tmpCtx.getImageData(0, 0, width, height);
                  let i; let
                    j;
                  if (components === 3) {
                    for (i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                      buf[j] = data[i];
                      buf[j + 1] = data[i + 1];
                      buf[j + 2] = data[i + 2];
                    }
                  } else if (components === 1) {
                    for (i = 0, j = 0; i < rgbaLength; i += 4, j++) {
                      buf[j] = data[i];
                    }
                  }
                  resolve({
                    data: buf,
                    width,
                    height,
                  });
                };
                img.onerror = function () {
                  reject(new Error('JpegDecode failed to load image'));
                };
                img.src = imageUrl;
              }));
            }, this);
            messageHandler.on('FetchBuiltInCMap', function (data) {
              if (this.destroyed) {
                return Promise.reject(new Error('Worker was destroyed'));
              }
              return this.CMapReaderFactory.fetch({ name: data.name });
            }, this);
          },
          getData: function WorkerTransport_getData() {
            return this.messageHandler.sendWithPromise('GetData', null);
          },
          getPage: function WorkerTransport_getPage(pageNumber, capability) {
            const _this13 = this;

            if (!(0, _util.isInt)(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
              return Promise.reject(new Error('Invalid page request'));
            }
            const pageIndex = pageNumber - 1;
            if (pageIndex in this.pagePromises) {
              return this.pagePromises[pageIndex];
            }
            const promise = this.messageHandler.sendWithPromise('GetPage', { pageIndex }).then((pageInfo) => {
              if (_this13.destroyed) {
                throw new Error('Transport destroyed');
              }
              const page = new PDFPageProxy(pageIndex, pageInfo, _this13);
              _this13.pageCache[pageIndex] = page;
              return page;
            });
            this.pagePromises[pageIndex] = promise;
            return promise;
          },
          getPageIndex: function WorkerTransport_getPageIndexByRef(ref) {
            return this.messageHandler.sendWithPromise('GetPageIndex', { ref }).catch(reason => Promise.reject(new Error(reason)));
          },
          getAnnotations: function WorkerTransport_getAnnotations(pageIndex, intent) {
            return this.messageHandler.sendWithPromise('GetAnnotations', {
              pageIndex,
              intent,
            });
          },
          getDestinations: function WorkerTransport_getDestinations() {
            return this.messageHandler.sendWithPromise('GetDestinations', null);
          },
          getDestination: function WorkerTransport_getDestination(id) {
            return this.messageHandler.sendWithPromise('GetDestination', { id });
          },
          getPageLabels: function WorkerTransport_getPageLabels() {
            return this.messageHandler.sendWithPromise('GetPageLabels', null);
          },
          getPageMode: function getPageMode() {
            return this.messageHandler.sendWithPromise('GetPageMode', null);
          },

          getAttachments: function WorkerTransport_getAttachments() {
            return this.messageHandler.sendWithPromise('GetAttachments', null);
          },
          getJavaScript: function WorkerTransport_getJavaScript() {
            return this.messageHandler.sendWithPromise('GetJavaScript', null);
          },
          getOutline: function WorkerTransport_getOutline() {
            return this.messageHandler.sendWithPromise('GetOutline', null);
          },
          getMetadata: function WorkerTransport_getMetadata() {
            return this.messageHandler.sendWithPromise('GetMetadata', null).then(results => ({
              info: results[0],
              metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
            }));
          },
          getStats: function WorkerTransport_getStats() {
            return this.messageHandler.sendWithPromise('GetStats', null);
          },
          startCleanup: function WorkerTransport_startCleanup() {
            const _this14 = this;

            this.messageHandler.sendWithPromise('Cleanup', null).then(() => {
              for (let i = 0, ii = _this14.pageCache.length; i < ii; i++) {
                const page = _this14.pageCache[i];
                if (page) {
                  page.cleanup();
                }
              }
              _this14.commonObjs.clear();
              _this14.fontLoader.clear();
            });
          },
        };
        return WorkerTransport;
      }());
      var PDFObjects = (function PDFObjectsClosure() {
        function PDFObjects() {
          this.objs = Object.create(null);
        }
        PDFObjects.prototype = {
          ensureObj: function PDFObjects_ensureObj(objId) {
            if (this.objs[objId]) {
              return this.objs[objId];
            }
            const obj = {
              capability: (0, _util.createPromiseCapability)(),
              data: null,
              resolved: false,
            };
            this.objs[objId] = obj;
            return obj;
          },
          get: function PDFObjects_get(objId, callback) {
            if (callback) {
              this.ensureObj(objId).capability.promise.then(callback);
              return null;
            }
            const obj = this.objs[objId];
            if (!obj || !obj.resolved) {
              throw new Error(`Requesting object that isn't resolved yet ${objId}`);
            }
            return obj.data;
          },
          resolve: function PDFObjects_resolve(objId, data) {
            const obj = this.ensureObj(objId);
            obj.resolved = true;
            obj.data = data;
            obj.capability.resolve(data);
          },
          isResolved: function PDFObjects_isResolved(objId) {
            const { objs } = this;
            if (!objs[objId]) {
              return false;
            }
            return objs[objId].resolved;
          },
          hasData: function PDFObjects_hasData(objId) {
            return this.isResolved(objId);
          },
          getData: function PDFObjects_getData(objId) {
            const { objs } = this;
            if (!objs[objId] || !objs[objId].resolved) {
              return null;
            }
            return objs[objId].data;
          },
          clear: function PDFObjects_clear() {
            this.objs = Object.create(null);
          },
        };
        return PDFObjects;
      }());
      const RenderTask = (function RenderTaskClosure() {
        function RenderTask(internalRenderTask) {
          this._internalRenderTask = internalRenderTask;
          this.onContinue = null;
        }
        RenderTask.prototype = {
          get promise() {
            return this._internalRenderTask.capability.promise;
          },
          cancel: function RenderTask_cancel() {
            this._internalRenderTask.cancel();
          },
          then: function RenderTask_then(onFulfilled, onRejected) {
            return this.promise.then.apply(this.promise, arguments);
          },
        };
        return RenderTask;
      }());
      var InternalRenderTask = (function InternalRenderTaskClosure() {
        const canvasInRendering = new WeakMap();
        function InternalRenderTask(callback, params, objs, commonObjs, operatorList, pageNumber, canvasFactory) {
          this.callback = callback;
          this.params = params;
          this.objs = objs;
          this.commonObjs = commonObjs;
          this.operatorListIdx = null;
          this.operatorList = operatorList;
          this.pageNumber = pageNumber;
          this.canvasFactory = canvasFactory;
          this.running = false;
          this.graphicsReadyCallback = null;
          this.graphicsReady = false;
          this.useRequestAnimationFrame = false;
          this.cancelled = false;
          this.capability = (0, _util.createPromiseCapability)();
          this.task = new RenderTask(this);
          this._continueBound = this._continue.bind(this);
          this._scheduleNextBound = this._scheduleNext.bind(this);
          this._nextBound = this._next.bind(this);
          this._canvas = params.canvasContext.canvas;
        }
        InternalRenderTask.prototype = {
          initializeGraphics: function InternalRenderTask_initializeGraphics(transparency) {
            if (this._canvas) {
              if (canvasInRendering.has(this._canvas)) {
                throw new Error('Cannot use the same canvas during multiple render() operations. ' + 'Use different canvas or ensure previous operations were ' + 'cancelled or completed.');
              }
              canvasInRendering.set(this._canvas, this);
            }
            if (this.cancelled) {
              return;
            }
            if ((0, _dom_utils.getDefaultSetting)('pdfBug') && _util.globalScope.StepperManager && _util.globalScope.StepperManager.enabled) {
              this.stepper = _util.globalScope.StepperManager.create(this.pageNumber - 1);
              this.stepper.init(this.operatorList);
              this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
            }
            const { params } = this;
            this.gfx = new _canvas.CanvasGraphics(params.canvasContext, this.commonObjs, this.objs, this.canvasFactory, params.imageLayer);
            this.gfx.beginDrawing({
              transform: params.transform,
              viewport: params.viewport,
              transparency,
              background: params.background,
            });
            this.operatorListIdx = 0;
            this.graphicsReady = true;
            if (this.graphicsReadyCallback) {
              this.graphicsReadyCallback();
            }
          },
          cancel: function InternalRenderTask_cancel() {
            this.running = false;
            this.cancelled = true;
            if (this._canvas) {
              canvasInRendering.delete(this._canvas);
            }
            if ((0, _dom_utils.getDefaultSetting)('pdfjsNext')) {
              this.callback(new _dom_utils.RenderingCancelledException(`Rendering cancelled, page ${this.pageNumber}`, 'canvas'));
            } else {
              this.callback('cancelled');
            }
          },
          operatorListChanged: function InternalRenderTask_operatorListChanged() {
            if (!this.graphicsReady) {
              if (!this.graphicsReadyCallback) {
                this.graphicsReadyCallback = this._continueBound;
              }
              return;
            }
            if (this.stepper) {
              this.stepper.updateOperatorList(this.operatorList);
            }
            if (this.running) {
              return;
            }
            this._continue();
          },
          _continue: function InternalRenderTask__continue() {
            this.running = true;
            if (this.cancelled) {
              return;
            }
            if (this.task.onContinue) {
              this.task.onContinue(this._scheduleNextBound);
            } else {
              this._scheduleNext();
            }
          },
          _scheduleNext: function InternalRenderTask__scheduleNext() {
            if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
              window.requestAnimationFrame(this._nextBound);
            } else {
              Promise.resolve(undefined).then(this._nextBound);
            }
          },
          _next: function InternalRenderTask__next() {
            if (this.cancelled) {
              return;
            }
            this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
            if (this.operatorListIdx === this.operatorList.argsArray.length) {
              this.running = false;
              if (this.operatorList.lastChunk) {
                this.gfx.endDrawing();
                if (this._canvas) {
                  canvasInRendering.delete(this._canvas);
                }
                this.callback();
              }
            }
          },
        };
        return InternalRenderTask;
      }());
      var _UnsupportedManager = (function UnsupportedManagerClosure() {
        const listeners = [];
        return {
          listen: function listen(cb) {
            (0, _util.deprecated)('Global UnsupportedManager.listen is used: ' + ' use PDFDocumentLoadingTask.onUnsupportedFeature instead');
            listeners.push(cb);
          },
          notify: function notify(featureId) {
            for (let i = 0, ii = listeners.length; i < ii; i++) {
              listeners[i](featureId);
            }
          },
        };
      }());
      let version; let
        build;
      {
        exports.version = version = '1.9.426';
        exports.build = build = '2558a58d';
      }
      exports.getDocument = getDocument;
      exports.LoopbackPort = LoopbackPort;
      exports.PDFDataRangeTransport = PDFDataRangeTransport;
      exports.PDFWorker = PDFWorker;
      exports.PDFDocumentProxy = PDFDocumentProxy;
      exports.PDFPageProxy = PDFPageProxy;
      exports.setPDFNetworkStreamClass = setPDFNetworkStreamClass;
      exports._UnsupportedManager = _UnsupportedManager;
      exports.version = version;
      exports.build = build;
      /** */ }),
    /* 3 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.AnnotationLayer = undefined;

      const _dom_utils = __w_pdfjs_require__(1);

      const _util = __w_pdfjs_require__(0);

      function AnnotationElementFactory() {}
      AnnotationElementFactory.prototype = {
        create: function AnnotationElementFactory_create(parameters) {
          const subtype = parameters.data.annotationType;
          switch (subtype) {
            case _util.AnnotationType.LINK:
              return new LinkAnnotationElement(parameters);
            case _util.AnnotationType.TEXT:
              return new TextAnnotationElement(parameters);
            case _util.AnnotationType.WIDGET:
              var { fieldType } = parameters.data;
              switch (fieldType) {
                case 'Tx':
                  return new TextWidgetAnnotationElement(parameters);
                case 'Btn':
                  if (parameters.data.radioButton) {
                    return new RadioButtonWidgetAnnotationElement(parameters);
                  } if (parameters.data.checkBox) {
                    return new CheckboxWidgetAnnotationElement(parameters);
                  }
                  (0, _util.warn)('Unimplemented button widget annotation: pushbutton');
                  break;
                case 'Ch':
                  return new ChoiceWidgetAnnotationElement(parameters);
              }
              return new WidgetAnnotationElement(parameters);
            case _util.AnnotationType.POPUP:
              return new PopupAnnotationElement(parameters);
            case _util.AnnotationType.LINE:
              return new LineAnnotationElement(parameters);
            case _util.AnnotationType.HIGHLIGHT:
              return new HighlightAnnotationElement(parameters);
            case _util.AnnotationType.UNDERLINE:
              return new UnderlineAnnotationElement(parameters);
            case _util.AnnotationType.SQUIGGLY:
              return new SquigglyAnnotationElement(parameters);
            case _util.AnnotationType.STRIKEOUT:
              return new StrikeOutAnnotationElement(parameters);
            case _util.AnnotationType.FILEATTACHMENT:
              return new FileAttachmentAnnotationElement(parameters);
            default:
              return new AnnotationElement(parameters);
          }
        },
      };
      var AnnotationElement = (function AnnotationElementClosure() {
        function AnnotationElement(parameters, isRenderable, ignoreBorder) {
          this.isRenderable = isRenderable || false;
          this.data = parameters.data;
          this.layer = parameters.layer;
          this.page = parameters.page;
          this.viewport = parameters.viewport;
          this.linkService = parameters.linkService;
          this.downloadManager = parameters.downloadManager;
          this.imageResourcesPath = parameters.imageResourcesPath;
          this.renderInteractiveForms = parameters.renderInteractiveForms;
          if (isRenderable) {
            this.container = this._createContainer(ignoreBorder);
          }
        }
        AnnotationElement.prototype = {
          _createContainer: function AnnotationElement_createContainer(ignoreBorder) {
            const { data } = this;
            const { page } = this;
            const { viewport } = this;
            const container = document.createElement('section');
            let width = data.rect[2] - data.rect[0];
            let height = data.rect[3] - data.rect[1];
            container.setAttribute('data-annotation-id', data.id);
            const rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
            _dom_utils.CustomStyle.setProp('transform', container, `matrix(${viewport.transform.join(',')})`);
            _dom_utils.CustomStyle.setProp('transformOrigin', container, `${-rect[0]}px ${-rect[1]}px`);
            if (!ignoreBorder && data.borderStyle.width > 0) {
              container.style.borderWidth = `${data.borderStyle.width}px`;
              if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
                width -= 2 * data.borderStyle.width;
                height -= 2 * data.borderStyle.width;
              }
              const horizontalRadius = data.borderStyle.horizontalCornerRadius;
              const verticalRadius = data.borderStyle.verticalCornerRadius;
              if (horizontalRadius > 0 || verticalRadius > 0) {
                const radius = `${horizontalRadius}px / ${verticalRadius}px`;
                _dom_utils.CustomStyle.setProp('borderRadius', container, radius);
              }
              switch (data.borderStyle.style) {
                case _util.AnnotationBorderStyleType.SOLID:
                  container.style.borderStyle = 'solid';
                  break;
                case _util.AnnotationBorderStyleType.DASHED:
                  container.style.borderStyle = 'dashed';
                  break;
                case _util.AnnotationBorderStyleType.BEVELED:
                  (0, _util.warn)('Unimplemented border style: beveled');
                  break;
                case _util.AnnotationBorderStyleType.INSET:
                  (0, _util.warn)('Unimplemented border style: inset');
                  break;
                case _util.AnnotationBorderStyleType.UNDERLINE:
                  container.style.borderBottomStyle = 'solid';
                  break;
                default:
                  break;
              }
              if (data.color) {
                container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
              } else {
                container.style.borderWidth = 0;
              }
            }
            container.style.left = `${rect[0]}px`;
            container.style.top = `${rect[1]}px`;
            container.style.width = `${width}px`;
            container.style.height = `${height}px`;
            return container;
          },
          _createPopup: function AnnotationElement_createPopup(container, trigger, data) {
            if (!trigger) {
              trigger = document.createElement('div');
              trigger.style.height = container.style.height;
              trigger.style.width = container.style.width;
              container.appendChild(trigger);
            }
            const popupElement = new PopupElement({
              container,
              trigger,
              color: data.color,
              title: data.title,
              contents: data.contents,
              hideWrapper: true,
            });
            const popup = popupElement.render();
            popup.style.left = container.style.width;
            container.appendChild(popup);
          },
          render: function AnnotationElement_render() {
            throw new Error('Abstract method AnnotationElement.render called');
          },
        };
        return AnnotationElement;
      }());
      var LinkAnnotationElement = (function LinkAnnotationElementClosure() {
        function LinkAnnotationElement(parameters) {
          AnnotationElement.call(this, parameters, true);
        }
        _util.Util.inherit(LinkAnnotationElement, AnnotationElement, {
          render: function LinkAnnotationElement_render() {
            this.container.className = 'linkAnnotation';
            const link = document.createElement('a');
            (0, _dom_utils.addLinkAttributes)(link, {
              url: this.data.url,
              target: this.data.newWindow ? _dom_utils.LinkTarget.BLANK : undefined,
            });
            if (!this.data.url) {
              if (this.data.action) {
                this._bindNamedAction(link, this.data.action);
              } else {
                this._bindLink(link, this.data.dest);
              }
            }
            this.container.appendChild(link);
            return this.container;
          },
          _bindLink: function _bindLink(link, destination) {
            const _this = this;

            link.href = this.linkService.getDestinationHash(destination);
            link.onclick = function () {
              if (destination) {
                _this.linkService.navigateTo(destination);
              }
              return false;
            };
            if (destination) {
              link.className = 'internalLink';
            }
          },
          _bindNamedAction: function _bindNamedAction(link, action) {
            const _this2 = this;

            link.href = this.linkService.getAnchorUrl('');
            link.onclick = function () {
              _this2.linkService.executeNamedAction(action);
              return false;
            };
            link.className = 'internalLink';
          },
        });
        return LinkAnnotationElement;
      }());
      var TextAnnotationElement = (function TextAnnotationElementClosure() {
        function TextAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable);
        }
        _util.Util.inherit(TextAnnotationElement, AnnotationElement, {
          render: function TextAnnotationElement_render() {
            this.container.className = 'textAnnotation';
            const image = document.createElement('img');
            image.style.height = this.container.style.height;
            image.style.width = this.container.style.width;
            image.src = `${this.imageResourcesPath}annotation-${this.data.name.toLowerCase()}.svg`;
            image.alt = '[{{type}} Annotation]';
            image.dataset.l10nId = 'text_annotation_type';
            image.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
            if (!this.data.hasPopup) {
              this._createPopup(this.container, image, this.data);
            }
            this.container.appendChild(image);
            return this.container;
          },
        });
        return TextAnnotationElement;
      }());
      var WidgetAnnotationElement = (function WidgetAnnotationElementClosure() {
        function WidgetAnnotationElement(parameters, isRenderable) {
          AnnotationElement.call(this, parameters, isRenderable);
        }
        _util.Util.inherit(WidgetAnnotationElement, AnnotationElement, {
          render: function WidgetAnnotationElement_render() {
            return this.container;
          },
        });
        return WidgetAnnotationElement;
      }());
      var TextWidgetAnnotationElement = (function TextWidgetAnnotationElementClosure() {
        const TEXT_ALIGNMENT = ['left', 'center', 'right'];
        function TextWidgetAnnotationElement(parameters) {
          const isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
          WidgetAnnotationElement.call(this, parameters, isRenderable);
        }
        _util.Util.inherit(TextWidgetAnnotationElement, WidgetAnnotationElement, {
          render: function TextWidgetAnnotationElement_render() {
            this.container.className = 'textWidgetAnnotation';
            let element = null;
            if (this.renderInteractiveForms) {
              if (this.data.multiLine) {
                element = document.createElement('textarea');
                element.textContent = this.data.fieldValue;
              } else {
                element = document.createElement('input');
                element.type = 'text';
                element.setAttribute('value', this.data.fieldValue);
              }
              element.disabled = this.data.readOnly;
              if (this.data.maxLen !== null) {
                element.maxLength = this.data.maxLen;
              }
              if (this.data.comb) {
                const fieldWidth = this.data.rect[2] - this.data.rect[0];
                const combWidth = fieldWidth / this.data.maxLen;
                element.classList.add('comb');
                element.style.letterSpacing = `calc(${combWidth}px - 1ch)`;
              }
            } else {
              element = document.createElement('div');
              element.textContent = this.data.fieldValue;
              element.style.verticalAlign = 'middle';
              element.style.display = 'table-cell';
              let font = null;
              if (this.data.fontRefName) {
                font = this.page.commonObjs.getData(this.data.fontRefName);
              }
              this._setTextStyle(element, font);
            }
            if (this.data.textAlignment !== null) {
              element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
            }
            this.container.appendChild(element);
            return this.container;
          },
          _setTextStyle: function TextWidgetAnnotationElement_setTextStyle(element, font) {
            const { style } = element;
            style.fontSize = `${this.data.fontSize}px`;
            style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';
            if (!font) {
              return;
            }
            style.fontWeight = font.black ? font.bold ? '900' : 'bold' : font.bold ? 'bold' : 'normal';
            style.fontStyle = font.italic ? 'italic' : 'normal';
            const fontFamily = font.loadedName ? `"${font.loadedName}", ` : '';
            const fallbackName = font.fallbackName || 'Helvetica, sans-serif';
            style.fontFamily = fontFamily + fallbackName;
          },
        });
        return TextWidgetAnnotationElement;
      }());
      var CheckboxWidgetAnnotationElement = (function CheckboxWidgetAnnotationElementClosure() {
        function CheckboxWidgetAnnotationElement(parameters) {
          WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
        }
        _util.Util.inherit(CheckboxWidgetAnnotationElement, WidgetAnnotationElement, {
          render: function CheckboxWidgetAnnotationElement_render() {
            this.container.className = 'buttonWidgetAnnotation checkBox';
            const element = document.createElement('input');
            element.disabled = this.data.readOnly;
            element.type = 'checkbox';
            if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
              element.setAttribute('checked', true);
            }
            this.container.appendChild(element);
            return this.container;
          },
        });
        return CheckboxWidgetAnnotationElement;
      }());
      var RadioButtonWidgetAnnotationElement = (function RadioButtonWidgetAnnotationElementClosure() {
        function RadioButtonWidgetAnnotationElement(parameters) {
          WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
        }
        _util.Util.inherit(RadioButtonWidgetAnnotationElement, WidgetAnnotationElement, {
          render: function RadioButtonWidgetAnnotationElement_render() {
            this.container.className = 'buttonWidgetAnnotation radioButton';
            const element = document.createElement('input');
            element.disabled = this.data.readOnly;
            element.type = 'radio';
            element.name = this.data.fieldName;
            if (this.data.fieldValue === this.data.buttonValue) {
              element.setAttribute('checked', true);
            }
            this.container.appendChild(element);
            return this.container;
          },
        });
        return RadioButtonWidgetAnnotationElement;
      }());
      var ChoiceWidgetAnnotationElement = (function ChoiceWidgetAnnotationElementClosure() {
        function ChoiceWidgetAnnotationElement(parameters) {
          WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
        }
        _util.Util.inherit(ChoiceWidgetAnnotationElement, WidgetAnnotationElement, {
          render: function ChoiceWidgetAnnotationElement_render() {
            this.container.className = 'choiceWidgetAnnotation';
            const selectElement = document.createElement('select');
            selectElement.disabled = this.data.readOnly;
            if (!this.data.combo) {
              selectElement.size = this.data.options.length;
              if (this.data.multiSelect) {
                selectElement.multiple = true;
              }
            }
            for (let i = 0, ii = this.data.options.length; i < ii; i++) {
              const option = this.data.options[i];
              const optionElement = document.createElement('option');
              optionElement.textContent = option.displayValue;
              optionElement.value = option.exportValue;
              if (this.data.fieldValue.indexOf(option.displayValue) >= 0) {
                optionElement.setAttribute('selected', true);
              }
              selectElement.appendChild(optionElement);
            }
            this.container.appendChild(selectElement);
            return this.container;
          },
        });
        return ChoiceWidgetAnnotationElement;
      }());
      var PopupAnnotationElement = (function PopupAnnotationElementClosure() {
        const IGNORE_TYPES = ['Line'];
        function PopupAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable);
        }
        _util.Util.inherit(PopupAnnotationElement, AnnotationElement, {
          render: function PopupAnnotationElement_render() {
            this.container.className = 'popupAnnotation';
            if (IGNORE_TYPES.indexOf(this.data.parentType) >= 0) {
              return this.container;
            }
            const selector = `[data-annotation-id="${this.data.parentId}"]`;
            const parentElement = this.layer.querySelector(selector);
            if (!parentElement) {
              return this.container;
            }
            const popup = new PopupElement({
              container: this.container,
              trigger: parentElement,
              color: this.data.color,
              title: this.data.title,
              contents: this.data.contents,
            });
            const parentLeft = parseFloat(parentElement.style.left);
            const parentWidth = parseFloat(parentElement.style.width);
            _dom_utils.CustomStyle.setProp('transformOrigin', this.container, `${-(parentLeft + parentWidth)}px -${parentElement.style.top}`);
            this.container.style.left = `${parentLeft + parentWidth}px`;
            this.container.appendChild(popup.render());
            return this.container;
          },
        });
        return PopupAnnotationElement;
      }());
      var PopupElement = (function PopupElementClosure() {
        const BACKGROUND_ENLIGHT = 0.7;
        function PopupElement(parameters) {
          this.container = parameters.container;
          this.trigger = parameters.trigger;
          this.color = parameters.color;
          this.title = parameters.title;
          this.contents = parameters.contents;
          this.hideWrapper = parameters.hideWrapper || false;
          this.pinned = false;
        }
        PopupElement.prototype = {
          render: function PopupElement_render() {
            const wrapper = document.createElement('div');
            wrapper.className = 'popupWrapper';
            this.hideElement = this.hideWrapper ? wrapper : this.container;
            this.hideElement.setAttribute('hidden', true);
            const popup = document.createElement('div');
            popup.className = 'popup';
            const { color } = this;
            if (color) {
              const r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
              const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
              const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
              popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
            }
            const contents = this._formatContents(this.contents);
            const title = document.createElement('h1');
            title.textContent = this.title;
            this.trigger.addEventListener('click', this._toggle.bind(this));
            this.trigger.addEventListener('mouseover', this._show.bind(this, false));
            this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
            popup.addEventListener('click', this._hide.bind(this, true));
            popup.appendChild(title);
            popup.appendChild(contents);
            wrapper.appendChild(popup);
            return wrapper;
          },
          _formatContents: function PopupElement_formatContents(contents) {
            const p = document.createElement('p');
            const lines = contents.split(/(?:\r\n?|\n)/);
            for (let i = 0, ii = lines.length; i < ii; ++i) {
              const line = lines[i];
              p.appendChild(document.createTextNode(line));
              if (i < ii - 1) {
                p.appendChild(document.createElement('br'));
              }
            }
            return p;
          },
          _toggle: function PopupElement_toggle() {
            if (this.pinned) {
              this._hide(true);
            } else {
              this._show(true);
            }
          },
          _show: function PopupElement_show(pin) {
            if (pin) {
              this.pinned = true;
            }
            if (this.hideElement.hasAttribute('hidden')) {
              this.hideElement.removeAttribute('hidden');
              this.container.style.zIndex += 1;
            }
          },
          _hide: function PopupElement_hide(unpin) {
            if (unpin) {
              this.pinned = false;
            }
            if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
              this.hideElement.setAttribute('hidden', true);
              this.container.style.zIndex -= 1;
            }
          },
        };
        return PopupElement;
      }());
      var LineAnnotationElement = (function LineAnnotationElementClosure() {
        const SVG_NS = 'http://www.w3.org/2000/svg';
        function LineAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable, true);
        }
        _util.Util.inherit(LineAnnotationElement, AnnotationElement, {
          render: function LineAnnotationElement_render() {
            this.container.className = 'lineAnnotation';
            const { data } = this;
            const width = data.rect[2] - data.rect[0];
            const height = data.rect[3] - data.rect[1];
            const svg = document.createElementNS(SVG_NS, 'svg:svg');
            svg.setAttributeNS(null, 'version', '1.1');
            svg.setAttributeNS(null, 'width', `${width}px`);
            svg.setAttributeNS(null, 'height', `${height}px`);
            svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
            svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`);
            const line = document.createElementNS(SVG_NS, 'svg:line');
            line.setAttributeNS(null, 'x1', data.rect[2] - data.lineCoordinates[0]);
            line.setAttributeNS(null, 'y1', data.rect[3] - data.lineCoordinates[1]);
            line.setAttributeNS(null, 'x2', data.rect[2] - data.lineCoordinates[2]);
            line.setAttributeNS(null, 'y2', data.rect[3] - data.lineCoordinates[3]);
            line.setAttributeNS(null, 'stroke-width', data.borderStyle.width);
            line.setAttributeNS(null, 'stroke', 'transparent');
            svg.appendChild(line);
            this.container.append(svg);
            this._createPopup(this.container, line, this.data);
            return this.container;
          },
        });
        return LineAnnotationElement;
      }());
      var HighlightAnnotationElement = (function HighlightAnnotationElementClosure() {
        function HighlightAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable, true);
        }
        _util.Util.inherit(HighlightAnnotationElement, AnnotationElement, {
          render: function HighlightAnnotationElement_render() {
            this.container.className = 'highlightAnnotation';
            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }
            return this.container;
          },
        });
        return HighlightAnnotationElement;
      }());
      var UnderlineAnnotationElement = (function UnderlineAnnotationElementClosure() {
        function UnderlineAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable, true);
        }
        _util.Util.inherit(UnderlineAnnotationElement, AnnotationElement, {
          render: function UnderlineAnnotationElement_render() {
            this.container.className = 'underlineAnnotation';
            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }
            return this.container;
          },
        });
        return UnderlineAnnotationElement;
      }());
      var SquigglyAnnotationElement = (function SquigglyAnnotationElementClosure() {
        function SquigglyAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable, true);
        }
        _util.Util.inherit(SquigglyAnnotationElement, AnnotationElement, {
          render: function SquigglyAnnotationElement_render() {
            this.container.className = 'squigglyAnnotation';
            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }
            return this.container;
          },
        });
        return SquigglyAnnotationElement;
      }());
      var StrikeOutAnnotationElement = (function StrikeOutAnnotationElementClosure() {
        function StrikeOutAnnotationElement(parameters) {
          const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          AnnotationElement.call(this, parameters, isRenderable, true);
        }
        _util.Util.inherit(StrikeOutAnnotationElement, AnnotationElement, {
          render: function StrikeOutAnnotationElement_render() {
            this.container.className = 'strikeoutAnnotation';
            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }
            return this.container;
          },
        });
        return StrikeOutAnnotationElement;
      }());
      var FileAttachmentAnnotationElement = (function FileAttachmentAnnotationElementClosure() {
        function FileAttachmentAnnotationElement(parameters) {
          AnnotationElement.call(this, parameters, true);
          const { file } = this.data;
          this.filename = (0, _dom_utils.getFilenameFromUrl)(file.filename);
          this.content = file.content;
          this.linkService.onFileAttachmentAnnotation({
            id: (0, _util.stringToPDFString)(file.filename),
            filename: file.filename,
            content: file.content,
          });
        }
        _util.Util.inherit(FileAttachmentAnnotationElement, AnnotationElement, {
          render: function FileAttachmentAnnotationElement_render() {
            this.container.className = 'fileAttachmentAnnotation';
            const trigger = document.createElement('div');
            trigger.style.height = this.container.style.height;
            trigger.style.width = this.container.style.width;
            trigger.addEventListener('dblclick', this._download.bind(this));
            if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
              this._createPopup(this.container, trigger, this.data);
            }
            this.container.appendChild(trigger);
            return this.container;
          },
          _download: function FileAttachmentAnnotationElement_download() {
            if (!this.downloadManager) {
              (0, _util.warn)('Download cannot be started due to unavailable download manager');
              return;
            }
            this.downloadManager.downloadData(this.content, this.filename, '');
          },
        });
        return FileAttachmentAnnotationElement;
      }());
      const AnnotationLayer = (function AnnotationLayerClosure() {
        return {
          render: function AnnotationLayer_render(parameters) {
            const annotationElementFactory = new AnnotationElementFactory();
            for (let i = 0, ii = parameters.annotations.length; i < ii; i++) {
              const data = parameters.annotations[i];
              if (!data) {
                continue;
              }
              const element = annotationElementFactory.create({
                data,
                layer: parameters.div,
                page: parameters.page,
                viewport: parameters.viewport,
                linkService: parameters.linkService,
                downloadManager: parameters.downloadManager,
                imageResourcesPath: parameters.imageResourcesPath || (0, _dom_utils.getDefaultSetting)('imageResourcesPath'),
                renderInteractiveForms: parameters.renderInteractiveForms || false,
              });
              if (element.isRenderable) {
                parameters.div.appendChild(element.render());
              }
            }
          },
          update: function AnnotationLayer_update(parameters) {
            for (let i = 0, ii = parameters.annotations.length; i < ii; i++) {
              const data = parameters.annotations[i];
              const element = parameters.div.querySelector(`[data-annotation-id="${data.id}"]`);
              if (element) {
                _dom_utils.CustomStyle.setProp('transform', element, `matrix(${parameters.viewport.transform.join(',')})`);
              }
            }
            parameters.div.removeAttribute('hidden');
          },
        };
      }());
      exports.AnnotationLayer = AnnotationLayer;
      /** */ }),
    /* 4 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.SVGGraphics = undefined;

      const _util = __w_pdfjs_require__(0);

      let SVGGraphics = function SVGGraphics() {
        throw new Error('Not implemented: SVGGraphics');
      };
      {
        const SVG_DEFAULTS = {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fillColor: '#000000',
        };
        const convertImgDataToPng = (function convertImgDataToPngClosure() {
          const PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
          const CHUNK_WRAPPER_SIZE = 12;
          const crcTable = new Int32Array(256);
          for (let i = 0; i < 256; i++) {
            let c = i;
            for (let h = 0; h < 8; h++) {
              if (c & 1) {
                c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
              } else {
                c = c >> 1 & 0x7fffffff;
              }
            }
            crcTable[i] = c;
          }
          function crc32(data, start, end) {
            let crc = -1;
            for (let i = start; i < end; i++) {
              const a = (crc ^ data[i]) & 0xff;
              const b = crcTable[a];
              crc = crc >>> 8 ^ b;
            }
            return crc ^ -1;
          }
          function writePngChunk(type, body, data, offset) {
            let p = offset;
            const len = body.length;
            data[p] = len >> 24 & 0xff;
            data[p + 1] = len >> 16 & 0xff;
            data[p + 2] = len >> 8 & 0xff;
            data[p + 3] = len & 0xff;
            p += 4;
            data[p] = type.charCodeAt(0) & 0xff;
            data[p + 1] = type.charCodeAt(1) & 0xff;
            data[p + 2] = type.charCodeAt(2) & 0xff;
            data[p + 3] = type.charCodeAt(3) & 0xff;
            p += 4;
            data.set(body, p);
            p += body.length;
            const crc = crc32(data, offset + 4, p);
            data[p] = crc >> 24 & 0xff;
            data[p + 1] = crc >> 16 & 0xff;
            data[p + 2] = crc >> 8 & 0xff;
            data[p + 3] = crc & 0xff;
          }
          function adler32(data, start, end) {
            let a = 1;
            let b = 0;
            for (let i = start; i < end; ++i) {
              a = (a + (data[i] & 0xff)) % 65521;
              b = (b + a) % 65521;
            }
            return b << 16 | a;
          }
          function deflateSync(literals) {
            if (!(0, _util.isNodeJS)()) {
              return deflateSyncUncompressed(literals);
            }
            try {
              let input;
              if (parseInt(process.versions.node) >= 8) {
                input = literals;
              } else {
                input = new Buffer(literals);
              }
              const output = require('zlib').deflateSync(input, { level: 9 });
              return output instanceof Uint8Array ? output : new Uint8Array(output);
            } catch (e) {
              (0, _util.warn)(`Not compressing PNG because zlib.deflateSync is unavailable: ${e}`);
            }
            return deflateSyncUncompressed(literals);
          }
          function deflateSyncUncompressed(literals) {
            let len = literals.length;
            const maxBlockLength = 0xFFFF;
            const deflateBlocks = Math.ceil(len / maxBlockLength);
            const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
            let pi = 0;
            idat[pi++] = 0x78;
            idat[pi++] = 0x9c;
            let pos = 0;
            while (len > maxBlockLength) {
              idat[pi++] = 0x00;
              idat[pi++] = 0xff;
              idat[pi++] = 0xff;
              idat[pi++] = 0x00;
              idat[pi++] = 0x00;
              idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
              pi += maxBlockLength;
              pos += maxBlockLength;
              len -= maxBlockLength;
            }
            idat[pi++] = 0x01;
            idat[pi++] = len & 0xff;
            idat[pi++] = len >> 8 & 0xff;
            idat[pi++] = ~len & 0xffff & 0xff;
            idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
            idat.set(literals.subarray(pos), pi);
            pi += literals.length - pos;
            const adler = adler32(literals, 0, literals.length);
            idat[pi++] = adler >> 24 & 0xff;
            idat[pi++] = adler >> 16 & 0xff;
            idat[pi++] = adler >> 8 & 0xff;
            idat[pi++] = adler & 0xff;
            return idat;
          }
          function encode(imgData, kind, forceDataSchema) {
            const { width } = imgData;
            const { height } = imgData;
            let bitDepth; let colorType; let
              lineSize;
            const bytes = imgData.data;
            switch (kind) {
              case _util.ImageKind.GRAYSCALE_1BPP:
                colorType = 0;
                bitDepth = 1;
                lineSize = width + 7 >> 3;
                break;
              case _util.ImageKind.RGB_24BPP:
                colorType = 2;
                bitDepth = 8;
                lineSize = width * 3;
                break;
              case _util.ImageKind.RGBA_32BPP:
                colorType = 6;
                bitDepth = 8;
                lineSize = width * 4;
                break;
              default:
                throw new Error('invalid format');
            }
            const literals = new Uint8Array((1 + lineSize) * height);
            let offsetLiterals = 0;
            let offsetBytes = 0;
            let y; let
              i;
            for (y = 0; y < height; ++y) {
              literals[offsetLiterals++] = 0;
              literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
              offsetBytes += lineSize;
              offsetLiterals += lineSize;
            }
            if (kind === _util.ImageKind.GRAYSCALE_1BPP) {
              offsetLiterals = 0;
              for (y = 0; y < height; y++) {
                offsetLiterals++;
                for (i = 0; i < lineSize; i++) {
                  literals[offsetLiterals++] ^= 0xFF;
                }
              }
            }
            const ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
            const idat = deflateSync(literals);
            const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
            const data = new Uint8Array(pngLength);
            let offset = 0;
            data.set(PNG_HEADER, offset);
            offset += PNG_HEADER.length;
            writePngChunk('IHDR', ihdr, data, offset);
            offset += CHUNK_WRAPPER_SIZE + ihdr.length;
            writePngChunk('IDATA', idat, data, offset);
            offset += CHUNK_WRAPPER_SIZE + idat.length;
            writePngChunk('IEND', new Uint8Array(0), data, offset);
            return (0, _util.createObjectURL)(data, 'image/png', forceDataSchema);
          }
          return function convertImgDataToPng(imgData, forceDataSchema) {
            const kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
            return encode(imgData, kind, forceDataSchema);
          };
        }());
        const SVGExtraState = (function SVGExtraStateClosure() {
          function SVGExtraState() {
            this.fontSizeScale = 1;
            this.fontWeight = SVG_DEFAULTS.fontWeight;
            this.fontSize = 0;
            this.textMatrix = _util.IDENTITY_MATRIX;
            this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRise = 0;
            this.fillColor = SVG_DEFAULTS.fillColor;
            this.strokeColor = '#000000';
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.lineJoin = '';
            this.lineCap = '';
            this.miterLimit = 0;
            this.dashArray = [];
            this.dashPhase = 0;
            this.dependencies = [];
            this.activeClipUrl = null;
            this.clipGroup = null;
            this.maskId = '';
          }
          SVGExtraState.prototype = {
            clone: function SVGExtraState_clone() {
              return Object.create(this);
            },
            setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
              this.x = x;
              this.y = y;
            },
          };
          return SVGExtraState;
        }());
        exports.SVGGraphics = SVGGraphics = (function SVGGraphicsClosure() {
          function opListToTree(opList) {
            let opTree = [];
            const tmp = [];
            const opListLen = opList.length;
            for (let x = 0; x < opListLen; x++) {
              if (opList[x].fn === 'save') {
                opTree.push({
                  fnId: 92,
                  fn: 'group',
                  items: [],
                });
                tmp.push(opTree);
                opTree = opTree[opTree.length - 1].items;
                continue;
              }
              if (opList[x].fn === 'restore') {
                opTree = tmp.pop();
              } else {
                opTree.push(opList[x]);
              }
            }
            return opTree;
          }
          function pf(value) {
            if (value === (value | 0)) {
              return value.toString();
            }
            const s = value.toFixed(10);
            let i = s.length - 1;
            if (s[i] !== '0') {
              return s;
            }
            do {
              i--;
            } while (s[i] === '0');
            return s.substr(0, s[i] === '.' ? i : i + 1);
          }
          function pm(m) {
            if (m[4] === 0 && m[5] === 0) {
              if (m[1] === 0 && m[2] === 0) {
                if (m[0] === 1 && m[3] === 1) {
                  return '';
                }
                return `scale(${pf(m[0])} ${pf(m[3])})`;
              }
              if (m[0] === m[3] && m[1] === -m[2]) {
                const a = Math.acos(m[0]) * 180 / Math.PI;
                return `rotate(${pf(a)})`;
              }
            } else if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
              return `translate(${pf(m[4])} ${pf(m[5])})`;
            }
            return `matrix(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} ${pf(m[5])})`;
          }
          function SVGGraphics(commonObjs, objs, forceDataSchema) {
            this.current = new SVGExtraState();
            this.transformMatrix = _util.IDENTITY_MATRIX;
            this.transformStack = [];
            this.extraStack = [];
            this.commonObjs = commonObjs;
            this.objs = objs;
            this.pendingClip = null;
            this.pendingEOFill = false;
            this.embedFonts = false;
            this.embeddedFonts = Object.create(null);
            this.cssStyle = null;
            this.forceDataSchema = !!forceDataSchema;
          }
          const NS = 'http://www.w3.org/2000/svg';
          const XML_NS = 'http://www.w3.org/XML/1998/namespace';
          const XLINK_NS = 'http://www.w3.org/1999/xlink';
          const LINE_CAP_STYLES = ['butt', 'round', 'square'];
          const LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
          let clipCount = 0;
          let maskCount = 0;
          SVGGraphics.prototype = {
            save: function SVGGraphics_save() {
              this.transformStack.push(this.transformMatrix);
              const old = this.current;
              this.extraStack.push(old);
              this.current = old.clone();
            },
            restore: function SVGGraphics_restore() {
              this.transformMatrix = this.transformStack.pop();
              this.current = this.extraStack.pop();
              this.pendingClip = null;
              this.tgrp = null;
            },
            group: function SVGGraphics_group(items) {
              this.save();
              this.executeOpTree(items);
              this.restore();
            },
            loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
              const _this = this;

              const { fnArray } = operatorList;
              const fnArrayLen = fnArray.length;
              const { argsArray } = operatorList;
              for (let i = 0; i < fnArrayLen; i++) {
                if (_util.OPS.dependency === fnArray[i]) {
                  const deps = argsArray[i];
                  for (let n = 0, nn = deps.length; n < nn; n++) {
                    var obj = deps[n];
                    const common = obj.substring(0, 2) === 'g_';
                    var promise;
                    if (common) {
                      promise = new Promise(((resolve) => {
                        _this.commonObjs.get(obj, resolve);
                      }));
                    } else {
                      promise = new Promise(((resolve) => {
                        _this.objs.get(obj, resolve);
                      }));
                    }
                    this.current.dependencies.push(promise);
                  }
                }
              }
              return Promise.all(this.current.dependencies);
            },
            transform: function SVGGraphics_transform(a, b, c, d, e, f) {
              const transformMatrix = [a, b, c, d, e, f];
              this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
              this.tgrp = null;
            },
            getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
              const _this2 = this;

              this.viewport = viewport;
              const svgElement = this._initialize(viewport);
              return this.loadDependencies(operatorList).then(() => {
                _this2.transformMatrix = _util.IDENTITY_MATRIX;
                const opTree = _this2.convertOpList(operatorList);
                _this2.executeOpTree(opTree);
                return svgElement;
              });
            },
            convertOpList: function SVGGraphics_convertOpList(operatorList) {
              const { argsArray } = operatorList;
              const { fnArray } = operatorList;
              const fnArrayLen = fnArray.length;
              const REVOPS = [];
              const opList = [];
              for (const op in _util.OPS) {
                REVOPS[_util.OPS[op]] = op;
              }
              for (let x = 0; x < fnArrayLen; x++) {
                const fnId = fnArray[x];
                opList.push({
                  fnId,
                  fn: REVOPS[fnId],
                  args: argsArray[x],
                });
              }
              return opListToTree(opList);
            },
            executeOpTree: function SVGGraphics_executeOpTree(opTree) {
              const opTreeLen = opTree.length;
              for (let x = 0; x < opTreeLen; x++) {
                const { fn } = opTree[x];
                const { fnId } = opTree[x];
                const { args } = opTree[x];
                switch (fnId | 0) {
                  case _util.OPS.beginText:
                    this.beginText();
                    break;
                  case _util.OPS.setLeading:
                    this.setLeading(args);
                    break;
                  case _util.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(args[0], args[1]);
                    break;
                  case _util.OPS.setFont:
                    this.setFont(args);
                    break;
                  case _util.OPS.showText:
                    this.showText(args[0]);
                    break;
                  case _util.OPS.showSpacedText:
                    this.showText(args[0]);
                    break;
                  case _util.OPS.endText:
                    this.endText();
                    break;
                  case _util.OPS.moveText:
                    this.moveText(args[0], args[1]);
                    break;
                  case _util.OPS.setCharSpacing:
                    this.setCharSpacing(args[0]);
                    break;
                  case _util.OPS.setWordSpacing:
                    this.setWordSpacing(args[0]);
                    break;
                  case _util.OPS.setHScale:
                    this.setHScale(args[0]);
                    break;
                  case _util.OPS.setTextMatrix:
                    this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
                  case _util.OPS.setLineWidth:
                    this.setLineWidth(args[0]);
                    break;
                  case _util.OPS.setLineJoin:
                    this.setLineJoin(args[0]);
                    break;
                  case _util.OPS.setLineCap:
                    this.setLineCap(args[0]);
                    break;
                  case _util.OPS.setMiterLimit:
                    this.setMiterLimit(args[0]);
                    break;
                  case _util.OPS.setFillRGBColor:
                    this.setFillRGBColor(args[0], args[1], args[2]);
                    break;
                  case _util.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(args[0], args[1], args[2]);
                    break;
                  case _util.OPS.setDash:
                    this.setDash(args[0], args[1]);
                    break;
                  case _util.OPS.setGState:
                    this.setGState(args[0]);
                    break;
                  case _util.OPS.fill:
                    this.fill();
                    break;
                  case _util.OPS.eoFill:
                    this.eoFill();
                    break;
                  case _util.OPS.stroke:
                    this.stroke();
                    break;
                  case _util.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case _util.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case _util.OPS.clip:
                    this.clip('nonzero');
                    break;
                  case _util.OPS.eoClip:
                    this.clip('evenodd');
                    break;
                  case _util.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case _util.OPS.paintJpegXObject:
                    this.paintJpegXObject(args[0], args[1], args[2]);
                    break;
                  case _util.OPS.paintImageXObject:
                    this.paintImageXObject(args[0]);
                    break;
                  case _util.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(args[0]);
                    break;
                  case _util.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(args[0]);
                    break;
                  case _util.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(args[0], args[1]);
                    break;
                  case _util.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case _util.OPS.closePath:
                    this.closePath();
                    break;
                  case _util.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case _util.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case _util.OPS.nextLine:
                    this.nextLine();
                    break;
                  case _util.OPS.transform:
                    this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
                  case _util.OPS.constructPath:
                    this.constructPath(args[0], args[1]);
                    break;
                  case _util.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(opTree[x].items);
                    break;
                  default:
                    (0, _util.warn)(`Unimplemented operator ${fn}`);
                    break;
                }
              }
            },
            setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
              this.current.wordSpacing = wordSpacing;
            },
            setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
              this.current.charSpacing = charSpacing;
            },
            nextLine: function SVGGraphics_nextLine() {
              this.moveText(0, this.current.leading);
            },
            setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
              const { current } = this;
              this.current.textMatrix = this.current.lineMatrix = [a, b, c, d, e, f];
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
              current.xcoords = [];
              current.tspan = document.createElementNS(NS, 'svg:tspan');
              current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
              current.tspan.setAttributeNS(null, 'font-size', `${pf(current.fontSize)}px`);
              current.tspan.setAttributeNS(null, 'y', pf(-current.y));
              current.txtElement = document.createElementNS(NS, 'svg:text');
              current.txtElement.appendChild(current.tspan);
            },
            beginText: function SVGGraphics_beginText() {
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
              this.current.textMatrix = _util.IDENTITY_MATRIX;
              this.current.lineMatrix = _util.IDENTITY_MATRIX;
              this.current.tspan = document.createElementNS(NS, 'svg:tspan');
              this.current.txtElement = document.createElementNS(NS, 'svg:text');
              this.current.txtgrp = document.createElementNS(NS, 'svg:g');
              this.current.xcoords = [];
            },
            moveText: function SVGGraphics_moveText(x, y) {
              const { current } = this;
              this.current.x = this.current.lineX += x;
              this.current.y = this.current.lineY += y;
              current.xcoords = [];
              current.tspan = document.createElementNS(NS, 'svg:tspan');
              current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
              current.tspan.setAttributeNS(null, 'font-size', `${pf(current.fontSize)}px`);
              current.tspan.setAttributeNS(null, 'y', pf(-current.y));
            },
            showText: function SVGGraphics_showText(glyphs) {
              const { current } = this;
              const { font } = current;
              const { fontSize } = current;
              if (fontSize === 0) {
                return;
              }
              const { charSpacing } = current;
              const { wordSpacing } = current;
              const { fontDirection } = current;
              const textHScale = current.textHScale * fontDirection;
              const glyphsLength = glyphs.length;
              const { vertical } = font;
              const widthAdvanceScale = fontSize * current.fontMatrix[0];
              let x = 0;
              let i;
              for (i = 0; i < glyphsLength; ++i) {
                const glyph = glyphs[i];
                if (glyph === null) {
                  x += fontDirection * wordSpacing;
                  continue;
                } else if ((0, _util.isNum)(glyph)) {
                  x += -glyph * fontSize * 0.001;
                  continue;
                }
                current.xcoords.push(current.x + x * textHScale);
                const { width } = glyph;
                const character = glyph.fontChar;
                const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                const charWidth = width * widthAdvanceScale + spacing * fontDirection;
                x += charWidth;
                current.tspan.textContent += character;
              }
              if (vertical) {
                current.y -= x * textHScale;
              } else {
                current.x += x * textHScale;
              }
              current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
              current.tspan.setAttributeNS(null, 'y', pf(-current.y));
              current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
              current.tspan.setAttributeNS(null, 'font-size', `${pf(current.fontSize)}px`);
              if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
              }
              if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
              }
              if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                current.tspan.setAttributeNS(null, 'fill', current.fillColor);
              }
              current.txtElement.setAttributeNS(null, 'transform', `${pm(current.textMatrix)} scale(1, -1)`);
              current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
              current.txtElement.appendChild(current.tspan);
              current.txtgrp.appendChild(current.txtElement);
              this._ensureTransformGroup().appendChild(current.txtElement);
            },
            setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
              this.setLeading(-y);
              this.moveText(x, y);
            },
            addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
              if (!this.cssStyle) {
                this.cssStyle = document.createElementNS(NS, 'svg:style');
                this.cssStyle.setAttributeNS(null, 'type', 'text/css');
                this.defs.appendChild(this.cssStyle);
              }
              const url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += `@font-face { font-family: "${fontObj.loadedName}";` + ` src: url(${url}); }\n`;
            },
            setFont: function SVGGraphics_setFont(details) {
              const { current } = this;
              const fontObj = this.commonObjs.get(details[0]);
              let size = details[1];
              this.current.font = fontObj;
              if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
                this.addFontStyle(fontObj);
                this.embeddedFonts[fontObj.loadedName] = fontObj;
              }
              current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
              const bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
              const italic = fontObj.italic ? 'italic' : 'normal';
              if (size < 0) {
                size = -size;
                current.fontDirection = -1;
              } else {
                current.fontDirection = 1;
              }
              current.fontSize = size;
              current.fontFamily = fontObj.loadedName;
              current.fontWeight = bold;
              current.fontStyle = italic;
              current.tspan = document.createElementNS(NS, 'svg:tspan');
              current.tspan.setAttributeNS(null, 'y', pf(-current.y));
              current.xcoords = [];
            },
            endText: function SVGGraphics_endText() {},
            setLineWidth: function SVGGraphics_setLineWidth(width) {
              this.current.lineWidth = width;
            },
            setLineCap: function SVGGraphics_setLineCap(style) {
              this.current.lineCap = LINE_CAP_STYLES[style];
            },
            setLineJoin: function SVGGraphics_setLineJoin(style) {
              this.current.lineJoin = LINE_JOIN_STYLES[style];
            },
            setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
              this.current.miterLimit = limit;
            },
            setStrokeAlpha: function SVGGraphics_setStrokeAlpha(strokeAlpha) {
              this.current.strokeAlpha = strokeAlpha;
            },
            setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
              const color = _util.Util.makeCssRgb(r, g, b);
              this.current.strokeColor = color;
            },
            setFillAlpha: function SVGGraphics_setFillAlpha(fillAlpha) {
              this.current.fillAlpha = fillAlpha;
            },
            setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
              const color = _util.Util.makeCssRgb(r, g, b);
              this.current.fillColor = color;
              this.current.tspan = document.createElementNS(NS, 'svg:tspan');
              this.current.xcoords = [];
            },
            setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
              this.current.dashArray = dashArray;
              this.current.dashPhase = dashPhase;
            },
            constructPath: function SVGGraphics_constructPath(ops, args) {
              const { current } = this;
              let { x } = current;
              let { y } = current;
              current.path = document.createElementNS(NS, 'svg:path');
              const d = [];
              const opLength = ops.length;
              for (let i = 0, j = 0; i < opLength; i++) {
                switch (ops[i] | 0) {
                  case _util.OPS.rectangle:
                    x = args[j++];
                    y = args[j++];
                    var width = args[j++];
                    var height = args[j++];
                    var xw = x + width;
                    var yh = y + height;
                    d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
                    break;
                  case _util.OPS.moveTo:
                    x = args[j++];
                    y = args[j++];
                    d.push('M', pf(x), pf(y));
                    break;
                  case _util.OPS.lineTo:
                    x = args[j++];
                    y = args[j++];
                    d.push('L', pf(x), pf(y));
                    break;
                  case _util.OPS.curveTo:
                    x = args[j + 4];
                    y = args[j + 5];
                    d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                    j += 6;
                    break;
                  case _util.OPS.curveTo2:
                    x = args[j + 2];
                    y = args[j + 3];
                    d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                    j += 4;
                    break;
                  case _util.OPS.curveTo3:
                    x = args[j + 2];
                    y = args[j + 3];
                    d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                    j += 4;
                    break;
                  case _util.OPS.closePath:
                    d.push('Z');
                    break;
                }
              }
              current.path.setAttributeNS(null, 'd', d.join(' '));
              current.path.setAttributeNS(null, 'fill', 'none');
              this._ensureTransformGroup().appendChild(current.path);
              current.element = current.path;
              current.setCurrentPoint(x, y);
            },
            endPath: function SVGGraphics_endPath() {
              if (!this.pendingClip) {
                return;
              }
              const { current } = this;
              const clipId = `clippath${clipCount}`;
              clipCount++;
              const clipPath = document.createElementNS(NS, 'svg:clipPath');
              clipPath.setAttributeNS(null, 'id', clipId);
              clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
              const clipElement = current.element.cloneNode();
              if (this.pendingClip === 'evenodd') {
                clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
              } else {
                clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
              }
              this.pendingClip = null;
              clipPath.appendChild(clipElement);
              this.defs.appendChild(clipPath);
              if (current.activeClipUrl) {
                current.clipGroup = null;
                this.extraStack.forEach((prev) => {
                  prev.clipGroup = null;
                });
              }
              current.activeClipUrl = `url(#${clipId})`;
              this.tgrp = null;
            },
            clip: function SVGGraphics_clip(type) {
              this.pendingClip = type;
            },
            closePath: function SVGGraphics_closePath() {
              const { current } = this;
              let d = current.path.getAttributeNS(null, 'd');
              d += 'Z';
              current.path.setAttributeNS(null, 'd', d);
            },
            setLeading: function SVGGraphics_setLeading(leading) {
              this.current.leading = -leading;
            },
            setTextRise: function SVGGraphics_setTextRise(textRise) {
              this.current.textRise = textRise;
            },
            setHScale: function SVGGraphics_setHScale(scale) {
              this.current.textHScale = scale / 100;
            },
            setGState: function SVGGraphics_setGState(states) {
              for (let i = 0, ii = states.length; i < ii; i++) {
                const state = states[i];
                const key = state[0];
                const value = state[1];
                switch (key) {
                  case 'LW':
                    this.setLineWidth(value);
                    break;
                  case 'LC':
                    this.setLineCap(value);
                    break;
                  case 'LJ':
                    this.setLineJoin(value);
                    break;
                  case 'ML':
                    this.setMiterLimit(value);
                    break;
                  case 'D':
                    this.setDash(value[0], value[1]);
                    break;
                  case 'Font':
                    this.setFont(value);
                    break;
                  case 'CA':
                    this.setStrokeAlpha(value);
                    break;
                  case 'ca':
                    this.setFillAlpha(value);
                    break;
                  default:
                    (0, _util.warn)(`Unimplemented graphic state ${key}`);
                    break;
                }
              }
            },
            fill: function SVGGraphics_fill() {
              const { current } = this;
              current.element.setAttributeNS(null, 'fill', current.fillColor);
              current.element.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
            },
            stroke: function SVGGraphics_stroke() {
              const { current } = this;
              current.element.setAttributeNS(null, 'stroke', current.strokeColor);
              current.element.setAttributeNS(null, 'stroke-opacity', current.strokeAlpha);
              current.element.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
              current.element.setAttributeNS(null, 'stroke-linecap', current.lineCap);
              current.element.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
              current.element.setAttributeNS(null, 'stroke-width', `${pf(current.lineWidth)}px`);
              current.element.setAttributeNS(null, 'stroke-dasharray', current.dashArray.map(pf).join(' '));
              current.element.setAttributeNS(null, 'stroke-dashoffset', `${pf(current.dashPhase)}px`);
              current.element.setAttributeNS(null, 'fill', 'none');
            },
            eoFill: function SVGGraphics_eoFill() {
              this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
              this.fill();
            },
            fillStroke: function SVGGraphics_fillStroke() {
              this.stroke();
              this.fill();
            },
            eoFillStroke: function SVGGraphics_eoFillStroke() {
              this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
              this.fillStroke();
            },
            closeStroke: function SVGGraphics_closeStroke() {
              this.closePath();
              this.stroke();
            },
            closeFillStroke: function SVGGraphics_closeFillStroke() {
              this.closePath();
              this.fillStroke();
            },
            paintSolidColorImageMask: function SVGGraphics_paintSolidColorImageMask() {
              const { current } = this;
              const rect = document.createElementNS(NS, 'svg:rect');
              rect.setAttributeNS(null, 'x', '0');
              rect.setAttributeNS(null, 'y', '0');
              rect.setAttributeNS(null, 'width', '1px');
              rect.setAttributeNS(null, 'height', '1px');
              rect.setAttributeNS(null, 'fill', current.fillColor);
              this._ensureTransformGroup().appendChild(rect);
            },
            paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
              const imgObj = this.objs.get(objId);
              const imgEl = document.createElementNS(NS, 'svg:image');
              imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
              imgEl.setAttributeNS(null, 'width', pf(w));
              imgEl.setAttributeNS(null, 'height', pf(h));
              imgEl.setAttributeNS(null, 'x', '0');
              imgEl.setAttributeNS(null, 'y', pf(-h));
              imgEl.setAttributeNS(null, 'transform', `scale(${pf(1 / w)} ${pf(-1 / h)})`);
              this._ensureTransformGroup().appendChild(imgEl);
            },
            paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
              const imgData = this.objs.get(objId);
              if (!imgData) {
                (0, _util.warn)('Dependent image isn\'t ready yet');
                return;
              }
              this.paintInlineImageXObject(imgData);
            },
            paintInlineImageXObject: function SVGGraphics_paintInlineImageXObject(imgData, mask) {
              const { width } = imgData;
              const { height } = imgData;
              const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema);
              const cliprect = document.createElementNS(NS, 'svg:rect');
              cliprect.setAttributeNS(null, 'x', '0');
              cliprect.setAttributeNS(null, 'y', '0');
              cliprect.setAttributeNS(null, 'width', pf(width));
              cliprect.setAttributeNS(null, 'height', pf(height));
              this.current.element = cliprect;
              this.clip('nonzero');
              const imgEl = document.createElementNS(NS, 'svg:image');
              imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
              imgEl.setAttributeNS(null, 'x', '0');
              imgEl.setAttributeNS(null, 'y', pf(-height));
              imgEl.setAttributeNS(null, 'width', `${pf(width)}px`);
              imgEl.setAttributeNS(null, 'height', `${pf(height)}px`);
              imgEl.setAttributeNS(null, 'transform', `scale(${pf(1 / width)} ${pf(-1 / height)})`);
              if (mask) {
                mask.appendChild(imgEl);
              } else {
                this._ensureTransformGroup().appendChild(imgEl);
              }
            },
            paintImageMaskXObject: function SVGGraphics_paintImageMaskXObject(imgData) {
              const { current } = this;
              const { width } = imgData;
              const { height } = imgData;
              const { fillColor } = current;
              current.maskId = `mask${maskCount++}`;
              const mask = document.createElementNS(NS, 'svg:mask');
              mask.setAttributeNS(null, 'id', current.maskId);
              const rect = document.createElementNS(NS, 'svg:rect');
              rect.setAttributeNS(null, 'x', '0');
              rect.setAttributeNS(null, 'y', '0');
              rect.setAttributeNS(null, 'width', pf(width));
              rect.setAttributeNS(null, 'height', pf(height));
              rect.setAttributeNS(null, 'fill', fillColor);
              rect.setAttributeNS(null, 'mask', `url(#${current.maskId})`);
              this.defs.appendChild(mask);
              this._ensureTransformGroup().appendChild(rect);
              this.paintInlineImageXObject(imgData, mask);
            },
            paintFormXObjectBegin: function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
              if ((0, _util.isArray)(matrix) && matrix.length === 6) {
                this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
              }
              if ((0, _util.isArray)(bbox) && bbox.length === 4) {
                const width = bbox[2] - bbox[0];
                const height = bbox[3] - bbox[1];
                const cliprect = document.createElementNS(NS, 'svg:rect');
                cliprect.setAttributeNS(null, 'x', bbox[0]);
                cliprect.setAttributeNS(null, 'y', bbox[1]);
                cliprect.setAttributeNS(null, 'width', pf(width));
                cliprect.setAttributeNS(null, 'height', pf(height));
                this.current.element = cliprect;
                this.clip('nonzero');
                this.endPath();
              }
            },
            paintFormXObjectEnd: function SVGGraphics_paintFormXObjectEnd() {},
            _initialize: function SVGGraphics_initialize(viewport) {
              const svg = document.createElementNS(NS, 'svg:svg');
              svg.setAttributeNS(null, 'version', '1.1');
              svg.setAttributeNS(null, 'width', `${viewport.width}px`);
              svg.setAttributeNS(null, 'height', `${viewport.height}px`);
              svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
              svg.setAttributeNS(null, 'viewBox', `0 0 ${viewport.width} ${viewport.height}`);
              const definitions = document.createElementNS(NS, 'svg:defs');
              svg.appendChild(definitions);
              this.defs = definitions;
              const rootGroup = document.createElementNS(NS, 'svg:g');
              rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
              svg.appendChild(rootGroup);
              this.svg = rootGroup;
              return svg;
            },
            _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
              if (!this.current.clipGroup) {
                const clipGroup = document.createElementNS(NS, 'svg:g');
                clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
                this.svg.appendChild(clipGroup);
                this.current.clipGroup = clipGroup;
              }
              return this.current.clipGroup;
            },
            _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
              if (!this.tgrp) {
                this.tgrp = document.createElementNS(NS, 'svg:g');
                this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
                if (this.current.activeClipUrl) {
                  this._ensureClipGroup().appendChild(this.tgrp);
                } else {
                  this.svg.appendChild(this.tgrp);
                }
              }
              return this.tgrp;
            },
          };
          return SVGGraphics;
        }());
      }
      exports.SVGGraphics = SVGGraphics;
      /** */ }),
    /* 5 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.renderTextLayer = undefined;

      const _util = __w_pdfjs_require__(0);

      const _dom_utils = __w_pdfjs_require__(1);

      const renderTextLayer = (function renderTextLayerClosure() {
        const MAX_TEXT_DIVS_TO_RENDER = 100000;
        const NonWhitespaceRegexp = /\S/;
        function isAllWhitespace(str) {
          return !NonWhitespaceRegexp.test(str);
        }
        const styleBuf = ['left: ', 0, 'px; top: ', 0, 'px; font-size: ', 0, 'px; font-family: ', '', ';'];
        function appendText(task, geom, styles) {
          const textDiv = document.createElement('div');
          const textDivProperties = {
            style: null,
            angle: 0,
            canvasWidth: 0,
            isWhitespace: false,
            originalTransform: null,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            scale: 1,
          };
          task._textDivs.push(textDiv);
          if (isAllWhitespace(geom.str)) {
            textDivProperties.isWhitespace = true;
            task._textDivProperties.set(textDiv, textDivProperties);
            return;
          }
          const tx = _util.Util.transform(task._viewport.transform, geom.transform);
          let angle = Math.atan2(tx[1], tx[0]);
          const style = styles[geom.fontName];
          if (style.vertical) {
            angle += Math.PI / 2;
          }
          const fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
          let fontAscent = fontHeight;
          if (style.ascent) {
            fontAscent = style.ascent * fontAscent;
          } else if (style.descent) {
            fontAscent = (1 + style.descent) * fontAscent;
          }
          let left;
          let top;
          if (angle === 0) {
            left = tx[4];
            top = tx[5] - fontAscent;
          } else {
            left = tx[4] + fontAscent * Math.sin(angle);
            top = tx[5] - fontAscent * Math.cos(angle);
          }
          styleBuf[1] = left;
          styleBuf[3] = top;
          styleBuf[5] = fontHeight;
          styleBuf[7] = style.fontFamily;
          textDivProperties.style = styleBuf.join('');
          textDiv.setAttribute('style', textDivProperties.style);
          textDiv.textContent = geom.str;
          if ((0, _dom_utils.getDefaultSetting)('pdfBug')) {
            textDiv.dataset.fontName = geom.fontName;
          }
          if (angle !== 0) {
            textDivProperties.angle = angle * (180 / Math.PI);
          }
          if (geom.str.length > 1) {
            if (style.vertical) {
              textDivProperties.canvasWidth = geom.height * task._viewport.scale;
            } else {
              textDivProperties.canvasWidth = geom.width * task._viewport.scale;
            }
          }
          task._textDivProperties.set(textDiv, textDivProperties);
          if (task._textContentStream) {
            task._layoutText(textDiv);
          }
          if (task._enhanceTextSelection) {
            let angleCos = 1;
            let angleSin = 0;
            if (angle !== 0) {
              angleCos = Math.cos(angle);
              angleSin = Math.sin(angle);
            }
            const divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
            const divHeight = fontHeight;
            let m; let
              b;
            if (angle !== 0) {
              m = [angleCos, angleSin, -angleSin, angleCos, left, top];
              b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
            } else {
              b = [left, top, left + divWidth, top + divHeight];
            }
            task._bounds.push({
              left: b[0],
              top: b[1],
              right: b[2],
              bottom: b[3],
              div: textDiv,
              size: [divWidth, divHeight],
              m,
            });
          }
        }
        function render(task) {
          if (task._canceled) {
            return;
          }
          const textDivs = task._textDivs;
          const capability = task._capability;
          const textDivsLength = textDivs.length;
          if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
            task._renderingDone = true;
            capability.resolve();
            return;
          }
          if (!task._textContentStream) {
            for (let i = 0; i < textDivsLength; i++) {
              task._layoutText(textDivs[i]);
            }
          }
          task._renderingDone = true;
          capability.resolve();
        }
        function expand(task) {
          const bounds = task._bounds;
          const viewport = task._viewport;
          const expanded = expandBounds(viewport.width, viewport.height, bounds);
          for (let i = 0; i < expanded.length; i++) {
            const { div } = bounds[i];
            const divProperties = task._textDivProperties.get(div);
            if (divProperties.angle === 0) {
              divProperties.paddingLeft = bounds[i].left - expanded[i].left;
              divProperties.paddingTop = bounds[i].top - expanded[i].top;
              divProperties.paddingRight = expanded[i].right - bounds[i].right;
              divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
              task._textDivProperties.set(div, divProperties);
              continue;
            }
            var e = expanded[i];
            const b = bounds[i];
            var { m } = b;
            var c = m[0];
            var s = m[1];
            const points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
            var ts = new Float64Array(64);
            points.forEach((p, i) => {
              const t = _util.Util.applyTransform(p, m);
              ts[i + 0] = c && (e.left - t[0]) / c;
              ts[i + 4] = s && (e.top - t[1]) / s;
              ts[i + 8] = c && (e.right - t[0]) / c;
              ts[i + 12] = s && (e.bottom - t[1]) / s;
              ts[i + 16] = s && (e.left - t[0]) / -s;
              ts[i + 20] = c && (e.top - t[1]) / c;
              ts[i + 24] = s && (e.right - t[0]) / -s;
              ts[i + 28] = c && (e.bottom - t[1]) / c;
              ts[i + 32] = c && (e.left - t[0]) / -c;
              ts[i + 36] = s && (e.top - t[1]) / -s;
              ts[i + 40] = c && (e.right - t[0]) / -c;
              ts[i + 44] = s && (e.bottom - t[1]) / -s;
              ts[i + 48] = s && (e.left - t[0]) / s;
              ts[i + 52] = c && (e.top - t[1]) / -c;
              ts[i + 56] = s && (e.right - t[0]) / s;
              ts[i + 60] = c && (e.bottom - t[1]) / -c;
            });
            const findPositiveMin = function findPositiveMin(ts, offset, count) {
              let result = 0;
              for (let i = 0; i < count; i++) {
                const t = ts[offset++];
                if (t > 0) {
                  result = result ? Math.min(t, result) : t;
                }
              }
              return result;
            };
            const boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
            divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
            divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
            divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
            divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
            task._textDivProperties.set(div, divProperties);
          }
        }
        function expandBounds(width, height, boxes) {
          const bounds = boxes.map((box, i) => ({
            x1: box.left,
            y1: box.top,
            x2: box.right,
            y2: box.bottom,
            index: i,
            x1New: undefined,
            x2New: undefined,
          }));
          expandBoundsLTR(width, bounds);
          const expanded = new Array(boxes.length);
          bounds.forEach((b) => {
            const i = b.index;
            expanded[i] = {
              left: b.x1New,
              top: 0,
              right: b.x2New,
              bottom: 0,
            };
          });
          boxes.map((box, i) => {
            const e = expanded[i];
            const b = bounds[i];
            b.x1 = box.top;
            b.y1 = width - e.right;
            b.x2 = box.bottom;
            b.y2 = width - e.left;
            b.index = i;
            b.x1New = undefined;
            b.x2New = undefined;
          });
          expandBoundsLTR(height, bounds);
          bounds.forEach((b) => {
            const i = b.index;
            expanded[i].top = b.x1New;
            expanded[i].bottom = b.x2New;
          });
          return expanded;
        }
        function expandBoundsLTR(width, bounds) {
          bounds.sort((a, b) => a.x1 - b.x1 || a.index - b.index);
          const fakeBoundary = {
            x1: -Infinity,
            y1: -Infinity,
            x2: 0,
            y2: Infinity,
            index: -1,
            x1New: 0,
            x2New: 0,
          };
          const horizon = [{
            start: -Infinity,
            end: Infinity,
            boundary: fakeBoundary,
          }];
          bounds.forEach((boundary) => {
            let i = 0;
            while (i < horizon.length && horizon[i].end <= boundary.y1) {
              i++;
            }
            let j = horizon.length - 1;
            while (j >= 0 && horizon[j].start >= boundary.y2) {
              j--;
            }
            let horizonPart; let
              affectedBoundary;
            let q;
            let k;
            let maxXNew = -Infinity;
            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              var xNew;
              if (affectedBoundary.x2 > boundary.x1) {
                xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
              } else if (affectedBoundary.x2New === undefined) {
                xNew = (affectedBoundary.x2 + boundary.x1) / 2;
              } else {
                xNew = affectedBoundary.x2New;
              }
              if (xNew > maxXNew) {
                maxXNew = xNew;
              }
            }
            boundary.x1New = maxXNew;
            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              if (affectedBoundary.x2New === undefined) {
                if (affectedBoundary.x2 > boundary.x1) {
                  if (affectedBoundary.index > boundary.index) {
                    affectedBoundary.x2New = affectedBoundary.x2;
                  }
                } else {
                  affectedBoundary.x2New = maxXNew;
                }
              } else if (affectedBoundary.x2New > maxXNew) {
                affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
              }
            }
            const changedHorizon = [];
            let lastBoundary = null;
            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              const useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
              if (lastBoundary === useBoundary) {
                changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
              } else {
                changedHorizon.push({
                  start: horizonPart.start,
                  end: horizonPart.end,
                  boundary: useBoundary,
                });
                lastBoundary = useBoundary;
              }
            }
            if (horizon[i].start < boundary.y1) {
              changedHorizon[0].start = boundary.y1;
              changedHorizon.unshift({
                start: horizon[i].start,
                end: boundary.y1,
                boundary: horizon[i].boundary,
              });
            }
            if (boundary.y2 < horizon[j].end) {
              changedHorizon[changedHorizon.length - 1].end = boundary.y2;
              changedHorizon.push({
                start: boundary.y2,
                end: horizon[j].end,
                boundary: horizon[j].boundary,
              });
            }
            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              if (affectedBoundary.x2New !== undefined) {
                continue;
              }
              let used = false;
              for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                used = horizon[k].boundary === affectedBoundary;
              }
              for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                used = horizon[k].boundary === affectedBoundary;
              }
              for (k = 0; !used && k < changedHorizon.length; k++) {
                used = changedHorizon[k].boundary === affectedBoundary;
              }
              if (!used) {
                affectedBoundary.x2New = maxXNew;
              }
            }
            Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
          });
          horizon.forEach((horizonPart) => {
            const affectedBoundary = horizonPart.boundary;
            if (affectedBoundary.x2New === undefined) {
              affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
            }
          });
        }
        function TextLayerRenderTask(_ref) {
          const { textContent } = _ref;
          const { textContentStream } = _ref;
          const { container } = _ref;
          const { viewport } = _ref;
          const { textDivs } = _ref;
          const { textContentItemsStr } = _ref;
          const { enhanceTextSelection } = _ref;

          this._textContent = textContent;
          this._textContentStream = textContentStream;
          this._container = container;
          this._viewport = viewport;
          this._textDivs = textDivs || [];
          this._textContentItemsStr = textContentItemsStr || [];
          this._enhanceTextSelection = !!enhanceTextSelection;
          this._reader = null;
          this._layoutTextLastFontSize = null;
          this._layoutTextLastFontFamily = null;
          this._layoutTextCtx = null;
          this._textDivProperties = new WeakMap();
          this._renderingDone = false;
          this._canceled = false;
          this._capability = (0, _util.createPromiseCapability)();
          this._renderTimer = null;
          this._bounds = [];
        }
        TextLayerRenderTask.prototype = {
          get promise() {
            return this._capability.promise;
          },
          cancel: function TextLayer_cancel() {
            if (this._reader) {
              this._reader.cancel(new _util.AbortException('text layer task cancelled'));
              this._reader = null;
            }
            this._canceled = true;
            if (this._renderTimer !== null) {
              clearTimeout(this._renderTimer);
              this._renderTimer = null;
            }
            this._capability.reject('canceled');
          },
          _processItems: function _processItems(items, styleCache) {
            for (let i = 0, len = items.length; i < len; i++) {
              this._textContentItemsStr.push(items[i].str);
              appendText(this, items[i], styleCache);
            }
          },
          _layoutText: function _layoutText(textDiv) {
            const textLayerFrag = this._container;
            const textDivProperties = this._textDivProperties.get(textDiv);
            if (textDivProperties.isWhitespace) {
              return;
            }
            const { fontSize } = textDiv.style;
            const { fontFamily } = textDiv.style;
            if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
              this._layoutTextCtx.font = `${fontSize} ${fontFamily}`;
              this._lastFontSize = fontSize;
              this._lastFontFamily = fontFamily;
            }
            const { width } = this._layoutTextCtx.measureText(textDiv.textContent);
            let transform = '';
            if (textDivProperties.canvasWidth !== 0 && width > 0) {
              textDivProperties.scale = textDivProperties.canvasWidth / width;
              transform = `scaleX(${textDivProperties.scale})`;
            }
            if (textDivProperties.angle !== 0) {
              transform = `rotate(${textDivProperties.angle}deg) ${transform}`;
            }
            if (transform !== '') {
              textDivProperties.originalTransform = transform;
              _dom_utils.CustomStyle.setProp('transform', textDiv, transform);
            }
            this._textDivProperties.set(textDiv, textDivProperties);
            textLayerFrag.appendChild(textDiv);
          },

          _render: function TextLayer_render(timeout) {
            const _this = this;

            const capability = (0, _util.createPromiseCapability)();
            let styleCache = Object.create(null);
            const canvas = document.createElement('canvas');
            canvas.mozOpaque = true;
            this._layoutTextCtx = canvas.getContext('2d', { alpha: false });
            if (this._textContent) {
              const textItems = this._textContent.items;
              const textStyles = this._textContent.styles;
              this._processItems(textItems, textStyles);
              capability.resolve();
            } else if (this._textContentStream) {
              const pump = function pump() {
                _this._reader.read().then((_ref2) => {
                  const { value } = _ref2;
                  const { done } = _ref2;

                  if (done) {
                    capability.resolve();
                    return;
                  }
                  _util.Util.extendObj(styleCache, value.styles);
                  _this._processItems(value.items, styleCache);
                  pump();
                }, capability.reject);
              };
              this._reader = this._textContentStream.getReader();
              pump();
            } else {
              throw new Error('Neither "textContent" nor "textContentStream"' + ' parameters specified.');
            }
            capability.promise.then(() => {
              styleCache = null;
              if (!timeout) {
                render(_this);
              } else {
                _this._renderTimer = setTimeout(() => {
                  render(_this);
                  _this._renderTimer = null;
                }, timeout);
              }
            }, this._capability.reject);
          },
          expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
            if (!this._enhanceTextSelection || !this._renderingDone) {
              return;
            }
            if (this._bounds !== null) {
              expand(this);
              this._bounds = null;
            }
            for (let i = 0, ii = this._textDivs.length; i < ii; i++) {
              const div = this._textDivs[i];
              const divProperties = this._textDivProperties.get(div);
              if (divProperties.isWhitespace) {
                continue;
              }
              if (expandDivs) {
                let transform = '';
                let padding = '';
                if (divProperties.scale !== 1) {
                  transform = `scaleX(${divProperties.scale})`;
                }
                if (divProperties.angle !== 0) {
                  transform = `rotate(${divProperties.angle}deg) ${transform}`;
                }
                if (divProperties.paddingLeft !== 0) {
                  padding += ` padding-left: ${divProperties.paddingLeft / divProperties.scale}px;`;
                  transform += ` translateX(${-divProperties.paddingLeft / divProperties.scale}px)`;
                }
                if (divProperties.paddingTop !== 0) {
                  padding += ` padding-top: ${divProperties.paddingTop}px;`;
                  transform += ` translateY(${-divProperties.paddingTop}px)`;
                }
                if (divProperties.paddingRight !== 0) {
                  padding += ` padding-right: ${divProperties.paddingRight / divProperties.scale}px;`;
                }
                if (divProperties.paddingBottom !== 0) {
                  padding += ` padding-bottom: ${divProperties.paddingBottom}px;`;
                }
                if (padding !== '') {
                  div.setAttribute('style', divProperties.style + padding);
                }
                if (transform !== '') {
                  _dom_utils.CustomStyle.setProp('transform', div, transform);
                }
              } else {
                div.style.padding = 0;
                _dom_utils.CustomStyle.setProp('transform', div, divProperties.originalTransform || '');
              }
            }
          },
        };
        function renderTextLayer(renderParameters) {
          const task = new TextLayerRenderTask({
            textContent: renderParameters.textContent,
            textContentStream: renderParameters.textContentStream,
            container: renderParameters.container,
            viewport: renderParameters.viewport,
            textDivs: renderParameters.textDivs,
            textContentItemsStr: renderParameters.textContentItemsStr,
            enhanceTextSelection: renderParameters.enhanceTextSelection,
          });
          task._render(renderParameters.timeout);
          return task;
        }
        return renderTextLayer;
      }());
      exports.renderTextLayer = renderTextLayer;
      /** */ }),
    /* 6 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      function fixMetadata(meta) {
        return meta.replace(/>\\376\\377([^<]+)/g, (all, codes) => {
          const bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, (code, d1, d2, d3) => String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1));
          let chars = '';
          for (let i = 0; i < bytes.length; i += 2) {
            const code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
            chars += code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38 ? String.fromCharCode(code) : `&#x${(0x10000 + code).toString(16).substring(1)};`;
          }
          return `>${chars}`;
        });
      }
      function Metadata(meta) {
        if (typeof meta === 'string') {
          meta = fixMetadata(meta);
          const parser = new DOMParser();
          meta = parser.parseFromString(meta, 'application/xml');
        } else if (!(meta instanceof Document)) {
          throw new Error('Metadata: Invalid metadata object');
        }
        this.metaDocument = meta;
        this.metadata = Object.create(null);
        this.parse();
      }
      Metadata.prototype = {
        parse: function Metadata_parse() {
          const doc = this.metaDocument;
          let rdf = doc.documentElement;
          if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
            rdf = rdf.firstChild;
            while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
              rdf = rdf.nextSibling;
            }
          }
          const nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
          if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
            return;
          }
          const children = rdf.childNodes;
          let desc;
          let entry;
          let name;
          let i;
          let ii;
          let length;
          let iLength;
          for (i = 0, length = children.length; i < length; i++) {
            desc = children[i];
            if (desc.nodeName.toLowerCase() !== 'rdf:description') {
              continue;
            }
            for (ii = 0, iLength = desc.childNodes.length; ii < iLength; ii++) {
              if (desc.childNodes[ii].nodeName.toLowerCase() !== '#text') {
                entry = desc.childNodes[ii];
                name = entry.nodeName.toLowerCase();
                this.metadata[name] = entry.textContent.trim();
              }
            }
          }
        },
        get: function Metadata_get(name) {
          return this.metadata[name] || null;
        },
        has: function Metadata_has(name) {
          return typeof this.metadata[name] !== 'undefined';
        },
      };
      exports.Metadata = Metadata;
      /** */ }),
    /* 7 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.WebGLUtils = undefined;

      const _dom_utils = __w_pdfjs_require__(1);

      const _util = __w_pdfjs_require__(0);

      const WebGLUtils = (function WebGLUtilsClosure() {
        function loadShader(gl, code, shaderType) {
          const shader = gl.createShader(shaderType);
          gl.shaderSource(shader, code);
          gl.compileShader(shader);
          const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
          if (!compiled) {
            const errorMsg = gl.getShaderInfoLog(shader);
            throw new Error(`Error during shader compilation: ${errorMsg}`);
          }
          return shader;
        }
        function createVertexShader(gl, code) {
          return loadShader(gl, code, gl.VERTEX_SHADER);
        }
        function createFragmentShader(gl, code) {
          return loadShader(gl, code, gl.FRAGMENT_SHADER);
        }
        function createProgram(gl, shaders) {
          const program = gl.createProgram();
          for (let i = 0, ii = shaders.length; i < ii; ++i) {
            gl.attachShader(program, shaders[i]);
          }
          gl.linkProgram(program);
          const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
          if (!linked) {
            const errorMsg = gl.getProgramInfoLog(program);
            throw new Error(`Error during program linking: ${errorMsg}`);
          }
          return program;
        }
        function createTexture(gl, image, textureId) {
          gl.activeTexture(textureId);
          const texture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
          return texture;
        }
        let currentGL; let
          currentCanvas;
        function generateGL() {
          if (currentGL) {
            return;
          }
          currentCanvas = document.createElement('canvas');
          currentGL = currentCanvas.getContext('webgl', { premultipliedalpha: false });
        }
        const smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
        const smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
        let smaskCache = null;
        function initSmaskGL() {
          let canvas; let
            gl;
          generateGL();
          canvas = currentCanvas;
          currentCanvas = null;
          gl = currentGL;
          currentGL = null;
          const vertexShader = createVertexShader(gl, smaskVertexShaderCode);
          const fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
          const program = createProgram(gl, [vertexShader, fragmentShader]);
          gl.useProgram(program);
          const cache = {};
          cache.gl = gl;
          cache.canvas = canvas;
          cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
          cache.positionLocation = gl.getAttribLocation(program, 'a_position');
          cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
          cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
          const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
          const texLayerLocation = gl.getUniformLocation(program, 'u_image');
          const texMaskLocation = gl.getUniformLocation(program, 'u_mask');
          const texCoordBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
          gl.enableVertexAttribArray(texCoordLocation);
          gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
          gl.uniform1i(texLayerLocation, 0);
          gl.uniform1i(texMaskLocation, 1);
          smaskCache = cache;
        }
        function composeSMask(layer, mask, properties) {
          const { width } = layer;
          const { height } = layer;
          if (!smaskCache) {
            initSmaskGL();
          }
          const cache = smaskCache;
          const { canvas } = cache;
          const { gl } = cache;
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.uniform2f(cache.resolutionLocation, width, height);
          if (properties.backdrop) {
            gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
          } else {
            gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
          }
          gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
          const texture = createTexture(gl, layer, gl.TEXTURE0);
          const maskTexture = createTexture(gl, mask, gl.TEXTURE1);
          const buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.positionLocation);
          gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
          gl.clearColor(0, 0, 0, 0);
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          gl.flush();
          gl.deleteTexture(texture);
          gl.deleteTexture(maskTexture);
          gl.deleteBuffer(buffer);
          return canvas;
        }
        const figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
        const figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
        let figuresCache = null;
        function initFiguresGL() {
          let canvas; let
            gl;
          generateGL();
          canvas = currentCanvas;
          currentCanvas = null;
          gl = currentGL;
          currentGL = null;
          const vertexShader = createVertexShader(gl, figuresVertexShaderCode);
          const fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
          const program = createProgram(gl, [vertexShader, fragmentShader]);
          gl.useProgram(program);
          const cache = {};
          cache.gl = gl;
          cache.canvas = canvas;
          cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
          cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
          cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
          cache.positionLocation = gl.getAttribLocation(program, 'a_position');
          cache.colorLocation = gl.getAttribLocation(program, 'a_color');
          figuresCache = cache;
        }
        function drawFigures(width, height, backgroundColor, figures, context) {
          if (!figuresCache) {
            initFiguresGL();
          }
          const cache = figuresCache;
          const { canvas } = cache;
          const { gl } = cache;
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.uniform2f(cache.resolutionLocation, width, height);
          let count = 0;
          let i; let ii; let
            rows;
          for (i = 0, ii = figures.length; i < ii; i++) {
            switch (figures[i].type) {
              case 'lattice':
                rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
                count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
                break;
              case 'triangles':
                count += figures[i].coords.length;
                break;
            }
          }
          const coords = new Float32Array(count * 2);
          const colors = new Uint8Array(count * 3);
          const coordsMap = context.coords;
          const colorsMap = context.colors;
          let pIndex = 0;
          let cIndex = 0;
          for (i = 0, ii = figures.length; i < ii; i++) {
            const figure = figures[i];
            const ps = figure.coords;
            const cs = figure.colors;
            switch (figure.type) {
              case 'lattice':
                var cols = figure.verticesPerRow;
                rows = ps.length / cols | 0;
                for (let row = 1; row < rows; row++) {
                  let offset = row * cols + 1;
                  for (let col = 1; col < cols; col++, offset++) {
                    coords[pIndex] = coordsMap[ps[offset - cols - 1]];
                    coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
                    coords[pIndex + 2] = coordsMap[ps[offset - cols]];
                    coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
                    coords[pIndex + 4] = coordsMap[ps[offset - 1]];
                    coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
                    colors[cIndex] = colorsMap[cs[offset - cols - 1]];
                    colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
                    colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
                    colors[cIndex + 3] = colorsMap[cs[offset - cols]];
                    colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
                    colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
                    colors[cIndex + 6] = colorsMap[cs[offset - 1]];
                    colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
                    colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
                    coords[pIndex + 6] = coords[pIndex + 2];
                    coords[pIndex + 7] = coords[pIndex + 3];
                    coords[pIndex + 8] = coords[pIndex + 4];
                    coords[pIndex + 9] = coords[pIndex + 5];
                    coords[pIndex + 10] = coordsMap[ps[offset]];
                    coords[pIndex + 11] = coordsMap[ps[offset] + 1];
                    colors[cIndex + 9] = colors[cIndex + 3];
                    colors[cIndex + 10] = colors[cIndex + 4];
                    colors[cIndex + 11] = colors[cIndex + 5];
                    colors[cIndex + 12] = colors[cIndex + 6];
                    colors[cIndex + 13] = colors[cIndex + 7];
                    colors[cIndex + 14] = colors[cIndex + 8];
                    colors[cIndex + 15] = colorsMap[cs[offset]];
                    colors[cIndex + 16] = colorsMap[cs[offset] + 1];
                    colors[cIndex + 17] = colorsMap[cs[offset] + 2];
                    pIndex += 12;
                    cIndex += 18;
                  }
                }
                break;
              case 'triangles':
                for (let j = 0, jj = ps.length; j < jj; j++) {
                  coords[pIndex] = coordsMap[ps[j]];
                  coords[pIndex + 1] = coordsMap[ps[j] + 1];
                  colors[cIndex] = colorsMap[cs[j]];
                  colors[cIndex + 1] = colorsMap[cs[j] + 1];
                  colors[cIndex + 2] = colorsMap[cs[j] + 2];
                  pIndex += 2;
                  cIndex += 3;
                }
                break;
            }
          }
          if (backgroundColor) {
            gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
          } else {
            gl.clearColor(0, 0, 0, 0);
          }
          gl.clear(gl.COLOR_BUFFER_BIT);
          const coordsBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.positionLocation);
          gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
          const colorsBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.colorLocation);
          gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
          gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
          gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
          gl.drawArrays(gl.TRIANGLES, 0, count);
          gl.flush();
          gl.deleteBuffer(coordsBuffer);
          gl.deleteBuffer(colorsBuffer);
          return canvas;
        }
        function cleanup() {
          if (smaskCache && smaskCache.canvas) {
            smaskCache.canvas.width = 0;
            smaskCache.canvas.height = 0;
          }
          if (figuresCache && figuresCache.canvas) {
            figuresCache.canvas.width = 0;
            figuresCache.canvas.height = 0;
          }
          smaskCache = null;
          figuresCache = null;
        }
        return {
          get isEnabled() {
            if ((0, _dom_utils.getDefaultSetting)('disableWebGL')) {
              return false;
            }
            let enabled = false;
            try {
              generateGL();
              enabled = !!currentGL;
            } catch (e) {}
            return (0, _util.shadow)(this, 'isEnabled', enabled);
          },
          composeSMask,
          drawFigures,
          clear: cleanup,
        };
      }());
      exports.WebGLUtils = WebGLUtils;
      /** */ }),
    /* 8 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.PDFJS = exports.isWorker = exports.globalScope = undefined;

      const _api = __w_pdfjs_require__(2);

      const _dom_utils = __w_pdfjs_require__(1);

      const _util = __w_pdfjs_require__(0);

      const _annotation_layer = __w_pdfjs_require__(3);

      const _metadata = __w_pdfjs_require__(6);

      const _text_layer = __w_pdfjs_require__(5);

      const _svg = __w_pdfjs_require__(4);

      const isWorker = typeof window === 'undefined';
      if (!_util.globalScope.PDFJS) {
        _util.globalScope.PDFJS = {};
      }
      const { PDFJS } = _util.globalScope;
      {
        PDFJS.version = '1.9.426';
        PDFJS.build = '2558a58d';
      }
      PDFJS.pdfBug = false;
      if (PDFJS.verbosity !== undefined) {
        (0, _util.setVerbosityLevel)(PDFJS.verbosity);
      }
      delete PDFJS.verbosity;
      Object.defineProperty(PDFJS, 'verbosity', {
        get: function get() {
          return (0, _util.getVerbosityLevel)();
        },
        set: function set(level) {
          (0, _util.setVerbosityLevel)(level);
        },

        enumerable: true,
        configurable: true,
      });
      PDFJS.VERBOSITY_LEVELS = _util.VERBOSITY_LEVELS;
      PDFJS.OPS = _util.OPS;
      PDFJS.UNSUPPORTED_FEATURES = _util.UNSUPPORTED_FEATURES;
      PDFJS.isValidUrl = _dom_utils.isValidUrl;
      PDFJS.shadow = _util.shadow;
      PDFJS.createBlob = _util.createBlob;
      PDFJS.createObjectURL = function PDFJS_createObjectURL(data, contentType) {
        return (0, _util.createObjectURL)(data, contentType, PDFJS.disableCreateObjectURL);
      };
      Object.defineProperty(PDFJS, 'isLittleEndian', {
        configurable: true,
        get: function PDFJS_isLittleEndian() {
          return (0, _util.shadow)(PDFJS, 'isLittleEndian', (0, _util.isLittleEndian)());
        },
      });
      PDFJS.removeNullCharacters = _util.removeNullCharacters;
      PDFJS.PasswordResponses = _util.PasswordResponses;
      PDFJS.PasswordException = _util.PasswordException;
      PDFJS.UnknownErrorException = _util.UnknownErrorException;
      PDFJS.InvalidPDFException = _util.InvalidPDFException;
      PDFJS.MissingPDFException = _util.MissingPDFException;
      PDFJS.UnexpectedResponseException = _util.UnexpectedResponseException;
      PDFJS.Util = _util.Util;
      PDFJS.PageViewport = _util.PageViewport;
      PDFJS.createPromiseCapability = _util.createPromiseCapability;
      PDFJS.maxImageSize = PDFJS.maxImageSize === undefined ? -1 : PDFJS.maxImageSize;
      PDFJS.cMapUrl = PDFJS.cMapUrl === undefined ? null : PDFJS.cMapUrl;
      PDFJS.cMapPacked = PDFJS.cMapPacked === undefined ? false : PDFJS.cMapPacked;
      PDFJS.disableFontFace = PDFJS.disableFontFace === undefined ? false : PDFJS.disableFontFace;
      PDFJS.imageResourcesPath = PDFJS.imageResourcesPath === undefined ? '' : PDFJS.imageResourcesPath;
      PDFJS.disableWorker = PDFJS.disableWorker === undefined ? false : PDFJS.disableWorker;
      PDFJS.workerSrc = PDFJS.workerSrc === undefined ? null : PDFJS.workerSrc;
      PDFJS.workerPort = PDFJS.workerPort === undefined ? null : PDFJS.workerPort;
      PDFJS.disableRange = PDFJS.disableRange === undefined ? false : PDFJS.disableRange;
      PDFJS.disableStream = PDFJS.disableStream === undefined ? false : PDFJS.disableStream;
      PDFJS.disableAutoFetch = PDFJS.disableAutoFetch === undefined ? false : PDFJS.disableAutoFetch;
      PDFJS.pdfBug = PDFJS.pdfBug === undefined ? false : PDFJS.pdfBug;
      PDFJS.postMessageTransfers = PDFJS.postMessageTransfers === undefined ? true : PDFJS.postMessageTransfers;
      PDFJS.disableCreateObjectURL = PDFJS.disableCreateObjectURL === undefined ? false : PDFJS.disableCreateObjectURL;
      PDFJS.disableWebGL = PDFJS.disableWebGL === undefined ? true : PDFJS.disableWebGL;
      PDFJS.externalLinkTarget = PDFJS.externalLinkTarget === undefined ? _dom_utils.LinkTarget.NONE : PDFJS.externalLinkTarget;
      PDFJS.externalLinkRel = PDFJS.externalLinkRel === undefined ? _dom_utils.DEFAULT_LINK_REL : PDFJS.externalLinkRel;
      PDFJS.isEvalSupported = PDFJS.isEvalSupported === undefined ? true : PDFJS.isEvalSupported;
      PDFJS.pdfjsNext = PDFJS.pdfjsNext === undefined ? false : PDFJS.pdfjsNext;
      {
        const savedOpenExternalLinksInNewWindow = PDFJS.openExternalLinksInNewWindow;
        delete PDFJS.openExternalLinksInNewWindow;
        Object.defineProperty(PDFJS, 'openExternalLinksInNewWindow', {
          get: function get() {
            return PDFJS.externalLinkTarget === _dom_utils.LinkTarget.BLANK;
          },
          set: function set(value) {
            if (value) {
              (0, _util.deprecated)('PDFJS.openExternalLinksInNewWindow, please use ' + '"PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.');
            }
            if (PDFJS.externalLinkTarget !== _dom_utils.LinkTarget.NONE) {
              (0, _util.warn)('PDFJS.externalLinkTarget is already initialized');
              return;
            }
            PDFJS.externalLinkTarget = value ? _dom_utils.LinkTarget.BLANK : _dom_utils.LinkTarget.NONE;
          },

          enumerable: true,
          configurable: true,
        });
        if (savedOpenExternalLinksInNewWindow) {
          PDFJS.openExternalLinksInNewWindow = savedOpenExternalLinksInNewWindow;
        }
      }
      PDFJS.getDocument = _api.getDocument;
      PDFJS.LoopbackPort = _api.LoopbackPort;
      PDFJS.PDFDataRangeTransport = _api.PDFDataRangeTransport;
      PDFJS.PDFWorker = _api.PDFWorker;
      PDFJS.hasCanvasTypedArrays = true;
      PDFJS.CustomStyle = _dom_utils.CustomStyle;
      PDFJS.LinkTarget = _dom_utils.LinkTarget;
      PDFJS.addLinkAttributes = _dom_utils.addLinkAttributes;
      PDFJS.getFilenameFromUrl = _dom_utils.getFilenameFromUrl;
      PDFJS.isExternalLinkTargetSet = _dom_utils.isExternalLinkTargetSet;
      PDFJS.AnnotationLayer = _annotation_layer.AnnotationLayer;
      PDFJS.renderTextLayer = _text_layer.renderTextLayer;
      PDFJS.Metadata = _metadata.Metadata;
      PDFJS.SVGGraphics = _svg.SVGGraphics;
      PDFJS.UnsupportedManager = _api._UnsupportedManager;
      exports.globalScope = _util.globalScope;
      exports.isWorker = isWorker;
      exports.PDFJS = PDFJS;
      /** */ }),
    /* 9 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.NetworkManager = exports.PDFNetworkStream = undefined;

      const _util = __w_pdfjs_require__(0);

      const _api = __w_pdfjs_require__(2);


      const OK_RESPONSE = 200;
      const PARTIAL_CONTENT_RESPONSE = 206;
      function NetworkManager(url, args) {
        this.url = url;
        args = args || {};
        this.isHttp = /^https?:/i.test(url);
        this.httpHeaders = this.isHttp && args.httpHeaders || {};
        this.withCredentials = args.withCredentials || false;
        this.getXhr = args.getXhr || function NetworkManager_getXhr() {
          return new XMLHttpRequest();
        };
        this.currXhrId = 0;
        this.pendingRequests = Object.create(null);
        this.loadedRequests = Object.create(null);
      }
      function getArrayBuffer(xhr) {
        const data = xhr.response;
        if (typeof data !== 'string') {
          return data;
        }
        const { length } = data;
        const array = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
          array[i] = data.charCodeAt(i) & 0xFF;
        }
        return array.buffer;
      }
      const supportsMozChunked = (function supportsMozChunkedClosure() {
        try {
          const x = new XMLHttpRequest();
          x.open('GET', _util.globalScope.location.href);
          x.responseType = 'moz-chunked-arraybuffer';
          return x.responseType === 'moz-chunked-arraybuffer';
        } catch (e) {
          return false;
        }
      }());
      NetworkManager.prototype = {
        requestRange: function NetworkManager_requestRange(begin, end, listeners) {
          const args = {
            begin,
            end,
          };
          for (const prop in listeners) {
            args[prop] = listeners[prop];
          }
          return this.request(args);
        },
        requestFull: function NetworkManager_requestFull(listeners) {
          return this.request(listeners);
        },
        request: function NetworkManager_request(args) {
          const xhr = this.getXhr();
          const xhrId = this.currXhrId++;
          const pendingRequest = this.pendingRequests[xhrId] = { xhr };
          xhr.open('GET', this.url);
          xhr.withCredentials = this.withCredentials;
          for (const property in this.httpHeaders) {
            const value = this.httpHeaders[property];
            if (typeof value === 'undefined') {
              continue;
            }
            xhr.setRequestHeader(property, value);
          }
          if (this.isHttp && 'begin' in args && 'end' in args) {
            const rangeStr = `${args.begin}-${args.end - 1}`;
            xhr.setRequestHeader('Range', `bytes=${rangeStr}`);
            pendingRequest.expectedStatus = 206;
          } else {
            pendingRequest.expectedStatus = 200;
          }
          const useMozChunkedLoading = supportsMozChunked && !!args.onProgressiveData;
          if (useMozChunkedLoading) {
            xhr.responseType = 'moz-chunked-arraybuffer';
            pendingRequest.onProgressiveData = args.onProgressiveData;
            pendingRequest.mozChunked = true;
          } else {
            xhr.responseType = 'arraybuffer';
          }
          if (args.onError) {
            xhr.onerror = function (evt) {
              args.onError(xhr.status);
            };
          }
          xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
          xhr.onprogress = this.onProgress.bind(this, xhrId);
          pendingRequest.onHeadersReceived = args.onHeadersReceived;
          pendingRequest.onDone = args.onDone;
          pendingRequest.onError = args.onError;
          pendingRequest.onProgress = args.onProgress;
          xhr.send(null);
          return xhrId;
        },
        onProgress: function NetworkManager_onProgress(xhrId, evt) {
          const pendingRequest = this.pendingRequests[xhrId];
          if (!pendingRequest) {
            return;
          }
          if (pendingRequest.mozChunked) {
            const chunk = getArrayBuffer(pendingRequest.xhr);
            pendingRequest.onProgressiveData(chunk);
          }
          const { onProgress } = pendingRequest;
          if (onProgress) {
            onProgress(evt);
          }
        },
        onStateChange: function NetworkManager_onStateChange(xhrId, evt) {
          const pendingRequest = this.pendingRequests[xhrId];
          if (!pendingRequest) {
            return;
          }
          const { xhr } = pendingRequest;
          if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
            pendingRequest.onHeadersReceived();
            delete pendingRequest.onHeadersReceived;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          if (!(xhrId in this.pendingRequests)) {
            return;
          }
          delete this.pendingRequests[xhrId];
          if (xhr.status === 0 && this.isHttp) {
            if (pendingRequest.onError) {
              pendingRequest.onError(xhr.status);
            }
            return;
          }
          const xhrStatus = xhr.status || OK_RESPONSE;
          const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
          if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
            if (pendingRequest.onError) {
              pendingRequest.onError(xhr.status);
            }
            return;
          }
          this.loadedRequests[xhrId] = true;
          const chunk = getArrayBuffer(xhr);
          if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
            const rangeHeader = xhr.getResponseHeader('Content-Range');
            const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
            const begin = parseInt(matches[1], 10);
            pendingRequest.onDone({
              begin,
              chunk,
            });
          } else if (pendingRequest.onProgressiveData) {
            pendingRequest.onDone(null);
          } else if (chunk) {
            pendingRequest.onDone({
              begin: 0,
              chunk,
            });
          } else if (pendingRequest.onError) {
            pendingRequest.onError(xhr.status);
          }
        },
        hasPendingRequests: function NetworkManager_hasPendingRequests() {
          for (const xhrId in this.pendingRequests) {
            return true;
          }
          return false;
        },
        getRequestXhr: function NetworkManager_getXhr(xhrId) {
          return this.pendingRequests[xhrId].xhr;
        },
        isStreamingRequest: function NetworkManager_isStreamingRequest(xhrId) {
          return !!this.pendingRequests[xhrId].onProgressiveData;
        },
        isPendingRequest: function NetworkManager_isPendingRequest(xhrId) {
          return xhrId in this.pendingRequests;
        },
        isLoadedRequest: function NetworkManager_isLoadedRequest(xhrId) {
          return xhrId in this.loadedRequests;
        },
        abortAllRequests: function NetworkManager_abortAllRequests() {
          for (const xhrId in this.pendingRequests) {
            this.abortRequest(xhrId | 0);
          }
        },
        abortRequest: function NetworkManager_abortRequest(xhrId) {
          const { xhr } = this.pendingRequests[xhrId];
          delete this.pendingRequests[xhrId];
          xhr.abort();
        },
      };
      function PDFNetworkStream(options) {
        this._options = options;
        const { source } = options;
        this._manager = new NetworkManager(source.url, {
          httpHeaders: source.httpHeaders,
          withCredentials: source.withCredentials,
        });
        this._rangeChunkSize = source.rangeChunkSize;
        this._fullRequestReader = null;
        this._rangeRequestReaders = [];
      }
      PDFNetworkStream.prototype = {
        _onRangeRequestReaderClosed: function PDFNetworkStream_onRangeRequestReaderClosed(reader) {
          const i = this._rangeRequestReaders.indexOf(reader);
          if (i >= 0) {
            this._rangeRequestReaders.splice(i, 1);
          }
        },
        getFullReader: function PDFNetworkStream_getFullReader() {
          (0, _util.assert)(!this._fullRequestReader);
          this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._options);
          return this._fullRequestReader;
        },
        getRangeReader: function PDFNetworkStream_getRangeReader(begin, end) {
          const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
          reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
          this._rangeRequestReaders.push(reader);
          return reader;
        },
        cancelAllRequests: function PDFNetworkStream_cancelAllRequests(reason) {
          if (this._fullRequestReader) {
            this._fullRequestReader.cancel(reason);
          }
          const readers = this._rangeRequestReaders.slice(0);
          readers.forEach((reader) => {
            reader.cancel(reason);
          });
        },
      };
      function PDFNetworkStreamFullRequestReader(manager, options) {
        this._manager = manager;
        const { source } = options;
        const args = {
          onHeadersReceived: this._onHeadersReceived.bind(this),
          onProgressiveData: source.disableStream ? null : this._onProgressiveData.bind(this),
          onDone: this._onDone.bind(this),
          onError: this._onError.bind(this),
          onProgress: this._onProgress.bind(this),
        };
        this._url = source.url;
        this._fullRequestId = manager.requestFull(args);
        this._headersReceivedCapability = (0, _util.createPromiseCapability)();
        this._disableRange = options.disableRange || false;
        this._contentLength = source.length;
        this._rangeChunkSize = source.rangeChunkSize;
        if (!this._rangeChunkSize && !this._disableRange) {
          this._disableRange = true;
        }
        this._isStreamingSupported = false;
        this._isRangeSupported = false;
        this._cachedChunks = [];
        this._requests = [];
        this._done = false;
        this._storedError = undefined;
        this.onProgress = null;
      }
      PDFNetworkStreamFullRequestReader.prototype = {
        _validateRangeRequestCapabilities: function PDFNetworkStreamFullRequestReader_validateRangeRequestCapabilities() {
          if (this._disableRange) {
            return false;
          }
          const networkManager = this._manager;
          if (!networkManager.isHttp) {
            return false;
          }
          const fullRequestXhrId = this._fullRequestId;
          const fullRequestXhr = networkManager.getRequestXhr(fullRequestXhrId);
          if (fullRequestXhr.getResponseHeader('Accept-Ranges') !== 'bytes') {
            return false;
          }
          const contentEncoding = fullRequestXhr.getResponseHeader('Content-Encoding') || 'identity';
          if (contentEncoding !== 'identity') {
            return false;
          }
          let length = fullRequestXhr.getResponseHeader('Content-Length');
          length = parseInt(length, 10);
          if (!(0, _util.isInt)(length)) {
            return false;
          }
          this._contentLength = length;
          if (length <= 2 * this._rangeChunkSize) {
            return false;
          }
          return true;
        },
        _onHeadersReceived: function PDFNetworkStreamFullRequestReader_onHeadersReceived() {
          if (this._validateRangeRequestCapabilities()) {
            this._isRangeSupported = true;
          }
          const networkManager = this._manager;
          const fullRequestXhrId = this._fullRequestId;
          if (networkManager.isStreamingRequest(fullRequestXhrId)) {
            this._isStreamingSupported = true;
          } else if (this._isRangeSupported) {
            networkManager.abortRequest(fullRequestXhrId);
          }
          this._headersReceivedCapability.resolve();
        },
        _onProgressiveData: function PDFNetworkStreamFullRequestReader_onProgressiveData(chunk) {
          if (this._requests.length > 0) {
            const requestCapability = this._requests.shift();
            requestCapability.resolve({
              value: chunk,
              done: false,
            });
          } else {
            this._cachedChunks.push(chunk);
          }
        },
        _onDone: function PDFNetworkStreamFullRequestReader_onDone(args) {
          if (args) {
            this._onProgressiveData(args.chunk);
          }
          this._done = true;
          if (this._cachedChunks.length > 0) {
            return;
          }
          this._requests.forEach((requestCapability) => {
            requestCapability.resolve({
              value: undefined,
              done: true,
            });
          });
          this._requests = [];
        },
        _onError: function PDFNetworkStreamFullRequestReader_onError(status) {
          const url = this._url;
          let exception;
          if (status === 404 || status === 0 && /^file:/.test(url)) {
            exception = new _util.MissingPDFException(`Missing PDF "${url}".`);
          } else {
            exception = new _util.UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status);
          }
          this._storedError = exception;
          this._headersReceivedCapability.reject(exception);
          this._requests.forEach((requestCapability) => {
            requestCapability.reject(exception);
          });
          this._requests = [];
          this._cachedChunks = [];
        },
        _onProgress: function PDFNetworkStreamFullRequestReader_onProgress(data) {
          if (this.onProgress) {
            this.onProgress({
              loaded: data.loaded,
              total: data.lengthComputable ? data.total : this._contentLength,
            });
          }
        },
        get isRangeSupported() {
          return this._isRangeSupported;
        },
        get isStreamingSupported() {
          return this._isStreamingSupported;
        },
        get contentLength() {
          return this._contentLength;
        },
        get headersReady() {
          return this._headersReceivedCapability.promise;
        },
        read: function PDFNetworkStreamFullRequestReader_read() {
          if (this._storedError) {
            return Promise.reject(this._storedError);
          }
          if (this._cachedChunks.length > 0) {
            const chunk = this._cachedChunks.shift();
            return Promise.resolve({
              value: chunk,
              done: false,
            });
          }
          if (this._done) {
            return Promise.resolve({
              value: undefined,
              done: true,
            });
          }
          const requestCapability = (0, _util.createPromiseCapability)();
          this._requests.push(requestCapability);
          return requestCapability.promise;
        },
        cancel: function PDFNetworkStreamFullRequestReader_cancel(reason) {
          this._done = true;
          this._headersReceivedCapability.reject(reason);
          this._requests.forEach((requestCapability) => {
            requestCapability.resolve({
              value: undefined,
              done: true,
            });
          });
          this._requests = [];
          if (this._manager.isPendingRequest(this._fullRequestId)) {
            this._manager.abortRequest(this._fullRequestId);
          }
          this._fullRequestReader = null;
        },
      };
      function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
        this._manager = manager;
        const args = {
          onDone: this._onDone.bind(this),
          onProgress: this._onProgress.bind(this),
        };
        this._requestId = manager.requestRange(begin, end, args);
        this._requests = [];
        this._queuedChunk = null;
        this._done = false;
        this.onProgress = null;
        this.onClosed = null;
      }
      PDFNetworkStreamRangeRequestReader.prototype = {
        _close: function PDFNetworkStreamRangeRequestReader_close() {
          if (this.onClosed) {
            this.onClosed(this);
          }
        },
        _onDone: function PDFNetworkStreamRangeRequestReader_onDone(data) {
          const { chunk } = data;
          if (this._requests.length > 0) {
            const requestCapability = this._requests.shift();
            requestCapability.resolve({
              value: chunk,
              done: false,
            });
          } else {
            this._queuedChunk = chunk;
          }
          this._done = true;
          this._requests.forEach((requestCapability) => {
            requestCapability.resolve({
              value: undefined,
              done: true,
            });
          });
          this._requests = [];
          this._close();
        },
        _onProgress: function PDFNetworkStreamRangeRequestReader_onProgress(evt) {
          if (!this.isStreamingSupported && this.onProgress) {
            this.onProgress({ loaded: evt.loaded });
          }
        },
        get isStreamingSupported() {
          return false;
        },
        read: function PDFNetworkStreamRangeRequestReader_read() {
          if (this._queuedChunk !== null) {
            const chunk = this._queuedChunk;
            this._queuedChunk = null;
            return Promise.resolve({
              value: chunk,
              done: false,
            });
          }
          if (this._done) {
            return Promise.resolve({
              value: undefined,
              done: true,
            });
          }
          const requestCapability = (0, _util.createPromiseCapability)();
          this._requests.push(requestCapability);
          return requestCapability.promise;
        },
        cancel: function PDFNetworkStreamRangeRequestReader_cancel(reason) {
          this._done = true;
          this._requests.forEach((requestCapability) => {
            requestCapability.resolve({
              value: undefined,
              done: true,
            });
          });
          this._requests = [];
          if (this._manager.isPendingRequest(this._requestId)) {
            this._manager.abortRequest(this._requestId);
          }
          this._close();
        },
      };
      (0, _api.setPDFNetworkStreamClass)(PDFNetworkStream);
      exports.PDFNetworkStream = PDFNetworkStream;
      exports.NetworkManager = NetworkManager;
      /** */ }),
    /* 10 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      const _typeof2 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      (function (e, a) {
        for (const i in a) {
          e[i] = a[i];
        }
      }(exports, (function (modules) {
        const installedModules = {};
        function __w_pdfjs_require__(moduleId) {
          if (installedModules[moduleId]) return installedModules[moduleId].exports;
          const module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {},
          };
          modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
          module.l = true;
          return module.exports;
        }
        __w_pdfjs_require__.m = modules;
        __w_pdfjs_require__.c = installedModules;
        __w_pdfjs_require__.i = function (value) {
          return value;
        };
        __w_pdfjs_require__.d = function (exports, name, getter) {
          if (!__w_pdfjs_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
              configurable: false,
              enumerable: true,
              get: getter,
            });
          }
        };
        __w_pdfjs_require__.n = function (module) {
          const getter = module && module.__esModule ? function getDefault() {
            return module.default;
          } : function getModuleExports() {
            return module;
          };
          __w_pdfjs_require__.d(getter, 'a', getter);
          return getter;
        };
        __w_pdfjs_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __w_pdfjs_require__.p = '';
        return __w_pdfjs_require__(__w_pdfjs_require__.s = 7);
      }([function (module, exports, __w_pdfjs_require__) {
        const _typeof = typeof Symbol === 'function' && _typeof2(Symbol.iterator) === 'symbol' ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };
        const _require = __w_pdfjs_require__(1);
        const { assert } = _require;
        function IsPropertyKey(argument) {
          return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
        }
        exports.typeIsObject = function (x) {
          return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null || typeof x === 'function';
        };
        exports.createDataProperty = function (o, p, v) {
          assert(exports.typeIsObject(o));
          Object.defineProperty(o, p, {
            value: v,
            writable: true,
            enumerable: true,
            configurable: true,
          });
        };
        exports.createArrayFromList = function (elements) {
          return elements.slice();
        };
        exports.ArrayBufferCopy = function (dest, destOffset, src, srcOffset, n) {
          new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
        };
        exports.CreateIterResultObject = function (value, done) {
          assert(typeof done === 'boolean');
          const obj = {};
          Object.defineProperty(obj, 'value', {
            value,
            enumerable: true,
            writable: true,
            configurable: true,
          });
          Object.defineProperty(obj, 'done', {
            value: done,
            enumerable: true,
            writable: true,
            configurable: true,
          });
          return obj;
        };
        exports.IsFiniteNonNegativeNumber = function (v) {
          if (Number.isNaN(v)) {
            return false;
          }
          if (v === Infinity) {
            return false;
          }
          if (v < 0) {
            return false;
          }
          return true;
        };
        function Call(F, V, args) {
          if (typeof F !== 'function') {
            throw new TypeError('Argument is not a function');
          }
          return Function.prototype.apply.call(F, V, args);
        }
        exports.InvokeOrNoop = function (O, P, args) {
          assert(O !== undefined);
          assert(IsPropertyKey(P));
          assert(Array.isArray(args));
          const method = O[P];
          if (method === undefined) {
            return undefined;
          }
          return Call(method, O, args);
        };
        exports.PromiseInvokeOrNoop = function (O, P, args) {
          assert(O !== undefined);
          assert(IsPropertyKey(P));
          assert(Array.isArray(args));
          try {
            return Promise.resolve(exports.InvokeOrNoop(O, P, args));
          } catch (returnValueE) {
            return Promise.reject(returnValueE);
          }
        };
        exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
          assert(O !== undefined);
          assert(IsPropertyKey(P));
          assert(Array.isArray(args));
          assert(Array.isArray(argsF));
          let method = void 0;
          try {
            method = O[P];
          } catch (methodE) {
            return Promise.reject(methodE);
          }
          if (method === undefined) {
            return F.apply(null, argsF);
          }
          try {
            return Promise.resolve(Call(method, O, args));
          } catch (e) {
            return Promise.reject(e);
          }
        };
        exports.TransferArrayBuffer = function (O) {
          return O.slice();
        };
        exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
          highWaterMark = Number(highWaterMark);
          if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
          }
          return highWaterMark;
        };
        exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
          if (size !== undefined && typeof size !== 'function') {
            throw new TypeError('size property of a queuing strategy must be a function');
          }
          highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
          return {
            size,
            highWaterMark,
          };
        };
      }, function (module, exports, __w_pdfjs_require__) {
        function rethrowAssertionErrorRejection(e) {
          if (e && e.constructor === AssertionError) {
            setTimeout(() => {
              throw e;
            }, 0);
          }
        }
        function AssertionError(message) {
          this.name = 'AssertionError';
          this.message = message || '';
          this.stack = new Error().stack;
        }
        AssertionError.prototype = Object.create(Error.prototype);
        AssertionError.prototype.constructor = AssertionError;
        function assert(value, message) {
          if (!value) {
            throw new AssertionError(message);
          }
        }
        module.exports = {
          rethrowAssertionErrorRejection,
          AssertionError,
          assert,
        };
      }, function (module, exports, __w_pdfjs_require__) {
        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }());
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }
        const _require = __w_pdfjs_require__(0);
        const { InvokeOrNoop } = _require;
        const { PromiseInvokeOrNoop } = _require;
        const { ValidateAndNormalizeQueuingStrategy } = _require;
        const { typeIsObject } = _require;
        const _require2 = __w_pdfjs_require__(1);
        const { assert } = _require2;
        const { rethrowAssertionErrorRejection } = _require2;
        const _require3 = __w_pdfjs_require__(3);
        const { DequeueValue } = _require3;
        const { EnqueueValueWithSize } = _require3;
        const { PeekQueueValue } = _require3;
        const { ResetQueue } = _require3;
        const WritableStream = (function () {
          function WritableStream() {
            const underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            const { size } = _ref;
            const _ref$highWaterMark = _ref.highWaterMark;
            const highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;
            _classCallCheck(this, WritableStream);
            this._state = 'writable';
            this._storedError = undefined;
            this._writer = undefined;
            this._writableStreamController = undefined;
            this._writeRequests = [];
            this._inFlightWriteRequest = undefined;
            this._closeRequest = undefined;
            this._inFlightCloseRequest = undefined;
            this._pendingAbortRequest = undefined;
            this._backpressure = false;
            const { type } = underlyingSink;
            if (type !== undefined) {
              throw new RangeError('Invalid type is specified');
            }
            this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);
            this._writableStreamController.__startSteps();
          }
          _createClass(WritableStream, [{
            key: 'abort',
            value: function abort(reason) {
              if (IsWritableStream(this) === false) {
                return Promise.reject(streamBrandCheckException('abort'));
              }
              if (IsWritableStreamLocked(this) === true) {
                return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
              }
              return WritableStreamAbort(this, reason);
            },
          }, {
            key: 'getWriter',
            value: function getWriter() {
              if (IsWritableStream(this) === false) {
                throw streamBrandCheckException('getWriter');
              }
              return AcquireWritableStreamDefaultWriter(this);
            },
          }, {
            key: 'locked',
            get: function get() {
              if (IsWritableStream(this) === false) {
                throw streamBrandCheckException('locked');
              }
              return IsWritableStreamLocked(this);
            },
          }]);
          return WritableStream;
        }());
        module.exports = {
          AcquireWritableStreamDefaultWriter,
          IsWritableStream,
          IsWritableStreamLocked,
          WritableStream,
          WritableStreamAbort,
          WritableStreamDefaultControllerError,
          WritableStreamDefaultWriterCloseWithErrorPropagation,
          WritableStreamDefaultWriterRelease,
          WritableStreamDefaultWriterWrite,
          WritableStreamCloseQueuedOrInFlight,
        };
        function AcquireWritableStreamDefaultWriter(stream) {
          return new WritableStreamDefaultWriter(stream);
        }
        function IsWritableStream(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
            return false;
          }
          return true;
        }
        function IsWritableStreamLocked(stream) {
          assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');
          if (stream._writer === undefined) {
            return false;
          }
          return true;
        }
        function WritableStreamAbort(stream, reason) {
          const state = stream._state;
          if (state === 'closed') {
            return Promise.resolve(undefined);
          }
          if (state === 'errored') {
            return Promise.reject(stream._storedError);
          }
          const error = new TypeError('Requested to abort');
          if (stream._pendingAbortRequest !== undefined) {
            return Promise.reject(error);
          }
          assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
          let wasAlreadyErroring = false;
          if (state === 'erroring') {
            wasAlreadyErroring = true;
            reason = undefined;
          }
          const promise = new Promise(((resolve, reject) => {
            stream._pendingAbortRequest = {
              _resolve: resolve,
              _reject: reject,
              _reason: reason,
              _wasAlreadyErroring: wasAlreadyErroring,
            };
          }));
          if (wasAlreadyErroring === false) {
            WritableStreamStartErroring(stream, error);
          }
          return promise;
        }
        function WritableStreamAddWriteRequest(stream) {
          assert(IsWritableStreamLocked(stream) === true);
          assert(stream._state === 'writable');
          const promise = new Promise(((resolve, reject) => {
            const writeRequest = {
              _resolve: resolve,
              _reject: reject,
            };
            stream._writeRequests.push(writeRequest);
          }));
          return promise;
        }
        function WritableStreamDealWithRejection(stream, error) {
          const state = stream._state;
          if (state === 'writable') {
            WritableStreamStartErroring(stream, error);
            return;
          }
          assert(state === 'erroring');
          WritableStreamFinishErroring(stream);
        }
        function WritableStreamStartErroring(stream, reason) {
          assert(stream._storedError === undefined, 'stream._storedError === undefined');
          assert(stream._state === 'writable', 'state must be writable');
          const controller = stream._writableStreamController;
          assert(controller !== undefined, 'controller must not be undefined');
          stream._state = 'erroring';
          stream._storedError = reason;
          const writer = stream._writer;
          if (writer !== undefined) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
          }
          if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
            WritableStreamFinishErroring(stream);
          }
        }
        function WritableStreamFinishErroring(stream) {
          assert(stream._state === 'erroring', 'stream._state === erroring');
          assert(WritableStreamHasOperationMarkedInFlight(stream) === false, 'WritableStreamHasOperationMarkedInFlight(stream) === false');
          stream._state = 'errored';
          stream._writableStreamController.__errorSteps();
          const storedError = stream._storedError;
          for (let i = 0; i < stream._writeRequests.length; i++) {
            const writeRequest = stream._writeRequests[i];
            writeRequest._reject(storedError);
          }
          stream._writeRequests = [];
          if (stream._pendingAbortRequest === undefined) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const abortRequest = stream._pendingAbortRequest;
          stream._pendingAbortRequest = undefined;
          if (abortRequest._wasAlreadyErroring === true) {
            abortRequest._reject(storedError);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            return;
          }
          const promise = stream._writableStreamController.__abortSteps(abortRequest._reason);
          promise.then(() => {
            abortRequest._resolve();
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          }, (reason) => {
            abortRequest._reject(reason);
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          });
        }
        function WritableStreamFinishInFlightWrite(stream) {
          assert(stream._inFlightWriteRequest !== undefined);
          stream._inFlightWriteRequest._resolve(undefined);
          stream._inFlightWriteRequest = undefined;
        }
        function WritableStreamFinishInFlightWriteWithError(stream, error) {
          assert(stream._inFlightWriteRequest !== undefined);
          stream._inFlightWriteRequest._reject(error);
          stream._inFlightWriteRequest = undefined;
          assert(stream._state === 'writable' || stream._state === 'erroring');
          WritableStreamDealWithRejection(stream, error);
        }
        function WritableStreamFinishInFlightClose(stream) {
          assert(stream._inFlightCloseRequest !== undefined);
          stream._inFlightCloseRequest._resolve(undefined);
          stream._inFlightCloseRequest = undefined;
          const state = stream._state;
          assert(state === 'writable' || state === 'erroring');
          if (state === 'erroring') {
            stream._storedError = undefined;
            if (stream._pendingAbortRequest !== undefined) {
              stream._pendingAbortRequest._resolve();
              stream._pendingAbortRequest = undefined;
            }
          }
          stream._state = 'closed';
          const writer = stream._writer;
          if (writer !== undefined) {
            defaultWriterClosedPromiseResolve(writer);
          }
          assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
          assert(stream._storedError === undefined, 'stream._storedError === undefined');
        }
        function WritableStreamFinishInFlightCloseWithError(stream, error) {
          assert(stream._inFlightCloseRequest !== undefined);
          stream._inFlightCloseRequest._reject(error);
          stream._inFlightCloseRequest = undefined;
          assert(stream._state === 'writable' || stream._state === 'erroring');
          if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._reject(error);
            stream._pendingAbortRequest = undefined;
          }
          WritableStreamDealWithRejection(stream, error);
        }
        function WritableStreamCloseQueuedOrInFlight(stream) {
          if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
            return false;
          }
          return true;
        }
        function WritableStreamHasOperationMarkedInFlight(stream) {
          if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
            return false;
          }
          return true;
        }
        function WritableStreamMarkCloseRequestInFlight(stream) {
          assert(stream._inFlightCloseRequest === undefined);
          assert(stream._closeRequest !== undefined);
          stream._inFlightCloseRequest = stream._closeRequest;
          stream._closeRequest = undefined;
        }
        function WritableStreamMarkFirstWriteRequestInFlight(stream) {
          assert(stream._inFlightWriteRequest === undefined, 'there must be no pending write request');
          assert(stream._writeRequests.length !== 0, 'writeRequests must not be empty');
          stream._inFlightWriteRequest = stream._writeRequests.shift();
        }
        function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
          assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');
          if (stream._closeRequest !== undefined) {
            assert(stream._inFlightCloseRequest === undefined);
            stream._closeRequest._reject(stream._storedError);
            stream._closeRequest = undefined;
          }
          const writer = stream._writer;
          if (writer !== undefined) {
            defaultWriterClosedPromiseReject(writer, stream._storedError);
            writer._closedPromise.catch(() => {});
          }
        }
        function WritableStreamUpdateBackpressure(stream, backpressure) {
          assert(stream._state === 'writable');
          assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
          const writer = stream._writer;
          if (writer !== undefined && backpressure !== stream._backpressure) {
            if (backpressure === true) {
              defaultWriterReadyPromiseReset(writer);
            } else {
              assert(backpressure === false);
              defaultWriterReadyPromiseResolve(writer);
            }
          }
          stream._backpressure = backpressure;
        }
        var WritableStreamDefaultWriter = (function () {
          function WritableStreamDefaultWriter(stream) {
            _classCallCheck(this, WritableStreamDefaultWriter);
            if (IsWritableStream(stream) === false) {
              throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
            }
            if (IsWritableStreamLocked(stream) === true) {
              throw new TypeError('This stream has already been locked for exclusive writing by another writer');
            }
            this._ownerWritableStream = stream;
            stream._writer = this;
            const state = stream._state;
            if (state === 'writable') {
              if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
                defaultWriterReadyPromiseInitialize(this);
              } else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
              }
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === 'erroring') {
              defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
              this._readyPromise.catch(() => {});
              defaultWriterClosedPromiseInitialize(this);
            } else if (state === 'closed') {
              defaultWriterReadyPromiseInitializeAsResolved(this);
              defaultWriterClosedPromiseInitializeAsResolved(this);
            } else {
              assert(state === 'errored', 'state must be errored');
              const storedError = stream._storedError;
              defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
              this._readyPromise.catch(() => {});
              defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
              this._closedPromise.catch(() => {});
            }
          }
          _createClass(WritableStreamDefaultWriter, [{
            key: 'abort',
            value: function abort(reason) {
              if (IsWritableStreamDefaultWriter(this) === false) {
                return Promise.reject(defaultWriterBrandCheckException('abort'));
              }
              if (this._ownerWritableStream === undefined) {
                return Promise.reject(defaultWriterLockException('abort'));
              }
              return WritableStreamDefaultWriterAbort(this, reason);
            },
          }, {
            key: 'close',
            value: function close() {
              if (IsWritableStreamDefaultWriter(this) === false) {
                return Promise.reject(defaultWriterBrandCheckException('close'));
              }
              const stream = this._ownerWritableStream;
              if (stream === undefined) {
                return Promise.reject(defaultWriterLockException('close'));
              }
              if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
                return Promise.reject(new TypeError('cannot close an already-closing stream'));
              }
              return WritableStreamDefaultWriterClose(this);
            },
          }, {
            key: 'releaseLock',
            value: function releaseLock() {
              if (IsWritableStreamDefaultWriter(this) === false) {
                throw defaultWriterBrandCheckException('releaseLock');
              }
              const stream = this._ownerWritableStream;
              if (stream === undefined) {
                return;
              }
              assert(stream._writer !== undefined);
              WritableStreamDefaultWriterRelease(this);
            },
          }, {
            key: 'write',
            value: function write(chunk) {
              if (IsWritableStreamDefaultWriter(this) === false) {
                return Promise.reject(defaultWriterBrandCheckException('write'));
              }
              if (this._ownerWritableStream === undefined) {
                return Promise.reject(defaultWriterLockException('write to'));
              }
              return WritableStreamDefaultWriterWrite(this, chunk);
            },
          }, {
            key: 'closed',
            get: function get() {
              if (IsWritableStreamDefaultWriter(this) === false) {
                return Promise.reject(defaultWriterBrandCheckException('closed'));
              }
              return this._closedPromise;
            },
          }, {
            key: 'desiredSize',
            get: function get() {
              if (IsWritableStreamDefaultWriter(this) === false) {
                throw defaultWriterBrandCheckException('desiredSize');
              }
              if (this._ownerWritableStream === undefined) {
                throw defaultWriterLockException('desiredSize');
              }
              return WritableStreamDefaultWriterGetDesiredSize(this);
            },
          }, {
            key: 'ready',
            get: function get() {
              if (IsWritableStreamDefaultWriter(this) === false) {
                return Promise.reject(defaultWriterBrandCheckException('ready'));
              }
              return this._readyPromise;
            },
          }]);
          return WritableStreamDefaultWriter;
        }());
        function IsWritableStreamDefaultWriter(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
            return false;
          }
          return true;
        }
        function WritableStreamDefaultWriterAbort(writer, reason) {
          const stream = writer._ownerWritableStream;
          assert(stream !== undefined);
          return WritableStreamAbort(stream, reason);
        }
        function WritableStreamDefaultWriterClose(writer) {
          const stream = writer._ownerWritableStream;
          assert(stream !== undefined);
          const state = stream._state;
          if (state === 'closed' || state === 'errored') {
            return Promise.reject(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
          }
          assert(state === 'writable' || state === 'erroring');
          assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
          const promise = new Promise(((resolve, reject) => {
            const closeRequest = {
              _resolve: resolve,
              _reject: reject,
            };
            stream._closeRequest = closeRequest;
          }));
          if (stream._backpressure === true && state === 'writable') {
            defaultWriterReadyPromiseResolve(writer);
          }
          WritableStreamDefaultControllerClose(stream._writableStreamController);
          return promise;
        }
        function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
          const stream = writer._ownerWritableStream;
          assert(stream !== undefined);
          const state = stream._state;
          if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
            return Promise.resolve();
          }
          if (state === 'errored') {
            return Promise.reject(stream._storedError);
          }
          assert(state === 'writable' || state === 'erroring');
          return WritableStreamDefaultWriterClose(writer);
        }
        function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
          if (writer._closedPromiseState === 'pending') {
            defaultWriterClosedPromiseReject(writer, error);
          } else {
            defaultWriterClosedPromiseResetToRejected(writer, error);
          }
          writer._closedPromise.catch(() => {});
        }
        function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
          if (writer._readyPromiseState === 'pending') {
            defaultWriterReadyPromiseReject(writer, error);
          } else {
            defaultWriterReadyPromiseResetToRejected(writer, error);
          }
          writer._readyPromise.catch(() => {});
        }
        function WritableStreamDefaultWriterGetDesiredSize(writer) {
          const stream = writer._ownerWritableStream;
          const state = stream._state;
          if (state === 'errored' || state === 'erroring') {
            return null;
          }
          if (state === 'closed') {
            return 0;
          }
          return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
        }
        function WritableStreamDefaultWriterRelease(writer) {
          const stream = writer._ownerWritableStream;
          assert(stream !== undefined);
          assert(stream._writer === writer);
          const releasedError = new TypeError('Writer was released and can no longer be used to monitor the stream\'s closedness');
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
          WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
          stream._writer = undefined;
          writer._ownerWritableStream = undefined;
        }
        function WritableStreamDefaultWriterWrite(writer, chunk) {
          const stream = writer._ownerWritableStream;
          assert(stream !== undefined);
          const controller = stream._writableStreamController;
          const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
          if (stream !== writer._ownerWritableStream) {
            return Promise.reject(defaultWriterLockException('write to'));
          }
          const state = stream._state;
          if (state === 'errored') {
            return Promise.reject(stream._storedError);
          }
          if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
            return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
          }
          if (state === 'erroring') {
            return Promise.reject(stream._storedError);
          }
          assert(state === 'writable');
          const promise = WritableStreamAddWriteRequest(stream);
          WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
          return promise;
        }
        var WritableStreamDefaultController = (function () {
          function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
            _classCallCheck(this, WritableStreamDefaultController);
            if (IsWritableStream(stream) === false) {
              throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
            }
            if (stream._writableStreamController !== undefined) {
              throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
            }
            this._controlledWritableStream = stream;
            this._underlyingSink = underlyingSink;
            this._queue = undefined;
            this._queueTotalSize = undefined;
            ResetQueue(this);
            this._started = false;
            const normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
            this._strategySize = normalizedStrategy.size;
            this._strategyHWM = normalizedStrategy.highWaterMark;
            const backpressure = WritableStreamDefaultControllerGetBackpressure(this);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          _createClass(WritableStreamDefaultController, [{
            key: 'error',
            value: function error(e) {
              if (IsWritableStreamDefaultController(this) === false) {
                throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
              }
              const state = this._controlledWritableStream._state;
              if (state !== 'writable') {
                return;
              }
              WritableStreamDefaultControllerError(this, e);
            },
          }, {
            key: '__abortSteps',
            value: function __abortSteps(reason) {
              return PromiseInvokeOrNoop(this._underlyingSink, 'abort', [reason]);
            },
          }, {
            key: '__errorSteps',
            value: function __errorSteps() {
              ResetQueue(this);
            },
          }, {
            key: '__startSteps',
            value: function __startSteps() {
              const _this = this;
              const startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
              const stream = this._controlledWritableStream;
              Promise.resolve(startResult).then(() => {
                assert(stream._state === 'writable' || stream._state === 'erroring');
                _this._started = true;
                WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this);
              }, (r) => {
                assert(stream._state === 'writable' || stream._state === 'erroring');
                _this._started = true;
                WritableStreamDealWithRejection(stream, r);
              }).catch(rethrowAssertionErrorRejection);
            },
          }]);
          return WritableStreamDefaultController;
        }());
        function WritableStreamDefaultControllerClose(controller) {
          EnqueueValueWithSize(controller, 'close', 0);
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
          const strategySize = controller._strategySize;
          if (strategySize === undefined) {
            return 1;
          }
          try {
            return strategySize(chunk);
          } catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
            return 1;
          }
        }
        function WritableStreamDefaultControllerGetDesiredSize(controller) {
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
          const writeRecord = { chunk };
          try {
            EnqueueValueWithSize(controller, writeRecord, chunkSize);
          } catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
            return;
          }
          const stream = controller._controlledWritableStream;
          if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._state === 'writable') {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }
        function IsWritableStreamDefaultController(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
            return false;
          }
          return true;
        }
        function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
          const stream = controller._controlledWritableStream;
          if (controller._started === false) {
            return;
          }
          if (stream._inFlightWriteRequest !== undefined) {
            return;
          }
          const state = stream._state;
          if (state === 'closed' || state === 'errored') {
            return;
          }
          if (state === 'erroring') {
            WritableStreamFinishErroring(stream);
            return;
          }
          if (controller._queue.length === 0) {
            return;
          }
          const writeRecord = PeekQueueValue(controller);
          if (writeRecord === 'close') {
            WritableStreamDefaultControllerProcessClose(controller);
          } else {
            WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
          }
        }
        function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
          if (controller._controlledWritableStream._state === 'writable') {
            WritableStreamDefaultControllerError(controller, error);
          }
        }
        function WritableStreamDefaultControllerProcessClose(controller) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkCloseRequestInFlight(stream);
          DequeueValue(controller);
          assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
          const sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
          sinkClosePromise.then(() => {
            WritableStreamFinishInFlightClose(stream);
          }, (reason) => {
            WritableStreamFinishInFlightCloseWithError(stream, reason);
          }).catch(rethrowAssertionErrorRejection);
        }
        function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
          const stream = controller._controlledWritableStream;
          WritableStreamMarkFirstWriteRequestInFlight(stream);
          const sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
          sinkWritePromise.then(() => {
            WritableStreamFinishInFlightWrite(stream);
            const state = stream._state;
            assert(state === 'writable' || state === 'erroring');
            DequeueValue(controller);
            if (WritableStreamCloseQueuedOrInFlight(stream) === false && state === 'writable') {
              const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
              WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }, (reason) => {
            WritableStreamFinishInFlightWriteWithError(stream, reason);
          }).catch(rethrowAssertionErrorRejection);
        }
        function WritableStreamDefaultControllerGetBackpressure(controller) {
          const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
          return desiredSize <= 0;
        }
        function WritableStreamDefaultControllerError(controller, error) {
          const stream = controller._controlledWritableStream;
          assert(stream._state === 'writable');
          WritableStreamStartErroring(stream, error);
        }
        function streamBrandCheckException(name) {
          return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
        }
        function defaultWriterBrandCheckException(name) {
          return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
        }
        function defaultWriterLockException(name) {
          return new TypeError(`Cannot ${name} a stream using a released writer`);
        }
        function defaultWriterClosedPromiseInitialize(writer) {
          writer._closedPromise = new Promise(((resolve, reject) => {
            writer._closedPromise_resolve = resolve;
            writer._closedPromise_reject = reject;
            writer._closedPromiseState = 'pending';
          }));
        }
        function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
          writer._closedPromise = Promise.reject(reason);
          writer._closedPromise_resolve = undefined;
          writer._closedPromise_reject = undefined;
          writer._closedPromiseState = 'rejected';
        }
        function defaultWriterClosedPromiseInitializeAsResolved(writer) {
          writer._closedPromise = Promise.resolve(undefined);
          writer._closedPromise_resolve = undefined;
          writer._closedPromise_reject = undefined;
          writer._closedPromiseState = 'resolved';
        }
        function defaultWriterClosedPromiseReject(writer, reason) {
          assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
          assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
          assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
          writer._closedPromise_reject(reason);
          writer._closedPromise_resolve = undefined;
          writer._closedPromise_reject = undefined;
          writer._closedPromiseState = 'rejected';
        }
        function defaultWriterClosedPromiseResetToRejected(writer, reason) {
          assert(writer._closedPromise_resolve === undefined, 'writer._closedPromise_resolve === undefined');
          assert(writer._closedPromise_reject === undefined, 'writer._closedPromise_reject === undefined');
          assert(writer._closedPromiseState !== 'pending', 'writer._closedPromiseState is not pending');
          writer._closedPromise = Promise.reject(reason);
          writer._closedPromiseState = 'rejected';
        }
        function defaultWriterClosedPromiseResolve(writer) {
          assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
          assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
          assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
          writer._closedPromise_resolve(undefined);
          writer._closedPromise_resolve = undefined;
          writer._closedPromise_reject = undefined;
          writer._closedPromiseState = 'resolved';
        }
        function defaultWriterReadyPromiseInitialize(writer) {
          writer._readyPromise = new Promise(((resolve, reject) => {
            writer._readyPromise_resolve = resolve;
            writer._readyPromise_reject = reject;
          }));
          writer._readyPromiseState = 'pending';
        }
        function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
          writer._readyPromise = Promise.reject(reason);
          writer._readyPromise_resolve = undefined;
          writer._readyPromise_reject = undefined;
          writer._readyPromiseState = 'rejected';
        }
        function defaultWriterReadyPromiseInitializeAsResolved(writer) {
          writer._readyPromise = Promise.resolve(undefined);
          writer._readyPromise_resolve = undefined;
          writer._readyPromise_reject = undefined;
          writer._readyPromiseState = 'fulfilled';
        }
        function defaultWriterReadyPromiseReject(writer, reason) {
          assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
          assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
          writer._readyPromise_reject(reason);
          writer._readyPromise_resolve = undefined;
          writer._readyPromise_reject = undefined;
          writer._readyPromiseState = 'rejected';
        }
        function defaultWriterReadyPromiseReset(writer) {
          assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
          assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
          writer._readyPromise = new Promise(((resolve, reject) => {
            writer._readyPromise_resolve = resolve;
            writer._readyPromise_reject = reject;
          }));
          writer._readyPromiseState = 'pending';
        }
        function defaultWriterReadyPromiseResetToRejected(writer, reason) {
          assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
          assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
          writer._readyPromise = Promise.reject(reason);
          writer._readyPromiseState = 'rejected';
        }
        function defaultWriterReadyPromiseResolve(writer) {
          assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
          assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
          writer._readyPromise_resolve(undefined);
          writer._readyPromise_resolve = undefined;
          writer._readyPromise_reject = undefined;
          writer._readyPromiseState = 'fulfilled';
        }
      }, function (module, exports, __w_pdfjs_require__) {
        const _require = __w_pdfjs_require__(0);
        const { IsFiniteNonNegativeNumber } = _require;
        const _require2 = __w_pdfjs_require__(1);
        const { assert } = _require2;
        exports.DequeueValue = function (container) {
          assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
          assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');
          const pair = container._queue.shift();
          container._queueTotalSize -= pair.size;
          if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0;
          }
          return pair.value;
        };
        exports.EnqueueValueWithSize = function (container, value, size) {
          assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].');
          size = Number(size);
          if (!IsFiniteNonNegativeNumber(size)) {
            throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
          }
          container._queue.push({
            value,
            size,
          });
          container._queueTotalSize += size;
        };
        exports.PeekQueueValue = function (container) {
          assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
          assert(container._queue.length > 0, 'Spec-level failure: should never peek at an empty queue.');
          const pair = container._queue[0];
          return pair.value;
        };
        exports.ResetQueue = function (container) {
          assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].');
          container._queue = [];
          container._queueTotalSize = 0;
        };
      }, function (module, exports, __w_pdfjs_require__) {
        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }());
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }
        const _require = __w_pdfjs_require__(0);
        const { ArrayBufferCopy } = _require;
        const { CreateIterResultObject } = _require;
        const { IsFiniteNonNegativeNumber } = _require;
        const { InvokeOrNoop } = _require;
        const { PromiseInvokeOrNoop } = _require;
        const { TransferArrayBuffer } = _require;
        const { ValidateAndNormalizeQueuingStrategy } = _require;
        const { ValidateAndNormalizeHighWaterMark } = _require;
        const _require2 = __w_pdfjs_require__(0);
        const { createArrayFromList } = _require2;
        const { createDataProperty } = _require2;
        const { typeIsObject } = _require2;
        const _require3 = __w_pdfjs_require__(1);
        const { assert } = _require3;
        const { rethrowAssertionErrorRejection } = _require3;
        const _require4 = __w_pdfjs_require__(3);
        const { DequeueValue } = _require4;
        const { EnqueueValueWithSize } = _require4;
        const { ResetQueue } = _require4;
        const _require5 = __w_pdfjs_require__(2);
        const { AcquireWritableStreamDefaultWriter } = _require5;
        const { IsWritableStream } = _require5;
        const { IsWritableStreamLocked } = _require5;
        const { WritableStreamAbort } = _require5;
        const { WritableStreamDefaultWriterCloseWithErrorPropagation } = _require5;
        const { WritableStreamDefaultWriterRelease } = _require5;
        const { WritableStreamDefaultWriterWrite } = _require5;
        const { WritableStreamCloseQueuedOrInFlight } = _require5;
        const ReadableStream = (function () {
          function ReadableStream() {
            const underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            const { size } = _ref;
            let { highWaterMark } = _ref;
            _classCallCheck(this, ReadableStream);
            this._state = 'readable';
            this._reader = undefined;
            this._storedError = undefined;
            this._disturbed = false;
            this._readableStreamController = undefined;
            const { type } = underlyingSource;
            const typeString = String(type);
            if (typeString === 'bytes') {
              if (highWaterMark === undefined) {
                highWaterMark = 0;
              }
              this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
            } else if (type === undefined) {
              if (highWaterMark === undefined) {
                highWaterMark = 1;
              }
              this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
            } else {
              throw new RangeError('Invalid type is specified');
            }
          }
          _createClass(ReadableStream, [{
            key: 'cancel',
            value: function cancel(reason) {
              if (IsReadableStream(this) === false) {
                return Promise.reject(streamBrandCheckException('cancel'));
              }
              if (IsReadableStreamLocked(this) === true) {
                return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
              }
              return ReadableStreamCancel(this, reason);
            },
          }, {
            key: 'getReader',
            value: function getReader() {
              const _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              let { mode } = _ref2;
              if (IsReadableStream(this) === false) {
                throw streamBrandCheckException('getReader');
              }
              if (mode === undefined) {
                return AcquireReadableStreamDefaultReader(this);
              }
              mode = String(mode);
              if (mode === 'byob') {
                return AcquireReadableStreamBYOBReader(this);
              }
              throw new RangeError('Invalid mode is specified');
            },
          }, {
            key: 'pipeThrough',
            value: function pipeThrough(_ref3, options) {
              const { writable } = _ref3;
              const { readable } = _ref3;
              const promise = this.pipeTo(writable, options);
              ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise);
              return readable;
            },
          }, {
            key: 'pipeTo',
            value: function pipeTo(dest) {
              const _this = this;
              const _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              let { preventClose } = _ref4;
              let { preventAbort } = _ref4;
              let { preventCancel } = _ref4;
              if (IsReadableStream(this) === false) {
                return Promise.reject(streamBrandCheckException('pipeTo'));
              }
              if (IsWritableStream(dest) === false) {
                return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo\'s first argument must be a WritableStream'));
              }
              preventClose = Boolean(preventClose);
              preventAbort = Boolean(preventAbort);
              preventCancel = Boolean(preventCancel);
              if (IsReadableStreamLocked(this) === true) {
                return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
              }
              if (IsWritableStreamLocked(dest) === true) {
                return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
              }
              const reader = AcquireReadableStreamDefaultReader(this);
              const writer = AcquireWritableStreamDefaultWriter(dest);
              let shuttingDown = false;
              let currentWrite = Promise.resolve();
              return new Promise(((resolve, reject) => {
                function pipeLoop() {
                  currentWrite = Promise.resolve();
                  if (shuttingDown === true) {
                    return Promise.resolve();
                  }
                  return writer._readyPromise.then(() => ReadableStreamDefaultReaderRead(reader).then((_ref5) => {
                    const { value } = _ref5;
                    const { done } = _ref5;
                    if (done === true) {
                      return;
                    }
                    currentWrite = WritableStreamDefaultWriterWrite(writer, value).catch(() => {});
                  })).then(pipeLoop);
                }
                isOrBecomesErrored(_this, reader._closedPromise, (storedError) => {
                  if (preventAbort === false) {
                    shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
                  } else {
                    shutdown(true, storedError);
                  }
                });
                isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
                  if (preventCancel === false) {
                    shutdownWithAction(() => ReadableStreamCancel(_this, storedError), true, storedError);
                  } else {
                    shutdown(true, storedError);
                  }
                });
                isOrBecomesClosed(_this, reader._closedPromise, () => {
                  if (preventClose === false) {
                    shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
                  } else {
                    shutdown();
                  }
                });
                if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
                  const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
                  if (preventCancel === false) {
                    shutdownWithAction(() => ReadableStreamCancel(_this, destClosed), true, destClosed);
                  } else {
                    shutdown(true, destClosed);
                  }
                }
                pipeLoop().catch((err) => {
                  currentWrite = Promise.resolve();
                  rethrowAssertionErrorRejection(err);
                });
                function waitForWritesToFinish() {
                  const oldCurrentWrite = currentWrite;
                  return currentWrite.then(() => (oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined));
                }
                function isOrBecomesErrored(stream, promise, action) {
                  if (stream._state === 'errored') {
                    action(stream._storedError);
                  } else {
                    promise.catch(action).catch(rethrowAssertionErrorRejection);
                  }
                }
                function isOrBecomesClosed(stream, promise, action) {
                  if (stream._state === 'closed') {
                    action();
                  } else {
                    promise.then(action).catch(rethrowAssertionErrorRejection);
                  }
                }
                function shutdownWithAction(action, originalIsError, originalError) {
                  if (shuttingDown === true) {
                    return;
                  }
                  shuttingDown = true;
                  if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
                    waitForWritesToFinish().then(doTheRest);
                  } else {
                    doTheRest();
                  }
                  function doTheRest() {
                    action().then(() => finalize(originalIsError, originalError), newError => finalize(true, newError)).catch(rethrowAssertionErrorRejection);
                  }
                }
                function shutdown(isError, error) {
                  if (shuttingDown === true) {
                    return;
                  }
                  shuttingDown = true;
                  if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
                    waitForWritesToFinish().then(() => finalize(isError, error)).catch(rethrowAssertionErrorRejection);
                  } else {
                    finalize(isError, error);
                  }
                }
                function finalize(isError, error) {
                  WritableStreamDefaultWriterRelease(writer);
                  ReadableStreamReaderGenericRelease(reader);
                  if (isError) {
                    reject(error);
                  } else {
                    resolve(undefined);
                  }
                }
              }));
            },
          }, {
            key: 'tee',
            value: function tee() {
              if (IsReadableStream(this) === false) {
                throw streamBrandCheckException('tee');
              }
              const branches = ReadableStreamTee(this, false);
              return createArrayFromList(branches);
            },
          }, {
            key: 'locked',
            get: function get() {
              if (IsReadableStream(this) === false) {
                throw streamBrandCheckException('locked');
              }
              return IsReadableStreamLocked(this);
            },
          }]);
          return ReadableStream;
        }());
        module.exports = {
          ReadableStream,
          IsReadableStreamDisturbed,
          ReadableStreamDefaultControllerClose,
          ReadableStreamDefaultControllerEnqueue,
          ReadableStreamDefaultControllerError,
          ReadableStreamDefaultControllerGetDesiredSize,
        };
        function AcquireReadableStreamBYOBReader(stream) {
          return new ReadableStreamBYOBReader(stream);
        }
        function AcquireReadableStreamDefaultReader(stream) {
          return new ReadableStreamDefaultReader(stream);
        }
        function IsReadableStream(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
            return false;
          }
          return true;
        }
        function IsReadableStreamDisturbed(stream) {
          assert(IsReadableStream(stream) === true, 'IsReadableStreamDisturbed should only be used on known readable streams');
          return stream._disturbed;
        }
        function IsReadableStreamLocked(stream) {
          assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');
          if (stream._reader === undefined) {
            return false;
          }
          return true;
        }
        function ReadableStreamTee(stream, cloneForBranch2) {
          assert(IsReadableStream(stream) === true);
          assert(typeof cloneForBranch2 === 'boolean');
          const reader = AcquireReadableStreamDefaultReader(stream);
          const teeState = {
            closedOrErrored: false,
            canceled1: false,
            canceled2: false,
            reason1: undefined,
            reason2: undefined,
          };
          teeState.promise = new Promise(((resolve) => {
            teeState._resolve = resolve;
          }));
          const pull = create_ReadableStreamTeePullFunction();
          pull._reader = reader;
          pull._teeState = teeState;
          pull._cloneForBranch2 = cloneForBranch2;
          const cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
          cancel1._stream = stream;
          cancel1._teeState = teeState;
          const cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
          cancel2._stream = stream;
          cancel2._teeState = teeState;
          const underlyingSource1 = Object.create(Object.prototype);
          createDataProperty(underlyingSource1, 'pull', pull);
          createDataProperty(underlyingSource1, 'cancel', cancel1);
          const branch1Stream = new ReadableStream(underlyingSource1);
          const underlyingSource2 = Object.create(Object.prototype);
          createDataProperty(underlyingSource2, 'pull', pull);
          createDataProperty(underlyingSource2, 'cancel', cancel2);
          const branch2Stream = new ReadableStream(underlyingSource2);
          pull._branch1 = branch1Stream._readableStreamController;
          pull._branch2 = branch2Stream._readableStreamController;
          reader._closedPromise.catch((r) => {
            if (teeState.closedOrErrored === true) {
              return;
            }
            ReadableStreamDefaultControllerError(pull._branch1, r);
            ReadableStreamDefaultControllerError(pull._branch2, r);
            teeState.closedOrErrored = true;
          });
          return [branch1Stream, branch2Stream];
        }
        function create_ReadableStreamTeePullFunction() {
          function f() {
            const reader = f._reader;
            const branch1 = f._branch1;
            const branch2 = f._branch2;
            const teeState = f._teeState;
            return ReadableStreamDefaultReaderRead(reader).then((result) => {
              assert(typeIsObject(result));
              const { value } = result;
              const { done } = result;
              assert(typeof done === 'boolean');
              if (done === true && teeState.closedOrErrored === false) {
                if (teeState.canceled1 === false) {
                  ReadableStreamDefaultControllerClose(branch1);
                }
                if (teeState.canceled2 === false) {
                  ReadableStreamDefaultControllerClose(branch2);
                }
                teeState.closedOrErrored = true;
              }
              if (teeState.closedOrErrored === true) {
                return;
              }
              const value1 = value;
              const value2 = value;
              if (teeState.canceled1 === false) {
                ReadableStreamDefaultControllerEnqueue(branch1, value1);
              }
              if (teeState.canceled2 === false) {
                ReadableStreamDefaultControllerEnqueue(branch2, value2);
              }
            });
          }
          return f;
        }
        function create_ReadableStreamTeeBranch1CancelFunction() {
          function f(reason) {
            const stream = f._stream;
            const teeState = f._teeState;
            teeState.canceled1 = true;
            teeState.reason1 = reason;
            if (teeState.canceled2 === true) {
              const compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              teeState._resolve(cancelResult);
            }
            return teeState.promise;
          }
          return f;
        }
        function create_ReadableStreamTeeBranch2CancelFunction() {
          function f(reason) {
            const stream = f._stream;
            const teeState = f._teeState;
            teeState.canceled2 = true;
            teeState.reason2 = reason;
            if (teeState.canceled1 === true) {
              const compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
              const cancelResult = ReadableStreamCancel(stream, compositeReason);
              teeState._resolve(cancelResult);
            }
            return teeState.promise;
          }
          return f;
        }
        function ReadableStreamAddReadIntoRequest(stream) {
          assert(IsReadableStreamBYOBReader(stream._reader) === true);
          assert(stream._state === 'readable' || stream._state === 'closed');
          const promise = new Promise(((resolve, reject) => {
            const readIntoRequest = {
              _resolve: resolve,
              _reject: reject,
            };
            stream._reader._readIntoRequests.push(readIntoRequest);
          }));
          return promise;
        }
        function ReadableStreamAddReadRequest(stream) {
          assert(IsReadableStreamDefaultReader(stream._reader) === true);
          assert(stream._state === 'readable');
          const promise = new Promise(((resolve, reject) => {
            const readRequest = {
              _resolve: resolve,
              _reject: reject,
            };
            stream._reader._readRequests.push(readRequest);
          }));
          return promise;
        }
        function ReadableStreamCancel(stream, reason) {
          stream._disturbed = true;
          if (stream._state === 'closed') {
            return Promise.resolve(undefined);
          }
          if (stream._state === 'errored') {
            return Promise.reject(stream._storedError);
          }
          ReadableStreamClose(stream);
          const sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);
          return sourceCancelPromise.then(() => undefined);
        }
        function ReadableStreamClose(stream) {
          assert(stream._state === 'readable');
          stream._state = 'closed';
          const reader = stream._reader;
          if (reader === undefined) {
            return undefined;
          }
          if (IsReadableStreamDefaultReader(reader) === true) {
            for (let i = 0; i < reader._readRequests.length; i++) {
              const { _resolve } = reader._readRequests[i];
              _resolve(CreateIterResultObject(undefined, true));
            }
            reader._readRequests = [];
          }
          defaultReaderClosedPromiseResolve(reader);
          return undefined;
        }
        function ReadableStreamError(stream, e) {
          assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
          assert(stream._state === 'readable', 'state must be readable');
          stream._state = 'errored';
          stream._storedError = e;
          const reader = stream._reader;
          if (reader === undefined) {
            return undefined;
          }
          if (IsReadableStreamDefaultReader(reader) === true) {
            for (let i = 0; i < reader._readRequests.length; i++) {
              const readRequest = reader._readRequests[i];
              readRequest._reject(e);
            }
            reader._readRequests = [];
          } else {
            assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');
            for (let _i = 0; _i < reader._readIntoRequests.length; _i++) {
              const readIntoRequest = reader._readIntoRequests[_i];
              readIntoRequest._reject(e);
            }
            reader._readIntoRequests = [];
          }
          defaultReaderClosedPromiseReject(reader, e);
          reader._closedPromise.catch(() => {});
        }
        function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
          const reader = stream._reader;
          assert(reader._readIntoRequests.length > 0);
          const readIntoRequest = reader._readIntoRequests.shift();
          readIntoRequest._resolve(CreateIterResultObject(chunk, done));
        }
        function ReadableStreamFulfillReadRequest(stream, chunk, done) {
          const reader = stream._reader;
          assert(reader._readRequests.length > 0);
          const readRequest = reader._readRequests.shift();
          readRequest._resolve(CreateIterResultObject(chunk, done));
        }
        function ReadableStreamGetNumReadIntoRequests(stream) {
          return stream._reader._readIntoRequests.length;
        }
        function ReadableStreamGetNumReadRequests(stream) {
          return stream._reader._readRequests.length;
        }
        function ReadableStreamHasBYOBReader(stream) {
          const reader = stream._reader;
          if (reader === undefined) {
            return false;
          }
          if (IsReadableStreamBYOBReader(reader) === false) {
            return false;
          }
          return true;
        }
        function ReadableStreamHasDefaultReader(stream) {
          const reader = stream._reader;
          if (reader === undefined) {
            return false;
          }
          if (IsReadableStreamDefaultReader(reader) === false) {
            return false;
          }
          return true;
        }
        var ReadableStreamDefaultReader = (function () {
          function ReadableStreamDefaultReader(stream) {
            _classCallCheck(this, ReadableStreamDefaultReader);
            if (IsReadableStream(stream) === false) {
              throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
            }
            if (IsReadableStreamLocked(stream) === true) {
              throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readRequests = [];
          }
          _createClass(ReadableStreamDefaultReader, [{
            key: 'cancel',
            value: function cancel(reason) {
              if (IsReadableStreamDefaultReader(this) === false) {
                return Promise.reject(defaultReaderBrandCheckException('cancel'));
              }
              if (this._ownerReadableStream === undefined) {
                return Promise.reject(readerLockException('cancel'));
              }
              return ReadableStreamReaderGenericCancel(this, reason);
            },
          }, {
            key: 'read',
            value: function read() {
              if (IsReadableStreamDefaultReader(this) === false) {
                return Promise.reject(defaultReaderBrandCheckException('read'));
              }
              if (this._ownerReadableStream === undefined) {
                return Promise.reject(readerLockException('read from'));
              }
              return ReadableStreamDefaultReaderRead(this);
            },
          }, {
            key: 'releaseLock',
            value: function releaseLock() {
              if (IsReadableStreamDefaultReader(this) === false) {
                throw defaultReaderBrandCheckException('releaseLock');
              }
              if (this._ownerReadableStream === undefined) {
                return;
              }
              if (this._readRequests.length > 0) {
                throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
              }
              ReadableStreamReaderGenericRelease(this);
            },
          }, {
            key: 'closed',
            get: function get() {
              if (IsReadableStreamDefaultReader(this) === false) {
                return Promise.reject(defaultReaderBrandCheckException('closed'));
              }
              return this._closedPromise;
            },
          }]);
          return ReadableStreamDefaultReader;
        }());
        var ReadableStreamBYOBReader = (function () {
          function ReadableStreamBYOBReader(stream) {
            _classCallCheck(this, ReadableStreamBYOBReader);
            if (!IsReadableStream(stream)) {
              throw new TypeError('ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source');
            }
            if (IsReadableByteStreamController(stream._readableStreamController) === false) {
              throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
            }
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError('This stream has already been locked for exclusive reading by another reader');
            }
            ReadableStreamReaderGenericInitialize(this, stream);
            this._readIntoRequests = [];
          }
          _createClass(ReadableStreamBYOBReader, [{
            key: 'cancel',
            value: function cancel(reason) {
              if (!IsReadableStreamBYOBReader(this)) {
                return Promise.reject(byobReaderBrandCheckException('cancel'));
              }
              if (this._ownerReadableStream === undefined) {
                return Promise.reject(readerLockException('cancel'));
              }
              return ReadableStreamReaderGenericCancel(this, reason);
            },
          }, {
            key: 'read',
            value: function read(view) {
              if (!IsReadableStreamBYOBReader(this)) {
                return Promise.reject(byobReaderBrandCheckException('read'));
              }
              if (this._ownerReadableStream === undefined) {
                return Promise.reject(readerLockException('read from'));
              }
              if (!ArrayBuffer.isView(view)) {
                return Promise.reject(new TypeError('view must be an array buffer view'));
              }
              if (view.byteLength === 0) {
                return Promise.reject(new TypeError('view must have non-zero byteLength'));
              }
              return ReadableStreamBYOBReaderRead(this, view);
            },
          }, {
            key: 'releaseLock',
            value: function releaseLock() {
              if (!IsReadableStreamBYOBReader(this)) {
                throw byobReaderBrandCheckException('releaseLock');
              }
              if (this._ownerReadableStream === undefined) {
                return;
              }
              if (this._readIntoRequests.length > 0) {
                throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
              }
              ReadableStreamReaderGenericRelease(this);
            },
          }, {
            key: 'closed',
            get: function get() {
              if (!IsReadableStreamBYOBReader(this)) {
                return Promise.reject(byobReaderBrandCheckException('closed'));
              }
              return this._closedPromise;
            },
          }]);
          return ReadableStreamBYOBReader;
        }());
        function IsReadableStreamBYOBReader(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
            return false;
          }
          return true;
        }
        function IsReadableStreamDefaultReader(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
            return false;
          }
          return true;
        }
        function ReadableStreamReaderGenericInitialize(reader, stream) {
          reader._ownerReadableStream = stream;
          stream._reader = reader;
          if (stream._state === 'readable') {
            defaultReaderClosedPromiseInitialize(reader);
          } else if (stream._state === 'closed') {
            defaultReaderClosedPromiseInitializeAsResolved(reader);
          } else {
            assert(stream._state === 'errored', 'state must be errored');
            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
            reader._closedPromise.catch(() => {});
          }
        }
        function ReadableStreamReaderGenericCancel(reader, reason) {
          const stream = reader._ownerReadableStream;
          assert(stream !== undefined);
          return ReadableStreamCancel(stream, reason);
        }
        function ReadableStreamReaderGenericRelease(reader) {
          assert(reader._ownerReadableStream !== undefined);
          assert(reader._ownerReadableStream._reader === reader);
          if (reader._ownerReadableStream._state === 'readable') {
            defaultReaderClosedPromiseReject(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
          } else {
            defaultReaderClosedPromiseResetToRejected(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
          }
          reader._closedPromise.catch(() => {});
          reader._ownerReadableStream._reader = undefined;
          reader._ownerReadableStream = undefined;
        }
        function ReadableStreamBYOBReaderRead(reader, view) {
          const stream = reader._ownerReadableStream;
          assert(stream !== undefined);
          stream._disturbed = true;
          if (stream._state === 'errored') {
            return Promise.reject(stream._storedError);
          }
          return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
        }
        function ReadableStreamDefaultReaderRead(reader) {
          const stream = reader._ownerReadableStream;
          assert(stream !== undefined);
          stream._disturbed = true;
          if (stream._state === 'closed') {
            return Promise.resolve(CreateIterResultObject(undefined, true));
          }
          if (stream._state === 'errored') {
            return Promise.reject(stream._storedError);
          }
          assert(stream._state === 'readable');
          return stream._readableStreamController.__pullSteps();
        }
        var ReadableStreamDefaultController = (function () {
          function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
            _classCallCheck(this, ReadableStreamDefaultController);
            if (IsReadableStream(stream) === false) {
              throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
            }
            if (stream._readableStreamController !== undefined) {
              throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
            }
            this._controlledReadableStream = stream;
            this._underlyingSource = underlyingSource;
            this._queue = undefined;
            this._queueTotalSize = undefined;
            ResetQueue(this);
            this._started = false;
            this._closeRequested = false;
            this._pullAgain = false;
            this._pulling = false;
            const normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
            this._strategySize = normalizedStrategy.size;
            this._strategyHWM = normalizedStrategy.highWaterMark;
            const controller = this;
            const startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
            Promise.resolve(startResult).then(() => {
              controller._started = true;
              assert(controller._pulling === false);
              assert(controller._pullAgain === false);
              ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }, (r) => {
              ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
            }).catch(rethrowAssertionErrorRejection);
          }
          _createClass(ReadableStreamDefaultController, [{
            key: 'close',
            value: function close() {
              if (IsReadableStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('close');
              }
              if (this._closeRequested === true) {
                throw new TypeError('The stream has already been closed; do not close it again!');
              }
              const state = this._controlledReadableStream._state;
              if (state !== 'readable') {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
              }
              ReadableStreamDefaultControllerClose(this);
            },
          }, {
            key: 'enqueue',
            value: function enqueue(chunk) {
              if (IsReadableStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('enqueue');
              }
              if (this._closeRequested === true) {
                throw new TypeError('stream is closed or draining');
              }
              const state = this._controlledReadableStream._state;
              if (state !== 'readable') {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
              }
              return ReadableStreamDefaultControllerEnqueue(this, chunk);
            },
          }, {
            key: 'error',
            value: function error(e) {
              if (IsReadableStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('error');
              }
              const stream = this._controlledReadableStream;
              if (stream._state !== 'readable') {
                throw new TypeError(`The stream is ${stream._state} and so cannot be errored`);
              }
              ReadableStreamDefaultControllerError(this, e);
            },
          }, {
            key: '__cancelSteps',
            value: function __cancelSteps(reason) {
              ResetQueue(this);
              return PromiseInvokeOrNoop(this._underlyingSource, 'cancel', [reason]);
            },
          }, {
            key: '__pullSteps',
            value: function __pullSteps() {
              const stream = this._controlledReadableStream;
              if (this._queue.length > 0) {
                const chunk = DequeueValue(this);
                if (this._closeRequested === true && this._queue.length === 0) {
                  ReadableStreamClose(stream);
                } else {
                  ReadableStreamDefaultControllerCallPullIfNeeded(this);
                }
                return Promise.resolve(CreateIterResultObject(chunk, false));
              }
              const pendingPromise = ReadableStreamAddReadRequest(stream);
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
              return pendingPromise;
            },
          }, {
            key: 'desiredSize',
            get: function get() {
              if (IsReadableStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('desiredSize');
              }
              return ReadableStreamDefaultControllerGetDesiredSize(this);
            },
          }]);
          return ReadableStreamDefaultController;
        }());
        function IsReadableStreamDefaultController(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
            return false;
          }
          return true;
        }
        function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
          if (shouldPull === false) {
            return undefined;
          }
          if (controller._pulling === true) {
            controller._pullAgain = true;
            return undefined;
          }
          assert(controller._pullAgain === false);
          controller._pulling = true;
          const pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
          pullPromise.then(() => {
            controller._pulling = false;
            if (controller._pullAgain === true) {
              controller._pullAgain = false;
              return ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }
            return undefined;
          }, (e) => {
            ReadableStreamDefaultControllerErrorIfNeeded(controller, e);
          }).catch(rethrowAssertionErrorRejection);
          return undefined;
        }
        function ReadableStreamDefaultControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableStream;
          if (stream._state === 'closed' || stream._state === 'errored') {
            return false;
          }
          if (controller._closeRequested === true) {
            return false;
          }
          if (controller._started === false) {
            return false;
          }
          if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
          if (desiredSize > 0) {
            return true;
          }
          return false;
        }
        function ReadableStreamDefaultControllerClose(controller) {
          const stream = controller._controlledReadableStream;
          assert(controller._closeRequested === false);
          assert(stream._state === 'readable');
          controller._closeRequested = true;
          if (controller._queue.length === 0) {
            ReadableStreamClose(stream);
          }
        }
        function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
          const stream = controller._controlledReadableStream;
          assert(controller._closeRequested === false);
          assert(stream._state === 'readable');
          if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
            ReadableStreamFulfillReadRequest(stream, chunk, false);
          } else {
            let chunkSize = 1;
            if (controller._strategySize !== undefined) {
              const strategySize = controller._strategySize;
              try {
                chunkSize = strategySize(chunk);
              } catch (chunkSizeE) {
                ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
                throw chunkSizeE;
              }
            }
            try {
              EnqueueValueWithSize(controller, chunk, chunkSize);
            } catch (enqueueE) {
              ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
              throw enqueueE;
            }
          }
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          return undefined;
        }
        function ReadableStreamDefaultControllerError(controller, e) {
          const stream = controller._controlledReadableStream;
          assert(stream._state === 'readable');
          ResetQueue(controller);
          ReadableStreamError(stream, e);
        }
        function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
          if (controller._controlledReadableStream._state === 'readable') {
            ReadableStreamDefaultControllerError(controller, e);
          }
        }
        function ReadableStreamDefaultControllerGetDesiredSize(controller) {
          const stream = controller._controlledReadableStream;
          const state = stream._state;
          if (state === 'errored') {
            return null;
          }
          if (state === 'closed') {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        const ReadableStreamBYOBRequest = (function () {
          function ReadableStreamBYOBRequest(controller, view) {
            _classCallCheck(this, ReadableStreamBYOBRequest);
            this._associatedReadableByteStreamController = controller;
            this._view = view;
          }
          _createClass(ReadableStreamBYOBRequest, [{
            key: 'respond',
            value: function respond(bytesWritten) {
              if (IsReadableStreamBYOBRequest(this) === false) {
                throw byobRequestBrandCheckException('respond');
              }
              if (this._associatedReadableByteStreamController === undefined) {
                throw new TypeError('This BYOB request has been invalidated');
              }
              ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
            },
          }, {
            key: 'respondWithNewView',
            value: function respondWithNewView(view) {
              if (IsReadableStreamBYOBRequest(this) === false) {
                throw byobRequestBrandCheckException('respond');
              }
              if (this._associatedReadableByteStreamController === undefined) {
                throw new TypeError('This BYOB request has been invalidated');
              }
              if (!ArrayBuffer.isView(view)) {
                throw new TypeError('You can only respond with array buffer views');
              }
              ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
            },
          }, {
            key: 'view',
            get: function get() {
              return this._view;
            },
          }]);
          return ReadableStreamBYOBRequest;
        }());
        var ReadableByteStreamController = (function () {
          function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
            _classCallCheck(this, ReadableByteStreamController);
            if (IsReadableStream(stream) === false) {
              throw new TypeError('ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source');
            }
            if (stream._readableStreamController !== undefined) {
              throw new TypeError('ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' + 'source');
            }
            this._controlledReadableStream = stream;
            this._underlyingByteSource = underlyingByteSource;
            this._pullAgain = false;
            this._pulling = false;
            ReadableByteStreamControllerClearPendingPullIntos(this);
            this._queue = this._queueTotalSize = undefined;
            ResetQueue(this);
            this._closeRequested = false;
            this._started = false;
            this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
            const { autoAllocateChunkSize } = underlyingByteSource;
            if (autoAllocateChunkSize !== undefined) {
              if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
                throw new RangeError('autoAllocateChunkSize must be a positive integer');
              }
            }
            this._autoAllocateChunkSize = autoAllocateChunkSize;
            this._pendingPullIntos = [];
            const controller = this;
            const startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
            Promise.resolve(startResult).then(() => {
              controller._started = true;
              assert(controller._pulling === false);
              assert(controller._pullAgain === false);
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }, (r) => {
              if (stream._state === 'readable') {
                ReadableByteStreamControllerError(controller, r);
              }
            }).catch(rethrowAssertionErrorRejection);
          }
          _createClass(ReadableByteStreamController, [{
            key: 'close',
            value: function close() {
              if (IsReadableByteStreamController(this) === false) {
                throw byteStreamControllerBrandCheckException('close');
              }
              if (this._closeRequested === true) {
                throw new TypeError('The stream has already been closed; do not close it again!');
              }
              const state = this._controlledReadableStream._state;
              if (state !== 'readable') {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
              }
              ReadableByteStreamControllerClose(this);
            },
          }, {
            key: 'enqueue',
            value: function enqueue(chunk) {
              if (IsReadableByteStreamController(this) === false) {
                throw byteStreamControllerBrandCheckException('enqueue');
              }
              if (this._closeRequested === true) {
                throw new TypeError('stream is closed or draining');
              }
              const state = this._controlledReadableStream._state;
              if (state !== 'readable') {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
              }
              if (!ArrayBuffer.isView(chunk)) {
                throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
              }
              ReadableByteStreamControllerEnqueue(this, chunk);
            },
          }, {
            key: 'error',
            value: function error(e) {
              if (IsReadableByteStreamController(this) === false) {
                throw byteStreamControllerBrandCheckException('error');
              }
              const stream = this._controlledReadableStream;
              if (stream._state !== 'readable') {
                throw new TypeError(`The stream is ${stream._state} and so cannot be errored`);
              }
              ReadableByteStreamControllerError(this, e);
            },
          }, {
            key: '__cancelSteps',
            value: function __cancelSteps(reason) {
              if (this._pendingPullIntos.length > 0) {
                const firstDescriptor = this._pendingPullIntos[0];
                firstDescriptor.bytesFilled = 0;
              }
              ResetQueue(this);
              return PromiseInvokeOrNoop(this._underlyingByteSource, 'cancel', [reason]);
            },
          }, {
            key: '__pullSteps',
            value: function __pullSteps() {
              const stream = this._controlledReadableStream;
              assert(ReadableStreamHasDefaultReader(stream) === true);
              if (this._queueTotalSize > 0) {
                assert(ReadableStreamGetNumReadRequests(stream) === 0);
                const entry = this._queue.shift();
                this._queueTotalSize -= entry.byteLength;
                ReadableByteStreamControllerHandleQueueDrain(this);
                let view = void 0;
                try {
                  view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
                } catch (viewE) {
                  return Promise.reject(viewE);
                }
                return Promise.resolve(CreateIterResultObject(view, false));
              }
              const autoAllocateChunkSize = this._autoAllocateChunkSize;
              if (autoAllocateChunkSize !== undefined) {
                let buffer = void 0;
                try {
                  buffer = new ArrayBuffer(autoAllocateChunkSize);
                } catch (bufferE) {
                  return Promise.reject(bufferE);
                }
                const pullIntoDescriptor = {
                  buffer,
                  byteOffset: 0,
                  byteLength: autoAllocateChunkSize,
                  bytesFilled: 0,
                  elementSize: 1,
                  ctor: Uint8Array,
                  readerType: 'default',
                };
                this._pendingPullIntos.push(pullIntoDescriptor);
              }
              const promise = ReadableStreamAddReadRequest(stream);
              ReadableByteStreamControllerCallPullIfNeeded(this);
              return promise;
            },
          }, {
            key: 'byobRequest',
            get: function get() {
              if (IsReadableByteStreamController(this) === false) {
                throw byteStreamControllerBrandCheckException('byobRequest');
              }
              if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
                const firstDescriptor = this._pendingPullIntos[0];
                const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
                this._byobRequest = new ReadableStreamBYOBRequest(this, view);
              }
              return this._byobRequest;
            },
          }, {
            key: 'desiredSize',
            get: function get() {
              if (IsReadableByteStreamController(this) === false) {
                throw byteStreamControllerBrandCheckException('desiredSize');
              }
              return ReadableByteStreamControllerGetDesiredSize(this);
            },
          }]);
          return ReadableByteStreamController;
        }());
        function IsReadableByteStreamController(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
            return false;
          }
          return true;
        }
        function IsReadableStreamBYOBRequest(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
            return false;
          }
          return true;
        }
        function ReadableByteStreamControllerCallPullIfNeeded(controller) {
          const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
          if (shouldPull === false) {
            return undefined;
          }
          if (controller._pulling === true) {
            controller._pullAgain = true;
            return undefined;
          }
          assert(controller._pullAgain === false);
          controller._pulling = true;
          const pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
          pullPromise.then(() => {
            controller._pulling = false;
            if (controller._pullAgain === true) {
              controller._pullAgain = false;
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
          }, (e) => {
            if (controller._controlledReadableStream._state === 'readable') {
              ReadableByteStreamControllerError(controller, e);
            }
          }).catch(rethrowAssertionErrorRejection);
          return undefined;
        }
        function ReadableByteStreamControllerClearPendingPullIntos(controller) {
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          controller._pendingPullIntos = [];
        }
        function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
          assert(stream._state !== 'errored', 'state must not be errored');
          let done = false;
          if (stream._state === 'closed') {
            assert(pullIntoDescriptor.bytesFilled === 0);
            done = true;
          }
          const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
          if (pullIntoDescriptor.readerType === 'default') {
            ReadableStreamFulfillReadRequest(stream, filledView, done);
          } else {
            assert(pullIntoDescriptor.readerType === 'byob');
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
          }
        }
        function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
          const { bytesFilled } = pullIntoDescriptor;
          const { elementSize } = pullIntoDescriptor;
          assert(bytesFilled <= pullIntoDescriptor.byteLength);
          assert(bytesFilled % elementSize === 0);
          return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
        }
        function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
          controller._queue.push({
            buffer,
            byteOffset,
            byteLength,
          });
          controller._queueTotalSize += byteLength;
        }
        function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
          const { elementSize } = pullIntoDescriptor;
          const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
          const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
          const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
          const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
          let totalBytesToCopyRemaining = maxBytesToCopy;
          let ready = false;
          if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
            ready = true;
          }
          const queue = controller._queue;
          while (totalBytesToCopyRemaining > 0) {
            const headOfQueue = queue[0];
            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
            if (headOfQueue.byteLength === bytesToCopy) {
              queue.shift();
            } else {
              headOfQueue.byteOffset += bytesToCopy;
              headOfQueue.byteLength -= bytesToCopy;
            }
            controller._queueTotalSize -= bytesToCopy;
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
            totalBytesToCopyRemaining -= bytesToCopy;
          }
          if (ready === false) {
            assert(controller._queueTotalSize === 0, 'queue must be empty');
            assert(pullIntoDescriptor.bytesFilled > 0);
            assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
          }
          return ready;
        }
        function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
          assert(controller._pendingPullIntos.length === 0 || controller._pendingPullIntos[0] === pullIntoDescriptor);
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          pullIntoDescriptor.bytesFilled += size;
        }
        function ReadableByteStreamControllerHandleQueueDrain(controller) {
          assert(controller._controlledReadableStream._state === 'readable');
          if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
            ReadableStreamClose(controller._controlledReadableStream);
          } else {
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
        }
        function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
          if (controller._byobRequest === undefined) {
            return;
          }
          controller._byobRequest._associatedReadableByteStreamController = undefined;
          controller._byobRequest._view = undefined;
          controller._byobRequest = undefined;
        }
        function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
          assert(controller._closeRequested === false);
          while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
              return;
            }
            const pullIntoDescriptor = controller._pendingPullIntos[0];
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerPullInto(controller, view) {
          const stream = controller._controlledReadableStream;
          let elementSize = 1;
          if (view.constructor !== DataView) {
            elementSize = view.constructor.BYTES_PER_ELEMENT;
          }
          const ctor = view.constructor;
          const pullIntoDescriptor = {
            buffer: view.buffer,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize,
            ctor,
            readerType: 'byob',
          };
          if (controller._pendingPullIntos.length > 0) {
            pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
            controller._pendingPullIntos.push(pullIntoDescriptor);
            return ReadableStreamAddReadIntoRequest(stream);
          }
          if (stream._state === 'closed') {
            const emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
            return Promise.resolve(CreateIterResultObject(emptyView, true));
          }
          if (controller._queueTotalSize > 0) {
            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
              const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
              ReadableByteStreamControllerHandleQueueDrain(controller);
              return Promise.resolve(CreateIterResultObject(filledView, false));
            }
            if (controller._closeRequested === true) {
              const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
              ReadableByteStreamControllerError(controller, e);
              return Promise.reject(e);
            }
          }
          pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
          controller._pendingPullIntos.push(pullIntoDescriptor);
          const promise = ReadableStreamAddReadIntoRequest(stream);
          ReadableByteStreamControllerCallPullIfNeeded(controller);
          return promise;
        }
        function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
          firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
          assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
          const stream = controller._controlledReadableStream;
          if (ReadableStreamHasBYOBReader(stream) === true) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
              const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
              ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
            }
          }
        }
        function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
          if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
            throw new RangeError('bytesWritten out of range');
          }
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
          if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
            return;
          }
          ReadableByteStreamControllerShiftPendingPullInto(controller);
          const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
          if (remainderSize > 0) {
            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
            const remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
          }
          pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
          pullIntoDescriptor.bytesFilled -= remainderSize;
          ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        }
        function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos[0];
          const stream = controller._controlledReadableStream;
          if (stream._state === 'closed') {
            if (bytesWritten !== 0) {
              throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
            }
            ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
          } else {
            assert(stream._state === 'readable');
            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
          }
        }
        function ReadableByteStreamControllerShiftPendingPullInto(controller) {
          const descriptor = controller._pendingPullIntos.shift();
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          return descriptor;
        }
        function ReadableByteStreamControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableStream;
          if (stream._state !== 'readable') {
            return false;
          }
          if (controller._closeRequested === true) {
            return false;
          }
          if (controller._started === false) {
            return false;
          }
          if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
            return true;
          }
          if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            return true;
          }
          if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
            return true;
          }
          return false;
        }
        function ReadableByteStreamControllerClose(controller) {
          const stream = controller._controlledReadableStream;
          assert(controller._closeRequested === false);
          assert(stream._state === 'readable');
          if (controller._queueTotalSize > 0) {
            controller._closeRequested = true;
            return;
          }
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos[0];
            if (firstPendingPullInto.bytesFilled > 0) {
              const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
              ReadableByteStreamControllerError(controller, e);
              throw e;
            }
          }
          ReadableStreamClose(stream);
        }
        function ReadableByteStreamControllerEnqueue(controller, chunk) {
          const stream = controller._controlledReadableStream;
          assert(controller._closeRequested === false);
          assert(stream._state === 'readable');
          const { buffer } = chunk;
          const { byteOffset } = chunk;
          const { byteLength } = chunk;
          const transferredBuffer = TransferArrayBuffer(buffer);
          if (ReadableStreamHasDefaultReader(stream) === true) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            } else {
              assert(controller._queue.length === 0);
              const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
              ReadableStreamFulfillReadRequest(stream, transferredView, false);
            }
          } else if (ReadableStreamHasBYOBReader(stream) === true) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
          } else {
            assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          }
        }
        function ReadableByteStreamControllerError(controller, e) {
          const stream = controller._controlledReadableStream;
          assert(stream._state === 'readable');
          ReadableByteStreamControllerClearPendingPullIntos(controller);
          ResetQueue(controller);
          ReadableStreamError(stream, e);
        }
        function ReadableByteStreamControllerGetDesiredSize(controller) {
          const stream = controller._controlledReadableStream;
          const state = stream._state;
          if (state === 'errored') {
            return null;
          }
          if (state === 'closed') {
            return 0;
          }
          return controller._strategyHWM - controller._queueTotalSize;
        }
        function ReadableByteStreamControllerRespond(controller, bytesWritten) {
          bytesWritten = Number(bytesWritten);
          if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
            throw new RangeError('bytesWritten must be a finite');
          }
          assert(controller._pendingPullIntos.length > 0);
          ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
        }
        function ReadableByteStreamControllerRespondWithNewView(controller, view) {
          assert(controller._pendingPullIntos.length > 0);
          const firstDescriptor = controller._pendingPullIntos[0];
          if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
            throw new RangeError('The region specified by view does not match byobRequest');
          }
          if (firstDescriptor.byteLength !== view.byteLength) {
            throw new RangeError('The buffer of view has different capacity than byobRequest');
          }
          firstDescriptor.buffer = view.buffer;
          ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
        }
        function streamBrandCheckException(name) {
          return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
        }
        function readerLockException(name) {
          return new TypeError(`Cannot ${name} a stream using a released reader`);
        }
        function defaultReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
        }
        function defaultReaderClosedPromiseInitialize(reader) {
          reader._closedPromise = new Promise(((resolve, reject) => {
            reader._closedPromise_resolve = resolve;
            reader._closedPromise_reject = reject;
          }));
        }
        function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
          reader._closedPromise = Promise.reject(reason);
          reader._closedPromise_resolve = undefined;
          reader._closedPromise_reject = undefined;
        }
        function defaultReaderClosedPromiseInitializeAsResolved(reader) {
          reader._closedPromise = Promise.resolve(undefined);
          reader._closedPromise_resolve = undefined;
          reader._closedPromise_reject = undefined;
        }
        function defaultReaderClosedPromiseReject(reader, reason) {
          assert(reader._closedPromise_resolve !== undefined);
          assert(reader._closedPromise_reject !== undefined);
          reader._closedPromise_reject(reason);
          reader._closedPromise_resolve = undefined;
          reader._closedPromise_reject = undefined;
        }
        function defaultReaderClosedPromiseResetToRejected(reader, reason) {
          assert(reader._closedPromise_resolve === undefined);
          assert(reader._closedPromise_reject === undefined);
          reader._closedPromise = Promise.reject(reason);
        }
        function defaultReaderClosedPromiseResolve(reader) {
          assert(reader._closedPromise_resolve !== undefined);
          assert(reader._closedPromise_reject !== undefined);
          reader._closedPromise_resolve(undefined);
          reader._closedPromise_resolve = undefined;
          reader._closedPromise_reject = undefined;
        }
        function byobReaderBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
        }
        function defaultControllerBrandCheckException(name) {
          return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
        }
        function byobRequestBrandCheckException(name) {
          return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
        }
        function byteStreamControllerBrandCheckException(name) {
          return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
        }
        function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise) {
          try {
            Promise.prototype.then.call(promise, undefined, () => {});
          } catch (e) {}
        }
      }, function (module, exports, __w_pdfjs_require__) {
        const transformStream = __w_pdfjs_require__(6);
        const readableStream = __w_pdfjs_require__(4);
        const writableStream = __w_pdfjs_require__(2);
        exports.TransformStream = transformStream.TransformStream;
        exports.ReadableStream = readableStream.ReadableStream;
        exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
        exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
        exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
        exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
        exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
        exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
        exports.IsWritableStream = writableStream.IsWritableStream;
        exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
        exports.WritableStream = writableStream.WritableStream;
        exports.WritableStreamAbort = writableStream.WritableStreamAbort;
        exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
        exports.WritableStreamDefaultWriterCloseWithErrorPropagation = writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
        exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
        exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
      }, function (module, exports, __w_pdfjs_require__) {
        const _createClass = (function () {
          function defineProperties(target, props) {
            for (let i = 0; i < props.length; i++) {
              const descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }());
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }
        const _require = __w_pdfjs_require__(1);
        const { assert } = _require;
        const _require2 = __w_pdfjs_require__(0);
        const { InvokeOrNoop } = _require2;
        const { PromiseInvokeOrPerformFallback } = _require2;
        const { PromiseInvokeOrNoop } = _require2;
        const { typeIsObject } = _require2;
        const _require3 = __w_pdfjs_require__(4);
        const { ReadableStream } = _require3;
        const { ReadableStreamDefaultControllerClose } = _require3;
        const { ReadableStreamDefaultControllerEnqueue } = _require3;
        const { ReadableStreamDefaultControllerError } = _require3;
        const { ReadableStreamDefaultControllerGetDesiredSize } = _require3;
        const _require4 = __w_pdfjs_require__(2);
        const { WritableStream } = _require4;
        const { WritableStreamDefaultControllerError } = _require4;
        function TransformStreamCloseReadable(transformStream) {
          if (transformStream._errored === true) {
            throw new TypeError('TransformStream is already errored');
          }
          if (transformStream._readableClosed === true) {
            throw new TypeError('Readable side is already closed');
          }
          TransformStreamCloseReadableInternal(transformStream);
        }
        function TransformStreamEnqueueToReadable(transformStream, chunk) {
          if (transformStream._errored === true) {
            throw new TypeError('TransformStream is already errored');
          }
          if (transformStream._readableClosed === true) {
            throw new TypeError('Readable side is already closed');
          }
          const controller = transformStream._readableController;
          try {
            ReadableStreamDefaultControllerEnqueue(controller, chunk);
          } catch (e) {
            transformStream._readableClosed = true;
            TransformStreamErrorIfNeeded(transformStream, e);
            throw transformStream._storedError;
          }
          const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
          const maybeBackpressure = desiredSize <= 0;
          if (maybeBackpressure === true && transformStream._backpressure === false) {
            TransformStreamSetBackpressure(transformStream, true);
          }
        }
        function TransformStreamError(transformStream, e) {
          if (transformStream._errored === true) {
            throw new TypeError('TransformStream is already errored');
          }
          TransformStreamErrorInternal(transformStream, e);
        }
        function TransformStreamCloseReadableInternal(transformStream) {
          assert(transformStream._errored === false);
          assert(transformStream._readableClosed === false);
          try {
            ReadableStreamDefaultControllerClose(transformStream._readableController);
          } catch (e) {
            assert(false);
          }
          transformStream._readableClosed = true;
        }
        function TransformStreamErrorIfNeeded(transformStream, e) {
          if (transformStream._errored === false) {
            TransformStreamErrorInternal(transformStream, e);
          }
        }
        function TransformStreamErrorInternal(transformStream, e) {
          assert(transformStream._errored === false);
          transformStream._errored = true;
          transformStream._storedError = e;
          if (transformStream._writableDone === false) {
            WritableStreamDefaultControllerError(transformStream._writableController, e);
          }
          if (transformStream._readableClosed === false) {
            ReadableStreamDefaultControllerError(transformStream._readableController, e);
          }
        }
        function TransformStreamReadableReadyPromise(transformStream) {
          assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
          if (transformStream._backpressure === false) {
            return Promise.resolve();
          }
          assert(transformStream._backpressure === true, '_backpressure should have been initialized');
          return transformStream._backpressureChangePromise;
        }
        function TransformStreamSetBackpressure(transformStream, backpressure) {
          assert(transformStream._backpressure !== backpressure, 'TransformStreamSetBackpressure() should be called only when backpressure is changed');
          if (transformStream._backpressureChangePromise !== undefined) {
            transformStream._backpressureChangePromise_resolve(backpressure);
          }
          transformStream._backpressureChangePromise = new Promise(((resolve) => {
            transformStream._backpressureChangePromise_resolve = resolve;
          }));
          transformStream._backpressureChangePromise.then((resolution) => {
            assert(resolution !== backpressure, '_backpressureChangePromise should be fulfilled only when backpressure is changed');
          });
          transformStream._backpressure = backpressure;
        }
        function TransformStreamDefaultTransform(chunk, transformStreamController) {
          const transformStream = transformStreamController._controlledTransformStream;
          TransformStreamEnqueueToReadable(transformStream, chunk);
          return Promise.resolve();
        }
        function TransformStreamTransform(transformStream, chunk) {
          assert(transformStream._errored === false);
          assert(transformStream._transforming === false);
          assert(transformStream._backpressure === false);
          transformStream._transforming = true;
          const transformer = transformStream._transformer;
          const controller = transformStream._transformStreamController;
          const transformPromise = PromiseInvokeOrPerformFallback(transformer, 'transform', [chunk, controller], TransformStreamDefaultTransform, [chunk, controller]);
          return transformPromise.then(() => {
            transformStream._transforming = false;
            return TransformStreamReadableReadyPromise(transformStream);
          }, (e) => {
            TransformStreamErrorIfNeeded(transformStream, e);
            return Promise.reject(e);
          });
        }
        function IsTransformStreamDefaultController(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
            return false;
          }
          return true;
        }
        function IsTransformStream(x) {
          if (!typeIsObject(x)) {
            return false;
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
            return false;
          }
          return true;
        }
        const TransformStreamSink = (function () {
          function TransformStreamSink(transformStream, startPromise) {
            _classCallCheck(this, TransformStreamSink);
            this._transformStream = transformStream;
            this._startPromise = startPromise;
          }
          _createClass(TransformStreamSink, [{
            key: 'start',
            value: function start(c) {
              const transformStream = this._transformStream;
              transformStream._writableController = c;
              return this._startPromise.then(() => TransformStreamReadableReadyPromise(transformStream));
            },
          }, {
            key: 'write',
            value: function write(chunk) {
              const transformStream = this._transformStream;
              return TransformStreamTransform(transformStream, chunk);
            },
          }, {
            key: 'abort',
            value: function abort() {
              const transformStream = this._transformStream;
              transformStream._writableDone = true;
              TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
            },
          }, {
            key: 'close',
            value: function close() {
              const transformStream = this._transformStream;
              assert(transformStream._transforming === false);
              transformStream._writableDone = true;
              const flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [transformStream._transformStreamController]);
              return flushPromise.then(() => {
                if (transformStream._errored === true) {
                  return Promise.reject(transformStream._storedError);
                }
                if (transformStream._readableClosed === false) {
                  TransformStreamCloseReadableInternal(transformStream);
                }
                return Promise.resolve();
              }).catch((r) => {
                TransformStreamErrorIfNeeded(transformStream, r);
                return Promise.reject(transformStream._storedError);
              });
            },
          }]);
          return TransformStreamSink;
        }());
        const TransformStreamSource = (function () {
          function TransformStreamSource(transformStream, startPromise) {
            _classCallCheck(this, TransformStreamSource);
            this._transformStream = transformStream;
            this._startPromise = startPromise;
          }
          _createClass(TransformStreamSource, [{
            key: 'start',
            value: function start(c) {
              const transformStream = this._transformStream;
              transformStream._readableController = c;
              return this._startPromise.then(() => {
                assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
                if (transformStream._backpressure === true) {
                  return Promise.resolve();
                }
                assert(transformStream._backpressure === false, '_backpressure should have been initialized');
                return transformStream._backpressureChangePromise;
              });
            },
          }, {
            key: 'pull',
            value: function pull() {
              const transformStream = this._transformStream;
              assert(transformStream._backpressure === true, 'pull() should be never called while _backpressure is false');
              assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
              TransformStreamSetBackpressure(transformStream, false);
              return transformStream._backpressureChangePromise;
            },
          }, {
            key: 'cancel',
            value: function cancel() {
              const transformStream = this._transformStream;
              transformStream._readableClosed = true;
              TransformStreamErrorInternal(transformStream, new TypeError('Readable side canceled'));
            },
          }]);
          return TransformStreamSource;
        }());
        const TransformStreamDefaultController = (function () {
          function TransformStreamDefaultController(transformStream) {
            _classCallCheck(this, TransformStreamDefaultController);
            if (IsTransformStream(transformStream) === false) {
              throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
            }
            if (transformStream._transformStreamController !== undefined) {
              throw new TypeError('TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor');
            }
            this._controlledTransformStream = transformStream;
          }
          _createClass(TransformStreamDefaultController, [{
            key: 'enqueue',
            value: function enqueue(chunk) {
              if (IsTransformStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('enqueue');
              }
              TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
            },
          }, {
            key: 'close',
            value: function close() {
              if (IsTransformStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('close');
              }
              TransformStreamCloseReadable(this._controlledTransformStream);
            },
          }, {
            key: 'error',
            value: function error(reason) {
              if (IsTransformStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('error');
              }
              TransformStreamError(this._controlledTransformStream, reason);
            },
          }, {
            key: 'desiredSize',
            get: function get() {
              if (IsTransformStreamDefaultController(this) === false) {
                throw defaultControllerBrandCheckException('desiredSize');
              }
              const transformStream = this._controlledTransformStream;
              const readableController = transformStream._readableController;
              return ReadableStreamDefaultControllerGetDesiredSize(readableController);
            },
          }]);
          return TransformStreamDefaultController;
        }());
        const TransformStream = (function () {
          function TransformStream() {
            const transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _classCallCheck(this, TransformStream);
            this._transformer = transformer;
            const { readableStrategy } = transformer;
            const { writableStrategy } = transformer;
            this._transforming = false;
            this._errored = false;
            this._storedError = undefined;
            this._writableController = undefined;
            this._readableController = undefined;
            this._transformStreamController = undefined;
            this._writableDone = false;
            this._readableClosed = false;
            this._backpressure = undefined;
            this._backpressureChangePromise = undefined;
            this._backpressureChangePromise_resolve = undefined;
            this._transformStreamController = new TransformStreamDefaultController(this);
            let startPromise_resolve = void 0;
            const startPromise = new Promise(((resolve) => {
              startPromise_resolve = resolve;
            }));
            const source = new TransformStreamSource(this, startPromise);
            this._readable = new ReadableStream(source, readableStrategy);
            const sink = new TransformStreamSink(this, startPromise);
            this._writable = new WritableStream(sink, writableStrategy);
            assert(this._writableController !== undefined);
            assert(this._readableController !== undefined);
            const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
            TransformStreamSetBackpressure(this, desiredSize <= 0);
            const transformStream = this;
            const startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
            startPromise_resolve(startResult);
            startPromise.catch((e) => {
              if (transformStream._errored === false) {
                transformStream._errored = true;
                transformStream._storedError = e;
              }
            });
          }
          _createClass(TransformStream, [{
            key: 'readable',
            get: function get() {
              if (IsTransformStream(this) === false) {
                throw streamBrandCheckException('readable');
              }
              return this._readable;
            },
          }, {
            key: 'writable',
            get: function get() {
              if (IsTransformStream(this) === false) {
                throw streamBrandCheckException('writable');
              }
              return this._writable;
            },
          }]);
          return TransformStream;
        }());
        module.exports = { TransformStream };
        function defaultControllerBrandCheckException(name) {
          return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
        }
        function streamBrandCheckException(name) {
          return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
        }
      }, function (module, exports, __w_pdfjs_require__) {
        module.exports = __w_pdfjs_require__(5);
      }]))));
      /** */ }),
    /* 11 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.CanvasGraphics = undefined;

      const _util = __w_pdfjs_require__(0);

      const _pattern_helper = __w_pdfjs_require__(13);

      const _webgl = __w_pdfjs_require__(7);

      const MIN_FONT_SIZE = 16;
      const MAX_FONT_SIZE = 100;
      const MAX_GROUP_SIZE = 4096;
      const MIN_WIDTH_FACTOR = 0.65;
      const COMPILE_TYPE3_GLYPHS = true;
      const MAX_SIZE_TO_COMPILE = 1000;
      const FULL_CHUNK_HEIGHT = 16;
      var IsLittleEndianCached = {
        get value() {
          return (0, _util.shadow)(IsLittleEndianCached, 'value', (0, _util.isLittleEndian)());
        },
      };
      function addContextCurrentTransform(ctx) {
        if (!ctx.mozCurrentTransform) {
          ctx._originalSave = ctx.save;
          ctx._originalRestore = ctx.restore;
          ctx._originalRotate = ctx.rotate;
          ctx._originalScale = ctx.scale;
          ctx._originalTranslate = ctx.translate;
          ctx._originalTransform = ctx.transform;
          ctx._originalSetTransform = ctx.setTransform;
          ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
          ctx._transformStack = [];
          Object.defineProperty(ctx, 'mozCurrentTransform', {
            get: function getCurrentTransform() {
              return this._transformMatrix;
            },
          });
          Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
            get: function getCurrentTransformInverse() {
              const m = this._transformMatrix;
              const a = m[0];
              const b = m[1];
              const c = m[2];
              const d = m[3];
              const e = m[4];
              const f = m[5];
              const ad_bc = a * d - b * c;
              const bc_ad = b * c - a * d;
              return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
            },
          });
          ctx.save = function ctxSave() {
            const old = this._transformMatrix;
            this._transformStack.push(old);
            this._transformMatrix = old.slice(0, 6);
            this._originalSave();
          };
          ctx.restore = function ctxRestore() {
            const prev = this._transformStack.pop();
            if (prev) {
              this._transformMatrix = prev;
              this._originalRestore();
            }
          };
          ctx.translate = function ctxTranslate(x, y) {
            const m = this._transformMatrix;
            m[4] = m[0] * x + m[2] * y + m[4];
            m[5] = m[1] * x + m[3] * y + m[5];
            this._originalTranslate(x, y);
          };
          ctx.scale = function ctxScale(x, y) {
            const m = this._transformMatrix;
            m[0] *= x;
            m[1] *= x;
            m[2] *= y;
            m[3] *= y;
            this._originalScale(x, y);
          };
          ctx.transform = function ctxTransform(a, b, c, d, e, f) {
            const m = this._transformMatrix;
            this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];
            ctx._originalTransform(a, b, c, d, e, f);
          };
          ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
            this._transformMatrix = [a, b, c, d, e, f];
            ctx._originalSetTransform(a, b, c, d, e, f);
          };
          ctx.rotate = function ctxRotate(angle) {
            const cosValue = Math.cos(angle);
            const sinValue = Math.sin(angle);
            const m = this._transformMatrix;
            this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];
            this._originalRotate(angle);
          };
        }
      }
      const CachedCanvases = (function CachedCanvasesClosure() {
        function CachedCanvases(canvasFactory) {
          this.canvasFactory = canvasFactory;
          this.cache = Object.create(null);
        }
        CachedCanvases.prototype = {
          getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
            let canvasEntry;
            if (this.cache[id] !== undefined) {
              canvasEntry = this.cache[id];
              this.canvasFactory.reset(canvasEntry, width, height);
              canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
            } else {
              canvasEntry = this.canvasFactory.create(width, height);
              this.cache[id] = canvasEntry;
            }
            if (trackTransform) {
              addContextCurrentTransform(canvasEntry.context);
            }
            return canvasEntry;
          },
          clear: function clear() {
            for (const id in this.cache) {
              const canvasEntry = this.cache[id];
              this.canvasFactory.destroy(canvasEntry);
              delete this.cache[id];
            }
          },
        };
        return CachedCanvases;
      }());
      function compileType3Glyph(imgData) {
        const POINT_TO_PROCESS_LIMIT = 1000;
        const { width } = imgData;
        const { height } = imgData;
        let i;
        let j;
        let j0;
        const width1 = width + 1;
        const points = new Uint8Array(width1 * (height + 1));
        const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
        const lineSize = width + 7 & ~7;
        const data0 = imgData.data;
        const data = new Uint8Array(lineSize * height);
        let pos = 0;
        let ii;
        for (i = 0, ii = data0.length; i < ii; i++) {
          let mask = 128;
          const elem = data0[i];
          while (mask > 0) {
            data[pos++] = elem & mask ? 0 : 255;
            mask >>= 1;
          }
        }
        let count = 0;
        pos = 0;
        if (data[pos] !== 0) {
          points[0] = 1;
          ++count;
        }
        for (j = 1; j < width; j++) {
          if (data[pos] !== data[pos + 1]) {
            points[j] = data[pos] ? 2 : 1;
            ++count;
          }
          pos++;
        }
        if (data[pos] !== 0) {
          points[j] = 2;
          ++count;
        }
        for (i = 1; i < height; i++) {
          pos = i * lineSize;
          j0 = i * width1;
          if (data[pos - lineSize] !== data[pos]) {
            points[j0] = data[pos] ? 1 : 8;
            ++count;
          }
          let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
          for (j = 1; j < width; j++) {
            sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
            if (POINT_TYPES[sum]) {
              points[j0 + j] = POINT_TYPES[sum];
              ++count;
            }
            pos++;
          }
          if (data[pos - lineSize] !== data[pos]) {
            points[j0 + j] = data[pos] ? 2 : 4;
            ++count;
          }
          if (count > POINT_TO_PROCESS_LIMIT) {
            return null;
          }
        }
        pos = lineSize * (height - 1);
        j0 = i * width1;
        if (data[pos] !== 0) {
          points[j0] = 8;
          ++count;
        }
        for (j = 1; j < width; j++) {
          if (data[pos] !== data[pos + 1]) {
            points[j0 + j] = data[pos] ? 4 : 8;
            ++count;
          }
          pos++;
        }
        if (data[pos] !== 0) {
          points[j0 + j] = 4;
          ++count;
        }
        if (count > POINT_TO_PROCESS_LIMIT) {
          return null;
        }
        const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
        const outlines = [];
        for (i = 0; count && i <= height; i++) {
          let p = i * width1;
          const end = p + width;
          while (p < end && !points[p]) {
            p++;
          }
          if (p === end) {
            continue;
          }
          const coords = [p % width1, i];
          let type = points[p];
          const p0 = p;
          var pp;
          do {
            const step = steps[type];
            do {
              p += step;
            } while (!points[p]);
            pp = points[p];
            if (pp !== 5 && pp !== 10) {
              type = pp;
              points[p] = 0;
            } else {
              type = pp & 0x33 * type >> 4;
              points[p] &= type >> 2 | type << 2;
            }
            coords.push(p % width1);
            coords.push(p / width1 | 0);
            --count;
          } while (p0 !== p);
          outlines.push(coords);
          --i;
        }
        const drawOutline = function drawOutline(c) {
          c.save();
          c.scale(1 / width, -1 / height);
          c.translate(0, -height);
          c.beginPath();
          for (let i = 0, ii = outlines.length; i < ii; i++) {
            const o = outlines[i];
            c.moveTo(o[0], o[1]);
            for (let j = 2, jj = o.length; j < jj; j += 2) {
              c.lineTo(o[j], o[j + 1]);
            }
          }
          c.fill();
          c.beginPath();
          c.restore();
        };
        return drawOutline;
      }
      const CanvasExtraState = (function CanvasExtraStateClosure() {
        function CanvasExtraState() {
          this.alphaIsShape = false;
          this.fontSize = 0;
          this.fontSizeScale = 1;
          this.textMatrix = _util.IDENTITY_MATRIX;
          this.textMatrixScale = 1;
          this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
          this.leading = 0;
          this.x = 0;
          this.y = 0;
          this.lineX = 0;
          this.lineY = 0;
          this.charSpacing = 0;
          this.wordSpacing = 0;
          this.textHScale = 1;
          this.textRenderingMode = _util.TextRenderingMode.FILL;
          this.textRise = 0;
          this.fillColor = '#000000';
          this.strokeColor = '#000000';
          this.patternFill = false;
          this.fillAlpha = 1;
          this.strokeAlpha = 1;
          this.lineWidth = 1;
          this.activeSMask = null;
          this.resumeSMaskCtx = null;
        }
        CanvasExtraState.prototype = {
          clone: function CanvasExtraState_clone() {
            return Object.create(this);
          },
          setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
            this.x = x;
            this.y = y;
          },
        };
        return CanvasExtraState;
      }());
      const CanvasGraphics = (function CanvasGraphicsClosure() {
        const EXECUTION_TIME = 15;
        const EXECUTION_STEPS = 10;
        function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, imageLayer) {
          this.ctx = canvasCtx;
          this.current = new CanvasExtraState();
          this.stateStack = [];
          this.pendingClip = null;
          this.pendingEOFill = false;
          this.res = null;
          this.xobjs = null;
          this.commonObjs = commonObjs;
          this.objs = objs;
          this.canvasFactory = canvasFactory;
          this.imageLayer = imageLayer;
          this.groupStack = [];
          this.processingType3 = null;
          this.baseTransform = null;
          this.baseTransformStack = [];
          this.groupLevel = 0;
          this.smaskStack = [];
          this.smaskCounter = 0;
          this.tempSMask = null;
          this.cachedCanvases = new CachedCanvases(this.canvasFactory);
          if (canvasCtx) {
            addContextCurrentTransform(canvasCtx);
          }
          this.cachedGetSinglePixelWidth = null;
        }
        function putBinaryImageData(ctx, imgData) {
          if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
            ctx.putImageData(imgData, 0, 0);
            return;
          }
          const { height } = imgData;
          const { width } = imgData;
          const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          let srcPos = 0;
          let destPos;
          const src = imgData.data;
          const dest = chunkImgData.data;
          let i; let j; let thisChunkHeight; let
            elemsInThisChunk;
          if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
            const srcLength = src.byteLength;
            const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
            const dest32DataLength = dest32.length;
            const fullSrcDiff = width + 7 >> 3;
            const white = 0xFFFFFFFF;
            const black = IsLittleEndianCached.value ? 0xFF000000 : 0x000000FF;
            for (i = 0; i < totalChunks; i++) {
              thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
              destPos = 0;
              for (j = 0; j < thisChunkHeight; j++) {
                const srcDiff = srcLength - srcPos;
                let k = 0;
                const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                const kEndUnrolled = kEnd & ~7;
                let mask = 0;
                let srcByte = 0;
                for (; k < kEndUnrolled; k += 8) {
                  srcByte = src[srcPos++];
                  dest32[destPos++] = srcByte & 128 ? white : black;
                  dest32[destPos++] = srcByte & 64 ? white : black;
                  dest32[destPos++] = srcByte & 32 ? white : black;
                  dest32[destPos++] = srcByte & 16 ? white : black;
                  dest32[destPos++] = srcByte & 8 ? white : black;
                  dest32[destPos++] = srcByte & 4 ? white : black;
                  dest32[destPos++] = srcByte & 2 ? white : black;
                  dest32[destPos++] = srcByte & 1 ? white : black;
                }
                for (; k < kEnd; k++) {
                  if (mask === 0) {
                    srcByte = src[srcPos++];
                    mask = 128;
                  }
                  dest32[destPos++] = srcByte & mask ? white : black;
                  mask >>= 1;
                }
              }
              while (destPos < dest32DataLength) {
                dest32[destPos++] = 0;
              }
              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
            j = 0;
            elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
            for (i = 0; i < fullChunks; i++) {
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              srcPos += elemsInThisChunk;
              ctx.putImageData(chunkImgData, 0, j);
              j += FULL_CHUNK_HEIGHT;
            }
            if (i < totalChunks) {
              elemsInThisChunk = width * partialChunkHeight * 4;
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              ctx.putImageData(chunkImgData, 0, j);
            }
          } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
            thisChunkHeight = FULL_CHUNK_HEIGHT;
            elemsInThisChunk = width * thisChunkHeight;
            for (i = 0; i < totalChunks; i++) {
              if (i >= fullChunks) {
                thisChunkHeight = partialChunkHeight;
                elemsInThisChunk = width * thisChunkHeight;
              }
              destPos = 0;
              for (j = elemsInThisChunk; j--;) {
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = 255;
              }
              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else {
            throw new Error(`bad image kind: ${imgData.kind}`);
          }
        }
        function putBinaryImageMask(ctx, imgData) {
          const { height } = imgData;
          const { width } = imgData;
          const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          let srcPos = 0;
          const src = imgData.data;
          const dest = chunkImgData.data;
          for (let i = 0; i < totalChunks; i++) {
            const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
            let destPos = 3;
            for (let j = 0; j < thisChunkHeight; j++) {
              let mask = 0;
              for (let k = 0; k < width; k++) {
                if (!mask) {
                  var elem = src[srcPos++];
                  mask = 128;
                }
                dest[destPos] = elem & mask ? 0 : 255;
                destPos += 4;
                mask >>= 1;
              }
            }
            ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
          }
        }
        function copyCtxState(sourceCtx, destCtx) {
          const properties = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'globalCompositeOperation', 'font'];
          for (let i = 0, ii = properties.length; i < ii; i++) {
            const property = properties[i];
            if (sourceCtx[property] !== undefined) {
              destCtx[property] = sourceCtx[property];
            }
          }
          if (sourceCtx.setLineDash !== undefined) {
            destCtx.setLineDash(sourceCtx.getLineDash());
            destCtx.lineDashOffset = sourceCtx.lineDashOffset;
          }
        }
        function resetCtxToDefault(ctx) {
          ctx.strokeStyle = '#000000';
          ctx.fillStyle = '#000000';
          ctx.fillRule = 'nonzero';
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
          ctx.lineCap = 'butt';
          ctx.lineJoin = 'miter';
          ctx.miterLimit = 10;
          ctx.globalCompositeOperation = 'source-over';
          ctx.font = '10px sans-serif';
          if (ctx.setLineDash !== undefined) {
            ctx.setLineDash([]);
            ctx.lineDashOffset = 0;
          }
        }
        function composeSMaskBackdrop(bytes, r0, g0, b0) {
          const { length } = bytes;
          for (let i = 3; i < length; i += 4) {
            const alpha = bytes[i];
            if (alpha === 0) {
              bytes[i - 3] = r0;
              bytes[i - 2] = g0;
              bytes[i - 1] = b0;
            } else if (alpha < 255) {
              const alpha_ = 255 - alpha;
              bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
              bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
              bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
            }
          }
        }
        function composeSMaskAlpha(maskData, layerData, transferMap) {
          const { length } = maskData;
          const scale = 1 / 255;
          for (let i = 3; i < length; i += 4) {
            const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
            layerData[i] = layerData[i] * alpha * scale | 0;
          }
        }
        function composeSMaskLuminosity(maskData, layerData, transferMap) {
          const { length } = maskData;
          for (let i = 3; i < length; i += 4) {
            const y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
            layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
          }
        }
        function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
          const hasBackdrop = !!backdrop;
          const r0 = hasBackdrop ? backdrop[0] : 0;
          const g0 = hasBackdrop ? backdrop[1] : 0;
          const b0 = hasBackdrop ? backdrop[2] : 0;
          let composeFn;
          if (subtype === 'Luminosity') {
            composeFn = composeSMaskLuminosity;
          } else {
            composeFn = composeSMaskAlpha;
          }
          const PIXELS_TO_PROCESS = 1048576;
          const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
          for (let row = 0; row < height; row += chunkSize) {
            const chunkHeight = Math.min(chunkSize, height - row);
            const maskData = maskCtx.getImageData(0, row, width, chunkHeight);
            const layerData = layerCtx.getImageData(0, row, width, chunkHeight);
            if (hasBackdrop) {
              composeSMaskBackdrop(maskData.data, r0, g0, b0);
            }
            composeFn(maskData.data, layerData.data, transferMap);
            maskCtx.putImageData(layerData, 0, row);
          }
        }
        function composeSMask(ctx, smask, layerCtx) {
          const mask = smask.canvas;
          const maskCtx = smask.context;
          ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
          const backdrop = smask.backdrop || null;
          if (!smask.transferMap && _webgl.WebGLUtils.isEnabled) {
            const composed = _webgl.WebGLUtils.composeSMask(layerCtx.canvas, mask, {
              subtype: smask.subtype,
              backdrop,
            });
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.drawImage(composed, smask.offsetX, smask.offsetY);
            return;
          }
          genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
          ctx.drawImage(mask, 0, 0);
        }
        const LINE_CAP_STYLES = ['butt', 'round', 'square'];
        const LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
        const NORMAL_CLIP = {};
        const EO_CLIP = {};
        CanvasGraphics.prototype = {
          beginDrawing: function beginDrawing(_ref) {
            const { transform } = _ref;
            const { viewport } = _ref;
            const { transparency } = _ref;
            const _ref$background = _ref.background;
            const background = _ref$background === undefined ? null : _ref$background;

            const { width } = this.ctx.canvas;
            const { height } = this.ctx.canvas;
            this.ctx.save();
            this.ctx.fillStyle = background || 'rgb(255, 255, 255)';
            this.ctx.fillRect(0, 0, width, height);
            this.ctx.restore();
            if (transparency) {
              const transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
              this.compositeCtx = this.ctx;
              this.transparentCanvas = transparentCanvas.canvas;
              this.ctx = transparentCanvas.context;
              this.ctx.save();
              this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
            }
            this.ctx.save();
            resetCtxToDefault(this.ctx);
            if (transform) {
              this.ctx.transform.apply(this.ctx, transform);
            }
            this.ctx.transform.apply(this.ctx, viewport.transform);
            this.baseTransform = this.ctx.mozCurrentTransform.slice();
            if (this.imageLayer) {
              this.imageLayer.beginLayout();
            }
          },

          executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
            const { argsArray } = operatorList;
            const { fnArray } = operatorList;
            let i = executionStartIdx || 0;
            const argsArrayLen = argsArray.length;
            if (argsArrayLen === i) {
              return i;
            }
            const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
            const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
            let steps = 0;
            const { commonObjs } = this;
            const { objs } = this;
            let fnId;
            while (true) {
              if (stepper !== undefined && i === stepper.nextBreakPoint) {
                stepper.breakIt(i, continueCallback);
                return i;
              }
              fnId = fnArray[i];
              if (fnId !== _util.OPS.dependency) {
                this[fnId].apply(this, argsArray[i]);
              } else {
                const deps = argsArray[i];
                for (let n = 0, nn = deps.length; n < nn; n++) {
                  const depObjId = deps[n];
                  const common = depObjId[0] === 'g' && depObjId[1] === '_';
                  const objsPool = common ? commonObjs : objs;
                  if (!objsPool.isResolved(depObjId)) {
                    objsPool.get(depObjId, continueCallback);
                    return i;
                  }
                }
              }
              i++;
              if (i === argsArrayLen) {
                return i;
              }
              if (chunkOperations && ++steps > EXECUTION_STEPS) {
                if (Date.now() > endTime) {
                  continueCallback();
                  return i;
                }
                steps = 0;
              }
            }
          },
          endDrawing: function CanvasGraphics_endDrawing() {
            if (this.current.activeSMask !== null) {
              this.endSMaskGroup();
            }
            this.ctx.restore();
            if (this.transparentCanvas) {
              this.ctx = this.compositeCtx;
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.drawImage(this.transparentCanvas, 0, 0);
              this.ctx.restore();
              this.transparentCanvas = null;
            }
            this.cachedCanvases.clear();
            _webgl.WebGLUtils.clear();
            if (this.imageLayer) {
              this.imageLayer.endLayout();
            }
          },
          setLineWidth: function CanvasGraphics_setLineWidth(width) {
            this.current.lineWidth = width;
            this.ctx.lineWidth = width;
          },
          setLineCap: function CanvasGraphics_setLineCap(style) {
            this.ctx.lineCap = LINE_CAP_STYLES[style];
          },
          setLineJoin: function CanvasGraphics_setLineJoin(style) {
            this.ctx.lineJoin = LINE_JOIN_STYLES[style];
          },
          setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
            this.ctx.miterLimit = limit;
          },
          setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
            const { ctx } = this;
            if (ctx.setLineDash !== undefined) {
              ctx.setLineDash(dashArray);
              ctx.lineDashOffset = dashPhase;
            }
          },
          setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {},
          setFlatness: function CanvasGraphics_setFlatness(flatness) {},
          setGState: function CanvasGraphics_setGState(states) {
            for (let i = 0, ii = states.length; i < ii; i++) {
              const state = states[i];
              const key = state[0];
              const value = state[1];
              switch (key) {
                case 'LW':
                  this.setLineWidth(value);
                  break;
                case 'LC':
                  this.setLineCap(value);
                  break;
                case 'LJ':
                  this.setLineJoin(value);
                  break;
                case 'ML':
                  this.setMiterLimit(value);
                  break;
                case 'D':
                  this.setDash(value[0], value[1]);
                  break;
                case 'RI':
                  this.setRenderingIntent(value);
                  break;
                case 'FL':
                  this.setFlatness(value);
                  break;
                case 'Font':
                  this.setFont(value[0], value[1]);
                  break;
                case 'CA':
                  this.current.strokeAlpha = state[1];
                  break;
                case 'ca':
                  this.current.fillAlpha = state[1];
                  this.ctx.globalAlpha = state[1];
                  break;
                case 'BM':
                  this.ctx.globalCompositeOperation = value;
                  break;
                case 'SMask':
                  if (this.current.activeSMask) {
                    if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                      this.suspendSMaskGroup();
                    } else {
                      this.endSMaskGroup();
                    }
                  }
                  this.current.activeSMask = value ? this.tempSMask : null;
                  if (this.current.activeSMask) {
                    this.beginSMaskGroup();
                  }
                  this.tempSMask = null;
                  break;
              }
            }
          },
          beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
            const { activeSMask } = this.current;
            const drawnWidth = activeSMask.canvas.width;
            const drawnHeight = activeSMask.canvas.height;
            const cacheId = `smaskGroupAt${this.groupLevel}`;
            const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
            const currentCtx = this.ctx;
            const currentTransform = currentCtx.mozCurrentTransform;
            this.ctx.save();
            const groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
            groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
            groupCtx.transform.apply(groupCtx, currentTransform);
            activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          },
          suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            const groupCtx = this.ctx;
            this.groupLevel--;
            this.ctx = this.groupStack.pop();
            composeSMask(this.ctx, this.current.activeSMask, groupCtx);
            this.ctx.restore();
            this.ctx.save();
            copyCtxState(groupCtx, this.ctx);
            this.current.resumeSMaskCtx = groupCtx;
            const deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
            this.ctx.transform.apply(this.ctx, deltaTransform);
            groupCtx.save();
            groupCtx.setTransform(1, 0, 0, 1, 0, 0);
            groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
            groupCtx.restore();
          },
          resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            const groupCtx = this.current.resumeSMaskCtx;
            const currentCtx = this.ctx;
            this.ctx = groupCtx;
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          },
          endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            const groupCtx = this.ctx;
            this.groupLevel--;
            this.ctx = this.groupStack.pop();
            composeSMask(this.ctx, this.current.activeSMask, groupCtx);
            this.ctx.restore();
            copyCtxState(groupCtx, this.ctx);
            const deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
            this.ctx.transform.apply(this.ctx, deltaTransform);
          },
          save: function CanvasGraphics_save() {
            this.ctx.save();
            const old = this.current;
            this.stateStack.push(old);
            this.current = old.clone();
            this.current.resumeSMaskCtx = null;
          },
          restore: function CanvasGraphics_restore() {
            if (this.current.resumeSMaskCtx) {
              this.resumeSMaskGroup();
            }
            if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
              this.endSMaskGroup();
            }
            if (this.stateStack.length !== 0) {
              this.current = this.stateStack.pop();
              this.ctx.restore();
              this.pendingClip = null;
              this.cachedGetSinglePixelWidth = null;
            }
          },
          transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
            this.ctx.transform(a, b, c, d, e, f);
            this.cachedGetSinglePixelWidth = null;
          },
          constructPath: function CanvasGraphics_constructPath(ops, args) {
            const { ctx } = this;
            const { current } = this;
            let { x } = current;
            let { y } = current;
            for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
              switch (ops[i] | 0) {
                case _util.OPS.rectangle:
                  x = args[j++];
                  y = args[j++];
                  var width = args[j++];
                  var height = args[j++];
                  if (width === 0) {
                    width = this.getSinglePixelWidth();
                  }
                  if (height === 0) {
                    height = this.getSinglePixelWidth();
                  }
                  var xw = x + width;
                  var yh = y + height;
                  this.ctx.moveTo(x, y);
                  this.ctx.lineTo(xw, y);
                  this.ctx.lineTo(xw, yh);
                  this.ctx.lineTo(x, yh);
                  this.ctx.lineTo(x, y);
                  this.ctx.closePath();
                  break;
                case _util.OPS.moveTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.moveTo(x, y);
                  break;
                case _util.OPS.lineTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.lineTo(x, y);
                  break;
                case _util.OPS.curveTo:
                  x = args[j + 4];
                  y = args[j + 5];
                  ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                  j += 6;
                  break;
                case _util.OPS.curveTo2:
                  ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                  x = args[j + 2];
                  y = args[j + 3];
                  j += 4;
                  break;
                case _util.OPS.curveTo3:
                  x = args[j + 2];
                  y = args[j + 3];
                  ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                  j += 4;
                  break;
                case _util.OPS.closePath:
                  ctx.closePath();
                  break;
              }
            }
            current.setCurrentPoint(x, y);
          },
          closePath: function CanvasGraphics_closePath() {
            this.ctx.closePath();
          },
          stroke: function CanvasGraphics_stroke(consumePath) {
            consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
            const { ctx } = this;
            const { strokeColor } = this.current;
            ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
            ctx.globalAlpha = this.current.strokeAlpha;
            if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
              ctx.save();
              ctx.strokeStyle = strokeColor.getPattern(ctx, this);
              ctx.stroke();
              ctx.restore();
            } else {
              ctx.stroke();
            }
            if (consumePath) {
              this.consumePath();
            }
            ctx.globalAlpha = this.current.fillAlpha;
          },
          closeStroke: function CanvasGraphics_closeStroke() {
            this.closePath();
            this.stroke();
          },
          fill: function CanvasGraphics_fill(consumePath) {
            consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
            const { ctx } = this;
            const { fillColor } = this.current;
            const isPatternFill = this.current.patternFill;
            let needRestore = false;
            if (isPatternFill) {
              ctx.save();
              if (this.baseTransform) {
                ctx.setTransform.apply(ctx, this.baseTransform);
              }
              ctx.fillStyle = fillColor.getPattern(ctx, this);
              needRestore = true;
            }
            if (this.pendingEOFill) {
              ctx.fill('evenodd');
              this.pendingEOFill = false;
            } else {
              ctx.fill();
            }
            if (needRestore) {
              ctx.restore();
            }
            if (consumePath) {
              this.consumePath();
            }
          },
          eoFill: function CanvasGraphics_eoFill() {
            this.pendingEOFill = true;
            this.fill();
          },
          fillStroke: function CanvasGraphics_fillStroke() {
            this.fill(false);
            this.stroke(false);
            this.consumePath();
          },
          eoFillStroke: function CanvasGraphics_eoFillStroke() {
            this.pendingEOFill = true;
            this.fillStroke();
          },
          closeFillStroke: function CanvasGraphics_closeFillStroke() {
            this.closePath();
            this.fillStroke();
          },
          closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
            this.pendingEOFill = true;
            this.closePath();
            this.fillStroke();
          },
          endPath: function CanvasGraphics_endPath() {
            this.consumePath();
          },
          clip: function CanvasGraphics_clip() {
            this.pendingClip = NORMAL_CLIP;
          },
          eoClip: function CanvasGraphics_eoClip() {
            this.pendingClip = EO_CLIP;
          },
          beginText: function CanvasGraphics_beginText() {
            this.current.textMatrix = _util.IDENTITY_MATRIX;
            this.current.textMatrixScale = 1;
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          },
          endText: function CanvasGraphics_endText() {
            const paths = this.pendingTextPaths;
            const { ctx } = this;
            if (paths === undefined) {
              ctx.beginPath();
              return;
            }
            ctx.save();
            ctx.beginPath();
            for (let i = 0; i < paths.length; i++) {
              const path = paths[i];
              ctx.setTransform.apply(ctx, path.transform);
              ctx.translate(path.x, path.y);
              path.addToPath(ctx, path.fontSize);
            }
            ctx.restore();
            ctx.clip();
            ctx.beginPath();
            delete this.pendingTextPaths;
          },
          setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
            this.current.charSpacing = spacing;
          },
          setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
            this.current.wordSpacing = spacing;
          },
          setHScale: function CanvasGraphics_setHScale(scale) {
            this.current.textHScale = scale / 100;
          },
          setLeading: function CanvasGraphics_setLeading(leading) {
            this.current.leading = -leading;
          },
          setFont: function CanvasGraphics_setFont(fontRefName, size) {
            const fontObj = this.commonObjs.get(fontRefName);
            const { current } = this;
            if (!fontObj) {
              throw new Error(`Can't find font for ${fontRefName}`);
            }
            current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
            if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
              (0, _util.warn)(`Invalid font matrix for font ${fontRefName}`);
            }
            if (size < 0) {
              size = -size;
              current.fontDirection = -1;
            } else {
              current.fontDirection = 1;
            }
            this.current.font = fontObj;
            this.current.fontSize = size;
            if (fontObj.isType3Font) {
              return;
            }
            const name = fontObj.loadedName || 'sans-serif';
            const bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
            const italic = fontObj.italic ? 'italic' : 'normal';
            const typeface = `"${name}", ${fontObj.fallbackName}`;
            const browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
            this.current.fontSizeScale = size / browserFontSize;
            const rule = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
            this.ctx.font = rule;
          },
          setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
            this.current.textRenderingMode = mode;
          },
          setTextRise: function CanvasGraphics_setTextRise(rise) {
            this.current.textRise = rise;
          },
          moveText: function CanvasGraphics_moveText(x, y) {
            this.current.x = this.current.lineX += x;
            this.current.y = this.current.lineY += y;
          },
          setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
            this.setLeading(-y);
            this.moveText(x, y);
          },
          setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
            this.current.textMatrix = [a, b, c, d, e, f];
            this.current.textMatrixScale = Math.sqrt(a * a + b * b);
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          },
          nextLine: function CanvasGraphics_nextLine() {
            this.moveText(0, this.current.leading);
          },
          paintChar: function CanvasGraphics_paintChar(character, x, y) {
            const { ctx } = this;
            const { current } = this;
            const { font } = current;
            const { textRenderingMode } = current;
            const fontSize = current.fontSize / current.fontSizeScale;
            const fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
            const isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
            let addToPath;
            if (font.disableFontFace || isAddToPathSet) {
              addToPath = font.getPathGenerator(this.commonObjs, character);
            }
            if (font.disableFontFace) {
              ctx.save();
              ctx.translate(x, y);
              ctx.beginPath();
              addToPath(ctx, fontSize);
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fill();
              }
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.stroke();
              }
              ctx.restore();
            } else {
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fillText(character, x, y);
              }
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.strokeText(character, x, y);
              }
            }
            if (isAddToPathSet) {
              const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
              paths.push({
                transform: ctx.mozCurrentTransform,
                x,
                y,
                fontSize,
                addToPath,
              });
            }
          },
          get isFontSubpixelAAEnabled() {
            const ctx = this.canvasFactory.create(10, 10).context;
            ctx.scale(1.5, 1);
            ctx.fillText('I', 0, 10);
            const { data } = ctx.getImageData(0, 0, 10, 10);
            let enabled = false;
            for (let i = 3; i < data.length; i += 4) {
              if (data[i] > 0 && data[i] < 255) {
                enabled = true;
                break;
              }
            }
            return (0, _util.shadow)(this, 'isFontSubpixelAAEnabled', enabled);
          },
          showText: function CanvasGraphics_showText(glyphs) {
            const { current } = this;
            const { font } = current;
            if (font.isType3Font) {
              return this.showType3Text(glyphs);
            }
            const { fontSize } = current;
            if (fontSize === 0) {
              return;
            }
            const { ctx } = this;
            const { fontSizeScale } = current;
            const { charSpacing } = current;
            const { wordSpacing } = current;
            const { fontDirection } = current;
            const textHScale = current.textHScale * fontDirection;
            const glyphsLength = glyphs.length;
            const { vertical } = font;
            const spacingDir = vertical ? 1 : -1;
            const { defaultVMetrics } = font;
            const widthAdvanceScale = fontSize * current.fontMatrix[0];
            const simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace;
            ctx.save();
            ctx.transform.apply(ctx, current.textMatrix);
            ctx.translate(current.x, current.y + current.textRise);
            if (current.patternFill) {
              ctx.fillStyle = current.fillColor.getPattern(ctx, this);
            }
            if (fontDirection > 0) {
              ctx.scale(textHScale, -1);
            } else {
              ctx.scale(textHScale, 1);
            }
            let { lineWidth } = current;
            const scale = current.textMatrixScale;
            if (scale === 0 || lineWidth === 0) {
              const fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                this.cachedGetSinglePixelWidth = null;
                lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
              }
            } else {
              lineWidth /= scale;
            }
            if (fontSizeScale !== 1.0) {
              ctx.scale(fontSizeScale, fontSizeScale);
              lineWidth /= fontSizeScale;
            }
            ctx.lineWidth = lineWidth;
            let x = 0;
            let i;
            for (i = 0; i < glyphsLength; ++i) {
              const glyph = glyphs[i];
              if ((0, _util.isNum)(glyph)) {
                x += spacingDir * glyph * fontSize / 1000;
                continue;
              }
              let restoreNeeded = false;
              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const character = glyph.fontChar;
              const { accent } = glyph;
              var scaledX; var scaledY; var scaledAccentX; var
                scaledAccentY;
              let { width } = glyph;
              if (vertical) {
                var vmetric; var vx; var
                  vy;
                vmetric = glyph.vmetric || defaultVMetrics;
                vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                vx = -vx * widthAdvanceScale;
                vy = vmetric[2] * widthAdvanceScale;
                width = vmetric ? -vmetric[0] : width;
                scaledX = vx / fontSizeScale;
                scaledY = (x + vy) / fontSizeScale;
              } else {
                scaledX = x / fontSizeScale;
                scaledY = 0;
              }
              if (font.remeasure && width > 0) {
                const measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
                if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                  const characterScaleX = width / measuredWidth;
                  restoreNeeded = true;
                  ctx.save();
                  ctx.scale(characterScaleX, 1);
                  scaledX /= characterScaleX;
                } else if (width !== measuredWidth) {
                  scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
                }
              }
              if (glyph.isInFont || font.missingFile) {
                if (simpleFillText && !accent) {
                  ctx.fillText(character, scaledX, scaledY);
                } else {
                  this.paintChar(character, scaledX, scaledY);
                  if (accent) {
                    scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
                    scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
                    this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY);
                  }
                }
              }
              const charWidth = width * widthAdvanceScale + spacing * fontDirection;
              x += charWidth;
              if (restoreNeeded) {
                ctx.restore();
              }
            }
            if (vertical) {
              current.y -= x * textHScale;
            } else {
              current.x += x * textHScale;
            }
            ctx.restore();
          },
          showType3Text: function CanvasGraphics_showType3Text(glyphs) {
            const { ctx } = this;
            const { current } = this;
            const { font } = current;
            const { fontSize } = current;
            const { fontDirection } = current;
            const spacingDir = font.vertical ? 1 : -1;
            const { charSpacing } = current;
            const { wordSpacing } = current;
            const textHScale = current.textHScale * fontDirection;
            const fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
            const glyphsLength = glyphs.length;
            const isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
            let i; let glyph; let width; let
              spacingLength;
            if (isTextInvisible || fontSize === 0) {
              return;
            }
            this.cachedGetSinglePixelWidth = null;
            ctx.save();
            ctx.transform.apply(ctx, current.textMatrix);
            ctx.translate(current.x, current.y);
            ctx.scale(textHScale, fontDirection);
            for (i = 0; i < glyphsLength; ++i) {
              glyph = glyphs[i];
              if ((0, _util.isNum)(glyph)) {
                spacingLength = spacingDir * glyph * fontSize / 1000;
                this.ctx.translate(spacingLength, 0);
                current.x += spacingLength * textHScale;
                continue;
              }
              const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              const operatorList = font.charProcOperatorList[glyph.operatorListId];
              if (!operatorList) {
                (0, _util.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);
                continue;
              }
              this.processingType3 = glyph;
              this.save();
              ctx.scale(fontSize, fontSize);
              ctx.transform.apply(ctx, fontMatrix);
              this.executeOperatorList(operatorList);
              this.restore();
              const transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);
              width = transformed[0] * fontSize + spacing;
              ctx.translate(width, 0);
              current.x += width * textHScale;
            }
            ctx.restore();
            this.processingType3 = null;
          },
          setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
          setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
            this.ctx.rect(llx, lly, urx - llx, ury - lly);
            this.clip();
            this.endPath();
          },
          getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
            const _this = this;

            let pattern;
            if (IR[0] === 'TilingPattern') {
              const color = IR[1];
              const baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
              const canvasGraphicsFactory = {
                createCanvasGraphics: function createCanvasGraphics(ctx) {
                  return new CanvasGraphics(ctx, _this.commonObjs, _this.objs, _this.canvasFactory);
                },
              };
              pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
            } else {
              pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
            }
            return pattern;
          },
          setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          },
          setFillColorN: function CanvasGraphics_setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments);
            this.current.patternFill = true;
          },
          setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
            const color = _util.Util.makeCssRgb(r, g, b);
            this.ctx.strokeStyle = color;
            this.current.strokeColor = color;
          },
          setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
            const color = _util.Util.makeCssRgb(r, g, b);
            this.ctx.fillStyle = color;
            this.current.fillColor = color;
            this.current.patternFill = false;
          },
          shadingFill: function CanvasGraphics_shadingFill(patternIR) {
            const { ctx } = this;
            this.save();
            const pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
            ctx.fillStyle = pattern.getPattern(ctx, this, true);
            const inv = ctx.mozCurrentTransformInverse;
            if (inv) {
              const { canvas } = ctx;
              const { width } = canvas;
              const { height } = canvas;
              const bl = _util.Util.applyTransform([0, 0], inv);
              const br = _util.Util.applyTransform([0, height], inv);
              const ul = _util.Util.applyTransform([width, 0], inv);
              const ur = _util.Util.applyTransform([width, height], inv);
              const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
              const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
              const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
              const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
              this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
            } else {
              this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            }
            this.restore();
          },
          beginInlineImage: function CanvasGraphics_beginInlineImage() {
            throw new Error('Should not call beginInlineImage');
          },
          beginImageData: function CanvasGraphics_beginImageData() {
            throw new Error('Should not call beginImageData');
          },
          paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
            this.save();
            this.baseTransformStack.push(this.baseTransform);
            if ((0, _util.isArray)(matrix) && matrix.length === 6) {
              this.transform.apply(this, matrix);
            }
            this.baseTransform = this.ctx.mozCurrentTransform;
            if ((0, _util.isArray)(bbox) && bbox.length === 4) {
              const width = bbox[2] - bbox[0];
              const height = bbox[3] - bbox[1];
              this.ctx.rect(bbox[0], bbox[1], width, height);
              this.clip();
              this.endPath();
            }
          },
          paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
            this.restore();
            this.baseTransform = this.baseTransformStack.pop();
          },
          beginGroup: function CanvasGraphics_beginGroup(group) {
            this.save();
            const currentCtx = this.ctx;
            if (!group.isolated) {
              (0, _util.info)('TODO: Support non-isolated groups.');
            }
            if (group.knockout) {
              (0, _util.warn)('Knockout groups not supported.');
            }
            const currentTransform = currentCtx.mozCurrentTransform;
            if (group.matrix) {
              currentCtx.transform.apply(currentCtx, group.matrix);
            }
            if (!group.bbox) {
              throw new Error('Bounding box is required.');
            }
            let bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
            const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
            bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
            const offsetX = Math.floor(bounds[0]);
            const offsetY = Math.floor(bounds[1]);
            let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
            let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
            let scaleX = 1;
            let scaleY = 1;
            if (drawnWidth > MAX_GROUP_SIZE) {
              scaleX = drawnWidth / MAX_GROUP_SIZE;
              drawnWidth = MAX_GROUP_SIZE;
            }
            if (drawnHeight > MAX_GROUP_SIZE) {
              scaleY = drawnHeight / MAX_GROUP_SIZE;
              drawnHeight = MAX_GROUP_SIZE;
            }
            let cacheId = `groupAt${this.groupLevel}`;
            if (group.smask) {
              cacheId += `_smask_${this.smaskCounter++ % 2}`;
            }
            const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
            const groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / scaleX, 1 / scaleY);
            groupCtx.translate(-offsetX, -offsetY);
            groupCtx.transform.apply(groupCtx, currentTransform);
            if (group.smask) {
              this.smaskStack.push({
                canvas: scratchCanvas.canvas,
                context: groupCtx,
                offsetX,
                offsetY,
                scaleX,
                scaleY,
                subtype: group.smask.subtype,
                backdrop: group.smask.backdrop,
                transferMap: group.smask.transferMap || null,
                startTransformInverse: null,
              });
            } else {
              currentCtx.setTransform(1, 0, 0, 1, 0, 0);
              currentCtx.translate(offsetX, offsetY);
              currentCtx.scale(scaleX, scaleY);
            }
            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
            this.current.activeSMask = null;
          },
          endGroup: function CanvasGraphics_endGroup(group) {
            this.groupLevel--;
            const groupCtx = this.ctx;
            this.ctx = this.groupStack.pop();
            if (this.ctx.imageSmoothingEnabled !== undefined) {
              this.ctx.imageSmoothingEnabled = false;
            } else {
              this.ctx.mozImageSmoothingEnabled = false;
            }
            if (group.smask) {
              this.tempSMask = this.smaskStack.pop();
            } else {
              this.ctx.drawImage(groupCtx.canvas, 0, 0);
            }
            this.restore();
          },
          beginAnnotations: function CanvasGraphics_beginAnnotations() {
            this.save();
            if (this.baseTransform) {
              this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            }
          },
          endAnnotations: function CanvasGraphics_endAnnotations() {
            this.restore();
          },
          beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
            this.save();
            resetCtxToDefault(this.ctx);
            this.current = new CanvasExtraState();
            if ((0, _util.isArray)(rect) && rect.length === 4) {
              const width = rect[2] - rect[0];
              const height = rect[3] - rect[1];
              this.ctx.rect(rect[0], rect[1], width, height);
              this.clip();
              this.endPath();
            }
            this.transform.apply(this, transform);
            this.transform.apply(this, matrix);
          },
          endAnnotation: function CanvasGraphics_endAnnotation() {
            this.restore();
          },
          paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
            const domImage = this.objs.get(objId);
            if (!domImage) {
              (0, _util.warn)('Dependent image isn\'t ready yet');
              return;
            }
            this.save();
            const { ctx } = this;
            ctx.scale(1 / w, -1 / h);
            ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);
            if (this.imageLayer) {
              const currentTransform = ctx.mozCurrentTransformInverse;
              const position = this.getCanvasPosition(0, 0);
              this.imageLayer.appendImage({
                objId,
                left: position[0],
                top: position[1],
                width: w / currentTransform[0],
                height: h / currentTransform[3],
              });
            }
            this.restore();
          },
          paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
            const { ctx } = this;
            const { width } = img;
            const { height } = img;
            const { fillColor } = this.current;
            const isPatternFill = this.current.patternFill;
            const glyph = this.processingType3;
            if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
              if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
                glyph.compiled = compileType3Glyph({
                  data: img.data,
                  width,
                  height,
                });
              } else {
                glyph.compiled = null;
              }
            }
            if (glyph && glyph.compiled) {
              glyph.compiled(ctx);
              return;
            }
            const maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
            const maskCtx = maskCanvas.context;
            maskCtx.save();
            putBinaryImageMask(maskCtx, img);
            maskCtx.globalCompositeOperation = 'source-in';
            maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
            maskCtx.fillRect(0, 0, width, height);
            maskCtx.restore();
            this.paintInlineImageXObject(maskCanvas.canvas);
          },
          paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
            const { width } = imgData;
            const { height } = imgData;
            const { fillColor } = this.current;
            const isPatternFill = this.current.patternFill;
            const maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
            const maskCtx = maskCanvas.context;
            maskCtx.save();
            putBinaryImageMask(maskCtx, imgData);
            maskCtx.globalCompositeOperation = 'source-in';
            maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
            maskCtx.fillRect(0, 0, width, height);
            maskCtx.restore();
            const { ctx } = this;
            for (let i = 0, ii = positions.length; i < ii; i += 2) {
              ctx.save();
              ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
              ctx.scale(1, -1);
              ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
          },
          paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
            const { ctx } = this;
            const { fillColor } = this.current;
            const isPatternFill = this.current.patternFill;
            for (let i = 0, ii = images.length; i < ii; i++) {
              const image = images[i];
              const { width } = image;
              const { height } = image;
              const maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
              const maskCtx = maskCanvas.context;
              maskCtx.save();
              putBinaryImageMask(maskCtx, image);
              maskCtx.globalCompositeOperation = 'source-in';
              maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
              maskCtx.fillRect(0, 0, width, height);
              maskCtx.restore();
              ctx.save();
              ctx.transform.apply(ctx, image.transform);
              ctx.scale(1, -1);
              ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
          },
          paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
            const imgData = this.objs.get(objId);
            if (!imgData) {
              (0, _util.warn)('Dependent image isn\'t ready yet');
              return;
            }
            this.paintInlineImageXObject(imgData);
          },
          paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
            const imgData = this.objs.get(objId);
            if (!imgData) {
              (0, _util.warn)('Dependent image isn\'t ready yet');
              return;
            }
            const { width } = imgData;
            const { height } = imgData;
            const map = [];
            for (let i = 0, ii = positions.length; i < ii; i += 2) {
              map.push({
                transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                x: 0,
                y: 0,
                w: width,
                h: height,
              });
            }
            this.paintInlineImageXObjectGroup(imgData, map);
          },
          paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
            const { width } = imgData;
            const { height } = imgData;
            const { ctx } = this;
            this.save();
            ctx.scale(1 / width, -1 / height);
            const currentTransform = ctx.mozCurrentTransformInverse;
            const a = currentTransform[0];
            const b = currentTransform[1];
            let widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
            const c = currentTransform[2];
            const d = currentTransform[3];
            let heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
            let imgToPaint; let
              tmpCanvas;
            if (imgData instanceof HTMLElement || !imgData.data) {
              imgToPaint = imgData;
            } else {
              tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
              var tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData);
              imgToPaint = tmpCanvas.canvas;
            }
            let paintWidth = width;
            let paintHeight = height;
            let tmpCanvasId = 'prescale1';
            while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
              let newWidth = paintWidth;
              let newHeight = paintHeight;
              if (widthScale > 2 && paintWidth > 1) {
                newWidth = Math.ceil(paintWidth / 2);
                widthScale /= paintWidth / newWidth;
              }
              if (heightScale > 2 && paintHeight > 1) {
                newHeight = Math.ceil(paintHeight / 2);
                heightScale /= paintHeight / newHeight;
              }
              tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
              tmpCtx = tmpCanvas.context;
              tmpCtx.clearRect(0, 0, newWidth, newHeight);
              tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
              imgToPaint = tmpCanvas.canvas;
              paintWidth = newWidth;
              paintHeight = newHeight;
              tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
            }
            ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
            if (this.imageLayer) {
              const position = this.getCanvasPosition(0, -height);
              this.imageLayer.appendImage({
                imgData,
                left: position[0],
                top: position[1],
                width: width / currentTransform[0],
                height: height / currentTransform[3],
              });
            }
            this.restore();
          },
          paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
            const { ctx } = this;
            const w = imgData.width;
            const h = imgData.height;
            const tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
            const tmpCtx = tmpCanvas.context;
            putBinaryImageData(tmpCtx, imgData);
            for (let i = 0, ii = map.length; i < ii; i++) {
              const entry = map[i];
              ctx.save();
              ctx.transform.apply(ctx, entry.transform);
              ctx.scale(1, -1);
              ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
              if (this.imageLayer) {
                const position = this.getCanvasPosition(entry.x, entry.y);
                this.imageLayer.appendImage({
                  imgData,
                  left: position[0],
                  top: position[1],
                  width: w,
                  height: h,
                });
              }
              ctx.restore();
            }
          },
          paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
            this.ctx.fillRect(0, 0, 1, 1);
          },
          paintXObject: function CanvasGraphics_paintXObject() {
            (0, _util.warn)('Unsupported \'paintXObject\' command.');
          },
          markPoint: function CanvasGraphics_markPoint(tag) {},
          markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
          beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
          beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
          endMarkedContent: function CanvasGraphics_endMarkedContent() {},
          beginCompat: function CanvasGraphics_beginCompat() {},
          endCompat: function CanvasGraphics_endCompat() {},
          consumePath: function CanvasGraphics_consumePath() {
            const { ctx } = this;
            if (this.pendingClip) {
              if (this.pendingClip === EO_CLIP) {
                ctx.clip('evenodd');
              } else {
                ctx.clip();
              }
              this.pendingClip = null;
            }
            ctx.beginPath();
          },
          getSinglePixelWidth: function CanvasGraphics_getSinglePixelWidth(scale) {
            if (this.cachedGetSinglePixelWidth === null) {
              this.ctx.save();
              const inverse = this.ctx.mozCurrentTransformInverse;
              this.ctx.restore();
              this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
            }
            return this.cachedGetSinglePixelWidth;
          },
          getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
            const transform = this.ctx.mozCurrentTransform;
            return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
          },
        };
        for (const op in _util.OPS) {
          CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
        }
        return CanvasGraphics;
      }());
      exports.CanvasGraphics = CanvasGraphics;
      /** */ }),
    /* 12 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.FontLoader = exports.FontFaceObject = undefined;

      const _util = __w_pdfjs_require__(0);

      function FontLoader(docId) {
        this.docId = docId;
        this.styleElement = null;
        this.nativeFontFaces = [];
        this.loadTestFontId = 0;
        this.loadingContext = {
          requests: [],
          nextRequestId: 0,
        };
      }
      FontLoader.prototype = {
        insertRule: function fontLoaderInsertRule(rule) {
          let { styleElement } = this;
          if (!styleElement) {
            styleElement = this.styleElement = document.createElement('style');
            styleElement.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;
            document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
          }
          const styleSheet = styleElement.sheet;
          styleSheet.insertRule(rule, styleSheet.cssRules.length);
        },
        clear: function fontLoaderClear() {
          if (this.styleElement) {
            this.styleElement.remove();
            this.styleElement = null;
          }
          this.nativeFontFaces.forEach((nativeFontFace) => {
            document.fonts.delete(nativeFontFace);
          });
          this.nativeFontFaces.length = 0;
        },
      };
      {
        const getLoadTestFont = function getLoadTestFont() {
          return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQ' + 'AABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwA' + 'AAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbm' + 'FtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAA' + 'AADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6A' + 'ABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAA' + 'MQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAA' + 'AAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAA' + 'AAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQ' + 'AAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMA' + 'AQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAA' + 'EAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAA' + 'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA' + 'AAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgc' + 'A/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF' + 'hYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQA' + 'AAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAg' + 'ABAAAAAAAAAAAD6AAAAAAAAA==');
        };
        Object.defineProperty(FontLoader.prototype, 'loadTestFont', {
          get: function get() {
            return (0, _util.shadow)(this, 'loadTestFont', getLoadTestFont());
          },

          configurable: true,
        });
        FontLoader.prototype.addNativeFontFace = function fontLoader_addNativeFontFace(nativeFontFace) {
          this.nativeFontFaces.push(nativeFontFace);
          document.fonts.add(nativeFontFace);
        };
        FontLoader.prototype.bind = function fontLoaderBind(fonts, callback) {
          const rules = [];
          const fontsToLoad = [];
          const fontLoadPromises = [];
          const getNativeFontPromise = function getNativeFontPromise(nativeFontFace) {
            return nativeFontFace.loaded.catch((e) => {
              (0, _util.warn)(`Failed to load font "${nativeFontFace.family}": ${e}`);
            });
          };
          const isFontLoadingAPISupported = FontLoader.isFontLoadingAPISupported && !FontLoader.isSyncFontLoadingSupported;
          for (let i = 0, ii = fonts.length; i < ii; i++) {
            const font = fonts[i];
            if (font.attached || font.loading === false) {
              continue;
            }
            font.attached = true;
            if (isFontLoadingAPISupported) {
              const nativeFontFace = font.createNativeFontFace();
              if (nativeFontFace) {
                this.addNativeFontFace(nativeFontFace);
                fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
              }
            } else {
              const rule = font.createFontFaceRule();
              if (rule) {
                this.insertRule(rule);
                rules.push(rule);
                fontsToLoad.push(font);
              }
            }
          }
          const request = this.queueLoadingCallback(callback);
          if (isFontLoadingAPISupported) {
            Promise.all(fontLoadPromises).then(() => {
              request.complete();
            });
          } else if (rules.length > 0 && !FontLoader.isSyncFontLoadingSupported) {
            this.prepareFontLoadEvent(rules, fontsToLoad, request);
          } else {
            request.complete();
          }
        };
        FontLoader.prototype.queueLoadingCallback = function FontLoader_queueLoadingCallback(callback) {
          function LoadLoader_completeRequest() {
            (0, _util.assert)(!request.end, 'completeRequest() cannot be called twice');
            request.end = Date.now();
            while (context.requests.length > 0 && context.requests[0].end) {
              const otherRequest = context.requests.shift();
              setTimeout(otherRequest.callback, 0);
            }
          }
          var context = this.loadingContext;
          const requestId = `pdfjs-font-loading-${context.nextRequestId++}`;
          var request = {
            id: requestId,
            complete: LoadLoader_completeRequest,
            callback,
            started: Date.now(),
          };
          context.requests.push(request);
          return request;
        };
        FontLoader.prototype.prepareFontLoadEvent = function fontLoaderPrepareFontLoadEvent(rules, fonts, request) {
          function int32(data, offset) {
            return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
          }
          function spliceString(s, offset, remove, insert) {
            const chunk1 = s.substr(0, offset);
            const chunk2 = s.substr(offset + remove);
            return chunk1 + insert + chunk2;
          }
          let i; let
            ii;
          const canvas = document.createElement('canvas');
          canvas.width = 1;
          canvas.height = 1;
          const ctx = canvas.getContext('2d');
          let called = 0;
          function isFontReady(name, callback) {
            called++;
            if (called > 30) {
              (0, _util.warn)('Load test font never loaded.');
              callback();
              return;
            }
            ctx.font = `30px ${name}`;
            ctx.fillText('.', 0, 20);
            const imageData = ctx.getImageData(0, 0, 1, 1);
            if (imageData.data[3] > 0) {
              callback();
              return;
            }
            setTimeout(isFontReady.bind(null, name, callback));
          }
          const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
          let data = this.loadTestFont;
          const COMMENT_OFFSET = 976;
          data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
          const CFF_CHECKSUM_OFFSET = 16;
          const XXXX_VALUE = 0x58585858;
          let checksum = int32(data, CFF_CHECKSUM_OFFSET);
          for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
            checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
          }
          if (i < loadTestFontId.length) {
            checksum = checksum - XXXX_VALUE + int32(`${loadTestFontId}XXX`, i) | 0;
          }
          data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
          const url = `url(data:font/opentype;base64,${btoa(data)});`;
          const rule = `@font-face { font-family:"${loadTestFontId}";src:${url}}`;
          this.insertRule(rule);
          const names = [];
          for (i = 0, ii = fonts.length; i < ii; i++) {
            names.push(fonts[i].loadedName);
          }
          names.push(loadTestFontId);
          const div = document.createElement('div');
          div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');
          for (i = 0, ii = names.length; i < ii; ++i) {
            const span = document.createElement('span');
            span.textContent = 'Hi';
            span.style.fontFamily = names[i];
            div.appendChild(span);
          }
          document.body.appendChild(div);
          isFontReady(loadTestFontId, () => {
            document.body.removeChild(div);
            request.complete();
          });
        };
      }
      {
        FontLoader.isFontLoadingAPISupported = typeof document !== 'undefined' && !!document.fonts;
      }
      {
        const isSyncFontLoadingSupported = function isSyncFontLoadingSupported() {
          if (typeof navigator === 'undefined') {
            return true;
          }
          let supported = false;
          const m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
          if (m && m[1] >= 14) {
            supported = true;
          }
          return supported;
        };
        Object.defineProperty(FontLoader, 'isSyncFontLoadingSupported', {
          get: function get() {
            return (0, _util.shadow)(FontLoader, 'isSyncFontLoadingSupported', isSyncFontLoadingSupported());
          },

          enumerable: true,
          configurable: true,
        });
      }
      const IsEvalSupportedCached = {
        get value() {
          return (0, _util.shadow)(this, 'value', (0, _util.isEvalSupported)());
        },
      };
      const FontFaceObject = (function FontFaceObjectClosure() {
        function FontFaceObject(translatedData, options) {
          this.compiledGlyphs = Object.create(null);
          for (const i in translatedData) {
            this[i] = translatedData[i];
          }
          this.options = options;
        }
        FontFaceObject.prototype = {
          createNativeFontFace: function FontFaceObject_createNativeFontFace() {
            if (!this.data) {
              return null;
            }
            if (this.options.disableFontFace) {
              this.disableFontFace = true;
              return null;
            }
            const nativeFontFace = new FontFace(this.loadedName, this.data, {});
            if (this.options.fontRegistry) {
              this.options.fontRegistry.registerFont(this);
            }
            return nativeFontFace;
          },
          createFontFaceRule: function FontFaceObject_createFontFaceRule() {
            if (!this.data) {
              return null;
            }
            if (this.options.disableFontFace) {
              this.disableFontFace = true;
              return null;
            }
            const data = (0, _util.bytesToString)(new Uint8Array(this.data));
            const fontName = this.loadedName;
            const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
            const rule = `@font-face { font-family:"${fontName}";src:${url}}`;
            if (this.options.fontRegistry) {
              this.options.fontRegistry.registerFont(this, url);
            }
            return rule;
          },
          getPathGenerator: function FontFaceObject_getPathGenerator(objs, character) {
            if (!(character in this.compiledGlyphs)) {
              const cmds = objs.get(`${this.loadedName}_path_${character}`);
              let current; let i; let
                len;
              if (this.options.isEvalSupported && IsEvalSupportedCached.value) {
                let args;
                let js = '';
                for (i = 0, len = cmds.length; i < len; i++) {
                  current = cmds[i];
                  if (current.args !== undefined) {
                    args = current.args.join(',');
                  } else {
                    args = '';
                  }
                  js += `c.${current.cmd}(${args});\n`;
                }
                this.compiledGlyphs[character] = new Function('c', 'size', js);
              } else {
                this.compiledGlyphs[character] = function (c, size) {
                  for (i = 0, len = cmds.length; i < len; i++) {
                    current = cmds[i];
                    if (current.cmd === 'scale') {
                      current.args = [size, -size];
                    }
                    c[current.cmd].apply(c, current.args);
                  }
                };
              }
            }
            return this.compiledGlyphs[character];
          },
        };
        return FontFaceObject;
      }());
      exports.FontFaceObject = FontFaceObject;
      exports.FontLoader = FontLoader;
      /** */ }),
    /* 13 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.TilingPattern = exports.getShadingPatternFromIR = undefined;

      const _util = __w_pdfjs_require__(0);

      const _webgl = __w_pdfjs_require__(7);

      const ShadingIRs = {};
      ShadingIRs.RadialAxial = {
        fromIR: function RadialAxial_fromIR(raw) {
          const type = raw[1];
          const colorStops = raw[2];
          const p0 = raw[3];
          const p1 = raw[4];
          const r0 = raw[5];
          const r1 = raw[6];
          return {
            type: 'Pattern',
            getPattern: function RadialAxial_getPattern(ctx) {
              let grad;
              if (type === 'axial') {
                grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
              } else if (type === 'radial') {
                grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
              }
              for (let i = 0, ii = colorStops.length; i < ii; ++i) {
                const c = colorStops[i];
                grad.addColorStop(c[0], c[1]);
              }
              return grad;
            },
          };
        },
      };
      const createMeshCanvas = (function createMeshCanvasClosure() {
        function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
          const { coords } = context;
          const { colors } = context;
          const bytes = data.data;
          const rowSize = data.width * 4;
          let tmp;
          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }
          if (coords[p2 + 1] > coords[p3 + 1]) {
            tmp = p2;
            p2 = p3;
            p3 = tmp;
            tmp = c2;
            c2 = c3;
            c3 = tmp;
          }
          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }
          const x1 = (coords[p1] + context.offsetX) * context.scaleX;
          const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
          const x2 = (coords[p2] + context.offsetX) * context.scaleX;
          const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
          const x3 = (coords[p3] + context.offsetX) * context.scaleX;
          const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
          if (y1 >= y3) {
            return;
          }
          const c1r = colors[c1];
          const c1g = colors[c1 + 1];
          const c1b = colors[c1 + 2];
          const c2r = colors[c2];
          const c2g = colors[c2 + 1];
          const c2b = colors[c2 + 2];
          const c3r = colors[c3];
          const c3g = colors[c3 + 1];
          const c3b = colors[c3 + 2];
          const minY = Math.round(y1);
          const maxY = Math.round(y3);
          let xa; let car; let cag; let
            cab;
          let xb; let cbr; let cbg; let
            cbb;
          let k;
          for (let y = minY; y <= maxY; y++) {
            if (y < y2) {
              k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
              xa = x1 - (x1 - x2) * k;
              car = c1r - (c1r - c2r) * k;
              cag = c1g - (c1g - c2g) * k;
              cab = c1b - (c1b - c2b) * k;
            } else {
              k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
              xa = x2 - (x2 - x3) * k;
              car = c2r - (c2r - c3r) * k;
              cag = c2g - (c2g - c3g) * k;
              cab = c2b - (c2b - c3b) * k;
            }
            k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
            xb = x1 - (x1 - x3) * k;
            cbr = c1r - (c1r - c3r) * k;
            cbg = c1g - (c1g - c3g) * k;
            cbb = c1b - (c1b - c3b) * k;
            const x1_ = Math.round(Math.min(xa, xb));
            const x2_ = Math.round(Math.max(xa, xb));
            let j = rowSize * y + x1_ * 4;
            for (let x = x1_; x <= x2_; x++) {
              k = (xa - x) / (xa - xb);
              k = k < 0 ? 0 : k > 1 ? 1 : k;
              bytes[j++] = car - (car - cbr) * k | 0;
              bytes[j++] = cag - (cag - cbg) * k | 0;
              bytes[j++] = cab - (cab - cbb) * k | 0;
              bytes[j++] = 255;
            }
          }
        }
        function drawFigure(data, figure, context) {
          const ps = figure.coords;
          const cs = figure.colors;
          let i; let
            ii;
          switch (figure.type) {
            case 'lattice':
              var { verticesPerRow } = figure;
              var rows = Math.floor(ps.length / verticesPerRow) - 1;
              var cols = verticesPerRow - 1;
              for (i = 0; i < rows; i++) {
                let q = i * verticesPerRow;
                for (let j = 0; j < cols; j++, q++) {
                  drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                  drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                }
              }
              break;
            case 'triangles':
              for (i = 0, ii = ps.length; i < ii; i += 3) {
                drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
              }
              break;
            default:
              throw new Error('illegal figure');
          }
        }
        function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases) {
          const EXPECTED_SCALE = 1.1;
          const MAX_PATTERN_SIZE = 3000;
          const BORDER_SIZE = 2;
          const offsetX = Math.floor(bounds[0]);
          const offsetY = Math.floor(bounds[1]);
          const boundsWidth = Math.ceil(bounds[2]) - offsetX;
          const boundsHeight = Math.ceil(bounds[3]) - offsetY;
          const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
          const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
          const scaleX = boundsWidth / width;
          const scaleY = boundsHeight / height;
          const context = {
            coords,
            colors,
            offsetX: -offsetX,
            offsetY: -offsetY,
            scaleX: 1 / scaleX,
            scaleY: 1 / scaleY,
          };
          const paddedWidth = width + BORDER_SIZE * 2;
          const paddedHeight = height + BORDER_SIZE * 2;
          let canvas; let tmpCanvas; let i; let
            ii;
          if (_webgl.WebGLUtils.isEnabled) {
            canvas = _webgl.WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
            tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
            tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
            canvas = tmpCanvas.canvas;
          } else {
            tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
            const tmpCtx = tmpCanvas.context;
            const data = tmpCtx.createImageData(width, height);
            if (backgroundColor) {
              const bytes = data.data;
              for (i = 0, ii = bytes.length; i < ii; i += 4) {
                bytes[i] = backgroundColor[0];
                bytes[i + 1] = backgroundColor[1];
                bytes[i + 2] = backgroundColor[2];
                bytes[i + 3] = 255;
              }
            }
            for (i = 0; i < figures.length; i++) {
              drawFigure(data, figures[i], context);
            }
            tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
            canvas = tmpCanvas.canvas;
          }
          return {
            canvas,
            offsetX: offsetX - BORDER_SIZE * scaleX,
            offsetY: offsetY - BORDER_SIZE * scaleY,
            scaleX,
            scaleY,
          };
        }
        return createMeshCanvas;
      }());
      ShadingIRs.Mesh = {
        fromIR: function Mesh_fromIR(raw) {
          const coords = raw[2];
          const colors = raw[3];
          const figures = raw[4];
          const bounds = raw[5];
          const matrix = raw[6];
          const background = raw[8];
          return {
            type: 'Pattern',
            getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
              let scale;
              if (shadingFill) {
                scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
              } else {
                scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);
                if (matrix) {
                  const matrixScale = _util.Util.singularValueDecompose2dScale(matrix);
                  scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                }
              }
              const temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases);
              if (!shadingFill) {
                ctx.setTransform.apply(ctx, owner.baseTransform);
                if (matrix) {
                  ctx.transform.apply(ctx, matrix);
                }
              }
              ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
              ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
              return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
            },
          };
        },
      };
      ShadingIRs.Dummy = {
        fromIR: function Dummy_fromIR() {
          return {
            type: 'Pattern',
            getPattern: function Dummy_fromIR_getPattern() {
              return 'hotpink';
            },
          };
        },
      };
      function getShadingPatternFromIR(raw) {
        const shadingIR = ShadingIRs[raw[0]];
        if (!shadingIR) {
          throw new Error(`Unknown IR type: ${raw[0]}`);
        }
        return shadingIR.fromIR(raw);
      }
      const TilingPattern = (function TilingPatternClosure() {
        const PaintType = {
          COLORED: 1,
          UNCOLORED: 2,
        };
        const MAX_PATTERN_SIZE = 3000;
        function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
          this.operatorList = IR[2];
          this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
          this.bbox = IR[4];
          this.xstep = IR[5];
          this.ystep = IR[6];
          this.paintType = IR[7];
          this.tilingType = IR[8];
          this.color = color;
          this.canvasGraphicsFactory = canvasGraphicsFactory;
          this.baseTransform = baseTransform;
          this.type = 'Pattern';
          this.ctx = ctx;
        }
        TilingPattern.prototype = {
          createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
            const { operatorList } = this;
            const { bbox } = this;
            const { xstep } = this;
            const { ystep } = this;
            const { paintType } = this;
            const { tilingType } = this;
            const { color } = this;
            const { canvasGraphicsFactory } = this;
            (0, _util.info)(`TilingType: ${tilingType}`);
            const x0 = bbox[0];
            const y0 = bbox[1];
            const x1 = bbox[2];
            const y1 = bbox[3];
            const topLeft = [x0, y0];
            const botRight = [x0 + xstep, y0 + ystep];
            let width = botRight[0] - topLeft[0];
            let height = botRight[1] - topLeft[1];
            const matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
            const curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);
            const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
            width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])), MAX_PATTERN_SIZE);
            height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])), MAX_PATTERN_SIZE);
            const tmpCanvas = owner.cachedCanvases.getCanvas('pattern', width, height, true);
            const tmpCtx = tmpCanvas.context;
            const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
            graphics.groupLevel = owner.groupLevel;
            this.setFillAndStrokeStyleToContext(tmpCtx, paintType, color);
            this.setScale(width, height, xstep, ystep);
            this.transformToScale(graphics);
            const tmpTranslate = [1, 0, 0, 1, -topLeft[0], -topLeft[1]];
            graphics.transform.apply(graphics, tmpTranslate);
            this.clipBbox(graphics, bbox, x0, y0, x1, y1);
            graphics.executeOperatorList(operatorList);
            return tmpCanvas.canvas;
          },
          setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
            this.scale = [width / xstep, height / ystep];
          },
          transformToScale: function TilingPattern_transformToScale(graphics) {
            const { scale } = this;
            const tmpScale = [scale[0], 0, 0, scale[1], 0, 0];
            graphics.transform.apply(graphics, tmpScale);
          },
          scaleToContext: function TilingPattern_scaleToContext() {
            const { scale } = this;
            this.ctx.scale(1 / scale[0], 1 / scale[1]);
          },
          clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
            if ((0, _util.isArray)(bbox) && bbox.length === 4) {
              const bboxWidth = x1 - x0;
              const bboxHeight = y1 - y0;
              graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
              graphics.clip();
              graphics.endPath();
            }
          },
          setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(context, paintType, color) {
            switch (paintType) {
              case PaintType.COLORED:
                var { ctx } = this;
                context.fillStyle = ctx.fillStyle;
                context.strokeStyle = ctx.strokeStyle;
                break;
              case PaintType.UNCOLORED:
                var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);
                context.fillStyle = cssColor;
                context.strokeStyle = cssColor;
                break;
              default:
                throw new _util.FormatError(`Unsupported paint type: ${paintType}`);
            }
          },
          getPattern: function TilingPattern_getPattern(ctx, owner) {
            const temporaryPatternCanvas = this.createPatternCanvas(owner);
            ctx = this.ctx;
            ctx.setTransform.apply(ctx, this.baseTransform);
            ctx.transform.apply(ctx, this.matrix);
            this.scaleToContext();
            return ctx.createPattern(temporaryPatternCanvas, 'repeat');
          },
        };
        return TilingPattern;
      }());
      exports.getShadingPatternFromIR = getShadingPatternFromIR;
      exports.TilingPattern = TilingPattern;
      /** */ }),
    /* 14 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.PDFDataTransportStream = undefined;

      const _util = __w_pdfjs_require__(0);

      const PDFDataTransportStream = (function PDFDataTransportStreamClosure() {
        function PDFDataTransportStream(params, pdfDataRangeTransport) {
          const _this = this;

          (0, _util.assert)(pdfDataRangeTransport);
          this._queuedChunks = [];
          const { initialData } = params;
          if (initialData && initialData.length > 0) {
            const { buffer } = new Uint8Array(initialData);
            this._queuedChunks.push(buffer);
          }
          this._pdfDataRangeTransport = pdfDataRangeTransport;
          this._isRangeSupported = !params.disableRange;
          this._isStreamingSupported = !params.disableStream;
          this._contentLength = params.length;
          this._fullRequestReader = null;
          this._rangeReaders = [];
          this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
            _this._onReceiveData({
              begin,
              chunk,
            });
          });
          this._pdfDataRangeTransport.addProgressListener((loaded) => {
            _this._onProgress({ loaded });
          });
          this._pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
            _this._onReceiveData({ chunk });
          });
          this._pdfDataRangeTransport.transportReady();
        }
        PDFDataTransportStream.prototype = {
          _onReceiveData: function PDFDataTransportStream_onReceiveData(args) {
            const { buffer } = new Uint8Array(args.chunk);
            if (args.begin === undefined) {
              if (this._fullRequestReader) {
                this._fullRequestReader._enqueue(buffer);
              } else {
                this._queuedChunks.push(buffer);
              }
            } else {
              const found = this._rangeReaders.some((rangeReader) => {
                if (rangeReader._begin !== args.begin) {
                  return false;
                }
                rangeReader._enqueue(buffer);
                return true;
              });
              (0, _util.assert)(found);
            }
          },
          _onProgress: function PDFDataTransportStream_onDataProgress(evt) {
            if (this._rangeReaders.length > 0) {
              const firstReader = this._rangeReaders[0];
              if (firstReader.onProgress) {
                firstReader.onProgress({ loaded: evt.loaded });
              }
            }
          },
          _removeRangeReader: function PDFDataTransportStream_removeRangeReader(reader) {
            const i = this._rangeReaders.indexOf(reader);
            if (i >= 0) {
              this._rangeReaders.splice(i, 1);
            }
          },
          getFullReader: function PDFDataTransportStream_getFullReader() {
            (0, _util.assert)(!this._fullRequestReader);
            const queuedChunks = this._queuedChunks;
            this._queuedChunks = null;
            return new PDFDataTransportStreamReader(this, queuedChunks);
          },
          getRangeReader: function PDFDataTransportStream_getRangeReader(begin, end) {
            const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
            this._pdfDataRangeTransport.requestDataRange(begin, end);
            this._rangeReaders.push(reader);
            return reader;
          },
          cancelAllRequests: function PDFDataTransportStream_cancelAllRequests(reason) {
            if (this._fullRequestReader) {
              this._fullRequestReader.cancel(reason);
            }
            const readers = this._rangeReaders.slice(0);
            readers.forEach((rangeReader) => {
              rangeReader.cancel(reason);
            });
            this._pdfDataRangeTransport.abort();
          },
        };
        function PDFDataTransportStreamReader(stream, queuedChunks) {
          this._stream = stream;
          this._done = false;
          this._queuedChunks = queuedChunks || [];
          this._requests = [];
          this._headersReady = Promise.resolve();
          stream._fullRequestReader = this;
          this.onProgress = null;
        }
        PDFDataTransportStreamReader.prototype = {
          _enqueue: function PDFDataTransportStreamReader_enqueue(chunk) {
            if (this._done) {
              return;
            }
            if (this._requests.length > 0) {
              const requestCapability = this._requests.shift();
              requestCapability.resolve({
                value: chunk,
                done: false,
              });
              return;
            }
            this._queuedChunks.push(chunk);
          },
          get headersReady() {
            return this._headersReady;
          },
          get isRangeSupported() {
            return this._stream._isRangeSupported;
          },
          get isStreamingSupported() {
            return this._stream._isStreamingSupported;
          },
          get contentLength() {
            return this._stream._contentLength;
          },
          read: function PDFDataTransportStreamReader_read() {
            if (this._queuedChunks.length > 0) {
              const chunk = this._queuedChunks.shift();
              return Promise.resolve({
                value: chunk,
                done: false,
              });
            }
            if (this._done) {
              return Promise.resolve({
                value: undefined,
                done: true,
              });
            }
            const requestCapability = (0, _util.createPromiseCapability)();
            this._requests.push(requestCapability);
            return requestCapability.promise;
          },
          cancel: function PDFDataTransportStreamReader_cancel(reason) {
            this._done = true;
            this._requests.forEach((requestCapability) => {
              requestCapability.resolve({
                value: undefined,
                done: true,
              });
            });
            this._requests = [];
          },
        };
        function PDFDataTransportStreamRangeReader(stream, begin, end) {
          this._stream = stream;
          this._begin = begin;
          this._end = end;
          this._queuedChunk = null;
          this._requests = [];
          this._done = false;
          this.onProgress = null;
        }
        PDFDataTransportStreamRangeReader.prototype = {
          _enqueue: function PDFDataTransportStreamRangeReader_enqueue(chunk) {
            if (this._done) {
              return;
            }
            if (this._requests.length === 0) {
              this._queuedChunk = chunk;
            } else {
              const requestsCapability = this._requests.shift();
              requestsCapability.resolve({
                value: chunk,
                done: false,
              });
              this._requests.forEach((requestCapability) => {
                requestCapability.resolve({
                  value: undefined,
                  done: true,
                });
              });
              this._requests = [];
            }
            this._done = true;
            this._stream._removeRangeReader(this);
          },
          get isStreamingSupported() {
            return false;
          },
          read: function PDFDataTransportStreamRangeReader_read() {
            if (this._queuedChunk) {
              const chunk = this._queuedChunk;
              this._queuedChunk = null;
              return Promise.resolve({
                value: chunk,
                done: false,
              });
            }
            if (this._done) {
              return Promise.resolve({
                value: undefined,
                done: true,
              });
            }
            const requestCapability = (0, _util.createPromiseCapability)();
            this._requests.push(requestCapability);
            return requestCapability.promise;
          },
          cancel: function PDFDataTransportStreamRangeReader_cancel(reason) {
            this._done = true;
            this._requests.forEach((requestCapability) => {
              requestCapability.resolve({
                value: undefined,
                done: true,
              });
            });
            this._requests = [];
            this._stream._removeRangeReader(this);
          },
        };
        return PDFDataTransportStream;
      }());
      exports.PDFDataTransportStream = PDFDataTransportStream;
      /** */ }),
    /* 15 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      const pdfjsVersion = '1.9.426';
      const pdfjsBuild = '2558a58d';
      const pdfjsSharedUtil = __w_pdfjs_require__(0);
      const pdfjsDisplayGlobal = __w_pdfjs_require__(8);
      const pdfjsDisplayAPI = __w_pdfjs_require__(2);
      const pdfjsDisplayTextLayer = __w_pdfjs_require__(5);
      const pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(3);
      const pdfjsDisplayDOMUtils = __w_pdfjs_require__(1);
      const pdfjsDisplaySVG = __w_pdfjs_require__(4);
      {
        __w_pdfjs_require__(9);
      }
      exports.PDFJS = pdfjsDisplayGlobal.PDFJS;
      exports.build = pdfjsDisplayAPI.build;
      exports.version = pdfjsDisplayAPI.version;
      exports.getDocument = pdfjsDisplayAPI.getDocument;
      exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
      exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
      exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
      exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
      exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
      exports.CustomStyle = pdfjsDisplayDOMUtils.CustomStyle;
      exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
      exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
      exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
      exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
      exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
      exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
      exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
      exports.OPS = pdfjsSharedUtil.OPS;
      exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
      exports.isValidUrl = pdfjsDisplayDOMUtils.isValidUrl;
      exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
      exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
      exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
      exports.shadow = pdfjsSharedUtil.shadow;
      exports.createBlob = pdfjsSharedUtil.createBlob;
      exports.RenderingCancelledException = pdfjsDisplayDOMUtils.RenderingCancelledException;
      exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
      exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;
      exports.StatTimer = pdfjsSharedUtil.StatTimer;
      /** */ }),
    /* 16 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      if (typeof PDFJS === 'undefined' || !PDFJS.compatibilityChecked) {
        const globalScope = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : false ? undefined : {};
        const userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
        const isAndroid = /Android/.test(userAgent);
        const isAndroidPre3 = /Android\s[0-2][^\d]/.test(userAgent);
        const isAndroidPre5 = /Android\s[0-4][^\d]/.test(userAgent);
        const isChrome = userAgent.indexOf('Chrom') >= 0;
        const isChromeWithRangeBug = /Chrome\/(39|40)\./.test(userAgent);
        const isIOSChrome = userAgent.indexOf('CriOS') >= 0;
        const isIE = userAgent.indexOf('Trident') >= 0;
        const isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent);
        const isOpera = userAgent.indexOf('Opera') >= 0;
        const isSafari = /Safari\//.test(userAgent) && !/(Chrome\/|Android\s)/.test(userAgent);
        const hasDOM = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object';
        if (typeof PDFJS === 'undefined') {
          globalScope.PDFJS = {};
        }
        PDFJS.compatibilityChecked = true;
        (function checkTypedArrayCompatibility() {
          if (typeof Uint8Array !== 'undefined') {
            if (typeof Uint8Array.prototype.subarray === 'undefined') {
              Uint8Array.prototype.subarray = function subarray(start, end) {
                return new Uint8Array(this.slice(start, end));
              };
              Float32Array.prototype.subarray = function subarray(start, end) {
                return new Float32Array(this.slice(start, end));
              };
            }
            if (typeof Float64Array === 'undefined') {
              globalScope.Float64Array = Float32Array;
            }
            return;
          }
          function subarray(start, end) {
            return new TypedArray(this.slice(start, end));
          }
          function setArrayOffset(array, offset) {
            if (arguments.length < 2) {
              offset = 0;
            }
            for (let i = 0, n = array.length; i < n; ++i, ++offset) {
              this[offset] = array[i] & 0xFF;
            }
          }
          function Uint32ArrayView(buffer, length) {
            this.buffer = buffer;
            this.byteLength = buffer.length;
            this.length = length;
            ensureUint32ArrayViewProps(this.length);
          }
          Uint32ArrayView.prototype = Object.create(null);
          let uint32ArrayViewSetters = 0;
          function createUint32ArrayProp(index) {
            return {
              get: function get() {
                const { buffer } = this;
                const offset = index << 2;
                return (buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24) >>> 0;
              },
              set: function set(value) {
                const { buffer } = this;
                const offset = index << 2;
                buffer[offset] = value & 255;
                buffer[offset + 1] = value >> 8 & 255;
                buffer[offset + 2] = value >> 16 & 255;
                buffer[offset + 3] = value >>> 24 & 255;
              },
            };
          }
          function ensureUint32ArrayViewProps(length) {
            while (uint32ArrayViewSetters < length) {
              Object.defineProperty(Uint32ArrayView.prototype, uint32ArrayViewSetters, createUint32ArrayProp(uint32ArrayViewSetters));
              uint32ArrayViewSetters++;
            }
          }
          function TypedArray(arg1) {
            let result; let i; let
              n;
            if (typeof arg1 === 'number') {
              result = [];
              for (i = 0; i < arg1; ++i) {
                result[i] = 0;
              }
            } else if ('slice' in arg1) {
              result = arg1.slice(0);
            } else {
              result = [];
              for (i = 0, n = arg1.length; i < n; ++i) {
                result[i] = arg1[i];
              }
            }
            result.subarray = subarray;
            result.buffer = result;
            result.byteLength = result.length;
            result.set = setArrayOffset;
            if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === 'object' && arg1.buffer) {
              result.buffer = arg1.buffer;
            }
            return result;
          }
          globalScope.Uint8Array = TypedArray;
          globalScope.Int8Array = TypedArray;
          globalScope.Int32Array = TypedArray;
          globalScope.Uint16Array = TypedArray;
          globalScope.Float32Array = TypedArray;
          globalScope.Float64Array = TypedArray;
          globalScope.Uint32Array = function () {
            if (arguments.length === 3) {
              if (arguments[1] !== 0) {
                throw new Error('offset !== 0 is not supported');
              }
              return new Uint32ArrayView(arguments[0], arguments[2]);
            }
            return TypedArray.apply(this, arguments);
          };
        }());
        (function canvasPixelArrayBuffer() {
          if (!hasDOM || !window.CanvasPixelArray) {
            return;
          }
          const cpaProto = window.CanvasPixelArray.prototype;
          if ('buffer' in cpaProto) {
            return;
          }
          Object.defineProperty(cpaProto, 'buffer', {
            get: function get() {
              return this;
            },

            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(cpaProto, 'byteLength', {
            get: function get() {
              return this.length;
            },

            enumerable: false,
            configurable: true,
          });
        }());
        (function normalizeURLObject() {
          if (!globalScope.URL) {
            globalScope.URL = globalScope.webkitURL;
          }
        }());
        (function checkObjectDefinePropertyCompatibility() {
          if (typeof Object.defineProperty !== 'undefined') {
            let definePropertyPossible = true;
            try {
              if (hasDOM) {
                Object.defineProperty(new Image(), 'id', { value: 'test' });
              }
              const Test = function Test() {};
              Test.prototype = {
                get id() {},
              };
              Object.defineProperty(new Test(), 'id', {
                value: '',
                configurable: true,
                enumerable: true,
                writable: false,
              });
            } catch (e) {
              definePropertyPossible = false;
            }
            if (definePropertyPossible) {
              return;
            }
          }
          Object.defineProperty = function objectDefineProperty(obj, name, def) {
            delete obj[name];
            if ('get' in def) {
              obj.__defineGetter__(name, def.get);
            }
            if ('set' in def) {
              obj.__defineSetter__(name, def.set);
            }
            if ('value' in def) {
              obj.__defineSetter__(name, function objectDefinePropertySetter(value) {
                this.__defineGetter__(name, () => value);
                return value;
              });
              obj[name] = def.value;
            }
          };
        }());
        (function checkXMLHttpRequestResponseCompatibility() {
          if (typeof XMLHttpRequest === 'undefined') {
            return;
          }
          const xhrPrototype = XMLHttpRequest.prototype;
          const xhr = new XMLHttpRequest();
          if (!('overrideMimeType' in xhr)) {
            Object.defineProperty(xhrPrototype, 'overrideMimeType', {
              value: function xmlHttpRequestOverrideMimeType(mimeType) {},
            });
          }
          if ('responseType' in xhr) {
            return;
          }
          Object.defineProperty(xhrPrototype, 'responseType', {
            get: function xmlHttpRequestGetResponseType() {
              return this._responseType || 'text';
            },
            set: function xmlHttpRequestSetResponseType(value) {
              if (value === 'text' || value === 'arraybuffer') {
                this._responseType = value;
                if (value === 'arraybuffer' && typeof this.overrideMimeType === 'function') {
                  this.overrideMimeType('text/plain; charset=x-user-defined');
                }
              }
            },
          });
          if (typeof VBArray !== 'undefined') {
            Object.defineProperty(xhrPrototype, 'response', {
              get: function xmlHttpRequestResponseGet() {
                if (this.responseType === 'arraybuffer') {
                  return new Uint8Array(new VBArray(this.responseBody).toArray());
                }
                return this.responseText;
              },
            });
            return;
          }
          Object.defineProperty(xhrPrototype, 'response', {
            get: function xmlHttpRequestResponseGet() {
              if (this.responseType !== 'arraybuffer') {
                return this.responseText;
              }
              const text = this.responseText;
              let i;
              const n = text.length;
              const result = new Uint8Array(n);
              for (i = 0; i < n; ++i) {
                result[i] = text.charCodeAt(i) & 0xFF;
              }
              return result.buffer;
            },
          });
        }());
        (function checkWindowBtoaCompatibility() {
          if ('btoa' in globalScope) {
            return;
          }
          const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          globalScope.btoa = function (chars) {
            let buffer = '';
            let i; let
              n;
            for (i = 0, n = chars.length; i < n; i += 3) {
              const b1 = chars.charCodeAt(i) & 0xFF;
              const b2 = chars.charCodeAt(i + 1) & 0xFF;
              const b3 = chars.charCodeAt(i + 2) & 0xFF;
              const d1 = b1 >> 2;
              const d2 = (b1 & 3) << 4 | b2 >> 4;
              const d3 = i + 1 < n ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
              const d4 = i + 2 < n ? b3 & 0x3F : 64;
              buffer += digits.charAt(d1) + digits.charAt(d2) + digits.charAt(d3) + digits.charAt(d4);
            }
            return buffer;
          };
        }());
        (function checkWindowAtobCompatibility() {
          if ('atob' in globalScope) {
            return;
          }
          const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          globalScope.atob = function (input) {
            input = input.replace(/=+$/, '');
            if (input.length % 4 === 1) {
              throw new Error('bad atob input');
            }
            for (var bc = 0, bs, buffer, idx = 0, output = ''; buffer = input.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
              buffer = digits.indexOf(buffer);
            }
            return output;
          };
        }());
        (function checkFunctionPrototypeBindCompatibility() {
          if (typeof Function.prototype.bind !== 'undefined') {
            return;
          }
          Function.prototype.bind = function functionPrototypeBind(obj) {
            const fn = this;
            const headArgs = Array.prototype.slice.call(arguments, 1);
            const bound = function functionPrototypeBindBound() {
              const args = headArgs.concat(Array.prototype.slice.call(arguments));
              return fn.apply(obj, args);
            };
            return bound;
          };
        }());
        (function checkDatasetProperty() {
          if (!hasDOM) {
            return;
          }
          const div = document.createElement('div');
          if ('dataset' in div) {
            return;
          }
          Object.defineProperty(HTMLElement.prototype, 'dataset', {
            get: function get() {
              if (this._dataset) {
                return this._dataset;
              }
              const dataset = {};
              for (let j = 0, jj = this.attributes.length; j < jj; j++) {
                const attribute = this.attributes[j];
                if (attribute.name.substring(0, 5) !== 'data-') {
                  continue;
                }
                const key = attribute.name.substring(5).replace(/\-([a-z])/g, (all, ch) => ch.toUpperCase());
                dataset[key] = attribute.value;
              }
              Object.defineProperty(this, '_dataset', {
                value: dataset,
                writable: false,
                enumerable: false,
              });
              return dataset;
            },

            enumerable: true,
          });
        }());
        (function checkClassListProperty() {
          function changeList(element, itemName, add, remove) {
            const s = element.className || '';
            const list = s.split(/\s+/g);
            if (list[0] === '') {
              list.shift();
            }
            const index = list.indexOf(itemName);
            if (index < 0 && add) {
              list.push(itemName);
            }
            if (index >= 0 && remove) {
              list.splice(index, 1);
            }
            element.className = list.join(' ');
            return index >= 0;
          }
          if (!hasDOM) {
            return;
          }
          const div = document.createElement('div');
          if ('classList' in div) {
            return;
          }
          const classListPrototype = {
            add: function add(name) {
              changeList(this.element, name, true, false);
            },
            contains: function contains(name) {
              return changeList(this.element, name, false, false);
            },
            remove: function remove(name) {
              changeList(this.element, name, false, true);
            },
            toggle: function toggle(name) {
              changeList(this.element, name, true, true);
            },
          };
          Object.defineProperty(HTMLElement.prototype, 'classList', {
            get: function get() {
              if (this._classList) {
                return this._classList;
              }
              const classList = Object.create(classListPrototype, {
                element: {
                  value: this,
                  writable: false,
                  enumerable: true,
                },
              });
              Object.defineProperty(this, '_classList', {
                value: classList,
                writable: false,
                enumerable: false,
              });
              return classList;
            },

            enumerable: true,
          });
        }());
        (function checkWorkerConsoleCompatibility() {
          if (typeof importScripts === 'undefined' || 'console' in globalScope) {
            return;
          }
          const consoleTimer = {};
          const workerConsole = {
            log: function log() {
              const args = Array.prototype.slice.call(arguments);
              globalScope.postMessage({
                targetName: 'main',
                action: 'console_log',
                data: args,
              });
            },
            error: function error() {
              const args = Array.prototype.slice.call(arguments);
              globalScope.postMessage({
                targetName: 'main',
                action: 'console_error',
                data: args,
              });
            },
            time: function time(name) {
              consoleTimer[name] = Date.now();
            },
            timeEnd: function timeEnd(name) {
              const time = consoleTimer[name];
              if (!time) {
                throw new Error(`Unknown timer name ${name}`);
              }
              this.log('Timer:', name, Date.now() - time);
            },
          };
          globalScope.console = workerConsole;
        }());
        (function checkConsoleCompatibility() {
          if (!hasDOM) {
            return;
          }
          if (!('console' in window)) {
            window.console = {
              log: function log() {},
              error: function error() {},
              warn: function warn() {},
            };
            return;
          }
          if (!('bind' in console.log)) {
            console.log = (function (fn) {
              return function (msg) {
                return fn(msg);
              };
            }(console.log));
            console.error = (function (fn) {
              return function (msg) {
                return fn(msg);
              };
            }(console.error));
            console.warn = (function (fn) {
              return function (msg) {
                return fn(msg);
              };
            }(console.warn));
          }
        }());
        (function checkOnClickCompatibility() {
          function ignoreIfTargetDisabled(event) {
            if (isDisabled(event.target)) {
              event.stopPropagation();
            }
          }
          function isDisabled(node) {
            return node.disabled || node.parentNode && isDisabled(node.parentNode);
          }
          if (isOpera) {
            document.addEventListener('click', ignoreIfTargetDisabled, true);
          }
        }());
        (function checkOnBlobSupport() {
          if (isIE || isIOSChrome) {
            PDFJS.disableCreateObjectURL = true;
          }
        }());
        (function checkNavigatorLanguage() {
          if (typeof navigator === 'undefined') {
            return;
          }
          if ('language' in navigator) {
            return;
          }
          PDFJS.locale = navigator.userLanguage || 'en-US';
        }());
        (function checkRangeRequests() {
          if (isSafari || isAndroidPre3 || isChromeWithRangeBug || isIOS) {
            PDFJS.disableRange = true;
            PDFJS.disableStream = true;
          }
        }());
        (function checkHistoryManipulation() {
          if (!hasDOM) {
            return;
          }
          if (!history.pushState || isAndroidPre3) {
            PDFJS.disableHistory = true;
          }
        }());
        (function checkSetPresenceInImageData() {
          if (!hasDOM) {
            return;
          }
          if (window.CanvasPixelArray) {
            if (typeof window.CanvasPixelArray.prototype.set !== 'function') {
              window.CanvasPixelArray.prototype.set = function (arr) {
                for (let i = 0, ii = this.length; i < ii; i++) {
                  this[i] = arr[i];
                }
              };
            }
          } else {
            let polyfill = false;
            let versionMatch;
            if (isChrome) {
              versionMatch = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
              polyfill = versionMatch && parseInt(versionMatch[2]) < 21;
            } else if (isAndroid) {
              polyfill = isAndroidPre5;
            } else if (isSafari) {
              versionMatch = userAgent.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//);
              polyfill = versionMatch && parseInt(versionMatch[1]) < 6;
            }
            if (polyfill) {
              let contextPrototype = window.CanvasRenderingContext2D.prototype;
              const { createImageData } = contextPrototype;
              contextPrototype.createImageData = function (w, h) {
                const imageData = createImageData.call(this, w, h);
                imageData.data.set = function (arr) {
                  for (let i = 0, ii = this.length; i < ii; i++) {
                    this[i] = arr[i];
                  }
                };
                return imageData;
              };
              contextPrototype = null;
            }
          }
        }());
        (function checkRequestAnimationFrame() {
          function installFakeAnimationFrameFunctions() {
            window.requestAnimationFrame = function (callback) {
              return window.setTimeout(callback, 20);
            };
            window.cancelAnimationFrame = function (timeoutID) {
              window.clearTimeout(timeoutID);
            };
          }
          if (!hasDOM) {
            return;
          }
          if (isIOS) {
            installFakeAnimationFrameFunctions();
            return;
          }
          if ('requestAnimationFrame' in window) {
            return;
          }
          window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
          if (window.requestAnimationFrame) {
            return;
          }
          installFakeAnimationFrameFunctions();
        }());
        (function checkCanvasSizeLimitation() {
          if (isIOS || isAndroid) {
            PDFJS.maxCanvasPixels = 5242880;
          }
        }());
        (function checkFullscreenSupport() {
          if (!hasDOM) {
            return;
          }
          if (isIE && window.parent !== window) {
            PDFJS.disableFullscreen = true;
          }
        }());
        (function checkCurrentScript() {
          if (!hasDOM) {
            return;
          }
          if ('currentScript' in document) {
            return;
          }
          Object.defineProperty(document, 'currentScript', {
            get: function get() {
              const scripts = document.getElementsByTagName('script');
              return scripts[scripts.length - 1];
            },

            enumerable: true,
            configurable: true,
          });
        }());
        (function checkInputTypeNumberAssign() {
          if (!hasDOM) {
            return;
          }
          const el = document.createElement('input');
          try {
            el.type = 'number';
          } catch (ex) {
            const inputProto = el.constructor.prototype;
            const typeProperty = Object.getOwnPropertyDescriptor(inputProto, 'type');
            Object.defineProperty(inputProto, 'type', {
              get: function get() {
                return typeProperty.get.call(this);
              },
              set: function set(value) {
                typeProperty.set.call(this, value === 'number' ? 'text' : value);
              },

              enumerable: true,
              configurable: true,
            });
          }
        }());
        (function checkDocumentReadyState() {
          if (!hasDOM) {
            return;
          }
          if (!document.attachEvent) {
            return;
          }
          const documentProto = document.constructor.prototype;
          const readyStateProto = Object.getOwnPropertyDescriptor(documentProto, 'readyState');
          Object.defineProperty(documentProto, 'readyState', {
            get: function get() {
              const value = readyStateProto.get.call(this);
              return value === 'interactive' ? 'loading' : value;
            },
            set: function set(value) {
              readyStateProto.set.call(this, value);
            },

            enumerable: true,
            configurable: true,
          });
        }());
        (function checkChildNodeRemove() {
          if (!hasDOM) {
            return;
          }
          if (typeof Element.prototype.remove !== 'undefined') {
            return;
          }
          Element.prototype.remove = function () {
            if (this.parentNode) {
              this.parentNode.removeChild(this);
            }
          };
        }());
        (function checkNumberIsNaN() {
          if (Number.isNaN) {
            return;
          }
          Number.isNaN = function (value) {
            return typeof value === 'number' && isNaN(value);
          };
        }());
        (function checkNumberIsInteger() {
          if (Number.isInteger) {
            return;
          }
          Number.isInteger = function (value) {
            return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
          };
        }());
        (function checkPromise() {
          if (globalScope.Promise) {
            if (typeof globalScope.Promise.all !== 'function') {
              globalScope.Promise.all = function (iterable) {
                let count = 0;
                const results = [];
                let resolve;
                let reject;
                const promise = new globalScope.Promise(((resolve_, reject_) => {
                  resolve = resolve_;
                  reject = reject_;
                }));
                iterable.forEach((p, i) => {
                  count++;
                  p.then((result) => {
                    results[i] = result;
                    count--;
                    if (count === 0) {
                      resolve(results);
                    }
                  }, reject);
                });
                if (count === 0) {
                  resolve(results);
                }
                return promise;
              };
            }
            if (typeof globalScope.Promise.resolve !== 'function') {
              globalScope.Promise.resolve = function (value) {
                return new globalScope.Promise(((resolve) => {
                  resolve(value);
                }));
              };
            }
            if (typeof globalScope.Promise.reject !== 'function') {
              globalScope.Promise.reject = function (reason) {
                return new globalScope.Promise(((resolve, reject) => {
                  reject(reason);
                }));
              };
            }
            if (typeof globalScope.Promise.prototype.catch !== 'function') {
              globalScope.Promise.prototype.catch = function (onReject) {
                return globalScope.Promise.prototype.then(undefined, onReject);
              };
            }
            return;
          }
          const STATUS_PENDING = 0;
          const STATUS_RESOLVED = 1;
          const STATUS_REJECTED = 2;
          const REJECTION_TIMEOUT = 500;
          const HandlerManager = {
            handlers: [],
            running: false,
            unhandledRejections: [],
            pendingRejectionCheck: false,
            scheduleHandlers: function scheduleHandlers(promise) {
              if (promise._status === STATUS_PENDING) {
                return;
              }
              this.handlers = this.handlers.concat(promise._handlers);
              promise._handlers = [];
              if (this.running) {
                return;
              }
              this.running = true;
              setTimeout(this.runHandlers.bind(this), 0);
            },
            runHandlers: function runHandlers() {
              const RUN_TIMEOUT = 1;
              const timeoutAt = Date.now() + RUN_TIMEOUT;
              while (this.handlers.length > 0) {
                const handler = this.handlers.shift();
                let nextStatus = handler.thisPromise._status;
                let nextValue = handler.thisPromise._value;
                try {
                  if (nextStatus === STATUS_RESOLVED) {
                    if (typeof handler.onResolve === 'function') {
                      nextValue = handler.onResolve(nextValue);
                    }
                  } else if (typeof handler.onReject === 'function') {
                    nextValue = handler.onReject(nextValue);
                    nextStatus = STATUS_RESOLVED;
                    if (handler.thisPromise._unhandledRejection) {
                      this.removeUnhandeledRejection(handler.thisPromise);
                    }
                  }
                } catch (ex) {
                  nextStatus = STATUS_REJECTED;
                  nextValue = ex;
                }
                handler.nextPromise._updateStatus(nextStatus, nextValue);
                if (Date.now() >= timeoutAt) {
                  break;
                }
              }
              if (this.handlers.length > 0) {
                setTimeout(this.runHandlers.bind(this), 0);
                return;
              }
              this.running = false;
            },
            addUnhandledRejection: function addUnhandledRejection(promise) {
              this.unhandledRejections.push({
                promise,
                time: Date.now(),
              });
              this.scheduleRejectionCheck();
            },
            removeUnhandeledRejection: function removeUnhandeledRejection(promise) {
              promise._unhandledRejection = false;
              for (let i = 0; i < this.unhandledRejections.length; i++) {
                if (this.unhandledRejections[i].promise === promise) {
                  this.unhandledRejections.splice(i);
                  i--;
                }
              }
            },
            scheduleRejectionCheck: function scheduleRejectionCheck() {
              const _this = this;

              if (this.pendingRejectionCheck) {
                return;
              }
              this.pendingRejectionCheck = true;
              setTimeout(() => {
                _this.pendingRejectionCheck = false;
                const now = Date.now();
                for (let i = 0; i < _this.unhandledRejections.length; i++) {
                  if (now - _this.unhandledRejections[i].time > REJECTION_TIMEOUT) {
                    const unhandled = _this.unhandledRejections[i].promise._value;
                    let msg = `Unhandled rejection: ${unhandled}`;
                    if (unhandled.stack) {
                      msg += `\n${unhandled.stack}`;
                    }
                    try {
                      throw new Error(msg);
                    } catch (_) {
                      console.warn(msg);
                    }
                    _this.unhandledRejections.splice(i);
                    i--;
                  }
                }
                if (_this.unhandledRejections.length) {
                  _this.scheduleRejectionCheck();
                }
              }, REJECTION_TIMEOUT);
            },
          };
          const Promise = function Promise(resolver) {
            this._status = STATUS_PENDING;
            this._handlers = [];
            try {
              resolver.call(this, this._resolve.bind(this), this._reject.bind(this));
            } catch (e) {
              this._reject(e);
            }
          };
          Promise.all = function Promise_all(promises) {
            let resolveAll; let
              rejectAll;
            const deferred = new Promise(((resolve, reject) => {
              resolveAll = resolve;
              rejectAll = reject;
            }));
            let unresolved = promises.length;
            let results = [];
            if (unresolved === 0) {
              resolveAll(results);
              return deferred;
            }
            function reject(reason) {
              if (deferred._status === STATUS_REJECTED) {
                return;
              }
              results = [];
              rejectAll(reason);
            }
            for (let i = 0, ii = promises.length; i < ii; ++i) {
              const promise = promises[i];
              const resolve = (function (i) {
                return function (value) {
                  if (deferred._status === STATUS_REJECTED) {
                    return;
                  }
                  results[i] = value;
                  unresolved--;
                  if (unresolved === 0) {
                    resolveAll(results);
                  }
                };
              }(i));
              if (Promise.isPromise(promise)) {
                promise.then(resolve, reject);
              } else {
                resolve(promise);
              }
            }
            return deferred;
          };
          Promise.isPromise = function Promise_isPromise(value) {
            return value && typeof value.then === 'function';
          };
          Promise.resolve = function Promise_resolve(value) {
            return new Promise(((resolve) => {
              resolve(value);
            }));
          };
          Promise.reject = function Promise_reject(reason) {
            return new Promise(((resolve, reject) => {
              reject(reason);
            }));
          };
          Promise.prototype = {
            _status: null,
            _value: null,
            _handlers: null,
            _unhandledRejection: null,
            _updateStatus: function Promise__updateStatus(status, value) {
              if (this._status === STATUS_RESOLVED || this._status === STATUS_REJECTED) {
                return;
              }
              if (status === STATUS_RESOLVED && Promise.isPromise(value)) {
                value.then(this._updateStatus.bind(this, STATUS_RESOLVED), this._updateStatus.bind(this, STATUS_REJECTED));
                return;
              }
              this._status = status;
              this._value = value;
              if (status === STATUS_REJECTED && this._handlers.length === 0) {
                this._unhandledRejection = true;
                HandlerManager.addUnhandledRejection(this);
              }
              HandlerManager.scheduleHandlers(this);
            },
            _resolve: function Promise_resolve(value) {
              this._updateStatus(STATUS_RESOLVED, value);
            },
            _reject: function Promise_reject(reason) {
              this._updateStatus(STATUS_REJECTED, reason);
            },
            then: function Promise_then(onResolve, onReject) {
              const nextPromise = new Promise(function (resolve, reject) {
                this.resolve = resolve;
                this.reject = reject;
              });
              this._handlers.push({
                thisPromise: this,
                onResolve,
                onReject,
                nextPromise,
              });
              HandlerManager.scheduleHandlers(this);
              return nextPromise;
            },
            catch: function Promise_catch(onReject) {
              return this.then(undefined, onReject);
            },
          };
          globalScope.Promise = Promise;
        }());
        (function checkWeakMap() {
          if (globalScope.WeakMap) {
            return;
          }
          let id = 0;
          function WeakMap() {
            this.id = `$weakmap${id++}`;
          }
          WeakMap.prototype = {
            has: function has(obj) {
              if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && typeof obj !== 'function' || obj === null) {
                return false;
              }
              return !!Object.getOwnPropertyDescriptor(obj, this.id);
            },
            get: function get(obj) {
              return this.has(obj) ? obj[this.id] : undefined;
            },
            set: function set(obj, value) {
              Object.defineProperty(obj, this.id, {
                value,
                enumerable: false,
                configurable: true,
              });
            },
            delete: function _delete(obj) {
              delete obj[this.id];
            },
          };
          globalScope.WeakMap = WeakMap;
        }());
        (function checkURLConstructor() {
          let hasWorkingUrl = false;
          try {
            if (typeof URL === 'function' && _typeof(URL.prototype) === 'object' && 'origin' in URL.prototype) {
              const u = new URL('b', 'http://a');
              u.pathname = 'c%20d';
              hasWorkingUrl = u.href === 'http://a/c%20d';
            }
          } catch (e) {}
          if (hasWorkingUrl) {
            return;
          }
          const relative = Object.create(null);
          relative.ftp = 21;
          relative.file = 0;
          relative.gopher = 70;
          relative.http = 80;
          relative.https = 443;
          relative.ws = 80;
          relative.wss = 443;
          const relativePathDotMapping = Object.create(null);
          relativePathDotMapping['%2e'] = '.';
          relativePathDotMapping['.%2e'] = '..';
          relativePathDotMapping['%2e.'] = '..';
          relativePathDotMapping['%2e%2e'] = '..';
          function isRelativeScheme(scheme) {
            return relative[scheme] !== undefined;
          }
          function invalid() {
            clear.call(this);
            this._isInvalid = true;
          }
          function IDNAToASCII(h) {
            if (h === '') {
              invalid.call(this);
            }
            return h.toLowerCase();
          }
          function percentEscape(c) {
            const unicode = c.charCodeAt(0);
            if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) === -1) {
              return c;
            }
            return encodeURIComponent(c);
          }
          function percentEscapeQuery(c) {
            const unicode = c.charCodeAt(0);
            if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) === -1) {
              return c;
            }
            return encodeURIComponent(c);
          }
          let EOF;
          const ALPHA = /[a-zA-Z]/;
          const ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
          function parse(input, stateOverride, base) {
            function err(message) {
              errors.push(message);
            }
            let state = stateOverride || 'scheme start';
            let cursor = 0;
            let buffer = '';
            let seenAt = false;
            let seenBracket = false;
            var errors = [];
            loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
              const c = input[cursor];
              switch (state) {
                case 'scheme start':
                  if (c && ALPHA.test(c)) {
                    buffer += c.toLowerCase();
                    state = 'scheme';
                  } else if (!stateOverride) {
                    buffer = '';
                    state = 'no scheme';
                    continue;
                  } else {
                    err('Invalid scheme.');
                    break loop;
                  }
                  break;
                case 'scheme':
                  if (c && ALPHANUMERIC.test(c)) {
                    buffer += c.toLowerCase();
                  } else if (c === ':') {
                    this._scheme = buffer;
                    buffer = '';
                    if (stateOverride) {
                      break loop;
                    }
                    if (isRelativeScheme(this._scheme)) {
                      this._isRelative = true;
                    }
                    if (this._scheme === 'file') {
                      state = 'relative';
                    } else if (this._isRelative && base && base._scheme === this._scheme) {
                      state = 'relative or authority';
                    } else if (this._isRelative) {
                      state = 'authority first slash';
                    } else {
                      state = 'scheme data';
                    }
                  } else if (!stateOverride) {
                    buffer = '';
                    cursor = 0;
                    state = 'no scheme';
                    continue;
                  } else if (c === EOF) {
                    break loop;
                  } else {
                    err(`Code point not allowed in scheme: ${c}`);
                    break loop;
                  }
                  break;
                case 'scheme data':
                  if (c === '?') {
                    this._query = '?';
                    state = 'query';
                  } else if (c === '#') {
                    this._fragment = '#';
                    state = 'fragment';
                  } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                    this._schemeData += percentEscape(c);
                  }
                  break;
                case 'no scheme':
                  if (!base || !isRelativeScheme(base._scheme)) {
                    err('Missing scheme.');
                    invalid.call(this);
                  } else {
                    state = 'relative';
                    continue;
                  }
                  break;
                case 'relative or authority':
                  if (c === '/' && input[cursor + 1] === '/') {
                    state = 'authority ignore slashes';
                  } else {
                    err(`Expected /, got: ${c}`);
                    state = 'relative';
                    continue;
                  }
                  break;
                case 'relative':
                  this._isRelative = true;
                  if (this._scheme !== 'file') {
                    this._scheme = base._scheme;
                  }
                  if (c === EOF) {
                    this._host = base._host;
                    this._port = base._port;
                    this._path = base._path.slice();
                    this._query = base._query;
                    this._username = base._username;
                    this._password = base._password;
                    break loop;
                  } else if (c === '/' || c === '\\') {
                    if (c === '\\') {
                      err('\\ is an invalid code point.');
                    }
                    state = 'relative slash';
                  } else if (c === '?') {
                    this._host = base._host;
                    this._port = base._port;
                    this._path = base._path.slice();
                    this._query = '?';
                    this._username = base._username;
                    this._password = base._password;
                    state = 'query';
                  } else if (c === '#') {
                    this._host = base._host;
                    this._port = base._port;
                    this._path = base._path.slice();
                    this._query = base._query;
                    this._fragment = '#';
                    this._username = base._username;
                    this._password = base._password;
                    state = 'fragment';
                  } else {
                    const nextC = input[cursor + 1];
                    const nextNextC = input[cursor + 2];
                    if (this._scheme !== 'file' || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#') {
                      this._host = base._host;
                      this._port = base._port;
                      this._username = base._username;
                      this._password = base._password;
                      this._path = base._path.slice();
                      this._path.pop();
                    }
                    state = 'relative path';
                    continue;
                  }
                  break;
                case 'relative slash':
                  if (c === '/' || c === '\\') {
                    if (c === '\\') {
                      err('\\ is an invalid code point.');
                    }
                    if (this._scheme === 'file') {
                      state = 'file host';
                    } else {
                      state = 'authority ignore slashes';
                    }
                  } else {
                    if (this._scheme !== 'file') {
                      this._host = base._host;
                      this._port = base._port;
                      this._username = base._username;
                      this._password = base._password;
                    }
                    state = 'relative path';
                    continue;
                  }
                  break;
                case 'authority first slash':
                  if (c === '/') {
                    state = 'authority second slash';
                  } else {
                    err(`Expected '/', got: ${c}`);
                    state = 'authority ignore slashes';
                    continue;
                  }
                  break;
                case 'authority second slash':
                  state = 'authority ignore slashes';
                  if (c !== '/') {
                    err(`Expected '/', got: ${c}`);
                    continue;
                  }
                  break;
                case 'authority ignore slashes':
                  if (c !== '/' && c !== '\\') {
                    state = 'authority';
                    continue;
                  } else {
                    err(`Expected authority, got: ${c}`);
                  }
                  break;
                case 'authority':
                  if (c === '@') {
                    if (seenAt) {
                      err('@ already seen.');
                      buffer += '%40';
                    }
                    seenAt = true;
                    for (let i = 0; i < buffer.length; i++) {
                      const cp = buffer[i];
                      if (cp === '\t' || cp === '\n' || cp === '\r') {
                        err('Invalid whitespace in authority.');
                        continue;
                      }
                      if (cp === ':' && this._password === null) {
                        this._password = '';
                        continue;
                      }
                      const tempC = percentEscape(cp);
                      if (this._password !== null) {
                        this._password += tempC;
                      } else {
                        this._username += tempC;
                      }
                    }
                    buffer = '';
                  } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
                    cursor -= buffer.length;
                    buffer = '';
                    state = 'host';
                    continue;
                  } else {
                    buffer += c;
                  }
                  break;
                case 'file host':
                  if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
                    if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
                      state = 'relative path';
                    } else if (buffer.length === 0) {
                      state = 'relative path start';
                    } else {
                      this._host = IDNAToASCII.call(this, buffer);
                      buffer = '';
                      state = 'relative path start';
                    }
                    continue;
                  } else if (c === '\t' || c === '\n' || c === '\r') {
                    err('Invalid whitespace in file host.');
                  } else {
                    buffer += c;
                  }
                  break;
                case 'host':
                case 'hostname':
                  if (c === ':' && !seenBracket) {
                    this._host = IDNAToASCII.call(this, buffer);
                    buffer = '';
                    state = 'port';
                    if (stateOverride === 'hostname') {
                      break loop;
                    }
                  } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
                    this._host = IDNAToASCII.call(this, buffer);
                    buffer = '';
                    state = 'relative path start';
                    if (stateOverride) {
                      break loop;
                    }
                    continue;
                  } else if (c !== '\t' && c !== '\n' && c !== '\r') {
                    if (c === '[') {
                      seenBracket = true;
                    } else if (c === ']') {
                      seenBracket = false;
                    }
                    buffer += c;
                  } else {
                    err(`Invalid code point in host/hostname: ${c}`);
                  }
                  break;
                case 'port':
                  if (/[0-9]/.test(c)) {
                    buffer += c;
                  } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
                    if (buffer !== '') {
                      const temp = parseInt(buffer, 10);
                      if (temp !== relative[this._scheme]) {
                        this._port = `${temp}`;
                      }
                      buffer = '';
                    }
                    if (stateOverride) {
                      break loop;
                    }
                    state = 'relative path start';
                    continue;
                  } else if (c === '\t' || c === '\n' || c === '\r') {
                    err(`Invalid code point in port: ${c}`);
                  } else {
                    invalid.call(this);
                  }
                  break;
                case 'relative path start':
                  if (c === '\\') {
                    err('\'\\\' not allowed in path.');
                  }
                  state = 'relative path';
                  if (c !== '/' && c !== '\\') {
                    continue;
                  }
                  break;
                case 'relative path':
                  if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
                    if (c === '\\') {
                      err('\\ not allowed in relative path.');
                    }
                    var tmp;
                    if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
                      buffer = tmp;
                    }
                    if (buffer === '..') {
                      this._path.pop();
                      if (c !== '/' && c !== '\\') {
                        this._path.push('');
                      }
                    } else if (buffer === '.' && c !== '/' && c !== '\\') {
                      this._path.push('');
                    } else if (buffer !== '.') {
                      if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
                        buffer = `${buffer[0]}:`;
                      }
                      this._path.push(buffer);
                    }
                    buffer = '';
                    if (c === '?') {
                      this._query = '?';
                      state = 'query';
                    } else if (c === '#') {
                      this._fragment = '#';
                      state = 'fragment';
                    }
                  } else if (c !== '\t' && c !== '\n' && c !== '\r') {
                    buffer += percentEscape(c);
                  }
                  break;
                case 'query':
                  if (!stateOverride && c === '#') {
                    this._fragment = '#';
                    state = 'fragment';
                  } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                    this._query += percentEscapeQuery(c);
                  }
                  break;
                case 'fragment':
                  if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                    this._fragment += c;
                  }
                  break;
              }
              cursor++;
            }
          }
          function clear() {
            this._scheme = '';
            this._schemeData = '';
            this._username = '';
            this._password = null;
            this._host = '';
            this._port = '';
            this._path = [];
            this._query = '';
            this._fragment = '';
            this._isInvalid = false;
            this._isRelative = false;
          }
          function JURL(url, base) {
            if (base !== undefined && !(base instanceof JURL)) {
              base = new JURL(String(base));
            }
            this._url = url;
            clear.call(this);
            const input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
            parse.call(this, input, null, base);
          }
          JURL.prototype = {
            toString: function toString() {
              return this.href;
            },

            get href() {
              if (this._isInvalid) {
                return this._url;
              }
              let authority = '';
              if (this._username !== '' || this._password !== null) {
                authority = `${this._username + (this._password !== null ? `:${this._password}` : '')}@`;
              }
              return this.protocol + (this._isRelative ? `//${authority}${this.host}` : '') + this.pathname + this._query + this._fragment;
            },
            set href(value) {
              clear.call(this);
              parse.call(this, value);
            },
            get protocol() {
              return `${this._scheme}:`;
            },
            set protocol(value) {
              if (this._isInvalid) {
                return;
              }
              parse.call(this, `${value}:`, 'scheme start');
            },
            get host() {
              return this._isInvalid ? '' : this._port ? `${this._host}:${this._port}` : this._host;
            },
            set host(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              parse.call(this, value, 'host');
            },
            get hostname() {
              return this._host;
            },
            set hostname(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              parse.call(this, value, 'hostname');
            },
            get port() {
              return this._port;
            },
            set port(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              parse.call(this, value, 'port');
            },
            get pathname() {
              return this._isInvalid ? '' : this._isRelative ? `/${this._path.join('/')}` : this._schemeData;
            },
            set pathname(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              this._path = [];
              parse.call(this, value, 'relative path start');
            },
            get search() {
              return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
            },
            set search(value) {
              if (this._isInvalid || !this._isRelative) {
                return;
              }
              this._query = '?';
              if (value[0] === '?') {
                value = value.slice(1);
              }
              parse.call(this, value, 'query');
            },
            get hash() {
              return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
            },
            set hash(value) {
              if (this._isInvalid) {
                return;
              }
              this._fragment = '#';
              if (value[0] === '#') {
                value = value.slice(1);
              }
              parse.call(this, value, 'fragment');
            },
            get origin() {
              let host;
              if (this._isInvalid || !this._scheme) {
                return '';
              }
              switch (this._scheme) {
                case 'data':
                case 'file':
                case 'javascript':
                case 'mailto':
                  return 'null';
                case 'blob':
                  try {
                    return new JURL(this._schemeData).origin || 'null';
                  } catch (_) {}
                  return 'null';
              }
              host = this.host;
              if (!host) {
                return '';
              }
              return `${this._scheme}://${host}`;
            },
          };
          const OriginalURL = globalScope.URL;
          if (OriginalURL) {
            JURL.createObjectURL = function (blob) {
              return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
            };
            JURL.revokeObjectURL = function (url) {
              OriginalURL.revokeObjectURL(url);
            };
          }
          globalScope.URL = JURL;
        }());
      }
      /** */ }),
    /* 17 */
    /** */ (function (module, exports, __w_pdfjs_require__) {
      let isReadableStreamSupported = false;
      if (typeof ReadableStream !== 'undefined') {
        try {
          new ReadableStream({
            start: function start(controller) {
              controller.close();
            },
          });
          isReadableStreamSupported = true;
        } catch (e) {}
      }
      if (isReadableStreamSupported) {
        exports.ReadableStream = ReadableStream;
      } else {
        exports.ReadableStream = __w_pdfjs_require__(10).ReadableStream;
      }
      /** */ }),
    /** *** */ ]))));
// # sourceMappingURL=pdf.js.map
