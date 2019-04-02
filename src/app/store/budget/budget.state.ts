import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Operation } from '../../types/operation';
import {
	AddOperationAction,
	AddOperationFailureAction,
	AddOperationSuccessAction,
	EditOperationAction,
	EditOperationFailureAction,
	EditOperationSuccessAction,
	GetBudgetAction,
	GetBudgetFailureAction,
	GetBudgetSuccessAction,
	ReduceDebitAction,
	RemoveOperationAction,
	RemoveOperationFailureAction,
	RemoveOperationSuccessAction
} from './budget.actions';
import { ApiService } from '../../modules/core/services/api.service';
import { produce } from '@ngxs-labs/immer-adapter';
import { ErrorService } from '../../modules/error/services/error.service';
import { LoaderService } from '../../modules/loader/services/loader.service';

export interface BudgetStateModel {
	operations: Operation[];
	debit: number;
}

@State<BudgetStateModel>({
	name: 'budget',
	defaults: {
		operations: [],
		debit: 0
	}
})
export class BudgetState {
	constructor(
		private api: ApiService,
		private error: ErrorService,
		private loader: LoaderService
	) {
	}

	@Selector()
	public static getOperations(state: BudgetStateModel) {
		return state.operations;
	}

	@Selector()
	public static getDebit(state: BudgetStateModel) {
		return state.debit;
	}

	@Action(GetBudgetAction)
	public async getBudgetAction(
		ctx: StateContext<BudgetStateModel>
	) {
		try {
			this.loader.open();

			const res = await this.api.getBudget()
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new GetBudgetSuccessAction(res.data));
		} catch (e) {
			return ctx.dispatch(new GetBudgetFailureAction());
		}
	}

	@Action(GetBudgetSuccessAction)
	public getBudgetSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: GetBudgetSuccessAction
	) {
		produce(ctx, (draft: BudgetStateModel) => {
			draft.operations = payload.operations;
			draft.debit = payload.debit;
		});
	}

	@Action(AddOperationAction)
	public async addOperationAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: AddOperationAction
	) {
		try {
			this.loader.open();

			const res = await this.api.addOperation(payload)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new AddOperationSuccessAction(res.data));
		} catch (e) {
			return ctx.dispatch(new AddOperationFailureAction());
		}
	}

	@Action(AddOperationSuccessAction)
	public addOperationSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: AddOperationSuccessAction
	) {
		produce(ctx, (draft: BudgetStateModel) => {
			draft.operations.push(payload);
			draft.debit += payload.value;
		});
	}

	@Action(EditOperationAction)
	public async editOperationAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: EditOperationAction
	) {
		try {
			this.loader.open();

			const res = await this.api.editOperation(payload.operation)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new EditOperationSuccessAction(payload));
		} catch (e) {
			return ctx.dispatch(new EditOperationFailureAction());
		}
	}

	@Action(EditOperationSuccessAction)
	public editOperationSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: EditOperationSuccessAction
	) {
		produce(ctx, (draft: BudgetStateModel) => {
			const index = draft.operations.findIndex(operation => operation.id === payload.operation.id);

			draft.operations[index] = payload.operation;

			draft.debit = draft.debit - payload.oldValue + payload.operation.value;
		});
	}

	@Action(RemoveOperationAction)
	public async removeOperationAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: RemoveOperationAction
	) {
		try {
			this.loader.open();

			const res = await this.api.removeOperation(payload)
				.toPromise();

			this.loader.close();

			return ctx.dispatch(new RemoveOperationSuccessAction(payload));
		} catch (e) {
			return ctx.dispatch(new RemoveOperationFailureAction());
		}
	}

	@Action(RemoveOperationSuccessAction)
	public removeOperationSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: RemoveOperationSuccessAction
	) {
		produce(ctx, (draft: BudgetStateModel) => {
			draft.operations = draft.operations.filter(operation => operation.id !== payload.id);
			draft.debit -= payload.value;
		});
	}

	@Action(ReduceDebitAction)
	public reduceDebitAction(
		ctx: StateContext<BudgetStateModel>,
		{ payload }: ReduceDebitAction
	) {
		produce(ctx, (draft: BudgetStateModel) => {
			draft.debit -= payload.value;
		});
	}

	@Action([
		GetBudgetFailureAction,
		AddOperationFailureAction,
		EditOperationFailureAction,
		RemoveOperationFailureAction
	])
	public failure() {
		this.loader.close();
		this.error.occurs();
	}
}
