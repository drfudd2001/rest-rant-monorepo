"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Home_js_1 = require("./Home.js");
var PlaceIndex_1 = require("./places/PlaceIndex");
var PlaceDetails_1 = require("./places/PlaceDetails");
var Navigation_1 = require("./Navigation");
var Error404_1 = require("./Error404");
var NewPlaceForm_1 = require("./places/NewPlaceForm");
var EditPlaceForm_1 = require("./places/EditPlaceForm");
var SignUpForm_1 = require("./users/SignUpForm");
var LoginForm_1 = require("./users/LoginForm");
var CurrentUser_1 = require("./contexts/CurrentUser");
function App() {
    return ((0, jsx_runtime_1.jsx)(CurrentUser_1["default"], { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Navigation_1["default"], {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Switch, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/", component: Home_js_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/sign-up", component: SignUpForm_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/login", component: LoginForm_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/places", component: PlaceIndex_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/places/new", component: NewPlaceForm_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/places/:placeId", component: PlaceDetails_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { exact: true, path: "/places/:placeId/edit", component: EditPlaceForm_1["default"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", component: Error404_1["default"] })] })] }) }));
}
exports["default"] = App;
//# sourceMappingURL=App.js.map