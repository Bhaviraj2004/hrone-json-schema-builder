import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FieldTypeSelect from "./FieldTypeSelect";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const SchemaFieldComp = ({ field, onNameChange, onTypeChange, onAddChild, onDelete, childrenFields }) => (_jsxs("div", { className: "border rounded p-3 mb-2 bg-white", children: [_jsxs("div", { className: "flex gap-2 mb-1", children: [_jsx(Input, { placeholder: "Field name", value: field.name, onChange: e => onNameChange(e.target.value) }), _jsx(FieldTypeSelect, { value: field.type, onChange: onTypeChange }), _jsx(Button, { variant: "destructive", size: "sm", onClick: onDelete, children: "Delete" })] }), field.type === "nested" && (_jsxs("div", { className: "ml-4 pl-4", children: [_jsx("div", { children: childrenFields }), _jsx(Button, { variant: "secondary", size: "sm", className: "mt-2", onClick: onAddChild, children: "Add Nested Field" })] }))] }));
export default SchemaFieldComp;
