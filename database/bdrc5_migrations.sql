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
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0000_00_00_000000_create_websockets_statistics_entries_table',1),(2,'2013_01_26_171519_create_localizaciones_table',1),(3,'2013_01_26_200000_create_comisiones_table',1),(4,'2013_01_26_200921_create_imagens_table',1),(5,'2013_01_26_200922_create_divisionterritorial_table',1),(6,'2013_01_26_200930_create_biografia_table',1),(7,'2013_01_26_200931_create_perfiles_table',1),(8,'2014_10_12_000000_create_users_table',1),(9,'2014_10_12_100000_create_password_resets_table',1),(10,'2019_08_19_000000_create_failed_jobs_table',1),(11,'2019_12_14_000001_create_personal_access_tokens_table',1),(12,'2023_01_26_200944_create_cuentas_table',1),(13,'2023_01_26_201018_create_perfil_comisiones_table',1),(14,'2023_02_17_221107_create_categories_table',1),(15,'2023_03_01_131106_create_editorales_table',1),(16,'2023_03_01_131749_create_visitantes_table',1),(17,'2023_03_01_133143_create_blogs_table',1),(18,'2023_03_01_161854_create_visitante_blog_table',1),(19,'2023_03_02_121800_create_roles_table',1),(20,'2023_03_02_134909_create_roles_user_table',1),(21,'2023_03_02_134929_create_permisos_table',1),(22,'2023_03_02_134937_create_permisos_roles_table',1),(23,'2023_03_04_122232_create_agendadeactividades_table',1),(24,'2023_03_04_122508_create_agendadeactividad_sesiones_table',1),(25,'2023_03_04_190429_create_sesiones_table',1),(26,'2023_03_04_192459_create_tema_table',1),(27,'2023_03_04_200752_create_temavotaciones_table',1),(28,'2023_03_08_004634_create_perfil_temaavotacion_table',1),(29,'2023_03_10_153708_create_notas_table',1),(30,'2023_03_20_202825_create_notifications_table',1),(31,'2023_04_19_000703_create_editorial_blog_table',1),(32,'2023_04_21_212722_create_pdfs_table',1),(33,'2023_05_01_233714_create_mobile_users_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:46:11
