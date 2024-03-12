function pascalCaseSplitter(input) {
    let newString = input.match(/[A-Z][a-z]*|[a-z]+/g);
    console.log(newString.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')