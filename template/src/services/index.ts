import axios, { AxiosInstance } from 'axios';
import config from './config';

const service = axios.create(config);

service.defaults.withCredentials = true;

export interface AnyFunc extends AxiosInstance {
    (data: any): Promise<any>;
}

export interface RequestType {
    path: string;
    method: string;
    params: any;
}

const request = (data: RequestType): Promise<any> => {
    const { path, method, params } = data;
    let payload: any = { url: path, method };
    payload = method === 'post' ? { ...payload, data: params } : { ...payload, params };
    return (service as AnyFunc)(payload);
};

export default request;
