/*!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.4.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: catalogo_zapatillas
-- ------------------------------------------------------
-- Server version	11.4.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `zapatilla`
--

DROP TABLE IF EXISTS `zapatilla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zapatilla` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `fecha_lanzamiento` bigint(20) unsigned NOT NULL,
  `precio` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zapatilla`
--

LOCK TABLES `zapatilla` WRITE;
/*!40000 ALTER TABLE `zapatilla` DISABLE KEYS */;
INSERT INTO `zapatilla` VALUES
(1,'Nike','Air Max 270','Deportiva',2023,480000),
(2,'Adidas','Ultraboost 22','Deportiva',2022,720000),
(3,'Puma','RS-X3','Casual',2023,360000),
(4,'Reebok','Nano X1','Deportiva',2021,400000),
(5,'New Balance','574','Casual',2022,300000),
(6,'Nike','Air Force 1','Casual',2023,440000),
(7,'Adidas','NMD_R1','Deportivo',2022,600000),
(8,'Under Armour','HOVR Phantom','Deportivo',2023,520000),
(9,'Skechers','D\'Lites','Casual',2023,280000),
(10,'Vans','Old Skool','Casual',2022,260000),
(11,'Asics','Gel-Kayano 28','Deportivo',2021,640000),
(12,'Converse','Chuck Taylor 70','Casual',2021,340000),
(13,'Puma','Cali','Casual',2023,380000),
(14,'New Balance','990v5','Deportivo',2023,720000),
(15,'Nike','Zoom Pegasus 38','Deportivo',2022,520000),
(16,'Adidas','Supernova','Deportivo',2022,560000),
(17,'Reebok','Classic Leather','Casual',2022,280000),
(18,'Adidas','ZX 2K Boost','Deportivo',2021,640000),
(19,'Nike','Air Max 97','Casual',2022,720000),
(20,'Converse','Chuck Taylor All Star','Casual',2021,360000),
(21,'New Balance','860v11','Deportivo',2023,560000),
(22,'Puma','Future Rider','Casual',2022,340000),
(23,'Nike','Air Max 720','Casual',2023,720000),
(24,'Reebok','Zig Kinetica','Deportivo',2023,600000),
(25,'Adidas','Forum Low','Casual',2023,480000),
(26,'Under Armour','Speedform Slingshot','Deportivo',2022,520000),
(27,'Asics','Gel-Cumulus 23','Deportivo',2022,440000),
(28,'Nike','Air Max 2017','Casual',2022,640000),
(29,'Puma','Suede Classic','Casual',2022,300000),
(30,'Adidas','Stan Smith','Casual',2022,400000),
(31,'Niker','Air Max 271','Deportiva',2024,540000);
/*!40000 ALTER TABLE `zapatilla` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-11 10:59:18
