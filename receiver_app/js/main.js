
//***********start flint************//
var receiverManager = new ReceiverManager("~potch");
var channel = receiverManager.createMessageChannel("potch");
receiverManager.open();

channel.on("message", function(senderId, data){
  console.log('visualizer message: '+ data);
});
