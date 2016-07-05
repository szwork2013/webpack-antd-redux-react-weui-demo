import $ from 'jquery'
import { message } from 'antd';

export const F={
    AJAXF:function(url,method,body,success){
        //let param=new FormData();
        //param.append("json",JSON.stringify(data));
        let init={method:method,body:JSON.stringify(body)};
        fetch(url,init).then(response => checkStatus(response))
            .then((json) => {
                success(json);
            })
            .catch(e => console.log("Oops, error", e));
    },
    POST:function(url,body,success){
        //let param=new FormData();
        //param.append("json",JSON.stringify(data));
        let init={method:'POST',body:JSON.stringify(body)};
        fetch(url,init).then(response => checkStatus(response))
            .then((json) => {
                success(json);
            })
            .catch(e => console.log("Oops, error", e));
    },
    AJAXH:function(url,method,body,header,success){
        //let param=new FormData();
        //param.append("json",JSON.stringify(data));
        let init={method:method,body:JSON.stringify(body),headers:header};
        fetch(url,init).then(response => checkStatus(response))
            .then((json) => {
                success(json);
            })
            .catch(e => console.log("Oops, error", e));
    }
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}