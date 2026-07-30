/**
 * Pick column/row counts closest to a square for `n` photos.
 * Prefers fewer empty cells when skew is equal.
 */
export function squareGridDims(n: number): { cols: number; rows: number } {
  if (n <= 0) return { cols: 1, rows: 1 };
  if (n === 1) return { cols: 1, rows: 1 };

  const root = Math.sqrt(n);
  let bestCols = Math.ceil(root);
  let bestScore = Number.POSITIVE_INFINITY;

  const min = Math.max(1, Math.floor(root) - 1);
  const max = Math.min(n, Math.ceil(root) + 2);

  for (let cols = min; cols <= max; cols++) {
    const rows = Math.ceil(n / cols);
    const empty = cols * rows - n;
    const skew = Math.abs(cols / rows - 1);
    // Prefer near-square, few empties, and wider-than-tall over tall-and-narrow.
    const score = skew * 10 + empty * 2 + (cols < rows ? 2 : 0);
    if (score < bestScore) {
      bestScore = score;
      bestCols = cols;
    }
  }

  return { cols: bestCols, rows: Math.ceil(n / bestCols) };
}

/** Chunk photos into rows for a near-square mosaic (last row may be shorter). */
export function chunkIntoSquareRows<T>(items: T[]): T[][] {
  const { cols } = squareGridDims(items.length);
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols));
  }
  return rows;
}
