import args from 'args'
import { textInRed } from './colorize';

type ValidateFlagsProp = { 
  [key: string]: any
}

type ValidateFlagsReturn = { 
  input: string
  output: string 
}

export function validateFlags(flags: ValidateFlagsProp): ValidateFlagsReturn {
  if (flags.input === 'undefined') {
    console.error(textInRed('Input file or directory is required\n'))
    args.showHelp()

    process.exit(1)
  }

  return { input: flags.input, output: flags.output }
}