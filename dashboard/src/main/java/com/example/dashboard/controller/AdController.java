package com.example.dashboard.controller;

import com.example.dashboard.model.AdMetric;
import com.example.dashboard.services.AdService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/metrics")
public class AdController {
    private final AdService adService;

    @GetMapping()
    public ResponseEntity<List<AdMetric>> getAdMetrics() {
        try {
            List<AdMetric> adMetrics = adService.getAdMetrics();
            if (adMetrics.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(adMetrics, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
