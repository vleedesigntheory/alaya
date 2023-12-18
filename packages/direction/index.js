import { Model } from '../model'

export class Direction {
    directives = {};
    constructor() {
        this.model = new Model();
    }
    bind(key, fn) {
        this.directives[key] = fn;
    }
    call(key) {
        const ctx = this;
        this.directives[key].call(ctx);
    }
}

export * from './align';

