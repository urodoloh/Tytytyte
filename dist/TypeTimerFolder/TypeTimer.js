"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var UltraButton_1 = require("../TimerSwitch/UltraButton");
var TimezoneTimer_1 = require("./TimezoneTimer");
function TypeTimer() {
    var useTimer = function () {
        var timezones = ["Europe/Moscow", "Europe/Podgorica"];
        var _a = (0, react_1.useState)(timezones[0]), timezone = _a[0], setTimezone = _a[1];
        function toggleTimezone() {
            setTimezone(function (prevTimezone) { return prevTimezone[prevTimezone.length - 1]; });
            timezones.reverse();
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(TimezoneTimer_1.default, { timezone: timezone }),
            react_1.default.createElement(UltraButton_1.default, { onClick: toggleTimezone }, "Show another time")));
    };
}
exports.default = TypeTimer;
//# sourceMappingURL=TypeTimer.js.map