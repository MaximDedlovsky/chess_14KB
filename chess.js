/**
 * Created by demon on 12.09.16.
 */

$(function() {
    var figures = [{
        row: 1,
        column: 0,
        color: "black",
        type: "pawn",
        text: "♟"
    }, {
        row: 1,
        column: 1,
        color: "black",
        type: "pawn",
        text: "♟"
    }];

    var board = $("<table>");
    for(var i = 0; i < 8; i++) {
        var tr = $("<tr>");
        for(var j = 0; j < 8; j++) {
            var td = $("<td>");
            var f = _.find(figures, function(f) {
                return f.row == i && f.column == j;
            });
            if(f) {
                td.text(f.text);
            }
            tr.append(td);
        }
        board.append(tr);
    }
    $("#board").html(board);
});
