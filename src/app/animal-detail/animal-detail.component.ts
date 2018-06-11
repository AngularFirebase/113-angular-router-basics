import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  animal$;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.animal$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     const name = params.get('name');
    //     return this.afs.doc('animals/' + name).valueChanges();
    //   })
    // );

    this.animal$ = this.route.data.pipe(map(val => val[0]));
  }
}
