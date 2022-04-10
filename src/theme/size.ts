import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  Dimensions,
  Platform,
  StyleSheet,
  NativeModules,
  StatusBar,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {isIPhoneXMax} from 'react-native-status-bar-height';

const {width, height} = Dimensions.get('window');
const {PlatformConstants} = NativeModules;

export const DEVICE = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isSmallDevice: width < 375,
  width,
  height,
  deviceType: PlatformConstants.interfaceIdiom,
};

const BASE_FONT_SIZE = 2;
function ReduceTextFor18_9(number: number) {
  return Math.ceil((DEVICE.width / DEVICE.height) * 100) === 52
    ? number - 0.5
    : number;
}

function calculateFontsize(current: number, max: number) {
  return current <= max ? current : max;
}

const DW = 375;
const DH = 812;
const vh = height / DH;
const vw = width / DW;
const sizeWidth = (number: number) => number * (width < height ? vw : vh);
const sizeHeight = (number: number) => number * (width > height ? vw : vh);

export const deviceHeight = DEVICE.height;
export const deviceWidth = DEVICE.width;

export const FontSize = {
  Font9: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(-0.25)),
        9,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(-0.25)),
        10,
      ),
  Font10: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(-0.25)),
        10,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0)),
        11,
      ),
  Font11: DEVICE.isAndroid
    ? calculateFontsize(RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0)), 11)
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        12,
      ),
  Font12: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        12,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        13,
      ),
  Font13: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.25)),
        13,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        14,
      ),
  Font14: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        14,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        15,
      ),
  Font15: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.5)),
        15,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.6)),
        16,
      ),
  Font16: DEVICE.isAndroid
    ? calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.6)),
        16,
      )
    : calculateFontsize(
        RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.75)),
        17,
      ),
  Font17: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.75)),
    17,
  ),
  Font18: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(0.8)),
    18,
  ),
  Font19: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1)),
    19,
  ),
  Font20: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1.25)),
    20,
  ),
  Font21: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1.5)),
    21,
  ),
  Font24: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(1.75)),
    24,
  ),
  Font25: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2)),
    25,
  ),
  Font27: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2.5)),
    27,
  ),
  Font28: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2.6)),
    28,
  ),
  Font30: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(2.7)),
    30,
  ),
  Font32: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(3)),
    32,
  ),
  Font35: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(3.5)),
    35,
  ),
  Font40: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(4)),
    40,
  ),
  Font45: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(4.5)),
    45,
  ),
  Font55: calculateFontsize(
    RFPercentage(BASE_FONT_SIZE + ReduceTextFor18_9(5.5)),
    45,
  ),
};

