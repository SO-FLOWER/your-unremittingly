/*
 * @Author: 获取url参数
 * @Date: 2021-11-21 12:40:37
 * @LastEditors: your name
 * @LastEditTime: 2021-11-21 13:50:29
 * @Description: 根据路径获取相应的路径参数(进行函数方法的封装)
 */


/**
 * @description: 'http://www.whycode.com?key=1&key=2&key=3&test=4#hehe'
 * @param {*} params
 * @return {*}  [1,2,3]
 */
const url = 'http://www.whycode.com?key=1&key=2&key=3&test=4#hehe';

function getUrlPamas(sUrl) {
  var left = sUrl.indexOf("?") + 1;
  var right = sUrl.lastIndexOf('#');
  var parasString = sUrl.slice(left, right);       //截取key=1&key=2&key=3&test=4
  var paras = parasString.split('&');         //将其转化成数组进行展示[ 'key=1', 'key=2', 'key=3', 'test=4' ]
  var parajson = [];
  paras.forEach((value) => {
    var a = value.split('=');  // [ 'key', '1' ][ 'key', '2' ]
    // parajson[a[0]] !== undefined ? parajson[a[0]] = [].concat(parajson[a[0]], a[1]) : parajson[a[0]] = a[1];
    if (a[0] === 'key' && a.length !== 0) {
      parajson.push(parseInt(a[1]));
    }
  })
  // let result = arguments[1] !== void 0 ? (parajson[arguments[1]] || '') : parajson;

  return parajson;
}

