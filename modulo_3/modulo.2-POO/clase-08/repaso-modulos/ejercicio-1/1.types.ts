export enum BookFormat {
    PDF = "PDF",
    EPUB = "EPUB",
    MOBI ="MOBI"
}

export interface ILibraryItem {
    title: string,
    author: string,
    isAvailable: boolean,
    checkout(): void,
    returnItem(): void
}