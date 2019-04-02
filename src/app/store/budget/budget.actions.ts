import { Budget } from '../../types/budget';
import { Operation } from '../../types/operation';
import { Goal } from '../../types/goal';

export class GetBudgetAction {
	public static readonly type = '[Budget] Get budget';
}

export class GetBudgetSuccessAction {
	public static readonly type = '[Budget] Get budget success';

	constructor(public payload: Budget) {
	}
}

export class GetBudgetFailureAction {
	public static readonly type = '[Budget] Get budget failure';
}

export class AddOperationAction {
	public static readonly type = '[Budget] Add operation';

	constructor(public payload: Operation) {
	}
}

export class AddOperationSuccessAction {
	public static readonly type = '[Budget] Add operation success';

	constructor(public payload: Operation) {
	}
}

export class AddOperationFailureAction {
	public static readonly type = '[Budget] Add operation failure';
}

export class EditOperationAction {
	public static readonly type = '[Budget] Edit operation';

	constructor(public payload: { operation: Operation, oldValue: number }) {
	}
}

export class EditOperationSuccessAction {
	public static readonly type = '[Budget] Edit operation success';

	constructor(public payload: { operation: Operation, oldValue: number }) {
	}
}

export class EditOperationFailureAction {
	public static readonly type = '[Budget] Edit operation failure';
}

export class RemoveOperationAction {
	public static readonly type = '[Budget] Remove operation';

	constructor(public payload: Operation) {
	}
}

export class RemoveOperationSuccessAction {
	public static readonly type = '[Budget] Remove operation success';

	constructor(public payload: Operation) {
	}
}

export class RemoveOperationFailureAction {
	public static readonly type = '[Budget] Remove operation failure';
}

export class ReduceDebitAction {
	public static readonly type = '[Budget] Reduce debit';

	constructor(public payload: Goal) {
	}
}
