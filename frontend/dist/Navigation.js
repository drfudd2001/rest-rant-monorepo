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
var react_router_1 = require("react-router");
var CurrentUser_1 = require("./contexts/CurrentUser");
function Navigation() {
    var history = (0, react_router_1.useHistory)();
    var currentUser = (0, react_1.useContext)(CurrentUser_1.CurrentUser).currentUser;
    var handleLogOut = function () {
        localStorage.removeItem("token");
        history.push('/');
        history.go(0);
    };
    var loginActions = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("li", __assign({ style: { float: "right" } }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function () { return history.push("/sign-up"); } }, { children: "Sign Up" })) })), (0, jsx_runtime_1.jsx)("li", __assign({ style: { float: "right" } }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function () { return history.push("/login"); } }, { children: "Login" })) }))] }));
    var addPlaceButton = null;
    if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === "admin") {
        addPlaceButton = ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function () { return history.push("/places/new"); } }, { children: "Add Place" })) }));
    }
    if (currentUser) {
        loginActions = ((0, jsx_runtime_1.jsxs)("li", __assign({ style: { float: "right" } }, { children: ["Logged in as ", currentUser.firstName, " ", currentUser.lastName, (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function (e) { return handleLogOut(); } }, { children: "Log Out" }))] })));
    }
    return ((0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function () { return history.push("/"); } }, { children: "Home" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", onClick: function () { return history.push("/places"); } }, { children: "Places" })) }), addPlaceButton, loginActions] }) }));
}
exports["default"] = Navigation;
//# sourceMappingURL=Navigation.js.map