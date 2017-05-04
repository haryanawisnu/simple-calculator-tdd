module.exports = {
  tambah: function(params1, params2) {
    return params1 + params2;
  },
  kurang: function(params1, params2) {
    return params1 - params2;
  },
  kali: function(params1, params2) {
    return params1 * params2;
  },
  bagi: function(params1, params2) {
    return params1 / params2;
  },
  pangkat: function(params1, params2) {
    return Math.pow(params1, params2);
  },
  akar: function(params1) {
    return Math.sqrt(params1);
  }
}
