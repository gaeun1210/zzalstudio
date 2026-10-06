// 고정 검사 10개 (과제 5) — 작업 시작 전에 고정함. 삭제·완화·기대값 변경 금지.
// 공통 조건: 시각 2026-10-06 20:30:05(컴퓨터 현지 시각), 비율 1:1, 형식 png (따로 적은 경우 제외)
(function (root) {
  const D = () => new Date(2026, 9, 6, 20, 30, 5);
  const T = '20261006-203005';
  const FN_TESTS = [
    {id: 'FN-01', name: '빈 문구', input: {text: '', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_제목없음_1x1_${T}.png`},
    {id: 'FN-02', name: '공백 3칸만', input: {text: '   ', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_제목없음_1x1_${T}.png`},
    {id: 'FN-03', name: '일반 한글', input: {text: '칭찬해', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_칭찬해_1x1_${T}.png`},
    {id: 'FN-04', name: '띄어쓰기 → _', input: {text: '오늘도 수고했어', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_오늘도_수고했어_1x1_${T}.png`},
    {id: 'FN-05', name: '여러 줄 → 첫 줄만', input: {text: '첫줄\n둘째줄', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_첫줄_1x1_${T}.png`},
    {id: 'FN-06', name: '금지 문자 제거', input: {text: 'a/b\\c:d*e?f"g<h>i|j', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_abcdefghij_1x1_${T}.png`},
    {id: 'FN-07', name: '정확히 20자', input: {text: '가'.repeat(20), ratio: '1:1', format: 'png', date: D()}, expect: `zzal_${'가'.repeat(20)}_1x1_${T}.png`},
    {id: 'FN-08', name: '21자 → 20자로 자름', input: {text: '가'.repeat(21), ratio: '1:1', format: 'png', date: D()}, expect: `zzal_${'가'.repeat(20)}_1x1_${T}.png`},
    {id: 'FN-09', name: '금지 문자만', input: {text: '///', ratio: '1:1', format: 'png', date: D()}, expect: `zzal_제목없음_1x1_${T}.png`},
    {id: 'FN-10', name: '9:16 + JPEG', input: {text: '짤', ratio: '9:16', format: 'jpeg', date: D()}, expect: `zzal_짤_9x16_${T}.jpg`},
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = FN_TESTS; else root.FN_TESTS = FN_TESTS;
})(this);
