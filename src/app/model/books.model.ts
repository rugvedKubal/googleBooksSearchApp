import { VolumeInfo } from './volumeInfo.model';
import { SaleInfo } from './saleInfo.model';
import { AccessInfo } from './accessInfo.model';

export class Books {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: {textSnippet: string};
}