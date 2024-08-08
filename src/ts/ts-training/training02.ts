type Props = {
    onClick: () => void,
    onDrag: () => void,
    news: string,
    className: string,
    class123: string,
}

// & 后面加的相当于是约束条件: {} 相当于通配符，模版字符串相当于正则表达式

type t1 = keyof Props & {} // => type t1 = "onClick" | "onDrag" | "news" | "class"

type t2 = keyof Props & `on${string}` // => type t2 = "onClick" | "onDrag"

type t3 = keyof Props & `${string}N${string}` // => type t3 = "className"

type t4 = keyof Props & `${string}ss${number}` // => type t4 = "class123"