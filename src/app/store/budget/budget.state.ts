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
		ctx: StateContext<BudgetStateModel>,
		action: GetBudgetAction
	) {
		console.log(GetBudgetAction.type);
	}

	@Action(GetBudgetSuccessAction)
	public getBudgetSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		action: GetBudgetSuccessAction
	) {
		console.log(GetBudgetSuccessAction.type);
	}

	@Action(GetBudgetFailureAction)
	public getBudgetFailureAction(
		ctx: StateContext<BudgetStateModel>,
		action: GetBudgetFailureAction
	) {
		console.log(GetBudgetFailureAction.type);
	}

	@Action(AddOperationAction)
	public async addOperationAction(
		ctx: StateContext<BudgetStateModel>,
		action: AddOperationAction
	) {
		console.log(AddOperationAction.type);
	}

	@Action(AddOperationSuccessAction)
	public addOperationSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		action: AddOperationSuccessAction
	) {
		console.log(AddOperationSuccessAction.type);
	}

	@Action(AddOperationFailureAction)
	public addOperationFailureAction(
		ctx: StateContext<BudgetStateModel>,
		action: AddOperationFailureAction
	) {
		console.log(AddOperationFailureAction.type);
	}

	@Action(EditOperationAction)
	public async editOperationAction(
		ctx: StateContext<BudgetStateModel>,
		action: EditOperationAction
	) {
		console.log(EditOperationAction.type);
	}

	@Action(EditOperationSuccessAction)
	public editOperationSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		action: EditOperationSuccessAction
	) {
		console.log(EditOperationSuccessAction.type);
	}

	@Action(EditOperationFailureAction)
	public editOperationFailureAction(
		ctx: StateContext<BudgetStateModel>,
		action: EditOperationFailureAction
	) {
		console.log(EditOperationFailureAction.type);
	}

	@Action(RemoveOperationAction)
	public async removeOperationAction(
		ctx: StateContext<BudgetStateModel>,
		action: RemoveOperationAction
	) {
		console.log(RemoveOperationAction.type);
	}

	@Action(RemoveOperationSuccessAction)
	public removeOperationSuccessAction(
		ctx: StateContext<BudgetStateModel>,
		action: RemoveOperationSuccessAction
	) {
		console.log(RemoveOperationSuccessAction.type);
	}

	@Action(RemoveOperationFailureAction)
	public removeOperationFailureAction(
		ctx: StateContext<BudgetStateModel>,
		action: RemoveOperationFailureAction
	) {
		console.log(RemoveOperationFailureAction.type);
	}

	@Action(ReduceDebitAction)
	public reduceDebitAction(
		ctx: StateContext<BudgetStateModel>,
		action: ReduceDebitAction
	) {
		console.log(ReduceDebitAction.type);
	}
}
