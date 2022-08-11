import fs from 'fs/promises'
import { validationMetadatasToSchemas } from 'class-validator-jsonschema'

import { transformSchema } from './transform-schema'
import path from 'path'
import { camelToKebab } from '../utils/camel-to-kebab'

export async function generateSchemas(files: string[], outputPath: string) {
  await Promise.all(files.map(file => import(file)))

  const schemas = validationMetadatasToSchemas()
  
  await fs.mkdir(outputPath, { recursive: true })

  Object.entries(schemas).forEach(async ([title, schema]) => {
    const transformedSchema = transformSchema(title, schema)
    const json = JSON.stringify(transformedSchema, null, 2)

    const outputFilePath = path.join(outputPath, `${camelToKebab(title)}.json`)

    await fs.writeFile(outputFilePath, json, { encoding: 'utf8' })
  })
}