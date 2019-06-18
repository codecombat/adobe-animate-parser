import CocoSchema from './CocoSchema'

import { getCurveBounds, getRectangleBounds } from '../../util/shapes'
import Rectangle from './Rectangle'

export default class Graphics extends CocoSchema {
    constructor (parent) {
        super()

        this.currentX = 0
        this.currentY = 0

        this.minX = Infinity
        this.minY = Infinity
        this.maxX = -1 * Infinity
        this.maxY = -1 * Infinity

        this.parent = parent
    }


    f (f) {
        this.cocoSchema.fc = f
        return this
    }

    s (s) {
        // TODO may be able to call this multiple times.  If so will need to have each
        // call to s() return a new object that collects the data on subsequent calls
        //
        // Collect each of these objects in an array on coco schema
        return this
    }

    decodePath (p) {
        try {
            this.decodingPath = true
            this.orignalDecodePath(p)
        } finally {
            this.decodingPath = false
        }

        return this;
    }

    orignalDecodePath (pathString) {
        const instructions = [ this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath ];
        const paramCount = [ 2, 2, 4, 6, 0 ];
        let i = 0, l = pathString.length;
        const params = [];
        const base64 = Graphics.BASE_64;
        let x = 0, y = 0;

        while (i < l) {
            const c = pathString.charAt(i);
            const n = base64[c];
            const fi = n >> 3; // highest order bits 1-3 code for operation.
            const f = instructions[fi];

            // check that we have a valid instruction & that the unused bits are empty:
            if (!f || (n&3)) { throw("bad path data (@"+i+"): "+c); }

            const pl = paramCount[fi];
            if (!fi) { x = y = 0; } // move operations reset the position.
            params.length = 0;
            i++;

            const charCount = (n >> 2 & 1) + 2;  // 4th header bit indicates number size for this operation.
            for (let p = 0; p < pl; p++) {
                let num = base64[pathString.charAt(i)];

                const sign = (num >> 5) ? -1 : 1;
                num = ((num & 31) << 6)|(base64[pathString.charAt(i+1)]);

                if (charCount == 3) { num = (num << 6)|(base64[pathString.charAt(i+2)]); }

                num = sign * num / 10;
                if (p % 2) { x = (num += x); }
                else { y = (num += y); }

                params[p] = num;
                i += charCount;
            }

            f.apply(this, params);
        }

        return this
    }

    p (p) {
        this.cocoSchema.p = p

        this.decodePath(p)
        return this
    }

    rf (...rf) {
        this.cocoSchema.rf = rf
        return this
    }

    lf (...lf) {
        this.cocoSchema.lf = lf
        return this
    }

    moveTo (x, y) {
        if (!this.decodingPath) {
            // Save to coco schema (not currently supported)
        }

        this.currentX = x
        this.currentY = y
    }

    lineTo (x, y) {
        if (!this.decodingPath) {
            // Save to coco schema (not currently supported)
        }

        this.processBoundingBox(
          getRectangleBounds(
            this.currentX, this.currentY,
            x, y
          )
        )

        this.currentX = x
        this.currentY = y
    }

    quadraticCurveTo (cpx, cpy, x, y) {
        const curveBounds = getCurveBounds(
          this.currentX, this.currentY,
          cpx, cpy,
          cpx, cpy,
          x, y
        )

        this.processBoundingBox(curveBounds)

        if (!this.decodingPath) {
            // Save to coco schema (not currently supported)
        }

        this.currentX = x
        this.currentY = y
    }

    bezierCurveTo (cp1x, cp1y, cp2x, cp2y, x, y) {
        const curveBounds = getCurveBounds(
          this.currentX, this.currentY,
          cp1x, cp1y,
          cp2x, cp2y,
          x, y
        )

        this.processBoundingBox(curveBounds)

        if (!this.decodingPath) {
            // Save to coco schema (not currently supported)
        }

        this.currentX = x
        this.currentY = y
    }

    closePath () {
        // Save to coco schema (not currently supported)
        // Also may want to reset currentX and currentY to zero

        if (this.parent) {
            const {
                minX,
                minY,
                maxX,
                maxY
            } = this

            if (minX === Infinity || minY === Infinity || maxX === -1 * Infinity || maxY === -1 * Infinity) {
                throw new Error('Unexpected bounds state')
            }

            this.parent.nominalBounds = new Rectangle(
              minX,
              minY,
              maxX - minX,
              maxY - minY
            )
        }
    }

    processBoundingBox(boundingBox) {
        const minX = boundingBox.x
        const minY = boundingBox.y

        const maxX = boundingBox.x + boundingBox.width
        const maxY = boundingBox.y + boundingBox.height

        this.minX = Math.min(this.minX, minX)
        this.minY = Math.min(this.minY, minY)

        this.maxX = Math.max(this.maxX, maxX)
        this.maxY = Math.max(this.maxY, maxY)
    }
}

Graphics.BASE_64 = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};
