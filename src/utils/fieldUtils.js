import { v4 as uuidv4 } from "uuid";
// create a  new field
export function createField(type = 'string') {
    return {
        id: uuidv4(),
        name: "",
        type,
        children: type === 'nested' ? [] : undefined,
    };
}
