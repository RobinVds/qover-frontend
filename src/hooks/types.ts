export type RequestResponse<T, RT> = {
    loading: boolean;
    errors?: any;
    response?: RT;
    request: (req: T) => Promise<void>;
};

export type RequestHook<T, RT> = () => RequestResponse<T, RT>;