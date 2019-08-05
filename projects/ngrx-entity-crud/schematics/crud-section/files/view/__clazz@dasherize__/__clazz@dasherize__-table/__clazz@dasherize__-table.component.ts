import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-<%= dasherize(clazz) %>-table',
  template: `<%= dasherize(clazz) %>-table.component.ts`,
  styles: [``]
})
export class <%= clazz %>TableComponent implements OnInit {


  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    // this.ruleTables$ = this.store$.pipe(
    //   select(RuleTableStoreSelectors.selectFilteredItems),
    //   tap(values => this.updateRowGroupMetaData(values))
    // );
  }


}