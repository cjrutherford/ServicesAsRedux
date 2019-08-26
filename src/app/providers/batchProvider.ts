import { BatchService } from "src/batch.service";
import { InjectionToken } from '@angular/core';
import { nearer } from 'q';

export function batchServiceProvider(source: string): IBatchService{
    switch(source)
    {
        case ADMIN_STRING:
            // admin batch api service
            break;
        case CUSTOMER_STRING:
            // customer batch api service

    }

    return new BatchService(source);
}

export interface IBatchService {
    
}

export const ADMIN_BATCH_SERVICE_PROVIDER = new InjectionToken<BatchService>('ADMIN_BATCH_SERVICE');
export const CUSTOMER_BATCH_SERVICE_PROVIDER = new InjectionToken<BatchService>('CUSTOMER_BATCH_SERVICE');

export const ADMIN_STRING = 'admin';
export const CUSTOMER_STRING = 'customer';
export const ADMIN_BATCH = new InjectionToken<string>('ADMIN_BATCH');
export const CUSTOMER_BATCH = new InjectionToken<string>('CUSTOMER_BATCH');