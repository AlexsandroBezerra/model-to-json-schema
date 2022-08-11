import args from 'args'

import { DEFAULT_OUTPUT } from '../constants';
import { textInRed } from './colorize';

type ValidateFlagsProp = { 
  [key: string]: any
}

type ValidateFlagsReturn = { 
  input: string
  output: string 
}

export function validateFlags(flags: ValidateFlagsProp): ValidateFlagsReturn {
  if (flags.input === DEFAULT_OUTPUT) {
    console.error(textInRed('Input file or directory is required\n'))
    args.showHelp()

    process.exit(1)
  }

  return { input: flags.input, output: flags.output }
}