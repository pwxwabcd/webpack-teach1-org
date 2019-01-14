function component() {
  let element = document.createElement('div');

  //调用Lodash的join方法
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());