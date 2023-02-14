let args = process.argv.slice(2);
if (args.length === 0) {
  return false;
}
args.forEach((num, index) => {
  num = Number(num)
  if (Number.isNaN(num) || num < 0) {
    return false;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (num * index) + (num * 1000));
});