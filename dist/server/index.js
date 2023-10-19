"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Serve static files from the client/dist directory
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../dist/client')));
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
