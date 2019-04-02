import { async, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { BudgetState, BudgetStateModel } from './budget.state';
import { BudgetAction } from './budget.actions';

describe('Budget store', () => {
	let store: Store;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NgxsModule.forRoot([BudgetState])]
		}).compileComponents();
		store = TestBed.get(Store);
	}));

	it('should create an action and add an item', () => {
		const expected: BudgetStateModel = {
			items: ['item-1']
		};
		store.dispatch(new BudgetAction('item-1'));
		const actual = store.selectSnapshot(BudgetState.getState);
		expect(actual).toEqual(expected);
	});
});
