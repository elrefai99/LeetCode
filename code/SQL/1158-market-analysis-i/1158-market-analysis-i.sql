SELECT
    user_id AS buyer_id,
    join_date,
    COUNT(
        IF(
            YEAR(order_date) = 2019,
            TRUE,
            NULL
        )
    ) AS orders_in_2019
FROM Users
    LEFT JOIN Orders ON user_id = buyer_id
GROUP BY user_id