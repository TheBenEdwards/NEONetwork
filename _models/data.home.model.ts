export class HomeModel {
    textFields: string;
    createModalOpen: boolean;
    loginModalOpen: boolean;
    loading: boolean;
    links: any;
    updateLog: any;

    constructor(data: any = {}) {
        this.textFields = data.textFields || [];
        this.createModalOpen = data.createModalOpen || false;
        this.loginModalOpen = data.loginModalOpen || false;
        this.loading = data.loading || true;
        this.links = data.links || [];
        this.updateLog = data.updateLog || [];
    }
}