package com.example.dashboard.repository;

import com.example.dashboard.model.AdMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdMetricRepository extends JpaRepository<AdMetric, Long> {
}
