declare class DevRuntime {
    /**
     * @type {Record<string, { exports: any }>}
     */
    modules: Record<string, {
        exports: any;
    }>;
    /**
     * @param {string} _moduleId
     */
    createModuleHotContext(_moduleId: string): void;
    /**
     *
     * @param {string[]} _boundaries
     */
    applyUpdates(_boundaries: string[]): void;
    /**
     * @param {string} id
     * @param {{ exports: any }} module
     */
    registerModule(id: string, module: {
        exports: any;
    }): void;
    /**
     * @param {string} id
     */
    loadExports(id: string): any;
    /**
     * __esmMin
     *
     * @type {<T>(fn: any, res: T) => () => T}
     * @internal
     */
    createEsmInitializer: <T>(fn: any, res: T) => () => T;
    /**
     * __commonJSMin
     *
     * @type {<T extends { exports: any }>(cb: any, mod: { exports: any }) => () => T}
     * @internal
     */
    createCjsInitializer: <T extends {
        exports: any;
    }>(cb: any, mod: {
        exports: any;
    }) => () => T;
    /** @internal */
    __toESM: any;
    /** @internal */
    __toCommonJS: any;
    /** @internal */
    __export: any;
}
