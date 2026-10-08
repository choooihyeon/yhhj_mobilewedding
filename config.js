
const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "신현종",
    nameEn: "신현종",
    father: "아버지",
    mother: "어머니",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "조윤하",
    nameEn: "조윤하",
    father: "조근식",
    mother: "김규빈",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-02-21",
    time: "15:20",
    venue: "루이비스컨벤션 웨딩홀",
    hall: "나는 모르오",
    address: "서울 송파구 법원로9길 26 H비즈니스파크 D동 루이비스컨벤션 B1층",
    tel: "02-6281-9000",
    mapLinks: {
      kakao: "https://kko.to/urjyUMobi8",
      naver: "https://naver.me/5B0ReGRT"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "같은 곳을 바라보게 되었습니다",
    message: "서로 다른 길을 걸어온 두 사람이 같은 곳을 바라보게 되었습니다.\n이제 서로의 가장 든든한 곁이 되어 새로운 길을 함께 걸어가려 합니다.\n\n소중한 분들과 그 시작을 함께하고 싶습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로의 일상에 스며들어 어느새 서로에게 가장 소중한 사람이 되었습니다.\n함께 웃고, 함께 고민하며 서로의 곁에서 조금씩 닮아갔습니다.\n\n이제 그 마음을 오래도록 간직하며 평생을 함께하고자 합니다.."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "신현종", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "XXX", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "XXX", bank: "OO은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "조윤하", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "조근식", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "김규빈", bank: "OO은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "윤하 ❤️ 현종 결혼합니다",
    description: ""
  }
};