export const Spacing = {
  BottomBar: 50 + (DEVICE.isIos ? (isIphoneX() || isIPhoneXMax() ? 34 : 0) : 0),
  width1: sizeWidth(1),
  width2: sizeWidth(2),
  width3: sizeWidth(3),
  width4: sizeWidth(4),
  width5: sizeWidth(5),
  width6: sizeWidth(6),
  width7: sizeWidth(7),
  width8: sizeWidth(8),
  width9: sizeWidth(9),
  width10: sizeWidth(10),
  width11: sizeWidth(11),
  width12: sizeWidth(12),
  width13: sizeWidth(13),
  width14: sizeWidth(14),
  width15: sizeWidth(15),
  width16: sizeWidth(16),
  width17: sizeWidth(17),
  width18: sizeWidth(18),
  width19: sizeWidth(19),
  width20: sizeWidth(20),
  width21: sizeWidth(21),
  width22: sizeWidth(22),
  width23: sizeWidth(23),
  width24: sizeWidth(24),
  width25: sizeWidth(25),
  width26: sizeWidth(26),
  width27: sizeWidth(27),
  width28: sizeWidth(28),
  width29: sizeWidth(29),
  width30: sizeWidth(30),
  width31: sizeWidth(31),
  width32: sizeWidth(32),
  width33: sizeWidth(33),
  width34: sizeWidth(34),
  width35: sizeWidth(35),
  width36: sizeWidth(36),
  width37: sizeWidth(37),
  width38: sizeWidth(38),
  width39: sizeWidth(39),
  width40: sizeWidth(40),
  width41: sizeWidth(41),
  width42: sizeWidth(42),
  width43: sizeWidth(43),
  width44: sizeWidth(44),
  width45: sizeWidth(45),
  width46: sizeWidth(46),
  width47: sizeWidth(47),
  width48: sizeWidth(48),
  width49: sizeWidth(49),
  width50: sizeWidth(50),
  width51: sizeWidth(51),
  width52: sizeWidth(52),
  width53: sizeWidth(53),
  width54: sizeWidth(54),
  width55: sizeWidth(55),
  width56: sizeWidth(56),
  width57: sizeWidth(57),
  width58: sizeWidth(58),
  width59: sizeWidth(59),
  width60: sizeWidth(60),
  width61: sizeWidth(61),
  width62: sizeWidth(62),
  width63: sizeWidth(63),
  width64: sizeWidth(64),
  width65: sizeWidth(65),
  width66: sizeWidth(66),
  width67: sizeWidth(67),
  width68: sizeWidth(68),
  width69: sizeWidth(69),
  width70: sizeWidth(70),
  width71: sizeWidth(71),
  width72: sizeWidth(72),
  width73: sizeWidth(73),
  width74: sizeWidth(74),
  width75: sizeWidth(75),
  width76: sizeWidth(76),
  width77: sizeWidth(77),
  width78: sizeWidth(78),
  width79: sizeWidth(79),
  width80: sizeWidth(80),
  width81: sizeWidth(81),
  width82: sizeWidth(82),
  width83: sizeWidth(83),
  width84: sizeWidth(84),
  width85: sizeWidth(85),
  width86: sizeWidth(86),
  width87: sizeWidth(87),
  width88: sizeWidth(88),
  width89: sizeWidth(89),
  width90: sizeWidth(90),
  width91: sizeWidth(91),
  width92: sizeWidth(92),
  width93: sizeWidth(93),
  width94: sizeWidth(94),
  width95: sizeWidth(95),
  width96: sizeWidth(96),
  width97: sizeWidth(97),
  width98: sizeWidth(98),
  width99: sizeWidth(99),
  width100: sizeWidth(100),
  width101: sizeWidth(101),
  width102: sizeWidth(102),
  width103: sizeWidth(103),
  width104: sizeWidth(104),
  width105: sizeWidth(105),
  width106: sizeWidth(106),
  width107: sizeWidth(107),
  width108: sizeWidth(108),
  width109: sizeWidth(109),
  width110: sizeWidth(110),
  width111: sizeWidth(111),
  width112: sizeWidth(112),
  width113: sizeWidth(113),
  width114: sizeWidth(114),
  width115: sizeWidth(115),
  width116: sizeWidth(116),
  width117: sizeWidth(117),
  width118: sizeWidth(118),
  width119: sizeWidth(119),
  width120: sizeWidth(120),
  width121: sizeWidth(121),
  width122: sizeWidth(122),
  width123: sizeWidth(123),
  width124: sizeWidth(124),
  width125: sizeWidth(125),
  width126: sizeWidth(126),
  width127: sizeWidth(127),
  width128: sizeWidth(128),
  width129: sizeWidth(129),
  width130: sizeWidth(130),
  width131: sizeWidth(131),
  width132: sizeWidth(132),
  width133: sizeWidth(133),
  width134: sizeWidth(134),
  width135: sizeWidth(135),
  width136: sizeWidth(136),
  width137: sizeWidth(137),
  width138: sizeWidth(138),
  width139: sizeWidth(139),
  width140: sizeWidth(140),
  width141: sizeWidth(141),
  width142: sizeWidth(142),
  width143: sizeWidth(143),
  width144: sizeWidth(144),
  width145: sizeWidth(145),
  width146: sizeWidth(146),
  width147: sizeWidth(147),
  width148: sizeWidth(148),
  width149: sizeWidth(149),
  width150: sizeWidth(150),
  width151: sizeWidth(151),
  width152: sizeWidth(152),
  width153: sizeWidth(153),
  width154: sizeWidth(154),
  width155: sizeWidth(155),
  width156: sizeWidth(156),
  width157: sizeWidth(157),
  width158: sizeWidth(158),
  width159: sizeWidth(159),
  width160: sizeWidth(160),
  width161: sizeWidth(161),
  width162: sizeWidth(162),
  width163: sizeWidth(163),
  width164: sizeWidth(164),
  width165: sizeWidth(165),
  width166: sizeWidth(166),
  width167: sizeWidth(167),
  width168: sizeWidth(168),
  width169: sizeWidth(169),
  width170: sizeWidth(170),
  width171: sizeWidth(171),
  width172: sizeWidth(172),
  width173: sizeWidth(173),
  width174: sizeWidth(174),
  width175: sizeWidth(175),
  width176: sizeWidth(176),
  width177: sizeWidth(177),
  width178: sizeWidth(178),
  width179: sizeWidth(179),
  width180: sizeWidth(180),
  width181: sizeWidth(181),
  width182: sizeWidth(182),
  width183: sizeWidth(183),
  width184: sizeWidth(184),
  width185: sizeWidth(185),
  width186: sizeWidth(186),
  width187: sizeWidth(187),
  width188: sizeWidth(188),
  width189: sizeWidth(189),
  width190: sizeWidth(190),
  width191: sizeWidth(191),
  width192: sizeWidth(192),
  width193: sizeWidth(193),
  width194: sizeWidth(194),
  width195: sizeWidth(195),
  width196: sizeWidth(196),
  width197: sizeWidth(197),
  width198: sizeWidth(198),
  width199: sizeWidth(199),
  width200: sizeWidth(200),
  width207: sizeWidth(207),
  width215: sizeWidth(215),
  width220: sizeWidth(220),
  width225: sizeWidth(225),
  width232: sizeWidth(232),
  width240: sizeWidth(240),
  width243: sizeWidth(243),
  width262: sizeWidth(262),
  width275: sizeWidth(275),
  width288: sizeWidth(288),
  width289: sizeWidth(289),
  width299: sizeWidth(299),
  width302: sizeWidth(302),
  width303: sizeWidth(303),
  width304: sizeWidth(304),
  width335: sizeWidth(335),
  width397: sizeWidth(397),
  width440: sizeWidth(440),
  height1: sizeHeight(1),
  height2: sizeHeight(2),
  height3: sizeHeight(3),
  height4: sizeHeight(4),
  height5: sizeHeight(5),
  height6: sizeHeight(6),
  height7: sizeHeight(7),
  height8: sizeHeight(8),
  height9: sizeHeight(9),
  height10: sizeHeight(10),
  height11: sizeHeight(11),
  height12: sizeHeight(12),
  height13: sizeHeight(13),
  height14: sizeHeight(14),
  height15: sizeHeight(15),
  height16: sizeHeight(16),
  height17: sizeHeight(17),
  height18: sizeHeight(18),
  height19: sizeHeight(19),
  height20: sizeHeight(20),
  height21: sizeHeight(21),
  height22: sizeHeight(22),
  height23: sizeHeight(23),
  height24: sizeHeight(24),
  height25: sizeHeight(25),
  height26: sizeHeight(26),
  height27: sizeHeight(27),
  height28: sizeHeight(28),
  height29: sizeHeight(29),
  height30: sizeHeight(30),
  height31: sizeHeight(31),
  height32: sizeHeight(32),
  height33: sizeHeight(33),
  height34: sizeHeight(34),
  height35: sizeHeight(35),
  height36: sizeHeight(36),
  height37: sizeHeight(37),
  height38: sizeHeight(38),
  height39: sizeHeight(39),
  height40: sizeHeight(40),
  height41: sizeHeight(41),
  height42: sizeHeight(42),
  height43: sizeHeight(43),
  height44: sizeHeight(44),
  height45: sizeHeight(45),
  height46: sizeHeight(46),
  height47: sizeHeight(47),
  height48: sizeHeight(48),
  height49: sizeHeight(49),
  height50: sizeHeight(50),
  height51: sizeHeight(51),
  height52: sizeHeight(52),
  height53: sizeHeight(53),
  height54: sizeHeight(54),
  height55: sizeHeight(55),
  height56: sizeHeight(56),
  height57: sizeHeight(57),
  height58: sizeHeight(58),
  height59: sizeHeight(59),
  height60: sizeHeight(60),
  height61: sizeHeight(61),
  height62: sizeHeight(62),
  height63: sizeHeight(63),
  height64: sizeHeight(64),
  height65: sizeHeight(65),
  height66: sizeHeight(66),
  height67: sizeHeight(67),
  height68: sizeHeight(68),
  height69: sizeHeight(69),
  height70: sizeHeight(70),
  height71: sizeHeight(71),
  height72: sizeHeight(72),
  height73: sizeHeight(73),
  height74: sizeHeight(74),
  height75: sizeHeight(75),
  height76: sizeHeight(76),
  height77: sizeHeight(77),
  height78: sizeHeight(78),
  height79: sizeHeight(79),
  height80: sizeHeight(80),
  height81: sizeHeight(81),
  height82: sizeHeight(82),
  height83: sizeHeight(83),
  height84: sizeHeight(84),
  height85: sizeHeight(85),
  height86: sizeHeight(86),
  height87: sizeHeight(87),
  height88: sizeHeight(88),
  height89: sizeHeight(89),
  height90: sizeHeight(90),
  height91: sizeHeight(91),
  height92: sizeHeight(92),
  height93: sizeHeight(93),
  height94: sizeHeight(94),
  height95: sizeHeight(95),
  height96: sizeHeight(96),
  height97: sizeHeight(97),
  height98: sizeHeight(98),
  height99: sizeHeight(99),
  height100: sizeHeight(100),
  height101: sizeHeight(101),
  height102: sizeHeight(102),
  height103: sizeHeight(103),
  height104: sizeHeight(104),
  height105: sizeHeight(105),
  height106: sizeHeight(106),
  height107: sizeHeight(107),
  height108: sizeHeight(108),
  height109: sizeHeight(109),
  height110: sizeHeight(110),
  height111: sizeHeight(111),
  height112: sizeHeight(112),
  height113: sizeHeight(113),
  height114: sizeHeight(114),
  height115: sizeHeight(115),
  height116: sizeHeight(116),
  height117: sizeHeight(117),
  height118: sizeHeight(118),
  height119: sizeHeight(119),
  height120: sizeHeight(120),
  height121: sizeHeight(121),
  height122: sizeHeight(122),
  height123: sizeHeight(123),
  height124: sizeHeight(124),
  height125: sizeHeight(125),
  height126: sizeHeight(126),
  height127: sizeHeight(127),
  height128: sizeHeight(128),
  height129: sizeHeight(129),
  height130: sizeHeight(130),
  height131: sizeHeight(131),
  height132: sizeHeight(132),
  height133: sizeHeight(133),
  height134: sizeHeight(134),
  height135: sizeHeight(135),
  height136: sizeHeight(136),
  height137: sizeHeight(137),
  height138: sizeHeight(138),
  height139: sizeHeight(139),
  height140: sizeHeight(140),
  height141: sizeHeight(141),
  height142: sizeHeight(142),
  height143: sizeHeight(143),
  height144: sizeHeight(144),
  height145: sizeHeight(145),
  height146: sizeHeight(146),
  height147: sizeHeight(147),
  height148: sizeHeight(148),
  height149: sizeHeight(149),
  height150: sizeHeight(150),
  height151: sizeHeight(151),
  height152: sizeHeight(152),
  height153: sizeHeight(153),
  height154: sizeHeight(154),
  height155: sizeHeight(155),
  height156: sizeHeight(156),
  height157: sizeHeight(157),
  height158: sizeHeight(158),
  height159: sizeHeight(159),
  height160: sizeHeight(160),
  height161: sizeHeight(161),
  height162: sizeHeight(162),
  height163: sizeHeight(163),
  height164: sizeHeight(164),
  height165: sizeHeight(165),
  height166: sizeHeight(166),
  height167: sizeHeight(167),
  height168: sizeHeight(168),
  height169: sizeHeight(169),
  height170: sizeHeight(170),
  height171: sizeHeight(171),
  height172: sizeHeight(172),
  height173: sizeHeight(173),
  height174: sizeHeight(174),
  height175: sizeHeight(175),
  height176: sizeHeight(176),
  height177: sizeHeight(177),
  height178: sizeHeight(178),
  height179: sizeHeight(179),
  height180: sizeHeight(180),
  height181: sizeHeight(181),
  height182: sizeHeight(182),
  height183: sizeHeight(183),
  height184: sizeHeight(184),
  height185: sizeHeight(185),
  height186: sizeHeight(186),
  height187: sizeHeight(187),
  height188: sizeHeight(188),
  height189: sizeHeight(189),
  height190: sizeHeight(190),
  height191: sizeHeight(191),
  height192: sizeHeight(192),
  height193: sizeHeight(193),
  height194: sizeHeight(194),
  height195: sizeHeight(195),
  height196: sizeHeight(196),
  height197: sizeHeight(197),
  height198: sizeHeight(198),
  height199: sizeHeight(199),
  height200: sizeHeight(200),
  height204: sizeHeight(204),
  height207: sizeHeight(207),
  height208: sizeHeight(208),
  height213: sizeHeight(213),
  height215: sizeHeight(215),
  height220: sizeHeight(220),
  height225: sizeHeight(225),
  height240: sizeHeight(240),
  height250: sizeHeight(250),
  height243: sizeHeight(243),
  height262: sizeHeight(262),
  height275: sizeHeight(275),
  height300: sizeHeight(300),
  height302: sizeHeight(302),
  height303: sizeHeight(303),
  height335: sizeHeight(335),
  height348: sizeHeight(348),
  height375: sizeHeight(375),
  height412: sizeHeight(412),
};
