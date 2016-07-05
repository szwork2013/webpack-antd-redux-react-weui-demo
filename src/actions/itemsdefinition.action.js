import {
    ADD_ROW,
    SAVE_ROW,
    EDIT_ROW,
    INSERT_ROW,
    GET_INIT_DATA,
    LOADING,
    ITEM_UOMS,
    CANCLE_ADD,
    CANCLE_EDIT,
    SAVE_TO_MEMRAY,
    SUBMIT_SEARCH,
} from '../constants/itemsdefinition.constants';

import {F} from '../util/fetch.util';

import {_PURL} from '../config/config';

export function itemsDefinitionAddRow(additem){
    return{
        type:ADD_ROW,
        additem:additem
    }
}
export function itemsDefinitionGetInitData(itemsdefinition){
    return{
        type:GET_INIT_DATA,
        itemsdefinition:itemsdefinition
    }
}
export function itemsDefinitionLoading(){
    return{
        type:LOADING
    }
}

export function itemsDefinitionGetItemUoms(itemuoms){
    return{
        type:ITEM_UOMS,
        itemuoms:itemuoms,
    }
}

export function itemsDefinitionInitData(dispatch,pagination,search){
        dispatch(itemsDefinitionLoading());
        console.log('----idl----',search);
        let body={...search,pagesize: pagination.pageSize,
            pageno: pagination.current};
    console.log('----idb----',body);
        F.POST(_PURL.itemlist,body,function(data){
            dispatch(itemsDefinitionGetInitData({...data,pagination:pagination}));
        });
}

export function itemsDefinitionGetAddID(dispatch,itemsdefinition){
    dispatch(itemsDefinitionLoading());
    let body={};
    F.POST(_PURL.getadditemid,body,function(data){
        dispatch(itemsDefinitionAddRow(data.data));
    });
}

export function itemsDefinitionGetUoms(dispatch){
    dispatch(itemsDefinitionLoading());
    let body={};
    F.POST(_PURL.getitemuons,body,function(data){
        dispatch(itemsDefinitionGetItemUoms(data.data));
    });
}

export function itemsDefinitionCancleAdd(){
    return{
        type:CANCLE_ADD
    }
}

export function itemsDefinitionEdit(index){
    return{
        type:EDIT_ROW,
        index:index,
    }
}

export function itemsDefinitionCancleEdit(index){
    return{
        type:CANCLE_EDIT,
        index:index
    }
}

export function itemsDefinitionInsertRow(dispatch,id,newrecord,search){
    dispatch(itemsDefinitionLoading());
    let body={...newrecord,item_id:id};
    F.POST(_PURL.insertitem,body,function(data){
        if(data.code==0){
            itemsDefinitionInitData(dispatch,{pageSize:10,current:1},search);
        }
    });
}
export function itemsDefinitionSaveRow(dispatch,id,newrecord,search){
    dispatch(itemsDefinitionLoading());
    let body={...newrecord,item_id:id};
    F.POST(_PURL.saveitem,body,function(data){
        if(data.code==0){
            itemsDefinitionInitData(dispatch,{pageSize:10,current:1},search);
        }
    });
}

export function itemsDefinitionSaveToMemary(newrecord){
    return {
        type:SAVE_TO_MEMRAY,
        newrecord:newrecord
    }

}

export function itemsDefinitionSubmitSearch(search){
    return{
        type:SUBMIT_SEARCH,
        search:search
    }
}
