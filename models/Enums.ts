export enum UserType {
   PATIENT = 'PATIENT',
   DOCTOR = 'DOCTOR'
}

export enum DeliveryStatus {
   FAILED = 'FAILED',
   SENDING = 'SENDING',
   SENT = 'SENT',
   DELIVERED = 'DELIVERED',
   READEN = 'READEN'
}

export enum IOStatus{
   FAILED = -1,
   WAITING_FOR_QUEUE = 0,
   DOWNLOADING = 1,
   UPLOADING = 2,
   DONE = 3
}

export enum EventType {
   REQUEST_VISIT = 'REQUEST_VISIT',
   REQUEST_END_VISIT = 'REQUEST_END_VISIT',
   CANCEL_VISIT_REQUEST = 'CANCEL_VISIT_REQUEST',
   DOCTOR_NOT_FOUND = 'DOCTOR_NOT_FOUND',
   DOCTOR_UNAVAILABLE = 'DOCTOR_UNAVAILABLE',
   VISIT_REQUEST_TIMEDOUT = 'VISIT_REQUEST_TIMEDOUT',
   VISIT_REQUEST_ACCEPTED = 'VISIT_REQUEST_ACCEPTED',
   VISIT_REQUEST_DECLINED = 'VISIT_REQUEST_DECLINED',
   VISIT_REQUEST_INQUEUE = 'VISIT_REQUEST_INQUEUE',
   VISIT_STARTED = 'VISIT_STARTED',
   VISIT_ENDED = 'VISIT_ENDED',
   ROOM_NOT_FOUND = 'ROOM_NOT_FOUND',
   EVENT_STATUS_UPDATE = 'EVENT_STATUS_UPDATE',
   EVENT_SET_AVAILABLE = 'EVENT_SET_AVAILABLE'
}

export enum ChatType {
   TEXT= 'TEXT',
   IMAGE = 'IMAGE',
   VIDEO = 'VIDEO',
   MUSIC = 'MUSIC',
   UNKNOWN = 'UNKNOWN',
   GIF = 'GIF',
   PDF = 'PDF'
}
