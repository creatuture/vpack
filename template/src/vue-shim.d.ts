declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'qs' {
    const qs: any;
    export default qs;
}

declare module 'bfui' {
    const bfui: any;
    export const Message: (data: any) => void;
    export default bfui;
}
