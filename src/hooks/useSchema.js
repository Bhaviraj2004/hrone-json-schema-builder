import { useState } from "react";
import { createField } from "../utils/fieldUtils";
export function useSchema(initialFields = []) {
    const [fields, setFields] = useState(initialFields);
    const addField = (parentId, type = 'string') => {
        const newField = createField(type);
        if (!parentId) {
            setFields(prev => [...prev, newField]);
        }
        else {
            setFields(prev => addFieldToParent(prev, parentId, newField));
        }
    };
    const updateField = (id, key, value) => {
        setFields(prev => updateFieldInTree(prev, id, key, value));
    };
    const removeField = (id) => {
        setFields(prev => removeFieldFromTree(prev, id));
    };
    return { fields, setFields, addField, updateField, removeField };
}
function addFieldToParent(tree, parentId, newField) {
    return tree.map(field => {
        if (field.id === parentId && field.type === "nested") {
            return { ...field, children: [...(field.children || []), newField] };
        }
        else if (field.type === "nested" && field.children) {
            return { ...field, children: addFieldToParent(field.children, parentId, newField) };
        }
        return field;
    });
}
function updateFieldInTree(tree, id, key, value) {
    return tree.map(field => {
        if (field.id === id) {
            return { ...field, [key]: value };
        }
        else if (field.type === "nested" && field.children) {
            return { ...field, children: updateFieldInTree(field.children, id, key, value) };
        }
        return field;
    });
}
function removeFieldFromTree(tree, id) {
    return tree
        .filter(field => field.id !== id)
        .map(field => field.type === "nested" && field.children
        ? { ...field, children: removeFieldFromTree(field.children, id) }
        : field);
}
