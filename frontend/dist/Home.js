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
function Home() {
    return ((0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "HOME" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { height: "300", width: "500", src: "http://localhost:5000/images/chia-fruit-drink.jpg", alt: "Chia Fruit Shake" }), (0, jsx_runtime_1.jsxs)("div", { children: ["Photo by ", (0, jsx_runtime_1.jsx)("a", __assign({ href: "AUTHOR_LINK" }, { children: "Brenda Godinez" })), " on ", (0, jsx_runtime_1.jsx)("a", __assign({ href: "UNSPLASH_LINK" }, { children: "Unsplash" }))] })] }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "/places" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn-primary" }, { children: "Places Page" })) }))] }));
}
exports["default"] = Home;
//# sourceMappingURL=Home.js.map