import React from "react";
import { useSchema } from "../../hooks/useSchema";
import SchemaFieldComp from "./SchemaField";
import { buildJson } from "../../utils/jsonUtils";
import { Button } from "../ui/button";

const SchemaBuilder: React.FC = () => {
  const { fields, addField, updateField, removeField } = useSchema();

  const renderFields = (fieldsArr: typeof fields) => (
    <>
      {fieldsArr.map(field => (
        <SchemaFieldComp
          key={field.id}
          field={field}
          onNameChange={v => updateField(field.id, "name", v)}
          onTypeChange={v => updateField(field.id, "type", v)}
          onAddChild={() => addField(field.id)}
          onDelete={() => removeField(field.id)}
          childrenFields={field.children && renderFields(field.children)}
        />
      ))}
    </>
  );

  return (
    <div>
      <div className="mx-auto p-6 flex gap-8">
        {/* Left: Field Builder */}
        <div className="flex-1 rounded-2xl p-6 overflow-auto">
          {renderFields(fields)}
          <Button className="mb-4 w-full bg-blue-900 cursor-pointer" onClick={() => addField()}>Add Field</Button>
        </div>
        <div className="w-[40%] rounded-2xl p-1 overflow-auto text-left text-md">
          <h2 className="font-bold mb-2">Live JSON Schema</h2>
          <pre className="rounded p-3 ">
            {JSON.stringify(buildJson(fields), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );

};

export default SchemaBuilder;
