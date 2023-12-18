export class Model {
    scroll = null;
    parent = null;
    prev = null;
    next = null;
    domNode = null;
    constructor() {

    }
    attach() {

    }
    clone() {

    }
    detach() {

    }
    offset(root) {

    }
    update(records, context) {

    }
    remove() {

    }
    deleteAt(index, length) {

    }
    formatAt(index, length, name, value) {

    }
    insertAt(index, value) {
        
    }
};

export class Registry {
    formatters = {};
    types = {};
    formatters = {};
    static find(node) {

    }
    query(query) {
        let match;
        if(typeof query === 'string') {
            match = this.types[query] || this.formatters[query];
        }
        return match;
    }
}


export * from './abstract/block';
export * from './abstract/embed';
export * from './abstract/inline';
export * from './abstract/text';