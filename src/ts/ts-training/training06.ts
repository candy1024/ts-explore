import { useRef } from 'react';
import { Form } from 'antd';

// 获取组件实例的属性、方法
// exmple: const fromRef = getCompRef(Form)

function getCompRef<T extends abstract new (...args: any) => any> (_comp: T) {
    return useRef<InstanceType<T>>()
}

// TODO: 这里的还需要完善