// 将已有 interface 的必选项转为可选项进行复用
// 解析：Omit是排除目标属性，Pick是提取目标属性，Partial是把属性集合全变为可选项

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>; // 简化后等价于 => {xx: type} & {xx?: type}

interface Article {
    user: string;
    dateTime: string;
    readCount: number;
}

type CreateArticleOptions = Optional<Article, 'dateTime' | 'readCount'>;

let test: CreateArticleOptions; // {user: string; dateTime?: string; readCount?: number; }
