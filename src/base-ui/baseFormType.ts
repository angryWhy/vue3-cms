export interface IFormItem {
    field: String,
    type: "input" | "password" | "date" | "select",
    label: string,
    rules: any[],
    placeHolder: any,
    options?: any[],
    otherOptions?: any
}