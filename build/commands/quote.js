"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var get = require('node-fetch');
var getURL = 'https://script.google.com/macros/s/AKfycbwbXKUIzHxXVY-pjKlx4SaY9EE85JmnkhgPlc4Ho_5XU8Nk56yI/exec';
module.exports = {
    name: 'quote',
    description: "Get a quote from the \"database\".",
    execute: function (message, args) {
        return __awaiter(this, void 0, void 0, function () {
            var snark, snarksnip, response, respText, quoteArr, quote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        snark = ["I can't believe someone actually said this", "Who on earth would say a thing like this", "These are anonymous, not judgement-free", "And yet we __still__ let this person join", ":person_facepalming: This is a doozy", "Here, just take it", "You made me read this with my own ~~eyes~~ code"];
                        snarksnip = snark[Math.floor(Math.random() * snark.length)];
                        return [4 /*yield*/, get(getURL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        respText = _a.sent();
                        quoteArr = respText.split('`');
                        quote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
                        // check if first character is a comma
                        if (quote.charAt(0) === ',') {
                            quote = quote.substring(1, quote.length);
                        }
                        // check if last charact is a comma
                        if (quote.charAt(quote.length - 1) === ',') {
                            quote = quote.substring(0, quote.length - 1);
                        }
                        message.channel.send(snarksnip + ":\n> " + quote + "\n*These quotes are anonymized, and are in no way meant to be defamatory.*\nIf you'd like to add a quote, you can enter it here: <https://bit.ly/3gTJLl3>");
                        return [2 /*return*/];
                }
            });
        });
    }
};
