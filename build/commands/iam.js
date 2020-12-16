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
Object.defineProperty(exports, "__esModule", { value: true });
var map = {
    'friend': 'Friend',
    'alumni': 'Alumni',
    'active': 'Active',
};
module.exports = {
    name: 'iam',
    description: "Assign a member a role",
    execute: function (message, args) {
        return __awaiter(this, void 0, void 0, function () {
            var roles, roleIDs, roleNames, cur_roles, holder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // make sure message is contained in onboarding
                        if (message.channel.name !== 'onboarding') {
                            message.reply('This command can only be used in #onboarding');
                            return [2 /*return*/];
                        }
                        // make sure message contains only one option
                        if (args.length === 0 || args.length > 1) {
                            message.reply('Please provide one of three options.\nfriend, active, or alumni');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, message.guild.roles.fetch()];
                    case 1:
                        roles = _a.sent();
                        roleIDs = [];
                        roleNames = [];
                        roles.cache.forEach(function (r, idx) {
                            roleNames.push(r.name);
                            roleIDs.push(idx);
                        });
                        cur_roles = message.member.roles.member._roles;
                        holder = false;
                        cur_roles.forEach(function (cr) {
                            var r = roles.cache.find(function (r) { return cr === r.id; }).name;
                            Object.keys(map).forEach(function (role) {
                                if (map[role] === r) {
                                    holder = true;
                                }
                            });
                        });
                        if (holder) {
                            message.reply("You already hold an automatic role. Message a moderator if it is incorrect.");
                            return [2 /*return*/];
                        }
                        // If valid role requested, assign role, else, return not valid
                        if (Object.keys(map).find(function (r) { return r === args[0].toLowerCase(); })) {
                            message.guild.roles.fetch().then(function (roles) {
                                var role = roles.cache.find(function (r) { return r.name === map[args[0].toLowerCase()]; });
                                message.member.roles.add(role);
                                message.reply("You have been assigned the role " + role.name + "!");
                            });
                        }
                        else {
                            message.reply(args[0] + " is not a valid role to be automatically assigned.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
};
