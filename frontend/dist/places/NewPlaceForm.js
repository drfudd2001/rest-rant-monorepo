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
function NewPlaceForm() {
    var history = (0, react_router_1.useHistory)();
    var _a = (0, react_1.useState)({
        name: '',
        pic: '',
        city: '',
        state: '',
        cuisines: '',
        founded: ''
    }), place = _a[0], setPlace = _a[1];
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        return [4, fetch("http://localhost:5000/places", {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(place)
                            })];
                    case 1:
                        _a.sent();
                        history.push('/places');
                        return [2];
                }
            });
        });
    }
    return ((0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Add a New Place" }), (0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "name" }, { children: "Place Name" })), (0, jsx_runtime_1.jsx)("input", { required: true, value: place.name, onChange: function (e) { return setPlace(__assign(__assign({}, place), { name: e.target.value })); }, className: "form-control", id: "name", name: "name" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "founded" }, { children: "Year Founded" })), (0, jsx_runtime_1.jsx)("input", { required: true, value: place.founded, onChange: function (e) { return setPlace(__assign(__assign({}, place), { founded: e.target.value })); }, className: "form-control", id: "founded", name: "founded" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "pic" }, { children: "Place Picture" })), (0, jsx_runtime_1.jsx)("input", { value: place.pic, onChange: function (e) { return setPlace(__assign(__assign({}, place), { pic: e.target.value })); }, className: "form-control", id: "pic", name: "pic" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "city" }, { children: "City" })), (0, jsx_runtime_1.jsx)("input", { value: place.city, onChange: function (e) { return setPlace(__assign(__assign({}, place), { city: e.target.value })); }, className: "form-control", id: "city", name: "city" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "state" }, { children: "State" })), (0, jsx_runtime_1.jsx)("input", { value: place.state, onChange: function (e) { return setPlace(__assign(__assign({}, place), { state: e.target.value })); }, className: "form-control", id: "state", name: "state" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "cuisines" }, { children: "Cuisines" })), (0, jsx_runtime_1.jsx)("input", { value: place.cuisines, onChange: function (e) { return setPlace(__assign(__assign({}, place), { cuisines: e.target.value })); }, className: "form-control", id: "cuisines", name: "cuisines", required: true })] })), (0, jsx_runtime_1.jsx)("input", { className: "btn btn-primary", type: "submit", value: "Add Place" })] }))] }));
}
exports["default"] = NewPlaceForm;
//# sourceMappingURL=NewPlaceForm.js.map