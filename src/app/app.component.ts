import { Component, OnInit } from '@angular/core';

function getWindow(): any {
  return window;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  private window;
  private initialized = false;


  constructor() {

    this.window = getWindow();
    this.initTiledesk();
  }
  
  async ngOnInit() {

  }

  initTiledesk() {
    console.log("initTiledesk");

    // this.window.tiledeskSettings = 
    // {
    // projectid: "5f7dcc8b9c9f020012441a19"
    // };
    // (function(d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://widget.tiledesk.com/v4/launch.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'tiledesk-jssdk'));

    this.window.tiledeskSettings =
    {
      projectid: "64ed96e81a15c60013b7ab2e"
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://chatbot.pgg.pl/widget/launch.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'tiledesk-jssdk'));
  }
}
