import ConvertStrToRecord from './training03';
import Combine from './training04';

// 运用递归
type Parse<Str extends string, Res extends Record<string, any> = {}> = 
    Str extends `${infer Key}&${infer Rest}`
    ? Parse<Rest, Combine<Res, ConvertStrToRecord<Key>>>
    : Combine<Res, ConvertStrToRecord<Str>>;


type str = 'a=1&b=2&c=3';

type res = Parse<str>; // type res = {a: "1"; b: "2"; c: "3";}