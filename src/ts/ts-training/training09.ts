// 函数重载
// function template
interface ShowMessage {
    (option: object): void;
    (text: string, onClose?: Function): void;
    (text: string, mode: string, duration?: number): void;
    (text: string, duration?: number, onClose?: Function): void;
}

// usecase
interface Utils {
    showMessage: ShowMessage;
}

const utils: Utils = {
    showMessage(
        param1: string | object,
        param2?: string | number | Function,
        param3?: number | Function,
    ) {
        // Specific Logic ...
    }
}

// 在调用业务代码时，就会加载上面的函数模版来推断传参
utils.showMessage('123', )