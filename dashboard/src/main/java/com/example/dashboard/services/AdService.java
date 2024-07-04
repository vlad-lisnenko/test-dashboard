package com.example.dashboard.services;

import com.example.dashboard.model.AdMetric;
import com.example.dashboard.repository.AdMetricRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdService {
    private final AdMetricRepository repository;

    public List<AdMetric> getAdMetrics() {
        return repository.findAll();
    }
}
