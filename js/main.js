"use strict";

const gameData = {
    number: new Decimal("1e-1e500"),
    negativeExponent: true
};

const number = new Vue({
    el: "#number",
    data: {
        mainNumber: gameData
    },
});