'use strict';

//this program mimics the Alexa service by configuring the data necessary to call a Lambda function (index.js / handler.js)
//https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html?shortFooter=true

//CONFIGURATION
const TAG = "example.js";
const context = {};
//const event = {};
const event = require('./exampleskill_testevent.json');


//event default value
event.key1 = "value___1";
event.key2 = "value___2";

const er1 = {
    "type": "IntentRequest",
    "requestId": "amzn1.echo-api.request.42d4a342-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "timestamp": "2018-03-13T23:07:29Z",
    "locale": "en-US",
    "intent": {
        "name": "AddDrinkIntent",
        "confirmationStatus": "NONE",
        "slots": {
            "DrinkList": {
                "name": "DrinkList",
                "value": "Dr Pepper",
                "confirmationStatus": "NONE"
            }
        }
    }
};

const er2 = {
    "type": "LaunchRequest",
    "requestId": "amzn1.echo-api.request.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "timestamp": "2018-03-10T22:50:24Z",
    "locale": "en-US"
};

const er3 = {
    "type": "SessionEndedRequest",
    "requestId": "amzn1.echo-api.request.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "timestamp": "2018-03-10T22:50:24Z",
    "locale": "en-US"
};

const er4 = { //"new session",
    "type": "NewSession",
    "requestId": "amzn1.echo-api.request.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "timestamp": "2018-03-10T22:50:24Z",
    "locale": "en-US"
};


//setting context default values
event.session.new = true;
    event.session.new = false;

if (event.session.new) {
    event.request = er4; // new session
} else {
    event.request = er1; // IntentRequest
    event.request = er2; // LaunchRequest
    //event.request = er3; // SessionEndedRequest
}

context.getRemainingTimeInMillis = function () {
    const timeRemaining = new Date(50000) - new Date(0); //milliseconds using Unix Epoch
    return timeRemaining;
};
context.succeed = function (data) {
    console.log("success response:", JSON.stringify(data, null, '\t'))
};
context.fail = function (err) {
    console.log('context.fail occurred');
    console.log(JSON.stringify(err, null, '\t'));
};

context.functionName = "example";
context.awsRequestId = "awsRequestId is empty";
context.logGroupName = "logGroupName is empty";
context.logStreamName = "logStreamName is empty";
context.clientContext = "clientContext is empty";
context.callbackWaitsForEmptyEventLoop = true;


//////////////////////////////////////////////////////////////////////////
//APPLICATION

const fs = require('./index');
//console.log(event);

fs.handler(event, context, callback);

function callback(something, goodthing) {
    /*
        callback();     // Indicates success but no information returned to the caller.
        callback(null); // Indicates success but no information returned to the caller.
        callback(null, "success");  // Indicates success with information returned to the caller.
        callback(error);    //  Indicates error with error information returned to the caller.
    */

    if (something === null) {
        something = "null ";
    }
    console.log(TAG + " function callback() ", something, goodthing);
}
