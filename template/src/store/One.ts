import { observable, action } from 'mobx';

class One {
    @observable
    age = 1;

    getAge() {
        return this.age;
    }
    @action
    changeAge() {
        console.log('change');
        this.age++;
    }

}

const one = new One();
export default one;
