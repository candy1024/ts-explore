// 获取 当前对象上的属性、方法 提示
function getProps<T extends object, K extends keyof T>(obj: T, name: K): T[K] {
    return obj[name];
}

// usecase
const myObj = {
    name: 'string',
    fn: (): void => {}
}

const fn = getProps(myObj, 'fn');