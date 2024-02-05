const { check } = require("../http/userAPI");

check().catch(() => {
  window.location.replace(window.location.origin + '/admin/');
})