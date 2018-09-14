import store from './app/store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestComponent from './app/components/TestComponent/TestComponent';
import { EXTRACT_ITEM_SUCCESSED } from './app/store/action';

const els = document.getElementsByClassName('item');
const items = [];
Array.prototype.forEach.call(els, el => {
  const props = {};
  for (var i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
    props[atts[i].nodeName] = atts[i].nodeValue;
  }
  items.push({ el, props });
});

function handleChange() {
  items.forEach(item => {
    if (item !== undefined && item.rendered !== true) {
      ReactDOM.render(<TestComponent {...item.props} />, item.el);
      item.rendered = true;
    }
  });
}
const unsubscribe = store.subscribe(handleChange);
store.dispatch({ type: EXTRACT_ITEM_SUCCESSED, data: items });
