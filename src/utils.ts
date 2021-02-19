import * as qs from 'querystring';
import * as path from 'path';
import type { ESLint } from 'eslint';

export interface Options {
  /** A single file, or array of files, to include when linting. */
  include?: string | string[];
  /** A single file, or array of files, to exclude when linting. */
  exclude?: string | string[];
  /** Custom error formatter or the name of a built-in formatter. */
  formatter?: string | ESLint.Formatter;
}

export function normalizePath(id: string): string {
  return path.relative(process.cwd(), id).split(path.sep).join('/');
}

export function checkVueFile(id: string): boolean {
  if (!id.includes('?')) return false;

  const rawQuery = id.split('?', 2)[1];

  return qs.parse(rawQuery).vue !== null ? true : false;
}