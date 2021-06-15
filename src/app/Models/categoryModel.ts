import { SubCategoryModel } from "./subCategoryModel";

export interface CategoryModel {
    _id: string;
    name: string;
    photo: string;
    subcategories:SubCategoryModel[];
}