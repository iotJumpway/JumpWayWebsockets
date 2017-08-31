# IoT JumpWay WebSockets MQTT Samples
======================================

TechBubble Technologies Internet of Things (IoT) JumpWay is an IoT PaaS that allows anyone to connect IoT devices such as Raspberry Pi, Intel® Galileo, Arduino, ESP8266 and even phones,PCs, Macs and laptops to the Internet of Things. The various IoT JumpWay libraries and samples allow you to connect devices and sensors to the IoT JumpWay and control/monitor sensors/actuators and data to and from the devices.

The TechBubble Technologies IoT JumpWay WebSockets MQTT examples allow developers to communicate from web and desktop applications by sending commands to devices via the TechBubble IoT JumpWay MQTT Broker using WebSockets.

# Before You Begin

Make sure that you have a device already connected to the TechBubble IoT JumpWay. If you are new to using the TechBubble IoT JumpWay, you can choose from one of the following starter tutorials which will help you get on your way.

- [IoT JumpWay Raspberry Pi Basic LED Example](https://github.com/TechBubbleTechnologies/IoT-JumpWay-RPI-Examples/tree/master/Basic-LED/Python "IoT JumpWay Raspberry Pi Basic LED Example")

- [IoT JumpWay Intel® Edison Basic LED Example](https://github.com/TechBubbleTechnologies/IoT-JumpWay-Intel-Examples/tree/master/Intel-Edison/Basic-LED/Python "IoT JumpWay Intel® Edison Basic LED Example")
  
# Installation

These samples are very easy to setup, you can either run the locally on your PC/Mac/Laptop etc or you can upload them to a webserver.

##LED Sample Connection Credentials
------------

First of all you need to add your application connection credentials. You will be provided these credentials when you set up an application in the IoT JumpWay GUI.

```
var mqttOptions = {
	locationID: "YOURLOCATIONID",
	applicationID: "YOURAPPLICATIONID",
	applicationName: "YOURAPPLICATIONNAME",
	userName: "YOURAPPLICATIONMQTTUSERNAME",
	passwd: "YOURAPPLICATIONMQTTPASSWORD"
};
```

##LED Sample Device Details
------------

The final step is to add the device details that you will be controlling.

```
$('body').on('click','#subscribe',function(){			
	websocketclient.subscribeToDeviceCommands( {
		locationID: "YOURLOCATIONID",
		zoneID: "YOURZONEID",
		deviceID: "YOURDEVICEID"
	});			
}); 
```

Once the above are set up, you are done, either double click the index.html file on your PC/Mac/Laptop or upload the structure to your webserver and visit the page.


