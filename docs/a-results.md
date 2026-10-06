# AI A 종료 시점 검사 결과
- 코드 버전: `645ad7cf41855bd8179f99db399fb2cb45c36443`
- 명령: `node tests/run-tests.js`

| 회차 | 시각 | 결과 | FAIL 여부 |
|---|---|---|---|
| A-1 | 2026-10-06 20:20 | 통과 7/10 (FAIL: FN-06, FN-08, FN-09) | 있음 |

```
PASS FN-01 빈 문구
PASS FN-02 공백 3칸만
PASS FN-03 일반 한글
PASS FN-04 띄어쓰기 → _
PASS FN-05 여러 줄 → 첫 줄만
FAIL FN-06 금지 문자 제거
PASS FN-07 정확히 20자
FAIL FN-08 21자 → 20자로 자름
FAIL FN-09 금지 문자만
PASS FN-10 9:16 + JPEG
통과 7/10
```

## AI A 실제 사용량
- 시작 20:18 → 종료 20:21 (UTC+9), 요청 1회 (상한 60분·15회 이내)
