export class PanelModel {
    animationInProgress: boolean;
    isOpen: boolean;
    animate: boolean;
    padding: boolean;
    border: boolean;
    data: any;

    constructor(data: any = {}) {
        this.animationInProgress = data.animationInProgress || false;
        this.isOpen = data.isOpen || false;
        this.animate = data.animate || false;
        this.padding = data.padding || false;
        this.border = data.border || false;
        this.data = data.data || [];
    }
}