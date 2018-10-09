
export class Album {
    ref: string;
    name: string;
    title: string;
    description: string;
    duration: number;
    url?: string;
    like?: string;
    tags?: Array<string>;
    status? : string
}

export class List {
    ref: string | number;
    list: Array<string>;
}

export interface CallableAlbum {
    (a: Album, b: Album): number;
}



