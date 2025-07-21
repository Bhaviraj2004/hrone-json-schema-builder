import React from "react";
import { FieldType } from "@/types/schema";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

interface Props {
  value: FieldType;
  onChange: (type: FieldType) => void;
}

const FieldTypeSelect: React.FC<Props> = ({ value, onChange }) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select type" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="string">String</SelectItem>
      <SelectItem value="number">Number</SelectItem>
      <SelectItem value="nested">Nested</SelectItem>
    </SelectContent>
  </Select>
);

export default FieldTypeSelect;
