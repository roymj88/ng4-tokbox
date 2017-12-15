import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var require: any;
const OT = require('@opentok/client');
// const publisher = OT.initPublisher();

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoCallComponent implements OnInit {
  sessionId: string;
  apiKey: string;
  token1: string;
  token2: string;

  constructor() { }

  ngOnInit() {

    
    // replace these values with those generated in your TokBox Account
    this.apiKey = "46002472"; //session API Key
    this.sessionId = "1_MX40NjAwMjQ3Mn5-MTUxMjk5NTY0NjUzN35hRlJkQTNESWwxemE1elVJY0FKYy93aWp-fg"; //Session ID
    this.token1 = "T1==cGFydG5lcl9pZD00NjAwMjQ3MiZzaWc9ODNlYmYxNjljOThiODg1ODczOGIyMjc4YWMwYjJiYWNlOTNiNmNhYjpzZXNzaW9uX2lkPTFfTVg0ME5qQXdNalEzTW41LU1UVXhNams1TlRZME5qVXpOMzVoUmxKa1FUTkVTV3d4ZW1FMWVsVkpZMEZLWXk5M2FXcC1mZyZjcmVhdGVfdGltZT0xNTEyOTk4Nzc0Jm5vbmNlPTAuMDQ0OTIwNTgxOTkwNTIyNTEmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxNTU5MDc3MiZjb25uZWN0aW9uX2RhdGE9JTdCJTBBJTIyaWQlMjIlMjAlM0ElMjAlMjI1YTBlNjAwNGU0NWY2MDFlMjVlZDFjYTYlMjIlMkMlMEElMjJ1c2VyVHlwZSUyMiUyMCUzQSUyMCUyMnBhdGllbnQlMjIlMkMlMEElMjJuYW1lJTIyJTIwJTNBJTIwJTIySmFjayUyMFNtaXRoJTIyJTJDJTBBJTIyY29sb3IlMjIlMjAlM0ElMjAlMjIlMjMyMTBCNjElMjIlMEElN0QmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";
    this.token2 = "T1==cGFydG5lcl9pZD00NjAwMjQ3MiZzaWc9YTA4YWRkZDBkMDM0NzUzM2Y0YjdjNTMxZGEzMGJmNmE2YmFlMjc4ZjpzZXNzaW9uX2lkPTFfTVg0ME5qQXdNalEzTW41LU1UVXhNams1TlRZME5qVXpOMzVoUmxKa1FUTkVTV3d4ZW1FMWVsVkpZMEZLWXk5M2FXcC1mZyZjcmVhdGVfdGltZT0xNTEyOTk4NTg3Jm5vbmNlPTAuODAxMzA2OTEyNDMzNzY3NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTE1NTkwNTg2JmNvbm5lY3Rpb25fZGF0YT0lN0IlMEElMjJpZCUyMiUyMCUzQSUyMCUyMjVhMGU1ZmI5OTc2Y2I4MWNmZTdm";
    // (optional) add server code here
    this.initializeSession(this.apiKey, this.sessionId);
  }

  initializeSession = (apiKey, sessionId) => {
    var that = this;
    var session = OT.initSession(apiKey, sessionId);
    // Subscribe to a newly created stream

    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      name: 'Roy M J',
      showControls: false
    }, this.handleError);

    // Connect to the session
    session.connect(this.token1, function (error) {
      // If the connection is successful, publish to the session
      if (error) {
        that.handleError(error);
      } else {
        session.publish(publisher, that.handleError);
      }
    });

    session.on('streamCreated', function (event) {
      session.subscribe(event.stream, 'subscriber-child', {
        insertMode: 'append',
        showControls: false
      }, that.handleError);

      var subscribers = session.getSubscribersForStream(event.stream);
      for (var i = 0; i < subscribers.length; i++) {
        console.log(subscribers[i].id);
        var id = subscribers[i].id;
        document.getElementById(id).addEventListener("click", function () {

          var d = document.getElementById("div1");
          d.className += " otherclass";

          d.classList.remove("otherclass");

          // document.getElementById(id).style.width = "900px";
          // document.getElementById(id).style.height = "900px";
        });
        // You may want to display some UI text for each
        // subscriber, or make some other UI change,
        // based on event.changedProperty and
        // event.newValue
      }

    });

  }

  handleError = (err) => {
    if (err) {
      alert(err.message);
    }
  }


}
