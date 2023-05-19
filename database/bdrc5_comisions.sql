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
-- Table structure for table `comisions`
--

DROP TABLE IF EXISTS `comisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comisions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comisions`
--

LOCK TABLES `comisions` WRITE;
/*!40000 ALTER TABLE `comisions` DISABLE KEYS */;
INSERT INTO `comisions` VALUES (41,'CONSEJO DE ADMINISTRACIÓN LEGISLATIVA / CAL'),(42,'Justicia y Estructura del Estado'),(43,'Derecho al Trabajo y a la Seguridad Social'),(44,'Régimen Económico y Tributario y su Regulación y Control'),(45,'Desarrollo Económico, Productivo y la Microempresa'),(46,'Relaciones Internacionales y Movilidad Humana'),(47,'Biodiversidad y Recursos Naturales'),(48,'Soberanía Alimentaria y Desarrollo del Sector Agropecuario y Pesquero'),(49,'Gobiernos Autónomos, Descentralización, Competencias y Organización del Territorio'),(50,'Educación, Cultura, Ciencia, Tecnología, Innovación y Saberes Ancestrales'),(51,'Derecho a la Salud y Deporte'),(52,'Transparencia, Participación Ciudadana y Control Social'),(53,'Garantías Constitucionales, Derechos Humanos, Derechos Colectivos y la Interculturalidad'),(54,'Soberanía, Integración y Seguridad Integral'),(55,'Protección Integral a Niñas, Niños y Adolescentes'),(56,'Fiscalización y Control Político'),(57,'Comité de Ética');
/*!40000 ALTER TABLE `comisions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:43:40
