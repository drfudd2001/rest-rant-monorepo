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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_1 = require("react-router");
var CommentCard_1 = require("./CommentCard");
var NewCommentForm_1 = require("./NewCommentForm");
var CurrentUser_1 = require("../contexts/CurrentUser");
function PlaceDetails() {
    var _this = this;
    var placeId = (0, react_router_1.useParams)().placeId;
    var history = (0, react_router_1.useHistory)();
    var _a = (0, react_1.useState)(null), place = _a[0], setPlace = _a[1];
    var currentUser = (0, react_1.useContext)(CurrentUser_1.CurrentUser).currentUser;
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch("http://localhost:5000/places/".concat(placeId))];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        resData = _a.sent();
                        setPlace(resData);
                        return [2];
                }
            });
        }); };
        fetchData();
    }, [placeId]);
    if (place === null) {
        return (0, jsx_runtime_1.jsx)("h1", { children: "Loading" });
    }
    function editPlace() {
        history.push("/places/".concat(place.placeId, "/edit"));
    }
    function deletePlace() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch("http://localhost:5000/places/".concat(place.placeId), {
                            method: "DELETE"
                        })];
                    case 1:
                        _a.sent();
                        history.push("/places");
                        return [2];
                }
            });
        });
    }
    function deleteComment(deletedComment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch("http://localhost:5000/places/".concat(place.placeId, "/comments/").concat(deletedComment.commentId), {
                            method: "DELETE"
                        })];
                    case 1:
                        _a.sent();
                        setPlace(__assign(__assign({}, place), { comments: place.comments.filter(function (comment) { return comment.commentId !== deletedComment.commentId; }) }));
                        return [2];
                }
            });
        });
    }
    function createComment(commentAttributes) {
        return __awaiter(this, void 0, void 0, function () {
            var response, comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch("http://localhost:5000/places/".concat(place.placeId, "/comments"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(localStorage.getItem("token"))
                            },
                            body: JSON.stringify(commentAttributes)
                        })];
                    case 1:
                        response = _a.sent();
                        return [4, response.json()];
                    case 2:
                        comment = _a.sent();
                        setPlace(__assign(__assign({}, place), { comments: __spreadArray(__spreadArray([], place.comments, true), [comment], false) }));
                        return [2];
                }
            });
        });
    }
    var comments = (0, jsx_runtime_1.jsx)("h3", __assign({ className: "inactive" }, { children: "No comments yet!" }));
    var rating = (0, jsx_runtime_1.jsx)("h3", __assign({ className: "inactive" }, { children: "Not yet rated" }));
    if (place.comments.length) {
        var sumRatings = place.comments.reduce(function (tot, c) {
            return tot + c.stars;
        }, 0);
        var averageRating = Math.round(sumRatings / place.comments.length);
        var stars = "";
        for (var i = 0; i < averageRating; i++) {
            stars += "⭐️";
        }
        rating = (0, jsx_runtime_1.jsxs)("h3", { children: [stars, " stars"] });
        comments = place.comments.map(function (comment) {
            return ((0, jsx_runtime_1.jsx)(CommentCard_1["default"], { comment: comment, onDelete: function () { return deleteComment(comment); } }, comment.commentId));
        });
    }
    var placeActions = null;
    if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === "admin") {
        placeActions = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("a", __assign({ className: "btn btn-warning", onClick: editPlace }, { children: "Edit" })), " ", (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit", className: "btn btn-danger", onClick: deletePlace }, { children: "Delete" }))] }));
    }
    return ((0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "row" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-6" }, { children: [(0, jsx_runtime_1.jsx)("img", { style: { maxWidth: 200 }, src: place.pic, alt: place.name }), (0, jsx_runtime_1.jsxs)("h3", { children: ["Located in ", place.city, ", ", place.state] })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "col-sm-6" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: place.name }), (0, jsx_runtime_1.jsx)("h2", { children: "Rating" }), rating, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("h2", { children: "Description" }), (0, jsx_runtime_1.jsxs)("h3", { children: [place.name, " has been serving ", place.city, ", ", place.state, " since", " ", place.founded, "."] }), (0, jsx_runtime_1.jsxs)("h4", { children: ["Serving ", place.cuisines, "."] }), (0, jsx_runtime_1.jsx)("br", {}), placeActions] }))] })), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h2", { children: "Comments" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "row" }, { children: comments })), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h2", { children: "Got Your Own Rant or Rave?" }), (0, jsx_runtime_1.jsx)(NewCommentForm_1["default"], { place: place, onSubmit: createComment })] }));
}
exports["default"] = PlaceDetails;
//# sourceMappingURL=PlaceDetails.js.map