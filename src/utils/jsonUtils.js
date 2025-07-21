export function buildJson(fields) {
    const result = {};
    fields.forEach(field => {
        if (!field.name)
            return;
        if (field.type === "nested") {
            result[field.name] = buildJson(field.children || []);
        }
        else {
            result[field.name] = field.type === "string"
                ? "string"
                : field.type === "number"
                    ? "number"
                    : null;
        }
    });
    return result;
}
