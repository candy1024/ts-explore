// 获取所有的可选项
type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
}

interface ComplexObject {
    mandatory: string;
    option1?: number;
    option2?: string;
}

let test: GetOptional<ComplexObject>; // {option1?: number; option2?: string;}