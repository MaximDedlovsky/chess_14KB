/**
 * Created by demon on 12.09.16.
 */

$(function() {
    var board = $("<table>");
    for(var i = 0; i < 8; i++) {
        var tr = $("<tr>");
        for(var j = 0; j < 8; j++) {
            var td = $("<td>");
            tr.append(td);
        }
        board.append(tr);
    }
    $("#board").html(board);
});
