import {BREADCRUMBITEM_ITEMDEFINITIONS} from '../constants/breadcrumbitem.constants';
export function itemdefinitions(breadcrumbitem){
    return{
        type:BREADCRUMBITEM_ITEMDEFINITIONS,
        breadcrumbitem:breadcrumbitem
    }
}