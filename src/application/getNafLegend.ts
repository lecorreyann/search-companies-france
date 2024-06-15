// read json file
import nafArray from "../common/naf";

// import file
// const fs = require("fs");
// const path = require("path");
// const nafJSON = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../common/naf.json"), "utf8")
// );

export default function getNafLegend(code: string): string | undefined {
  const now = new Date();
  // wait for 1 second
  const nafElement = nafArray.find(
    (naf: { code: string; legend: string }) => naf.code === code
  );
  if (nafElement) {
    const end = new Date();
    // console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
    return nafElement.legend;
  }
  const end = new Date();
  // console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
}

// export default function getNafLegend(code: string): string | undefined {
//   const now = new Date();
//   // wait for 1 second

//   const nafElement = nafJSON.find(
//     (naf: { code: string; legend: string }) => naf.code === code
//   );
//   if (nafElement) {
//     const end = new Date();
//     console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
//     return nafElement.legend;
//   }

//   const end = new Date();
//   console.log(`getNafLegend took ${end.getTime() - now.getTime()}ms`);
// }
