import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Goal } from '../../../../types/goal';
import { Store } from '@ngxs/store';
import { EditGoalAction } from '../../../../store/goals/goals.actions';

@Component({
	selector: 'app-edit-goal-dialog',
	templateUrl: './edit-goal-dialog.component.html',
	styleUrls: ['./edit-goal-dialog.component.scss']
})
export class EditGoalDialogComponent implements OnInit {
	public form: FormGroup;

	constructor(
		@Inject(MAT_DIALOG_DATA) private goal: Goal,
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<EditGoalDialogComponent>,
		private store: Store
	) {
		this.form = this.prepareForm(goal);
	}

	ngOnInit() {
	}

	public submit(): void {
		this.dialogRef.close();
		this.store.dispatch(new EditGoalAction(new Goal(
			this.goal.id,
			this.form.get('label').value,
			this.form.get('description').value,
			this.form.get('value').value
		)));
	}

	private prepareForm(goal: Goal): FormGroup {
		return this.fb.group({
			label: [goal.label, Validators.required],
			value: [goal.value, Validators.required],
			description: goal.description
		});
	}
}
