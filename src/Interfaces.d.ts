/**
 * Global Typescript declarations should go here.
 */

declare module '*.component.less' {
  const content: string;
  export = content;
}

declare module '*.html' {
  const content: string;
  export = content;
}
