import request from '../services';

class BaseStore {
    protected readonly api = request;
}

export default BaseStore;
