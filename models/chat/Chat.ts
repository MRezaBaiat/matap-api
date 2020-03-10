import {ChatType, ReceiveStatus, SendStatus} from '../Enums';

export default interface Chat{
    _id:string,
    sender: string,
    text: string,
    sendStatus: SendStatus,
    type: ChatType,
    date:Date,

    url: string,
    file_size:number,
}
