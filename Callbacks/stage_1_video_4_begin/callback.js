function executeCallback(callback) {
  callback();
}

executeCallback(function () {
  console.log('Hello');
});