﻿import { RequestInit } from 'node-fetch';
import Site from './structures/Site';
import SiteInfo from './structures/SiteInfo';
export interface SMap<V> {
    [key: string]: V;
}
export declare const sites: SMap<SiteInfo>;
export declare class BooruError extends Error {
    constructor(...args: any);
}
export declare const userAgent: string;
export declare function searchURI(site: Site, tags?: string[], limit?: number, page?: number): string;
export declare const defaultOptions: RequestInit;
