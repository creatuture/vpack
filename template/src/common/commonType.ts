import { Commit, Dispatch } from 'vuex';

/**
 * @description vuex Context类型定义
 */
export interface Context {
    dispatch: Dispatch;
    commit: Commit;
}

/**
 * @description key为number value为string的可索引类型
 */
export interface StringArray {
    [index: number]: string;
}

/**
 * @description key为string value为string的可索引类型
 */
export interface StringObject {
    [index: string]: string;
}
