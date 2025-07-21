  import React from "react";
  import { SchemaField, FieldType } from "../../types/schema";
  import FieldTypeSelect from "./FieldTypeSelect";
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";

  interface Props {
    field: SchemaField;
    onNameChange: (v: string) => void;
    onTypeChange: (type: FieldType) => void;
    onAddChild: () => void;
    onDelete: () => void;
    childrenFields?: React.ReactNode;
  }

  const SchemaFieldComp: React.FC<Props> = ({
    field, onNameChange, onTypeChange, onAddChild, onDelete, childrenFields
  }) => (
    <div className="border rounded p-3 mb-2 bg-white">
      <div className="flex gap-2 mb-1">
        <Input placeholder="Field name" value={field.name} onChange={e => onNameChange(e.target.value)} />
        <FieldTypeSelect value={field.type} onChange={onTypeChange} />
        <Button variant="destructive" size="sm" onClick={onDelete}>Delete</Button>
      </div>
      {field.type === "nested" && (
        <div className="ml-4 pl-4">
          <div>{childrenFields}</div>
          <Button variant="secondary" size="sm" className="mt-2" onClick={onAddChild}>
            Add Nested Field
          </Button>

        </div>
      )}
    </div>
  );

  export default SchemaFieldComp;
