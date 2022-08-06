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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CurrentUser_1 = require("../contexts/CurrentUser");
var CommentCard = function (_a) {
    var comment = _a.comment, onDelete = _a.onDelete;
    var currentUser = (0, react_1.useContext)(CurrentUser_1.CurrentUser).currentUser;
    var deleteButton = null;
    if (currentUser && currentUser.userId === comment.authorId) {
        deleteButton = ((0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-danger", onClick: function () { return onDelete(); } }, { children: "Delete Comment" })));
    }
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "border col-sm-4" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "rant" }, { children: comment.rant ? "Rant!" : "Rave!" })), (0, jsx_runtime_1.jsx)("h3", { children: (0, jsx_runtime_1.jsxs)("strong", { children: ["- ", comment.author.firstName, " ", comment.author.lastName] }) }), (0, jsx_runtime_1.jsxs)("h4", { children: ["Rating: ", comment.stars] }), deleteButton] })));
};
exports["default"] = CommentCard;
//# sourceMappingURL=CommentCard.js.map