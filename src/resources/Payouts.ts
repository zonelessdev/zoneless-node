import { BaseResource } from './Base';
import { RequestExtraOptions } from '../HttpClient';
import { Payout } from '../types/Payout';
import {
  CreatePayoutInput,
  UpdatePayoutInput,
  ListPayoutsInput,
} from '../schemas/PayoutSchema';
import { ListResponse } from '../types/ApiResponse';

/**
 * @see https://zoneless.com/docs/payouts
 */
export class Payouts extends BaseResource {
  /** @see https://zoneless.com/docs/payouts/create */
  async create(
    params: CreatePayoutInput,
    options?: RequestExtraOptions
  ): Promise<Payout> {
    return this.client.Post<Payout>('/payouts', params, options);
  }

  /** @see https://zoneless.com/docs/payouts/retrieve */
  async retrieve(id: string, options?: RequestExtraOptions): Promise<Payout> {
    return this.client.Get<Payout>(`/payouts/${id}`, undefined, options);
  }

  /** @see https://zoneless.com/docs/payouts/update */
  async update(
    id: string,
    params: UpdatePayoutInput,
    options?: RequestExtraOptions
  ): Promise<Payout> {
    return this.client.Post<Payout>(`/payouts/${id}`, params, options);
  }

  /** @see https://zoneless.com/docs/payouts/list */
  async list(
    params: ListPayoutsInput = {},
    options?: RequestExtraOptions
  ): Promise<ListResponse<Payout>> {
    const query = this.BuildQuery(params);
    return this.client.Get<ListResponse<Payout>>('/payouts', query, options);
  }

  /** @see https://zoneless.com/docs/payouts/cancel */
  async cancel(id: string, options?: RequestExtraOptions): Promise<Payout> {
    return this.client.Post<Payout>(`/payouts/${id}/cancel`, {}, options);
  }

  private BuildQuery(
    params: ListPayoutsInput
  ): Record<string, string | number | undefined> {
    const query: Record<string, string | number | undefined> = {
      limit: params.limit,
      starting_after: params.starting_after,
      ending_before: params.ending_before,
      destination: params.destination,
      status: params.status,
    };

    if (params.arrival_date) {
      if (params.arrival_date.gt !== undefined) {
        query['arrival_date[gt]'] = params.arrival_date.gt;
      }
      if (params.arrival_date.gte !== undefined) {
        query['arrival_date[gte]'] = params.arrival_date.gte;
      }
      if (params.arrival_date.lt !== undefined) {
        query['arrival_date[lt]'] = params.arrival_date.lt;
      }
      if (params.arrival_date.lte !== undefined) {
        query['arrival_date[lte]'] = params.arrival_date.lte;
      }
    }

    if (params.created) {
      if (params.created.gt !== undefined) {
        query['created[gt]'] = params.created.gt;
      }
      if (params.created.gte !== undefined) {
        query['created[gte]'] = params.created.gte;
      }
      if (params.created.lt !== undefined) {
        query['created[lt]'] = params.created.lt;
      }
      if (params.created.lte !== undefined) {
        query['created[lte]'] = params.created.lte;
      }
    }

    return query;
  }
}
