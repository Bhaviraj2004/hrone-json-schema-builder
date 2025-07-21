import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useSchema } from "../../hooks/useSchema";
import SchemaFieldComp from "./SchemaField";
import { buildJson } from "../../utils/jsonUtils";
import { Button } from "../ui/button";
const SchemaBuilder = () => {
    const { fields, addField, updateField, removeField } = useSchema();
    const renderFields = (fieldsArr) => (_jsx(_Fragment, { children: fieldsArr.map(field => (_jsx(SchemaFieldComp, { field: field, onNameChange: v => updateField(field.id, "name", v), onTypeChange: v => updateField(field.id, "type", v), onAddChild: () => addField(field.id), onDelete: () => removeField(field.id), childrenFields: field.children && renderFields(field.children) }, field.id))) }));
    return (_jsx("div", { children: _jsxs("div", { className: "mx-auto p-6 flex gap-8", children: [_jsxs("div", { className: "flex-1 rounded-2xl p-6 overflow-auto", children: [renderFields(fields), _jsx(Button, { className: "mb-4 w-full bg-blue-900 cursor-pointer", onClick: () => addField(), children: "Add Field" })] }), _jsxs("div", { className: "w-[40%] rounded-2xl p-1 overflow-auto text-left text-md", children: [_jsx("h2", { className: "font-bold mb-2", children: "Live JSON Schema" }), _jsx("pre", { className: "rounded p-3 ", children: JSON.stringify(buildJson(fields), null, 2) })] })] }) }));
};
export default SchemaBuilder;
