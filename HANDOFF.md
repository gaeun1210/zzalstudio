# 인수인계 — 저장 파일 이름에 문구 첫 줄 넣기 (과제 5)

> 이 문서와 저장소만으로 이어서 작업합니다. 앞 대화 내용은 제공하지 않습니다.

## 1. 목표
짤 스튜디오에서 **저장하기**를 누를 때 파일 이름을 `zzal_{제목}_{비율}_{시각}.{확장자}` 규칙으로 만든다.
- 제목 = 첫 번째(내용 있는) 문구의 첫 줄 → 앞뒤 공백 제거 → 공백은 `_` → 금지 문자 `\ / : * ? " < > |` 제거 → 최대 20자 → 남는 글자가 없으면 `제목없음`
- 비율 `1:1`→`1x1`, 시각 `YYYYMMDD-HHMMSS`, png→`.png`, jpeg→`.jpg`
- 완료 조건: 고정 검사 FN-01~FN-10 **10/10 통과** + 앱의 저장하기 버튼이 이 함수를 사용

## 2. 현재 상태
- 저장소: https://github.com/gaeun1210/zzalstudio (브랜치 `main`)
- 기준 코드 버전 ID: **`645ad7cf41855bd8179f99db399fb2cb45c36443`** (짧게 `645ad7c`)
- `filename.js`: `makeFileName({text, ratio, format, date})` 구현됨. 첫 줄·공백 처리·제목없음·비율·확장자는 동작. **금지 문자 제거와 20자 자르기는 아직 없음** (`TODO(AI B)` 주석 위치)
- `index.html`: **아직 연결 안 됨.** 1717번째 줄 근처 `const name = \`zzal_${S.ratio...` 가 예전 규칙 그대로
- 검사 결과: **7/10 통과** (FN-01~05, 07, 10 PASS / FN-06, 08, 09 FAIL)

## 3. 실행 명령
새 폴더에서 (필요: git, Node.js 18 이상 / 설치할 패키지 없음, 환경값·API 키 없음):
```
git clone https://github.com/gaeun1210/zzalstudio.git
cd zzalstudio
node tests/run-tests.js
```
- 마지막 줄에 `통과 7/10`이 보이면 정상 재현. 다 통과하면 `통과 10/10`
- Node가 없으면: `tests.html`을 브라우저로 열면 같은 결과가 표로 보임
- 앱 확인: `index.html`을 브라우저로 열고 문구 입력 → 저장하기 → 화면 아래 파일 이름 확인

## 4. 통과 검사
고정 검사 10개: `tests/fn-tests.js` (표 형태: `docs/fixed-tests.md`)
- 현재 PASS: FN-01 빈 문구, FN-02 공백만, FN-03 `칭찬해`, FN-04 `오늘도 수고했어`, FN-05 여러 줄, FN-07 정확히 20자, FN-10 9:16+JPEG

## 5. 남은 문제
첫 실패 검사: **FN-06**
- FN-06 금지 문자 제거 — 기대 `zzal_abcdefghij_1x1_20261006-203005.png`, 실제 `zzal_a/b\c:d*e?f"g<h>i|j_1x1_…`
- FN-08 21자 → 20자 — 실제는 21자 그대로 들어감
- FN-09 `///` → 기대 `zzal_제목없음_…`, 실제 `zzal_///_…`
- 앱 저장하기 버튼 미연결

## 6. 다음 행동
1. `filename.js`의 `makeTitle`에서 금지 문자 제거 후 20자로 자르기 (글자 수는 `Array.from()` 기준 권장) → 비면 `제목없음`
2. `node tests/run-tests.js` → `통과 10/10` 확인
3. `index.html`의 `<script>`(729번째 줄 근처) 바로 앞에 `<script src="filename.js"></script>` 추가
4. 1717번째 줄 근처 `const name = ...`을 다음으로 교체:
   `const first = S.layers.find(L => L.text.trim()); const name = ZzalFileName.makeFileName({text: first ? first.text : '', ratio: S.ratio, format: S.format, date: new Date()});`
5. 브라우저에서 `칭찬해` 입력 후 저장 → `zzal_칭찬해_1x1_…png` 확인, 다시 검사 실행 후 결과를 `docs/worklog.md`에 기록

## 7. 건드리지 말 것
- `tests/fn-tests.js`, `docs/fixed-tests.md` — 검사 삭제·완화·기대값 변경 금지
- `index.html`의 다른 기능(편집, 템플릿, 내 완성작, 앱 안의 "검사 12건")과 1717번째 줄 근처 외의 코드
- 저장소에 비밀값·개인정보 넣지 않기
- 공통 상한: 60분, 요청 15회 이내
