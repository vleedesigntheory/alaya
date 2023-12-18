import { Registry } from "../index";
import { Formatter } from "./formatter";
import { Style } from "./style";

export class Store {
  constructor(domNode) {
    this.domNode = domNode;
    this.build();
  }
  build() {
    this.formatters = {};
    const dom = Registry.find(this.domNode);

    const formatters = Formatter.keys(this.domNode);
    const styles = Style.keys(this.domNode);
    formatters.concat(styles).forEach((name) => {
      const formatter = dom.query(name);
      if (formatter instanceof Formatter) {
        this.formatters[formatter.name] = formatter;
      }
    });
  }
}
