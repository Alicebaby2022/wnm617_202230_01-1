CREATE TABLE IF NOT EXISTS `track_20224_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_20224_users VALUES
(1,'Anita Vang','user1','user1@gmail.com',md5('pass'),'https://via.placeholder.com/400/989/fff/?text=user1','2022-03-02 11:44:17'),
(2,'Meadows Head','user2','user2@gmail.com',md5('pass'),'https://via.placeholder.com/400/779/fff/?text=user2','2022-04-03 07:27:58'),
(3,'Lott Rodriguez','user3','user3@gmail.com',md5('pass'),'https://via.placeholder.com/400/924/fff/?text=user3','2022-01-13 07:37:42'),
(4,'Peters Lancaster','user4','user4@gmail.com',md5('pass'),'https://via.placeholder.com/400/870/fff/?text=user4','2022-01-16 03:53:24'),
(5,'Montoya Harris','user5','user5@gmail.com',md5('pass'),'https://via.placeholder.com/400/853/fff/?text=user5','2022-03-12 02:14:18'),
(6,'Daniels Ashley','user6','user6@gmail.com',md5('pass'),'https://via.placeholder.com/400/899/fff/?text=user6','2022-01-25 12:00:21'),
(7,'Madeline Gibbs','user7','user7@gmail.com',md5('pass'),'https://via.placeholder.com/400/921/fff/?text=user7','2022-03-27 01:43:38'),
(8,'Winnie Reilly','user8','user8@gmail.com',md5('pass'),'https://via.placeholder.com/400/911/fff/?text=user8','2022-03-05 05:11:40'),
(9,'Jenny Salas','user9','user9@gmail.com',md5('pass'),'https://via.placeholder.com/400/775/fff/?text=user9','2022-01-01 12:42:21'),
(10,'Kirkland Diaz','user10','user10@gmail.com',md5('pass'),'https://via.placeholder.com/400/942/fff/?text=user10','2022-04-04 06:15:19');