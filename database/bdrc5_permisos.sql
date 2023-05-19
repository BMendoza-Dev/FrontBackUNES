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
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permisos_nombre_unique` (`nombre`),
  UNIQUE KEY `permisos_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (1,'Seccion inicio','inicio','Accede a la vista de inicio',NULL,NULL),(2,'Appmobile','appmobile','Acceso a la app mobile',NULL,NULL),(3,'Registrador de Usuarios','RegiterUser','Accede a la seccion de registro de usuarios en sus diferentes niveles',NULL,NULL),(4,'Actualizador de Usuarios','UpdateUser','Puede actualizar usuarios en los diferentes niveles (le aparece el boton de editar)',NULL,NULL),(5,'Ve los usuarios registrado','ViewUser','Puede ver todos los usuarios registrados y su informacion',NULL,NULL),(6,'Aprobardor o denegardor blogs en ultimas noticias','AprobarBlogs','tiene permisos para acceder a las vistas para aprobar o denegar blogs para que aparezcan en la seccion de ultimas noticias de la aplicacion',NULL,NULL),(7,'Ve lista de blogs en ultimas noticias','listarblogsporaprobar','tiene permisos para acceder a las vistas para ver blogs que estan a la espera de ser aprobados a para que aparezcan en ultimas noticias',NULL,NULL),(8,'Ve lista de blogs aprobados en noticias','listarblogsaprobados','tiene permisos para acceder a las vistas para ver blogs que estan aprobados para que aparezcan en ultimas noticias',NULL,NULL),(9,'Creador de blogs','creadorDeBlogs','tiene permisos para acceder a las vistas para crear blogs',NULL,NULL),(10,'Ver blogs creados','VerBlogs','tiene permisos para acceder a las vistas ver los blogs',NULL,NULL),(11,'Editor de blogs','EditaBlogs','tiene permisos para acceder a las vistas de editar blos',NULL,NULL),(12,'Notificacion de aprobar blog ultima noticia Admin','NotifyBlogAprobar','Pemite escuchar todas las notificaciones cuando se crea un blog a aprobarse para ultimas noticias',NULL,NULL),(13,'Notificacion de blog denegado o aprobado para los usuarios o el usuario del perfil al que se le creo un nuevo blog ','Notifyblog','Pemite escuchar las notificaciones relacionadas a la aprobacion o denegacion del blog creado para ultima noticia',NULL,NULL);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 22:43:45
