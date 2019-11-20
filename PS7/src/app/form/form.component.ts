import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() query;

  execute( ): void {
    let response;
    const lat = this.lat;
    const long = this.long;
    const apikey = config.key;
    console.log('key: ' + apikey);
    let rqst = "https://api.darksky.net/forecast/" + apikey + "/" + lat + "/" + long;
    request(rqst, { json: true }, (err, res2, body) => {
      if (err) { return console.log(err); }
      response = JSON.stringify(body);
      console.log('response: ' + response);
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
