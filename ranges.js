const ranges = [
  { min:"0x1", max:"0x1", status: 1},
  { min:"0x2", max:"0x3", status: 1},
  { min:"0x4", max:"0x7", status: 1},
  { min:"0x8", max:"0xf", status: 1},
  { min:"0x10", max:"0x1f", status: 1},
  { min:"0x20", max:"0x3f", status: 1},
  { min:"0x40", max:"0x7f", status: 1},
  { min:"0x80", max:"0xff", status: 1},
  { min:"0x100", max:"0x1ff", status: 1},
  { min:"0x200", max:"0x3ff", status: 1},
  { min:"0x400", max:"0x7ff", status: 1},
  { min:"0x800", max:"0xfff", status: 1},
  { min:"0x1000", max:"0x1fff", status: 1},
  { min:"0x2000", max:"0x3fff", status: 1},
  { min:"0x4000", max:"0x7fff", status: 1},
  { min:"0x8000", max:"0xffff", status: 1},
  { min:"0x10000", max:"0x1ffff", status: 1},
  { min:"0x20000", max:"0x3ffff", status: 1},
  { min:"0x40000", max:"0x7ffff", status: 1},
  { min:"0x80000", max:"0xfffff", status: 1},
  { min:"0x100000", max:"0x1fffff", status: 1},
  { min:"0x200000", max:"0x3fffff", status: 1},
  { min:"0x400000", max:"0x7fffff", status: 1},
  { min:"0x800000", max:"0xffffff", status: 1},
  { min:"0x1000000", max:"0x1ffffff", status: 1},
  { min:"0x2000000", max:"0x3ffffff", status: 1}, 
  { min:"0x4000000", max:"0x7ffffff", status: 1},
  { min:"0x8000000", max:"0xfffffff", status: 1},
  { min:"0x10000000", max:"0x1fffffff", status: 1},
  { min:"0x20000000", max:"0x3fffffff", status: 1},
  { min:"0x40000000", max:"0x7fffffff", status: 1},
  { min:"0x80000000", max:"0xffffffff", status: 1},
  { min:"0x100000000", max:"0x1ffffffff", status: 1},
  { min:"0x200000000", max:"0x3ffffffff", status: 1},
  { min:"0x400000000", max:"0x7ffffffff", status: 1},
  { min:"0x800000000", max:"0xfffffffff", status: 1},
  { min:"0x1000000000", max:"0x1fffffffff", status: 1},
  { min:"0x2000000000", max:"0x3fffffffff", status: 1},
  { min:"0x4000000000", max:"0x7fffffffff", status: 1},
  { min:"0x8000000000", max:"0xffffffffff", status: 1},
  { min:"0x10000000000", max:"0x1ffffffffff", status: 1},
  { min:"0x20000000000", max:"0x3ffffffffff", status: 1},
  { min:"0x40000000000", max:"0x7ffffffffff", status: 1},
  { min:"0x80000000000", max:"0xfffffffffff", status: 1},
  { min:"0x100000000000", max:"0x1fffffffffff", status: 1},
  { min:"0x200000000000", max:"0x3fffffffffff", status: 1},
  { min:"0x400000000000", max:"0x7fffffffffff", status: 1},
  { min:"0x800000000000", max:"0xffffffffffff", status: 1},
  { min:"0x1000000000000", max:"0x1ffffffffffff", status: 1},
  { min:"0x2000000000000", max:"0x3ffffffffffff", status: 1},
  { min:"0x4000000000000", max:"0x7ffffffffffff", status: 1},
  { min:"0x8000000000000", max:"0xfffffffffffff", status: 1},
  { min:"0x10000000000000", max:"0x1fffffffffffff", status: 1},
  { min:"0x20000000000000", max:"0x3fffffffffffff", status: 1},
  { min:"0x40000000000000", max:"0x7fffffffffffff", status: 1},
  { min:"0x80000000000000", max:"0xffffffffffffff", status: 1},
  { min:"0x100000000000000", max:"0x1ffffffffffffff", status: 1},
  { min:"0x200000000000000", max:"0x3ffffffffffffff", status: 1},
  { min:"0x400000000000000", max:"0x7ffffffffffffff", status: 1},
  { min:"0x800000000000000", max:"0xfffffffffffffff", status: 1},
  { min:"0x1000000000000000", max:"0x1fffffffffffffff", status: 1},
  { min:"0x2000000000000000", max:"0x3fffffffffffffff", status: 1},
  { min:"0x4000000000000000", max:"0x7fffffffffffffff", status: 1},
  { min:"0x8000000000000000", max:"0xffffffffffffffff", status: 1},
  { min:"0x10000000000000000", max:"0x1ffffffffffffffff", status: 1},
  { min:"0x20000000000000000", max:"0x3ffffffffffffffff", status: 0},
  { min:"0x40000000000000000", max:"0x7ffffffffffffffff", status: 0},
  { min:"0x80000000000000000", max:"0xfffffffffffffffff", status: 0},
  { min:"0x100000000000000000", max:"0x1fffffffffffffffff", status: 0},
  { min:"0x200000000000000000", max:"0x3fffffffffffffffff", status: 1},
  { min:"0x400000000000000000", max:"0x7fffffffffffffffff", status: 0},
  { min:"0x800000000000000000", max:"0xffffffffffffffffff", status: 0},
  { min:"0x1000000000000000000", max:"0x1ffffffffffffffffff", status: 0},
  { min:"0x2000000000000000000", max:"0x3ffffffffffffffffff", status: 0},
  { min:"0x4000000000000000000", max:"0x7ffffffffffffffffff", status: 1},
  { min:"0x8000000000000000000", max:"0xfffffffffffffffffff", status: 0},
  { min:"0x10000000000000000000", max:"0x1fffffffffffffffffff", status: 0},
  { min:"0x20000000000000000000", max:"0x3fffffffffffffffffff", status: 0},
  { min:"0x40000000000000000000", max:"0x7fffffffffffffffffff", status: 0},
  { min:"0x80000000000000000000", max:"0xffffffffffffffffffff", status: 1},
  { min:"0x100000000000000000000", max:"0x1ffffffffffffffffffff", status: 0},
  { min:"0x200000000000000000000", max:"0x3ffffffffffffffffffff", status: 0},
  { min:"0x400000000000000000000", max:"0x7ffffffffffffffffffff", status: 0},
  { min:"0x800000000000000000000", max:"0xfffffffffffffffffffff", status: 0},
  { min:"0x1000000000000000000000", max:"0x1fffffffffffffffffffff", status: 1},
  { min:"0x2000000000000000000000", max:"0x3fffffffffffffffffffff", status: 0},
  { min:"0x4000000000000000000000", max:"0x7fffffffffffffffffffff", status: 0},
  { min:"0x8000000000000000000000", max:"0xffffffffffffffffffffff", status: 0},
  { min:"0x10000000000000000000000", max:"0x1ffffffffffffffffffffff", status: 0},
  { min:"0x20000000000000000000000", max:"0x3ffffffffffffffffffffff", status: 1},
  { min:"0x40000000000000000000000", max:"0x7ffffffffffffffffffffff", status: 0},
  { min:"0x80000000000000000000000", max:"0xfffffffffffffffffffffff", status: 0},
  { min:"0x100000000000000000000000", max:"0x1fffffffffffffffffffffff", status: 0},
  { min:"0x200000000000000000000000", max:"0x3fffffffffffffffffffffff", status: 0},
  { min:"0x400000000000000000000000", max:"0x7fffffffffffffffffffffff", status: 1},
  { min:"0x800000000000000000000000", max:"0xffffffffffffffffffffffff", status: 0},
  { min:"0x1000000000000000000000000", max:"0x1ffffffffffffffffffffffff", status: 0},
  { min:"0x2000000000000000000000000", max:"0x3ffffffffffffffffffffffff", status: 0},
  { min:"0x4000000000000000000000000", max:"0x7ffffffffffffffffffffffff", status: 0},
  { min:"0x8000000000000000000000000", max:"0xfffffffffffffffffffffffff", status: 1},
  { min:"0x10000000000000000000000000", max:"0x1fffffffffffffffffffffffff", status: 0},
  { min:"0x20000000000000000000000000", max:"0x3fffffffffffffffffffffffff", status: 0},
  { min:"0x40000000000000000000000000", max:"0x7fffffffffffffffffffffffff", status: 0},
  { min:"0x80000000000000000000000000", max:"0xffffffffffffffffffffffffff", status: 0},
  { min:"0x100000000000000000000000000", max:"0x1ffffffffffffffffffffffffff", status: 1},
  { min:"0x200000000000000000000000000", max:"0x3ffffffffffffffffffffffffff", status: 0},
  { min:"0x400000000000000000000000000", max:"0x7ffffffffffffffffffffffffff", status: 0},
  { min:"0x800000000000000000000000000", max:"0xfffffffffffffffffffffffffff", status: 0},
  { min:"0x1000000000000000000000000000", max:"0x1fffffffffffffffffffffffffff", status: 0},
  { min:"0x2000000000000000000000000000", max:"0x3fffffffffffffffffffffffffff", status: 1},
  { min:"0x4000000000000000000000000000", max:"0x7fffffffffffffffffffffffffff", status: 0},
  { min:"0x8000000000000000000000000000", max:"0xffffffffffffffffffffffffffff", status: 0},
  { min:"0x10000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffff", status: 0},
  { min:"0x20000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffff", status: 0},
  { min:"0x40000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffff", status: 1},
  { min:"0x80000000000000000000000000000", max:"0xfffffffffffffffffffffffffffff", status: 0},
  { min:"0x100000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffff", status: 0},
  { min:"0x200000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffff", status: 0},
  { min:"0x400000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffff", status: 0},
  { min:"0x800000000000000000000000000000", max:"0xffffffffffffffffffffffffffffff", status: 1},
  { min:"0x1000000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffffff", status: 0},
  { min:"0x2000000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffffff", status: 0},
  { min:"0x4000000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffffff", status: 0},
  { min:"0x8000000000000000000000000000000", max:"0xfffffffffffffffffffffffffffffff", status: 0},
  { min:"0x10000000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffffff", status: 1},
  { min:"0x20000000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffffff", status: 0},
  { min:"0x40000000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffffff", status: 0},
  { min:"0x80000000000000000000000000000000", max:"0xffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x100000000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x200000000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x400000000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x800000000000000000000000000000000", max:"0xfffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x1000000000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x2000000000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x4000000000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x8000000000000000000000000000000000", max:"0xffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x10000000000000000000000000000000000", max:"0x1ffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x20000000000000000000000000000000000", max:"0x3ffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x40000000000000000000000000000000000", max:"0x7ffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x80000000000000000000000000000000000", max:"0xfffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x100000000000000000000000000000000000", max:"0x1fffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x200000000000000000000000000000000000", max:"0x3fffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x400000000000000000000000000000000000", max:"0x7fffffffffffffffffffffffffffffffffff", status: 0},
  { min:"0x800000000000000000000000000000000000", max:"0xffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x1000000000000000000000000000000000000", max: "0x1ffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x2000000000000000000000000000000000000", max: "0x3ffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x4000000000000000000000000000000000000", max: "0x7ffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x8000000000000000000000000000000000000", max: "0xfffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x10000000000000000000000000000000000000", max: "0x1fffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x20000000000000000000000000000000000000", max: "0x3fffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x40000000000000000000000000000000000000", max: "0x7fffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x80000000000000000000000000000000000000", max: "0xffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x100000000000000000000000000000000000000", max: "0x1ffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x200000000000000000000000000000000000000", max: "0x3ffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x400000000000000000000000000000000000000", max: "0x7ffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x800000000000000000000000000000000000000", max: "0xfffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x1000000000000000000000000000000000000000", max: "0x1fffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x2000000000000000000000000000000000000000", max: "0x3fffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x4000000000000000000000000000000000000000", max: "0x7fffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0x8000000000000000000000000000000000000000", max: "0xffffffffffffffffffffffffffffffffffffffff", status: 0},
  { min: "0xC0DE000000000000000000000000000000000000000000003270000000000000", max: "0xC0DE00000000000000000000000000000000000000000000327fffffffffffff" , status: 0}

];

export default ranges;
