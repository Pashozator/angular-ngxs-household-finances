import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Goal } from '../../../../types/goal';
import { MatDialog } from '@angular/material';
import { EditGoalDialogComponent } from '../../../../modules/dialogs/components/edit-goal-dialog/edit-goal-dialog.component';
import { Store } from '@ngxs/store';
import { RealizeGoalAction, RemoveGoalAction } from '../../../../store/goals/goals.actions';

@Component({
	selector: 'app-goal',
	templateUrl: './goal.component.html',
	styleUrls: ['./goal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalComponent implements OnInit {
	@Input() goal: Goal;
	@Input() debit: number;

	constructor(
		private store: Store,
		private dialog: MatDialog
	) {
		this.goal = new Goal();
		this.debit = 0;
	}

	ngOnInit() {
	}

	public getPercentage(): number {
		return 100 - (this.goal.value - this.debit) / this.goal.value * 100;
	}

	public edit(): void {
		this.dialog.open(EditGoalDialogComponent, {
			data: this.goal
		});
	}

	public realize(): void {
		this.store.dispatch(new RealizeGoalAction(this.goal));
	}

	public remove(): void {
		this.store.dispatch(new RemoveGoalAction(this.goal));
	}
}
