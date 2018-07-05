pragma solidity ^0.4.22;


contract Inbox {
    string public message;

    constructor(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMesage) public {
        message = newMesage;
    }
}
