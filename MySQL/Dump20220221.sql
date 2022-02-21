-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: andromeda
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `id_direccion` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `codigo_postal` mediumint NOT NULL,
  `numero_interior` varchar(45) NOT NULL,
  `numero_exterior` varchar(45) NOT NULL,
  `informacion_adicional` varchar(255) NOT NULL,
  `nombre_destinatario` varchar(255) NOT NULL,
  `apellido_destinatario` varchar(255) NOT NULL,
  `email_destinatario` varchar(255) NOT NULL,
  PRIMARY KEY (`id_direccion`),
  UNIQUE KEY `email_destinatario_UNIQUE` (`email_destinatario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forma_de_pago`
--

DROP TABLE IF EXISTS `forma_de_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forma_de_pago` (
  `id_forma_de_pago` int NOT NULL AUTO_INCREMENT,
  `tipo_tarjeta` varchar(255) NOT NULL,
  `numero_tarjeta` bigint NOT NULL,
  `fecha_vencimiento` varchar(255) NOT NULL,
  `cvv` smallint NOT NULL,
  PRIMARY KEY (`id_forma_de_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forma_de_pago`
--

LOCK TABLES `forma_de_pago` WRITE;
/*!40000 ALTER TABLE `forma_de_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `forma_de_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista` (
  `id_lista` int NOT NULL AUTO_INCREMENT,
  `id_productos` int NOT NULL,
  `id_ticket` int NOT NULL,
  `precio_momento` int NOT NULL,
  `detalles` varchar(255) NOT NULL,
  PRIMARY KEY (`id_lista`),
  KEY `fk_lista_producto_idx` (`id_productos`),
  KEY `fk_lista_ticket_idx` (`id_ticket`),
  CONSTRAINT `fk_lista_producto` FOREIGN KEY (`id_productos`) REFERENCES `producto` (`id_producto`),
  CONSTRAINT `fk_lista_ticket` FOREIGN KEY (`id_ticket`) REFERENCES `ticket` (`id_ticket`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metodo_envio`
--

DROP TABLE IF EXISTS `metodo_envio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metodo_envio` (
  `id_envio` int NOT NULL AUTO_INCREMENT,
  `tipo_de_envio` varchar(255) NOT NULL,
  PRIMARY KEY (`id_envio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodo_envio`
--

LOCK TABLES `metodo_envio` WRITE;
/*!40000 ALTER TABLE `metodo_envio` DISABLE KEYS */;
/*!40000 ALTER TABLE `metodo_envio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) NOT NULL,
  `precio_producto` int NOT NULL,
  `cantidad_producto` int NOT NULL,
  `descripcion_producto` varchar(255) NOT NULL,
  `ruta_imagen_1` varchar(255) NOT NULL,
  `ruta_imagen_2` varchar(255) NOT NULL,
  `ruta_imagen_3` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `descuento` int NOT NULL,
  `codigo` int NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (7,'Audifonos-Gamer-Eagle-Warrior-Quimera',2500,1,'Audifonos','Audifonos-Gamer-Eagle-Warrior-Quimera.web','N/A','N/A','Audifonos',0,1),(8,'conquer-2',1500,1,'Mouse','conquer-2.webp','conquer-3.webp','conquer-5.webp','Mouse',0,2),(9,'Deepcool-Matrexx-50-4f',2700,1,'Gabinete','Deepcool-Matrexx-50-4f.webp','Deepcool-Matrexx-50-4f-2.webp','Deepcool-Matrexx-50-4f-3.webp','Gabinete',0,3),(10,'Gabinete-MasterBox-TD500-ARGB',2300,1,'Gabinete','Gabinete-MasterBox-TD500-ARGB.webp','Gabinete-MasterBox-TD500-ARGB-2.webp','Gabinete-MasterBox-TD500-ARGB-4.web','Gabinete',0,4),(11,'GA-Gigabyte-Aorus-C300W',2800,1,'Gabinete','GA-Gigabyte-Aorus-C300W.webp','GA-Gigabyte-Aorus-C300W-3.webp','GA-Gigabyte-Aorus-C300W-4.webp','Gabinete',0,5),(12,'inwin-309-neg-04',3500,1,'Gabinete','inwin-309-neg-04.webp','inwin-309-neg-07.webp','inwin-309-neg-08.webp','Gabinete',0,6),(13,'kultec-negra-x2-1',3200,1,'Silla','kultec-negra-x2-1.webp','kultec-negra-x2-3.webp','kultec-negra-x2-4.webp','Silla',0,7),(14,'Monitor-Acer-ED273-144Hz-1',4500,1,'Monitor','Monitor-Acer-ED273-144Hz-1.webp','N/A','N/A','Monitor',0,8),(15,'Monitor-Game-Factor-MG600-X800',6200,1,'Monitor','Monitor-Game-Factor-MG600-X800.webp','N/A','N/A','Monitor',0,9),(16,'naceb-plateado-1',3200,1,'Teclado','naceb-plateado-1.webp','N/A','N/A','Teclado',0,10),(17,'Silla-Gamer-RGB-Balam-Rush-2',5000,1,'Silla','Silla-Gamer-RGB-Balam-Rush-2.webp','Silla-Gamer-RGB-Balam-Rush-5.webp','N/A','Silla',0,11),(18,'Silla-Xzeal-XZ15-2',4000,1,'Silla','Silla-Xzeal-XZ15-2.webp','Silla-Xzeal-XZ15-3.webp','N/A','Silla',0,12),(19,'tuf-gaming-gt501-1',4200,1,'Gabinete','tuf-gaming-gt501-1.webp','tuf-gaming-gt501-2.webp','tuf-gaming-gt501-3.webp','Gabinete',0,13),(20,'VISOR-GALERIA',3500,1,'Gabinete','VISOR-GALERIA-1.webp','VISOR-GALERIA-2.webp','VISOR-GALERIA-3.webp','Gabinete',0,14),(21,'Yeyian-Haizen-Negro',2800,1,'Gabinete','Yeyian-Haizen-Negro.webp','Yeyian-Haizen-Negro-2.webp','Yeyian-Haizen-Negro-3.webp','Gabinete',0,15);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id_ticket` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_direccion_envio` int NOT NULL,
  `id_metodo_envio` int NOT NULL,
  `id_forma_de_pago` int NOT NULL,
  `estatus_del_pedido` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL,
  PRIMARY KEY (`id_ticket`),
  KEY `fk_ticket_usuario_idx` (`id_usuario`),
  KEY `fk_ticket_direccion_idx` (`id_direccion_envio`),
  KEY `fk_ticket_metodo_envio_idx` (`id_metodo_envio`),
  KEY `fk_ticket_forma_de_pago_idx` (`id_forma_de_pago`),
  CONSTRAINT `fk_ticket_direccion` FOREIGN KEY (`id_direccion_envio`) REFERENCES `direccion` (`id_direccion`),
  CONSTRAINT `fk_ticket_forma_de_pago` FOREIGN KEY (`id_forma_de_pago`) REFERENCES `forma_de_pago` (`id_forma_de_pago`),
  CONSTRAINT `fk_ticket_metodo_envio` FOREIGN KEY (`id_metodo_envio`) REFERENCES `metodo_envio` (`id_envio`),
  CONSTRAINT `fk_ticket_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_cliente` varchar(255) NOT NULL,
  `apellido_cliente` varchar(255) NOT NULL,
  `email_cliente` varchar(255) NOT NULL,
  `contraseñá` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_cliente_UNIQUE` (`email_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-21  1:36:29
