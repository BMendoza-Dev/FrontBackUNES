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
-- Table structure for table `mobile_users`
--

DROP TABLE IF EXISTS `mobile_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobile_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `identificador` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile_users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobile_users`
--

LOCK TABLES `mobile_users` WRITE;
/*!40000 ALTER TABLE `mobile_users` DISABLE KEYS */;
INSERT INTO `mobile_users` VALUES (1,'2f4e6a17-4b30-4a45-b1dd-dfc2725a29de','2f4e6a17-4b30-4a45-b1dd-dfc2725a29de@rc5app.com',NULL,'$2y$10$otObGOOAkVyVvbRFkHBZ/uFxO7FjGAUsGf7C5f4uLlHpe5fHASHmW','2023-05-13 05:54:53','2023-05-13 05:54:53'),(2,'d6ad5663962f42a8','d6ad5663962f42a8@rc5app.com',NULL,'$2y$10$AXtS9BWQ6YXD7sLswD6ykev5.BHsH4xwnV2B4G524tj1jtplcq1RO','2023-05-13 06:08:50','2023-05-13 06:08:50'),(3,'076b9300-5e5e-4cf9-8bb4-4ba96a6c42d4','076b9300-5e5e-4cf9-8bb4-4ba96a6c42d4@rc5app.com',NULL,'$2y$10$GMT4EluymMve3DSkSbXQuOfeewda/a84dcmJW.GQ25VpFGt3B4yiO','2023-05-13 06:43:22','2023-05-13 06:43:22'),(4,'7b54b08ed9bd0517','7b54b08ed9bd0517@rc5app.com',NULL,'$2y$10$8AuLoSNeSoPm3FlM3SNXK.TbuhQw8copHJdguUrJwzGaSfGGEIVLW','2023-05-15 23:39:37','2023-05-15 23:39:37'),(5,'b273a7a0facc4493','b273a7a0facc4493@rc5app.com',NULL,'$2y$10$s8rORXfwA2dj2FhpFKMwxuEyH3ScCIFXBEF3QDGQD7/phgosRiT6e','2023-05-16 15:37:45','2023-05-16 15:37:45'),(6,'fd990c092a0eefbd','fd990c092a0eefbd@rc5app.com',NULL,'$2y$10$J1rFe1mxMl3JZR6oL2wW5u1ZPO04EUxOpX931NHvfI3DPKyC3.hGC','2023-05-18 21:22:41','2023-05-18 21:22:41');
/*!40000 ALTER TABLE `mobile_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:45:51
