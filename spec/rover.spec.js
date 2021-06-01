const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!"constructor sets position and default values for mode and generatorWatts". Refer to the Rover Class description above for these default values.
 
 it("constructor sets position, default value for mode, and default value for generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });
 //test 8 here:"response returned by receiveMessage contains name of message"
 //a message will be a Message object. returns an object with 2 properties: message will be the name of the original Message object, and results will be an array of results, each element int he array is an object that corresonds to one Command in message.commands   //then finally will update properties of the rover object(see command types table)
 it("response returned by receiveMessage contains name of message", function(){
   let rover = new Rover(123456);
   let commands = [new Command("statusCheck")]
   let message = new Message("ahhhhhh, Test with two commands",commands);
   let response = rover.receiveMessage(message);
   //console.log(response)
   expect(response.message).toEqual("ahhhhhh, Test with two commands")
   
 });
//test 9 starts here
it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
   let rover = new Rover(123456);
   let commands= [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
   let message = new Message("ahhhhhh, Test with two commands", commands);
   let response = rover.receiveMessage(message);
   //console.log(message);
   //console.log(response);
   expect(response.results.length).toEqual(2)
   
 });
 //test 10 starts here: "responds correctly to status check command" For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy. See the Rover Command Types table for more details.
it("responds correctly to STATUS_CHECK command", function(){
   let rover = new Rover(123456);
   let commands= [ new Command("STATUS_CHECK")];
   let message = new Message("ahhhhhh, Test with two commands", commands);
   let response = rover.receiveMessage(message);
   
  console.log("test10")
  console.log(response.results)
  console.log(response)
  expect(response.results[0].roverStatus.position).toEqual(rover.position);
  expect(response.results[0].roverStatus.mode).toEqual(rover.mode);
  expect(response.results[0].roverStatus.generatorWatts).toEqual(generatorWatts.position);
 });
 //test 11 starts here
 /*it("responds correctly to mode change command", function(){
   let rover = new Rover(123456);
   let commands= [ new Command("MODE_CHANGE", "LOW_POWER")];
   let message = new Message("ahhhhhh, Test with two commands", commands);
   let response = rover.receiveMessage(message);
  console.log("test11") 
  console.log(response.results)
  console.log(response)
  expect(response.results[0].roverMode.completed).toEqual(true);
  expect(response.results[0].roverMode.mode).toEqual(rover.mode);
  
 });
 //test 12 starts here
 it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
   let rover = new Rover(1234567);
   let commands= [ new Command("MOVE", 8675309)];
   let message = new Message("ahhhhhh, Test with two commands", commands);
   let response = rover.receiveMessage(message);
   expect()

 });
 // test 13 starts here
 it("responds with position for move command",function(){

 });*/
});
