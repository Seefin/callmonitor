# Callmonitor
Simple HTTP (Maybe HTTPS) endpoint to send a GET request to to control HUE lights and Spotify.

## Principle of operation
Using the CRM integration feature, the call server will issue a GET request against the 
customer record database and then bring up customer files.

I plan to abuse this to issue a state change to the lights in the room, and pause the
currently playing track in Spotify.

## Endpoints
We expose a single endpoint to the web: /incoming-call. When a GET
request is recieved, the endpoint returns a 200 OK response to the call server to make it happy,
and then call the remote API on Hue and Spotify to pause the track and to change the lighting
state.

To change the lights back and restart playback, we either need to abuse the Wordpress integration for
recordings (harder) or we just manually perform these operations. 
