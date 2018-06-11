import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals$;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.animals$ = this.afs.collection('animals').valueChanges();
  }
}
