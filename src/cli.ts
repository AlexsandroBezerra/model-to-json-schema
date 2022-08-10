#!/usr/bin/env node
import args from 'args'
import glob from 'glob'

import { getFullPath } from './utils/get-full-path'
import { validateFlags } from './utils/validate-flags'

args
  .option('input', 'Input file or directory', 'undefined')
  .option('output', 'Output directory', 'schemas')

const flags = validateFlags(args.parse(process.argv))

const { input, output } = flags

const inputPath = getFullPath(input)
const outputPath = getFullPath(output)

const files = glob.sync(input).map(getFullPath)

console.log(files)
console.log(inputPath)
console.log(outputPath)