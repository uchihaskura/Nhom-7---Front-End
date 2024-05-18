export abstract class AbstractStorageAdapter {
    abstract setItem(key: string, value: any);
    abstract getItem(key: string, value: string);
    abstract removeItem(key: string);
    abstract clear();
}
