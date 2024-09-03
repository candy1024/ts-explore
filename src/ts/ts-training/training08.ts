// infer 用于类型推断，以下写一些用例

// example 1
/** 
 * type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
 * 这是 ts 官方实现的方法，可以参考一下
 */ 

/**
 * 解释：
 *     T 为传入的泛型指代，extends 紧跟 T 的约束条件；
 *     (...args: any[]) => infer R 该表达式约等于 Function，但是我们的目的是为了推断函数的返回值，故写出具体的函数体；
 *     R 为函数返回值指代，加上 infer 就表示需要进行型推断；
 *     整个表达式的作用就是，当传入的泛型 T 为带返回值的函数表达式，则推断出返回类型，否则原样返回该泛型。
 *Tips:
 *     需要推导哪里，infer 就放在那
 * */ 
type MyReturn<T> = T extends (...args: any[]) => infer R ? R : T;

type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];
// usecase
let sumRes: ReturnType<sum>; // number
let concatRes: MyReturn<concat>; // any[]

// example 2 promise返回值推断
type PromiseType<T> = T extends Promise<infer K> ? K : T;
// usecase
type pType1 = PromiseType<Promise<string>>; // string

// example 3 promise递归推断
type PromiseRecu<T> = T extends Promise<infer K> ? PromiseRecu<K> : T;
// usecase
type pType2 = PromiseRecu<Promise<Promise<number>>>; // number

// example 4 推导函数第一个参数的类型
type FirstArgs<T> = T extends (first: infer F, ...args: any[]) => any ? F : T;
// usecase
type fb = FirstArgs<(a: boolean, b: string, c: number) => void>; // boolean
type funknown = FirstArgs<() => void>; // unknown 无参数
type fnull = FirstArgs<null>; // null 非函数

// example 5 推导数组内元素的类型
type ArrayType<T> = T extends (infer I)[] ? I : T; // (infer I)[] 等效于 Array<infer I>
// usecase
type itemType1 = ArrayType<[string, number, boolean]>; // string | number | boolean
type itemType2 = ArrayType<string[]>; // string
