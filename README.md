# alexaskill-lambdaexample

<br />
<br />
INSTRUCTIONS<br />
<br />


Clone repo<br />
<code>git clone https://github.com/georgemck/alexaskill-lambdaexample.git</code> <br />
<br />
Install Alexa SDK dependency<br />
<code>npm install</code><br />
<br />
run example.js<br />
<code>node example.js</code><br />
<br />

--------------------------------------------------

FILES:<br />
<br />
<strong>index.js (handler.js)</strong> - this is the Lambda code<br />
<br />
<strong>example.js</strong> - this is code mimics running the Lambda by creating the Event, Context, and Callback objects present in the Lambda execution environment<br />
<br />
<strong>exampleskill_testevent.json</strong> - starting JSON object used to build upon for the event<br />
<br />
<strong>package.json</strong> - this project's configuration file<br />
<br /><br /><br />
When testing, modify the event.response and event.session.new code near "setting context default values" in example.js.  This allows for changing the intent that is being tested.<br /><br />

 

