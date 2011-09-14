// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Punctuator cannot be expressed as a Unicode escape sequence consisting of six characters, namely \u plus four hexadecimal digits
 *
 * @section 7.7
 * @path 07_Lexical_Conventions/7.7_Punctuators/S7.7_A2_T2.js
 * @description Try to use () as Unicode \u00281\u0029
 * @negative
 */

\u00281\u0029;
