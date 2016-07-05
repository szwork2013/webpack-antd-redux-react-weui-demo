import {
    GET_INIT_DATA,
    LOADING,
    ADD_ROW,
    ITEM_UOMS,
    CANCLE_ADD,
    CANCLE_EDIT,
    EDIT_ROW,
    INSERT_ROW,
    SAVE_TO_MEMRAY,
    SUBMIT_SEARCH
} from '../constants/itemsdefinition.constants'
let initstate={
        data:[],
        loading:true,
        pagination:{
            defaultPageSize:10,
            defaultCurrent:1,
            total:0,
            pageSize:10,
            current:1,
        },
        newrecord:{
            enabled_flag:"Y",
            enable:false,
            item_code:0,
            item_id:9999999999,
            item_name:"a",
            item_uom:0,
            specifications:""
        },
        searchmemaray:{}
};
export default function itemsdefinition(state=initstate,action){
    switch (action.type){
        case GET_INIT_DATA:
            let pager=state.pagination;
            pager={
                ...pager,
                total:action.itemsdefinition.count,
                pageSize:action.itemsdefinition.pagination.pageSize,
                current:action.itemsdefinition.pagination.current,
            };
            return {
                ...state,
                ...action.itemsdefinition,
                pagination:pager,
                loading:false,
                addbutton:false,
                newrecord:initstate.newrecord
            };
        case LOADING:
            return {...state,loading:true};
        case ADD_ROW:
            let data0=state.data;
            data0.splice(0,0,{
                    ...action.additem,isadd:true
                })
            return {
                ...state,
                data:data0,
                pagination:false,
                addbutton:true,
                loading:false,
                pagermemary:state.pagination,
            };
        case ITEM_UOMS:
            let itemuomsMap=new Map();
            action.itemuoms.forEach(function(itemuom){
                itemuomsMap.set(itemuom.item_uom,itemuom.item_uom_name);
            });
            return {...state,itemuoms:itemuomsMap};
        case CANCLE_ADD:
            let data1=state.data;
            data1.splice(0,1);
            return {
                ...state,
                data:data1,
                pagination:state.pagermemary,
                addbutton:false,
                loading:false,
                newrecord:initstate.newrecord
            };
        case EDIT_ROW:
            state.data[action.index]={...state.data[action.index],isedit:true};
            return {
                ...state,
                pagination:false,
                addbutton:true,
                pagermemary:state.pagination
            }
        case CANCLE_EDIT:
            state.data[action.index]={...state.data[action.index],isedit:false};
            return {
                ...state,
                pagination:state.pagermemary,
                addbutton:false,
                newrecord:initstate.newrecord,
            }
        case SAVE_TO_MEMRAY:
            let record=action.newrecord;
            switch (record.key) {
                case "item_code":
                    state.newrecord={...state.newrecord,item_code:record.val,enable:true};
                    break;
                case "enabled_flag":
                    state.newrecord={...state.newrecord,enabled_flag:record.val,enable:true};
                    break;
                case "item_name":
                    state.newrecord={...state.newrecord,item_name:record.val,enable:true};
                    break;
                case "item_uom":
                    state.newrecord={...state.newrecord,item_uom:record.val,enable:true};
                    break;
                case "item_id":
                    state.newrecord={...state.newrecord,item_id:record.val,enable:true};
                    break;
                case "specifications":
                    state.newrecord={...state.newrecord,specifications:record.val,enable:true};
                    break;
                default:
                    state.newrecord;
                    break;
            }
            return {
                ...state
            };
        case SUBMIT_SEARCH:
            return{
                ...state,
                searchmemaray:action.search
            }
        default:
            return state;
    }
}
