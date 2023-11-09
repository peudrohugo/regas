import { PageMetadataParameters } from '../interfaces';

export class PageMetadata {
  readonly page: number;

  readonly take: number;

  readonly totalItems: number;

  readonly pageCount: number;

  readonly hasPreviousPage: boolean;

  readonly hasNextPage: boolean;

  constructor({ totalItems, paginationOptions }: PageMetadataParameters) {
    this.page = paginationOptions.page;
    this.take = paginationOptions.take;
    this.totalItems = totalItems;
    this.pageCount = Math.ceil(this.totalItems / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
