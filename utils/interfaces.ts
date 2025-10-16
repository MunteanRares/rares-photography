import type { LargeNumberLike } from "crypto";

export interface Album {
    id: number;
    number: string;
    firstTitle: string;
    secondTitle: string;
    description: string;
    thumbnailUrl: string;
}

export interface Photo {
    cameraModel: string;
    iso: string;
    exposureTime: string;
    fNumber: string;
    focalLength: string;
    dateTaken: string;
    thumbnailUrl: string;
}
