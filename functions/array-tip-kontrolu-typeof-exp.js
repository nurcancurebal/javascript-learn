getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }let array = [3, 5, 7, 9, 10, 'ghjklş'];

sumOfArrayItems(array);

function sumOfArrayItems(arrays) {

    let sum = 0;

    for (let index = 0; index < arrays.length; index++) {


        if (typeof arrays[index] != "number") {

            sum = "String ifade.";

        } else if (typeof arrays[index] == "number") {

            console.log(`number ${arrays[index]}`);
            sum += arrays[index];   // array' dekilerin hepsi number olunca toplamada yapıyor
        };
    };

    console.log(sum);
};