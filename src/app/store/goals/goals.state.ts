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
import { ApiService } from '../../modules/core/services/api.service';
import { produce } from '@ngxs-labs/immer-adapter';
import { ErrorService } from '../../modules/error/services/error.service';
import { LoaderService } from '../../modules/loader/services/loader.service';

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
	constructor(
		private api: ApiService,
		private error: ErrorService,
		private loader: LoaderService
	) {
	}

	@Selector()
	public static getGoals(state: GoalsStateModel) {
		return state.items;
	}

	@Action(GetGoalsAction)
	public async getGoalsAction(
		ctx: StateContext<GoalsStateModel>
	) {
		try {
			this.loader.open();

			const res = await this.api.getGoals()
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new GetGoalsSuccessAction(res.data));
		} catch (e) {
			return ctx.dispatch(new GetGoalsFailureAction());
		}
	}

	@Action(GetGoalsSuccessAction)
	public getGoalsSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: GetGoalsSuccessAction
	) {
		produce(ctx, (draft: GoalsStateModel) => {
			draft.items = payload;
		});
	}

	@Action(AddGoalAction)
	public async addGoalAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: AddGoalAction
	) {
		try {
			this.loader.open();

			const res = await this.api.addGoal(payload)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new AddGoalSuccessAction(res.data));
		} catch (e) {
			return ctx.dispatch(new AddGoalFailureAction());
		}
	}

	@Action(AddGoalSuccessAction)
	public addGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: AddGoalSuccessAction
	) {
		produce(ctx, (draft: GoalsStateModel) => {
			draft.items.push(payload);
		});
	}

	@Action(EditGoalAction)
	public async editGoalAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: EditGoalAction
	) {
		try {
			this.loader.open();

			const res = await this.api.editGoal(payload)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new EditGoalSuccessAction(payload));
		} catch (e) {
			return ctx.dispatch(new EditGoalFailureAction());
		}
	}

	@Action(EditGoalSuccessAction)
	public editGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: EditGoalSuccessAction
	) {
		produce(ctx, (draft: GoalsStateModel) => {
			const index = draft.items.findIndex(goal => goal.id === payload.id);

			draft.items[index] = payload;
		});
	}

	@Action(RemoveGoalAction)
	public async removeGoalAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: RemoveGoalAction
	) {
		try {
			this.loader.open();

			const res = await this.api.removeGoal(payload)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new RemoveGoalSuccessAction(payload));
		} catch (e) {
			return ctx.dispatch(new RemoveGoalFailureAction());
		}
	}

	@Action(RemoveGoalSuccessAction)
	public removeGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: RemoveGoalSuccessAction
	) {
		produce(ctx, (draft: GoalsStateModel) => {
			draft.items = draft.items.filter(goal => goal.id !== payload.id);
		});
	}

	@Action(RealizeGoalAction)
	public async realizeGoalAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: RealizeGoalAction
	) {
		try {
			this.loader.open();

			const res = await this.api.realizeGoal(payload)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new RealizeGoalSuccessAction(payload));
		} catch (e) {
			return ctx.dispatch(new RealizeGoalFailureAction());
		}
	}

	@Action(RealizeGoalSuccessAction)
	public realizeGoalSuccessAction(
		ctx: StateContext<GoalsStateModel>,
		{ payload }: RealizeGoalSuccessAction
	) {
		produce(ctx, (draft: GoalsStateModel) => {
			const index = draft.items.findIndex(goal => goal.id === payload.id);

			draft.items[index].realized = true;
		});
	}

	@Action([
		GetGoalsFailureAction,
		AddGoalFailureAction,
		EditGoalFailureAction,
		RemoveGoalFailureAction,
		RealizeGoalFailureAction
	])
	public failure() {
		this.loader.close();
		this.error.occurs();
	}
}
