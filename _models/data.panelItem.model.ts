import moment from 'moment'

export class PanelItemModel {
    type: string;
    name: string;
    date: string;
    text: string;
    href: string;

    constructor(data: any = {}) {
        this.type = data.type;
        this.name = data.name;
        this.date = data.date ? moment(data.date).format('MMMM Do YYYY') : '';
        this.text = data.text;
        this.href = data.href;
    }
}