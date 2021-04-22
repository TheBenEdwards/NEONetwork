export class HomeModel {
    textFields: string;
    createModalOpen: boolean;
    helpModalOpen: boolean;
    loading: boolean;
    links: any;
    updateLog: any;

    constructor(data: any = {}) {
        this.textFields = data.textFields || [];
        this.createModalOpen = data.createModalOpen || false;
        this.helpModalOpen = data.helpModalOpen || false;
        this.loading = data.loading || true;
        this.links = data.links || [];
        this.updateLog = data.updateLog || [];
    }
}