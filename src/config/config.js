export const _URL= {
    serverUrl : "http://127.0.0.1:8080/act",
    localhost : "http://localhost:3000"
}
export const _PURL={
    userinfo:_URL.serverUrl+"/user/info",
    tasklist:_URL.serverUrl+"/flow/tasklist",
    itemlist:_URL.localhost+"/table/post",
    getadditemid:_URL.localhost+"/table/additemid",
    getitemuons:_URL.localhost+"/table/getuom",
    insertitem:_URL.localhost+"/table/insertitem",
    saveitem:_URL.localhost+"/table/saveitem"
}