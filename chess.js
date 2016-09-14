/**
 * Created by demon on 12.09.16.
 */

$(function () {
    var figures = [
        {
        row: 1,
        column: 0,
        color: "black",
        type: "pawn",
        text: "♟"
        },
    {
            row: 1,
            column: 1,
            color: "black",
            type: "pawn",
            text: "♟"
    },
    {
        row: 1,
        column: 2,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 1,
        column: 3,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 1,
        column: 4,
        color: "black",
        type: "pawn",
        text: "♟"
    }, 
    {
        row: 1,
        column: 5,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 1,
        column: 6,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 1,
        column: 7,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 0,
        column: 0,
        color: "black",
        type: "rook",
        text: "♜"
    },
    {
        row: 0,
        column: 1,
        color: "black",
        type: "horse",
        text: "♞"
    },
    {
        row: 0,
        column: 2,
        color: "black",
        type: "bishop",
        text: "♝"
    },
    {
        row: 0,
        column: 3,
        color: "black",
        type: "queen",
        text: "♛"
    },
    {
        row: 0,
        column: 4,
        color: "black",
        type: "king",
        text: "♚"
    },
    {
        row: 0,
        column: 5,
        color: "black",
        type: "bishop",
        text: "♝"
    },
    {
        row: 0,
        column: 6,
        color: "black",
        type: "horse",
        text: "♞"
    },
    {
        row: 0,
        column: 7,
        color: "black",
        type: "rook",
        text: "♜"
    },
    {
         row: 6,
         column: 0,
         color: "black",
         type: "pawn",
         text: "♟"
     },
    {
        row: 6,
        column: 1,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 6,
        column: 2,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 6,
        column: 3,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 6,
        column: 4,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 6,
        column: 5,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 6,
        column: 6,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 6,
        column: 7,
        color: "black",
        type: "pawn",
        text: "♟"
    },
    {
        row: 7,
        column: 0,
        color: "black",
        type: "rook",
        text: "♜"
    },
    {
        row: 7,
        column: 1,
        color: "black",
        type: "horse",
        text: "♞"
    },
    {
        row: 7,
        column: 2,
        color: "black",
        type: "bishop",
        text: "♝"
    },
    {
        row: 7,
        column: 3,
        color: "black",
        type: "queen",
        text: "♛"
    },
    {
        row: 7,
        column: 4,
        color: "black",
        type: "king",
        text: "♚"
    },
    {
        row: 7,
        column: 5,
        color: "black",
        type: "bishop",
        text: "♝"
    },
    {
        row: 7,
        column: 6,
        color: "black",
        type: "horse",
        text: "♞"
    },
    {
        row: 7,
        column: 7,
        color: "black",
        type: "rook",
        text: "♜"
    }
    ];

    var board = $("<table>");
    for (var i = 0; i < 8; i++) {
        var tr = $("<tr>");
        for (var j = 0; j < 8; j++) {
            var td = $("<td>");
            var f = _.find(figures, function (f) {
                return f.row == i && f.column == j;
            });
            if (f) {
                td.text(f.text);
            }
            tr.append(td);
        }
        board.append(tr);
    }
    $("#board").html(board);
});
