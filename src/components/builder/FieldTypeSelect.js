import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from "../ui/select";
const FieldTypeSelect = ({ value, onChange }) => (_jsxs(Select, { value: value, onValueChange: onChange, children: [_jsx(SelectTrigger, { className: "w-full", children: _jsx(SelectValue, { placeholder: "Select type" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "string", children: "String" }), _jsx(SelectItem, { value: "number", children: "Number" }), _jsx(SelectItem, { value: "nested", children: "Nested" })] })] }));
export default FieldTypeSelect;
