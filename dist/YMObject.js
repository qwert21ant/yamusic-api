export class YMObject {
    constructor(fields) {
        YMObject.requiredFields = fields;
    }
    isValid(obj) {
        return YMObject.requiredFields.every(field => obj.hasOwnProperty(field));
    }
}
