import { del, getStats, move, rename, exist } from "../inDirAndFile/actions";
import copy from "./copy";
import read from "./read";
import write from "./write";
const functions = {
  copy,
  read,
  write,
  del,
  move,
  rename,
  getStats,
  exist
}
export {
  functions as default,
  copy,
  read,
  write,
  del,
  move,
  rename,
  getStats,
  exist
}
