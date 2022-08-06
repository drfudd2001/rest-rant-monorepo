"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_1 = require("react-router");
function SignUpForm() {
    var history = (0, react_router_1.useHistory)();
    var _a = (0, react_1.useState)({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }), user = _a[0], setUser = _a[1];
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        return [4, fetch("http://localhost:5000/users/", {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(user)
                            })];
                    case 1:
                        _a.sent();
                        history.push("/");
                        return [2];
                }
            });
        });
    }
    return ((0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sign Up" }), (0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "row" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-6 form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "firstName" }, { children: "First Name" })), (0, jsx_runtime_1.jsx)("input", { required: true, value: user.firstName, onChange: function (e) { return setUser(__assign(__assign({}, user), { firstName: e.target.value })); }, className: "form-control", id: "firstName", name: "firstName" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-6 form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "lastName" }, { children: "Last Name" })), (0, jsx_runtime_1.jsx)("input", { required: true, value: user.lastName, onChange: function (e) { return setUser(__assign(__assign({}, user), { lastName: e.target.value })); }, className: "form-control", id: "lastName", name: "lastName" })] }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "row" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-6 form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "email" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("input", { type: "email", required: true, value: user.email, onChange: function (e) { return setUser(__assign(__assign({}, user), { email: e.target.value })); }, className: "form-control", id: "email", name: "email" })] })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-6 form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "firstName" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("input", { required: true, value: user.password, onChange: function (e) { return setUser(__assign(__assign({}, user), { password: e.target.value })); }, className: "form-control", id: "password", name: "password" })] })), (0, jsx_runtime_1.jsx)("input", { className: "btn btn-primary", type: "submit", value: "Sign Up" })] }))] }));
}
exports["default"] = SignUpForm;
//# sourceMappingURL=SignUpForm.js.map