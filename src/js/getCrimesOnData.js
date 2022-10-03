import names from "../../data/data/names.json" assert { type: "json" };
// for (const name of names) {
//
let lang;
// }
export function getCrimesOnData(arr) {
  const markup = arr.map((item) => {
    lang = String(window.navigator.language).split("-")[0];
    console.log(currentLang);
    if (item.affected_type) {
      const affectType = item.affected_type[0];
      console.log(affectType);

      const nameAffectType = names.lang.affected_type[affectType];
      const affectNumber = item.affected_number[0];
      return `<p>${affectNumber}</p><br><p>${nameAffectType}</p>`;
    }
    return ``;
  });
}
