import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hellow', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());