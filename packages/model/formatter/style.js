export class Style {
    static keys(node) {
        return Array.from(node.formatters).map(m => m.name);
    }

    constructor(name, key, options={}) {
        this.name = name;
        this.key = key;
        this.options = options;
    }

    add(node, value) {
        if(!this.canAdd(node, value)) return false;
        node.setAttribute(this.name, value);
    }

    canAdd(node, value) {
        // todo 做是否添加判断
        return true;
    }

    remove(node) {
        node.removeAttribute(this.name);
    }
}