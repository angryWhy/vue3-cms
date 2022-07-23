export interface IFormItem {
    type: "input" | "password" | "date" | "select",
    label: string,
    rules: any[],
    placeHolder: any
}