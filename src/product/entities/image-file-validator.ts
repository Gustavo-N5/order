import { FileValidator } from "@nestjs/common";
import { IFile } from "@nestjs/common/pipes/file/interfaces";

export class ImageFileValidator extends FileValidator{


    isValid(file?: IFile): boolean | Promise<boolean> {
       return (file.mimetype === this.validationOptions.mimetype && file.size < this.validationOptions.maxSize) 
    }
    buildErrorMessage(file: any): string {
        if (file.mimetype !== this.validationOptions.mimetype) {
            return "File must be "+ this.validationOptions.mimetype
        }
        if (file.maxSize !== this.validationOptions.maxSize) {
            return "File must be samaller tahn "+ this.validationOptions.maxSize
        }
    }
}