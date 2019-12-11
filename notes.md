# Joins

A `foreign key` is column (field, attribute) on a table that references the primary key on another table.

A way to link a record (or row) in one table to a record in another table.

A foreign key is a column which pairs to another table's primary key showing the relationship between the rows.

A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.

## Application Architecture

Opinion.

For an API we normally have (at least) three layers:

-   Routing (this is the `express`i code, the endpoints, the middleware) -> routers, middlware.
-   Data Access (the Knex + SQLite||Postgres code) -> models.
-   Business Logic (this makes your application unique) -> regulare pure functions packed into a module.
