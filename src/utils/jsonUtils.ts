import { SchemaField } from "../types/schema";

export function buildJson(fields: SchemaField[]): any {
  const result: Record<string, any> = {};

  fields.forEach(field => {
    if (!field.name) return;

    if (field.type === "nested") {
      result[field.name] = buildJson(field.children || []);
    } else {
      result[field.name] = field.type === "string"
        ? "string"
        : field.type === "number"
          ? "number"
          : null;
    }
  });

  return result;
}
