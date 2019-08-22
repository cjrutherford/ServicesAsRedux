import { BatchService } from "src/batch.service";
import { InjectionToken } from '@angular/core';

export function batchServiceProvider(source: string): BatchService{
    return new BatchService(source);
}

export const ADMIN_BATCH_SERVICE_PROVIDER = new InjectionToken<BatchService>('ADMIN_BATCH_SERVICE');
export const CUSTOMER_BATCH_SERVICE_PROVIDER = new InjectionToken<BatchService>('CUSTOMER_BATCH_SERVICE');

export const ADMIN_STRING = 'admin';
export const CUSTOMER_STRING = 'customer';
export const ADMIN_BATCH = new InjectionToken<string>('ADMIN_BATCH');
export const CUSTOMER_BATCH = new InjectionToken<string>('CUSTOMER_BATCH');