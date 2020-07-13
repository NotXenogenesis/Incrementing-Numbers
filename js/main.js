"use strict";

const gameData = {
    number: new Decimal("1e-1000"),
    negativeExponent: true,
    numGen: 0,
    numGenCost: new Decimal("1e-1000"),
    numGenPower: new Decimal("1e-1000")
};

const number = new Vue({
    el: "#number",
    data: {
        mainNumber: gameData
    },
    computed: {
        product() {
            return `${this.mainNumber.number.mantissa.toFixed(2)}e${this.mainNumber.number.e}`;
        }
    }
});

function buyNumGen() {
    if (gameData.numGenCost.lte(gameData.number)) {
        gameData.numGen += 1;
        gameData.number = gameData.number.sub(gameData.numGenCost);
    }
}

function numberGenFunction() {
    gameData.number = gameData.number.add(gameData.numGenPower.mul(gameData.numGen).div(10));
}

const mainGameLoop = window.setInterval(numberGenFunction, 100);