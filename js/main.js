"use strict";

const gameData = {
    number: new Decimal("1e-500"),
    negativeExponent: true
};

const number = new Vue({
    el: "#number",
    data: {
            number: gameData.number
    },
    computed: {
        product() {
            return gameData.number;
        }
    }
});