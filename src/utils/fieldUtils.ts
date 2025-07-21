import { SchemaField } from "../types/schema";
import { v4 as uuidv4 } from "uuid";

// Generate a new blank field
export function createField(type: 'string' | 'number' | 'nested' = 'string'): SchemaField {
  return {
    id: uuidv4(),
    name: "",
    type,
    children: type === 'nested' ? [] : undefined,
  };
}
