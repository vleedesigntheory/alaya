class Alaya {
  constructor(id, options = {}) {
    if(id == null) {
        console.error('Invalid Alaya Container')
        return;
    }
    this.options = expandConfig(id, options);
    this.container = document.getElementById(id);
    this.container.innerHTML = 'Hello Alaya!'
  }
}

function expandConfig(id, userConfig) {
  // 对userConfig进行过滤
  return {
    id: id,
    theme: userConfig.theme || 'default'
  };
}

export { Alaya as default };
