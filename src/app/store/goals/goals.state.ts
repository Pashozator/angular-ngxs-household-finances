import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Goal } from '../../types/goal';
import {
	AddGoalAction,
	AddGoalFailureAction,
	AddGoalSuccessAction,
	EditGoalAction,
	EditGoalFailureAction,
	EditGoalSuccessAction,
	GetGoalsAction,
	GetGoalsFailureAction,
	GetGoalsSuccessAction,
	RealizeGoalAction,
	RealizeGoalFailureAction,
	RealizeGoalSuccessAction,
	RemoveGoalAction,
	RemoveGoalFailureAction,
	RemoveGoalSuccessAction
} from './goals.actions';

export interface GoalsStateModel {
	items: Goal[];
}

@State<GoalsStateModel>({
	name: 'goals',
	defaults: {
		items: []
	}
})
export class GoalsState {
	@Selector()
	public static getGoals(state: GoalsStateModel) {
		return state.items;
	}

	@Action(GetGoalsAction)
	public async getGoalsAction(
		ctx: StateContext<GoalsStateModel>,
		action: GetGoalsAction
	) {
		console.log(GetGoalsAction.type);
	}

	@Action(GetGoalsSuccessAction)
	public getGoalsSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		action: GetGoalsSuccessAction
	) {
		console.log(GetGoalsSuccessAction.type);
	}

	@Action(GetGoalsFailureAction)
	public getGoalsFailureAction(
		ctx: StateContext<GoalsStateModel>,
		action: GetGoalsFailureAction
	) {
		console.log(GetGoalsFailureAction.type);
	}

	@Action(AddGoalAction)
	public async addGoalAction(
		ctx: StateContext<GoalsStateModel>,
		action: AddGoalAction
	) {
		console.log(AddGoalAction.type);
	}

	@Action(AddGoalSuccessAction)
	public addGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		action: AddGoalSuccessAction
	) {
		console.log(AddGoalSuccessAction.type);
	}

	@Action(AddGoalFailureAction)
	public addGoalFailureAction(
		ctx: StateContext<GoalsStateModel>,
		action: AddGoalFailureAction
	) {
		console.log(AddGoalFailureAction.type);
	}

	@Action(EditGoalAction)
	public async editGoalAction(
		ctx: StateContext<GoalsStateModel>,
		action: EditGoalAction
	) {
		console.log(EditGoalAction.type);
	}

	@Action(EditGoalSuccessAction)
	public editGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		action: EditGoalSuccessAction
	) {
		console.log(EditGoalSuccessAction.type);
	}

	@Action(EditGoalFailureAction)
	public editGoalFailureAction(
		ctx: StateContext<GoalsStateModel>,
		action: EditGoalFailureAction
	) {
		console.log(EditGoalFailureAction.type);
	}

	@Action(RemoveGoalAction)
	public async removeGoalAction(
		ctx: StateContext<GoalsStateModel>,
		action: RemoveGoalAction
	) {
		console.log(RemoveGoalAction.type);
	}

	@Action(RemoveGoalSuccessAction)
	public removeGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		action: RemoveGoalSuccessAction
	) {
		console.log(RemoveGoalSuccessAction.type);
	}

	@Action(RemoveGoalFailureAction)
	public removeGoalFailureAction(
		cts: StateContext<GoalsStateModel>,
		action: RemoveGoalFailureAction
	) {
		console.log(RemoveGoalFailureAction.type);
	}

	@Action(RealizeGoalAction)
	public async realizeGoalAction(
		ctx: StateContext<GoalsStateModel>,
		action: RealizeGoalAction
	) {
		console.log(RealizeGoalAction.type);
	}

	@Action(RealizeGoalSuccessAction)
	public realizeGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		action: RealizeGoalSuccessAction
	) {
		console.log(RealizeGoalSuccessAction.type);
	}

	@Action(RealizeGoalFailureAction)
	public realizeGoalFailureAction(
		ctx: StateContext<GoalsStateModel>,
		action: RealizeGoalFailureAction
	) {
		console.log(RealizeGoalFailureAction.type);
	}
}
