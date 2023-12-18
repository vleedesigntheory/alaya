// 默认渲染器
export function render(node, container) {

}

export function createElement(node, container) {

}

export function unmount(node) {

}

export function mountElement(node, container) {

}

export function patch(n1, n2, container) {

}

// 输出创造函数，可根据options进行自定义渲染器渲染
export function createRenderer(options) {
    if(options.render) {
        if(typeof render == 'function') {
            return {render: options.render}
        } else {
            return { render }
        }
    } else {
        return {
            render
        }
    }
}