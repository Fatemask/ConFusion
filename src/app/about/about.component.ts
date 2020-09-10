import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from "../service/leader.service";
import { Leader } from "../shared/leader";
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  leaders:Leader[];
  selectedLeader:Leader;
  errMess: string;
  constructor(private leaderService : LeaderService,
    @Inject('BaseURL') private baseURL) { }

  ngOnInit(): void {
    this.leaderService.getLeader().subscribe(leaders =>this.leaders=leaders ,errmess => this.errMess = <any>errmess);
  }

}

