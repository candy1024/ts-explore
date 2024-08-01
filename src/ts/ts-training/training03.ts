/**
 * 分析一下：
 * 可以把整个表达式看作一个js函数，<>里面的相当于函数的参数，=后面的部分为函数的主体逻辑，
 * 关键字 extends 作用为约束条件，模版字符串布相当于一个正则表达式，
 * 关键字 infer 相当于声明一个变量名
 * 
 * 等价于下面的函数（仅作参考）
 * 
 * function ConvertStrToRecord(str: string) {
 *    const regExp = /^[a-z]+=[0-9]+&/;
 *    const [Key, Value] = str.split('=');
 * 
 *    return regExp.test(str) ? {[Key]: Value} : null;
 *  }
 **/

type ConvertStrToRecord<str extends string> = 
    str extends `${infer Key}=${infer Value}` ? {[K in Key]: Value} : never;

type str = 'key=123'

type res = ConvertStrToRecord<str> // type res = { key: "123"; }


export default ConvertStrToRecord;