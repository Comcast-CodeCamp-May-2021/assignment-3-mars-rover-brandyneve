class Rover {
   // Write code here!
     constructor(position, mode = "NORMAL", generatorWatts =110){
     this.position = position;
     this.mode = mode;
     this.generatorWatts = generatorWatts
     }
     
     receiveMessage(message){
       let response = {
         message: message.name,
         results: []
         }
      
       //for (let i =0; i < message.commands.length; i++){
       // response.results.push(message.commands[i]);
       //}
       
         //each command object in command array, push completed: true 
       //ok, for test 10, i am gonna want to verify that receiveMessage(message) contains the statuscheck command, then receivemessage(message).results should include a roverStatus object with mode, generatorWatts and position
       //for (let i =0; i < response.results.length; i++){
       for (let i =0; i < message.commands.length; i++){
         //if (response.results[i].commandType === "STATUS_CHECK"){
         if (message.commands[i].commandType === "STATUS_CHECK"){
          let roverStatusCheck = {
            completed: true,
            roverStatus: {
              mode: this.mode,
              generatorWatts: this.generatorWatts,
              position: this.position,
              }
            };
           response.results.push(roverStatusCheck);
           }
       
          /*else if (message.commands[i].commandType === "MODE_CHANGE"){
              this.mode = message.commands[i].value
              let roverMode = {
                completed: true,
                mode: this.mode
              }
              response.results.push(roverMode);
          /*}else if (//if this.mode=== LOW_POWER && message.commands[i].commandType ==="MOVE"){
            let roverMove = {
              completed: false,
              position= this.position
            }
            response.results.push(roverMove)
          }*/
        
      }
      return response
     }
}
       



module.exports = Rover;