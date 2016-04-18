
      
	/**
	 * @author Adam Milton-Barker <adammiltonbarker@gmail.com>
	 * @copyright TechBubble Technologies 2014/2016 <iot.techbubbletechnologies.com>
	 */

var websocketclient = {

    'client': null,
    'lastMessageId': 1,
    'lastSubId': 1,
    'subscriptions': [],
    'messages': [],
    'connected': false,
    'host': 'iot.techbubbletechnologies.com',
    'port': 9001,
    'useTLS': true,
    'cleansession': true,

    'connect': function (params) {

		var reconnectTimeout = 2000;
		
        this.client = new Paho.MQTT.Client(
			this.host, 
			this.port, 
			params.applicationName
		);
		
        this.client.onConnectionLost = this.onConnectionLost;
        this.client.onMessageArrived = this.onMessageArrived;
		
		var options = {
			userName: params.userName,
			password: params.passwd,
			timeout: 3,
			useSSL: this.useTLS,
			cleanSession: this.cleansession,
			onSuccess: this.onConnect,
			onFailure: this.onFail
		};

        this.client.connect(options);
    },

    'onConnect': function () {
		
        websocketclient.connected = true;
        $('#status').text('Connected to TechBubble IoT JumpWay');
    },

    'onFail': function (message) {
		
        websocketclient.connected = false;
        $('#status').text('Connect failed: ' + message.errorMessage);
		
    },

    'onConnectionLost': function (responseObject) {
        websocketclient.connected = false;
        if (responseObject.errorCode !== 0) {
			$('#status').text('Connect lost: ' + responseObject.errorMessage);
        }
    },

    'onMessageArrived': function (message) {

        var messageObj = {
            'topic': message.destinationName,
            'retained': message.retained,
            'qos': message.qos,
            'payload': message.payloadString,
            'timestamp': moment()
        };

        $('#messages').prepend('<p>Message Received: ' + message.payloadString + " qos: " + message.qos+'</p>');
    },

    'disconnect': function () {
        this.client.disconnect();
        $('#status').text('Disconnected from TechBubble IoT JumpWay');
    },


	'subscribeToDeviceCommands': function  (params) {		
		
		this.client.subscribe(params.locationID+'/Devices/'+params.zoneID+'/'+params.deviceID+'/Commands', {qos: 0});
        $('#status').text('Subscribed to: ' + params.locationID+'/Devices/'+params.zoneID+'/'+params.deviceID+'/Commands');
		
	},

	'publishToDeviceCommands': function (params) {
		
		message = new Paho.MQTT.Message(params.message);
        message.destinationName = params.locationID+'/Devices/'+params.zoneID+'/'+params.deviceID+'/Commands';	
        this.client.send(message);
        $('#status').text('Published to: ' + params.locationID+'/Devices/'+params.zoneID+'/'+params.deviceID+'/Commands');
		
	}
};
