export type RequestResponse<T, RT, ET> = {
    loading: boolean;
    errors?: ET;
    response?: RT;
    request: (req: T) => Promise<void>;
};

export type RequestHook<T, RT, ET> = () => RequestResponse<T, RT, ET>;
