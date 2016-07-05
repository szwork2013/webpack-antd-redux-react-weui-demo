//ajax
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error");
};

xhr.send();

//fetch
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(e) {
  console.log("Oops, error");
});

//es6
fetch(url).then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Oops, error", e));

//isomorphic-fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('//offline-news-api.herokuapp.com/stories')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });


//promies
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});

//下面是异步加载图片的例子。

function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}

// 写法一
var promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
var promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });


  //求婚demo
  // 男神的各项参数
var NanShen = {
    "身高": 180,
    "体重": 80,
    "年薪": "200K",
    request: function(obj) {
        // 成功与否随机决定
        // 执行成功的概率为80%
        if (Math.random() > 0.2) {
            obj.success();
        } else {
            obj.error();
        }
    }
};

var Request = function(name) {
    return new Promise(function(resolve, reject) {
        var failed = 0, request = function() {            
            NanShen.request({
                name: name,
                success: function() {
                    console.log(name + "攻略成功！");
                    failed = 0;
                    resolve();
                },
                error: function() {
                    if (failed == 0) {
                        console.log("第一次攻略" + name + "失败，重试一次！");
                        failed = 1;
                        // 重新攻略一次
                        request();                       
                    } else {
                        console.log("依然没有拿下" + name + "，求婚失败！");
                        reject();
                    }
                }
            });
        };
		
        request();
    });
};

Request("岳父")                                // 搞定岳父，然后...
.then(function() { return Request("大伯"); })  // 搞定大伯，然后...
.then(function() { return Request("大姑"); })  // 搞定大姑，然后...
.then(function() {                            // 长辈们全部KO后，攻略女神
    NanShen.request({
        name: "女神",
        success: function() {
            console.log("女神同意，求婚成功！");
        },
        error: function() {
            console.log("女神不同意，求婚失败！");
        }
    });
});