//Extracting value from an array
function extractValue(array, key) {
  return array.reduce(function (acc, curr) {
    acc.push(curr[key]);
    return acc;
  }, []);
}

extractValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "name"
);

//Vowel count
function vowelCount(string) {
  const wovels = "aeoiu".split("");

  const arrayForm = string.toLowerCase().split("");

  return arrayForm.reduce(function (acc, curr) {
    if (wovels.indexOf(curr) !== -1) {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
    }
    return acc;
  }, {});
}

vowelCount("awesome");

//add key and value
function addKeyAndValue(array, key, value) {
  return array.reduce(function (acc, _, index) {
    acc[index][key] = value;

    return acc;
  }, array);
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "Intructor"
  )
);

//partition
function partition(array, callback) {
  return array.reduce(
    function (acc, curr) {
      if (callback(curr)) {
        acc[0].push(curr);
      } else {
        acc[1].push(curr);
      }
      return acc;
    },
    [[], []]
  );
}

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

console.log(
  partition(["Elie", "Colt", "Tim", "Matt"], isLongerThanThreeCharacters)
);
