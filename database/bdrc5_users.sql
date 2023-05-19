-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 85277853-37d3-4070-9ac6-d5f6013780f3.clouding.host    Database: bdrc5
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `estado` tinyint(1) NOT NULL,
  `perfil_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_perfil_id_foreign` (`perfil_id`),
  CONSTRAINT `users_perfil_id_foreign` FOREIGN KEY (`perfil_id`) REFERENCES `perfils` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Super Admin','superadmin@hotmail.com',NULL,'$2y$10$QwWfKo/Nf3QoNixUxUdb9OiHAGXFsbqH8nTeYH/fRGznBW5clK1di',NULL,NULL,1,1),(2,'Andy Mendoza Loor','andy@hotmail.com',NULL,'$2y$10$xBa9ig9.9f6X0B6xoCDAuuQdaG0/J23dbjVkQK6/OH.7b2bFeiECm',NULL,NULL,1,2290),(3,'JOSE CLEMENTE AGUALSACA GUAMAN','jose@hotmail.com',NULL,'$2y$10$J/1Rpa3k6Sq2PjM6RN9lOezJfl.9rsTdMvidVdjpHLZ9Z8vtlg9Su',NULL,NULL,1,2290),(4,'LUISA MAGDALENA GONZÁLEZ ALCÍVAR','luisa@hotmail.com',NULL,'$2y$10$zLiMN0QD.WdFh4V0aaXAkuzlzc096F1uYsGJu2uOHzkWDOEId2wTa',NULL,NULL,1,3058),(5,'bryan mendoza Loor','bryan@hotmail.com',NULL,'$2y$10$VHlRND3qvgqhHDp9ThFodesiUhNAF3R7DopR5zTYFQ8l9cUia81eG',NULL,NULL,1,3058);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:45:27
