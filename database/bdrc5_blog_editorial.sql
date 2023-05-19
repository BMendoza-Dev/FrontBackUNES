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
-- Table structure for table `blog_editorial`
--

DROP TABLE IF EXISTS `blog_editorial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_editorial` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `position` int NOT NULL,
  `editorial_id` bigint unsigned NOT NULL,
  `blog_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `blog_editorial_editorial_id_foreign` (`editorial_id`),
  KEY `blog_editorial_blog_id_foreign` (`blog_id`),
  CONSTRAINT `blog_editorial_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`),
  CONSTRAINT `blog_editorial_editorial_id_foreign` FOREIGN KEY (`editorial_id`) REFERENCES `editorials` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_editorial`
--

LOCK TABLES `blog_editorial` WRITE;
/*!40000 ALTER TABLE `blog_editorial` DISABLE KEYS */;
INSERT INTO `blog_editorial` VALUES (11,'2023-05-17 20:02:39','2023-05-17 20:02:39',0,2,1),(12,'2023-05-17 20:02:39','2023-05-17 20:02:39',1,2,2),(13,'2023-05-17 20:02:39','2023-05-17 20:02:39',2,2,4),(14,'2023-05-17 20:33:22','2023-05-17 20:33:22',0,1,6),(15,'2023-05-17 20:33:22','2023-05-17 20:33:22',1,1,5),(16,'2023-05-17 20:33:22','2023-05-17 20:33:22',2,1,2),(17,'2023-05-17 20:33:22','2023-05-17 20:33:22',3,1,3),(18,'2023-05-17 21:10:04','2023-05-17 21:10:04',0,3,1);
/*!40000 ALTER TABLE `blog_editorial` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:46:06
