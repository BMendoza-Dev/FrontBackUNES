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
-- Table structure for table `localizacions`
--

DROP TABLE IF EXISTS `localizacions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localizacions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `edifice` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `floor` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `office` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacions`
--

LOCK TABLES `localizacions` WRITE;
/*!40000 ALTER TABLE `localizacions` DISABLE KEYS */;
INSERT INTO `localizacions` VALUES (1,'Quito','DINADEP','1ero.','101','ext. 1691'),(2,'Quito','DINADEP','5to.','509','ext. 1634'),(3,'Quito','DINADEP','1ero.','102','ext. 1647'),(4,'Quito','DINADEP','1ero.','103','ext. 1695'),(5,'Quito','PALACIO LEGISLATIVO','Mz.','Ala Oriental','ext. 3162'),(6,'Quito','PALACIO LEGISLATIVO','6to.','Ala Occidental','ext. 1096'),(7,'Quito','DINADEP','1ero.','107','ext. 1611'),(8,'Quito','DINADEP','1ro.','108','ext. 1598'),(9,'Quito','PALACIO LEGISLATIVO','2do.','ALA ORIENTAL','ext. 1610'),(10,'Quito','DINADEP','5to','509','ext. 1643'),(11,'Quito','DINADEP','7mo.','710','ext. 1616'),(12,'Quito','DINADEP','2do.','201','ext. 1343'),(13,'Quito','DINADEP','2do.','203','ext. 1677'),(14,'Quito','DINADEP','2do.','202','ext. 1676'),(15,'Quito','PALACIO LEGISLATIVO','1ero.','Ala Oriental','ext. 1213'),(16,'Quito','DINADEP','2do.','205','ext. 1001'),(17,'Quito','DINADEP','2do.','206','ext. 1682'),(18,'Quito','PALACIO LEGISLATIVO','5to.','Ala Occidental','ext. 1074'),(19,'Quito','DINADEP','2do.','207','ext 1683'),(20,'Quito','DINADEP','2do.','208','ext. 1685'),(21,'Quito','DINADEP','3ero.','303','ext. 1660'),(22,'Quito','DINADEP','2do.','210','ext. 1690'),(23,'Quito','DINADEP','2do.','209','ext. 1687'),(24,'Quito','DINADEP','3ero.','301','ext. 1655'),(25,'Quito','DINADEP','3ro.','302','ext. 1671'),(26,'Quito','DINADEP','3ero.','309','ext. 1669'),(27,'Quito','DINADEP','3ero.','307','ext. 1666'),(28,'Quito','DINADEP','3ro.','308','ext. 1668'),(29,'Quito','DINADEP','3ero.','305','ext. 1659'),(30,'Quito','DINADEP','3ero.','310','ext. 1657'),(31,'Quito','DINADEP','4to.','403','ext. 1641'),(32,'Quito','PALACIO LEGISLATIVO','2do.',' Ala Oriental','ext. 1212'),(33,'Quito','DINADEP','4to.','402','ext. 1639'),(34,'Quito','DINADEP','4to.','405','ext. 1644'),(35,'Quito','DINADEP','5to.','503','ext. 1624'),(36,'Quito','DINADEP','4to.','407','ext. 1418'),(37,'Quito','DINADEP','4to.','408','ext. 1649'),(38,'Quito','DINADEP','4to.','409','ext. 1651'),(39,'Quito','DINADEP','4to.','410','ext. 1653'),(40,'Quito','DINADEP','5to.','510','ext. 1182'),(41,'Quito','DINADEP','5to. ','501','ext.1620'),(42,'Quito','DINADEP','5to.','502','Ext.1621'),(43,'Quito','DINADEP','4to. ','406','ext.1645'),(44,'Quito','DINADEP','5to.','505','ext. 1625'),(45,'Quito','DINADEP','5to.','506','ext. 1627'),(46,'Quito','DINADEP','6to.','603','ext. 1605');
/*!40000 ALTER TABLE `localizacions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:45:47
