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
var CurrentUser_1 = require("../contexts/CurrentUser");
var NewCommentForm = function (_a) {
    var place = _a.place, onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)([]), authors = _b[0], setAuthors = _b[1];
    var _c = (0, react_1.useState)({
        content: "",
        stars: '3',
        rant: false,
        authorId: ""
    }), comment = _c[0], setComment = _c[1];
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, users;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, fetch("http://localhost:5000/users")];
                    case 1:
                        response = _b.sent();
                        return [4, response.json()];
                    case 2:
                        users = _b.sent();
                        setComment(__assign(__assign({}, comment), { authorId: (_a = users[0]) === null || _a === void 0 ? void 0 : _a.userId }));
                        setAuthors(users);
                        return [2];
                }
            });
        }); };
        fetchData();
    }, []);
    var authorOptions = authors.map(function (author) {
        return ((0, jsx_runtime_1.jsxs)("option", __assign({ value: author.userId }, { children: [author.firstName, " ", author.lastName] }), author.userId));
    });
    function handleSubmit(e) {
        var _a;
        e.preventDefault();
        onSubmit(comment);
        setComment({
            content: "",
            stars: '3',
            rant: false,
            authorId: (_a = authors[0]) === null || _a === void 0 ? void 0 : _a.userId
        });
    }
    var currentUser = (0, react_1.useContext)(CurrentUser_1.CurrentUser).currentUser;
    if (!currentUser) {
        return (0, jsx_runtime_1.jsx)("p", { children: "You must be logged in to leave a rant or rave." });
    }
    return ((0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "row" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group col-sm-12" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "content" }, { children: "Content" })), (0, jsx_runtime_1.jsx)("textarea", { required: true, value: comment.content, onChange: function (e) {
                                return setComment(__assign(__assign({}, comment), { content: e.target.value }));
                            }, className: "form-control", id: "content", name: "content" })] })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "row" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group col-sm-4" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "stars" }, { children: "Star Rating" })), (0, jsx_runtime_1.jsx)("input", { value: comment.stars, onChange: function (e) { return setComment(__assign(__assign({}, comment), { stars: e.target.value })); }, type: "range", step: "0.5", min: "1", max: "5", id: "stars", name: "stars", className: "form-control" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "form-group col-sm-4" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "rand" }, { children: "Rant" })), (0, jsx_runtime_1.jsx)("input", { checked: place.rant, onClick: function (e) { return setComment(__assign(__assign({}, comment), { rant: e.target.checked })); }, type: "checkbox", id: "rant", name: "rant", className: "form-control" })] }))] })), (0, jsx_runtime_1.jsx)("input", { className: "btn btn-primary", type: "submit", value: "Add Comment" })] })));
};
exports["default"] = NewCommentForm;
//# sourceMappingURL=NewCommentForm.js.map