import path from 'path'

export const getFullPath = (inputPath: string) => path.resolve(process.cwd(), inputPath)
