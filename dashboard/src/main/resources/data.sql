CREATE TABLE IF NOT EXISTS ad_metric
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    date        varchar(10),
    impressions INT,
    clicks      INT,
    conversions INT,
    cost        DOUBLE,
    revenue     DOUBLE
);

INSERT INTO ad_metric (date, impressions, clicks, conversions, cost, revenue)
VALUES ('2023-01-01', 1000, 500, 100, 50.0, 200.0),
       ('2023-02-01', 1500, 700, 150, 70.0, 250.0),
       ('2023-03-01', 1200, 600, 120, 60.0, 220.0),
       ('2023-04-01', 1300, 550, 130, 55.0, 210.0),
       ('2023-05-01', 1400, 750, 140, 75.0, 260.0);