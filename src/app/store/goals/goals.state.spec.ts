import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { GoalsState, GoalsStateModel } from './goals.state';
import { GoalsAction } from './goals.actions';

describe('Goals store', () => {
	let store: Store;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NgxsModule.forRoot([GoalsState])]
		}).compileComponents();
		store = TestBed.get(Store);
	}));

	it('should create an action and add an item', () => {
		const expected: GoalsStateModel = {
			items: ['item-1']
		};
		store.dispatch(new GoalsAction('item-1'));
		const actual = store.selectSnapshot(GoalsState.getState);
		expect(actual).toEqual(expected);
	});
});
