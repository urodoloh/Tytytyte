"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var moment_timezone_1 = require("moment-timezone");
function TimezoneTimer(props) {
    function useTimezoneTimer(props) {
        var getCurrentTimezoneTime = function (props) {
            return (0, moment_timezone_1.default)().tz(props.timezone).format("HH:mm:ss z");
        };
        var _a = (0, react_1.useState)(getCurrentTimezoneTime(props)), currentTime = _a[0], setCurrentTime = _a[1];
        var _b = (0, react_1.useState)(undefined), timeInterval = _b[0], setTimeInterval = _b[1];
        (0, react_1.useEffect)(function () {
            setTimeInterval(setInterval(function () { return setCurrentTime(getCurrentTimezoneTime(props)); }, 1000));
            return clearInterval(timeInterval);
        });
        return (react_1.default.createElement("div", null, currentTime));
    }
}
exports.default = TimezoneTimer;
//# sourceMappingURL=TimezoneTimer.js.map