export const projects = [
  {
    id: 0,
    name: '유튜브 클립 저장소',
    img: [
      process.env.PUBLIC_URL + 'youtube-cutter.png',
      process.env.PUBLIC_URL + 'youtube-cutter2.png',
      process.env.PUBLIC_URL + 'youtube-cutter3.png',
      process.env.PUBLIC_URL + 'youtube-cutter4.png',
    ],
    summary: `유튜브 영상의 특정 시간대를 저장하고 하나의 목록으로 분류해 관리할 수 있는 페이지`,
    description: `유튜브 영상의 특정 시간대를 저장하고 하나의 목록으로 분류해 관리할 수 있는 페이지`,
    stack: [
      'create react app',
      'nodejs',
      'graphQL',
      'react router',
      'react hook',
      'grahql apollo',
      'JWT',
    ],
    url: 'http://youtube-cutter.herokuapp.com/',
  },
  {
    id: 1,
    name: 'SquardMaker',
    img: [
      process.env.PUBLIC_URL + 'squardmaker.png',
      process.env.PUBLIC_URL + 'squardmaker2.png',
      process.env.PUBLIC_URL + 'squardmaker3.png',
      process.env.PUBLIC_URL + 'squardmaker4.png',
    ],
    summary: `축구팀을 위한 명단 제작 사이트.`,
    description: `축구팀을 위한 명단 제작 사이트.
    팀 명단을 만들고 포메이션과 등번호를 정할 수 있다. 본인의 팀 명단을 바둑돌처럼 활용해 전술 구상도 해볼수 있다`,
    stack: [
      'vanila js',
      'nodejs',
      'redis session',
      'passport',
      'axios',
      'MYSQL',
    ],
    url: 'http://squardmaker.herokuapp.com/',
  },
];

export const otherProject = [
  {
    id: 0,
    name: '용하다',
    img: [
      process.env.PUBLIC_URL + 'yong1.png',
      process.env.PUBLIC_URL + 'yong2.png',
      process.env.PUBLIC_URL + 'yong3.png',
    ],
    summary: `사주팔자 중계 어플리케이션`,
    description: `사주팔자 중계 어플리케이션`,
    stack: ['android'],
    url: '',
  },
  {
    id: 1,
    name: '블룸엔진',
    img: [
      process.env.PUBLIC_URL + 'bloom1.png',
      process.env.PUBLIC_URL + 'bloom2.png',
      process.env.PUBLIC_URL + 'bloom3.png',
    ],
    summary: `스마트화분 IoT어플리케이션`,
    description: `스마트화분 IoT어플리케이션`,
    stack: ['android'],
    url: '',
  },
  {
    id: 2,
    name: '포켓고',
    img: [
      process.env.PUBLIC_URL + 'pocket1.png',
      process.env.PUBLIC_URL + 'pocket2.png',
    ],
    summary: `차량 임대 구독 플랫폼 어플리케이션`,
    description: `차량 임대 구독 플랫폼`,
    stack: ['android'],
    url: '',
  },
];
