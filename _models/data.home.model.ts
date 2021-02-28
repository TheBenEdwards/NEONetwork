export class HomeModel {
    textFields: string;
    createModalOpen: boolean;
    loginModalOpen: boolean;

    constructor(data: any = {}) {
        this.textFields = data.textFields || [];
        this.createModalOpen = data.createModalOpen || false;
        this.loginModalOpen = data.loginModalOpen || false;
    }
}