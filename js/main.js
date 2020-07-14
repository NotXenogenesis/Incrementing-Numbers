"use strict";

const gameData = {
    number: new Decimal("1e-1000"),
    negativeExponent: true,
    numGen: new Decimal(0),
    numGenCost: new Decimal("1e-1000"),
    numGenPower: new Decimal("1e-1001")
};

const number = new Vue({
    el: "#number",
    data: {
        mainNumber: gameData
    },
    computed: {
        product() {
            return `${this.mainNumber.number.mantissa.toFixed(2)}e${this.mainNumber.number.e}`;
        },
        amountPower() {
            // eslint-disable-next-line max-len
            return `You have ${this.mainNumber.numGen} number generators generating ${this.mainNumber.numGen.mul(this.mainNumber.numGenPower).mantissa.toFixed(2)}e${this.mainNumber.numGen.mul(this.mainNumber.numGenPower).e} a second`;
        },
        cost() {
            // eslint-disable-next-line max-len
            return `Buy a Number Generator for ${this.mainNumber.numGenCost.mantissa.toFixed(2)}e${this.mainNumber.numGenCost.e}`;
        }
    }
});

function buyNumGen() {
    if (gameData.numGenCost.lte(gameData.number)) {
        gameData.numGen = gameData.numGen.add(1);
        gameData.number = gameData.number.sub(gameData.numGenCost);
        gameData.numGenCost = gameData.numGenCost.add("2.5e-1001");
    }
}

function numberGenFunction() {
    gameData.number = gameData.number.add(gameData.numGenPower.mul(gameData.numGen).div(10));
}

const mainGameLoop = window.setInterval(numberGenFunction, 100);