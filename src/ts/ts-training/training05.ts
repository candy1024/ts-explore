import ConvertStrToRecord from './training03';
import Combine from './training04';

/**
 * 运用递归 循环拆解合并类型
 * 分析一下：
 * Str 为需要处理的字符，Res为结果收集容器默认为{}
 * 首先 定义 Item 为每次拆解的一个键值对字符，如：‘a=1’，定义 Rest 为每次拆解后的剩余字符
 * 然后 根据三目运算 如果 Str extends... 成立（即字符中任然含有‘&’）则递归调用 Parse
 * 最后 当拆解到最后一步，此时字符只剩下‘c=3’，则三目运算 不成立，
 * 最后调用 Combine 完成最后一次拆解合并 => Combine<{a: '1'; b: '2'}, ConvertStrToRecord<'c=3'>>
 * 
 * 总结一下：
 * ConvertStrToRecord 的职责是拆解单个键值 x=n => {x: 'n'}
 * Combine 的职责是俩俩合并 A+B => {...A, ...B}
 * Parse 职责是作为判断的载体，引导每一步的执行操作
 * 
 * tips：
 * 最后一步 ConvertStrToRecord 的参数为 Str，可以理解为到最后一步Str已经不是一开始传入的那个值，Str在整个过程中具有动态改变的特性，
 * 同理可以看出 Result 也一样，
 * */ 

type Parse<Str extends string, Result extends Record<string, any> = {}> = 
    Str extends `${infer Item}&${infer Rest}`
    ? Parse<Rest, Combine<Result, ConvertStrToRecord<Item>>>
    : Combine<Result, ConvertStrToRecord<Str>>;


type str = 'a=1&b=2&c=3';

type res = Parse<str>; // type res = {a: "1"; b: "2"; c: "3";}