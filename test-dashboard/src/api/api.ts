import {AdMetric} from "../types/types";

export const fetchMetrics = async (): Promise<AdMetric[]> => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/metrics');
        if (!response.ok) {
            throw new Error('Failed to fetch metrics');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching metrics:', error);
        return [];
    }
}