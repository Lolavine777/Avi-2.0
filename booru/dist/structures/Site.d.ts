﻿import SiteApi from './SiteApi';
import SiteInfo from './SiteInfo';
export default class Site {
    domain: string;
    type?: string;
    aliases: string[];
    nsfw: boolean;
    api: SiteApi;
    paginate: string;
    random: boolean | string;
    tagQuery?: string;
    insecure?: boolean;
    constructor(data: SiteInfo);
}
