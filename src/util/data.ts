import { GithubIcon, ProjectExampleImg, WindowIcon } from "../assets/assets";

interface iProjectData {
  projectId: number;
  projectName: string;
  teamName: string;
  category: "유니티" | "웹/앱" | "유니티 기초";
  thumbnail: string;
  youtubeUrl: string;
  description: string;
  developers: Array<{
    name: string;
    image: string;
  }>;
  downloadOptions: Array<
    | { name: "apk"; url: string; icon: string }
    | { name: "mac"; url: string; icon: string }
    | { name: "window"; url: string; icon: string }
    | { name: "github"; url: string; icon: string }
  >;
}

export const projectData: iProjectData[] = [
  {
    projectId: 1,
    projectName: "도전!집냥이(Epic Cat Voyage)",
    teamName: "츄르",
    category: "유니티",
    thumbnail: "../assets/thumbnails/도전 집냥이_가로 이미지.png",
    youtubeUrl: "",
    description: `
    😺 제작기간
2022.3.31 ~ 2022.12.21

😸 게임 시나리오
주인공 길냥이들은 어느 날, 츄르를 먹고 그 엄청난 맛에 사랑에 빠집니다!
바깥 생활에 지친 길냥이들은 이제 따뜻한 집에 들어가 집사를 부리며 살고 싶어졌습니다.
과연 길냥이들은 무사히 호감도를 쌓아 집냥이가 되어 츄르를 맘껏 먹을 수 있을까요?

🐱 게임 방법
다양한 미니게임을 플레이하고, NPC와 상호작용하며 목표 NPC(미래의 집사)의 호감도를 높여야 합니다!
단, 배고픔이 떨어지지 않도록 주의하세요!
무사히 집냥이가 될 때까지 고양이들만 안다는 비밀 상점을 이용하여 배고픔을 유지합시다
    `,
    developers: [
      {
        name: "오지수",
        image: "../assets/developers/오지수.png",
      },
      {
        name: "정민영",
        image: "../assets/developers/정민영.png",
      },
      {
        name: "정민주",
        image: "../assets/developers/정민주.png",
      },
      {
        name: "최민선",
        image: "../assets/developers/최민선.png",
      },
    ],
    downloadOptions: [
      {
        name: "github",
        url: "https://github.com/EpicCatVoyage/EpicCatVoyage",
        icon: `${GithubIcon}`,
      },
    ],
  },
  {
    projectId: 2,
    projectName: "에브리로그",
    teamName: "팀이름",
    category: "웹/앱",
    thumbnail: "../assets/thumbnails/에브리로그_가로.png",
    youtubeUrl: "",
    description: "",
    developers: [
      {
        name: "김진영",
        image: "../assets/developers/김진영.png",
      },
      {
        name: "윤서희",
        image: "../assets/developers/윤서희.png",
      },
      {
        name: "정민영",
        image: "../assets/developers/정민영.png",
      },
      {
        name: "조수진",
        image: "../assets/developers/조수진.png",
      },
    ],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 3,
    projectName: "청파마켓",
    teamName: "청파마켓",
    category: "웹/앱",
    thumbnail: "../assets/thumbnails/청파마켓_가로.png",
    youtubeUrl: "",
    description: "",
    developers: [
      {
        name: "김진영",
        image: "../assets/developers/김진영.png",
      },
      {
        name: "박해지",
        image: "../assets/developers/박해지.png",
      },
      {
        name: "신진영",
        image: "../assets/developers/신진영.png",
      },
      {
        name: "이가을",
        image: "../assets/developers/이가을.png",
      },
      {
        name: "전유정",
        image: "../assets/developers/전유정.png",
      },
      {
        name: "정채영",
        image: "../assets/developers/정채영.png",
      },
    ],
    downloadOptions: [
      {
        name: "window",
        url: "https://drive.google.com/drive/folders/1izA1vfjWN70pK1m30P65SGbvGVj0JVAj",
        icon: `${WindowIcon}`,
      },
    ],
  },
  {
    projectId: 4,
    projectName: "Common Alley Dolly's",
    teamName: "Doll’I",
    category: "유니티",
    thumbnail: "../assets/thumbnails/돌리가로이미지.png",
    youtubeUrl: "",
    description: `제작기간: 3개월(방학7월-8월:기획 및 이미지 제작, 12월 후반 프로토타입 제작)

    게임 시나리오: 돌아가신 할머니와의 추억을 이어가기 위해 인형 수선 가게를 차린 돌리, 돌리는 손님들의 다양한 인형을 만나 이들을 건강한 모습으로 가족 품으로 돌려보내고자 합니다. 여러분은 돌리가 되어, 인형을 수선, 세탁, 또한 이를 위한 부자재 구입 등을 하며 평판을 얻고 가게를 유지해야 합니다.
    
    게임 방법: 손님의 요구, 퀘스트에 맞춰 인형을 세탁, 수선해나갑니다. 화면의 화살표를 누르면 손님창, 제작창, 세탁창, 부자재창, 상점창 으로 이동할 수 있습니다.
    `,
    developers: [
      {
        name: "강단이",
        image: "../assets/developers/강단이.png",
      },
      {
        name: "김수현",
        image: "../assets/developers/김수현.png",
      },
      {
        name: "박진희",
        image: "../assets/developers/박진희.png",
      },
      {
        name: "이가을",
        image: "../assets/developers/이가을.png",
      },
    ],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 5,
    projectName: "OK Check Project",
    teamName: "내부자송",
    category: "유니티",
    thumbnail: "../assets/thumbnails/okcheck.PNG",
    youtubeUrl: "",
    description: `제작 기간: 22년 9월 ~ 12월 약 3달
    기획 의도: 
    평소 건강 관리를 잘하지 않았던 습관을 되돌아 보며 경각심을 가지자는 의미에서 본 게임을 기획하였습니다. 
    게임 시나리오: 
    평소 건강 관리를 제대로 하지 않았던 주인공, 건강 검진에서 총체적 난국이라는 이야기를 듣게 된다. 조금만 잘못하면 잔병치레를 하게 될 주인공을 건강하게 만들도록 합시다! 
    게임 방법: 
    게임 진행은 계획과 실행을 반복하는 방식입니다. 계획하기 버튼을 통해 게임 내 하루 동안 어떤 식으로 생활할지 생활 방식을 정합니다. 이 때 메인 화면에서 각 계(소화계, 신경계 등)들로 연결된 모니터들을 선택해 각 계의 상황을 살펴 적절한 생활 방식을 선택해야 합니다. 건강한 생활 방식만 선택할 경우에는 스트레스가 과다하게 높아질 수 있으니 주의해야 합니다. 
    `,
    developers: [
      {
        name: "강단이",
        image: "../assets/developers/강단이.png",
      },
      {
        name: "고예린",
        image: "../assets/developers/고예린.png",
      },
      {
        name: "전유정",
        image: "../assets/developers/전유정.png",
      },
      {
        name: "조영서",
        image: "../assets/developers/조영서.png",
      },
    ],
    downloadOptions: [
      {
        name: "apk",
        url: "",
        icon: "",
      },
    ],
  },
  {
    projectId: 6,
    projectName: "Plantity",
    teamName: "plantity",
    category: "웹/앱",
    thumbnail: "../assets/thumbnails/Plantity.png",
    youtubeUrl: "",
    description: `개발 배경 및 목적
    현대사회에서 거주 및 근무 환경, 인간관계 등의 이유로 정신적 피로가 증가하고 있다. 또한 코로나 시국을 겪으면서 타인과의 어울림이 차단되었고 관계 유지도 어려워졌다. 그 결과 정서적인 안정감을 주는 반려식물에 대한 관심도가 상승했다. 하지만 반려동물에 비해 반려식물은 생육 정보를 알고 키우기가 어렵다. 이에 따라 초보자도 쉽게 식물 키우기에 동참하도록 만들어 반려식물 문화 형성을 도모하는 앱을 개발하게 되었다. Plantity는 Plant와 Identity의 합성어로, 사용자와 식물이 함께 성장하는 것을 추구한다.
    
    사업 내용 및 특징
    서비스 소개
    1. 식물 기르기 입문자를 위한 많은 도움을 제공한다.
    식물 키우기에 입문자라면 식물 유형 테스트를 통해 자신에게 어울리는 식물을 추천받을 수 있다. 또한, 입문자들을 위한 가이드라인을 제공해 사용자가 자신의 식물과 함께 성장할 수 있도록 한다.
    2. 검색 탭에서 원하는 식물에 대한 상세 정보를 얻고 저장할 수 있다.
    검색탭에서 궁금한 식물에 대해 검색할 수 있으며 해당 식물의 키우기 난이도와 관수, 광도 등에 대한 정보를 얻을 수 있다. 마음에 드는 식물이 있으면 하트를 눌러 찜할 수 있고 찜한 식물 리스트에 추가된다.
    3. 반려식물에 대한 지속적인 관리를 위해 과제를 제공한다.
    사람들이 식물을 키우다 실패하는 원인은 대부분 꾸준한 관리를 못했기 때문이므로 이 문제를 해결하기 위해 반려식물에 물 주기, 살펴보기, 광합성 시키기, 분갈이하기 총 4가지 항목에 대한 과제를 부여하고 알림을 보내 사용자의 지속적인 과제 수행을 유도한다. 사용자가 해당 과제를 수행할 경우, 점수를 얻어 등급을 올릴 수 있어 사용자의 성취감 및 앱 사용에 대해 동기를 부여받을 수 있다. 등급에는 비기너, 가드너, 마스터 세 가지가 있으며, 각 등급에서 추가할 수 있는 식물의 수를 1개, 3개, 5개로 제한하여 무분별한 식물 입양을 방지한다.
    
    디자인 소개
    Plantity 앱의 명확성을 드러낼 수 있도록 했다. 앱의 메인 색상은 식물을 떠올렸을 때 직관적으로 떠오르는 초록색을 선택했으며 로고는 Plantity의 앞 두글자인 pl을 가져와 서비스가 명확히 드러나도록 했다. 또한 식물이 돋아나는 듯한 느낌을 줄 수 있도록 부드러운 느낌으로 제작했다. 메인 색상의 경우 초록색을 중심으로 하였으며, 부드러움과 온화함을 의미하는 핑크색을 포인트 색상으로 사용해 '반려식물에 대한 돌봄'이라는 의미를 강조했다.
    
    Plantity의 주요 타켓층은 식물 기르기 입문자이며 안드로이드와 iOS 두 운영체제 모두 개발해 사용자의 접근성을 높였다.
    
    발전 계획
    Plantity는 앞으로 3가지 기능을 추가하여 반려식물 문화 형성에 기여할 것이다.
    1. 식물 기르기와 관련된 정보 공유의 장인 '식물 커뮤니티' 탭을 개설할 것이다.
    2. '식물 병원 서비스'를 구축할 계획이다. 식물 병원 서비스는 전문가와의 1:1 상담 시스템을 통해 원인을 파악하고 해결방안을 구할 수 있는 서비스이다.
    3. '식물 지도 서비스'를 개설할 예정이다. 오프라인 식물 상점이나 식물원 등 식물과 함께할 수 있는 추천 장소를 지도에 표시해 식물과 더 가까워질 수 있도록 할 것이다.
    
    팀원 소개, 앞으로 각오 등
    Plan your plant, Plantity! 저희는 숙명여자대학교 3명의 안드로이드와 2명의 iOS, 3명의 서버 개발자로 구성되어 있습니다. 저희는 많은 사람들에게 식물을 키우는 즐거움과 성취감을 전달하고, 반려식물 문화 형성에 기여하고자 모인 팀입니다. 저희는 앞으로도 Plantity 앱을 스토어에 출시하기 위해 끝까지 최선을 다할 예정입니다. Plantity를 통해 푸릇푸릇하고 따뜻한 세상을 만들고자 하는 저희의 목표를 응원해주세요!
    
    `,
    developers: [
      {
        name: "김다연",
        image: "../assets/developers/김다연.png",
      },
      {
        name: "고예린",
        image: "../assets/developers/고예린.png",
      },
      {
        name: "유정현",
        image: "../assets/developers/유정현.png",
      },
      {
        name: "장나리",
        image: "../assets/developers/장나리.png",
      },
      {
        name: "정제인",
        image: "../assets/developers/정제인.png",
      },
      {
        name: "최은형",
        image: "../assets/developers/최은형.png",
      },
      {
        name: "황수연",
        image: "../assets/developers/황수연.png",
      },
      {
        name: "홍희수",
        image: "../assets/developers/홍희수.png",
      },
    ],
    downloadOptions: [
      {
        name: "github",
        url: "https://github.com/Plantity",
        icon: `${GithubIcon}`,
      },
    ],
  },
  {
    projectId: 7,
    projectName: "햄스터의 꿈",
    teamName: "김수현",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/햄스터의꿈.png",
    youtubeUrl: "",
    description: `- 게임 시나리오
    날다람쥐의 비행을 보고 하늘을 날고 싶다는 꿈이 생긴 햄스터, 꿈을 이루기 위해 모험을 떠납니다. 햄스터가 꿈에 가까워질 수 있도록 도와주세요!
    
    - 게임 방법
    1. 많이 달릴수록 햄스터의 속도와 점프력이 커집니다
    2. 스페이스바를 눌러서 점프할 수 있습니다
    3. 스페이스바를 오래 누르면 더 높이 점프할 수 있습니다
    4. 장애물에 부딪히면 햄스터의 속도와 점프력이 줄어듭니다
    5. 땅에 떨어지면 게임 끝!`,
    developers: [
      {
        name: "김수현",
        image: "../assets/developers/김수현.png",
      },
    ],
    downloadOptions: [
      {
        name: "window",
        url: "https://drive.google.com/drive/folders/1izA1vfjWN70pK1m30P65SGbvGVj0JVAj",
        icon: `${WindowIcon}`,
      },
    ],
  },
  {
    projectId: 8,
    projectName: "달로토끼다",
    teamName: "문채일",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/달로토끼다.png",
    youtubeUrl: "",
    description: `‘달로토끼다’는 미니게임이 3개가 포함된 스토리 형식 게임입니다.
    달에서 온 ‘흰 토끼’가 되어, 분수대에서 사람들의 소원이 담긴 동전들을 모으는 미니게임이 하나, 사람들의 소원에 담긴 이야기를 본 후 사람들에게 전달하는 떡을 만들어 전달하는 미니게임이 하나씩 있습니다. 현재 완성된 부분은 초반부입니다.
    동전 미니게임은 분수대에서 떨어지는 동전 500원짜리와 100원짜리들을 토끼가 스코어바를 채울 때까지 모아야 다음 씬으로 넘어갈 수 있게 구성되어 있습니다.
    1) Start Scene
    2) Wishing Well(완성된 부분입니다)
    -----------------------------------------------
    3) Village
    4) Making ddeok
    5) Sending ddeok
    ‘달로토끼다’는 현대 사람들의 소원에 어떤 이야기가 담겼을까? 소원들을 달에 사는 토끼들이 보면 무슨 생각을 할까? 에서 착안된 이야기입니다. 그리고 토끼들이 실질적으로 소원을 이루어 줄 수는 없으나, 많은 아이들이 어른이 되어가는 과정에서 읽었던 전통설화에 나오는 ‘떡을 찧는’ 설정을 가져와 우리나라 소중한 전통음식인 떡을 통해 소소하게 사람들에게 위로를 전하는 이야기를 만들기 위해 제작되었습니다.
    전통적인 느낌을 구름을 통해 강조하고 달과 땅을 오가는 톱다운 맵을 만들려고 했으나 그 부분을 완성하지 못하고 기초적인 틀만 완성한 채 제출하는 것이 아쉬운 것 같습니다.
    `,
    developers: [
      {
        name: "문채일",
        image: "../assets/developers/문채일.png",
      },
    ],
    downloadOptions: [
      {
        name: "window",
        url: "https://drive.google.com/drive/folders/1izA1vfjWN70pK1m30P65SGbvGVj0JVAj",
        icon: `${WindowIcon}`,
      },
    ],
  },
  {
    projectId: 9,
    projectName: "농디치",
    teamName: "오지수",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/농디치.png",
    youtubeUrl: "",
    description: `🌾 제작자: 오지수
    🌾 제작 기간: 2022.2.31 ~ 2022.12.21
    🌾 게임 시나리오
    농디치 가문의 후계자를 결정할 때가 왔습니다!
    주인공은 자신의 능력을 인정받아 최고의 농부가 되어 농디치 가문의 후계자가 되고 싶습니다!
    과연 주인공은 무사히 이 가문의 후계자가 될 수 있을까요?
    🌾 게임 방법
    밭에서 마구마구 자라는 농작물을 자라나는 타이밍에 맞게 잘 수확해야 합니다!
    단, 농작물이 덜 자라지는 않았는지, 주인공이 알맞은 도구를 들고 있는지 꼭 확인하세요!
    당근은 손으로, 고구마는 호미로, 벼는 낫으로 베어내야 합니다!
    🌾 게임 다운받기
    농디치가문.zip을 다운받은 뒤, 압축을 풀어주시고 .exe 파일을 실행시켜주세요!
    https://drive.google.com/file/d/1yanwCX95X7lo5WKLeLlXTWQ8K_IQtQy9/view?usp=share_link
    
    `,
    developers: [
      {
        name: "오지수",
        image: "../assets/developers/오지수.png",
      },
    ],
    downloadOptions: [
      {
        name: "github",
        url: "https://github.com/5jisoo/Save-Nongdici",
        icon: `${GithubIcon}`,
      },
      {
        name: "window",
        url: "https://drive.google.com/file/d/1yanwCX95X7lo5WKLeLlXTWQ8K_IQtQy9/view?usp=share_link",
        icon: `${WindowIcon}`,
      },
    ],
  },
  {
    projectId: 10,
    projectName: "윤서희",
    teamName: "윤서희",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/농디치.png",
    youtubeUrl: "",
    description: "",
    developers: [
      {
        name: "윤서희",
        image: "../assets/developers/윤서희.png",
      },
    ],
    downloadOptions: [],
  },
  {
    projectId: 11,
    projectName: "Till You Look Around",
    teamName: "정민주",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/TillYouLookAround.png",
    youtubeUrl: "",
    description: `장마철이 길어져 별똥별이 마구마구 내리는 달나라의 여름 밤. 방에서 벌떡 깨니 내가 누구인지도 모르겠고 무엇을 해야할지 모르겠는 난감한 상황에 의지할 것은 설명서 하나 뿐이다. 내용이 뭔가 심상찮지만 있는 것이 요것 뿐이니 따를 수 밖에. 대충 배달을 나가라는 소리인 것 같으니 오리씨는 설명서를 따라 홀린듯 배달하러 나간다. 기록적인 유성우와 험난한 달 지형을 무릅쓰고 배달 나가는 Mr. 오리씨! 달나라 우주 배달부 오리씨가 무사히 배달 갈 수 있게 도와주세요.

    Till You Look Around. 단순히 다들 그렇게 산다는 이유만으로 앞만 바라보고 일하는 사람들에게 때때로 뒤돌아서 쉬어가는 게 좋다고 말해주고 싶어서 이런 제목을 썼다. 
    
    방향키를 눌러서 오리를 조정한다. 별똥별에 안 맞게, 뾰족한 지형지물에 찔리지 않게 조심하자. 
    `,
    developers: [
      {
        name: "정민주",
        image: "../assets/developers/정민주.png",
      },
    ],
    downloadOptions: [],
  },
  {
    projectId: 12,
    projectName: "천사와 악마 이야기",
    teamName: "최민선",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/천사와악마.png",
    youtubeUrl: "",
    description: `개발자: 최민선
 
    제작 기간: 8월 30일 ~ 12월 21일
     
    기획 의도: 스토리 중심의 게임으로, 간단한 플레이 방식으로 즐길 수 있도록 만들고자 했다. 사람은 누구나 다양한 모습을 가지고 있으나 사회의 요구에 따라 개성을 감춰야 하는 일이 종종 발생한다. 이러한 모습이 공존을 위해서는 불가피한 일일 수 있으나, 스스로마저 자신의 모습을 배척할 필요는 없다. 타인에게 비추어지는 것과는 별개로 자신의 다양한 특징을 자연스럽게 받아들고 이해할 수 있기를 바라는 마음에 이러한 스토리를 기획하게 되었다.
     
    게임 시나리오: 옛날 옛적 한적한 산골에서 홀로 살고있던 송신(플레이어). 그는 적적한 마음에 피조물을 만들기 시작한다. 피조물을 만드는데 재미를 붙인 송신은 결국 피조물을 혼자서 관리하기에 버거울 정도로 만들어내고, 자신과 가장 닮은 두 피조물을 ‘관리자’로 임명한다. 그러나 관리자 중 한 명은 피조물에게 공포의 대상이되고... 송신은 결국 관리자 한 명을 해임한다. 그러자 관리에 불균형이 오기 시작하며, 마을에는 문제가 생기기 시작한다.
     
    게임 플레이 방법:
      1. 스테이지는 스토리와 간단한 게임으로 구성된다.
      2. 스토리를 모두 열람하면 게임이 시작되며, 게임을 클리어하면 다음 스테이지를 플레이 할 수 있다.
      3. 마을 안에 천사 혹은 악마가 그려진 말풍선이 나타난다. 이는 주민들이 관리자에게 도움을 요청하는 것으로, 플레이어는 필요한 관리자를 선택하여 주민들에게 도움을 준다. 도움을 주는 방법은 간단하다. 하단 아이콘 중 말풍선에 그려진 관리자만 활성화(클릭)한 뒤 말풍선을 클릭하면 된다. 한 번 더 클릭하면 관리자가 비활성화된다.  
    
    `,
    developers: [
      {
        name: "최민선",
        image: "../assets/developers/최민선.png",
      },
    ],
    downloadOptions: [
      {
        name: "window",
        url: "https://drive.google.com/drive/u/1/folders/1YrQHjvFMJkk754-4gzWIOfGN0ih9DhU6",
        icon: `${WindowIcon}`,
      },
    ],
  },
  {
    projectId: 13,
    projectName: "SnowCafe",
    teamName: "하고은",
    category: "유니티 기초",
    thumbnail: "../assets/thumbnails/스노우카페.png",
    youtubeUrl: "",
    description: `
    ⭐ 게임 시나리오 
눈송이가 마을에 작은 카페를 열었습니다. 
카페의 이름은 Snow Cafe. 
손님이 많아 도와줄 사람이 필요하다고 합니다. 
음료수를 만들어 송이를 도와주세요. 

🍹 게임 방법 
메뉴판에 등장하는 음료수를 만드는 게임입니다. 
음료수에 들어가는 재료를 드래그해서 넣어주세요. 
왼쪽 상단에 있는 버튼을 누르면 레시피를 볼 수 있어요. 
총 5개의 스테이지이며 제한 시간은 3분입니다.
    `,
    developers: [
      {
        name: "하고은",
        image: "../assets/developers/하고은.png",
      },
    ],
    downloadOptions: [
      {
        name: "github",
        url: "https://github.com/hagoeun0119/SnowCafe",
        icon: `${GithubIcon}`,
      },
    ],
  },
];
