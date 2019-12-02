import React from 'react'

// import { Fa500px } from 'react-icons/fa'
// import { FaAdjust } from 'react-icons/fa'
import { FaAdn } from 'react-icons/fa'
/*
import { FaAlignCenter } from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa'
import { FaAlignLeft } from 'react-icons/fa'
import { FaAlignRight } from 'react-icons/fa'
import { FaAmazon } from 'react-icons/fa'
import { FaAmbulance } from 'react-icons/fa'
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa'
import { FaAnchor } from 'react-icons/fa'
import { FaAndroid } from 'react-icons/fa'
import { FaAngellist } from 'react-icons/fa'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleUp } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaArchive } from 'react-icons/fa'
import { FaAreaChart } from 'react-icons/fa'
import { FaArrowCircleDown } from 'react-icons/fa'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleODown } from 'react-icons/fa'
import { FaArrowCircleOLeft } from 'react-icons/fa'
import { FaArrowCircleORight } from 'react-icons/fa'
import { FaArrowCircleOUp } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FaArrowCircleUp } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { FaArrowsAlt } from 'react-icons/fa'
import { FaArrowsH } from 'react-icons/fa'
import { FaArrowsV } from 'react-icons/fa'
import { FaArrows } from 'react-icons/fa'
import { FaAssistiveListeningSystems } from 'react-icons/fa'
import { FaAsterisk } from 'react-icons/fa'
import { FaAt } from 'react-icons/fa'
import { FaAudioDescription } from 'react-icons/fa'
import { FaAutomobile } from 'react-icons/fa'
import { FaBackward } from 'react-icons/fa'
import { FaBalanceScale } from 'react-icons/fa'
import { FaBan } from 'react-icons/fa'
import { FaBank } from 'react-icons/fa'
import { FaBarChart } from 'react-icons/fa'
import { FaBarcode } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { FaBattery0 } from 'react-icons/fa'
import { FaBattery1 } from 'react-icons/fa'
import { FaBattery2 } from 'react-icons/fa'
import { FaBattery3 } from 'react-icons/fa'
import { FaBattery4 } from 'react-icons/fa'
import { FaBed } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa'
import { FaBehanceSquare } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'
import { FaBellO } from 'react-icons/fa'
import { FaBellSlashO } from 'react-icons/fa'
import { FaBellSlash } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaBicycle } from 'react-icons/fa'
import { FaBinoculars } from 'react-icons/fa'
import { FaBirthdayCake } from 'react-icons/fa'
import { FaBitbucketSquare } from 'react-icons/fa'
import { FaBitbucket } from 'react-icons/fa'
import { FaBitcoin } from 'react-icons/fa'
import { FaBlackTie } from 'react-icons/fa'
import { FaBlind } from 'react-icons/fa'
import { FaBluetoothB } from 'react-icons/fa'
import { FaBluetooth } from 'react-icons/fa'
import { FaBold } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa'
import { FaBomb } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { FaBookmarkO } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'
import { FaBraille } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'
import { FaBug } from 'react-icons/fa'
import { FaBuildingO } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaBullhorn } from 'react-icons/fa'
import { FaBullseye } from 'react-icons/fa'
import { FaBus } from 'react-icons/fa'
import { FaBuysellads } from 'react-icons/fa'
import { FaCab } from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa'
import { FaCalendarCheckO } from 'react-icons/fa'
import { FaCalendarMinusO } from 'react-icons/fa'
import { FaCalendarO } from 'react-icons/fa'
import { FaCalendarPlusO } from 'react-icons/fa'
import { FaCalendarTimesO } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { FaCameraRetro } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa'
import { FaCaretLeft } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa'
import { FaCaretSquareODown } from 'react-icons/fa'
import { FaCaretSquareOLeft } from 'react-icons/fa'
import { FaCaretSquareORight } from 'react-icons/fa'
import { FaCaretSquareOUp } from 'react-icons/fa'
import { FaCaretUp } from 'react-icons/fa'
import { FaCartArrowDown } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'
import { FaCcAmex } from 'react-icons/fa'
import { FaCcDinersClub } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'
import { FaCcJcb } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcPaypal } from 'react-icons/fa'
import { FaCcStripe } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCc } from 'react-icons/fa'
import { FaCertificate } from 'react-icons/fa'
import { FaChainBroken } from 'react-icons/fa'
import { FaChain } from 'react-icons/fa'
import { FaCheckCircleO } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCheckSquareO } from 'react-icons/fa'
import { FaCheckSquare } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { FaChevronCircleDown } from 'react-icons/fa'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronCircleUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'
import { FaChild } from 'react-icons/fa'
import { FaChrome } from 'react-icons/fa'
import { FaCircleONotch } from 'react-icons/fa'
import { FaCircleO } from 'react-icons/fa'
import { FaCircleThin } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import { FaClipboard } from 'react-icons/fa'
import { FaClockO } from 'react-icons/fa'
import { FaClone } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { FaCloudDownload } from 'react-icons/fa'
import { FaCloudUpload } from 'react-icons/fa'
import { FaCloud } from 'react-icons/fa'
import { FaCny } from 'react-icons/fa'
import { FaCodeFork } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'
import { FaCodiepie } from 'react-icons/fa'
import { FaCoffee } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { FaCogs } from 'react-icons/fa'
import { FaColumns } from 'react-icons/fa'
import { FaCommentO } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { FaCommentingO } from 'react-icons/fa'
import { FaCommenting } from 'react-icons/fa'
import { FaCommentsO } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'
import { FaCompass } from 'react-icons/fa'
import { FaCompress } from 'react-icons/fa'
import { FaConnectdevelop } from 'react-icons/fa'
import { FaContao } from 'react-icons/fa'
import { FaCopy } from 'react-icons/fa'
import { FaCopyright } from 'react-icons/fa'
import { FaCreativeCommons } from 'react-icons/fa'
import { FaCreditCardAlt } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { FaCrop } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaCube } from 'react-icons/fa'
import { FaCubes } from 'react-icons/fa'
import { FaCut } from 'react-icons/fa'
import { FaCutlery } from 'react-icons/fa'
import { FaDashboard } from 'react-icons/fa'
import { FaDashcube } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaDeaf } from 'react-icons/fa'
import { FaDedent } from 'react-icons/fa'
import { FaDelicious } from 'react-icons/fa'
import { FaDesktop } from 'react-icons/fa'
import { FaDeviantart } from 'react-icons/fa'
import { FaDiamond } from 'react-icons/fa'
import { FaDigg } from 'react-icons/fa'
import { FaDollar } from 'react-icons/fa'
import { FaDotCircleO } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
import { FaDropbox } from 'react-icons/fa'
import { FaDrupal } from 'react-icons/fa'
import { FaEdge } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaEject } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import { FaEllipsisV } from 'react-icons/fa'
import { FaEmpire } from 'react-icons/fa'
import { FaEnvelopeO } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaEnvira } from 'react-icons/fa'
import { FaEraser } from 'react-icons/fa'
import { FaEur } from 'react-icons/fa'
import { FaExchange } from 'react-icons/fa'
import { FaExclamationCircle } from 'react-icons/fa'
import { FaExclamationTriangle } from 'react-icons/fa'
import { FaExclamation } from 'react-icons/fa'
import { FaExpand } from 'react-icons/fa'
import { FaExpeditedssl } from 'react-icons/fa'
import { FaExternalLinkSquare } from 'react-icons/fa'
import { FaExternalLink } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { FaEyedropper } from 'react-icons/fa'
import { FaFacebookOfficial } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaFastBackward } from 'react-icons/fa'
import { FaFastForward } from 'react-icons/fa'
import { FaFax } from 'react-icons/fa'
import { FaFeed } from 'react-icons/fa'
import { FaFemale } from 'react-icons/fa'
import { FaFighterJet } from 'react-icons/fa'
import { FaFileArchiveO } from 'react-icons/fa'
import { FaFileAudioO } from 'react-icons/fa'
import { FaFileCodeO } from 'react-icons/fa'
import { FaFileExcelO } from 'react-icons/fa'
import { FaFileImageO } from 'react-icons/fa'
import { FaFileMovieO } from 'react-icons/fa'
import { FaFileO } from 'react-icons/fa'
import { FaFilePdfO } from 'react-icons/fa'
import { FaFilePowerpointO } from 'react-icons/fa'
import { FaFileTextO } from 'react-icons/fa'
import { FaFileText } from 'react-icons/fa'
import { FaFileWordO } from 'react-icons/fa'
import { FaFile } from 'react-icons/fa'
import { FaFilm } from 'react-icons/fa'
import { FaFilter } from 'react-icons/fa'
import { FaFireExtinguisher } from 'react-icons/fa'
import { FaFire } from 'react-icons/fa'
import { FaFirefox } from 'react-icons/fa'
import { FaFlagCheckered } from 'react-icons/fa'
import { FaFlagO } from 'react-icons/fa'
import { FaFlag } from 'react-icons/fa'
import { FaFlask } from 'react-icons/fa'
import { FaFlickr } from 'react-icons/fa'
import { FaFloppyO } from 'react-icons/fa'
import { FaFolderO } from 'react-icons/fa'
import { FaFolderOpenO } from 'react-icons/fa'
import { FaFolderOpen } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import { FaFont } from 'react-icons/fa'
import { FaFonticons } from 'react-icons/fa'
import { FaFortAwesome } from 'react-icons/fa'
import { FaForumbee } from 'react-icons/fa'
import { FaForward } from 'react-icons/fa'
import { FaFoursquare } from 'react-icons/fa'
import { FaFrownO } from 'react-icons/fa'
import { FaFutbolO } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { FaGavel } from 'react-icons/fa'
import { FaGbp } from 'react-icons/fa'
import { FaGenderless } from 'react-icons/fa'
import { FaGetPocket } from 'react-icons/fa'
import { FaGgCircle } from 'react-icons/fa'
import { FaGg } from 'react-icons/fa'
import { FaGift } from 'react-icons/fa'
import { FaGitSquare } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa'
import { FaGittip } from 'react-icons/fa'
import { FaGlass } from 'react-icons/fa'
import { FaGlideG } from 'react-icons/fa'
import { FaGlide } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { FaGooglePlusSquare } from 'react-icons/fa'
import { FaGooglePlus } from 'react-icons/fa'
import { FaGoogleWallet } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import { FaGroup } from 'react-icons/fa'
import { FaHSquare } from 'react-icons/fa'
import { FaHackerNews } from 'react-icons/fa'
import { FaHandGrabO } from 'react-icons/fa'
import { FaHandLizardO } from 'react-icons/fa'
import { FaHandODown } from 'react-icons/fa'
import { FaHandOLeft } from 'react-icons/fa'
import { FaHandORight } from 'react-icons/fa'
import { FaHandOUp } from 'react-icons/fa'
import { FaHandPaperO } from 'react-icons/fa'
import { FaHandPeaceO } from 'react-icons/fa'
import { FaHandPointerO } from 'react-icons/fa'
import { FaHandScissorsO } from 'react-icons/fa'
import { FaHandSpockO } from 'react-icons/fa'
import { FaHashtag } from 'react-icons/fa'
import { FaHddO } from 'react-icons/fa'
import { FaHeader } from 'react-icons/fa'
import { FaHeadphones } from 'react-icons/fa'
import { FaHeartO } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'
import { FaHistory } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaHospitalO } from 'react-icons/fa'
import { FaHourglass1 } from 'react-icons/fa'
import { FaHourglass2 } from 'react-icons/fa'
import { FaHourglass3 } from 'react-icons/fa'
import { FaHourglassO } from 'react-icons/fa'
import { FaHourglass } from 'react-icons/fa'
import { FaHouzz } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaICursor } from 'react-icons/fa'
import { FaIls } from 'react-icons/fa'
import { FaImage } from 'react-icons/fa'
import { FaInbox } from 'react-icons/fa'
import { FaIndent } from 'react-icons/fa'
import { FaIndustry } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
import { FaInfo } from 'react-icons/fa'
import { FaInr } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaInternetExplorer } from 'react-icons/fa'
import { FaIntersex } from 'react-icons/fa'
import { FaIoxhost } from 'react-icons/fa'
import { FaItalic } from 'react-icons/fa'
import { FaJoomla } from 'react-icons/fa'
import { FaJsfiddle } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'
import { FaKeyboardO } from 'react-icons/fa'
import { FaKrw } from 'react-icons/fa'
import { FaLanguage } from 'react-icons/fa'
import { FaLaptop } from 'react-icons/fa'
import { FaLastfmSquare } from 'react-icons/fa'
import { FaLastfm } from 'react-icons/fa'
import { FaLeaf } from 'react-icons/fa'
import { FaLeanpub } from 'react-icons/fa'
import { FaLemonO } from 'react-icons/fa'
import { FaLevelDown } from 'react-icons/fa'
import { FaLevelUp } from 'react-icons/fa'
import { FaLifeBouy } from 'react-icons/fa'
import { FaLightbulbO } from 'react-icons/fa'
import { FaLineChart } from 'react-icons/fa'
import { FaLinkedinSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaLinux } from 'react-icons/fa'
import { FaListAlt } from 'react-icons/fa'
import { FaListOl } from 'react-icons/fa'
import { FaListUl } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaLongArrowDown } from 'react-icons/fa'
import { FaLongArrowLeft } from 'react-icons/fa'
import { FaLongArrowRight } from 'react-icons/fa'
import { FaLongArrowUp } from 'react-icons/fa'
import { FaLowVision } from 'react-icons/fa'
import { FaMagic } from 'react-icons/fa'
import { FaMagnet } from 'react-icons/fa'
import { FaMailForward } from 'react-icons/fa'
import { FaMailReplyAll } from 'react-icons/fa'
import { FaMailReply } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'
import { FaMapMarker } from 'react-icons/fa'
import { FaMapO } from 'react-icons/fa'
import { FaMapPin } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaMap } from 'react-icons/fa'
import { FaMarsDouble } from 'react-icons/fa'
import { FaMarsStrokeH } from 'react-icons/fa'
import { FaMarsStrokeV } from 'react-icons/fa'
import { FaMarsStroke } from 'react-icons/fa'
import { FaMars } from 'react-icons/fa'
import { FaMaxcdn } from 'react-icons/fa'
import { FaMeanpath } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'
import { FaMedkit } from 'react-icons/fa'
import { FaMehO } from 'react-icons/fa'
import { FaMercury } from 'react-icons/fa'
import { FaMicrophoneSlash } from 'react-icons/fa'
import { FaMicrophone } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'
import { FaMinusSquareO } from 'react-icons/fa'
import { FaMinusSquare } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { FaMixcloud } from 'react-icons/fa'
import { FaMobile } from 'react-icons/fa'
import { FaModx } from 'react-icons/fa'
import { FaMoney } from 'react-icons/fa'
import { FaMoonO } from 'react-icons/fa'
import { FaMotorcycle } from 'react-icons/fa'
import { FaMousePointer } from 'react-icons/fa'
import { FaMusic } from 'react-icons/fa'
import { FaNeuter } from 'react-icons/fa'
import { FaNewspaperO } from 'react-icons/fa'
import { FaObjectGroup } from 'react-icons/fa'
import { FaObjectUngroup } from 'react-icons/fa'
import { FaOdnoklassnikiSquare } from 'react-icons/fa'
import { FaOdnoklassniki } from 'react-icons/fa'
import { FaOpencart } from 'react-icons/fa'
import { FaOpenid } from 'react-icons/fa'
import { FaOpera } from 'react-icons/fa'
import { FaOptinMonster } from 'react-icons/fa'
import { FaPagelines } from 'react-icons/fa'
import { FaPaintBrush } from 'react-icons/fa'
import { FaPaperPlaneO } from 'react-icons/fa'
import { FaPaperPlane } from 'react-icons/fa'
import { FaPaperclip } from 'react-icons/fa'
import { FaParagraph } from 'react-icons/fa'
import { FaPauseCircleO } from 'react-icons/fa'
import { FaPauseCircle } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'
import { FaPaw } from 'react-icons/fa'
import { FaPaypal } from 'react-icons/fa'
import { FaPencilSquare } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa'
import { FaPercent } from 'react-icons/fa'
import { FaPhoneSquare } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaPieChart } from 'react-icons/fa'
import { FaPiedPiperAlt } from 'react-icons/fa'
import { FaPiedPiper } from 'react-icons/fa'
import { FaPinterestP } from 'react-icons/fa'
import { FaPinterestSquare } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaPlane } from 'react-icons/fa'
import { FaPlayCircleO } from 'react-icons/fa'
import { FaPlayCircle } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { FaPlug } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'
import { FaPlusSquareO } from 'react-icons/fa'
import { FaPlusSquare } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaPowerOff } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa'
import { FaProductHunt } from 'react-icons/fa'
import { FaPuzzlePiece } from 'react-icons/fa'
import { FaQq } from 'react-icons/fa'
import { FaQrcode } from 'react-icons/fa'
import { FaQuestionCircleO } from 'react-icons/fa'
import { FaQuestionCircle } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import { FaRa } from 'react-icons/fa'
import { FaRandom } from 'react-icons/fa'
import { FaRecycle } from 'react-icons/fa'
import { FaRedditAlien } from 'react-icons/fa'
import { FaRedditSquare } from 'react-icons/fa'
import { FaReddit } from 'react-icons/fa'
import { FaRefresh } from 'react-icons/fa'
import { FaRegistered } from 'react-icons/fa'
import { FaRenren } from 'react-icons/fa'
import { FaRepeat } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'
import { FaRoad } from 'react-icons/fa'
import { FaRocket } from 'react-icons/fa'
import { FaRotateLeft } from 'react-icons/fa'
import { FaRouble } from 'react-icons/fa'
import { FaRssSquare } from 'react-icons/fa'
import { FaSafari } from 'react-icons/fa'
import { FaScribd } from 'react-icons/fa'
import { FaSearchMinus } from 'react-icons/fa'
import { FaSearchPlus } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaSellsy } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'
import { FaShareAltSquare } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import { FaShareSquareO } from 'react-icons/fa'
import { FaShareSquare } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa'
import { FaShip } from 'react-icons/fa'
import { FaShirtsinbulk } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { FaShoppingBasket } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { FaSignIn } from 'react-icons/fa'
import { FaSignLanguage } from 'react-icons/fa'
import { FaSignOut } from 'react-icons/fa'
import { FaSignal } from 'react-icons/fa'
import { FaSimplybuilt } from 'react-icons/fa'
import { FaSitemap } from 'react-icons/fa'
import { FaSkyatlas } from 'react-icons/fa'
import { FaSkype } from 'react-icons/fa'
import { FaSlack } from 'react-icons/fa'
import { FaSliders } from 'react-icons/fa'
import { FaSlideshare } from 'react-icons/fa'
import { FaSmileO } from 'react-icons/fa'
import { FaSnapchatGhost } from 'react-icons/fa'
import { FaSnapchatSquare } from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa'
import { MdAcUnit, MdWhatshot, MdZoomOutMap } from 'react-icons/md'
import { FaSortAlphaAsc } from 'react-icons/fa'
import { FaSortAlphaDesc } from 'react-icons/fa'
import { FaSortAmountAsc } from 'react-icons/fa'
import { FaSortAmountDesc } from 'react-icons/fa'
import { FaSortAsc } from 'react-icons/fa'
import { FaSortDesc } from 'react-icons/fa'
import { FaSortNumericAsc } from 'react-icons/fa'
import { FaSortNumericDesc } from 'react-icons/fa'
import { FaSort } from 'react-icons/fa'
import { FaSoundcloud } from 'react-icons/fa'
import { FaSpaceShuttle } from 'react-icons/fa'
import { FaSpinner } from 'react-icons/fa'
import { FaSpoon } from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import { FaSquareO } from 'react-icons/fa'
import { FaSquare } from 'react-icons/fa'
import { FaStackExchange } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'
import { FaStarHalfEmpty } from 'react-icons/fa'
import { FaStarHalf } from 'react-icons/fa'
import { FaStarO } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaSteamSquare } from 'react-icons/fa'
import { FaSteam } from 'react-icons/fa'
import { FaStepBackward } from 'react-icons/fa'
import { FaStepForward } from 'react-icons/fa'
import { FaStethoscope } from 'react-icons/fa'
import { FaStickyNoteO } from 'react-icons/fa'
import { FaStickyNote } from 'react-icons/fa'
import { FaStopCircleO } from 'react-icons/fa'
import { FaStopCircle } from 'react-icons/fa'
import { FaStop } from 'react-icons/fa'
import { FaStreetView } from 'react-icons/fa'
import { FaStrikethrough } from 'react-icons/fa'
import { FaStumbleuponCircle } from 'react-icons/fa'
import { FaStumbleupon } from 'react-icons/fa'
import { FaSubscript } from 'react-icons/fa'
import { FaSubway } from 'react-icons/fa'
import { FaSuitcase } from 'react-icons/fa'
import { FaSunO } from 'react-icons/fa'
import { FaSuperscript } from 'react-icons/fa'
import { FaTable } from 'react-icons/fa'
import { FaTablet } from 'react-icons/fa'
import { FaTag } from 'react-icons/fa'
import { FaTags } from 'react-icons/fa'
import { FaTasks } from 'react-icons/fa'
import { FaTv } from 'react-icons/fa'
import { FaTencentWeibo } from 'react-icons/fa'
import { FaTerminal } from 'react-icons/fa'
import { FaTextHeight } from 'react-icons/fa'
import { FaTextWidth } from 'react-icons/fa'
import { FaThLarge } from 'react-icons/fa'
import { FaThList } from 'react-icons/fa'
import { FaTh } from 'react-icons/fa'
import { FaThumbTack } from 'react-icons/fa'
import { FaThumbsDown } from 'react-icons/fa'
import { FaThumbsODown } from 'react-icons/fa'
import { FaThumbsOUp } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa'
import { FaTimesCircleO } from 'react-icons/fa'
import { FaTimesCircle } from 'react-icons/fa'
import { FaTint } from 'react-icons/fa'
import { FaToggleOff } from 'react-icons/fa'
import { FaToggleOn } from 'react-icons/fa'
import { FaTrademark } from 'react-icons/fa'
import { FaTrain } from 'react-icons/fa'
import { FaTransgenderAlt } from 'react-icons/fa'
import { FaTrashO } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { FaTree } from 'react-icons/fa'
import { FaTrello } from 'react-icons/fa'
import { FaTripadvisor } from 'react-icons/fa'
import { FaTrophy } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa'
import { FaTry } from 'react-icons/fa'
import { FaTty } from 'react-icons/fa'
import { FaTumblrSquare } from 'react-icons/fa'
import { FaTumblr } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaUmbrella } from 'react-icons/fa'
import { FaUnderline } from 'react-icons/fa'
import { FaUniversalAccess } from 'react-icons/fa'
import { FaUnlockAlt } from 'react-icons/fa'
import { FaUnlock } from 'react-icons/fa'
import { FaUpload } from 'react-icons/fa'
import { FaUsb } from 'react-icons/fa'
import { FaUserMd } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { FaUserSecret } from 'react-icons/fa'
import { FaUserTimes } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaVenusDouble } from 'react-icons/fa'
import { FaVenusMars } from 'react-icons/fa'
import { FaVenus } from 'react-icons/fa'
import { FaViacoin } from 'react-icons/fa'
import { FaViadeoSquare } from 'react-icons/fa'
import { FaViadeo } from 'react-icons/fa'
import { FaVideoCamera } from 'react-icons/fa'
import { FaVimeoSquare } from 'react-icons/fa'
import { FaVimeo } from 'react-icons/fa'
import { FaVine } from 'react-icons/fa'
import { FaVk } from 'react-icons/fa'
import { FaVolumeControlPhone } from 'react-icons/fa'
import { FaVolumeDown } from 'react-icons/fa'
import { FaVolumeOff } from 'react-icons/fa'
import { FaVolumeUp } from 'react-icons/fa'
import { FaWechat } from 'react-icons/fa'
import { FaWeibo } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaWheelchairAlt } from 'react-icons/fa'
import { FaWheelchair } from 'react-icons/fa'
import { FaWifi } from 'react-icons/fa'
import { FaWikipediaW } from 'react-icons/fa'
import { FaWindows } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { FaWpbeginner } from 'react-icons/fa'
import { FaWpforms } from 'react-icons/fa'
import { FaWrench } from 'react-icons/fa'
import { FaXingSquare } from 'react-icons/fa'
import { FaXing } from 'react-icons/fa'
import { FaYCombinator } from 'react-icons/fa'
import { FaYahoo } from 'react-icons/fa'
import { FaYelp } from 'react-icons/fa'
import { FaYoutubePlay } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
*/
/**
 *
 * @param Nombre_del_Ícono_en_mayúscula
 * @returns Icono según librería: react-icons/fa
 */
