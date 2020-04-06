"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    id: { type: String, required: true },
    sender: { type: String, required: true },
    text: String,
    sendStatus: { type: String, required: true },
    type: { type: String, required: true },
    url: String,
    date: Number,
    file_size: Number,
    mediaInfo: {
        width: Number,
        height: Number,
        duration: Number,
        orientation: Number
    }
};
exports.default = dbModel;
