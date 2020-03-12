
export class VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {type: string, identifier: string}[];
    readingModes: {text: boolean, image: boolean};
    printType: string;
    averageRating: number;
    ratingsCount: number;
    matyrityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: {smallThumbnail: string, thumbnail: string};
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}