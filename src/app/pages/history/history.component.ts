import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../../types/operation';
import { Select, Store } from '@ngxs/store';
import { BudgetState } from '../../store/budget/budget.state';
import { GetBudgetAction } from '../../store/budget/budget.actions';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	@Select(BudgetState.getOperations)
	public operations$: Observable<Operation[]>;

	@Select(BudgetState.getDebit)
	public debit$: Observable<number>;

	constructor(private store: Store) {
	}

	ngOnInit() {
		this.store.dispatch(new GetBudgetAction());
	}
}
