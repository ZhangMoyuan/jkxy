/*
Navicat MySQL Data Transfer

Source Server         : localhost_3366
Source Server Version : 50505
Source Host           : localhost:3366
Source Database       : baidunews

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-06-20 19:13:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻id',
  `newsType` varchar(255) NOT NULL COMMENT '新闻类型',
  `newsTitle` varchar(255) NOT NULL,
  `newsContent` varchar(10000) NOT NULL COMMENT '新闻内容',
  `newsDate` date NOT NULL COMMENT '发布时间',
  `newsImgPath` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('80', '推荐', '这里是推荐的内容标题1', '这里是视频的内容...', '2016-06-20', 'img/0.jpg');
INSERT INTO `news` VALUES ('81', '推荐', '这里是推荐的内容标题2', '这里是新闻的内容', '2016-06-20', 'img/2.jpg');
INSERT INTO `news` VALUES ('82', '推荐', '这里是推荐的内容标题3', '这里是内容', '2016-06-20', 'img/3.jpg');
INSERT INTO `news` VALUES ('83', '推荐', '这里是推荐的内容标题4', '这里是内容...', '2016-06-20', 'img/4.jpg');
INSERT INTO `news` VALUES ('84', '百家', '这里是百家的内容标题1', '这里是新闻的内容...', '2016-06-20', 'img/5.jpg');
INSERT INTO `news` VALUES ('85', '百家', '这里是百家的内容标题2', '这里是新闻的内容', '2016-06-20', 'img/6.jpg');
INSERT INTO `news` VALUES ('86', '百家', '这里是百家的内容标题3', '这里是新闻的内容', '2016-06-20', 'img/7.jpg');
INSERT INTO `news` VALUES ('87', '百家', '这里是百家的内容标题4', '这里是新闻的内容', '2016-06-20', 'img/8.jpg');
INSERT INTO `news` VALUES ('88', '社会', '这里是社会的内容标题1', '这里是新闻的内容', '2016-06-20', 'img/9.jpg');
INSERT INTO `news` VALUES ('89', '社会', '这里是社会的内容标题2', '这里是新闻的内容', '2016-06-20', 'img/10.jpg');
INSERT INTO `news` VALUES ('90', '娱乐', '这里是娱乐的内容标题1', '这里是新闻的内容', '2016-06-20', 'img/11.jpg');
INSERT INTO `news` VALUES ('91', '娱乐', '这里是娱乐的标题内容2', '这里是新闻的内容', '2016-06-20', 'img/3.jpg');
INSERT INTO `news` VALUES ('92', '搞笑', '这里是搞笑的标题内容1', '这里是新闻的内容', '2016-06-20', 'img/4.jpg');
