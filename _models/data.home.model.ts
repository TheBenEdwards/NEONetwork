export class HomeModel {
    textFields: string;

    constructor(data: any = {}) {
        this.textFields = data.textFields || [];
    }
}