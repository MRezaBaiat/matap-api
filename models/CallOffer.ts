interface CallOffer{
    id: string,
    host: string,
    type: 'video/audio' | 'audio',
    state: 'initiating' | 'transmitting' | 'ended',
    initiateDate: number,
    iceServers:{username: string,credential:string,urls:string[]}[]
    initiator: {id: string},
    receiver: {id: string},
    mediaConstraints:{},
    forceSpeaker: boolean
}

export default CallOffer;
