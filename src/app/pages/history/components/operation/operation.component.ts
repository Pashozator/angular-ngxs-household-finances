import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Operation } from '../../../../types/operation';
import { MatDialog } from '@angular/material';
import { EditOperationDialogComponent } from '../../../../modules/dialogs/components/edit-operation-dialog/edit-operation-dialog.component';
import { Store } from '@ngxs/store';
import { RemoveOperationAction } from '../../../../store/budget/budget.actions';

@Component({
	selector: 'app-operation',
	templateUrl: './operation.component.html',
	styleUrls: ['./operation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationComponent implements OnInit {
	@Input() operation: Operation;

	constructor(
		private dialog: MatDialog,
		private store: Store
	) {
		this.operation = new Operation();
	}

	ngOnInit() {
	}

	public edit(): void {
		this.dialog.open(EditOperationDialogComponent, {
			data: this.operation
		});
	}

	public remove(): void {
		this.store.dispatch(new RemoveOperationAction(this.operation));
	}
}
