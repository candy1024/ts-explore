// 这里加 const 让普通对象转换了字面量的 type 类型，简而言之就是将普通对象转化为TS识别的键值映射
const routes = {
    home: '/',
    admin: '/admin',
    user: '/user'
} as const

// 不加 as const 下面的 step 1 结果为
// type Routes = {
//     home: string;
//     admin: string;
//     user: string;
// }

// 加上 as const 结果为
// type Routes = {
//     readonly home: "/";
//     readonly admin: "/admin";
//     readonly user: "/user";
// }

//step 1
type Routes = typeof routes
//step 2
type Keys = keyof typeof routes
// step 3
type Rvals = Routes[Keys]
//result => type Rvals = "/" | "/admin" | "/user"

// short => type Rvals = typeof routes[keyof typeof routes]