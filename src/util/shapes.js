// x, y are upper left corner
// Taken from https://stackoverflow.com/a/13378980/827207
// A is start point D is end point
// Points b and c are control points 1 and 2
export function getCurveBounds(ax, ay, bx, by, cx, cy, dx, dy)
{
  var px, py, qx, qy, rx, ry, sx, sy, tx, ty,
    tobx, toby, tocx, tocy, todx, tody, toqx, toqy, torx, tory, totx, toty;
  var x, y, minx, miny, maxx, maxy;

  minx = miny = Number.POSITIVE_INFINITY;
  maxx = maxy = Number.NEGATIVE_INFINITY;

  tobx = bx - ax;  toby = by - ay;  // directions
  tocx = cx - bx;  tocy = cy - by;
  todx = dx - cx;  tody = dy - cy;
  var step = 1/40;      // precission
  for(var d=0; d<1.001; d+=step)
  {
    px = ax +d*tobx;  py = ay +d*toby;
    qx = bx +d*tocx;  qy = by +d*tocy;
    rx = cx +d*todx;  ry = cy +d*tody;
    toqx = qx - px;      toqy = qy - py;
    torx = rx - qx;      tory = ry - qy;

    sx = px +d*toqx;  sy = py +d*toqy;
    tx = qx +d*torx;  ty = qy +d*tory;
    totx = tx - sx;   toty = ty - sy;

    x = sx + d*totx;  y = sy + d*toty;

    minx = Math.min(minx, x); miny = Math.min(miny, y);
    maxx = Math.max(maxx, x); maxy = Math.max(maxy, y);
  }
  return {x:minx, y:miny, width:maxx-minx, height:maxy-miny};
}

export function getRectangleBounds (x1, y1, x2, y2) {
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),

    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  }
}
