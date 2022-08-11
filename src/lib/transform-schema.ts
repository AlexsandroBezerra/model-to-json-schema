export function transformSchema(title: string, schema: object) {
  return {
    "$schema": "http://json-schema.org/draft-04/schema#",
    title,
    ...schema
  }
}