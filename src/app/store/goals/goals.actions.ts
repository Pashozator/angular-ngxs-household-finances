import { Goal } from '../../types/goal';

export class GetGoalsAction {
	public static readonly type = '[Goals] Get goals';
}

export class GetGoalsSuccessAction {
	public static readonly type = '[Goals] Get goals success';

	constructor(public payload: Goal[]) {
	}
}

export class GetGoalsFailureAction {
	public static readonly type = '[Goals] Get goals failure';
}

export class AddGoalAction {
	public static readonly type = '[Goals] Add goal';

	constructor(public payload: Goal) {
	}
}

export class AddGoalSuccessAction {
	public static readonly type = '[Goals] Add goal success';

	constructor(public payload: Goal) {
	}
}

export class AddGoalFailureAction {
	public static readonly type = '[Goals] Add goal failure';
}

export class EditGoalAction {
	public static readonly type = '[Goals] Edit goal';

	constructor(public payload: Goal) {
	}
}

export class EditGoalSuccessAction {
	public static readonly type = '[Goals] Edit goal success';

	constructor(public payload: Goal) {
	}
}

export class EditGoalFailureAction {
	public static readonly type = '[Goals] Edit goal failure';
}

export class RemoveGoalAction {
	public static readonly type = '[Goals] Remove goal';

	constructor(public payload: Goal) {
	}
}

export class RemoveGoalSuccessAction {
	public static readonly type = '[Goals] Remove goal success';

	constructor(public payload: Goal) {
	}
}

export class RemoveGoalFailureAction {
	public static readonly type = '[Goals] Remove goal failure';
}

export class RealizeGoalAction {
	public static readonly type = '[Goals] Realize goal';

	constructor(public payload: Goal) {
	}
}

export class RealizeGoalSuccessAction {
	public static readonly type = '[Goals] Realize goal success';

	constructor(public payload: Goal) {
	}
}

export class RealizeGoalFailureAction {
	public static readonly type = '[Goals] Realize goal failure';
}
