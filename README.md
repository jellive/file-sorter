# File Sorter

파일 정리를 위한 Electron 기반 데스크톱 애플리케이션입니다.

## 최신 업데이트 (2025)

이 프로젝트는 최신 TypeScript, React, 그리고 개발 도구로 현대화되었습니다:

### 주요 업그레이드

- **TypeScript**: 3.4.5 → 5.7.2
- **React**: 16.8 → 18.3
- **Electron**: 3.1.9 → 33.2.0
- **Jest**: 24 → 29
- **Webpack**: 4 → 5

### 새로운 기능

- ✅ **ESLint**: TSLint에서 ESLint + TypeScript ESLint로 마이그레이션
- ✅ **Playwright**: Spectron을 대체하는 최신 E2E 테스트 프레임워크
- ✅ **MUI (Material-UI)**: @material-ui/core에서 @mui/material v6로 업그레이드
- ✅ **Husky 9**: 최신 Git hooks 설정
- ✅ **Strict TypeScript**: 최신 TypeScript 설정 및 엄격한 타입 체크

## 설치

저장소를 클론합니다:

```bash
git clone --depth=1 git@github.com:jellive/file-sorter
```

의존성을 설치합니다:

```bash
cd file-sorter
npm install
```

## 사용법

### 개발 모드

두 프로세스를 동시에 시작해야 합니다 (각각 다른 터미널에서):

```bash
npm run start-renderer-dev
npm run start-main-dev
```

또는 하나의 명령으로 시작:

```bash
npm run start-dev
```

## 사용 가능한 스크립트

### 개발

- `npm run start-dev`: 개발 서버 시작
- `npm run start-renderer-dev`: Renderer 프로세스 개발 서버
- `npm run start-main-dev`: Main 프로세스 빌드 및 실행

### 빌드

- `npm run build`: 프로덕션 빌드
- `npm run build-main`: Main 프로세스 빌드
- `npm run build-renderer`: Renderer 프로세스 빌드

### 테스트

- `npm test`: 단위 테스트 실행
- `npm run test:watch`: Watch 모드로 테스트 실행
- `npm run test:coverage`: 커버리지 포함 테스트 실행
- `npm run test:e2e`: Playwright E2E 테스트 실행
- `npm run test:e2e:ui`: Playwright UI 모드로 E2E 테스트 실행

### 코드 품질

- `npm run lint`: ESLint로 코드 검사
- `npm run lint:fix`: ESLint 자동 수정
- `npm run type-check`: TypeScript 타입 체크

### 패키징

[Electron builder](https://www.electron.build/)를 사용하여 애플리케이션을 패키징합니다:

```bash
npm run dist
```

특정 플랫폼을 위한 빌드:

```bash
npm run dist -- -mwl  # Mac, Windows, Linux 모두
```

## 프로젝트 구조

```
file-sorter/
├── src/
│   ├── main/           # Electron Main 프로세스
│   ├── renderer/       # React 애플리케이션
│   │   ├── actions/    # Redux actions
│   │   ├── components/ # React 컴포넌트
│   │   ├── containers/ # Redux 컨테이너
│   │   ├── reducers/   # Redux reducers
│   │   ├── store/      # Redux store 설정
│   │   └── types/      # TypeScript 타입 정의
│   └── utils/          # 유틸리티 함수
├── test/
│   ├── components/     # 컴포넌트 테스트
│   ├── reducers/       # Reducer 테스트
│   └── e2e/           # E2E 테스트
├── mocks/             # Jest mocks
└── dist/              # 빌드 결과물
```

## 기술 스택

### Core

- **Electron 33**: 크로스 플랫폼 데스크톱 앱
- **React 18**: UI 라이브러리
- **TypeScript 5**: 정적 타입 지원
- **Redux**: 상태 관리

### UI

- **MUI (Material-UI) v6**: Material Design 컴포넌트
- **Emotion**: CSS-in-JS

### 테스팅

- **Jest 29**: 단위 테스트
- **Playwright**: E2E 테스트
- **React Test Renderer**: 컴포넌트 테스트

### 개발 도구

- **ESLint**: 코드 린팅
- **Prettier**: 코드 포맷팅
- **Husky 9**: Git hooks
- **lint-staged**: Pre-commit 린팅
- **Webpack 5**: 모듈 번들러

## 코드 스타일

이 프로젝트는 Husky와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다.

코드 스타일을 변경하려면 `.prettierrc` 파일을 수정하세요.

## 라이선스

MIT © [Jell](https://github.com/jellive)
