import { Component, OnInit } from '@angular/core';
import { Committee } from '../interfaces/Committee';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent implements OnInit {

  constructor() { }
  committees: Committee[] =[];
  selectedCommittees: Committee[] = [];

  ngOnInit(): void {
    this.committees = [{id: 1, heading: "Special Working Group on Industry Experience for New Plants (ABC III & ABC XI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, {id: 2, heading: "ABC III Construction of Nuclear Facility Components Argentina International Working Group (QWE)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}];
  }

  onCheckCommittee = (committee: Committee) => {
    if (!this.hasCommittee(committee)) {
      this.selectedCommittees.push(committee);
    } else{
      this.selectedCommittees =  this.selectedCommittees.filter((a) => a.id !== committee.id);
    }
  }

  hasCommittee = (committee: Committee) => {
    return this.selectedCommittees.find((a) => a.id === committee.id ); 
  }

}
