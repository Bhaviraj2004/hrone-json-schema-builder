import { useState } from "react";
import { SchemaField } from "../types/schema";
import { createField } from "../utils/fieldUtils";

export function useSchema(initialFields: SchemaField[] = []) {
  const [fields, setFields] = useState<SchemaField[]>(initialFields);

  const addField = (parentId?: string, type: 'string' | 'number' | 'nested' = 'string') => {
    const newField = createField(type);
    if (!parentId) {
      setFields(prev => [...prev, newField]);
    } else {
      setFields(prev => addFieldToParent(prev, parentId, newField));
    }
  };

  const updateField = (id: string, key: keyof SchemaField, value: any) => {
    setFields(prev => updateFieldInTree(prev, id, key, value));
  };

  const removeField = (id: string) => {
    setFields(prev => removeFieldFromTree(prev, id));
  };

  return { fields, setFields, addField, updateField, removeField };
}

// Helper Functions
function addFieldToParent(tree: SchemaField[], parentId: string, newField: SchemaField): SchemaField[] {
  return tree.map(field => {
    if (field.id === parentId && field.type === "nested") {
      return { ...field, children: [...(field.children || []), newField] };
    } else if (field.type === "nested" && field.children) {
      return { ...field, children: addFieldToParent(field.children, parentId, newField) };
    }
    return field;
  });
}

function updateFieldInTree(tree: SchemaField[], id: string, key: keyof SchemaField, value: any): SchemaField[] {
  return tree.map(field => {
    if (field.id === id) {
      return { ...field, [key]: value };
    } else if (field.type === "nested" && field.children) {
      return { ...field, children: updateFieldInTree(field.children, id, key, value) };
    }
    return field;
  });
}

function removeFieldFromTree(tree: SchemaField[], id: string): SchemaField[] {
  return tree
    .filter(field => field.id !== id)
    .map(field =>
      field.type === "nested" && field.children
        ? { ...field, children: removeFieldFromTree(field.children, id) }
        : field
    );
}