const Icon = ({ name }) => {
	const generalIcons = {
		// FiveHundredPX: Fa500px,
		// Adjust: FaAdjust,
		Adn: FaAdn
		/*
		AlignCenter: FaAlignCenter,
		AlignJustify: FaAlignJustify,
		AlignLeft: FaAlignLeft,
		AlignRight: FaAlignRight,
		Amazon: FaAmazon,
		Ambulance: FaAmbulance,
		AmericanSignLanguageInterpreting: FaAmericanSignLanguageInterpreting,
		Anchor: FaAnchor,
		Android: FaAndroid,
		Angellist: FaAngellist,
		AngleDoubleDown: FaAngleDoubleDown,
		AngleDoubleLeft: FaAngleDoubleLeft,
		AngleDoubleRight: FaAngleDoubleRight,
		AngleDoubleUp: FaAngleDoubleUp,
		AngleDown: FaAngleDown,
		AngleLeft: FaAngleLeft,
		AngleRight: FaAngleRight,
		AngleUp: FaAngleUp,
		Apple: FaApple,
		Archive: FaArchive,
		AreaChart: FaAreaChart,
		ArrowCircleDown: FaArrowCircleDown,
		ArrowCircleLeft: FaArrowCircleLeft,
		ArrowCircleODown: FaArrowCircleODown,
		ArrowCircleOLeft: FaArrowCircleOLeft,
		ArrowCircleORight: FaArrowCircleORight,
		ArrowCircleOUp: FaArrowCircleOUp,
		ArrowCircleRight: FaArrowCircleRight,
		ArrowCircleUp: FaArrowCircleUp,
		ArrowDown: FaArrowDown,
		ArrowLeft: FaArrowLeft,
		ArrowRight: FaArrowRight,
		ArrowUp: FaArrowUp,
		ArrowsAlt: FaArrowsAlt,
		ArrowsH: FaArrowsH,
		ArrowsV: FaArrowsV,
		Arrows: FaArrows,
		AssistiveListeningSystems: FaAssistiveListeningSystems,
		Asterisk: FaAsterisk,
		At: FaAt,
		AudioDescription: FaAudioDescription,
		Automobile: FaAutomobile,
		Backward: FaBackward,
		BalanceScale: FaBalanceScale,
		Ban: FaBan,
		Bank: FaBank,
		BarChart: FaBarChart,
		Barcode: FaBarcode,
		Battery1: FaBattery1,
		Bars: FaBars,
		Battery4: FaBattery4,
		Battery3: FaBattery3,
		Bed: FaBed,
		Beer: FaBeer,
		BehanceSquare: FaBehanceSquare,
		Behance: FaBehance,
		BellO: FaBellO,
		BellSlashO: FaBellSlashO,
		BellSlash: FaBellSlash,
		Bell: FaBell,
		Bicycle: FaBicycle,
		BirthdayCake: FaBirthdayCake,
		Bitbucket: FaBitbucket,
		Binoculars: FaBinoculars,
		BitbucketSquare: FaBitbucketSquare,
		Bitcoin: FaBitcoin,
		BlackTie: FaBlackTie,
		Blind: FaBlind,
		Bluetooth: FaBluetooth,
		BluetoothB: FaBluetoothB,
		Bold: FaBold,
		Bolt: FaBolt,
		Battery0: FaBattery0,
		Bomb: FaBomb,
		Battery2: FaBattery2,
		Book: FaBook,
		BookmarkO: FaBookmarkO,
		Bookmark: FaBookmark,
		Bug: FaBug,
		Briefcase: FaBriefcase,
		Braille: FaBraille,
		Building: FaBuilding,
		Bullhorn: FaBullhorn,
		BuildingO: FaBuildingO,
		Bullseye: FaBullseye,
		Bus: FaBus,
		Buysellads: FaBuysellads,
		Cab: FaCab,
		Calculator: FaCalculator,
		CalendarCheckO: FaCalendarCheckO,
		CalendarMinusO: FaCalendarMinusO,
		CalendarPlusO: FaCalendarPlusO,
		CalendarO: FaCalendarO,
		Calendar: FaCalendar,
		CalendarTimesO: FaCalendarTimesO,
		Camera: FaCamera,
		CameraRetro: FaCameraRetro,
		CaretDown: FaCaretDown,
		CaretLeft: FaCaretLeft,
		CaretRight: FaCaretRight,
		CaretSquareODown: FaCaretSquareODown,
		CaretSquareOLeft: FaCaretSquareOLeft,
		CaretSquareORight: FaCaretSquareORight,
		CaretSquareOUp: FaCaretSquareOUp,
		CaretUp: FaCaretUp,
		CartArrowDown: FaCartArrowDown,
		CartPlus: FaCartPlus,
		CcAmex: FaCcAmex,
		CcDinersClub: FaCcDinersClub,
		CcJcb: FaCcJcb,
		CcDiscover: FaCcDiscover,
		CcMastercard: FaCcMastercard,
		CcStripe: FaCcStripe,
		ChainBroken: FaChainBroken,
		Certificate: FaCertificate,
		Chain: FaChain,
		CcVisa: FaCcVisa,
		Cc: FaCc,
		CheckCircleO: FaCheckCircleO,
		CheckSquareO: FaCheckSquareO,
		CheckSquare: FaCheckSquare,
		CheckCircle: FaCheckCircle,
		Check: FaCheck,
		ChevronCircleLeft: FaChevronCircleLeft,
		ChevronCircleRight: FaChevronCircleRight,
		ChevronCircleUp: FaChevronCircleUp,
		ChevronCircleDown: FaChevronCircleDown,
		ChevronDown: FaChevronDown,
		ChevronLeft: FaChevronLeft,
		ChevronRight: FaChevronRight,
		ChevronUp: FaChevronUp,
		Child: FaChild,
		Chrome: FaChrome,
		CircleONotch: FaCircleONotch,
		CircleO: FaCircleO,
		Circle: FaCircle,
		CircleThin: FaCircleThin,
		Clipboard: FaClipboard,
		ClockO: FaClockO,
		Clone: FaClone,
		Close: MdClose,
		CloudUpload: FaCloudUpload,
		CloudDownload: FaCloudDownload,
		Cloud: FaCloud,
		Cny: FaCny,
		CodeFork: FaCodeFork,
		Code: FaCode,
		Codiepie: FaCodiepie,
		Coffee: FaCoffee,
		Codepen: FaCodepen,
		Cog: FaCog,
		Cogs: FaCogs,
		Columns: FaColumns,
		CommentO: FaCommentO,
		Comment: FaComment,
		CommentingO: FaCommentingO,
		Commenting: FaCommenting,
		CommentsO: FaCommentsO,
		Comments: FaComments,
		Compass: FaCompass,
		Compress: FaCompress,
		Contao: FaContao,
		Connectdevelop: FaConnectdevelop,
		Copy: FaCopy,
		Copyright: FaCopyright,
		CreativeCommons: FaCreativeCommons,
		CreditCardAlt: FaCreditCardAlt,
		CreditCard: FaCreditCard,
		Crop: FaCrop,
		Crosshairs: FaCrosshairs,
		Css3: FaCss3,
		Cube: FaCube,
		Cut: FaCut,
		Cubes: FaCubes,
		Cutlery: FaCutlery,
		Dashboard: FaDashboard,
		Dashcube: FaDashcube,
		Database: FaDatabase,
		Deaf: FaDeaf,
		Desktop: FaDesktop,
		Delicious: FaDelicious,
		Dedent: FaDedent,
		Diamond: FaDiamond,
		Deviantart: FaDeviantart,
		Digg: FaDigg,
		DotCircleO: FaDotCircleO,
		Dollar: FaDollar,
		Download: FaDownload,
		Dribbble: FaDribbble,
		Dropbox: FaDropbox,
		Edge: FaEdge,
		Drupal: FaDrupal,
		Edit: FaEdit,
		Eject: FaEject,
		EllipsisH: FaEllipsisH,
		EllipsisV: FaEllipsisV,
		Empire: FaEmpire,
		EnvelopeO: FaEnvelopeO,
		EnvelopeSquare: FaEnvelopeSquare,
		Envelope: FaEnvelope,
		Eraser: FaEraser,
		Envira: FaEnvira,
		Eur: FaEur,
		Exchange: FaExchange,
		ExclamationCircle: FaExclamationCircle,
		Exclamation: FaExclamation,
		ExclamationTriangle: FaExclamationTriangle,
		Expand: FaExpand,
		ExternalLinkSquare: FaExternalLinkSquare,
		Expeditedssl: FaExpeditedssl,
		ExternalLink: FaExternalLink,
		Eye: FaEye,
		CcPaypal: FaCcPaypal,
		FacebookOfficial: FaFacebookOfficial,
		FacebookSquare: FaFacebookSquare,
		Facebook: FaFacebook,
		EyeSlash: FaEyeSlash,
		FastBackward: FaFastBackward,
		FastForward: FaFastForward,
		Feed: FaFeed,
		Fax: FaFax,
		Female: FaFemale,
		FighterJet: FaFighterJet,
		FileArchiveO: FaFileArchiveO,
		FileAudioO: FaFileAudioO,
		FileCodeO: FaFileCodeO,
		FileExcelO: FaFileExcelO,
		FileMovieO: FaFileMovieO,
		FileImageO: FaFileImageO,
		FileO: FaFileO,
		FilePowerpointO: FaFilePowerpointO,
		FilePdfO: FaFilePdfO,
		FileTextO: FaFileTextO,
		FileWordO: FaFileWordO,
		FileText: FaFileText,
		Filter: FaFilter,
		File: FaFile,
		Film: FaFilm,
		FireExtinguisher: FaFireExtinguisher,
		Fire: FaFire,
		Eyedropper: FaEyedropper,
		FlagCheckered: FaFlagCheckered,
		Flag: FaFlag,
		Flask: FaFlask,
		Flickr: FaFlickr,
		Firefox: FaFirefox,
		FloppyO: FaFloppyO,
		FlagO: FaFlagO,
		FolderO: FaFolderO,
		FolderOpenO: FaFolderOpenO,
		FolderOpen: FaFolderOpen,
		Font: FaFont,
		Folder: FaFolder,
		Fonticons: FaFonticons,
		FortAwesome: FaFortAwesome,
		Forward: FaForward,
		Forumbee: FaForumbee,
		Foursquare: FaFoursquare,
		FrownO: FaFrownO,
		FutbolO: FaFutbolO,
		Gavel: FaGavel,
		Gamepad: FaGamepad,
		Gbp: FaGbp,
		Genderless: FaGenderless,
		GetPocket: FaGetPocket,
		GgCircle: FaGgCircle,
		Gg: FaGg,
		GitSquare: FaGitSquare,
		Gift: FaGift,
		GithubAlt: FaGithubAlt,
		Git: FaGit,
		GithubSquare: FaGithubSquare,
		Github: FaGithub,
		Gitlab: FaGitlab,
		Gittip: FaGittip,
		Glass: FaGlass,
		GlideG: FaGlideG,
		Glide: FaGlide,
		Globe: FaGlobe,
		GooglePlusSquare: FaGooglePlusSquare,
		GooglePlus: FaGooglePlus,
		GoogleWallet: FaGoogleWallet,
		GraduationCap: FaGraduationCap,
		Google: FaGoogle,
		Group: FaGroup,
		HSquare: FaHSquare,
		HackerNews: FaHackerNews,
		HandGrabO: FaHandGrabO,
		HandLizardO: FaHandLizardO,
		HandODown: FaHandODown,
		HandOLeft: FaHandOLeft,
		HandORight: FaHandORight,
		HandPaperO: FaHandPaperO,
		HandPeaceO: FaHandPeaceO,
		HandOUp: FaHandOUp,
		HandPointerO: FaHandPointerO,
		HandSpockO: FaHandSpockO,
		HandScissorsO: FaHandScissorsO,
		HddO: FaHddO,
		Header: FaHeader,
		Hashtag: FaHashtag,
		Headphones: FaHeadphones,
		Heart: FaHeart,
		Heartbeat: FaHeartbeat,
		History: FaHistory,
		HeartO: FaHeartO,
		HospitalO: FaHospitalO,
		Home: FaHome,
		Hourglass3: FaHourglass3,
		Hourglass1: FaHourglass1,
		Hourglass: FaHourglass,
		Houzz: FaHouzz,
		Html5: FaHtml5,
		Ils: FaIls,
		ICursor: FaICursor,
		Hourglass2: FaHourglass2,
		Image: FaImage,
		Inbox: FaInbox,
		Industry: FaIndustry,
		Indent: FaIndent,
		InfoCircle: FaInfoCircle,
		Info: FaInfo,
		Instagram: FaInstagram,
		Inr: FaInr,
		InternetExplorer: FaInternetExplorer,
		Intersex: FaIntersex,
		Joomla: FaJoomla,
		Jsfiddle: FaJsfiddle,
		Ioxhost: FaIoxhost,
		Italic: FaItalic,
		Key: FaKey,
		KeyboardO: FaKeyboardO,
		Krw: FaKrw,
		Language: FaLanguage,
		Laptop: FaLaptop,
		LastfmSquare: FaLastfmSquare,
		Lastfm: FaLastfm,
		Leaf: FaLeaf,
		Leanpub: FaLeanpub,
		LemonO: FaLemonO,
		LevelDown: FaLevelDown,
		LevelUp: FaLevelUp,
		LifeBouy: FaLifeBouy,
		LightbulbO: FaLightbulbO,
		LinkedinSquare: FaLinkedinSquare,
		Linkedin: FaLinkedin,
		LineChart: FaLineChart,
		Linux: FaLinux,
		ListAlt: FaListAlt,
		List: FaList,
		ListOl: FaListOl,
		ListUl: FaListUl,
		LocationArrow: FaLocationArrow,
		LongArrowDown: FaLongArrowDown,
		LongArrowLeft: FaLongArrowLeft,
		Lock: FaLock,
		LongArrowRight: FaLongArrowRight,
		LongArrowUp: FaLongArrowUp,
		LowVision: FaLowVision,
		Magic: FaMagic,
		Magnet: FaMagnet,
		MailForward: FaMailForward,
		MailReplyAll: FaMailReplyAll,
		MailReply: FaMailReply,
		Male: FaMale,
		MapMarker: FaMapMarker,
		MapO: FaMapO,
		MapPin: FaMapPin,
		MapSigns: FaMapSigns,
		Map: FaMap,
		MarsDouble: FaMarsDouble,
		MarsStrokeH: FaMarsStrokeH,
		MarsStrokeV: FaMarsStrokeV,
		MarsStroke: FaMarsStroke,
		Mars: FaMars,
		Maxcdn: FaMaxcdn,
		Meanpath: FaMeanpath,
		Medium: FaMedium,
		Medkit: FaMedkit,
		MehO: FaMehO,
		Mercury: FaMercury,
		MicrophoneSlash: FaMicrophoneSlash,
		Microphone: FaMicrophone,
		MinusCircle: FaMinusCircle,
		MinusSquareO: FaMinusSquareO,
		MinusSquare: FaMinusSquare,
		Minus: FaMinus,
		Mixcloud: FaMixcloud,
		Mobile: FaMobile,
		Modx: FaModx,
		Money: FaMoney,
		MoonO: FaMoonO,
		Motorcycle: FaMotorcycle,
		MousePointer: FaMousePointer,
		Music: FaMusic,
		Neuter: FaNeuter,
		NewspaperO: FaNewspaperO,
		ObjectGroup: FaObjectGroup,
		OdnoklassnikiSquare: FaOdnoklassnikiSquare,
		ObjectUngroup: FaObjectUngroup,
		Opencart: FaOpencart,
		Openid: FaOpenid,
		Odnoklassniki: FaOdnoklassniki,
		Opera: FaOpera,
		OptinMonster: FaOptinMonster,
		Pagelines: FaPagelines,
		PaintBrush: FaPaintBrush,
		PaperPlaneO: FaPaperPlaneO,
		PaperPlane: FaPaperPlane,
		Paperclip: FaPaperclip,
		Paragraph: FaParagraph,
		PauseCircleO: FaPauseCircleO,
		PauseCircle: FaPauseCircle,
		Pause: FaPause,
		Paw: FaPaw,
		PencilSquare: FaPencilSquare,
		Paypal: FaPaypal,
		Pencil: FaPencil,
		Percent: FaPercent,
		PhoneSquare: FaPhoneSquare,
		Phone: FaPhone,
		PiedPiperAlt: FaPiedPiperAlt,
		PieChart: FaPieChart,
		PiedPiper: FaPiedPiper,
		PinterestP: FaPinterestP,
		PinterestSquare: FaPinterestSquare,
		Pinterest: FaPinterest,
		PlayCircleO: FaPlayCircleO,
		Plane: FaPlane,
		PlayCircle: FaPlayCircle,
		Play: FaPlay,
		Plug: FaPlug,
		PlusCircle: FaPlusCircle,
		PlusSquareO: FaPlusSquareO,
		PlusSquare: FaPlusSquare,
		Plus: FaPlus,
		PowerOff: FaPowerOff,
		Print: FaPrint,
		ProductHunt: FaProductHunt,
		PuzzlePiece: FaPuzzlePiece,
		Qq: FaQq,
		Qrcode: FaQrcode,
		QuestionCircleO: FaQuestionCircleO,
		QuestionCircle: FaQuestionCircle,
		Question: FaQuestion,
		QuoteLeft: FaQuoteLeft,
		QuoteRight: FaQuoteRight,
		Random: FaRandom,
		Ra: FaRa,
		Recycle: FaRecycle,
		RedditAlien: FaRedditAlien,
		Reddit: FaReddit,
		Refresh: FaRefresh,
		RedditSquare: FaRedditSquare,
		Registered: FaRegistered,
		Renren: FaRenren,
		Retweet: FaRetweet,
		Repeat: FaRepeat,
		Road: FaRoad,
		Rocket: FaRocket,
		RotateLeft: FaRotateLeft,
		RssSquare: FaRssSquare,
		Rouble: FaRouble,
		Safari: FaSafari,
		Scribd: FaScribd,
		SearchMinus: FaSearchMinus,
		SearchPlus: FaSearchPlus,
		Search: FaSearch,
		Sellsy: FaSellsy,
		Server: FaServer,
		ShareAltSquare: FaShareAltSquare,
		ShareAlt: FaShareAlt,
		Shield: FaShield,
		ShareSquare: FaShareSquare,
		ShareSquareO: FaShareSquareO,
		Ship: FaShip,
		Shirtsinbulk: FaShirtsinbulk,
		ShoppingBag: FaShoppingBag,
		ShoppingBasket: FaShoppingBasket,
		ShoppingCart: FaShoppingCart,
		SignIn: FaSignIn,
		SignOut: FaSignOut,
		SignLanguage: FaSignLanguage,
		Signal: FaSignal,
		Simplybuilt: FaSimplybuilt,
		Sitemap: FaSitemap,
		Skyatlas: FaSkyatlas,
		Skype: FaSkype,
		Slack: FaSlack,
		Sliders: FaSliders,
		SmileO: FaSmileO,
		Slideshare: FaSlideshare,
		SnapchatGhost: FaSnapchatGhost,
		Snapchat: FaSnapchat,
		SnapchatSquare: FaSnapchatSquare,
		Snowflake: MdAcUnit,
		SortAlphaAsc: FaSortAlphaAsc,
		SortAmountDesc: FaSortAmountDesc,
		SortAmountAsc: FaSortAmountAsc,
		HourglassO: FaHourglassO,
		SortAlphaDesc: FaSortAlphaDesc,
		SortAsc: FaSortAsc,
		SortNumericAsc: FaSortNumericAsc,
		Sort: FaSort,
		SortNumericDesc: FaSortNumericDesc,
		SortDesc: FaSortDesc,
		SpaceShuttle: FaSpaceShuttle,
		Spinner: FaSpinner,
		Soundcloud: FaSoundcloud,
		Spoon: FaSpoon,
		SquareO: FaSquareO,
		StackExchange: FaStackExchange,
		Square: FaSquare,
		Spotify: FaSpotify,
		StackOverflow: FaStackOverflow,
		StarHalfEmpty: FaStarHalfEmpty,
		StarHalf: FaStarHalf,
		StarO: FaStarO,
		Star: FaStar,
		SteamSquare: FaSteamSquare,
		Steam: FaSteam,
		StepForward: FaStepForward,
		StepBackward: FaStepBackward,
		StickyNoteO: FaStickyNoteO,
		Stethoscope: FaStethoscope,
		StopCircleO: FaStopCircleO,
		StickyNote: FaStickyNote,
		StopCircle: FaStopCircle,
		Stop: FaStop,
		StreetView: FaStreetView,
		Strikethrough: FaStrikethrough,
		StumbleuponCircle: FaStumbleuponCircle,
		Stumbleupon: FaStumbleupon,
		Subscript: FaSubscript,
		Subway: FaSubway,
		SunO: FaSunO,
		Suitcase: FaSuitcase,
		Table: FaTable,
		Superscript: FaSuperscript,
		Tablet: FaTablet,
		Tag: FaTag,
		Tasks: FaTasks,
		Tags: FaTags,
		Television: FaTv,
		TencentWeibo: FaTencentWeibo,
		TextHeight: FaTextHeight,
		Terminal: FaTerminal,
		TextWidth: FaTextWidth,
		ThLarge: FaThLarge,
		Th: FaTh,
		ThList: FaThList,
		ThumbTack: FaThumbTack,
		ThumbsDown: FaThumbsDown,
		ThumbsODown: FaThumbsODown,
		ThumbsUp: FaThumbsUp,
		Ticket: FaTicket,
		ThumbsOUp: FaThumbsOUp,
		TimesCircleO: FaTimesCircleO,
		TimesCircle: FaTimesCircle,
		Tint: FaTint,
		ToggleOn: FaToggleOn,
		ToggleOff: FaToggleOff,
		Trademark: FaTrademark,
		Train: FaTrain,
		TrashO: FaTrashO,
		TransgenderAlt: FaTransgenderAlt,
		Tree: FaTree,
		Trello: FaTrello,
		Trash: FaTrash,
		Tripadvisor: FaTripadvisor,
		Trophy: FaTrophy,
		Try: FaTry,
		Truck: FaTruck,
		Tty: FaTty,
		TumblrSquare: FaTumblrSquare,
		Tumblr: FaTumblr,
		Twitch: FaTwitch,
		TwitterSquare: FaTwitterSquare,
		Twitter: FaTwitter,
		Umbrella: FaUmbrella,
		Underline: FaUnderline,
		UniversalAccess: FaUniversalAccess,
		UnlockAlt: FaUnlockAlt,
		Unlock: FaUnlock,
		Upload: FaUpload,
		Usb: FaUsb,
		UserMd: FaUserMd,
		UserPlus: FaUserPlus,
		UserSecret: FaUserSecret,
		UserTimes: FaUserTimes,
		VenusDouble: FaVenusDouble,
		User: FaUser,
		VenusMars: FaVenusMars,
		Venus: FaVenus,
		Viacoin: FaViacoin,
		ViadeoSquare: FaViadeoSquare,
		VideoCamera: FaVideoCamera,
		Viadeo: FaViadeo,
		VimeoSquare: FaVimeoSquare,
		Vimeo: FaVimeo,
		Vk: FaVk,
		Vine: FaVine,
		VolumeControlPhone: FaVolumeControlPhone,
		VolumeDown: FaVolumeDown,
		VolumeOff: FaVolumeOff,
		VolumeUp: FaVolumeUp,
		Wechat: FaWechat,
		Weibo: FaWeibo,
		Whatsapp: FaWhatsapp,
		WheelchairAlt: FaWheelchairAlt,
		Wifi: FaWifi,
		Wheelchair: FaWheelchair,
		WikipediaW: FaWikipediaW,
		Windows: FaWindows,
		Wordpress: FaWordpress,
		Wpbeginner: FaWpbeginner,
		Wrench: FaWrench,
		Wpforms: FaWpforms,
		XingSquare: FaXingSquare,
		Xing: FaXing,
		YCombinator: FaYCombinator,
		Yahoo: FaYahoo,
		Yelp: FaYelp,
		YoutubeSquare: FaYoutubeSquare,
		YoutubePlay: FaYoutubePlay,
		Youtube: FaYoutube
		*/
	}

	const Icon = generalIcons[name || 'Wifi']

	return <Icon />
}

export default Icon
