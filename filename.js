// 저장 파일 이름 만들기 — 규칙: zzal_{제목}_{비율}_{시각}.{확장자}
(function (root) {
  const pad = n => String(n).padStart(2, '0');
  function fileStamp(d) {
    return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
  }
  function makeTitle(text) {
    const first = String(text || '').split('\n')[0].trim();
    // TODO(AI B): 금지 문자 \ / : * ? " < > | 제거, 최대 20자 자르기
    const t = first.replace(/\s+/g, '_');
    return t || '제목없음';
  }
  function makeFileName({text, ratio, format, date}) {
    const ext = format === 'jpeg' ? 'jpg' : 'png';
    return `zzal_${makeTitle(text)}_${String(ratio).replace(':', 'x')}_${fileStamp(date || new Date())}.${ext}`;
  }
  const api = {makeFileName, makeTitle, fileStamp};
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.ZzalFileName = api;
})(this);
