#!/usr/bin/env node
import args from 'args'
import glob from 'glob'
import { DEFAULT_INPUT, DEFAULT_OUTPUT } from './constants'

import { generateSchemas } from './lib/generate-schemas'
import { getFullPath } from './utils/get-full-path'
import { validateFlags } from './utils/validate-flags'

args
  .option('input', 'Input file or directory', DEFAULT_INPUT)
  .option('output', 'Output directory', DEFAULT_OUTPUT)

const { input, output } = validateFlags(args.parse(process.argv))

const inputPath = getFullPath(input)
const outputPath = getFullPath(output)

const files = glob.sync(inputPath).map(getFullPath)

generateSchemas(files, outputPath)