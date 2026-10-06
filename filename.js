// 저장 파일 이름 만들기 — 규칙: zzal_{제목}_{비율}_{시각}.{확장자}
(function (root) {
  const pad = n => String(n).padStart(2, '0');
  function fileStamp(d) {
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
  }
  function makeTitle(text) {
    const first = String(text || '').split('\n')[0].trim();
    // 금지 문자 \ / : * ? " < > | 제거
    const cleaned = first.replace(/[\\/:*?"<>|]/g, '');
    // 공백을 '_'로 변경 및 앞뒤 공백 제거
    const t = cleaned.replace(/\s+/g, '_').trim();
    // Array.from을 이용해 안전하게 최대 20자 자르기
    const truncated = Array.from(t).slice(0, 20).join('');
    return truncated || '제목없음';
  }
  function makeFileName({text, ratio, format, date}) {
    const ext = format === 'jpeg' ? 'jpg' : 'png';
    return `zzal_${makeTitle(text)}_${String(ratio).replace(':', 'x')}_${fileStamp(date || new Date())}.${ext}`;
  }
  const api = {makeFileName, makeTitle, fileStamp};
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.ZzalFileName = api;
})(this);
