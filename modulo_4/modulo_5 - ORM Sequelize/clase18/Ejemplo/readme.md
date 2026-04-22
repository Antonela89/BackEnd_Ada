En nuestro Workbench de MySQL ejecutamos las siguientes queries:

```sql
CREATE DATABASE test_db;
USE test_db;
CREATE USER 'node_user'@'localhost' IDENTIFIED BY 'node_pass';
GRANT ALL PRIVILEGES ON test_db.* TO 'node_user'@'localhost';
FLUSH PRIVILEGES;
```
