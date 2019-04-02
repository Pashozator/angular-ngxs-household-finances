import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../../types/goal';
import { Select, Store } from '@ngxs/store';
import { GoalsState } from '../../store/goals/goals.state';
import { BudgetState } from '../../store/budget/budget.state';
import { GetGoalsAction } from '../../store/goals/goals.actions';

@Component({
	selector: 'app-goals',
	templateUrl: './goals.component.html',
	styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
	@Select(GoalsState.getGoals)
	public goals$: Observable<Goal[]>;

	@Select(BudgetState.getDebit)
	public debit$: Observable<number>;

	constructor(private store: Store) {
	}

	ngOnInit() {
		this.store.dispatch(new GetGoalsAction());
	}
}
