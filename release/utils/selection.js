"use strict";
function selectRows(selected, row) {
    var selectedIndex = selected.indexOf(row);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
exports.selectRows = selectRows;
function selectRowsBetween(selected, rows, index, prevIndex) {
    var reverse = index < prevIndex;
    for (var i = 0, len = rows.length; i < len; i++) {
        var row = rows[i];
        var greater = i >= prevIndex && i <= index;
        var lesser = i <= prevIndex && i >= index;
        var range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: (prevIndex - index)
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            var idx = selected.indexOf(row);
            if (reverse && idx > -1) {
                selected.splice(idx, 1);
                continue;
            }
            if (i >= range.start && i < range.end) {
                if (idx === -1) {
                    selected.push(row);
                }
            }
        }
    }
    return selected;
}
exports.selectRowsBetween = selectRowsBetween;
//# sourceMappingURL=selection.js.map