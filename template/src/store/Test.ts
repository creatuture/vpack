import BaseStore from './BaseStore';
import { observable, action } from 'mobx';

class Test extends BaseStore {

    @observable
    name = '';

    @action
    ownRequest() {
    }
}

const test = new Test();

export default test;
