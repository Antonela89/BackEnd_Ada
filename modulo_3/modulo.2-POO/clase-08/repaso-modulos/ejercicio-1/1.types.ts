// =============================================================================
// ARCHIVO DE DEFINICIONES DE TIPOS Y CONTRATOS
// Este archivo centraliza las estructuras de datos básicas (enums)
// y los contratos (interfaces) que se usarán en toda la aplicación.
// =============================================================================

/**
 * @enum BookFormat
 * Define un conjunto de constantes nombradas para los formatos de Ebook.
 * Usar un enum previene errores de tipeo y limita las opciones a las válidas.
 */
export enum BookFormat {
    PDF = "PDF",
    EPUB = "EPUB",
    MOBI ="MOBI"
}

/**
 * @interface ILibraryItem
 * Define el "contrato" que cualquier ítem de la biblioteca debe cumplir.
 * Una interfaz no contiene lógica, solo especifica las propiedades y métodos
 * que una clase debe tener si decide implementarla.
 */
export interface ILibraryItem {
    title: string,
    author: string,
    isAvailable: boolean,
    checkout(): void,
    returnItem(): void
}