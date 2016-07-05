import * as bis from '../constants/breadcrumbitem.constants';
let menus={
    breadcrumbitem:[{title:'首页'},{title:'主页'},{title:'导航'}]
};
export default function breadcrumbitem(state=menus,action){
    switch (action.type){
        case bis.BREADCRUMBITEM_ITEMDEFINITIONS:
            return {...state,breadcrumbitem:action.breadcrumbitem};
        default:
            return state;
    }
}