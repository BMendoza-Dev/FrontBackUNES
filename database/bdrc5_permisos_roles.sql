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
-- Table structure for table `permisos_roles`
--

DROP TABLE IF EXISTS `permisos_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos_roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `roles_id` bigint unsigned NOT NULL,
  `permisos_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permisos_roles_roles_id_foreign` (`roles_id`),
  KEY `permisos_roles_permisos_id_foreign` (`permisos_id`),
  CONSTRAINT `permisos_roles_permisos_id_foreign` FOREIGN KEY (`permisos_id`) REFERENCES `permisos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `permisos_roles_roles_id_foreign` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos_roles`
--

LOCK TABLES `permisos_roles` WRITE;
/*!40000 ALTER TABLE `permisos_roles` DISABLE KEYS */;
INSERT INTO `permisos_roles` VALUES (1,1,1,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(2,1,3,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(3,1,4,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(4,1,5,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(5,1,6,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(6,1,7,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(7,1,8,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(8,1,9,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(9,1,10,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(10,1,11,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(11,1,12,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(12,2,1,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(13,2,9,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(14,2,10,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(15,2,11,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(16,2,13,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(17,3,1,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(18,3,9,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(19,3,10,'2023-05-13 05:30:27','2023-05-13 05:30:27'),(20,3,11,'2023-05-13 05:30:27','2023-05-13 05:30:27');
/*!40000 ALTER TABLE `permisos_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:44:12
