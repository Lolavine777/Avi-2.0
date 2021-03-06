﻿import SiteApi from './SiteApi';
export default interface SiteInfo {
    domain: string;
    type: string;
    aliases: string[];
    nsfw: boolean;
    api: SiteApi;
    paginate?: string;
    random: boolean | string;
    tagQuery?: string;
    insecure?: boolean;
}
