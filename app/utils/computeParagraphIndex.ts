function computeParagraphIndex(start: number = 0, pagebreaker: any) {
  pagebreaker = pagebreaker.filter((l) => !(l.start === 0));
  pagebreaker.sort((a, b) => a.start - b.start);
  let pagebreak = pagebreaker.find((value) => {
    return value.start + 1 > start;
  });
  let p_index = pagebreaker.indexOf(pagebreak);
  if (p_index === -1) {
    p_index = pagebreaker.length;
  }
  return p_index;
}

export { computeParagraphIndex };
