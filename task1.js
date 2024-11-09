import fs from "fs";

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }
  console.log("Ошибка при создании каталога:");
});

setTimeout(() => {
  fs.rmdir("myFolder", (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log("Каталог успешно удален");
  });
}, 5000);
