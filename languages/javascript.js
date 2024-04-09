const KEYWORDS = [
  "typeof",
  "in",
  "for",
  "of",
  "do",
  "while",
  "else",
  "if",
  "break",
  "return",
  "continue",
  "void",
  "with",
  "switch",
  "case",
  "delete",
  "var",
  "let",
  "const",
  "get",
  "set",
  "debugger",
  "try",
  "catch",
  "finally",
  "async",
  "await",
  "throw",
  "new",
  "function",
  "class",
  "instanceof",
  "extends",
  "static",
  "from",
  "as",
  "yield",
];

const IMPORTS = ["export", "import", "default"];

const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity",
  "-Infinity",
];

const TYPES = [
  "Object",
  "Function",
  "Array",
  "Symbol",
  "Math",
  "Date",
  "Number",
  "BigInt",
  "String",
  "RegExp",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "JSON",
  "Promise",
  "Generator",
  "Proxy",
  "Error",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
];

/**
 * Map containing JavaScript keywords to their corresponding highlight classes.
 * @type {Map<string[], string>}
 */
export const jsClasses = new Map([
  [KEYWORDS, "keyword"],
  [IMPORTS, "import"],
  [LITERALS, "literal"],
  [TYPES, "type"],
  [BUILT_IN_VARIABLES, "variable"],
]);
