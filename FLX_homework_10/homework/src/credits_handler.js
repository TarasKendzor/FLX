'use strict';
function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        usersOperationTime = new Date().toLocaleString('en-GB');
    const tax = 0.005,
        balanceError = 'not enough',
        limitError = 'overlimit';
  
    function logInfo(operationType, credits, operationTime) {
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        });
    }
    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        },
  
        putCredits(amount) {
            balance += amount;
  
            logInfo(`Recieved credits`, amount, usersOperationTime);
        },
        takeCredits(amount) {
            if (amount > balance) {
                if (amount > transactionLimit) {
                    console.error(`Can't take credits, ${balanceError} and ${limitError}.`);
                } else {
                    console.error(`Can't take credits, ${balanceError}.`);
                }
            } else if (amount > transactionLimit) {
                console.error(`Can't take credits, ${limitError}.`);
            } else {
                balance -= amount;
  
                logInfo(`Withdrawal of credits`, amount, usersOperationTime);
            }
        },
        setTransactionLimit(amount) {
            transactionLimit = amount;
  
            logInfo(`Transaction limit changed`, amount, usersOperationTime);
        },
        transferCredits(amount, destinationCard) {
            const amountWithTax = amount * tax + amount;
  
            if (balance < amountWithTax) {
                console.log(`Can't transfer credits, ${balanceError}`);
            } else if (transactionLimit < amountWithTax) {
                console.log(`Can't transfer credits, ${limitError}.`)
            } else {
                this.takeCredits(amountWithTax);
                destinationCard.putCredits(amount);
            }
        }
    };
  }
  class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardLimit = 3;
    }
    addCard() {
        if (this.cards.length < this.cardLimit) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('Reached the maximum amount of cards for this user.');
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
  }
